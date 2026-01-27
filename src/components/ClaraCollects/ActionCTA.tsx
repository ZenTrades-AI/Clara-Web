import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";
import { ArrowRight, MessageCircle } from "lucide-react";

const ActionCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-50 via-clara-red to-red-50" />
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            See Clara Collects <span className="text-clara-red">in Action</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Experience how AI-powered collections turn completed work into completed payments without adding headcount or awkward conversations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-clara-red hover:bg-red-700 text-white px-8 h-12 rounded-full font-medium"
                                onClick={openHubSpotForm}
                            >
                                Book a Demo
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <ListenToClaraButton className="border-clara-red text-clara-red hover:bg-red-50 px-8 h-12 rounded-full font-medium bg-transparent border-2 border-red-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActionCTA;
