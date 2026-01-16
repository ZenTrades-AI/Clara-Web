import { CheckCircle2 } from "lucide-react";

const ElectricalOutcomes = () => {
    const outcomes = [
        {
            title: "Pass Every Inspection",
            description: "Complete documentation that satisfies any inspector"
        },
        {
            title: "Reduce Liability Exposure",
            description: "Airtight records that protect you years after installation"
        },
        {
            title: "Capture Service Calls During Projects",
            description: "Never miss a lead when your team is busy with project work"
        },
        {
            title: "Faster Apprentice Development",
            description: "AI guidance helps junior electricians handle more complex work"
        },
        {
            title: "Collect on Completed Work Faster",
            description: "Automated follow-ups on service invoices and project payments"
        },
        {
            title: "Scale Without Adding Office Staff",
            description: "Handle more volume without hiring more coordinators"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Outcomes That Matter to Electrical Contractors
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

export default ElectricalOutcomes;
