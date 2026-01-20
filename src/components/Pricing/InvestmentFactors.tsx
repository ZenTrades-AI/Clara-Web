import { Phone, Building, Factory, Cpu, Link, ShieldAlert } from "lucide-react";

const InvestmentFactors = () => {
    const factors = [
        {
            icon: Phone,
            title: "Monthly Call Volume",
            description:
                "Higher call volumes mean more opportunities captured — and more value delivered.",
        },
        {
            icon: Building,
            title: "Business Size & Locations",
            description:
                "Multi-location operations require coordinated AI across regions and teams.",
        },
        {
            icon: Factory,
            title: "Industries Served",
            description:
                "Fire protection, HVAC, plumbing, electrical, and roofing each have unique requirements.",
        },
        {
            icon: Cpu,
            title: "AI Agents Enabled",
            description:
                "Deploy one agent or the full Clara AI Growth Engine based on your priorities.",
        },
        {
            icon: Link,
            title: "CRM & System Integrations",
            description:
                "Clara connects to your existing systems — ServiceTitan, Jobber, Housecall Pro, and more.",
        },
        {
            icon: ShieldAlert,
            title: "Compliance & Workflow Complexity",
            description:
                "Regulated industries and complex workflows require deeper configuration.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        What Impacts Your Clara Investment?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Clara adapts to your operation — pricing reflects that.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {factors.map((factor, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500">
                                <factor.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-slate-900">
                                {factor.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {factor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestmentFactors;
