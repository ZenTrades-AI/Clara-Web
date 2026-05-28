import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Clara know when to send reminders?",
    answer: "Clara connects to your CRM or job management system and monitors quotes, estimates, and scheduled work. Based on your configured rules (e.g., follow up 3 days after a quote is sent), Clara automatically reaches out at the right time.",
  },
  {
    question: "Can I customize the reminder messages?",
    answer: "Yes! Every message is fully customizable to match your brand voice, and you can set different templates for different types of follow-ups (quotes, inspections, recalls, etc.).",
  },
  {
    question: "What if a customer responds to Clara's reminder?",
    answer: "Clara can handle basic responses like confirming interest, answering questions about dates or pricing, or routing the conversation to your team if it requires human attention.",
  },
  {
    question: "Does Clara work with my existing CRM?",
    answer: "Clara integrates with most major field service platforms including ServiceTitan, Housecall Pro, Jobber, ServiceM8, and more. We also support custom integrations via Zapier or API.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most teams are live in under 3 days. We handle the technical integration, configure your reminder rules, and train Clara on your specific workflow.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Clara Reminds
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

export default FAQ;
