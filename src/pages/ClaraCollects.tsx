import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/ClaraCollects/Hero";
import PerformanceStats from "@/components/ClaraCollects/PerformanceStats";
import CollectsFlow from "@/components/ClaraCollects/CollectsFlow";
import Benefits from "@/components/ClaraCollects/Benefits";
import IndustryExamples from "@/components/ClaraCollects/IndustryExamples";
import Integrations from "@/components/ClaraCollects/Integrations";
import Testimonial from "@/components/ClaraCollects/Testimonial";
import SetupSteps from "@/components/ClaraCollects/SetupSteps";
import FAQ from "@/components/ClaraCollects/FAQ";
import FinalCTA from "@/components/ClaraCollects/FinalCTA";

const ClaraCollects = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <PerformanceStats />
            <CollectsFlow />
            <Benefits />
            <IndustryExamples />
            <Integrations />
            <Testimonial />
            <SetupSteps />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default ClaraCollects;
