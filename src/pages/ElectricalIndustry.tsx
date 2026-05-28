import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ElectricalHero from "@/components/Industries/Electrical/Hero";
import ElectricalChallenges from "@/components/Industries/Electrical/Challenges";
import ElectricalOperatingLayer from "@/components/Industries/Electrical/OperatingLayer";
import ElectricalFeatures from "@/components/Industries/Electrical/ElectricalFeatures";
import ElectricalDataFlow from "@/components/Industries/Electrical/DataFlow";
import ElectricalOutcomes from "@/components/Industries/Electrical/Outcomes";
import ElectricalCTA from "@/components/Industries/Electrical/ElectricalCTA";

const ElectricalIndustry = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <ElectricalHero />
            <ElectricalChallenges />
            <ElectricalOperatingLayer />
            <ElectricalFeatures />
            <ElectricalDataFlow />
            <ElectricalOutcomes />
            <ElectricalCTA />
            <Footer />
        </div>
    );
};

export default ElectricalIndustry;
