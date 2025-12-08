import { Zap, BarChart3, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Shorter Payment Cycles",
    description: "Get paid faster without hiring more staff or spending hours on the phone.",
  },
  {
    icon: BarChart3,
    title: "Cleaner A/R Aging Reports",
    description: "Automated follow-ups mean fewer invoices sitting in 60+ day buckets.",
  },
  {
    icon: Users,
    title: "Customers Feel Nudged, Not Harassed",
    description: "Friendly, professional reminders that maintain your brand reputation.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            The Benefits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Improve cash flow without damaging customer relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-premium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
