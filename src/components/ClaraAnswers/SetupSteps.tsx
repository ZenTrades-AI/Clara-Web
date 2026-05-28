import { Search, Settings, Link2, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discover",
    description: "We map your call flows, job types, and tone of voice.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Configure",
    description: "We build your AI receptionist tailored to your industry.",
  },
  {
    number: 3,
    icon: Link2,
    title: "Integrate",
    description: "Connects to your CRM, calendar, and phone system.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Launch & Grow",
    description: "Go live in under 3 days — then scale with automation.",
  },
];

const SetupSteps = () => {
  return (
    <section className="py-32 px-4 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Setup in 4 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Launch in under 3 days with zero hassle
          </p>
        </div>
        
        {/* Steps grid */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-primary/20 -z-10" style={{ left: '10%', right: '10%' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="relative inline-flex flex-col items-center mb-6">
                    {/* Number badge above icon */}
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-base font-bold mb-4 shadow-card">
                      {step.number}
                    </div>
                    {/* Icon circle */}
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

export default SetupSteps;
