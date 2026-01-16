import { Clock, TrendingUp, DollarSign, Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const metrics = [
    {
        icon: TrendingUp,
        value: "+20–30%",
        label: "More booked jobs",
        subtitle: "From the same call volume"
    },
    {
        icon: Clock,
        value: "24/7",
        label: "After-hours coverage",
        subtitle: "Without extra hires"
    },
    {
        icon: Check,
        value: "Fewer",
        label: "Repeat truck rolls",
        subtitle: "Better data & documentation"
    },
    {
        icon: DollarSign,
        value: "40%",
        label: "Faster payments",
        subtitle: "On outstanding invoices"
    }
];

const GrowthImpact = () => {
    return (
        <section className="py-32 px-4 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-6 border border-red-100">
                        REAL RESULTS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        What You See in the <span className="text-primary">First Month</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Measurable impact on your bottom line, starting day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <RevealOnScroll
                                key={index}
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                    <div className="relative text-left">
                                        <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={2} />

                                        <div className="text-4xl font-bold mb-2 text-slate-900">
                                            {metric.value}
                                        </div>

                                        <div className="text-lg font-bold mb-1 text-slate-900">
                                            {metric.label}
                                        </div>

                                        <p className="text-sm text-slate-500">
                                            {metric.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GrowthImpact;
