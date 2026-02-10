"use client";

import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Discovery & Audit",
        description: "Deep dive into your infrastructure—security, performance, and workflows—to identify bottlenecks and risks.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
    },
    {
        icon: Lightbulb,
        title: "Strategy & Architecture",
        description: "A roadmap and technical architecture that solves immediate pain points while preparing for future scale.",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
    },
    {
        icon: Rocket,
        title: "Execution & Implementation",
        description: "Configuring servers, setting up email systems, or building AI agents—with minimal disruption to your ops.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
    },
    {
        icon: CheckCircle,
        title: "Testing & Handover",
        description: "Rigorous testing ensures reliability. Detailed documentation and training so your team owns the system.",
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20",
    },
];

export function ProcessTimeline() {
    return (
        <Section className="bg-secondary/10 overflow-hidden">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
                    Our Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver Results</h2>
                <p className="text-muted-foreground text-lg">
                    A transparent, step-by-step process designed to deliver results without the chaos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                                {/* Step number */}
                                <div className="absolute top-4 right-4 text-4xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors">
                                    0{index + 1}
                                </div>

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${step.color}`} />
                                </div>

                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                                {/* Connecting arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent" />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
