import { Building2, TrendingUp, Globe, Factory } from "lucide-react";

const models = [
    {
        icon: Building2,
        title: "Mid-Market Commercial",
        subtitle: "10–50 techs",
        description: "Perfect for established companies with multiple technicians.",
        outcome: "+32% revenue lift",
        features: ["Multi-location routing", "Priority systems", "Service workflows"]
    },
    {
        icon: TrendingUp,
        title: "PE Roll-up Platforms",
        subtitle: "Unified AI operations",
        description: "Unified AI operations across portfolio companies.",
        outcome: "40% operational efficiency",
        features: ["Multi-brand handling", "Analytics dashboard", "Cross-selling"]
    },
    {
        icon: Globe,
        title: "National Contractors",
        subtitle: "50+ markets",
        description: "Scale operations across multiple markets.",
        outcome: "50+ market coverage",
        features: ["National coverage", "24/7 multilingual support", "Brand consistency"]
    },
    {
        icon: Factory,
        title: "Enterprise Facilities",
        subtitle: "Comprehensive facility",
        description: "Comprehensive facility management integration.",
        outcome: "60% faster response",
        features: ["Multi-service coordination", "Preventive maintenance", "Compliance tracking"]
    }
];

const BusinessModels = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                        Built for Every Business Model
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        From growing contractors to enterprise portfolios
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {models.map((model, index) => {
                        const Icon = model.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-10 border border-border shadow-card hover:shadow-premium hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start gap-5 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-foreground mb-1">
                                            {model.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {model.subtitle}
                                        </p>
                                    </div>
                                    <div className="bg-primary/10 px-3 py-1.5 rounded-full">
                                        <span className="text-sm font-bold text-primary">{model.outcome}</span>
                                    </div>
                                </div>

                                <p className="text-base text-muted-foreground mb-6 leading-relaxed max-w-lg">
                                    {model.description}
                                </p>

                                <div className="space-y-2.5">
                                    {model.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            <span className="text-sm text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BusinessModels;
