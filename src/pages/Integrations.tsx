import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IntegrationsHero from "@/components/Integrations/IntegrationsHero";
import IntegrationsGrid from "@/components/Integrations/IntegrationsGrid";
import IntegrationsFAQ from "@/components/Integrations/IntegrationsFAQ";
import IntegrationsCTA from "@/components/Integrations/IntegrationsCTA";

const Integrations = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <IntegrationsHero />
            <IntegrationsGrid />
            <IntegrationsFAQ />
            <IntegrationsCTA />
            <Footer />
        </div>
    );
};

export default Integrations;
