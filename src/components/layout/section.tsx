import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    classNameContainer?: string;
}

export const Section = ({ children, className, id, classNameContainer }: SectionProps) => {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)}>
            <div className={cn("container px-4 md:px-6 mx-auto", classNameContainer)}>
                {children}
            </div>
        </section>
    );
};
