import { ArrowRight } from "lucide-react";

const steps = [
    {
        title: "Capture",
        description: "Clara Answers picks up every call, qualifies the customer, and books the job automatically.",
    },
    {
        title: "Dispatch",
        description: "Clara Dispatch assigns the right technician based on skills, location, and availability.",
    },
    {
        title: "Remind",
        description: "Clara Reminds follows up on estimates, inspections, and maintenance to convert opportunities.",
    },
    {
        title: "Collect",
        description: "Clara Collects automates payment reminders and turns outstanding invoices into revenue.",
    }
];

const HowItWorks = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                        How the Engine Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Seamless automation from first ring to final payment
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20" style={{ width: "calc(100% - 10rem)", margin: "0 5rem" }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                {/* Step number */}
                                <div className="relative flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-premium relative z-10">
                                        <span className="text-3xl font-bold text-white">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Arrow separator for mobile/tablet */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-6">
                                        <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
