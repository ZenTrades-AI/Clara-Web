import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ArrowRight } from "lucide-react";

const BusinessInfoForm = () => {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Get Your Custom Clara Pricing & ROI Analysis
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Tell us about your operation and we'll build a custom plan.
                    </p>
                </div>

                {/* Card that just triggers HubSpot modal */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-premium text-center space-y-6">
                    <div className="grid md:grid-cols-2 gap-6 text-left mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border bg-background" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Company</label>
                            <input type="text" placeholder="Company Name" className="w-full p-3 rounded-lg border bg-background" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input type="text" placeholder="(555) 555-5555" className="w-full p-3 rounded-lg border bg-background" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" placeholder="you@company.com" className="w-full p-3 rounded-lg border bg-background" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Call Volume</label>
                            <select className="w-full p-3 rounded-lg border bg-background" disabled>
                                <option>Select Volume...</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Tech Stack</label>
                            <select className="w-full p-3 rounded-lg border bg-background" disabled>
                                <option>Select CRM...</option>
                            </select>
                        </div>
                    </div>

                    <Button
                        className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
                        onClick={openHubSpotForm}
                    >
                        Get Custom Pricing & ROI <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        We respect your privacy. Your data is never shared.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BusinessInfoForm;
