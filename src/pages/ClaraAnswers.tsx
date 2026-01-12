import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/ClaraAnswers/Hero";
import ProblemSection from "@/components/ClaraAnswers/ProblemSection";
import HowItWorks from "@/components/ClaraAnswers/HowItWorks";
import Capabilities from "@/components/ClaraAnswers/Capabilities";
import Benefits from "@/components/ClaraAnswers/Benefits";
import FinalCTA from "@/components/ClaraAnswers/FinalCTA";

const ClaraAnswers = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <ProblemSection />
            <HowItWorks />
            <Capabilities />
            <Benefits />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default ClaraAnswers;
