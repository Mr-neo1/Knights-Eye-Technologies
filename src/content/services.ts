import { Server, ShieldCheck, Briefcase, Cpu } from "lucide-react";

export const services = [
    {
        title: "Network & System Administration",
        slug: "network-system-administration",
        description: "End-to-end network and system administration to keep your infrastructure secure, stable, and easy to manage.",
        longDescription:
            "We handle setup, hardening, monitoring, troubleshooting, and documentation across firewalls, routers/switches, servers, VPNs, access control, patching, and backups—focused on minimizing downtime and maximizing security.",
        icon: Server,
        features: [
            "Infrastructure Setup & Hardening",
            "24/7 Monitoring & Troubleshooting",
            "Firewall & VPN Management",
            "Backup & Disaster Recovery",
        ],
    },
    {
        title: "Project Management",
        slug: "project-management",
        description: "Reliable project management to keep your work moving on schedule and under control.",
        longDescription:
            "We handle planning, timelines, task tracking, stakeholder updates, meeting notes, and documentation—coordinating teams and vendors, removing blockers, and ensuring clear ownership from kickoff to delivery.",
        icon: Briefcase,
        features: [
            "Timeline & Resource Planning",
            "Stakeholder Communication",
            "Task Tracking & Optimization",
            "Vendor Coordination",
        ],
    },
    {
        title: "Information Security & Compliance",
        slug: "information-security-compliance",
        description: "Practical information security and compliance support to reduce risk and meet requirements.",
        longDescription:
            "We help with security assessments, policy and procedure creation, access control reviews, vendor risk checks, incident response planning, and remediation tracking—delivering security baked in, not bolted on.",
        icon: ShieldCheck,
        features: [
            "Security Assessments",
            "Compliance Policy Creation",
            "Access Control Reviews",
            "Incident Response Planning",
        ],
    },
    {
        title: "AI Apps & Integration",
        slug: "ai-apps-integration",
        description: "Build and integrate AI into your web/mobile apps: LLM chatbots, document processing, and workflows.",
        longDescription:
            "Includes API integration, secure deployment, monitoring/logging, and performance tuning for production-ready Dify and n8n-based AI agents (knowledge bases/RAG, tool integrations, and workflow automation).",
        icon: Cpu,
        features: [
            "LLM Chatbot Development",
            "RAG & Knowledge Base Setup",
            "Workflow Automation (n8n)",
            "Secure API Integration",
        ],
    },
];
