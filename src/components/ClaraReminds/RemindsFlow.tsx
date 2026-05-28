import { ClipboardList, MessageSquare, Reply, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Capture Opportunities",
    description: "Clara listens to your CRM / job system for new quotes, open estimates, inspections due, and overdue jobs.",
  },
  {
    number: 2,
    icon: MessageSquare,
    title: "Reach Out Automatically",
    description: "Sends branded texts, emails, or calls with friendly check-ins and reminders.",
  },
  {
    number: 3,
    icon: Reply,
    title: "Handle Replies",
    description: "When customers respond, Clara can answer basic questions, update details, or route them to a human.",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Book the Job",
    description: "Converts warm intent into scheduled work, then updates your CRM and calendar.",
  },
];

const RemindsFlow = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            How Clara Reminds Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Automated follow-ups that convert warm leads into booked revenue
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-primary/20 -z-10" style={{ left: '10%', right: '10%' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-base font-bold mb-4 shadow-card">
                      {step.number}
                    </div>
                    <div className="w-20 h-20 rounded-full bg-primary text-white shadow-premium flex items-center justify-center">
                      <Icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemindsFlow;
