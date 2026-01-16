import { CheckCircle2 } from "lucide-react";

const Outcomes = () => {
    const outcomes = [
        {
            title: "Pass Every AHJ Inspection",
            description: "Complete documentation that satisfies any authority having jurisdiction"
        },
        {
            title: "Reduce Liability Exposure",
            description: "Airtight records that protect you if a fire investigation occurs"
        },
        {
            title: "Never Miss a Service Call",
            description: "Every trouble signal and inspection request gets captured and routed"
        },
        {
            title: "Faster Inspection Turnaround",
            description: "Technicians complete more inspections with less paperwork"
        },
        {
            title: "Predictable Cash Flow",
            description: "Automated follow-ups on recurring inspection contracts"
        },
        {
            title: "Scale Without Adding Office Staff",
            description: "Handle more volume without hiring dispatchers or AR specialists"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Outcomes That Matter to Fire Protection Companies
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

export default Outcomes;
