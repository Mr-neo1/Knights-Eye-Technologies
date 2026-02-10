import { Section } from "@/components/layout/section";

export const metadata = {
    title: "Privacy Policy | Knights Eye Technologies",
    description: "Our privacy policy.",
};

export default function PrivacyPage() {
    return (
        <main>
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: February 2026</p>
                </div>
            </Section>
            <Section>
                <div className="prose dark:prose-invert max-w-3xl mx-auto">
                    <p>
                        At Knights Eye Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.
                    </p>
                    <h2>Collection of Information</h2>
                    <p>
                        We may collect information about you in a variety of ways. The information we may collect includes:
                    </p>
                    <ul>
                        <li>Personal Data: Name, email address, phone number.</li>
                        <li>Derivative Data: IP address, browser type, operating system.</li>
                    </ul>
                    <h2>Use of Your Information</h2>
                    <p>
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.
                    </p>
                    <h2>Contact</h2>
                    <p>
                        For any questions about this Privacy Policy, please contact us at support@knightseyetech.com.
                    </p>
                </div>
            </Section>
        </main>
    );
}
