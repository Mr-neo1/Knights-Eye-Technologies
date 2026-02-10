export const diaries = [
    {
        slug: "email-deliverability-101",
        title: "Why Your Emails End Up in Spam (And How to Fix It)",
        date: "2024-02-10",
        excerpt: "A deep dive into SPF, DKIM, and DMARC. Learn why technical configuration is the backbone of successful email marketing.",
        author: "Principal Engineer",
        category: "Email Infrastructure",
        content: `
      ## The Invisible Wall
      You craft the perfect email, but nobody opens it. Why? Because it never reached their inbox.
      
      ## The Technical Trio
      - **SPF (Sender Policy Framework)**: Who is allowed to send emails on your behalf?
      - **DKIM (DomainKeys Identified Mail)**: Is the email actually from you, and hasn't it been tampered with?
      - **DMARC**: What should happen if the first two checks fail?
      
      ## Our Approach
      We don't just set these records; we monitor them.
    `,
    },
    {
        slug: "ai-agents-production-guide",
        title: "Moving AI Agents from Prototype to Production",
        date: "2024-01-25",
        excerpt: "It's easy to build a demo. It's hard to build a reliable system. Here is our checklist for production-ready AI.",
        author: "AI Lead",
        category: "AI & Automation",
        content: `
      ## The "Demo" Trap
      Prototypes are forgiving. Production is not.
      
      ## Key Considerations
      1. **Rate Limiting & Cost Control**: Don't let an infinite loop bankrupt you.
      2. **Hallucination Guardrails**: How to verify the AI's output before the user sees it.
      3. **Latency**: Users won't wait 10 seconds for a "hello".
    `,
    },
    {
        slug: "server-security-basics",
        title: "5 Server Security Settings We Change Immediately",
        date: "2024-01-15",
        excerpt: "Default settings are often insecure. Here are the first 5 things we change on any new server deployment.",
        author: "SysAdmin",
        category: "Security",
        content: `
      ## 1. Disable Root Login
      Never log in as root. Always use a sudo user.
      
      ## 2. SSH Keys Only
      Disable password authentication for SSH.
      
      ## 3. Configure UFW (Firewall)
      Deny incoming by default. Allow only what's necessary.
    `,
    },
];
