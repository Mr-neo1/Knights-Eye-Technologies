export const projects = [
  {
    slug: "infrastructure-scaling-fintech",
    title: "Ongoing Server Management & Email Integration",
    description: "End-to-end server management (Hetzner & NetShop) and Mailcow/CRM integration for high-volume email delivery.",
    client: "FinTech Client",
    industry: "Finance",
    services: ["System Admin", "Email Infrastructure"],
    year: "2024",
    outcome: "Achieved 99.99% uptime and improved email deliverability score to 98/100.",
    image: "",
    content: `
      ## The Challenge
      The client struggled with inconsistent server performance and poor email deliverability rates, affecting their customer communication and operational efficiency.
      
      ## The Solution
      We implemented a robust server architecture using Hetzner and NetShop, hardened for security. We deployed Mailcow for email management and integrated it seamlessly with their CRM.
      
      ## Results
      - **99.99% Uptime**: Stabilized infrastructure reducing downtime to near zero.
      - **98/100 Deliverability**: Optimized SPF/DKIM/DMARC records ensuring emails hit the inbox.
      - **Automated Backups**: Implemented daily off-site backups for disaster recovery.
    `,
  },
  {
    slug: "ai-support-agent-saas",
    title: "AI Customer Support Agent",
    description: "Built a RAG-based AI agent using Dify to automate 40% of level-1 support tickets.",
    client: "SaaS Startup",
    industry: "SaaS",
    services: ["AI Apps", "Automation"],
    year: "2023",
    outcome: "Reduced support ticket volume by 40% and improved response time to under 1 minute.",
    image: "",
    content: `
      ## The Challenge
      The support team was overwhelmed with repetitive queries, leading to slow response times and team burnout.
      
      ## The Solution
      We developed a custom AI agent using Dify and n8n, trained on the company's knowledge base. The agent handles common inquiries and escalates complex issues to human agents.
      
      ## Results
      - **40% Reduction** in manual tickets.
      - **24/7 Availability** for customer support.
      - **Instant Responses** for common questions.
    `,
  },
  {
    slug: "secure-network-healthcare",
    title: "Healthcare Network Hardening",
    description: "Comprehensive network security overhaul for a healthcare provider to meet HIPAA compliance.",
    client: "HealthPlus",
    industry: "Healthcare",
    services: ["Security", "Compliance"],
    year: "2023",
    outcome: "Passed external security audit with zero critical vulnerabilities and achieved full HIPAA compliance.",
    image: "",
    content: `
      ## The Challenge
      The client needed to upgrade their legacy network infrastructure to meet strict new compliance standards.
      
      ## The Solution
      We conducted a full security audit, implemented network segmentation, deployed next-gen firewalls, and established strict access controls.
      
      ## Results
      - **Failed to Passed** security audit in 3 months.
      - **Zero Critical Vulnerabilities** found in post-deployment pen test.
      - **Streamlined Workflow** for secure remote access.
    `,
  },
];
