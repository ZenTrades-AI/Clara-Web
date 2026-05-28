import { CheckCircle2 } from "lucide-react";

const PlumbingOutcomes = () => {
    const outcomes = [
        {
            title: "Capture Every Emergency Call",
            description: "Answer 24/7 without burning out your on-call tech"
        },
        {
            title: "Reduce Callbacks",
            description: "Better documentation means fewer return visits"
        },
        {
            title: "Close More Camera Jobs",
            description: "Visual proof that helps customers understand the repair"
        },
        {
            title: "Higher Membership Renewals",
            description: "Automated follow-ups keep customers on maintenance plans"
        },
        {
            title: "Faster Invoice Collection",
            description: "Professional follow-ups on completed work"
        },
        {
            title: "Scale Without Adding Dispatchers",
            description: "Handle more call volume without hire more office staff"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Outcomes That Matter to Plumbing Companies
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

export default PlumbingOutcomes;
