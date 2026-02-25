"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative group"
                >
                    <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                        {/* Metric badge */}
                        <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold text-primary mb-4">
                            {t.metric}
                        </div>

                        <Quote className="w-6 h-6 text-primary/30 mb-3" />

                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                            &ldquo;{t.quote}&rdquo;
                        </p>

                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-medium">{t.author}</p>
                                <p className="text-xs text-muted-foreground">{t.company}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
