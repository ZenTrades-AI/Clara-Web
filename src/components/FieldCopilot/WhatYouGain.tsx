import { Clock, FileText, CheckCircle, Wrench, Users, BarChart } from "lucide-react";

const WhatYouGain = () => {
    const benefits = [
        {
            icon: Clock,
            title: "Faster Job Completion",
            description: "Guided workflows and instant access to information help teams finish jobs quicker."
        },
        {
            icon: FileText,
            title: "Cleaner Documentation",
            description: "Automatic capture and structured data eliminate messy paperwork and missing details."
        },
        {
            icon: CheckCircle, // "Fewer Callbacks" - using check/verify icon or maybe X? Check circle implies done right the first time.
            title: "Fewer Callbacks",
            description: "Real-time validation catches issues before they become expensive return visits."
        },
        {
            icon: Wrench,
            title: "Less Manual Overhead",
            description: "No more end-of-day data entry or manual report writing. Work flows automatically."
        },
        {
            icon: Users,
            title: "More Confident Teams",
            description: "Technicians have answers and guidance at their fingertips, reducing uncertainty."
        },
        {
            icon: BarChart,
            title: "Better Operational Visibility",
            description: "Real-time data gives managers insight into field performance and job status."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">WHAT YOU GAIN</div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        What Field Teams <span className="text-clara-red">Gain</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Field Co-Pilot delivers measurable improvements across every dimension of field operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-clara-red mb-6">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouGain;
