import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Knights Eye Technologies`,
        description: project.description,
    };
}

export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <Section className="pt-28 pb-12">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects</Link>
                </Button>
                <div className="max-w-4xl mx-auto">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{project.industry}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{project.outcome}</span>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-border/50">
                        {project.image && project.image.startsWith("/") ? (
                            <Image src={project.image} alt={project.title} fill className="object-cover" />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground/50 text-sm">
                                {project.title}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 prose dark:prose-invert max-w-none">
                            {project.content.split('\n').map((line, i) => {
                                if (line.trim().startsWith('## ')) {
                                    return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>
                                }
                                if (line.trim().startsWith('- **')) {
                                    const cleanLine = line.replace('- **', '').replace('**:', ':');
                                    return <li key={i} className="ml-4 list-disc mb-2">{cleanLine}</li>
                                }
                                if (line.trim() === '') return null;
                                return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>
                            })}
                        </div>
                        <div className="lg:col-span-1 space-y-6">
                            <div className="rounded-2xl p-6 bg-card/50 backdrop-blur-sm border border-border/50">
                                <h3 className="font-bold mb-4">Services Provided</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.services.map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/10">{tag}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-card/50 backdrop-blur-sm border border-border/50">
                                <h3 className="font-bold mb-4">Client Outcome</h3>
                                <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
                            </div>

                            <Button size="lg" className="w-full rounded-xl" asChild>
                                <Link href="/contact">Start a Similar Project</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
