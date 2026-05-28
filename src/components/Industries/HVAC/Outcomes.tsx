import { CheckCircle2 } from "lucide-react";

const HVACOutcomes = () => {
    const outcomes = [
        {
            title: "Capture Every Seasonal Surge",
            description: "Handle peak demand without adding dispatchers"
        },
        {
            title: "Reduce Callbacks",
            description: "Better diagnostics mean fewer return visits for the same issue"
        },
        {
            title: "Faster Technician Ramp-Up",
            description: "Junior techs become productive faster with AI guidance"
        },
        {
            title: "Higher Maintenance Renewal Rates",
            description: "Automated reminders keep customers on recurring plans"
        },
        {
            title: "Collect on Installs Faster",
            description: "Follow-ups on equipment replacement invoices run automatically"
        },
        {
            title: "Scale Without Adding Office Staff",
            description: "Handle more call volume without hiring more coordinators"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Outcomes That Matter to HVAC Companies
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outcomes.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-clara-red flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HVACOutcomes;
