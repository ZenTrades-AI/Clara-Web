import { Button } from "@/components/ui/button";
import { openClaraLiveForm } from "@/utils/claraLiveForm";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { PhoneCall, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in leading-tight">
          Clara Answers: Never Lose a Job to <span className="text-primary">Voicemail Again</span>
        </h1>

        {/* Enhanced subheadline */}
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Clara captures every call in under 2 rings, qualifies the job, and books it instantly — 24/7. No wait times. No missed revenue. Just 100% call capture.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in pt-4" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg font-semibold" onClick={openHubSpotForm}>
            <PhoneCall className="mr-2 h-5 w-5" />
            Book a Growth Strategy Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-semibold" onClick={openClaraLiveForm}>
            <Play className="mr-2 h-5 w-5" />
            See Clara Handle Live Calls
          </Button>
        </div>

        {/* Micro-proof */}
        <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Teams see 25–40% more booked jobs in the first 30 days
        </p>

        {/* Premium UI Mockup */}
        <div className="mt-20 animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary-light/15 blur-3xl" />
            <div className="relative bg-white border border-border rounded-xl shadow-premium overflow-hidden">
              {/* Mockup header */}
              <div className="bg-muted/30 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-semibold text-foreground">Incoming Call</span>
                </div>
              </div>

              {/* Mockup content */}
              <div className="p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-left text-base text-foreground leading-relaxed">
                      "Hi, this is Clara from Smith HVAC. How can I help you today?"
                    </p>
                    <p className="text-left text-base text-muted-foreground leading-relaxed">
                      "Yeah, my AC stopped working and it's 95 degrees in here..."
                    </p>
                    <p className="text-left text-base text-foreground leading-relaxed">
                      "I understand that's urgent. Let me get you scheduled right away. What's your address?"
                    </p>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-center gap-3 py-4 px-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Job scheduled in ServiceTitan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
