import { Phone, Map, FileText, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ThreeIntelligentAgents = () => {
    const agents = [
        {
            icon: Phone,
            role: "Front Office",
            title: "Capture Demand Instantly",
            description: "Your phones are answered in 1 second, 24/7. Every lead is captured, qualified, and booked directly into your schedule.",
            features: [
                "Answers every call instantly",
                "Books jobs directly",
                "Handles complex scheduling",
                "Never takes a sick day"
            ],
            link: "Learn more",
            color: "bg-red-50 text-red-600",
            iconColor: "text-red-600"
        },
        {
            icon: Map,
            role: "Field Co-Pilot",
            title: "Guide Techs in the Field",
            description: "Your techs get instant support, diagnosis help, and upsell opportunities while they're on the job.",
            features: [
                "Technical support access",
                "Pricebook assistance",
                "Upsell recommendations",
                "Automated job notes"
            ],
            link: "Learn more",
            color: "bg-purple-50 text-purple-600",
            iconColor: "text-purple-600"
        },
        {
            icon: FileText,
            role: "Back Office",
            title: "Convert AR & Maintenance",
            description: "Your cash flow is automated. Invoices are chased, maintenance plans are renewed, and customers are retained.",
            features: [
                "Automated AR follow-up",
                "Membership renewals",
                "Review generation",
                "Customer reactivation"
            ],
            link: "Learn more",
            color: "bg-blue-50 text-blue-600",
            iconColor: "text-blue-600"
        }
    ];

    return (
        <section id="ai-growth-engine" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        One System. Three Intelligent Agents.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Clara isn't just a chatbot. She's a complete workforce that runs your entire business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {agents.map((agent, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="h-full p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group">
                                <div className={`w-14 h-14 rounded-2xl ${agent.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <agent.icon className={`w-7 h-7 ${agent.iconColor}`} />
                                </div>

                                <div className="mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${agent.iconColor}`}>
                                        {agent.role}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                    {agent.title}
                                </h3>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {agent.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {agent.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-500">
                                            <div className={`w-1.5 h-1.5 rounded-full mr-3 ${agent.color.split(' ')[0].replace('bg-', 'bg-').replace('-50', '-400')}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className={`flex items-center font-semibold ${agent.iconColor} group-hover:gap-2 transition-all cursor-pointer`}>
                                    {agent.link} <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeIntelligentAgents;
