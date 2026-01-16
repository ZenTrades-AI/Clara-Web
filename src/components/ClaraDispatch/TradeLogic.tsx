import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Droplets, Zap, Flame } from "lucide-react";

const industries = [
  {
    id: "hvac",
    label: "HVAC",
    icon: Wind,
    content: {
      title: "HVAC Dispatch Intelligence",
      description: "Clara understands job complexity, parts availability, and seasonal demand patterns.",
      features: [
        "Job difficulty assessment",
        "Parts inventory checking",
        "Emergency vs planned prioritization",
        "Seasonal demand forecasting",
        "Equipment-specific technician matching"
      ],
    }
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: Droplets,
    content: {
      title: "Plumbing Emergency Logic",
      description: "Automatically flags emergencies and dispatches the nearest available technician.",
      features: [
        "Emergency priority flagging",
        "Water damage risk assessment",
        "Proximity-based routing",
        "After-hours availability",
        "Specialized equipment tracking"
      ],
    }
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: Zap,
    content: {
      title: "Electrical Safety & Licensing",
      description: "Ensures proper licensing and safety protocols for every job type.",
      features: [
        "License verification matching",
        "Safety certification checking",
        "Commercial vs residential logic",
        "High-voltage job requirements",
        "Permit tracking integration"
      ],
    }
  },
  {
    id: "fire",
    label: "Fire Protection",
    icon: Flame,
    content: {
      title: "Inspection & Compliance",
      description: "Manages inspection schedules and compliance requirements automatically.",
      features: [
        "Inspection cadence tracking",
        "Compliance deadline monitoring",
        "Certification requirement matching",
        "Re-inspection scheduling",
        "Regulatory reporting automation"
      ],
    }
  }
];

const TradeLogic = () => {
  const [activeTab, setActiveTab] = useState("hvac");
  
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Trade-Specific Intelligence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Clara Dispatch understands the unique requirements of your industry
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-1 bg-muted/50 mb-12">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-card data-[state=active]:shadow-card"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{industry.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {industries.map((industry) => (
            <TabsContent
              key={industry.id}
              value={industry.id}
              className="animate-fade-in"
            >
              <div className="bg-card rounded-xl p-10 border border-border shadow-card">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {industry.content.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {industry.content.description}
                </p>
                
                <ul className="space-y-3">
                  {industry.content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TradeLogic;
