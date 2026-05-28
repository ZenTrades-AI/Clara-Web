import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/ClaraReminds/Hero";
import PerformanceStats from "@/components/ClaraReminds/PerformanceStats";
import RemindsFlow from "@/components/ClaraReminds/RemindsFlow";
import IndustryTabs from "@/components/ClaraReminds/IndustryTabs";
import Results from "@/components/ClaraReminds/Results";
import Integrations from "@/components/ClaraReminds/Integrations";
import Testimonial from "@/components/ClaraReminds/Testimonial";
import SetupSteps from "@/components/ClaraReminds/SetupSteps";
import FAQ from "@/components/ClaraReminds/FAQ";
import FinalCTA from "@/components/ClaraReminds/FinalCTA";

const ClaraReminds = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <PerformanceStats />
            <RemindsFlow />
            <IndustryTabs />
            <Results />
            <Integrations />
            <Testimonial />
            <SetupSteps />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default ClaraReminds;
