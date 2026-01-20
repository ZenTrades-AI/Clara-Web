import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { openHubSpotForm } from "@/utils/hubspotForm";

const ResourcesHero = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0e] to-[#0a0a0a]">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Resources & Insights
                </h1>

                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Stay ahead with industry insights, technical guides, and best practices for growing your service business with AI
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                    <Button
                        size="lg"
                        className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg"
                        onClick={openHubSpotForm}
                    >
                        Book a 15-min Demo
                    </Button>

                </div>
            </div>
        </section>
    );
};

export default ResourcesHero;
