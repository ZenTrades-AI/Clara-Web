import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";

const BusinessInfoForm = () => {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Tell Us About Your Business
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We'll customize Clara to fit your business needs
                    </p>
                </div>

                {/* Card that just triggers HubSpot modal */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-premium text-center space-y-6">
                    <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                        Answer a few quick questions in our intake form and we&apos;ll build a
                        custom demo and pricing plan based on your trades, call volume, and
                        tech stack.
                    </p>

                    <Button
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                        onClick={openHubSpotForm}
                    >
                        Get Custom Demo &amp; Pricing
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        We&apos;ll contact you within 24 hours to schedule your personalized demo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BusinessInfoForm;
