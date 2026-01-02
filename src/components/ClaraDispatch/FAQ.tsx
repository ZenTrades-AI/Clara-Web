import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Clara Dispatch handle emergency jobs?",
    answer: "Clara automatically prioritizes emergency jobs based on urgency indicators and dispatches the nearest available qualified technician. The system can override scheduled appointments when true emergencies occur, ensuring critical situations get immediate attention."
  },
  {
    question: "Can Clara optimize routes for multiple jobs per day?",
    answer: "Yes. Clara Dispatch continuously optimizes technician routes throughout the day, minimizing travel time between jobs and maximizing the number of appointments each technician can complete. Routes are automatically adjusted when new jobs are added or circumstances change."
  },
  {
    question: "How does skill-based matching work?",
    answer: "Clara maintains a profile for each technician including certifications, specializations, equipment access, and experience levels. When a job comes in, Clara matches it to technicians who have the required skills and qualifications, ensuring the right person is assigned every time."
  },
  {
    question: "Does Clara Dispatch integrate with our CRM?",
    answer: "Yes, Clara Dispatch integrates with major platforms including ServiceTitan, Jobber, Housecall Pro, and others. All dispatch decisions, route changes, and job assignments are automatically synced to your existing systems in real-time."
  },
  {
    question: "What happens if a technician runs late?",
    answer: "Clara monitors job progress in real-time and automatically adjusts subsequent appointments when delays occur. Customers are notified of updated arrival times, and the dispatch schedule is re-optimized to minimize impact on the rest of the day."
  },
  {
    question: "Can we set custom dispatch rules?",
    answer: "Absolutely. Clara Dispatch can be configured with your specific business rules including preferred technician assignments, service area boundaries, overtime policies, and customer priority tiers. The system adapts to your unique operational requirements."
  },
  {
    question: "How does Clara handle multi-day jobs?",
    answer: "Clara tracks multi-day jobs and automatically reserves technician availability across all required dates. The system ensures continuity by assigning the same technician when possible and coordinates scheduling around these longer commitments."
  },
  {
    question: "What data does Clara use for dispatch decisions?",
    answer: "Clara considers real-time technician location, skill sets, current workload, historical performance data, job complexity, customer priority, service area coverage, and estimated travel times. All these factors are weighed to make optimal dispatch decisions."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Clara Dispatch
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border shadow-card px-6 data-[state=open]:shadow-premium transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
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
