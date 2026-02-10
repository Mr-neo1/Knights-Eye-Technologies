import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export const metadata = {
    title: "Our Work | Knights Eye Technologies",
    description: "Case studies of our successful projects in infrastructure, security, and AI.",
};

export default function ProjectsPage() {
    return (
        <main>
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                        Case Studies
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        See how we&apos;ve helped companies scale, secure, and automate their operations.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            industry={project.industry}
                            services={project.services}
                            image={project.image}
                        />
                    ))}
                </div>
            </Section>
        </main>
    );
}
