import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";

const IntegrationsHero = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Seamless Integrations with{" "}
                    <span className="text-primary">Your Existing Stack</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                    Clara plugs into the tools contractors already use, so AI can read context, post jobs, and sync payments.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg" onClick={openHubSpotForm}>
                        Book a Growth Strategy Demo
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsHero;
