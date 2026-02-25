import { Search, Lightbulb, Rocket, CheckCircle, LucideIcon } from "lucide-react";

export interface ProcessStep {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    bg: string;
    border: string;
}

export const processSteps: ProcessStep[] = [
    {
        icon: Search,
        title: "Discovery & Audit",
        description: "Deep dive into your infrastructure—security, performance, and workflows—to identify bottlenecks and risks.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
    },
    {
        icon: Lightbulb,
        title: "Strategy & Architecture",
        description: "A roadmap and technical architecture that solves immediate pain points while preparing for future scale.",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
    },
    {
        icon: Rocket,
        title: "Execution & Implementation",
        description: "Configuring servers, setting up email systems, or building AI agents—with minimal disruption to your ops.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
    },
    {
        icon: CheckCircle,
        title: "Testing & Handover",
        description: "Rigorous testing ensures reliability. Detailed documentation and training so your team owns the system.",
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20",
    },
];
