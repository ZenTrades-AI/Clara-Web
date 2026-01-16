import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";
import { Bell, FileText } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[rgba(203,46,65,0.08)] to-[rgba(238,85,102,0.05)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl animate-glow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Stop losing revenue to
          <br />
          <span className="text-primary">forgotten follow-ups.</span>
        </h2>

        <p className="text-xl text-[#FAFAFA]/80 max-w-2xl mx-auto leading-relaxed">
          Let Clara automatically convert your warm leads into booked jobs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-primary-light hover:shadow-glow transition-all duration-300 shadow-premium font-semibold" onClick={openHubSpotForm}>
            <Bell className="mr-2 h-5 w-5" />
            Book a Demo
          </Button>
          <ListenToClaraButton className="text-lg px-10 py-7 bg-white text-[#121212] hover:bg-[#FAFAFA] transition-all duration-300 shadow-premium font-semibold border-2 border-white" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
