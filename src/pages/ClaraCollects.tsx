import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/ClaraCollects/Hero";
import ProblemSection from "@/components/ClaraCollects/ProblemSection";
import HowItWorks from "@/components/ClaraCollects/HowItWorks";
import Capabilities from "@/components/ClaraCollects/Capabilities";
import Benefits from "@/components/ClaraCollects/Benefits";
import ConnectsToClara from "@/components/ClaraCollects/ConnectsToClara";
import ActionCTA from "@/components/ClaraCollects/ActionCTA";

const ClaraCollects = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <ProblemSection />
            <HowItWorks />
            <Capabilities />
            <Benefits />
            <ConnectsToClara />
            <ActionCTA />
            <Footer />
        </div>
    );
};

export default ClaraCollects;
