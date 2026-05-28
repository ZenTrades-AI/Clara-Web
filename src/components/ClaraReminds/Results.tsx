import { DollarSign, FileCheck, Clock } from "lucide-react";

const results = [
  {
    icon: DollarSign,
    title: "More Revenue from Existing Leads",
    description: "Convert the leads you already paid for without spending more on marketing.",
  },
  {
    icon: FileCheck,
    title: "Clean Follow-Up History",
    description: "Every customer interaction is logged and tracked automatically in your CRM.",
  },
  {
    icon: Clock,
    title: "Less Manual Calling",
    description: "Your office team spends less time chasing customers and more time on high-value work.",
  },
];

const Results = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            The Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop leaving money on the table with forgotten estimates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-premium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {result.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
