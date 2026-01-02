import { Calendar, BarChart3, FileText } from "lucide-react";

const steps = [
    {
        icon: Calendar,
        title: "Custom Demo",
        description: "We'll show you Clara in action with scenarios specific to your business type",
    },
    {
        icon: BarChart3,
        title: "ROI Analysis",
        description: "Get a detailed breakdown of potential savings and revenue growth",
        highlights: ["Cost-benefit analysis", "Revenue projections", "Payback timeline"],
    },
    {
        icon: FileText,
        title: "Implementation Plan",
        description: "Receive a step-by-step plan to get Clara working for your business",
    },
];

const WhatHappensNext = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        What Happens Next?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-card rounded-2xl p-8 border-2 shadow-card hover:shadow-premium transition-all duration-300 ${index === 1 ? 'border-primary' : 'border-border'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-center text-foreground">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                {step.highlights && (
                                    <ul className="space-y-2">
                                        {step.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-xs text-primary flex items-center justify-center gap-2">
                                                <span>•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg font-semibold text-foreground mb-2">
                        Typical timeline: <span className="text-primary">24-48 hours</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatHappensNext;
