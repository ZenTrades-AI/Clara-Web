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
    badge: "+29% BOOKINGS",
    title: "John Owens Services",
    location: "California",
    metric: "$31,000",
    metricDescription: "additional revenue in 30 days",
    industry: ["HVAC & PLUMBING"],
    link: "/resources/case-studies/john-owens"
  },
  {
    id: "apex-residential-solutions",
    badge: "+225 LEADS CAPTURED",
    title: "Apex Residential Solutions",
    location: "Texas",
    metric: "835",
    metricDescription: "calls handled with 27% lead rate",
    industry: ["HVAC"],
    link: "/resources/case-studies/apex-residential-solutions"
  },
  {
    id: "rapid-fire",
    badge: "100% COMPLIANCE",
    title: "Rapid Fire Protection",
    location: "California",
    metric: "100%",
    metricDescription: "call answer rate achieved",
    industry: ["FIRE PROTECTION"],
    link: "/resources/case-studies/rapid-fire"
  },
  {
    id: "noor-electrical",
    badge: "24/7 COVERAGE",
    title: "Noor Electrical Services",
    location: "Arizona",
    metric: "92%",
    metricDescription: "of after-hours calls converted",
    industry: ["ELECTRICAL"],
    link: "#"
  },
  {
    id: "hvac-proz",
    badge: "20 HOURS SAVED WEEKLY",
    title: "HVAC Proz",
    location: "Florida",
    metric: "85%",
    metricDescription: "of calls handled by AI",
    industry: ["HVAC"],
    link: "#"
  },
  {
    id: "valley-fire-safety",
    badge: "ZERO MISSED DEADLINES",
    title: "Valley Fire Safety",
    location: "Nevada",
    metric: "40%",
    metricDescription: "faster payment collection",
    industry: ["FIRE PROTECTION"],
    link: "#"
  }
];

const filters = ["All", "HVAC", "Plumbing", "Electrical", "Fire Protection"];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Real Results from Real Customers | Clara AI Case Studies</title>
        <meta name="description" content="See how trade businesses are transforming their operations with Clara AI's multi-agent workforce, turning every call into booked jobs and cash collected." />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-clara-red text-xs font-bold uppercase tracking-wider bg-red-50 px-4 py-2 rounded-full">
              ★ Customer Success Stories
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Real Results from <span className="text-clara-red">Real Customers</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how field service businesses are transforming their operations with Clara AI, turning every call into booked jobs and faster payments.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-sm font-semibold text-slate-500 mr-2">Filter by industry:</span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${activeFilter === filter
                  ? "bg-clara-red text-white border-clara-red"
                  : "bg-white text-slate-600 border-slate-200 hover:border-clara-red hover:text-clara-red"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-12 px-6 bg-[#FAFAFA]">
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
                  to={study.link}
                  className="group bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100"
                >
                  {/* Badge */}
                  <div className="mb-6">
                    <span className="bg-clara-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {study.badge}
                    </span>
                  </div>

                  {/* Industry */}
                  <div className="mb-2">
                    {study.industry.map((ind) => (
                      <span key={ind} className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {ind}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {study.title}
                  </h3>

                  {/* Location */}
                  <p className="text-xs text-slate-400 font-medium mb-8">
                    {study.location}
                  </p>

                  {/* Metric */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-clara-red mb-1">{study.metric}</div>
                    <div className="text-xs text-slate-500 font-medium">{study.metricDescription}</div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button className="w-full bg-clara-red hover:bg-clara-red/90 text-white rounded-full font-bold py-6">
                      Read Full Case Study <span className="ml-2">→</span>
                    </Button>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32 px-4 bg-[#1a0505] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-clara-red/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to transform your<br />operations?
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Let Clara handle your calls while you focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-clara-red hover:bg-clara-red/90 text-white rounded-full font-bold"
              onClick={openHubSpotForm}
            >
              Book a Growth Strategy Demo
            </Button>
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-white text-clara-red hover:bg-slate-50 rounded-full font-bold"
              onClick={openClaraLiveForm}
            >
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
