import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HowItWorksHero from "@/components/HowItWorks/HowItWorksHero";
import BuildYourEngine from "@/components/HowItWorks/BuildYourEngine";
import OmnichannelSupport from "@/components/HowItWorks/OmnichannelSupport";
import ReadyToCTA from "@/components/HowItWorks/ReadyToCTA";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HowItWorksHero />
      <BuildYourEngine />
      <OmnichannelSupport />
      <ReadyToCTA />
      <Footer />
    </div>
  );
};

export default HowItWorks;
