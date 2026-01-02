import { Phone, MessageSquare, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Answers Instinctively",
    description: "Human-sounding voice trained for trades. No robotic feel.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Qualifies Naturally",
    description: "Understands repair vs install vs inspection vs emergency with industry-specific accuracy.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Books Automatically",
    description: "Schedules jobs inside your CRM or calendar.",
  },
];

const ClaraFlow = () => {
  return (
    <section className="py-32 px-4 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            The Clara Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From first ring to booked job — in under 90 seconds
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20" style={{ width: "calc(100% - 10rem)", margin: "0 5rem" }} />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number badge */}
                <div className="relative flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-premium relative z-10">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClaraFlow;
