import { PhoneCall, DollarSign, Glasses, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const agents = [
    {
        icon: Glasses,
        name: "Clara Field Co-Pilot",
        subtitle: "Your AI teammate on the roof",
        description: "Live job guidance during inspections with hands-free documentation using smart glasses.",
        stat: "2x faster inspections",
        theme: "dark",
        bgClass: "bg-[#0F172A]", // Darker slate for contrast
        textClass: "text-white",
        subTextClass: "text-slate-400",
        iconBg: "bg-white/10",
        iconColor: "text-white",
        badge: "NEW",
        badgeColor: "bg-[#10B981] text-white", // Green badge
        link: "/solutions/copilot",
        linkText: "Explore Field Co-Pilot",
        image: "/lovable-uploads/Clara-AI-Smart-Glasses.png"
    },
    {
        icon: PhoneCall,
        name: "Clara Answers",
        subtitle: "Never miss another call or lead",
        description: "24/7 call answering that books jobs while customers are still on the line.",
        stat: "100% call answer",
        theme: "blue",
        bgClass: "bg-[#2563EB]", // Bright blue
        textClass: "text-white",
        subTextClass: "text-blue-100",
        iconBg: "bg-white/10",
        iconColor: "text-white",
        link: "/solutions/answers",
        linkText: "Explore Answers"
    },
    {
        icon: DollarSign,
        name: "Clara Collects",
        subtitle: "Get paid without chasing",
        description: "Automated follow-ups that turn completed jobs into cash.",
        stat: "40% faster payments",
        theme: "purple",
        bgClass: "bg-[#7C3AED]", // Bright purple
        textClass: "text-white",
        subTextClass: "text-purple-100",
        iconBg: "bg-white/10",
        iconColor: "text-white",
        link: "/solutions/collects",
        linkText: "Explore Collects"
    }
];

const AIAgents = () => {
    return (
        <section className="py-32 px-4 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6">
                        The AI Growth Engine
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Three Intelligent Agents, <span className="text-primary">One Operating Layer</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Clara orchestrates AI across your entire operation — from field execution to customer calls to cash collection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {agents.map((agent, index) => {
                        const Icon = agent.icon;
                        return (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                                <Link
                                    to={agent.link}
                                    className={`group relative rounded-3xl p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 block overflow-hidden ${agent.bgClass}`}
                                >
                                    {/* Grid Texture Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

                                    {/* Background Image for Field Co-Pilot */}
                                    {agent.image && (
                                        <div className="absolute top-0 right-0 w-[120%] h-[120%] opacity-20 pointer-events-none translate-x-1/4 -translate-y-1/4">
                                            <img
                                                src={agent.image}
                                                alt=""
                                                className="w-full h-full object-contain object-right-top"
                                            />
                                        </div>
                                    )}

                                    <div className="relative h-full flex flex-col z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${agent.iconBg}`}>
                                                <Icon className={`w-6 h-6 ${agent.iconColor}`} strokeWidth={2} />
                                            </div>
                                            {agent.badge && (
                                                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${agent.badgeColor}`}>
                                                    {agent.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="mb-auto">
                                            <h3 className={`text-2xl font-bold mb-2 ${agent.textClass}`}>
                                                {agent.name}
                                            </h3>
                                            <p className={`text-sm font-medium mb-4 opacity-90 ${agent.textClass}`}>
                                                {agent.subtitle}
                                            </p>
                                            <p className={`text-sm leading-relaxed mb-8 opacity-80 ${agent.textClass}`}>
                                                {agent.description}
                                            </p>
                                        </div>

                                        {/* Stat & Link */}
                                        <div className="space-y-6">
                                            <div className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 ${agent.textClass}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${agent.theme === 'dark' ? 'bg-green-400' : 'bg-white'} animate-pulse`} />
                                                {agent.stat}
                                            </div>

                                            <div className={`flex items-center gap-2 text-sm font-bold ${agent.textClass} group-hover:gap-3 transition-all`}>
                                                {agent.linkText}
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AIAgents;
