import { Database, MessageCircle, Zap, Wrench } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const WhyClaraWorks = () => {
    const reasons = [
        {
            icon: Database,
            title: "No Data Silos",
            description: "Every agent shares the same brain. Front office knows what the field is doing, and back office sees it all.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: MessageCircle,
            title: "Hello, Context",
            description: "Clara remembers past conversations, customer preferences, and service history.",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: Zap,
            title: "Proactive Intelligence",
            description: "She doesn't just wait for commands. She suggests actions, spots issues, and drives revenue.",
            color: "bg-orange-100 text-orange-600"
        },
        {
            icon: Wrench,
            title: "Built for Trades",
            description: "Trained on millions of home service calls. She knows what a capacitor is and how to book a tune-up.",
            color: "bg-red-100 text-red-600"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Why Clara Works When Other Tools Don't
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Most tools are just dumb forms. Clara is intelligent infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="flex items-start p-8 rounded-3xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
                                <div className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center mr-6 shrink-0`}>
                                    <reason.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyClaraWorks;
