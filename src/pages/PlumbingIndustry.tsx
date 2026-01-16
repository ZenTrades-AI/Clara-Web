import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PlumbingHero from "@/components/Industries/Plumbing/Hero";
import PlumbingChallenges from "@/components/Industries/Plumbing/Challenges";
import PlumbingOperatingLayer from "@/components/Industries/Plumbing/OperatingLayer";
import PlumbingFeatures from "@/components/Industries/Plumbing/PlumbingFeatures";
import PlumbingDataFlow from "@/components/Industries/Plumbing/DataFlow";
import PlumbingOutcomes from "@/components/Industries/Plumbing/Outcomes";
import PlumbingCTA from "@/components/Industries/Plumbing/PlumbingCTA";

const PlumbingIndustry = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <PlumbingHero />
            <PlumbingChallenges />
            <PlumbingOperatingLayer />
            <PlumbingFeatures />
            <PlumbingDataFlow />
            <PlumbingOutcomes />
            <PlumbingCTA />
            <Footer />
        </div>
    );
};

export default PlumbingIndustry;
