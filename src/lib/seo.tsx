import { siteConfig } from "@/content/site";

interface ServiceItem {
    title: string;
    description: string;
}

interface FaqItem {
    question: string;
    answer: string;
}

export function OrganizationJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`, // Placeholder
        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            contactType: "customer service",
            email: siteConfig.contact.email,
        },
        sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function ServiceJsonLd({ services }: { services: ServiceItem[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "IT Consultation",
        provider: {
            "@type": "Organization",
            name: siteConfig.name,
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT Services",
            itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                },
            })),
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
