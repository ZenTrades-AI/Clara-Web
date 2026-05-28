import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/Resources/ResourcesHero";
import FeaturedResources from "@/components/Resources/FeaturedResources";
import ResourcesFAQ from "@/components/Resources/ResourcesFAQ";
import StayUpdated from "@/components/Resources/StayUpdated";
import GetHelp from "@/components/Resources/GetHelp";


const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ResourcesHero />
      <FeaturedResources />
      <ResourcesFAQ />
      <StayUpdated />
      <GetHelp />
      <Footer />
    </div>
  );
};

export default Resources;
