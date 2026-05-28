import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ApplyModal } from "@/components/ApplyModal";

const Hiring = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleApplyClick = (role: string) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Founding Tech Lead & Founding PM — Clara AI, Bengaluru</title>
        <meta
          name="description"
          content="Clara is the agent platform for commercial trades. 100+ paying customers. We're hiring the founding engineering and product team in Bengaluru."
        />
        <meta property="og:title" content="Founding Tech Lead & Founding PM — Clara AI, Bengaluru" />
        <meta property="og:description" content="Clara is the agent platform for commercial trades. 100+ paying customers. We're hiring the founding engineering and product team in Bengaluru." />
        <meta property="og:image" content="https://justclara.ai/photos/og-hiring.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://justclara.ai/hiring" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": "Founding Tech Lead (Engineering)",
            "description": "Join the founding team at Clara AI in Bengaluru. You will set the technical and product direction for the next 10x growth, handling architecture, hiring, and customer relationships for our AI agent platform.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Clara AI",
              "sameAs": "https://justclara.ai"
            },
            "employmentType": "FULL_TIME",
            "datePosted": new Date().toISOString().split('T')[0],
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              }
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": "Founding Product Manager",
            "description": "Join the founding team at Clara AI in Bengaluru. You will lead the product direction for our AI agent platform built for commercial service businesses, working closely with customers from week two.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Clara AI",
              "sameAs": "https://justclara.ai"
            },
            "employmentType": "FULL_TIME",
            "datePosted": new Date().toISOString().split('T')[0],
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-32 md:pt-40 pb-[50px] px-6">
        <div className="max-w-7xl mx-auto">
          {/* HERO SECTION */}
          <div className="flex flex-col items-center text-center gap-[30px] pb-[50px] max-w-4xl mx-auto pt-10">
            <div className="inline-block px-4 py-1.5 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              FOUNDING ROLES • HSR, BENGALURU • NOW HIRING
            </div>

            <h1 className="text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[76px] font-normal tracking-tight text-foreground">
              The <span className="text-[#A91D24] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>AI Growth Engine</span> <br className="hidden md:block" />
              for Commercial Trades Businesses
            </h1>

            <p className="text-[16px] leading-[28px] lg:text-[18px] lg:leading-[32px] text-muted-foreground max-w-2xl">
              Join Clara.ai, not just another AI startup, but the operating system powering a $600B+ commercial trades industry. Clara is at the intersection of voice-first AI agents and compliance heavy commercial trades.
            </p>

            <Button
              className="px-8 py-6 bg-[#A91D24] hover:bg-[#8A151C] text-white rounded-md text-sm font-bold tracking-wide transition-all uppercase mt-4"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              SEE OPEN ROLES <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* SECOND SECTION: MARKET & VALUE PROPS */}
          <RevealOnScroll>
            <div className="py-[60px] md:py-[100px] max-w-7xl mx-auto px-4 lg:px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#E5E7EB] bg-white relative">
                
                {/* Column 1 */}
                <div className="group flex flex-col pt-12 pb-16 md:pr-12 relative overflow-hidden border-b md:border-b-0 md:border-r border-[#E5E7EB]">
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#A91D24] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                  
                  <div className="text-[100px] leading-[0.8] font-bold text-[#F8F9FA] group-hover:text-[#FFF0F1] transition-colors duration-700 mb-6 font-mono tracking-tighter">
                    01
                  </div>
                  
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#09090B] mb-6 tracking-tight group-hover:text-[#A91D24] transition-colors duration-500">
                    A trillion-dollar market the AI wave has barely touched.
                  </h3>
                  
                  <p className="text-[15px] leading-[26px] text-[#52525B] font-normal">
                    Commercial trades — the HVAC, plumbing, electrical, and life-safety companies that keep every building you've ever walked into running — is one of the largest pieces of the economy still operating on phones, spreadsheets, and after-hours dispatching. The category produced ServiceTitan, a multi-billion-dollar public company, on legacy software alone. The AI layer on top of it is wide open.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="group flex flex-col pt-12 pb-16 md:px-12 relative overflow-hidden border-b md:border-b-0 md:border-r border-[#E5E7EB]">
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#A91D24] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                  
                  <div className="text-[100px] leading-[0.8] font-bold text-[#F8F9FA] group-hover:text-[#FFF0F1] transition-colors duration-700 mb-6 font-mono tracking-tighter">
                    02
                  </div>
                  
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#09090B] mb-6 tracking-tight group-hover:text-[#A91D24] transition-colors duration-500">
                    Real product, real customers, real revenue.
                  </h3>
                  
                  <p className="text-[15px] leading-[26px] text-[#52525B] font-normal">
                    100+ paying customers. Multiple agents already in production — answering calls, scheduling jobs, recovering missed revenue, coaching technicians. Customers see ROI in the first month. We're not selling a deck. We're deploying AI agents the moment a contract is signed.
                  </p>
                </div>

                {/* Column 3 */}
                <div className="group flex flex-col pt-12 pb-16 md:pl-12 relative overflow-hidden">
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#A91D24] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                  
                  <div className="text-[100px] leading-[0.8] font-bold text-[#F8F9FA] group-hover:text-[#FFF0F1] transition-colors duration-700 mb-6 font-mono tracking-tighter">
                    03
                  </div>
                  
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#09090B] mb-6 tracking-tight group-hover:text-[#A91D24] transition-colors duration-500">
                    Founding leverage that compounds.
                  </h3>
                  
                  <p className="text-[15px] leading-[26px] text-[#52525B] font-normal">
                    You'll set the technical and product direction for the next 10x growth. Architecture, hiring, customer relationships — yours to shape. This is the rare 0-to-1 seat that comes with paying customers, a market actively pulling for the product, and a founder who has already done the hard part of finding it.
                  </p>
                </div>

              </div>
            </div>
          </RevealOnScroll>

          {/* THIRD SECTION: STATS ROW */}
          <RevealOnScroll>
            <div className="py-[40px] md:py-[60px] max-w-7xl mx-auto px-4 lg:px-0">
              <div className="bg-[#27272A] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px]">
                  {[
                    { title: "100+", desc: "Paying Customers", detail: "Active & growing" },
                    { title: "5", desc: "AI Agents", detail: "2 Live, 3 in Production" },
                    { title: "10x", desc: "Realized ROI", detail: "For our customers" },
                    { title: "40%", desc: "MoM Growth", detail: "Consistent scaling" },
                    { title: "2", desc: "Global Offices", detail: "HSR, Bengaluru & SF" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`group bg-[#09090B] p-8 md:p-10 flex flex-col justify-center hover:bg-[#18181B] transition-colors duration-500 relative overflow-hidden ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                    >
                      {/* Subtle red accent that drops from top on hover */}
                      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#A91D24] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                      
                      <div className="relative z-10 flex flex-col items-start text-left h-full">
                        <h3 className="text-[56px] lg:text-[64px] xl:text-[72px] font-bold text-white leading-[0.9] tracking-tighter mb-6 group-hover:text-[#A91D24] transition-colors duration-500">
                          {stat.title}
                        </h3>
                        <div className="mt-auto">
                          <p className="text-[14px] font-bold text-white mb-2 uppercase tracking-widest opacity-90">
                            {stat.desc}
                          </p>
                          <p className="text-[14px] text-[#A1A1AA] font-normal leading-[1.6]">
                            {stat.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* FOURTH SECTION: WHAT WE'RE BUILDING */}
          <RevealOnScroll>
            <div className="py-[100px] max-w-7xl mx-auto px-4 lg:px-0">
              
              {/* Heading & Intro */}
              <div className="mb-16 text-center">
                <h2 className="text-black text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[76px] font-normal tracking-tight mb-4">
                  What we're <span className="font-bold text-[#A91D24]" style={{ fontFamily: "'Playfair Display', serif" }}>building</span>
                </h2>
                <p className="text-[#52525B] text-[16px] md:text-[18px] max-w-3xl mx-auto leading-[28px] mb-2 font-normal">
                  Clara is an agent platform built specifically for commercial service businesses. Each agent owns a real workflow — the kind that today is handled by a CSR on the phone, a dispatcher in a spreadsheet, or a manager reviewing call recordings on a Friday. 
                </p>
                <p className="text-[#09090B] font-bold text-[16px] leading-[26px]">
                  Below is what's live today. The roadmap doubles the agent surface area over the next four quarters.
                </p>
              </div>

              {/* Clean Image-like Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1: Clara Field co-pilot */}
                <Link to="/solutions/field-copilot" className="bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden relative flex flex-col items-center pt-12 pb-12 px-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 block h-full cursor-pointer hover:-translate-y-1 transition-transform">
                  {/* Richer Top Gradient matching the image style's subtle patterns */}
                  <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-[#A91D24]/[0.05] to-transparent pointer-events-none"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A91D24]/[0.04] rounded-full blur-[20px] pointer-events-none"></div>
                  <div className="absolute top-10 -right-10 w-32 h-32 bg-[#A91D24]/[0.03] rounded-full blur-[20px] pointer-events-none"></div>
                  
                  {/* Icon Box */}
                  <div className="w-20 h-20 bg-white rounded-[20px] shadow-[0px_8px_16px_rgba(0,0,0,0.04)] border border-[#F3F4F6] flex items-center justify-center relative z-10 mb-8">
                    <svg className="w-10 h-10 text-[#09090B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-[26px] font-bold text-[#09090B] tracking-tight mb-4">Clara Field co-pilot</h3>
                  
                  {/* Sub-pills (Channels) */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                      Mobile App
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      Smart Glasses
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#52525B] text-[15px] leading-[26px] text-center mb-10 max-w-[300px]">
                    Empower your technicians with real-time guidance, automated inspections, and workflow intelligence directly from the field.
                  </p>

                  {/* Feature Pills Grid - Expanded */}
                  <div className="flex flex-wrap justify-center gap-2.5 mt-auto">
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Hands-free capture</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Guided workflows</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Instant CRM Sync</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Voice-activated</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Auto-Documentation</span>
                  </div>
                </Link>

                {/* Card 2: Clara Answers */}
                <Link to="/solutions/answers" className="bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden relative flex flex-col items-center pt-12 pb-12 px-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 block h-full cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-[#A91D24]/[0.05] to-transparent pointer-events-none"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A91D24]/[0.04] rounded-full blur-[20px] pointer-events-none"></div>
                  <div className="absolute top-10 -right-10 w-32 h-32 bg-[#A91D24]/[0.03] rounded-full blur-[20px] pointer-events-none"></div>
                  
                  <div className="w-20 h-20 bg-white rounded-[20px] shadow-[0px_8px_16px_rgba(0,0,0,0.04)] border border-[#F3F4F6] flex items-center justify-center relative z-10 mb-8">
                    <svg className="w-10 h-10 text-[#09090B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>

                  <h3 className="text-[26px] font-bold text-[#09090B] tracking-tight mb-4">Clara Answers</h3>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      Voice
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                      SMS
                    </div>
                  </div>

                  <p className="text-[#52525B] text-[15px] leading-[26px] text-center mb-10 max-w-[300px]">
                    AI flawlessly answers incoming calls, instantly books jobs, and captures critical details 24/7. Never miss a lead again.
                  </p>

                  <div className="flex flex-wrap justify-center gap-2.5 mt-auto">
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">100% Answer rate</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">24/7 Coverage</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Direct Booking</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Smart Routing</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Call Summaries</span>
                  </div>
                </Link>

                {/* Card 3: Clara Collects */}
                <Link to="/solutions/collects" className="bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden relative flex flex-col items-center pt-12 pb-12 px-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 block h-full cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-[#A91D24]/[0.05] to-transparent pointer-events-none"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A91D24]/[0.04] rounded-full blur-[20px] pointer-events-none"></div>
                  <div className="absolute top-10 -right-10 w-32 h-32 bg-[#A91D24]/[0.03] rounded-full blur-[20px] pointer-events-none"></div>
                  
                  <div className="w-20 h-20 bg-white rounded-[20px] shadow-[0px_8px_16px_rgba(0,0,0,0.04)] border border-[#F3F4F6] flex items-center justify-center relative z-10 mb-8">
                    <svg className="w-10 h-10 text-[#09090B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>

                  <h3 className="text-[26px] font-bold text-[#09090B] tracking-tight mb-4">Clara Collects</h3>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      Voice
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                      SMS
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-[#FAFAFA]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      Email
                    </div>
                  </div>

                  <p className="text-[#52525B] text-[15px] leading-[26px] text-center mb-10 max-w-[300px]">
                    Drive revenue recovery with automated follow-ups, reminders, and collections—without the awkward conversations.
                  </p>

                  <div className="flex flex-wrap justify-center gap-2.5 mt-auto">
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">40% Faster collection</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Omnichannel</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">100% Compliant</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Auto-Reminders</span>
                    <span className="px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[#52525B] text-[12px] font-medium bg-white hover:border-[#A91D24]/30 transition-colors cursor-default shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">Payment Links</span>
                  </div>
                </Link>

              </div>
            </div>
          </RevealOnScroll>

        </div>

        {/* NEW Ultra-Premium Split Layout Video Section */}
        <div className="relative bg-white py-[140px] px-4 md:px-8 border-y border-[#E5E7EB] overflow-hidden">
          {/* Subtle dotted grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.6]"></div>
          {/* Fading gradients for the grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
          
          <RevealOnScroll>
            <div className="relative max-w-7xl mx-auto">
              <div className="mb-32 text-center flex flex-col items-center">
                <h2 className="text-[#09090b] text-[48px] leading-[56px] lg:text-[72px] lg:leading-[80px] font-normal tracking-tight mb-6">
                  See it for <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A91D24] to-[#e63946]" style={{ fontFamily: "'Playfair Display', serif" }}>yourself</span>
                </h2>
                <p className="text-[#52525B] text-[18px] lg:text-[22px] max-w-3xl mx-auto leading-[32px] font-light">
                  Don't take our word for it. Watch the platform work in real-time and listen to actual customers reacting to the experience.
                </p>
              </div>

              {/* Feature 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
                <div className="w-full lg:w-[45%]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A91D24]/10 text-[#A91D24] text-[12px] font-bold uppercase tracking-widest mb-6">
                    Product Walkthrough
                  </div>
                  <h3 className="text-[36px] leading-[44px] lg:text-[48px] lg:leading-[56px] font-semibold text-[#09090b] mb-6 tracking-tight">
                    Under the hood
                  </h3>
                  <p className="text-[#52525B] text-[18px] lg:text-[20px] leading-[32px]">
                    We skip the marketing pitch. Watch exactly how the system handles a live call, processes context, checks availability, and books a job straight into the CRM without anyone picking up a phone.
                  </p>
                </div>
                <div className="w-full lg:w-[55%] relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#A91D24]/10 to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="relative w-full rounded-[32px] p-2 md:p-3 bg-white/50 backdrop-blur-xl border border-[#E5E7EB] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-transform duration-700 hover:-translate-y-2">
                    <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-[#09090b] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
                      <iframe 
                        title="vimeo-player-1" 
                        src="https://player.vimeo.com/video/1096761906?h=55da164f52&dnt=1" 
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 (Reversed) */}
              <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full lg:w-[55%] relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#27C93F]/10 to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="relative w-full rounded-[32px] p-2 md:p-3 bg-white/50 backdrop-blur-xl border border-[#E5E7EB] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-transform duration-700 hover:-translate-y-2">
                    <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-[#09090b] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
                      <iframe 
                        title="vimeo-player-2" 
                        src="https://player.vimeo.com/video/1099735852?h=f100e147fa&dnt=1" 
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[45%]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27C93F]/10 text-[#1a9e2d] text-[12px] font-bold uppercase tracking-widest mb-6">
                    Real Interactions
                  </div>
                  <h3 className="text-[36px] leading-[44px] lg:text-[48px] lg:leading-[56px] font-semibold text-[#09090b] mb-6 tracking-tight">
                    The "wow" moments
                  </h3>
                  <p className="text-[#52525B] text-[18px] lg:text-[20px] leading-[32px]">
                    The best way to understand the technology is to listen to the people using it. Here are raw, unedited moments of real customers realizing just how capable the voice agent on the other end of the line actually is.
                  </p>
                </div>
              </div>

            </div>
          </RevealOnScroll>
        </div>

        {/* 5th Section - Careers */}
        <div id="open-roles" className="bg-white py-[50px] px-4 md:px-8 scroll-mt-[100px]">
          <RevealOnScroll>
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-black text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[76px] font-normal tracking-tight mb-4">
                  Create the <span className="font-bold text-[#A91D24]" style={{ fontFamily: "'Playfair Display', serif" }}>future</span> with us
                </h2>
                <p className="text-[#5c5c5c] text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28px] max-w-[800px] mx-auto">
                  Join the team building the AI layer for a massive, overlooked industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {/* Card 1 */}
                <div onClick={() => handleApplyClick("Founding Tech Lead (Engineering)")} className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col h-[280px] shadow-[4px_4px_12px_rgba(0,0,0,0.08)] cursor-pointer hover:border-[#A91D24] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="mb-auto">
                    <h3 className="text-black font-bold text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px] mb-4">Founding Tech Lead<br className="hidden lg:block" />(Engineering)</h3>
                    <p className="text-[#8c8c8c] text-[12px] leading-[20px]">
                      HSR, Bengaluru • In office/Hybrid •<br className="hidden lg:block" />
                      Reports to the CEO • Founding team
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[#A91D24] font-bold text-[14px]">Apply for the role</span>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#A91D24] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Card 2 */}
                <div onClick={() => handleApplyClick("Founding Product Manager")} className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col h-[280px] shadow-[4px_4px_12px_rgba(0,0,0,0.08)] cursor-pointer hover:border-[#A91D24] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="mb-auto">
                    <h3 className="text-black font-bold text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px] mb-4">Founding Product<br className="hidden lg:block" />Manager</h3>
                    <p className="text-[#8c8c8c] text-[12px] leading-[20px]">
                      HSR, Bengaluru • In office/Hybrid •<br className="hidden lg:block" />
                      Reports to the CEO • Founding team
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[#A91D24] font-bold text-[14px]">Apply for the role</span>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#A91D24] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Card 3 */}
                <div onClick={() => handleApplyClick("Customer Success Associate")} className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col h-[280px] shadow-[4px_4px_12px_rgba(0,0,0,0.08)] cursor-pointer hover:border-[#A91D24] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="mb-auto">
                    <h3 className="text-black font-bold text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px] mb-4">Customer Success<br className="hidden lg:block" />Associate</h3>
                    <p className="text-[#8c8c8c] text-[12px] leading-[20px]">
                      HSR, Bengaluru • In office/Hybrid • Reports to the<br className="hidden lg:block" />
                      Head of Customer Success • Founding team
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[#A91D24] font-bold text-[14px]">Apply for the role</span>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#A91D24] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Card 4 */}
                <div onClick={() => handleApplyClick("Account Executive")} className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col h-[280px] shadow-[4px_4px_12px_rgba(0,0,0,0.08)] cursor-pointer hover:border-[#A91D24] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="mb-auto">
                    <h3 className="text-black font-bold text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px] mb-4">Account<br className="hidden lg:block" />Executive</h3>
                    <p className="text-[#8c8c8c] text-[12px] leading-[20px]">
                      Pune • In office • Reports to the VP,<br className="hidden lg:block" />
                      Growth • Founding team
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[#A91D24] font-bold text-[14px]">Apply for the role</span>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#A91D24] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Card 5 */}
                <a href="mailto:ankit.dhingra@justclara.ai" className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col h-[280px] lg:col-span-2 shadow-[4px_4px_12px_rgba(0,0,0,0.08)] cursor-pointer hover:border-[#A91D24] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="mb-auto">
                    <h3 className="text-black font-bold text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px] mb-4">Don't see your role?</h3>
                    <p className="text-[#8c8c8c] text-[12px] leading-[20px]">
                      We are early. If you are an exceptional builder, designer, or operator in Bengaluru and the work above<br className="hidden lg:block" />
                      feels like you, write to us anyway. We hire ahead of need when the person is right.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[#A91D24] font-bold text-[14px]">Write to the founder's office</span>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#A91D24] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>

              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* NEW Section - How we work */}
        <div className="bg-white pt-[50px] pb-[100px] px-4 md:px-8 bg-[#fdfdfd]">
          <RevealOnScroll>
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-black text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[76px] font-normal tracking-tight mb-4">
                  How we <span className="font-bold text-[#A91D24]" style={{ fontFamily: "'Playfair Display', serif" }}>work</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                {/* Card 1 */}
                <div className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col relative overflow-hidden h-full shadow-[4px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-black font-bold text-[22px] leading-[28px] mb-4">In office at HSR.</h3>
                  <p className="text-[#8c8c8c] text-[12px] leading-[20px] mb-8 relative z-10">
                    We hire builders who want to be in a room together. Whiteboards, sprints, customer calls on speaker, hard problems solved before lunch.
                  </p>
                  <div className="mt-auto w-full flex justify-center items-end pt-6">
                    <img src="/photos/clara-office-bengaluru-hsr.webp" alt="Clara AI Team working in office at HSR Layout Bengaluru" className="w-full max-h-[240px] object-contain object-bottom pointer-events-none" loading="lazy" width="400" height="300" />
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col relative overflow-hidden h-full shadow-[4px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-black font-bold text-[22px] leading-[28px] mb-4">Customer-attached,<br />from week two.</h3>
                  <p className="text-[#8c8c8c] text-[12px] leading-[20px] mb-8 relative z-10">
                    Every engineer and PM owns customer conversations. You will be on calls with HVAC owners, dispatchers, and CSRs within your first two weeks.<br />
                    Engineers who do not want to talk to customers will be unhappy here.
                  </p>
                  <div className="mt-auto w-full flex justify-center items-end pt-6">
                    <img src="/photos/clara-customer-interaction.webp" alt="Customer interaction and attachment from week two at Clara AI" className="w-full max-h-[240px] object-contain object-bottom pointer-events-none" loading="lazy" width="400" height="300" />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group border border-[#e5e7eb] rounded-[12px] p-8 bg-white flex flex-col relative overflow-hidden h-full shadow-[4px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-black font-bold text-[22px] leading-[28px] mb-4">Default to ship.</h3>
                  <p className="text-[#8c8c8c] text-[12px] leading-[20px] mb-8 relative z-10">
                    Small team. Fast cycles. No committees. Decisions are made in days, often hours. We disagree in writing and commit in person.
                  </p>
                  <div className="mt-auto w-full flex justify-center items-end pt-6">
                    <img src="/photos/clara-fast-shipping-cycle.webp" alt="Clara AI team's default to ship methodology and fast cycles" className="w-full max-h-[240px] object-contain object-bottom pointer-events-none" loading="lazy" width="400" height="300" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>


      </main>

      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} role={selectedRole} />

      <Footer />
    </div>
  );
};

export default Hiring;
