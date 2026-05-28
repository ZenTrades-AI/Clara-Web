import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/Pricing/PricingHero";
import WhyNoFixedPrice from "@/components/Pricing/WhyNoFixedPrice";
import InvestmentFactors from "@/components/Pricing/InvestmentFactors";
import RealisticExamples from "@/components/Pricing/RealisticExamples";
import ROISection from "@/components/Pricing/ROISection";
import WhatHappensNext from "@/components/Pricing/WhatHappensNext";
import PricingFinalCTA from "@/components/Pricing/PricingFinalCTA";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PricingHero />
      <WhyNoFixedPrice />
      <InvestmentFactors />
      <RealisticExamples />
      <ROISection />
      <WhatHappensNext />
      <PricingFinalCTA />
      <Footer />
    </div>
  );
};

export default Pricing;
