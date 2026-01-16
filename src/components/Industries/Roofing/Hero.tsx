import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { openClaraLiveForm } from "@/utils/claraLiveForm";

const RoofingHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="container relative mx-auto px-4 z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-clara-red text-sm font-medium mb-8">
                        <Hammer className="w-4 h-4" />
                        Roofing Industry
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        The AI Growth Engine Built for <span className="text-clara-red">Roofing Companies</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                        How Clara helps roofing businesses capture storm leads, document inspections for insurance, and collect on completed jobs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                        <Button size="lg" className="bg-clara-red hover:bg-red-700 text-white px-8 h-12 rounded-full font-medium group" onClick={openHubSpotForm}>
                            Book a Demo
                        </Button>
                        <Button variant="outline" size="lg" className="border-clara-red text-clara-red hover:bg-red-50 px-8 h-12 rounded-full font-medium" onClick={openClaraLiveForm}>
                            See Clara in Action
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofingHero;
