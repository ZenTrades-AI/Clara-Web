import { Button } from "@/components/ui/button";
import { openClaraLiveForm } from "@/utils/claraLiveForm";
import { openHubSpotForm } from "@/utils/hubspotForm";


const ReadyToCTA = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--deep-black))] to-[hsl(var(--gradient-end))]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Ready to transform your operations?
                </h2>

                <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Let Clara handle your calls while you focus on growing your business
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                        size="lg"
                        className="text-lg px-10 py-7 bg-primary hover:bg-primary-dark transition-all font-semibold shadow-premium"

                        onClick={openHubSpotForm}
                    >
                        Book a 15-min Demo
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-10 py-7 bg-white text-foreground border-2 border-white hover:bg-white/90 hover:text-black transition-all font-semibold"
                        onClick={openClaraLiveForm}
                    >
                        Try Clara Live
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ReadyToCTA;
