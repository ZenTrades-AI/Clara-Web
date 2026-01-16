import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { openClaraLiveForm } from "@/utils/claraLiveForm";
import { PhoneCall, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0e] to-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Every missed call is <span className="text-primary">lost revenue.</span>
        </h2>

        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Clara ensures that never happens again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg font-semibold" onClick={openHubSpotForm}>
            <PhoneCall className="mr-2 h-5 w-5" />
            Book a Growth Strategy Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 rounded-full font-semibold border-2 border-white" onClick={openClaraLiveForm}>
            <Play className="mr-2 h-5 w-5" />
            See Clara Handle Live Calls
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
