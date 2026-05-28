const DataFlow = () => {
    const steps = [
        {
            number: "1",
            title: "Inbound Call",
            description: "Trouble signal or inspection request comes in"
        },
        {
            number: "2",
            title: "Intent Captured",
            description: "Clara understands urgency, system type, and location"
        },
        {
            number: "3",
            title: "Job Executed",
            description: "Field Co-Pilot captures inspection data and deficiencies"
        },
        {
            number: "4",
            title: "Records Synced",
            description: "Documentation flows to your inspection management system"
        },
        {
            number: "5",
            title: "Revenue Collected",
            description: "Clara Collects follows up on open invoices"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        How Data Flows Through Clara for Fire Protection
                    </h2>
                    <p className="text-xl text-gray-600">
                        From the first service call to final payment, Clara keeps everything connected.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-red-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-clara-red text-white flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-snug max-w-[180px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataFlow;
