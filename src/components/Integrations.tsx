const integrations = [
    "ServiceTitan",
    "Housecall Pro",
    "Jobber",
    "ServiceM8",
    "FieldEdge",
    "Zapier",
    "Salesforce",
    "HubSpot",
];

const Integrations = () => {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Seamless Integrations
                </h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Clara works with the software you already use — no complicated setup
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {integrations.map((integration, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-premium transition-all duration-300 flex items-center justify-center"
                        >
                            <div className="text-lg font-bold text-muted-foreground">
                                {integration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
