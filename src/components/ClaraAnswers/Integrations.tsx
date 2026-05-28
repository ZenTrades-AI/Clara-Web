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
    <section className="py-32 px-4 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Works seamlessly with your tools
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Clara integrates with ServiceTitan, Jobber, Housecall Pro, QuickBooks, and others — syncing schedules, bookings, and customer details automatically.
        </p>
        
        {/* Tool logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border p-8 flex items-center justify-center hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center gap-3">
                <Box className="w-8 h-8 text-muted-foreground" strokeWidth={2} />
                <span className="text-sm font-semibold text-foreground">{tool}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
