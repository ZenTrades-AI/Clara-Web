import { BarChart3, Shield, Brain, Heart, CheckCircle, TrendingUp } from "lucide-react";

const features = [
  { icon: BarChart3, label: "Real-time transcripts" },
  { icon: Shield, label: "Spam & robocall filtering" },
  { icon: Brain, label: "Intent detection" },
  { icon: Heart, label: "Sentiment scoring" },
  { icon: CheckCircle, label: "Call outcome tracking" },
  { icon: TrendingUp, label: "Booking source analytics" },
];

const CallInsights = () => {
  return (
    <section className="py-24 px-4 bg-soft-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Understand your callers
              <br />
              <span className="text-primary">like never before</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Clara gives you real-time visibility into every conversation — intent, sentiment, booking outcomes, caller history, and urgency. See which calls your team should focus on, which ones close fastest, and which lead types grow revenue the most.
            </p>
            
            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right: Premium Dashboard Mockup */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 blur-3xl" />
            <div className="relative bg-card rounded-2xl border border-border shadow-premium overflow-hidden">
              {/* Dashboard header */}
              <div className="bg-deep-black/5 border-b border-border px-6 py-4">
                <h4 className="font-semibold text-foreground">Call Insights Dashboard</h4>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 space-y-4">
                {/* Sample insight cards */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Emergency HVAC Repair</span>
                    <span className="text-xs font-semibold text-primary">High Intent</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    "My AC completely stopped working and it's 95 degrees..."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "90%" }} />
                    </div>
                    <span className="text-xs font-medium text-foreground">90%</span>
                  </div>
                </div>
                
                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Quote Request</span>
                    <span className="text-xs font-semibold text-muted-foreground">Medium Intent</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    "I'm looking to get pricing on a new HVAC system..."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground rounded-full" style={{ width: "65%" }} />
                    </div>
                    <span className="text-xs font-medium text-foreground">65%</span>
                  </div>
                </div>
                
                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">General Inquiry</span>
                    <span className="text-xs font-semibold text-muted-foreground">Low Intent</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    "What are your business hours?"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground rounded-full" style={{ width: "30%" }} />
                    </div>
                    <span className="text-xs font-medium text-foreground">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallInsights;
