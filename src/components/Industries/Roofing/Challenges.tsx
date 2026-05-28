import { CloudLightning, FileText, Scale, Clock, Users, CalendarCheck } from "lucide-react";

const RoofingChallenges = () => {
    const cards = [
        {
            icon: CloudLightning,
            title: "Storm Season Overwhelms Your Team",
            description: "When a hail storm hits, your phone rings nonstop for 48 hours. Homeowners want inspections scheduled immediately. If you cannot answer, they call the next company in the search results. Storm leads have the shortest shelf life in the trades."
        },
        {
            icon: FileText,
            title: "Documentation Makes or Breaks Claims",
            description: "Insurance adjusters deny claims when documentation is incomplete. Missing photos, unclear damage descriptions, or inconsistent measurements cost you approved jobs. Your field team rushes through inspections and the office scrambles to fill in the gaps."
        },
        {
            icon: Scale,
            title: "Insurance Claims Are a Second Job",
            description: "Submitting claims, responding to supplements, and tracking approvals is a full-time job. You are running a roofing company, but half your energy goes to battling insurance companies for money you already earned."
        },
        {
            icon: Clock,
            title: "Leads Go Cold Fast",
            description: "A homeowner who calls today will sign with whoever shows up first. Your sales team is in the field doing inspections while your office staff juggles scheduling. Every hour of delay costs you closed deals."
        },
        {
            icon: Users,
            title: "Crew Coordination Is Chaos",
            description: "Material deliveries, crew scheduling, and weather windows need to align perfectly. One miscommunication means wasted days, angry customers, and margin erosion. Your project managers spend more time coordinating than managing."
        },
        {
            icon: CalendarCheck,
            title: "Final Payments Take Forever",
            description: "The job is done, the roof is installed, but collecting final payment drags on. Homeowners wait for insurance checks. Insurance companies drag their feet. Your cash is stuck in completed jobs you cannot bill out."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The Reality of Running a Roofing Business
                    </h2>
                    <p className="text-xl text-gray-600">
                        Roofing is a storm-driven, documentation-heavy business where leads surge unpredictably and getting paid depends on proving the work was done right.
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

export default RoofingChallenges;
