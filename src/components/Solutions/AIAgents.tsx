import { PhoneCall, MapPin, Bell, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const agents = [
    {
        icon: PhoneCall,
        name: "Clara Answers",
        subtitle: "Capture",
        description: "Answers calls instantly, qualifies customers, and books jobs inside your CRM.",
        stat: "100% call answer",
        color: "from-primary/20 to-primary-light/20",
        link: "/solutions/answers"
    },
    {
        icon: MapPin,
        name: "Clara Dispatch",
        subtitle: "Dispatch",
        description: "Assigns the right tech to the right job using smart scheduling (ETA, skills, proximity).",
        stat: "30% more booked jobs",
        color: "from-primary/15 to-primary-light/15",
        link: "/solutions/dispatch"
    },
    {
        icon: Bell,
        name: "Clara Reminds",
        subtitle: "Remind",
        description: "Automates follow-ups on estimates, recalls, inspections, and overdue jobs.",
        stat: "25% tech utilization lift",
        color: "from-primary/15 to-primary-light/15",
        link: "/solutions/remind"
    },
    {
        icon: DollarSign,
        name: "Clara Collects",
        subtitle: "Collect",
        description: "Turns unpaid invoices into collected revenue with friendly, automated outreach.",
        stat: "40% faster payments",
        color: "from-primary/20 to-primary-light/20",
        link: "/solutions/collect"
    }
];

const AIAgents = () => {
    return (
        <section className="py-32 px-4 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                        Meet the AI Growth Engine
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Four intelligent agents working together to automate your entire revenue cycle
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agents.map((agent, index) => {
                        const Icon = agent.icon;
                        return (
                            <Link
                                key={index}
                                to={agent.link}
                                className="group relative bg-white rounded-2xl p-10 border border-border shadow-card hover:shadow-premium hover:scale-[1.02] transition-all duration-300 animate-fade-in block"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative">
                                    {/* Icon and subtitle badge */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                        </div>
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                                            {agent.subtitle}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                                        {agent.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
                                        {agent.description}
                                    </p>

                                    {/* Stat */}
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/5 px-4 py-2 rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        {agent.stat}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AIAgents;
