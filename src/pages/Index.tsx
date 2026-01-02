import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Calendar, Bell, DollarSign } from "lucide-react";
import { openClaraLiveForm } from "@/utils/claraLiveForm";
import ClaraInAction from "@/components/ClaraInAction";
import CallTranscriptSection from "@/components/CallTranscriptSection";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import Integrations from "@/components/Integrations";
import PhotoMosaic from "@/components/PhotoMosaic";
import { openHubSpotForm } from "@/utils/hubspotForm";


/* LOGO ROW */
const logos = [
  "ServiceTitan",
  "Housecall Pro",
  "Jobber",
  "FieldEdge",
  "QuickBooks",
  "BuildOps",
  "ServiceTrade",
  "ServiceM8",
];

/* CAPTURE – CONVERT – COLLECT CARDS */
const stages = [
  {
    icon: Phone,
    title: "Capture",
    subtitle: "Clara Answers",
    description:
      "AI receptionist answers every call 24/7, qualifies leads, books jobs in CRM.",
    benefits: [
      "Instantly answers every call, 24/7",
      "Captures lead info and reason for call",
      "Books jobs directly into CRM",
    ],
    link: "/solutions/clara-answers",
  },
  {
    icon: Calendar,
    title: "Optimize",
    subtitle: "Clara Dispatch",
    description:
      "Assign the right tech to the right job using location, skills, and availability.",
    benefits: ["Skill-based routing", "Proximity matching", "Load balancing"],
    link: "/solutions/clara-dispatch",
  },
  {
    icon: Bell,
    title: "Convert",
    subtitle: "Clara Reminds",
    description:
      "Automated follow-ups on quotes, inspections, recalls, and overdue jobs.",
    benefits: ["Follow up on quotes automatically", "Reduce no-shows", "Convert more estimates"],
    link: "/solutions/clara-reminds",
  },
  {
    icon: DollarSign,
    title: "Collect",
    subtitle: "Clara Collects",
    description:
      "Turn unpaid invoices into collected cash with smart payment reminders.",
    benefits: ["30–40% faster payments", "Fewer manual calls", "Improved cash flow"],
    link: "/solutions/clara-collects",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Clara AI | AI Growth Engine for Trade Businesses</title>
        <meta
          name="description"
          content="Clara AI helps trade contractors increase revenue by automating calls, dispatch, reminders, and collections."
        />
      </Helmet>

      <Navigation />

      {/* ------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------- */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-white via-[#fafafa] to-[#ffecef] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                The AI Growth Engine for{" "}
                <span className="text-primary">Service Contractors</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Clara answers, dispatches, reminds, and collects so your office never
                misses a call, a job, or a payment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* PRIMARY CTA */}
                <Button
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  asChild
                >
                  <Link to="/pricing">Book a Growth Strategy Demo</Link>
                </Button>

                {/* SECONDARY CTA */}
                <Button
                  variant="outline"
                  className="px-8 py-3 bg-white text-black hover:text-black border-2 border-primary hover:bg-primary/5 rounded-full font-semibold hover:scale-105 transition-all"
                  onClick={openClaraLiveForm}
                >
                  See Clara Handle Live Calls
                </Button>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="relative lg:pl-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Phone, label: "Capture", description: "Never miss a call.", link: "/solutions/answers" },
                  { icon: Calendar, label: "Dispatch", description: "Assign the right tech.", link: "/solutions/dispatch" },
                  { icon: Bell, label: "Remind", description: "Reduce no-shows & recalls.", link: "/solutions/reminds" },
                  { icon: DollarSign, label: "Collect", description: "Get paid faster.", link: "/solutions/collects" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="group relative bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.04]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                      </div>

                      <div className="text-lg font-bold text-foreground mb-2">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- */}
      {/* TRUSTED LOGO SECTION */}
      {/* ------------------------------------------------------- */}
      <section className="py-16 px-6 bg-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-10 font-medium tracking-wide">
            Trusted by the nation's top home-service companies
          </p>

          <div className="relative">
            <div className="flex animate-scroll-infinite">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors duration-300 whitespace-nowrap"
                  style={{ minWidth: "140px" }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- */}
      {/* CAPTURE / CONVERT / COLLECT SECTION */}
      {/* ------------------------------------------------------- */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Capture, Convert and Collect
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every lead auto-converts into jobs. Every job dispatches efficiently. Every invoice gets paid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <Link
                  key={index}
                  to={stage.link}
                  className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-premium transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>

                  <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wide">
                    {stage.title}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {stage.subtitle}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  <ul className="space-y-2">
                    {stage.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
      <ClaraInAction />
      <CallTranscriptSection />
      <TestimonialsGrid />
      <Integrations />
      <PhotoMosaic />



      <Footer />
    </div>
  );
};

export default Index;
