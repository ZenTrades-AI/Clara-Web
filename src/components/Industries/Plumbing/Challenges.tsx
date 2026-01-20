import { Siren, BatteryWarning, Camera, DollarSign, Calendar, FileText } from "lucide-react";

const PlumbingChallenges = () => {
    const cards = [
        {
            icon: Siren,
            title: "Emergencies Do Not Wait",
            description: "A burst pipe at 2 AM, a sewer backup during dinner, a water heater failure on a holiday. Customers call in panic and expect someone to answer. Every missed call is a high-margin emergency job that goes to your competitor."
        },
        {
            icon: BatteryWarning,
            title: "On-Call Schedules Burn Out Techs",
            description: "Someone has to answer after-hours calls. Your on-call tech gets woken up for every water heater question and drain inquiry. Half the calls are not emergencies, but they still disrupt sleep and lead to turnover."
        },
        {
            icon: Camera,
            title: "Camera Inspections Need Documentation",
            description: "Sewer camera inspections reveal problems that customers cannot see. Without clear documentation, explaining why a sewer line needs to be replaced becomes a sales battle. Techs rush through inspections without capturing the evidence needed to close the job."
        },
        {
            icon: DollarSign,
            title: "Callbacks Eat Your Margins",
            description: "When a repair does not hold or a diagnosis was incomplete, you send a tech back for free. Callbacks are expensive and embarrassing. They happen when techs rush, miss details, or do not have the experience to spot the real problem."
        },
        {
            icon: Calendar,
            title: "Maintenance Plans Need Follow-Through",
            description: "You sell drain cleaning memberships and water heater maintenance plans for recurring revenue. But scheduling those visits, sending reminders, and following up on renewals falls through the cracks when emergency calls dominate the day."
        },
        {
            icon: FileText,
            title: "Service Invoices Sit in AR",
            description: "The job is done, the leak is fixed, but the customer has not paid. Following up on service invoices manually is awkward and time-consuming. Small balances pile up until they become a cash flow problem."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The Reality of Running a Plumbing Business
                    </h2>
                    <p className="text-xl text-gray-600">
                        Plumbing is an emergency-driven business. When pipes burst, drains back up, or water heaters fail, customers need help now. The companies that answer first win the job.
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

export default PlumbingChallenges;
