"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Server, Brain, Zap } from "lucide-react";

const floatingIcons = [
    { icon: Shield, x: "75%", y: "15%", delay: 0, size: 28 },
    { icon: Server, x: "85%", y: "45%", delay: 0.2, size: 24 },
    { icon: Brain, x: "65%", y: "70%", delay: 0.4, size: 32 },
    { icon: Zap, x: "90%", y: "75%", delay: 0.6, size: 20 },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-background pt-16">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Now Accepting New Projects
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
                        >
                            We build{" "}
                            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                secure, scalable
                            </span>{" "}
                            digital infrastructure.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
                        >
                            Email systems that actually land in inboxes. Servers that
                            don&apos;t go down. AI agents that work while you sleep.
                            Security that&apos;s baked in, not bolted on.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <Button size="lg" className="text-base px-8 h-12 rounded-xl shadow-lg shadow-primary/25" asChild>
                                <Link href="/contact">
                                    Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-base px-8 h-12 rounded-xl" asChild>
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <Shield className="w-4 h-4 text-green-500" />
                                </div>
                                <span>SOC 2 Ready</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-border" />
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <Server className="w-4 h-4 text-blue-500" />
                                </div>
                                <span>99.9% Uptime SLA</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-border" />
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                    <Zap className="w-4 h-4 text-purple-500" />
                                </div>
                                <span>Top Rated Plus</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Animated visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-primary/15 animate-[spin_25s_linear_infinite_reverse]" />
                            <div className="absolute inset-8 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />

                            {/* Center glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 backdrop-blur-sm flex items-center justify-center rotate-12">
                                        <Shield className="w-12 h-12 text-primary" />
                                    </div>
                                    <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl -z-10" />
                                </div>
                            </div>

                            {/* Floating icons */}
                            {floatingIcons.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + item.delay }}
                                        className="absolute"
                                        style={{ left: item.x, top: item.y }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur border border-border/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                            <IconComponent className="text-primary" style={{ width: item.size * 0.6, height: item.size * 0.6 }} />
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Connecting lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                <motion.line
                                    x1="200" y1="200" x2="300" y2="60"
                                    stroke="currentColor" strokeWidth="1" className="text-primary/15"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                />
                                <motion.line
                                    x1="200" y1="200" x2="340" y2="180"
                                    stroke="currentColor" strokeWidth="1" className="text-primary/15"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                />
                                <motion.line
                                    x1="200" y1="200" x2="260" y2="280"
                                    stroke="currentColor" strokeWidth="1" className="text-primary/15"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 1.4 }}
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}
