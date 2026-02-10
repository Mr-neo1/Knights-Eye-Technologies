import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/content/site";
import { Mail, MapPin, Phone, ArrowRight, Clock, MessageSquare, FileText } from "lucide-react";

export const metadata = {
    title: "Contact Us | Knights Eye Technologies",
    description: "Get in touch with our team to discuss your project.",
};

export default function ContactPage() {
    return (
        <main>
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                        Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Talk</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you have a specific project in mind or just want to explore what&apos;s possible, we&apos;re here to help.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                        <div className="p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        {[
                            { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                            { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                            { icon: MapPin, label: "Office", value: siteConfig.contact.address, href: undefined },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{item.label}</h3>
                                    {item.href ? (
                                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-muted-foreground">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* What happens next */}
                        <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 mt-6">
                            <h3 className="font-bold mb-4 text-lg">What happens next?</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Clock, step: "1", text: "We'll review your message within 24 hours." },
                                    { icon: MessageSquare, step: "2", text: "We'll schedule a discovery call to understand your needs." },
                                    { icon: FileText, step: "3", text: "We'll provide a proposal and roadmap for your project." },
                                ].map((item) => (
                                    <div key={item.step} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                                            {item.step}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed pt-1.5">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
