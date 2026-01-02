import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/Solutions/SolutionsHero";
import AIAgents from "@/components/Solutions/AIAgents";
import HowItWorks from "@/components/Solutions/HowItWorks";
import IndustriesServed from "@/components/Solutions/IndustriesServed";
import BusinessModels from "@/components/Solutions/BusinessModels";
import GrowthImpact from "@/components/Solutions/GrowthImpact";
import SolutionsCTA from "@/components/Solutions/SolutionsCTA";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SolutionsHero />
      <AIAgents />
      <HowItWorks />
      <IndustriesServed />
      <BusinessModels />
      <GrowthImpact />
      <SolutionsCTA />
      <Footer />
    </div>
  );
};

export default Solutions;
