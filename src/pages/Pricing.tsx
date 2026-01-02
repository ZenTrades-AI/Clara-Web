import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/Pricing/PricingHero";
import BusinessInfoForm from "@/components/Pricing/BusinessInfoForm";
import WhatHappensNext from "@/components/Pricing/WhatHappensNext";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PricingHero />
      <BusinessInfoForm />
      <WhatHappensNext />
      <Footer />
    </div>
  );
};

export default Pricing;
