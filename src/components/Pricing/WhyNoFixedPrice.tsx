import { Building2, Phone, Settings, TrendingUp } from "lucide-react";

const WhyNoFixedPrice = () => {
    const reasons = [
        {
            icon: Building2,
            title: "Every Service Business Is Different",
            description:
                "A 3-person plumbing crew and a 50-tech HVAC fleet have completely different needs. One-size pricing doesn't work.",
            color: "bg-red-50 text-red-500",
        },
        {
            icon: Phone,
            title: "Call Volume & Workflows Vary Widely",
            description:
                "Some businesses handle 50 calls a week, others handle 500 a day. Clara scales to match your reality.",
            color: "bg-red-50 text-red-500",
        },
        {
            icon: Settings,
            title: "AI Agents Are Configured, Not Installed",
            description:
                "Clara adapts to your processes, integrations, and compliance requirements — not the other way around.",
            color: "bg-red-50 text-red-500",
        },
        {
            icon: TrendingUp,
            title: "Value Is Tied to Outcomes, Not Usage Caps",
            description:
                "We measure success by revenue recovered, calls answered, and time saved — not by arbitrary feature limits.",
            color: "bg-red-50 text-red-500",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Why Clara Doesn't Have a Fixed Price
                    </h2>
                    <p className="text-lg text-slate-600">
                        Transparency is key. Here's why we take a custom approach.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all bg-white flex gap-6 items-start"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${reason.color}`}
                            >
                                <reason.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">
                                    {reason.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyNoFixedPrice;
