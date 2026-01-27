import { Phone, MessageSquare, Truck, CheckCircle, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const DataFlow = () => {
    const steps = [
        {
            icon: Phone,
            title: "Incoming Call",
            description: "Customer calls your line. Clara answers instantly.",
            color: "bg-blue-500",
            side: "left"
        },
        {
            icon: MessageSquare,
            title: "AI Answers & Books",
            description: "Clara qualifies the lead, checks your schedule, and books the job.",
            color: "bg-purple-500",
            side: "right"
        },
        {
            icon: Truck,
            title: "Tech Dispatched",
            description: "Tech gets notified with full job details and audio transcript.",
            color: "bg-green-500",
            side: "left"
        },
        {
            icon: CheckCircle,
            title: "Job Complete",
            description: "Tech finishes work. Clara updates the CRM and marks job done.",
            color: "bg-orange-500",
            side: "right"
        },
        {
            icon: DollarSign,
            title: "Invoice Sent",
            description: "Clara automatically sends the invoice and follows up for payment.",
            color: "bg-red-500",
            side: "left"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        How Data Moves Through the System
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A seamless flow from first ring to money in the bank.
                    </p>
                </div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <RevealOnScroll key={index} className="w-full">
                                <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0">
                                    {/* Content Side */}
                                    <div className={`text-center ${index % 2 === 0 ? 'md:text-right md:pr-12 md:order-1' : 'md:text-left md:pl-12 md:order-3'}`}>
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>

                                    {/* Icon Center */}
                                    <div className="relative z-10 md:order-2">
                                        <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg ring-4 ring-white`}>
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                    </div>

                                    {/* Empty Side for Balance */}
                                    <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`} />
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-lg font-semibold text-gray-900">
                        No manual uploads. No broken workflows. No lost context.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DataFlow;
