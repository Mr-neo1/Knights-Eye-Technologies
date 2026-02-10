import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { diaries } from "@/content/diaries";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Client Diaries | Knights Eye Technologies",
    description: "Insights, lessons learned, and technical advice from our projects.",
};

export default function DiariesPage() {
    return (
        <main>
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                        Insights & Articles
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Diaries</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Technical deep dives and lessons learned from the trenches of infrastructure and AI.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {diaries.map((diary) => (
                        <Card key={diary.slug} className={cn(
                            "flex flex-col h-full group transition-all duration-300",
                            "bg-card/50 backdrop-blur-sm border-border/50",
                            "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
                        )}>
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                                        {diary.category}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> {diary.date}
                                    </span>
                                </div>
                                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                                    {diary.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription className="line-clamp-3 text-muted-foreground/80">
                                    {diary.excerpt}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="p-0 h-auto font-semibold text-primary" asChild>
                                    <Link href={`/client-diaries/${diary.slug}`} className="flex items-center">
                                        Read Article <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>
        </main>
    );
}
