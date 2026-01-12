const HVACDataFlow = () => {
    const steps = [
        {
            number: "1",
            title: "Customer Call",
            description: "No-heat, no-cool, or maintenance request comes in"
        },
        {
            number: "2",
            title: "Intent Captured",
            description: "Clara understands urgency and equipment details"
        },
        {
            number: "3",
            title: "Service Executed",
            description: "Field Co-Pilot guides diagnostics and captures work"
        },
        {
            number: "4",
            title: "Job Synced",
            description: "Work orders update in your service management system"
        },
        {
            number: "5",
            title: "Payment Collected",
            description: "Clara Collects follows up on outstanding invoices"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        How Data Flows Through Clara for HVAC
                    </h2>
                    <p className="text-xl text-gray-600">
                        From the first emergency call to final payment collection, Clara keeps everything connected.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative text-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-red-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-clara-red text-white flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg relative z-10">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-snug px-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HVACDataFlow;
