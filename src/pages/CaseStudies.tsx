import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { openClaraLiveForm } from "@/utils/claraLiveForm";

const caseStudies = [
  {
    id: "john-owens",
    badge: "+29% Bookings",
    badgeColor: "bg-primary",
    title: "John Owens Services",
    subtitle: "John Owens Services was missing after-hours calls and losing ready-to-book customers. Clara AI now answers every inquiry, gathers details in real time, and sent post-call summaries + transcripts—turning voicemails into visits and restoring confidence across the team.",
    metric1: "$31,000",
    metric1Label: "revenue in 30 days",
    metric2: "30 days",
    metric2Label: "",
    industry: ["HVAC", "PLUMBING"],
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    id: "rapid-fire",
    badge: "Always-On Answering",
    badgeColor: "bg-primary",
    title: "Rapid Fire Protection",
    subtitle: "Growth had the owner juggling the office line and risk creating bottlenecks and missed opportunities. Clara AI now answers every inquiry, structured intake for fire inspections and maintenance, and rolls out SMS pulse alerts so the team stays in sync—and on time.",
    metric1: "100%",
    metric1Label: "call answer rate",
    metric2: "30 days",
    metric2Label: "",
    industry: ["FIRE PROTECTION"],
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    id: "apex-residential-solutions",
    badge: "+225 Leads",
    badgeColor: "bg-primary",
    title: "Apex Residential Solutions",
    subtitle: "With seasonal spikes, Apex needed help filtering spam and converting real demand. In 30 days, Clara AI handled high call volume, filtered robocalls, categorized intent, and surfaced qualified opportunities—so the team could focus on customers, not call triage.",
    metric1: "835 calls",
    metric1Label: "handled (+27% lead rate)",
    metric2: "30 days",
    metric2Label: "",
    industry: ["HVAC"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  }
];

const filters = ["All", "Plumbing", "HVAC", "Electrical", "Fire"];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Real Results from Real Customers | Clara AI Case Studies</title>
        <meta name="description" content="See how trade businesses are transforming their operations with Clara AI's multi-agent workforce, turning every call into booked jobs and cash collected." />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-primary text-sm font-bold uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              ★ Customer Success Stories
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Real Results from <span className="text-primary">Real Customers</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how trade businesses are transforming their operations with Clara AI's multi-agent workforce, turning every call into booked jobs and cash collected.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 bg-[#FAFAFA] border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-semibold text-muted-foreground">Filter by industry:</span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeFilter === filter
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-foreground border border-border hover:border-primary hover:text-primary"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter((study) =>
                activeFilter === "All"
                  ? true
                  : study.industry.some((i) =>
                    i.toLowerCase().includes(activeFilter.toLowerCase())
                  )
              )
              .map((study) => (
                <Link
                  key={study.id}
                  to={`/resources/case-studies/${study.id}`}
                  className="group relative bg-white overflow-hidden rounded-3xl shadow-card hover:shadow-premium hover:scale-105 transition-all duration-300 border border-border"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50`} />

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Badge */}
                    <div className="mb-6">
                      <span className={`${study.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                        {study.badge}
                      </span>
                      <div className="flex gap-2 mt-3">
                        {study.industry.map((ind) => (
                          <span key={ind} className="text-xs font-semibold text-foreground uppercase tracking-wider">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {study.subtitle}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-foreground">{study.metric1}</div>
                        <div className="text-xs text-muted-foreground">{study.metric1Label}</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">{study.metric2}</div>
                        <div className="text-xs text-muted-foreground">{study.metric2Label}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold">
                      Read Full Case Study →
                    </Button>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0e] to-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Ready to transform your operations?
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let Clara handle your calls while you focus on growing your business
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg font-semibold" onClick={openHubSpotForm}>
              Book a Growth Strategy Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-semibold" onClick={openClaraLiveForm}>
              See Clara Handle Live Calls
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
