import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { openClaraLiveForm } from "@/utils/claraLiveForm";

const SolutionsHero = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Solutions Powered by Clara's{" "}
                    <span className="text-primary">AI Growth Engine</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                    Four intelligent agents working together so your office never misses a call, a job, or a payment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                    <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg" onClick={openHubSpotForm}>
                        Book a Growth Strategy Demo
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5 hover:text-black rounded-full font-semibold" onClick={openClaraLiveForm}>
                        See Clara Handle Live Calls
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;
