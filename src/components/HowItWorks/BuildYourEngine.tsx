import { Phone, Truck, Bell, DollarSign, Zap, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";

const agents = [
    {
        icon: Phone,
        title: "Clara Answers",
        description: "AI answers every call in 4 seconds with natural conversation and intelligent routing",
        capabilities: ["Instantly answers every call, 24/7", "Captures lead info and reason for call", "Escalates high-value calls automatically"],
        link: "/solutions/answers",
    },
    {
        icon: Truck,
        title: "Clara Dispatches",
        description: "Smart routing to the right technician based on location, skills, and availability",
        capabilities: ["Skill-based matching", "Proximity routing", "Load balancing"],
        link: "/solutions/dispatch",
    },
    {
        icon: Zap,
        title: "Clara Optimizes",
        description: "Route optimization and scheduling to maximize efficiency and profitability",
        capabilities: ["Dynamic routing", "Schedule optimization", "Traffic-aware planning"],
        link: "/solutions",
    },
    {
        icon: Bell,
        title: "Clara Reminds",
        description: "Automated appointment reminders and follow-ups reduce no-shows by 40%",
        capabilities: ["Appointment reminders", "Quote follow-ups", "Inspection recalls"],
        link: "/solutions/reminds",
    },
    {
        icon: MessageSquare,
        title: "Clara Boosts",
        description: "Proactive customer communication throughout the service lifecycle",
        capabilities: ["Job updates", "ETA notifications", "Service confirmations"],
        link: "/solutions",
    },
    {
        icon: Star,
        title: "Clara Reviews",
        description: "Automated review requests and reputation management boost online presence",
        capabilities: ["Post-service reviews", "Feedback collection", "Reputation monitoring"],
        link: "/solutions",
    },
    {
        icon: DollarSign,
        title: "Clara Collects",
        description: "Intelligent payment processing and follow-up automation accelerate cash flow",
        capabilities: ["Payment reminders", "Invoice tracking", "Collections automation"],
        link: "/solutions/collects",
    },
];

const BuildYourEngine = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Build your AI growth engine
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Each layer adds intelligence and automation to transform your service operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map((agent, index) => {
                        const Icon = agent.icon;
                        return (
                            <Link
                                key={index}
                                to={agent.link}
                                className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-premium transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {agent.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {agent.description}
                                </p>

                                <ul className="space-y-2">
                                    {agent.capabilities.map((capability, idx) => (
                                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                                            <span className="text-primary mt-0.5">•</span>
                                            <span>{capability}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BuildYourEngine;
