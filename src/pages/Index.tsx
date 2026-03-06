import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Calendar, Bell, DollarSign, Glasses, Play, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";

// Lazy load below-the-fold components
const ClaraInAction = lazy(() => import("@/components/ClaraInAction"));
const CallTranscriptSection = lazy(() => import("@/components/CallTranscriptSection"));
const TestimonialsGrid = lazy(() => import("@/components/TestimonialsGrid"));
const OrbitingCircles = lazy(() => import("@/components/OrbitingCircles"));
const PhotoMosaic = lazy(() => import("@/components/PhotoMosaic"));
const ExploreSolutions = lazy(() => import("@/components/ExploreSolutions"));
const WhyTeamsChooseClara = lazy(() => import("@/components/WhyTeamsChooseClara"));


/* LOGO ROW */
const logos = [
  { name: "ServiceTitan", src: "/teams/1.png" },
  { name: "Housecall Pro", src: "/teams/2 (5).png" },
  { name: "Jobber", src: "/teams/3.png" },
  { name: "FieldEdge", src: "/teams/4 (4).png" },
  { name: "QuickBooks", src: "/teams/5 (1).png" },
  { name: "BuildOps", src: "/teams/6 (1).png" },
  { name: "ServiceTrade", src: "/teams/7 (1).png" },
  { name: "ServiceM8", src: "/teams/8 (1).png" },
  { name: "Partner", src: "/teams/9.png" },
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
      {/* ------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------- */}
      {/* ------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------- */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/HB.webp"
            alt="Background placeholder"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay layer to ensure text in front stands out. Adjust or remove if not needed. */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-border shadow-sm mb-8 hover:shadow-md transition-all">
              <div className="flex gap-1.5 text-[#D32F2F]">
                <Glasses className="w-4 h-4" />
                <Phone className="w-4 h-4" />
                <DollarSign className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-foreground tracking-wide">Three Agents. One Operating Layer.</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-foreground">
              The AI Growth Engine for <br className="hidden md:block" />
              <span className="text-[#D32F2F]">Service Contractors</span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Clara answers calls, guides field teams, and collects payments — <br className="hidden md:block" />
              so your business grows without adding headcount.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
                asChild
              >
                <Link to="/pricing">Book a Growth Strategy Demo <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>

              <ListenToClaraButton
                className="bg-white text-foreground border border-border hover:bg-gray-50 hover:text-[#D32F2F] hover:scale-105 w-full sm:w-auto text-[#D32F2F] fill-[#D32F2F]"
              />
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        {/* TRUSTED BY TEXT - Moved below the 3D section */}
        <div className="py-12 text-center bg-white">
          <p className="text-sm text-muted-foreground font-medium mb-0 max-w-2xl mx-auto leading-relaxed">
            Trusted by the nation's top home-service companies across <span className="font-bold text-foreground">HVAC</span>, <span className="font-bold text-foreground">Fire Protection</span>, <span className="font-bold text-foreground">Roofing</span>, <br className="hidden md:block" />
            <span className="font-bold text-foreground">Electrical</span>, and <span className="font-bold text-foreground">Plumbing</span>.
          </p>
        </div>
      </RevealOnScroll>



      {/* ------------------------------------------------------- */}
      {/* TRUSTED LOGO SECTION */}
      {/* ------------------------------------------------------- */}
      <section className="py-16 px-6 bg-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Removed the text here as it is now in the Hero section */}

          <div className="relative">
            <div className="flex animate-scroll-infinite">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ minWidth: "140px" }}
                >
                  <img src={logo.src} alt={logo.name} className="h-[5.5rem] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- */}
      {/* CAPTURE / CONVERT / COLLECT SECTION */}
      {/* ------------------------------------------------------- */}
      {/* ------------------------------------------------------- */}
      {/* THREE INTELLIGENT AGENTS SECTION */}
      {/* ------------------------------------------------------- */}
      <RevealOnScroll>
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Three Intelligent Agents. <span className="text-[#D32F2F]">One Operating Layer.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Clara isn't just software. It's an operating layer that runs your field, front office,
                and revenue workflows together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-7xl mx-auto">
              {/* Card 1: Field Intelligence */}
              <div className="bg-gradient-to-br from-white to-[#FFF5F5] rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#D32F2F]/30 transition-all duration-300 group">
                <div className="inline-block px-3 py-1 bg-[#FFEBEE] text-[#D32F2F] text-[10px] font-bold tracking-wider uppercase rounded-full mb-6">
                  FIELD INTELLIGENCE
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#FFEBEE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Glasses className="w-7 h-7 text-[#D32F2F]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Your AI assistant in the field</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Real-time guidance, inspections, documentation, and workflow intelligence for technicians.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Hands-free capture with smart glasses",
                    "Step-by-step inspection workflows",
                    "Reports synced to CRM automatically"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/solutions/field-copilot" className="inline-flex items-center text-[#D32F2F] font-bold text-sm hover:gap-2 transition-all group-hover:translate-x-1">
                  Explore Field Co-Pilot <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Card 2: Front Office */}
              <div className="bg-gradient-to-br from-white to-[#F3F4F6] rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#D32F2F]/30 transition-all duration-300 group">
                <div className="inline-block px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold tracking-wider uppercase rounded-full mb-6">
                  FRONT OFFICE
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-[#2E7D32]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Never miss a call again</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  AI answers calls, books jobs, and captures details 24/7 — even after hours.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "100% call answer rate",
                    "24/7 professional coverage",
                    "Seamless team handoffs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/solutions/answers" className="inline-flex items-center text-[#2E7D32] font-bold text-sm hover:gap-2 transition-all group-hover:translate-x-1">
                  See Clara Answer Calls <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Card 3: Payments */}
              <div className="bg-gradient-to-br from-white to-[#E3F2FD] rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#D32F2F]/30 transition-all duration-300 group">
                <div className="inline-block px-3 py-1 bg-[#E3F2FD] text-[#1565C0] text-[10px] font-bold tracking-wider uppercase rounded-full mb-6">
                  PAYMENTS
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#E3F2FD] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-7 h-7 text-[#1565C0]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Get paid faster without friction</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Automated follow-ups, reminders, and collections — without awkward conversations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "40% faster average collection",
                    "Voice, text & email reminders",
                    "Fully logged for compliance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1565C0] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/solutions/collects" className="inline-flex items-center text-[#1565C0] font-bold text-sm hover:gap-2 transition-all group-hover:translate-x-1">
                  See How Collections Work <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <Suspense fallback={<div className="h-40" />}>
          <ExploreSolutions />
        </Suspense>
      </RevealOnScroll>

      <Suspense fallback={<div className="h-40" />}>
        <WhyTeamsChooseClara />
      </Suspense>

      <RevealOnScroll>
        <Suspense fallback={<div className="h-40" />}>
          <ClaraInAction />
        </Suspense>
      </RevealOnScroll>

      <RevealOnScroll>
        <Suspense fallback={<div className="h-40" />}>
          <CallTranscriptSection />
        </Suspense>
      </RevealOnScroll>

      <RevealOnScroll>
        <Suspense fallback={<div className="h-40" />}>
          <TestimonialsGrid />
        </Suspense>
      </RevealOnScroll>

      <Suspense fallback={<div className="h-40" />}>
        <OrbitingCircles />
      </Suspense>

      <RevealOnScroll>
        <Suspense fallback={<div className="h-40" />}>
          <PhotoMosaic />
        </Suspense>
      </RevealOnScroll>



      <Footer />
    </div >
  );
};

export default Index;
