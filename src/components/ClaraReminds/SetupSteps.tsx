import { Search, Settings, Link2, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discover",
    description: "We analyze your follow-up workflows and identify key reminder opportunities.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Configure",
    description: "Clara learns your follow-up cadence, tone, and business priorities.",
  },
  {
    number: 3,
    icon: Link2,
    title: "Integrate",
    description: "Seamless connection to your CRM, calendar, and communication tools.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Go live in under 3 days and start converting more leads automatically.",
  },
];

const SetupSteps = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Setup in 4 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch Clara Reminds in under 3 days with zero hassle
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

export default SetupSteps;
