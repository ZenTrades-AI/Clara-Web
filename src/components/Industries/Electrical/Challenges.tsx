import { AlertTriangle, ShieldAlert, HardHat, FileCheck, SearchX, Receipt } from "lucide-react";

const ElectricalChallenges = () => {
    const cards = [
        {
            icon: AlertTriangle,
            title: "Safety Mistakes Are Unforgivable",
            description: "One arc flash, one code violation, one improperly wired panel can end careers, cause fires, or worse. Your work is inspected, documented, and scrutinized. There is no room for shortcuts or incomplete work."
        },
        {
            icon: FileCheck,
            title: "Code Compliance Is Non-Negotiable",
            description: "NEC updates, local amendments, and inspector expectations create a moving target. Keeping your entire team current on code changes while they are in the field is a constant challenge. Failed inspections cost time and credibility."
        },
        {
            icon: HardHat,
            title: "Skilled Labor Is Impossible to Find",
            description: "Licensed electricians are in short supply. The ones you have are stretched across too many jobs. You need your journeymen to handle more complex work, but they spend half their time answering questions from apprentices."
        },
        {
            icon: ShieldAlert,
            title: "Documentation Protects You",
            description: "When something goes wrong years later, your installation records are subpoenaed. Incomplete documentation, missing photos, or unclear notes can expose you to liability. Your field team rushes through paperwork because they have more pressing work to do."
        },
        {
            icon: SearchX,
            title: "Service Calls Get Lost in Project Work",
            description: "You are running commercial jobs and residential projects simultaneously. When a customer calls with an outlet issue or a panel upgrade request, your office is juggling bid deadlines and project coordination. Small service calls slip through the cracks."
        },
        {
            icon: Receipt,
            title: "Project Payments Take Forever",
            description: "Commercial projects run on payment applications and retainage. Residential work waits for financing or permit closeouts. Your completed work sits in AR while you wait for customers and general contractors to release payment."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The Reality of Running an Electrical Contracting Business
                    </h2>
                    <p className="text-xl text-gray-600">
                        Electrical work is technical, regulated, and high-stakes. Your reputation depends on getting it right the first time, and your growth depends on capturing opportunities others miss.
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

export default ElectricalChallenges;
