import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";

const PricingFinalCTA = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                    Ready to See What Clara Would Cost for <span className="text-red-500">Your Business?</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                    Get a custom pricing plan tailored to your operation, call volume, and growth goals. No hidden fees. No surprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={openHubSpotForm}
                        className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        Get Custom Pricing
                    </Button>
                    <Button
                        onClick={openHubSpotForm}
                        variant="outline"
                        className="px-8 py-6 rounded-full text-lg font-semibold border-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-black transition-all"
                    >
                        Book a 15-min Strategy Call
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PricingFinalCTA;
