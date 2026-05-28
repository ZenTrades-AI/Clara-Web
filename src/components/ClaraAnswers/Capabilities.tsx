import { Mic, AlertCircle, Calendar, HelpCircle, Moon, PhoneIncoming } from "lucide-react";

const Capabilities = () => {
    const capabilities = [
        {
            icon: Mic,
            title: "New Service Inquiries",
            description: "First-time customers looking for help. Clara captures their needs and books the job.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: AlertCircle,
            title: "Emergency Calls",
            description: "Urgent requests that need immediate attention. Clara prioritizes and routes appropriately.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Calendar,
            title: "Scheduling Requests",
            description: "Customers wanting to book, reschedule, or confirm appointments. Clara handles it all.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: HelpCircle,
            title: "Customer Questions",
            description: "General inquiries about services, pricing, and availability. Clara provides accurate answers.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Moon,
            title: "After-Hours Demand",
            description: "Calls that come in when your office is closed. Clara never sleeps.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: PhoneIncoming,
            title: "Overflow Volume",
            description: "When your team is swamped, Clara handles the overflow without missing a beat.",
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
                        What Clara <span className="text-clara-red">Answers</span> Handles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From routine scheduling to emergency calls, Clara manages every type of inbound communication.
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
