import { ClipboardCheck, FileWarning, Building2, Clock, AlertTriangle, FileText } from "lucide-react";

const Challenges = () => {
    const cards = [
        {
            icon: ClipboardCheck,
            title: "Compliance Pressure Never Stops",
            description: "Between NFPA codes, AHJ requirements, and insurance mandates, your team spends as much time on paperwork as they do on actual inspections. One missed deficiency can cost you the contract."
        },
        {
            icon: FileWarning,
            title: "Failed Inspections Create Liability",
            description: "When a technician misses documenting a deficiency or forgets to note a corrective action, you inherit the risk. The building owner assumes everything passed. Until it does not."
        },
        {
            icon: Building2,
            title: "Multi-Site Contracts Stretch Your Team",
            description: "Managing recurring inspections across dozens of buildings with different schedules, different AHJs, and different system types is a logistical nightmare. One missed inspection can void the entire contract."
        },
        {
            icon: Clock,
            title: "Service Calls Get Buried",
            description: "Between fire alarm troubles, sprinkler leaks, and extinguisher replacements, inbound calls pile up fast. After hours, those calls go straight to voicemail while your competitor picks up."
        },
        {
            icon: AlertTriangle,
            title: "Documentation Is Your Legal Shield",
            description: "When a fire happens and the investigation starts, your inspection records are subpoenaed. Incomplete documentation, missing photos, or unclear deficiency notes can expose you to litigation."
        },
        {
            icon: FileText,
            title: "Recurring Revenue Gets Stuck in AR",
            description: "Annual inspections and quarterly testing contracts are predictable revenue, but only if you collect. Property managers and building owners delay payment for months while you chase invoices."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The Reality of Running a Fire Protection Business
                    </h2>
                    <p className="text-xl text-gray-600">
                        Fire protection is not like other trades. The stakes are higher, the documentation is stricter, and the margin for error is zero.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-clara-red mb-6">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Challenges;
