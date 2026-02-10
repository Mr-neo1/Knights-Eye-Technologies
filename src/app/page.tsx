import { Hero } from "@/components/home/hero";
import { ServiceCard } from "@/components/services/service-card";
import { ProjectCard } from "@/components/projects/project-card";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Testimonials } from "@/components/home/testimonials";
import { TechLogos } from "@/components/home/tech-logos";
import { FAQAccordion } from "@/components/faq-accordion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle, Zap, TrendingUp } from "lucide-react";

import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { faqs } from "@/content/faqs";
import { FaqJsonLd } from "@/lib/seo";

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);
  const generalFaqs = faqs.filter(f => f.category === "General" || f.category === "Security").slice(0, 6);

  return (
    <main className="min-h-screen">
      <FaqJsonLd faqs={generalFaqs} />
      <Hero />

      {/* Stats Bar */}
      <Section className="!py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "99.9%", label: "Uptime SLA", icon: Shield, color: "text-green-400" },
            { value: "50+", label: "Projects Delivered", icon: CheckCircle, color: "text-blue-400" },
            { value: "3x", label: "Faster Deployment", icon: Zap, color: "text-amber-400" },
            { value: "100%", label: "Security Score", icon: TrendingUp, color: "text-purple-400" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
              <div className={`w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Logos */}
      <Section className="!py-12">
        <TechLogos />
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-secondary/5">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground text-lg">
            Specialized services to keep your business secure, efficient, and ahead of the curve.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={`/services`}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="rounded-xl" asChild>
            <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* Process Section */}
      <ProcessTimeline />

      {/* Projects Section */}
      <Section id="projects">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg">
            Real results for real businesses. From infrastructure scaling to AI automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="rounded-xl" asChild>
            <Link href="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-secondary/5">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
            Client Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it—here are the results.
          </p>
        </div>
        <Testimonials />
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 p-12 md:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to streamline your operations?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Whether you need to fix email deliverability, harden your servers, or build an AI agent—we&apos;re here to help. Book a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary font-bold rounded-xl px-8 h-12 shadow-lg" asChild>
                <Link href="/contact">Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white/20 border hover:bg-white/10 rounded-xl px-8 h-12" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-secondary/5">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about working with us.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={generalFaqs} />
        </div>
      </Section>
    </main>
  );
}
