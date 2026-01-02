import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Clara know which invoices are overdue?",
    answer: "Clara connects directly to your invoicing or CRM system and monitors payment due dates. When an invoice becomes overdue, Clara automatically begins the reminder sequence based on your configured rules.",
  },
  {
    question: "Will customers find the reminders annoying?",
    answer: "No! Clara's messages are friendly, professional, and branded to match your company's tone. They include helpful information like payment links and amounts, making it easy for customers to pay quickly.",
  },
  {
    question: "What if a customer says they already paid?",
    answer: "Clara can handle common responses, confirm payment details, and automatically flag the account for your team to verify. All conversations are logged in your system for full transparency.",
  },
  {
    question: "Can I customize the collection schedule?",
    answer: "Absolutely! You control when reminders are sent (e.g., 3 days past due, 7 days, 14 days), the message tone, and when to escalate to human intervention.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most teams are live in under 3 days. We handle the integration, configure your collection workflow, and train Clara on your specific billing patterns.",
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
            Everything you need to know about Clara Collects
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
