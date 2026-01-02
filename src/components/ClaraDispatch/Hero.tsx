import { Button } from "@/components/ui/button";
import { openClaraLiveForm } from "@/utils/claraLiveForm";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { MapPin, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Clara Dispatch: Assign the Right Technician, <span className="text-primary">Every Time</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Clara reads service requests, references CRM data, and dispatches techs instantly — including after-hours. No more manual scheduling or missed assignments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg font-semibold" onClick={openHubSpotForm}>
            <MapPin className="mr-2 h-5 w-5" />
            Book a Growth Strategy Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5 hover:text-black rounded-full font-semibold" onClick={openClaraLiveForm}>
            <Play className="mr-2 h-5 w-5" />
            See Clara Handle Live Calls
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Teams see 30% more booked jobs with intelligent dispatch
        </p>
      </div>
    </section>
  );
};

export default Hero;
