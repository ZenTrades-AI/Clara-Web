import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";

const HowItWorksHero = () => {
    const handleScrollToEngine = () => {
        const element = document.getElementById('ai-growth-engine');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleTryClara = () => {
        window.location.href = "tel:+14059136009";
    };

    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-[10%] left-[30%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    How Clara Works
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Unlock 24/7 AI growth with the world's most advanced AI for home services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={handleScrollToEngine}
                        className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        See the AI Growth Engine <ArrowRight className="ml-2 w-5 h-5" />
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

export default HowItWorksHero;
