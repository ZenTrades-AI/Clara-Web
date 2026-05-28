import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";

const PricingHero = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Pricing Built Around Your <br />
                    Business — <span className="text-red-500">Not Arbitrary Limits</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Clara is an AI Growth Engine, not a one-size-fits-all tool. Pricing depends on how your operation runs, the agents you deploy, and the outcomes you want to achieve.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button
                        className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                        onClick={openHubSpotForm}
                    >
                        Get Custom Pricing & ROI <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-black px-8 py-6 text-lg rounded-full transition-all"
                        onClick={openHubSpotForm}
                    >
                        <Phone className="mr-2 w-5 h-5" /> Talk to a Clara Specialist
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Most customers see ROI within the first 30–60 days
                </div>
            </div>
        </section>
    );
};

export default PricingHero;
