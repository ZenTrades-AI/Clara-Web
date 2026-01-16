import { TrendingUp, CheckCircle, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "25–35%",
    label: "More Jobs Booked",
    description: "Convert existing estimates into scheduled work automatically.",
  },
  {
    icon: CheckCircle,
    value: "20–40%",
    label: "Fewer No Response Quotes",
    description: "Persistent follow-ups that feel helpful, not pushy.",
  },
  {
    icon: Clock,
    value: "10–15 hrs",
    label: "Saved Per Week",
    description: "Per dispatcher or CSR on manual follow-up calls.",
  },
];

const PerformanceStats = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-premium transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                
                <div className="text-4xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold mb-3 text-foreground">
                  {stat.label}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;
