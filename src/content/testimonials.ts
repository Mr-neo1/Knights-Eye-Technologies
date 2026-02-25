export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    metric: string;
}

export const testimonials: Testimonial[] = [
    {
        quote: "Knights Eye completely transformed our email infrastructure. Our deliverability went from 72% to 99.1% in just three weeks.",
        author: "Marketing Director",
        company: "SaaS Startup",
        metric: "99.1% deliverability",
    },
    {
        quote: "Their AI agent setup cut our customer response time from hours to seconds. The ROI was immediate and measurable.",
        author: "Operations Lead",
        company: "E-Commerce Brand",
        metric: "10x faster responses",
    },
    {
        quote: "After the security audit, we passed our SOC 2 compliance on the first attempt. Professional, thorough, and reliable.",
        author: "CTO",
        company: "FinTech Company",
        metric: "First-pass SOC 2",
    },
];
