import { Box } from "lucide-react";

const tools = [
  "ServiceTitan",
  "Jobber",
  "Housecall Pro",
  "QuickBooks",
  "Zapier",
  "Calendly"
];

const Integrations = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Integrates with Your Tools
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Clara Dispatch syncs seamlessly with your existing CRM, scheduling, and business tools.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 flex items-center justify-center hover:shadow-card transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <Box className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{tool}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
