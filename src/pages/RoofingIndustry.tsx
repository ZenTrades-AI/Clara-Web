import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RoofingHero from "@/components/Industries/Roofing/Hero";
import RoofingChallenges from "@/components/Industries/Roofing/Challenges";
import RoofingOperatingLayer from "@/components/Industries/Roofing/OperatingLayer";
import RoofingFeatures from "@/components/Industries/Roofing/RoofingFeatures";
import RoofingDataFlow from "@/components/Industries/Roofing/DataFlow";
import RoofingOutcomes from "@/components/Industries/Roofing/Outcomes";
import RoofingCTA from "@/components/Industries/Roofing/RoofingCTA";

const RoofingIndustry = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <RoofingHero />
            <RoofingChallenges />
            <RoofingOperatingLayer />
            <RoofingFeatures />
            <RoofingDataFlow />
            <RoofingOutcomes />
            <RoofingCTA />
            <Footer />
        </div>
    );
};

export default RoofingIndustry;
