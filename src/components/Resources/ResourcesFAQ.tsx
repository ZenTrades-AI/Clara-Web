import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What happens if Clara can't handle a call?",
        answer: "Clara is designed to handle 95%+ of calls autonomously. For complex situations or when explicitly requested, Clara seamlessly transfers to your team with full context and conversation history.",
    },
    {
        question: "How quickly can we get started with Clara?",
        answer: "Most businesses are live within 3-5 business days. We handle the technical integration, configure Clara to your workflow, and provide comprehensive training.",
    },
    {
        question: "Does Clara integrate with our existing tools?",
        answer: "Yes! Clara integrates with major platforms including ServiceTitan, Housecall Pro, Jobber, ServiceM8, FieldEdge, and more. We also support custom integrations via API.",
    },
    {
        question: "What's the typical ROI timeline?",
        answer: "Most businesses see positive ROI within 30 days through increased job bookings, reduced missed calls, and improved operational efficiency.",
    },
    {
        question: "How does Clara ensure data security?",
        answer: "Clara uses enterprise-grade encryption, SOC 2 Type II compliance, and follows industry best practices for data protection. All customer data is encrypted at rest and in transit.",
    },
    {
        question: "Can Clara handle multiple locations?",
        answer: "Absolutely. Clara can manage calls and dispatch for businesses with multiple locations, providing location-specific routing and responses.",
    },
    {
        question: "What kind of support do you provide?",
        answer: "We offer 24/7 technical support, dedicated account management, and ongoing optimization to ensure Clara continues to improve your business operations.",
    },
    {
        question: "How accurate is Clara's call handling?",
        answer: "Clara achieves 98%+ accuracy in call understanding and routing, continuously improving through machine learning and feedback loops.",
    },
];

const ResourcesFAQ = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get answers to common questions about Clara AI
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-card rounded-xl border border-border shadow-card px-6 data-[state=open]:shadow-premium transition-all"
                        >
                            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default ResourcesFAQ;
