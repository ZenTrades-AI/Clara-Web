import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Droplets, Zap, Flame } from "lucide-react";

const industries = [
  {
    id: "hvac",
    label: "HVAC",
    icon: Wind,
    content: {
      title: "Built for HVAC Teams",
      description: "Clara understands the urgency of no-cool, no-heat calls and handles seasonal peaks with ease.",
      features: [
        "Emergency AC repairs",
        "No-heat service calls",
        "Replacement quotes",
        "Seasonal maintenance",
        "Emergency dispatch prioritization"
      ],
      stat: "HVAC teams see up to 40% more after-hours bookings"
    }
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: Droplets,
    content: {
      title: "Plumbing Emergency Ready",
      description: "From leaks to backups, Clara triages plumbing emergencies and books your team efficiently.",
      features: [
        "Emergency leak response",
        "Drain & backup calls",
        "Water heater issues",
        "Emergency flooding",
        "Pipe repair scheduling"
      ],
      stat: "Plumbers capture 35% more emergency calls"
    }
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: Zap,
    content: {
      title: "Electrical Expertise",
      description: "Clara handles everything from outages to installations with industry-specific knowledge.",
      features: [
        "Power outage responses",
        "Breaker issues",
        "EV charger installations",
        "Safety concern calls",
        "Panel upgrade quotes"
      ],
      stat: "Electricians book 30% more quote calls"
    }
  },
  {
    id: "fire",
    label: "Fire Protection",
    icon: Flame,
    content: {
      title: "Fire Protection Specialists",
      description: "Clara manages inspections, testing, and compliance calls with precision.",
      features: [
        "Inspection scheduling",
        "System testing calls",
        "Violation responses",
        "Emergency dispatch",
        "Compliance tracking"
      ],
      stat: "Fire protection teams never miss a compliance call"
    }
  }
];

const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState("hvac");
  
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Built for Your Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clara speaks your language and understands your business
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
                  className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-card data-[state=active]:shadow-soft"
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
              <div className="bg-card rounded-2xl p-10 border border-border shadow-soft">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Content */}
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {industry.content.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {industry.content.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {industry.content.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Stat */}
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <p className="text-sm font-semibold text-primary">
                        {industry.content.stat}
                      </p>
                    </div>
                  </div>
                  
                  {/* Right: Visual */}
                  <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center">
                      <industry.icon className="w-32 h-32 text-primary/40" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default IndustryTabs;
