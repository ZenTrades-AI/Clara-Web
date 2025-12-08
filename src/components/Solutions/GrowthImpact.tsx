import { PhoneMissed, Clock, TrendingUp } from "lucide-react";

const metrics = [
    {
        icon: PhoneMissed,
        value: "<2%",
        label: "Clara missed calls",
        subtitle: "vs 35% industry avg"
    },
    {
        icon: Clock,
        value: "4s",
        label: "Answer time",
        subtitle: "vs 23s industry avg"
    },
    {
        icon: TrendingUp,
        value: "30d",
        label: "ROI payback",
        subtitle: "Typical results"
    }
];

const GrowthImpact = () => {
    return (
        <section className="py-32 px-4 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                        The Growth Impact
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Industry-leading results across all business models
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={index}
                                className="relative group animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Premium card */}
                                <div className="relative bg-white rounded-xl p-10 border border-border shadow-premium hover:shadow-glow transition-all duration-300 overflow-hidden">
                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative text-center">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                                            <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                        </div>

                                        {/* Value */}
                                        <div className="text-6xl font-bold mb-3 text-primary">
                                            {metric.value}
                                        </div>

                                        {/* Label */}
                                        <div className="text-xl font-semibold mb-2 text-foreground">
                                            {metric.label}
                                        </div>

                                        {/* Subtitle */}
                                        <p className="text-sm text-muted-foreground">
                                            {metric.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GrowthImpact;
