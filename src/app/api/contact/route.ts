import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return true;
    }

    record.count++;
    return false;
}

// Define the expected schema for incoming data
const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email().max(254),
    message: z.string().min(10).max(5000),
});

// Sanitize string to prevent email header injection
function sanitize(str: string): string {
    return str.replace(/[\r\n]/g, " ").trim();
}

export async function POST(req: Request) {
    try {
        // Rate limiting by IP
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                   req.headers.get("x-real-ip") || 
                   "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await req.json();

        // Validate request body
        const parsed = contactSchema.parse(body);
        const name = sanitize(parsed.name);
        const email = sanitize(parsed.email);
        const message = parsed.message.trim();

        // Ensure API key is configured - development mode fallback
        if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY is missing. Simulating successful submission for development.");
            console.log("--- SIMULATED EMAIL ---");
            console.log(`From: ${name} <${email}>`);
            console.log(`Message: ${message}`);
            console.log("--- END ---");
            return NextResponse.json(
                { message: "Development mode: Email simulated successfully." },
                { status: 200 }
            );
        }

        // Initialize Resend lazily to avoid crash when API key is missing
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email using Resend
        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>",
            to: process.env.RESEND_TO_EMAIL || "contact@knightseye.com",
            replyTo: email,
            subject: `New Contact Inquiry from ${name}`,
            text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return NextResponse.json({ error: "Failed to send message." }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        console.error("Contact Form Error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
