import { Wind, Droplets, Zap, Flame } from "lucide-react";

const examples = [
  {
    icon: Wind,
    title: "HVAC",
    items: ["Installation deposits", "Final invoice collection", "Maintenance plan renewals"],
  },
  {
    icon: Droplets,
    title: "Plumbing",
    items: ["Emergency service payments", "Camera inspection invoices", "Annual service contracts"],
  },
  {
    icon: Zap,
    title: "Electrical",
    items: ["Panel upgrade invoices", "Generator installation payments", "Inspection fee collection"],
  },
  {
    icon: Flame,
    title: "Fire Safety",
    items: ["Recurring inspection contracts", "Multi-site invoices", "Equipment replacement billing"],
  },
];

const IndustryExamples = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Trade-Relevant Examples
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Clara understands the unique billing patterns of your industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-premium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  {example.title}
                </h3>
                
                <ul className="space-y-2">
                  {example.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryExamples;
