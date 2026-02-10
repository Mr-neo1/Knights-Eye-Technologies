"use client";

import { motion } from "framer-motion";
import { Cloud, Container, Cpu, Globe, Lock, Terminal } from "lucide-react";

const logos = [
    { name: "AWS", icon: Cloud, tagline: "Cloud Solutions" },
    { name: "Docker", icon: Container, tagline: "Containerization" },
    { name: "Linux", icon: Terminal, tagline: "Server Systems" },
    { name: "Cloudflare", icon: Globe, tagline: "CDN & Security" },
    { name: "OpenAI", icon: Cpu, tagline: "AI Integration" },
    { name: "Upwork", icon: Lock, tagline: "Top Rated Plus" },
];

export function TechLogos() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
                Technologies & Platforms We Trust
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {logos.map((logo, i) => {
                    const Icon = logo.icon;
                    return (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="flex flex-col items-center justify-center p-5 rounded-xl bg-card/30 border border-border/30 hover:border-primary/20 hover:bg-card/50 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mb-2 group-hover:bg-primary/15 transition-colors">
                                <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">{logo.name}</span>
                            <span className="text-[10px] text-muted-foreground mt-0.5">{logo.tagline}</span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
