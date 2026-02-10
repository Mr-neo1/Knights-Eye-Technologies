import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    slug: string;
    industry: string;
    services: string[];
    image?: string;
    className?: string;
}

export function ProjectCard({ title, description, slug, industry, services, image, className }: ProjectCardProps) {
    return (
        <Card className={cn(
            "relative h-full flex flex-col group overflow-hidden transition-all duration-300",
            "bg-card/50 backdrop-blur-sm border-border/50",
            "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1",
            className
        )}>
            <div className="relative aspect-video w-full bg-muted overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-card to-primary/5 text-muted-foreground/30 text-xs uppercase tracking-widest font-medium">
                        {industry}
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur text-foreground font-medium">
                        {industry}
                    </Badge>
                </div>
            </div>
            <CardHeader className="p-6 pb-2">
                <Link href={`/projects/${slug}`} className="hover:underline decoration-primary transition-colors">
                    <h3 className="text-xl font-bold group-hover:text-primary">{title}</h3>
                </Link>
            </CardHeader>
            <CardContent className="p-6 pt-2 flex-1">
                <p className="text-muted-foreground line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {services.slice(0, 3).map((service) => (
                        <span key={service} className="text-xs text-primary/80 bg-primary/5 border border-primary/10 px-2 py-1 rounded-md">
                            {service}
                        </span>
                    ))}
                </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </Card>
    );
}
