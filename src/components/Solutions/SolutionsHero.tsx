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
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-6 border border-red-100">
                    AI FOR TRADES
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
                    One Operating Layer. <br />
                    <span className="text-primary">Solutions for Every Trade.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    From the field to the office, Clara connects every part of your business into a single, intelligent workflow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-16">
                    <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg" onClick={openClaraLiveForm}>
                        See How Clara Works
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-black rounded-full font-semibold" onClick={openHubSpotForm}>
                        Book a Demo
                    </Button>
                </div>

                {/* Partner Logos - Placeholder based on UI, assuming generic or existing assets */}
                <div className="flex justify-center items-center gap-8 opacity-50 grayscale">
                    {/* Add actual logos here if available, for now using text placeholders or generic icons if needed */}
                    {/* Based on screenshot, there are logos below buttons. I will check for logo assets in a moment. */}
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;
