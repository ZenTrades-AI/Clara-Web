const RoofingDataFlow = () => {
    const steps = [
        {
            number: "1",
            title: "Lead Calls In",
            description: "Homeowner reports storm damage or requests inspection"
        },
        {
            number: "2",
            title: "Inspection Booked",
            description: "Clara schedules and confirms the appointment"
        },
        {
            number: "3",
            title: "Damage Documented",
            description: "Field Co-Pilot captures photos, measurements, and notes"
        },
        {
            number: "4",
            title: "Claim Submitted",
            description: "Insurance-ready documentation syncs to your system"
        },
        {
            number: "5",
            title: "Payment Collected",
            description: "Clara Collects follows up on completion payments"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        How Data Flows Through Clara for Roofing
                    </h2>
                    <p className="text-xl text-gray-600">
                        From the first storm call to final payment collection, Clara keeps everything connected.
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

export default RoofingDataFlow;
