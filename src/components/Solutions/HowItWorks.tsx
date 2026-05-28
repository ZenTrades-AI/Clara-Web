import { PhoneCall, MapPin, Bell, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
    {
        icon: PhoneCall,
        title: "Answer every call",
        description: "24/7 coverage that books jobs while you sleep.",
    },
    {
        icon: MapPin,
        title: "Route efficiently",
        description: "Smart dispatching based on location and skill.",
    },
    {
        icon: Bell,
        title: "Automate follow-ups",
        description: "Never let an estimate or inspection slip through the cracks.",
    },
    {
        icon: DollarSign,
        title: "Get paid faster",
        description: "Automated collections that close the loop on revenue.",
    }
];

const HowItWorks = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                        How the Engine Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Seamless automation from first ring to final payment
                    </p>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-6 border border-red-100">
                        THE POWER OF CLARA
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Built for <span className="text-primary">How Trades Work</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From the first ring to the final payment, Clara handles the busy work so you can focus on the trade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
