import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Home, Check, ArrowLeft, ArrowRight, Phone, DollarSign, User, Mail, Building, Briefcase, Laptop, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  first: string;
  last: string;
  company: string;
  trade: string;
  phone: string;
  software: string;
  techs: string;
}

const Nfpa2026 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    first: "",
    last: "",
    company: "",
    trade: "",
    phone: "",
    software: "",
    techs: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof FormValues, boolean>> = {};
    let hasError = false;

    // Required fields: email, first name, last name, phone number
    const requiredFields: (keyof FormValues)[] = [
      "email",
      "first",
      "last",
      "phone",
    ];

    requiredFields.forEach((field) => {
      if (!formValues[field] || formValues[field].trim() === "") {
        newErrors[field] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    // Smooth scroll to success card container
    setTimeout(() => {
      if (successRef.current) {
        successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Helper to scroll smoothly to target selector
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#16121A] antialiased font-sans">
      <Helmet>
        <title>Meet Clara AI at NFPA Conference & Expo 2026 — Booth 871</title>
        <meta
          name="description"
          content="Unveiling Clara AI's new Confirmations & Quote Follow-Up AI Agents at NFPA Expo 2026. Book a live demo or schedule a booth meeting at Booth 871."
        />
      </Helmet>

      {/* Local keyframe animations for pulses, float animations, and rings */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(214, 62, 80, 0.6); }
            70% { box-shadow: 0 0 0 11px rgba(214, 62, 80, 0); }
            100% { box-shadow: 0 0 0 0 rgba(214, 62, 80, 0); }
          }
          .eyebrow-dot-pulse {
            animation: pulse 2.2s infinite;
          }
          @keyframes glow-pulse {
            0%, 100% { border-color: rgba(214, 62, 80, 0.3); box-shadow: 0 0 12px rgba(214, 62, 80, 0.05); }
            50% { border-color: rgba(214, 62, 80, 0.8); box-shadow: 0 0 25px rgba(214, 62, 80, 0.25); }
          }
          .new-agent-glow {
            animation: glow-pulse 3s infinite ease-in-out;
          }
          @keyframes ring {
            0% { transform: scale(0.9); opacity: 0.5; }
            70% { transform: scale(1.15); opacity: 0; }
            100% { opacity: 0; }
          }
          .booth-ring {
            animation: ring 2.6s infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0.5deg); }
            50% { transform: translateY(-8px) rotate(-0.5deg); }
          }
          .animate-float {
            animation: float-slow 6s ease-in-out infinite;
          }
          @keyframes scaleIn {
            from { transform: scale(0.96); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scaleIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `
      }} />

      {/* Clara Navigation */}
      <Navigation />

      {/* Main page content wrapper - starts below the navigation height */}
      <div className="pt-20 md:pt-24">
        {/* Premium Center-Aligned Hero Section */}
        <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-gradient-to-br from-white via-[#FAF9FB] to-[#FFF2F4] text-center">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: 'linear-gradient(#E8E3EE 1px, transparent 1px), linear-gradient(90deg, #E8E3EE 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              WebkitMaskImage: 'radial-gradient(800px 500px at 50% 50%, #000, transparent 80%)',
              maskImage: 'radial-gradient(800px 500px at 50% 50%, #000, transparent 80%)'
            }}
          />

          {/* Ambient Glows */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#FDECEE] blur-[130px] pointer-events-none opacity-60 z-0" />

          <div className="max-w-[1000px] mx-auto px-4 relative z-10 flex flex-col items-center">
            {/* Eyebrow badges (Two Segmented Pills) */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDECEE] text-[#D63E50] text-xs font-bold uppercase tracking-wider rounded-full border border-[#D63E50]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D63E50] eyebrow-dot-pulse" />
                June 22-24, 2026
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-[#FAF9FB] text-[#473F52] border border-[#E8E3EE] text-xs font-bold uppercase tracking-wider rounded-full">
                Las Vegas
              </span>
            </div>

            {/* Hype Teaser Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D63E50]/10 text-[#D63E50] text-xs font-black rounded-full mb-8 border border-[#D63E50]/30 shadow-md max-w-full text-center transition-all duration-300 hover:scale-105">
              <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D63E50] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D63E50]"></span>
              </span>
              <span>EXPO EXCLUSIVE: Unveiling Confirmations and Quote Follow-Up AI Agents</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#16121A] mb-6 leading-[1.08] max-w-[20ch]">
              Meet <span className="text-[#D63E50]">Clara AI</span> at NFPA 2026
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-[#473F52] mb-10 max-w-[58ch] leading-relaxed">
              See how Clara AI helps trade businesses streamline field work, speed up reporting, and keep operations moving from job site to invoice.
            </p>

            {/* CTA Button 1 */}
            <div className="w-full sm:w-auto mb-14 flex justify-center">
              <a
                href="#form"
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#D63E50] hover:bg-[#B52A3B] text-white font-bold text-center text-sm md:text-base rounded-xl transition-all duration-150 shadow-lg shadow-[#D63E50]/25 hover:shadow-[#D63E50]/40 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto min-w-[250px]"
              >
                Book your meeting
              </a>
            </div>

            {/* Visual Workflow showing Clara AI in action (What we do) */}
            <div className="w-full max-w-[900px] bg-white border border-[#E8E3EE] rounded-2xl p-6 md:p-8 shadow-[0_24px_60px_-20px_rgba(22,18,26,0.14)] text-left relative overflow-hidden animate-float">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D63E50] via-[#EE5566] to-[#D63E50]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E3EE] pb-4 mb-6 gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FC615D]" />
                    <span className="w-3 h-3 rounded-full bg-[#FDBC40]" />
                    <span className="w-3 h-3 rounded-full bg-[#34C749]" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#473F52] ml-2 font-mono">CLARA AI OPERATING LAYER</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FDECEE] text-[#D63E50] text-[10px] font-black uppercase rounded-md self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D63E50] animate-pulse" />
                  Expo Preview - Integrations Scheduled
                </span>
              </div>

              {/* Steps grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Step 1 */}
                <div className="bg-[#FAF9FB] border border-[#E8E3EE] p-5 rounded-xl hover:border-[#D63E50]/25 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-white border border-[#E8E3EE] text-[#16121A] flex items-center justify-center font-bold text-xs">1</span>
                    <Phone className="w-4 h-4 text-[#473F52]" />
                  </div>
                  <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-[#D63E50]">1. Clara AI Answers</h4>
                  <h5 className="font-extrabold text-[14px] text-[#16121A] mt-1 leading-snug">Capture every call</h5>
                  <p className="text-[12px] text-[#473F52] mt-1.5 leading-relaxed">Let Clara AI answer quickly, route the right requests, and keep your team from missing valuable business opportunities.</p>
                </div>
                {/* Step 2 */}
                <div className="bg-white border border-[#D63E50]/30 shadow-[0_4px_16px_rgba(214,62,80,0.06)] p-5 rounded-xl new-agent-glow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-[#FDECEE] text-[#D63E50] flex items-center justify-center font-bold text-xs">2</span>
                    <span className="text-[9px] font-black uppercase bg-[#D63E50] text-white px-1.5 py-0.5 rounded tracking-wider">EXPO PREVIEW</span>
                  </div>
                  <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-[#D63E50]">2. Confirmations</h4>
                  <h5 className="font-extrabold text-[14px] text-[#16121A] mt-1 leading-snug">Reduce no-shows automatically</h5>
                  <p className="text-[12px] text-[#473F52] mt-1.5 leading-relaxed">Use smart confirmation workflows to verify appointments, cut down on missed visits, and keep schedules on track.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-white border border-[#D63E50]/30 shadow-[0_4px_16px_rgba(214,62,80,0.06)] p-5 rounded-xl new-agent-glow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-[#FDECEE] text-[#D63E50] flex items-center justify-center font-bold text-xs">3</span>
                    <span className="text-[9px] font-black uppercase bg-[#D63E50] text-white px-1.5 py-0.5 rounded tracking-wider">EXPO PREVIEW</span>
                  </div>
                  <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-[#D63E50]">3. Quote Follow-Up</h4>
                  <h5 className="font-extrabold text-[14px] text-[#16121A] mt-1 leading-snug">Turn estimates into approvals</h5>
                  <p className="text-[12px] text-[#473F52] mt-1.5 leading-relaxed">Automatically follow up on open quotes, keep jobs warm, and help your team recover more revenue with less manual chasing.</p>
                </div>
                {/* Step 4 */}
                <div className="bg-[#FAF9FB] border border-[#E8E3EE] p-5 rounded-xl hover:border-[#D63E50]/25 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-white border border-[#E8E3EE] text-[#16121A] flex items-center justify-center font-bold text-xs">4</span>
                    <DollarSign className="w-4 h-4 text-[#473F52]" />
                  </div>
                  <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-[#D63E50]">4. Clara AI Collects</h4>
                  <h5 className="font-extrabold text-[14px] text-[#16121A] mt-1 leading-snug">Speed up collections</h5>
                  <p className="text-[12px] text-[#473F52] mt-1.5 leading-relaxed">Make it easier to collect payment details, reduce back-and-forth, and move from completed work to closed invoice faster.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HYPE LAUNCH SECTION: Introducing Confirmations & Quote Follow-Up Agents */}
        <section className="py-20 md:py-28 px-6 bg-[#16121A] text-white overflow-hidden relative">
          {/* Glowing circles */}
          <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#D63E50]/10 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#D63E50]/15 blur-[120px] pointer-events-none" />

          <div className="max-w-[1120px] mx-auto relative z-10 text-center">
            {/* World Premiere Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-wider text-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D63E50] eyebrow-dot-pulse" />
              LAUNCHING AT NFPA 2026
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-[28ch] mx-auto mb-6">
              Meet the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D63E50] to-[#FCA5A5]">Voice AI Agents</span>
            </h2>

            <p className="text-[#B9B2C4] text-base md:text-lg max-w-[64ch] mx-auto mb-16 leading-relaxed">
              Clara AI is expanding beyond call handling with new AI workflows built to help trade businesses automate confirmations, quote follow-up, and collections.            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto text-left">
              {/* Agent 1 Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all hover:border-[#D63E50]/40 group relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D63E50]/5 rounded-bl-[100px] group-hover:bg-[#D63E50]/10 transition-all" />
                  <div className="w-12 h-12 rounded-xl bg-[#D63E50]/15 border border-[#D63E50]/30 flex items-center justify-center mb-6">
                    <span className="font-extrabold text-lg text-[#D63E50]">01</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Clara AI Confirms</h3>
                  <p className="text-[#C9C3D2] text-sm leading-relaxed mb-8">
                    Stop wasting technician time. Clara AI Confirms automatically coordinates access, verifies scheduled visits, and keeps customers aligned before the appointment.                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[11px] text-[#D63E50] font-bold">
                  <span>Zero manual texts</span>
                  <span>Rescheduling automation</span>
                  <span>Secure CRM sync</span>
                </div>
              </div>

              {/* Agent 2 Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all hover:border-[#D63E50]/40 group relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D63E50]/5 rounded-bl-[100px] group-hover:bg-[#D63E50]/10 transition-all" />
                  <div className="w-12 h-12 rounded-xl bg-[#D63E50]/15 border border-[#D63E50]/30 flex items-center justify-center mb-6">
                    <span className="font-extrabold text-lg text-[#D63E50]">02</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Clara AI Follow-Up</h3>
                  <p className="text-[#C9C3D2] text-sm leading-relaxed mb-8">
                    Never let estimates go stale. Clara AI Follow-Up monitors outstanding proposals, sends timely reminders, and helps your team win more approvals.                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[11px] text-[#D63E50] font-bold">
                  <span>Speeds up deficiency approvals</span>
                  <span>Real-time answers</span>
                  <span>Automated conversion tracking</span>
                </div>
              </div>
            </div>

            {/* Second CTA (Mid-page) */}
            <div className="mt-16 flex flex-col items-center justify-center gap-4">
              <a
                href="#form"
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#D63E50] hover:bg-[#B52A3B] text-white font-bold text-center text-sm md:text-base rounded-xl transition-all duration-150 shadow-lg shadow-[#D63E50]/20 hover:shadow-[#D63E50]/40 hover:-translate-y-0.5 active:translate-y-0 min-w-[260px] cursor-pointer"
              >
                Book your meeting
              </a>
              <span className="text-[#8B8496] text-xs font-semibold">Reserve your spot now to see these agents live in action.</span>
            </div>
          </div>
        </section>

        {/* Event details and Lead form panel */}
        <section className="py-20 bg-gradient-to-b from-[#FAF9FB] to-white" id="form">
          <div className="max-w-[1120px] mx-auto px-7">
            {/* Back to Case Studies (All events) */}
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#473F52] hover:text-[#D63E50] font-semibold text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All events
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-[40px] items-start">
              {/* Event Card (Redesigned with Premium Gradient, Depth and Glowing Circles) */}
              <aside className="relative overflow-hidden bg-gradient-to-br from-[#D63E50] via-[#D63E50] to-[#B52A3B] text-white rounded-[18px] p-8 md:p-9 shadow-[0_30px_60px_-25px_rgba(214,62,80,0.35)] lg:sticky lg:top-28">
                {/* Ambient graphic blurs for visual richness */}
                <div className="absolute top-[-20%] right-[-20%] w-60 h-60 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-40 h-40 rounded-full bg-black/15 blur-xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-[56px] h-[56px] rounded-xl bg-white/15 grid place-items-center flex-none backdrop-blur-md border border-white/10">
                      <Home className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-2xl tracking-tight leading-tight">NFPA Conference & Expo</h3>
                      <div className="text-sm opacity-90 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> Las Vegas, NV
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/15 border border-white/5 rounded-[9px] px-3.5 py-2 font-bold text-sm mt-6 backdrop-blur-sm">
                    <Calendar className="w-3.5 h-3.5" /> June 22–24, 2026
                  </div>

                  <p className="mt-6 text-[15px] leading-relaxed opacity-95">
                    The biggest gathering in fire protection and we’ll be there showing how Clara helps trade contractors move from first call to signed work faster.                  </p>

                  {/* Upgraded Glassmorphic Feature Cards (Minimal layout - reports card removed) */}
                  <div className="mt-8 flex flex-col gap-4">
                    <div className="flex gap-3.5 items-start bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/15">
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-[14.5px]">Live Demo Workflows</h4>
                        <p className="text-[12.5px] opacity-85 mt-0.5">Watch mobile scheduling and AI dispatch tools run in real-time.</p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/15">
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-[14.5px]">Booth Raffle Entry</h4>
                        <p className="text-[12.5px] opacity-85 mt-0.5">Stop by and scan to enter our exclusive raffle prize draw.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Form / Success Card */}
              <div
                ref={successRef}
                className="bg-white border border-[#E8E3EE] rounded-[24px] p-8 md:p-10 shadow-[0_30px_70px_-15px_rgba(22,18,26,0.08)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_35px_80px_-10px_rgba(22,18,26,0.12)]"
              >
                {/* Visual accents for premium feel */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D63E50] via-[#EE5566] to-[#D63E50]" />
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#FDECEE] blur-3xl pointer-events-none opacity-40" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#FAF9FB] blur-3xl pointer-events-none opacity-40" />

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10">
                    <div className="mb-7 text-left border-l-4 border-[#D63E50] pl-4 relative">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#D63E50] font-mono bg-[#FDECEE] px-2 py-0.5 rounded-md">
                          Secure Booking
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                          NFPA 2026
                        </span>
                      </div>
                      <h2 className="font-black text-2xl md:text-3xl tracking-tight text-[#16121A] mt-2">Reserve your meeting</h2>
                      <p className="text-[#473F52] text-sm mt-2 leading-relaxed">
                        Fill this in and we’ll hold a time for you at the Expo. Show updates land in your inbox before doors open.
                      </p>
                    </div>

                    {/* Row 1: First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          First name <span className="text-[#D63E50] font-bold">*</span>
                        </label>
                        <div className="relative group">
                          <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.first ? 'text-[#D63E50]' : 'text-slate-400 group-focus-within:text-[#D63E50]'
                            }`} />
                          <input
                            type="text"
                            name="first"
                            value={formValues.first}
                            onChange={handleChange}
                            className={`w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-[#9b94a4] text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50] ${errors.first ? 'border-[#D63E50] ring-4 ring-[#D63E50]/8 bg-white' : ''
                              }`}
                            placeholder="Jordan"
                          />
                        </div>
                        {errors.first && (
                          <span className="text-[11px] text-[#D63E50] font-semibold mt-1.5 block">
                            First name is required
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Last name <span className="text-[#D63E50] font-bold">*</span>
                        </label>
                        <div className="relative group">
                          <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.last ? 'text-[#D63E50]' : 'text-slate-400 group-focus-within:text-[#D63E50]'
                            }`} />
                          <input
                            type="text"
                            name="last"
                            value={formValues.last}
                            onChange={handleChange}
                            className={`w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-[#9b94a4] text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50] ${errors.last ? 'border-[#D63E50] ring-4 ring-[#D63E50]/8 bg-white' : ''
                              }`}
                            placeholder="Rivera"
                          />
                        </div>
                        {errors.last && (
                          <span className="text-[11px] text-[#D63E50] font-semibold mt-1.5 block">
                            Last name is required
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Work Email & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Work email <span className="text-[#D63E50] font-bold">*</span>
                        </label>
                        <div className="relative group">
                          <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.email ? 'text-[#D63E50]' : 'text-slate-400 group-focus-within:text-[#D63E50]'
                            }`} />
                          <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className={`w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-[#9b94a4] text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50] ${errors.email ? 'border-[#D63E50] ring-4 ring-[#D63E50]/8 bg-white' : ''
                              }`}
                            placeholder="you@company.com"
                          />
                        </div>
                        {errors.email && (
                          <span className="text-[11px] text-[#D63E50] font-semibold mt-1.5 block">
                            Work email is required
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Phone number <span className="text-[#D63E50] font-bold">*</span>
                        </label>
                        <div className={`relative flex rounded-xl border transition-all duration-200 overflow-hidden ${errors.phone
                          ? 'border-[#D63E50] ring-4 ring-[#D63E50]/8 bg-white'
                          : 'border-[#E8E3EE] bg-[#FAF9FB] hover:bg-slate-100/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#D63E50]/8 focus-within:border-[#D63E50]'
                          }`}>
                          <span className="flex items-center gap-1.5 px-3.5 border-r border-[#E8E3EE] bg-[#FAF9FB] text-xs font-bold text-[#473F52] select-none">
                            <Phone className={`w-3.5 h-3.5 transition-colors ${errors.phone ? 'text-[#D63E50]' : 'text-slate-400'}`} />
                            <span>+1</span>
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent text-sm font-medium px-4 py-3.5 focus:outline-none placeholder:text-[#9b94a4] text-[#16121A]"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        {errors.phone && (
                          <span className="text-[11px] text-[#D63E50] font-semibold mt-1.5 block">
                            Phone number is required
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Company Name & Trade */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Company name
                        </label>
                        <div className="relative group">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D63E50] transition-colors w-4 h-4 pointer-events-none" />
                          <input
                            type="text"
                            name="company"
                            value={formValues.company}
                            onChange={handleChange}
                            className="w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-[#9b94a4] text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50]"
                            placeholder="Acme Fire Protection"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Trade
                        </label>
                        <div className="relative group">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D63E50] transition-colors w-4 h-4 pointer-events-none" />
                          <select
                            name="trade"
                            value={formValues.trade}
                            onChange={handleChange}
                            className="w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-10 py-3.5 transition-all duration-200 text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50] appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23544E5C\' stroke-width=\'2.5\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_16px_center]"
                          >
                            <option value="" disabled>Select your trade</option>
                            <option value="Fire protection">Fire protection</option>
                            <option value="Fire & life safety">Fire & life safety</option>
                            <option value="Fire alarm">Fire alarm</option>
                            <option value="Fire sprinkler">Fire sprinkler</option>
                            <option value="Fire extinguisher / portables">Fire extinguisher / portables</option>
                            <option value="Suppression systems">Suppression systems</option>
                            <option value="Backflow">Backflow</option>
                            <option value="Multi-trade">Multi-trade</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Current Software & Inspector Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Current software
                        </label>
                        <div className="relative group">
                          <Laptop className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D63E50] transition-colors w-4 h-4 pointer-events-none" />
                          <select
                            name="software"
                            value={formValues.software}
                            onChange={handleChange}
                            className="w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-10 py-3.5 transition-all duration-200 text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50] appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23544E5C\' stroke-width=\'2.5\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_16px_center]"
                          >
                            <option value="" disabled>Select one</option>
                            <option value="Inspect Point">Inspect Point</option>
                            <option value="ServiceTrade">ServiceTrade</option>
                            <option value="BuildOps">BuildOps</option>
                            <option value="ServiceTitan">ServiceTitan</option>
                            <option value="Jobber">Jobber</option>
                            <option value="Spreadsheets / paper">Spreadsheets / paper</option>
                            <option value="None yet">None yet</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-bold text-[11px] text-[#473F52] uppercase tracking-wider mb-1.5">
                          Number of inspectors
                        </label>
                        <div className="relative group">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D63E50] transition-colors w-4 h-4 pointer-events-none" />
                          <input
                            type="number"
                            name="techs"
                            min="1"
                            value={formValues.techs}
                            onChange={handleChange}
                            className="w-full text-sm font-medium bg-[#FAF9FB] hover:bg-slate-100/30 focus:bg-white border border-[#E8E3EE] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-[#9b94a4] text-[#16121A] focus:outline-none focus:ring-4 focus:ring-[#D63E50]/8 focus:border-[#D63E50]"
                            placeholder="1, 3, 5 ..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 pt-2">
                      <button
                        type="submit"
                        className="w-full justify-center px-6 py-4 bg-[#D63E50] hover:bg-[#B52A3B] text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#D63E50]/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        <span>Book your meeting</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Success State container with animation */
                  <div className="py-12 px-4 text-center relative z-10 animate-scale-in">
                    <div className="w-16 h-16 rounded-full bg-[#FDECEE] grid place-items-center mx-auto mb-6 shadow-sm border border-[#D63E50]/15">
                      <Check className="w-8 h-8 text-[#D63E50]" />
                    </div>
                    <h2 className="font-extrabold text-2xl mb-2 text-[#16121A]">You are on the list</h2>
                    <p className="text-[#473F52] text-[15px] max-w-[34ch] mx-auto leading-relaxed font-medium">
                      Look out for an email confirming your meeting time. We can't wait to show you Clara AI in action.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Booth Info Badge */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#16121A]/95 backdrop-blur-md text-white rounded-2xl p-4 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] items-center gap-3 max-w-[280px]">
        <div className="w-10 h-10 rounded-lg bg-[#D63E50] grid place-items-center flex-shrink-0 relative">
          <MapPin className="w-5 h-5 text-white" />
          <div className="absolute inset-[-3px] rounded-[10px] border border-[#D63E50] opacity-50 booth-ring" />
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase text-[#B9B2C4] font-bold">We're exhibiting at</div>
          <div className="font-extrabold text-lg leading-tight mt-0.5">Booth <span className="text-[#D63E50]">871</span></div>
          <div className="text-[10px] text-[#C9C3D2] mt-0.5 font-medium leading-none font-sans">NFPA Conference & Expo 2026</div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-[#16121A]/95 backdrop-blur-md text-white rounded-xl p-3 border border-white/10 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-[#D63E50]" />
          <div className="text-left">
            <span className="text-[11px] font-medium text-[#C9C3D2]">Exhibiting at</span>
            <span className="text-[12px] font-extrabold text-white bg-[#D63E50] px-1.5 py-0.5 rounded ml-1">Booth 871</span>
          </div>
        </div>
        <span className="text-[10px] text-[#B9B2C4] font-semibold">NFPA 2026</span>
      </div>

      {/* Clara Footer */}
      <Footer />
    </div>
  );
};

export default Nfpa2026;
