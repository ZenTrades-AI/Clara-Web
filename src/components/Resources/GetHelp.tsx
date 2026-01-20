import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, UserCheck } from "lucide-react";

const supportOptions = [
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Get instant answers from our support team",
        features: ["24/7 availability", "Instant responses", "Technical guidance"],
        cta: "Start Chat",
    },
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak directly with our technical experts",
        cta: "Call Now",
    },
    {
        icon: UserCheck,
        title: "Success Manager",
        description: "Dedicated support for Enterprise customers",
        cta: "Learn More",
    },
];

const GetHelp = () => {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Need Help Getting Started?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our team is here to support your success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-card rounded-2xl p-8 border shadow-card hover:shadow-premium transition-all duration-300 ${index === 0 ? 'border-primary/40' : 'border-border'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-center text-foreground">
                                    {option.title}
                                </h3>

                                <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6">
                                    {option.description}
                                </p>

                                {option.features && (
                                    <ul className="space-y-2 mb-6">
                                        {option.features.map((feature, idx) => (
                                            <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                                                <span className="text-primary">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}


                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Average response time: &lt; 2 minutes
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GetHelp;
