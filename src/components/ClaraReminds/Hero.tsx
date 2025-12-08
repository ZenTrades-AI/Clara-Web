import { Button } from "@/components/ui/button";
import { openClaraLiveForm } from "@/utils/claraLiveForm";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { Bell, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Clara Reminds: Reduce No-Shows. <span className="text-primary">Boost Repeat Jobs.</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          AI-driven reminders for estimates, inspections, and maintenance. Turn forgotten opportunities into scheduled revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg font-semibold" onClick={openHubSpotForm}>
            <Bell className="mr-2 h-5 w-5" />
            Book a Growth Strategy Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5 hover:text-black rounded-full font-semibold" onClick={openClaraLiveForm}>
            <Play className="mr-2 h-5 w-5" />
            See Clara Handle Live Calls
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Convert 25–35% more estimates into scheduled work
        </p>
      </div>
    </section>
  );
};

export default Hero;
