import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/FieldCopilot/Hero";
import HowItWorks from "@/components/FieldCopilot/HowItWorks";
import WhatIsFieldCopilot from "@/components/FieldCopilot/WhatIsFieldCopilot";
import WhatYouGain from "@/components/FieldCopilot/WhatYouGain";
import DesignedFor from "@/components/FieldCopilot/DesignedFor";
import DataFlow from "@/components/FieldCopilot/DataFlow";
import SecurityAndReliability from "@/components/FieldCopilot/SecurityAndReliability";
import FieldCopilotCTA from "@/components/FieldCopilot/FieldCopilotCTA";


const FieldCopilot = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <WhatIsFieldCopilot />
            <HowItWorks />
            <WhatYouGain />
            <DataFlow />
            <DesignedFor />
            <SecurityAndReliability />
            <FieldCopilotCTA />
            <Footer />
        </div>
    );
};

export default FieldCopilot;
