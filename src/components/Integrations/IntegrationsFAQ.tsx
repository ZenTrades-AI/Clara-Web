import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How secure is the API integration?",
        answer: "Clara uses enterprise-grade encryption and follows SOC 2 compliance standards. All credentials are stored securely, and we only request the minimum permissions needed for Clara to function.",
    },
    {
        question: "How long does integration setup take?",
        answer: "Most integrations can be configured in 30-60 minutes. Our Forward Deployed Engineers guide you through the process and help customize workflows to match your business needs.",
    },
    {
        question: "Do I need special permissions or admin access?",
        answer: "Yes, you'll need admin-level access to your platform to create API credentials. For platforms like ServiceTrade, we recommend creating a dedicated office user (free) for the Clara integration.",
    },
    {
        question: "Can Clara work with multiple systems at once?",
        answer: "Absolutely. Clara can integrate with your CRM, accounting software, and scheduling platform simultaneously — creating a unified AI layer across all your tools.",
    },
    {
        question: "What if my platform isn't listed here?",
        answer: "We're constantly adding new integrations. Contact our team to discuss your specific platform — we may already have it in development or can prioritize it based on customer demand.",
    },
    {
        question: "Who manages the integration after setup?",
        answer: "Once configured, the integration runs automatically. Your team retains full control through the Clara dashboard, and our support team is available 24/7 for any issues.",
    },
];

const IntegrationsFAQ = () => {
    return (
        <section className="py-20 px-6 bg-light-gray-bg">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Integration FAQs
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Common questions about how Clara connects with your existing tools
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-card border border-border rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default IntegrationsFAQ;
