import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";

const FieldCopilotCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background glow similar to screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-50/50 blur-[100px] rounded-full -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-red-100/50 p-12 text-center border border-red-50">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        See Clara AI Field Co-Pilot <span className="text-clara-red">in Action</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Experience how hands-free AI transforms field operations without disrupting how teams work.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-clara-red hover:bg-red-700 text-white px-8 h-12 rounded-full font-medium shadow-lg shadow-red-500/20 group" onClick={openHubSpotForm}>
                            Book a Demo
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <ListenToClaraButton className="border-clara-red text-clara-red hover:bg-red-50 px-8 h-12 rounded-full font-medium bg-transparent border-2 border-red-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FieldCopilotCTA;
