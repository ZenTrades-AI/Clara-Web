import { Calendar, BarChart3, FileText } from "lucide-react";

const steps = [
    {
        icon: Calendar,
        title: "Custom Demo",
        description: "We'll show you Clara in action with scenarios specific to your business type.",
        number: "1"
    },
    {
        icon: BarChart3,
        title: "ROI Pack",
        description: "Get a detailed breakdown of potential savings and revenue growth tailored to your numbers.",
        number: "2"
    },
    {
        icon: FileText,
        title: "Implementation Plan",
        description: "Receive a step-by-step plan to get Clara working for your business in days, not months.",
        number: "3"
    },
];

const WhatHappensNext = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        What Happens After You Submit?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A simple, transparent process to get you started.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 -z-0 select-none">
                                    {step.number}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-500">
                                        <Icon className="w-6 h-6" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatHappensNext;
