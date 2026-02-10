import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
