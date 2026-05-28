import { Wind, Droplets, Zap, Flame } from "lucide-react";

const industries = [
    {
        icon: Flame,
        name: "Fire Safety",
        callTypes: "Inspections, Testing, Violations"
    },
    {
        icon: Zap,
        name: "Electrical",
        callTypes: "Outages, Installations, Safety"
    },
    {
        icon: Wind,
        name: "HVAC",
        callTypes: "Emergency Repairs, Replacements, Maintenance"
    },
    {
        icon: Droplets,
        name: "Plumbing",
        callTypes: "Leaks, Backups, Water Heaters"
    }
];

const IndustriesServed = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Built for Every Trade
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Clara speaks your language and understands your business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-premium hover:scale-105 transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {industry.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {industry.callTypes}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesServed;
