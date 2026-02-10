import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { diaries } from "@/content/diaries";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export async function generateStaticParams() {
    return diaries.map((diary) => ({
        slug: diary.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const diary = diaries.find((d) => d.slug === slug);
    if (!diary) return { title: "Article Not Found" };

    return {
        title: `${diary.title} | Knights Eye Technologies`,
        description: diary.excerpt,
    };
}

export default async function DiaryPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const diary = diaries.find((d) => d.slug === slug);

    if (!diary) {
        notFound();
    }

    return (
        <main>
            <Section className="pt-28 pb-12">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/client-diaries"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Diaries</Link>
                </Button>

                <article className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{diary.category}</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{diary.title}</h1>
                        <p className="text-xl text-muted-foreground mb-8">{diary.excerpt}</p>

                        <div className="flex items-center gap-6 border-y border-border/50 py-6">
                            <div className="flex items-center gap-3">
                                <Avatar className="ring-1 ring-primary/20">
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{diary.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">{diary.author}</p>
                                    <p className="text-xs text-muted-foreground">Author</p>
                                </div>
                            </div>
                            <div className="h-8 w-px bg-border/50" />
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{diary.date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        {diary.content.split('\n').map((line, i) => {
                            if (line.trim().startsWith('## ')) {
                                return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>
                            }
                            if (line.trim().startsWith('- **')) {
                                const cleanLine = line.replace('- **', '').replace('**:', ':');
                                return <li key={i} className="ml-4 list-disc mb-2">{cleanLine}</li>
                            }
                            if (line.trim().match(/^\d\./)) {
                                return <li key={i} className="ml-4 list-decimal mb-2">{line.replace(/^\d\./, '')}</li>
                            }
                            if (line.trim() === '') return null;
                            return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>
                        })}
                    </div>

                    <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 p-10 text-center">
                        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-white">Facing similar challenges?</h3>
                            <p className="text-white/70 mb-6 max-w-lg mx-auto">
                                Our team specializes in solving exact problems like this. Let&apos;s discuss your infrastructure.
                            </p>
                            <Button size="lg" variant="secondary" className="rounded-xl font-bold" asChild>
                                <Link href="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </article>
            </Section>
        </main>
    );
}
