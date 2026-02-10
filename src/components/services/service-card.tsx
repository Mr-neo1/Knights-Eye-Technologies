import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href?: string;
    className?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
    return (
        <Card className={cn(
            "h-full flex flex-col transition-all duration-300",
            "bg-card/50 backdrop-blur-sm border-border/50",
            "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1",
            className
        )}>
            <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ring-1 ring-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
            {href && (
                <CardFooter>
                    <Button variant="ghost" className="p-0 hover:bg-transparent group" asChild>
                        <Link href={href} className="flex items-center text-primary font-medium">
                            Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
}
