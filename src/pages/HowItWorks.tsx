import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HowItWorksHero from "@/components/HowItWorks/HowItWorksHero";
import ThreeIntelligentAgents from "@/components/HowItWorks/ThreeIntelligentAgents";
import DataFlow from "@/components/HowItWorks/DataFlow";
import WhyClaraWorks from "@/components/HowItWorks/WhyClaraWorks";
import DesignedForRealWorld from "@/components/HowItWorks/DesignedForRealWorld";
import BuiltForTrust from "@/components/HowItWorks/BuiltForTrust";
import HowItWorksCTA from "@/components/HowItWorks/HowItWorksCTA";
import { Helmet } from "react-helmet-async";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>How Clara Works | The AI Growth Engine</title>
        <meta name="description" content="See how Clara's three intelligent agents - Front Office, Field Co-Pilot, and Back Office - work together to transform your home services business." />
      </Helmet>

      <Navigation />
      <HowItWorksHero />
      <ThreeIntelligentAgents />
      <DataFlow />
      <WhyClaraWorks />
      <DesignedForRealWorld />
      <BuiltForTrust />
      <HowItWorksCTA />
      <Footer />
    </div>
  );
};

export default HowItWorks;
