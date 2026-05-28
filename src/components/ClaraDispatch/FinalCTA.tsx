import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-deep-black via-[#1a0a0e] to-deep-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Stop wasting time on manual dispatch.
          <br />
          <span className="text-primary">Let Clara optimize every assignment.</span>
        </h2>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Clara Dispatch ensures the right technician gets to the right job at the right time — automatically.
        </p>

        <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary-dark transition-all" onClick={openHubSpotForm}>
          <MapPin className="mr-2 h-5 w-5" />
          Book a Demo
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
