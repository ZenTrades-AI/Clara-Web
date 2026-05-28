import { Bell, FileText, DollarSign, CheckCircle, Smartphone, MessageSquare } from "lucide-react";

const Capabilities = () => {
    const capabilities = [
        {
            icon: Bell,
            title: "Payment Reminders",
            description: "Automated, friendly reminders sent at optimal times through the right channels.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: FileText,
            title: "Invoice Follow-ups",
            description: "Persistent but professional follow-up sequences that keep invoices top of mind.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: DollarSign,
            title: "Outstanding Balances",
            description: "Track and collect on aging receivables with escalating workflows.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: CheckCircle,
            title: "Payment Confirmations",
            description: "Automatic acknowledgment when payments are received, updating all systems.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Smartphone,
            title: "Status Updates",
            description: "Real-time visibility into collection status across all open invoices.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: MessageSquare,
            title: "Customer Communication",
            description: "Handle payment questions and schedule arrangements professionally.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">Capabilities</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Clara <span className="text-clara-red">Collects</span> Handles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From initial reminders to final payment, Clara manages the entire collection workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
