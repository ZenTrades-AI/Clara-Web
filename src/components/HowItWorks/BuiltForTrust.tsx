import { ShieldCheck, Lock, UserCheck, Server } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const BuiltForTrust = () => {
    const items = [
        {
            icon: ShieldCheck,
            title: "SOC 2 Type II",
            description: "Certified security controls and processes."
        },
        {
            icon: Lock,
            title: "HIPAA Compliant",
            description: "Ready for sensitive data handling."
        },
        {
            icon: UserCheck,
            title: "Role-Based Access",
            description: "Granular control over who sees what."
        },
        {
            icon: Server,
            title: "Enterprise Grade Security",
            description: "Bank-level encryption for all data."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
                        <ShieldCheck className="w-4 h-4" /> Built for Trust
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Built for Trust
                    </h2>
                    <p className="text-muted-foreground">
                        Your data is your most valuable asset. We protect it like it's our own.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center mb-4 shadow-sm">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuiltForTrust;
