import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";

const HowItWorksCTA = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    const handleTryClara = () => {
        window.location.href = "tel:+14059136009";
    };

    return (
        <section className="py-32 px-6 bg-black text-white text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    See the AI Growth Engine in Action
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Stop patching together broken tools. Switch to the intelligent system that runs your business for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={handleBookDemo}
                        className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        onClick={handleTryClara}
                        variant="outline"
                        className="px-8 py-6 rounded-full text-lg font-semibold border-2 border-gray-700 text-black hover:bg-white hover:text-black transition-all"
                    >
                        <Play className="mr-2 w-5 h-5 fill-current" /> Try Clara Live
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksCTA;
