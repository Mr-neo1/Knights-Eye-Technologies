import { Section } from "@/components/layout/section";
import { team } from "@/content/team";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Team | Knights Eye Technologies",
    description: "Meet the experts behind our infrastructure and AI solutions.",
};

export default function TeamPage() {
    return (
        <main>
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                        Our People
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">The Team</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A distributed team of experts passionate about clean code and reliable systems.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mx-auto mb-6">
                                <Avatar className="h-24 w-24 mx-auto ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback className="text-lg bg-primary/10 text-primary font-bold">
                                        {member.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                            <div className="flex justify-center gap-3">
                                {member.social.linkedin && (
                                    <Link
                                        href={member.social.linkedin}
                                        className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </Link>
                                )}
                                {member.social.twitter && (
                                    <Link
                                        href={member.social.twitter}
                                        className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all"
                                    >
                                        <Twitter className="h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
