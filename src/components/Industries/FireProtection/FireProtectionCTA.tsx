import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";

const FireProtectionCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        See How Clara Works for <span className="text-clara-red">Fire Protection Teams</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Experience how AI-powered operations can help you stay compliant, capture more revenue, and scale without adding overhead.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-clara-red hover:bg-red-700 text-white px-8 h-12 rounded-md font-medium" onClick={openHubSpotForm}>
                            Book a Demo
                        </Button>
                        <ListenToClaraButton className="border-clara-red text-clara-red hover:bg-red-50 px-8 h-12 rounded-md font-medium bg-transparent border-2 border-red-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FireProtectionCTA;
