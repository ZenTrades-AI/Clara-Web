import { Shield, Server, Lock, Cloud } from "lucide-react";

const SecurityAndReliability = () => {
    const features = [
        {
            icon: Shield,
            title: "Secure Data Handling",
            description: "All field data is encrypted in transit and at rest. Your information stays protected."
        },
        {
            icon: Server,
            title: "Enterprise-Grade Reliability",
            description: "Built for uptime and performance. Field Co-Pilot works when your teams do."
        },
        {
            icon: Lock,
            title: "Permission-Based Capture",
            description: "Audio and image capture only with proper permissions. Full control over data collection."
        },
        {
            icon: Cloud,
            title: "Real-World Conditions",
            description: "Designed for field environments with variable connectivity and demanding conditions."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">SECURITY AND TRUST</div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Security and <span className="text-clara-red">Reliability</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Field Co-Pilot is built with enterprise security standards and designed to work in real-world field conditions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-red-100">
                            <div className="w-12 h-12 mx-auto bg-red-50 rounded-xl flex items-center justify-center text-clara-red mb-4">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityAndReliability;
