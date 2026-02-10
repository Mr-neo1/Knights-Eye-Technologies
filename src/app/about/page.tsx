import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, Cpu, Eye, Users } from "lucide-react";

export const metadata = {
    title: "About Us | Knights Eye Technologies",
    description: "Learn about our mission to deliver reliable email infrastructure and AI solutions.",
};

const values = [
    {
        icon: Shield,
        title: "Security First",
        description: "We don't treat security as an afterthought. It's baked into every line of code and every server configuration.",
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20",
    },
    {
        icon: Eye,
        title: "Reliability",
        description: "We build systems that stay up. Our monitoring and alerting ensure we know about issues before you do.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
    },
    {
        icon: Users,
        title: "Transparency",
        description: "No hidden fees, no black-box solutions. We document everything and hand over the keys upon completion.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
    },
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                        About Us
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Knights Eye Technologies</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A team of engineers dedicated to solving the hard problems in infrastructure and automation.
                    </p>
                </div>
            </Section>

            {/* Story */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Knights Eye Technologies LLP was founded with a simple premise: technology should work for you, not against you.
                            </p>
                            <p>
                                We started by fixing broken email systems for businesses that were losing money due to spam filters. We quickly realized that the same principles of reliability and security applied to the emerging world of AI.
                            </p>
                            <p>
                                Today, we help organizations of all sizes build robust infrastructure and deploy intelligent agents that actually deliver value.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-card/50 border border-border/50 text-center">
                                <div className="text-2xl font-bold text-primary">50+</div>
                                <div className="text-xs text-muted-foreground">Projects</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card/50 border border-border/50 text-center">
                                <div className="text-2xl font-bold text-primary">99.9%</div>
                                <div className="text-xs text-muted-foreground">Uptime</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card/50 border border-border/50 text-center">
                                <div className="text-2xl font-bold text-primary">24/7</div>
                                <div className="text-xs text-muted-foreground">Support</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-border/50 flex items-center justify-center overflow-hidden">
                            {/* Decorative visual instead of placeholder text */}
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center rotate-12">
                                        <Cpu className="w-10 h-10 text-primary" />
                                    </div>
                                </div>
                                <div className="absolute top-[20%] left-[20%] w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center -rotate-6">
                                    <Shield className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="absolute bottom-[25%] right-[20%] w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center rotate-12">
                                    <Eye className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section className="bg-secondary/5">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
                        Our Principles
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div key={index} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-xl ${value.bg} border ${value.border} flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${value.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 p-12 md:p-16 text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to work with us?</h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                            Let&apos;s build something secure, scalable, and built to last.
                        </p>
                        <Button size="lg" variant="secondary" className="text-primary font-bold rounded-xl px-8 h-12 shadow-lg" asChild>
                            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
