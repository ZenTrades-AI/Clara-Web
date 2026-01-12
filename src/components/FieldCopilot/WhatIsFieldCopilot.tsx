import { Brain, Eye, Zap } from "lucide-react";

const WhatIsFieldCopilot = () => {
    const features = [
        {
            icon: Brain,
            title: "AI Layer for Field Work",
            description: "Field Co-Pilot is an AI layer that assists field teams in real time, providing intelligence exactly when and where it is needed."
        },
        {
            icon: Eye,
            title: "Sees and Understands",
            description: "It listens, sees, and understands work as it happens. No manual input required from technicians."
        },
        {
            icon: Zap,
            title: "Zero Workflow Change",
            description: "It removes manual steps without changing how teams work. Same process, better outcomes."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        What Is <span className="text-clara-red">Field Co-Pilot</span>?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Field Co-Pilot brings real-time AI intelligence directly into the field, turning every job into a guided, documented, and optimized experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-clara-red mb-6">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsFieldCopilot;
