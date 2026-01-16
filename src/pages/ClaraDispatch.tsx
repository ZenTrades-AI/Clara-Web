import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/ClaraDispatch/Hero";
import PerformanceStats from "@/components/ClaraDispatch/PerformanceStats";
import DispatchFlow from "@/components/ClaraDispatch/DispatchFlow";
import TradeLogic from "@/components/ClaraDispatch/TradeLogic";
import Integrations from "@/components/ClaraDispatch/Integrations";
import Testimonial from "@/components/ClaraDispatch/Testimonial";
import SetupSteps from "@/components/ClaraDispatch/SetupSteps";
import FAQ from "@/components/ClaraDispatch/FAQ";
import FinalCTA from "@/components/ClaraDispatch/FinalCTA";

const ClaraDispatch = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <PerformanceStats />
            <DispatchFlow />
            <TradeLogic />
            <Integrations />
            <Testimonial />
            <SetupSteps />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default ClaraDispatch;
