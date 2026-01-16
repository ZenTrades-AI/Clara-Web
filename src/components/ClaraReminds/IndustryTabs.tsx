import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Droplets, Zap, Flame } from "lucide-react";

const industries = [
  {
    id: "hvac",
    label: "HVAC",
    icon: Wind,
    content: {
      title: "HVAC Reminder Use Cases",
      description: "Seasonal tune-ups, maintenance plans, and no-cool callbacks.",
      features: [
        "Spring/fall tune-up reminders",
        "Maintenance agreement renewals",
        "No-cool emergency follow-ups",
        "Equipment replacement quotes",
        "Filter replacement schedules"
      ],
    }
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: Droplets,
    content: {
      title: "Plumbing Follow-Ups",
      description: "Follow-ups on quotes, camera inspections, and recall campaigns.",
      features: [
        "Water heater replacement quotes",
        "Camera inspection scheduling",
        "Drain cleaning reminders",
        "Sump pump maintenance",
        "Annual backflow testing"
      ],
    }
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: Zap,
    content: {
      title: "Electrical Reminders",
      description: "Panel upgrades, safety inspections, and generator servicing.",
      features: [
        "Panel upgrade proposals",
        "Safety inspection scheduling",
        "Generator maintenance reminders",
        "EV charger installation quotes",
        "Surge protection follow-ups"
      ],
    }
  },
  {
    id: "fire",
    label: "Fire Protection",
    icon: Flame,
    content: {
      title: "Fire Safety Reminders",
      description: "Inspection due dates and extinguisher maintenance reminders.",
      features: [
        "6-year extinguisher maintenance",
        "12-year hydrostatic testing",
        "Annual sprinkler inspections",
        "Fire alarm testing reminders",
        "Compliance deadline alerts"
      ],
    }
  }
];

const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState("hvac");
  
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Use Cases by Trade
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Clara understands the unique follow-up needs of your industry
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

export default IndustryTabs;
