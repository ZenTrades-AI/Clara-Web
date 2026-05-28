import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Industries/FireProtection/Hero";
import Challenges from "@/components/Industries/FireProtection/Challenges";
import OperatingLayer from "@/components/Industries/FireProtection/OperatingLayer";
import FieldCoPilotFeature from "@/components/Industries/FireProtection/FieldCoPilotFeature";
import AnswersFeature from "@/components/Industries/FireProtection/AnswersFeature";
import ClaraCollectsFeature from "@/components/Industries/FireProtection/ClaraCollectsFeature";
import DataFlow from "@/components/Industries/FireProtection/DataFlow";
import Outcomes from "@/components/Industries/FireProtection/Outcomes";
import FireProtectionCTA from "@/components/Industries/FireProtection/FireProtectionCTA";

const FireProtectionIndustry = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <Challenges />
            <OperatingLayer />
            <FieldCoPilotFeature />
            <AnswersFeature />
            <ClaraCollectsFeature />
            <DataFlow />
            <Outcomes />
            <FireProtectionCTA />
            <Footer />
        </div>
    );
};

export default FireProtectionIndustry;
