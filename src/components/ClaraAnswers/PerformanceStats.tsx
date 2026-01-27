import { CheckCircle2, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: CheckCircle2,
    value: "100%",
    label: "Call Capture",
    description: "Never miss a customer. Every call answered in under 2 rings.",
  },
  {
    icon: Clock,
    value: "24/7/365",
    label: "Coverage",
    description: "Nights, weekends, holidays — Clara never takes a break.",
  },
  {
    icon: TrendingUp,
    value: "30–45%",
    label: "More Appointments",
    description: "Clara turns more calls into booked jobs.",
  },
];

const PerformanceStats = () => {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-10 border border-border shadow-soft hover:shadow-premium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                
                {/* Value */}
                <div className="text-5xl font-bold mb-3 text-foreground">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-xl font-semibold mb-3 text-foreground">
                  {stat.label}
                </div>
                
                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
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
