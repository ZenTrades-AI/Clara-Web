import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Clara handle emergency calls?",
    answer: "Clara is trained to recognize urgency indicators and prioritizes emergency calls immediately. She can dispatch to your on-call technician, send urgent notifications, and ensure critical situations get immediate attention — 24/7."
  },
  {
    question: "Can Clara transfer to a human?",
    answer: "Yes, Clara can seamlessly transfer calls to your team when needed. She intelligently determines when human intervention is necessary and provides your team with full context from the conversation."
  },
  {
    question: "What happens if a caller requests a specific technician?",
    answer: "Clara accesses your team's schedules and can book with specific technicians based on availability. If the requested technician isn't available, she'll offer alternatives or schedule for when they're free."
  },
  {
    question: "Can Clara book through ServiceTitan?",
    answer: "Absolutely. Clara integrates directly with ServiceTitan, Jobber, Housecall Pro, and other major platforms. Jobs are automatically scheduled in your system with all customer details captured."
  },
  {
    question: "How accurate is Clara's intent detection?",
    answer: "Clara achieves 95%+ accuracy in understanding caller intent for trades-specific scenarios. She's trained on thousands of real service calls and continuously learns from your specific business patterns."
  },
  {
    question: "How fast is handoff during escalations?",
    answer: "Handoffs happen in under 3 seconds. When Clara determines a call needs human attention, she transfers immediately while providing your team with a real-time transcript and caller context."
  },
  {
    question: "What accents and languages are supported?",
    answer: "Clara understands various English accents (American, British, Australian, etc.) and can be configured for Spanish. We're continuously expanding language support based on customer needs."
  },
  {
    question: "Is data secure and encrypted?",
    answer: "Yes, all call data is encrypted end-to-end using industry-standard protocols. We're SOC 2 compliant and follow strict security practices to protect your customer information."
  },
  {
    question: "What's the average setup time?",
    answer: "Most teams go live within 2-3 days. This includes mapping your workflows, configuring Clara's responses, integrating with your systems, and training on your specific business processes."
  },
  {
    question: "Can Clara handle multiple locations?",
    answer: "Yes, Clara can manage multiple locations, each with their own schedules, service areas, and technician teams. She routes calls appropriately based on the caller's location and needs."
  }
];

const FAQ = () => {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about Clara Answers
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-border shadow-soft px-6 data-[state=open]:shadow-premium transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
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
