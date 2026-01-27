import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { openHubSpotForm } from "@/utils/hubspotForm";

const SolutionsCTA = () => {
    return (
        <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0e] to-[#0a0a0a]">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[rgba(203,46,65,0.08)] to-[rgba(238,85,102,0.05)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Capture more. Convert smarter.
                    <br />
                    <span className="text-primary">Collect faster — with Clara.</span>
                </h2>

                <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Let Clara automate every part of your revenue engine.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" onClick={openHubSpotForm}>
                        Book a Demo
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/20 text-white hover:bg-white hover:text-black rounded-full font-semibold transition-all duration-300" onClick={openHubSpotForm}>
                        See How Clara Works
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsCTA;
