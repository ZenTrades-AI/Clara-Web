import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HVACHero from "@/components/Industries/HVAC/Hero";
import HVACChallenges from "@/components/Industries/HVAC/Challenges";
import HVACOperatingLayer from "@/components/Industries/HVAC/OperatingLayer";
import HVACFeatures from "@/components/Industries/HVAC/HVACFeatures";
import HVACDataFlow from "@/components/Industries/HVAC/DataFlow";
import HVACOutcomes from "@/components/Industries/HVAC/Outcomes";
import HVACCTA from "@/components/Industries/HVAC/HVACCTA";

const HVACIndustry = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <HVACHero />
            <HVACChallenges />
            <HVACOperatingLayer />
            <HVACFeatures />
            <HVACDataFlow />
            <HVACOutcomes />
            <HVACCTA />
            <Footer />
        </div>
    );
};

export default HVACIndustry;
