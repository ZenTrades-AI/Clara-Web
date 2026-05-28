import { ClipboardList, Users, Route, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Capture Job Details",
    description: "Clara captures all job requirements including urgency, location, and required skills.",
  },
  {
    number: 2,
    icon: Users,
    title: "Match to Technician",
    description: "Intelligently matches jobs based on technician skills, location, and real-time availability.",
  },
  {
    number: 3,
    icon: Route,
    title: "Optimize Routes",
    description: "Automatically optimizes the day's schedule to minimize travel time and maximize productivity.",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Sync & Confirm",
    description: "Updates your CRM and sends automatic confirmations to customers and technicians.",
  },
];

const DispatchFlow = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            How Clara Dispatch Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intelligent scheduling from job capture to technician assignment
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

export default DispatchFlow;
