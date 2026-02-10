import { Section } from "@/components/layout/section";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ServiceJsonLd } from "@/lib/seo";

export const metadata = {
    title: "Our Services | Knights Eye Technologies",
    description: "Comprehensive IT services: Network Admin, Project Management, Security, and AI.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServiceJsonLd services={services} />

            {/* Hero */}
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                        What We Do
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Specialized technical services designed for growth and stability. Every solution is tailored, secure, and built to scale.
                    </p>
                </div>
            </Section>

            {/* Services Grid */}
            <Section>
                <div className="grid grid-cols-1 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                id={service.slug}
                                className="group grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-10 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className={`lg:col-span-2 ${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ring-1 ring-primary/20">
                                        <Icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h2>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                                    <Button className="rounded-xl" asChild>
                                        <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </div>
                                <div className={`lg:col-span-3 ${!isEven ? 'lg:order-1' : ''}`}>
                                    <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                                        <span className="w-8 h-px bg-primary/50" />
                                        What we deliver
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.longDescription}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {service.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30">
                                                <div className="bg-green-500/10 p-1 rounded-full mt-0.5 flex-shrink-0">
                                                    <Check className="h-3.5 w-3.5 text-green-500" />
                                                </div>
                                                <span className="text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Need a custom solution?</h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                            Let&apos;s discuss your specific requirements and build something that scales.
                        </p>
                        <Button size="lg" variant="secondary" className="text-primary font-bold rounded-xl px-8 h-12 shadow-lg" asChild>
                            <Link href="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
