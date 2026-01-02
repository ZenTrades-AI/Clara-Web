import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { Check } from "lucide-react";

const IntegrationsCTA = () => {
    return (
        <section className="relative py-20 px-6 bg-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left column */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Turn your tech stack into an{" "}
                            <span className="text-primary">AI growth engine</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Clara integrates deeply with your existing tools to automate workflows, sync data in real-time, and give you full visibility into operations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg" onClick={openHubSpotForm}>
                                Book a Growth Strategy Demo
                            </Button>

                        </div>
                    </div>

                    {/* Right column - features */}
                    <div className="space-y-4">
                        {[
                            "Read customer context from your CRM",
                            "Create and update jobs automatically",
                            "Sync schedules and technician availability",
                            "Post invoices and track payments",
                            "Maintain compliance and audit trails"
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-[#FAFAFA] p-4 rounded-xl animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-foreground font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsCTA;
