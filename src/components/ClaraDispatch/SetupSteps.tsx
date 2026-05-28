import { Search, Settings, Link2, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discover",
    description: "We analyze your dispatch workflows, technician skills, and service areas.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Configure",
    description: "Clara learns your routing preferences and scheduling priorities.",
  },
  {
    number: 3,
    icon: Link2,
    title: "Integrate",
    description: "Seamless connection to your CRM, calendar, and existing tools.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Go live in 3 days and watch efficiency improve automatically.",
  },
];

const SetupSteps = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Setup in 4 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch Clara Dispatch in under 3 days
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-primary shadow-card flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-card">
                    {step.number}
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
    </section>
  );
};

export default SetupSteps;
