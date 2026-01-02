import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/ClaraAnswers/Hero";
import PerformanceStats from "@/components/ClaraAnswers/PerformanceStats";
import ClaraFlow from "@/components/ClaraAnswers/ClaraFlow";
import IndustryTabs from "@/components/ClaraAnswers/IndustryTabs";
import CallInsights from "@/components/ClaraAnswers/CallInsights";
import Integrations from "@/components/ClaraAnswers/Integrations";
import Testimonial from "@/components/ClaraAnswers/Testimonial";
import SetupSteps from "@/components/ClaraAnswers/SetupSteps";
import FAQ from "@/components/ClaraAnswers/FAQ";
import FinalCTA from "@/components/ClaraAnswers/FinalCTA";

const ClaraAnswers = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <PerformanceStats />
            <ClaraFlow />
            <IndustryTabs />
            <CallInsights />
            <Integrations />
            <Testimonial />
            <SetupSteps />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default ClaraAnswers;
