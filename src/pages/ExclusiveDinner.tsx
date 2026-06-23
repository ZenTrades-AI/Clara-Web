import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User, Mail, Phone, Building, Check, ArrowRight } from "lucide-react";

interface FormValues {
  first: string;
  last: string;
  email: string;
  phone: string;
  company: string;
}

const ExclusiveDinner = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    first: "",
    last: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof FormValues, boolean>> = {};
    let hasError = false;

    // Required fields
    const requiredFields: (keyof FormValues)[] = ["first", "last", "email", "phone", "company"];

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

    setIsSubmitting(true);

    const webhookUrl =
      import.meta.env.VITE_GOOGLE_SHEETS_URL ||
      "https://script.google.com/macros/library/d/1LsnQQpFgEn3PQqKGIU391jnHwNz5Oj9DojTO8_MGU108U_nsd-wBwlZx/1";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formValues,
          source: "Exclusive Dinner Invitation",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Error submitting RSVP form:", error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Decorative Horizontal Divider with 3 Diamonds
  const DiamondDivider = () => (
    <div className="flex items-center justify-center gap-4 my-8 max-w-lg mx-auto">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#cb2e41]/30 to-[#cb2e41]/60 flex-grow"></div>
      <div className="flex gap-1.5 text-[#cb2e41] text-[10px]">
        <span>♦</span>
        <span className="scale-125">♦</span>
        <span>♦</span>
      </div>
      <div className="h-[1px] bg-gradient-to-l from-transparent via-[#cb2e41]/30 to-[#cb2e41]/60 flex-grow"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-foreground antialiased font-sans flex flex-col justify-between">
      <Helmet>
        <title>An Evening with Clara's Leadership — Exclusive Dinner</title>
        <meta
          name="description"
          content="You are cordially invited to an exclusive private dinner and evening of conversation with Clara's leadership."
        />
      </Helmet>

      {/* Clara Navigation */}
      <Navigation />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow pt-20 md:pt-24">
        
        {/* ========================================== */}
        {/* HERO SECTION                               */}
        {/* ========================================== */}
        <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden">
          {/* Background Image with soft styling */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/photos/Invite Page bg.webp"
              alt="Private dinner room overlooking city skyline"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle bright glassmorphic overlay layer to ensure high contrast and readability */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]"></div>
          </div>

          {/* Hero Content Container */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center justify-center px-6 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-[#cb2e41]/35 shadow-sm mb-8 transition-all hover:scale-105">
              <span className="text-sm md:text-base font-semibold text-foreground tracking-wide">
                An Evening with Clara's Leadership
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-[22ch] mb-8 font-inter">
              An <span className="text-[#cb2e41]">invitation</span> to an evening of conversation, ideas, and exceptional dining.
            </h1>

            {/* RSVP Button linking to form section */}
            <div className="mt-4">
              <a
                href="#rsvp-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('rsvp-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#cb2e41] hover:bg-[#cb2e41]/90 text-white font-extrabold text-base md:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 cursor-pointer"
              >
                Reserve Your Seat <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* DETAILS SECTION                            */}
        {/* ========================================== */}
        <section className="py-20 px-6 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Intro paragraph */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join a select group of trade business owners, industry leaders, and innovators
              for an intimate evening of exceptional dining and meaningful conversation
              with the Clara leadership team.
            </p>

            {/* Top Diamond Divider */}
            <DiamondDivider />

            {/* Date & Time display */}
            <div className="flex items-center justify-center gap-6 md:gap-10 my-8 select-none">
              <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-foreground tracking-wide">
                23<sup>rd</sup> Jun 2026
              </span>
              <div className="w-[1.5px] h-10 md:h-14 bg-[#cb2e41]"></div>
              <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-foreground tracking-wide">
                6:30 PM
              </span>
            </div>

            {/* Location venue & address */}
            <div className="my-8">
              <h3 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 tracking-tight">
                Lawry's The Prime Rib
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
                4043 Howard Hughes Parkway, Las Vegas, NV 89169
              </p>
            </div>

            {/* Bottom Diamond Divider */}
            <DiamondDivider />

            {/* Opportunity subtext */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
              This is an opportunity to connect with peers, exchange ideas, discuss the future of the trades,
              and get an early look at what's ahead for Clara—all in a relaxed, off-the-record setting.
            </p>

          </div>
        </section>

        {/* ========================================== */}
        {/* RSVP FORM SECTION                          */}
        {/* ========================================== */}
        <section className="relative py-28 border-t border-border overflow-hidden" id="rsvp-section">
          {/* Background image for form section */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/photos/form.webp"
              alt="Private dinner room background"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="max-w-2xl mx-auto px-6 relative z-10" ref={formRef}>
            
            <div className="bg-white border border-[#cb2e41]/15 rounded-[24px] p-8 md:p-12 shadow-[0_30px_70px_-15px_rgba(203,46,65,0.06)] hover:shadow-[0_35px_80px_-10px_rgba(203,46,65,0.08)] relative overflow-hidden transition-all duration-300">
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cb2e41] via-[#EE5566] to-[#cb2e41]" />
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Header text */}
                  <div className="text-center pb-4">
                    <h2 className="font-inter font-extrabold text-2xl md:text-3xl text-foreground tracking-tight">
                      Reserve Your Seat
                    </h2>
                  </div>

                  {/* Name Fields Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="text-left">
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        First Name <span className="text-[#cb2e41]">*</span>
                      </label>
                      <div className="relative group">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.first ? 'text-[#cb2e41]' : 'text-slate-400 group-focus-within:text-[#cb2e41]'}`} />
                        <input
                          type="text"
                          name="first"
                          value={formValues.first}
                          onChange={handleChange}
                          className={`w-full text-sm bg-slate-50/50 hover:bg-slate-100/20 focus:bg-white border border-slate-200 focus:border-[#cb2e41] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-slate-400 text-foreground focus:outline-none focus:ring-4 focus:ring-[#cb2e41]/5 ${errors.first ? 'border-[#cb2e41] ring-4 ring-[#cb2e41]/5 bg-white' : ''}`}
                          placeholder="Jordan"
                        />
                      </div>
                      {errors.first && (
                        <span className="text-[11px] text-[#cb2e41] font-semibold mt-1.5 block">
                          First name is required
                        </span>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="text-left">
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Last Name <span className="text-[#cb2e41]">*</span>
                      </label>
                      <div className="relative group">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.last ? 'text-[#cb2e41]' : 'text-slate-400 group-focus-within:text-[#cb2e41]'}`} />
                        <input
                          type="text"
                          name="last"
                          value={formValues.last}
                          onChange={handleChange}
                          className={`w-full text-sm bg-slate-50/50 hover:bg-slate-100/20 focus:bg-white border border-slate-200 focus:border-[#cb2e41] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-slate-400 text-foreground focus:outline-none focus:ring-4 focus:ring-[#cb2e41]/5 ${errors.last ? 'border-[#cb2e41] ring-4 ring-[#cb2e41]/5 bg-white' : ''}`}
                          placeholder="Rivera"
                        />
                      </div>
                      {errors.last && (
                        <span className="text-[11px] text-[#cb2e41] font-semibold mt-1.5 block">
                          Last name is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Work Email <span className="text-[#cb2e41]">*</span>
                    </label>
                    <div className="relative group">
                      <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.email ? 'text-[#cb2e41]' : 'text-slate-400 group-focus-within:text-[#cb2e41]'}`} />
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`w-full text-sm bg-slate-50/50 hover:bg-slate-100/20 focus:bg-white border border-slate-200 focus:border-[#cb2e41] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-slate-400 text-foreground focus:outline-none focus:ring-4 focus:ring-[#cb2e41]/5 ${errors.email ? 'border-[#cb2e41] ring-4 ring-[#cb2e41]/5 bg-white' : ''}`}
                        placeholder="you@company.com"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-[11px] text-[#cb2e41] font-semibold mt-1.5 block">
                        Work email is required
                      </span>
                    )}
                  </div>

                  {/* Phone number */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#cb2e41]">*</span>
                    </label>
                    <div className={`relative flex rounded-xl border transition-all duration-200 overflow-hidden ${errors.phone ? 'border-[#cb2e41] ring-4 ring-[#cb2e41]/5 bg-white' : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/20 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#cb2e41]/5 focus-within:border-[#cb2e41]'}`}>
                      <span className="flex items-center gap-1.5 px-3.5 border-r border-slate-200 bg-slate-50/80 text-xs font-bold text-muted-foreground select-none">
                        <Phone className={`w-3.5 h-3.5 ${errors.phone ? 'text-[#cb2e41]' : 'text-slate-400'}`} />
                        <span>+1</span>
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent text-sm px-4 py-3.5 focus:outline-none placeholder:text-slate-400 text-foreground"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-[#cb2e41] font-semibold mt-1.5 block">
                        Phone number is required
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Company Name <span className="text-[#cb2e41]">*</span>
                    </label>
                    <div className="relative group">
                      <Building className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-4 h-4 pointer-events-none ${errors.company ? 'text-[#cb2e41]' : 'text-slate-400 group-focus-within:text-[#cb2e41]'}`} />
                      <input
                        type="text"
                        name="company"
                        value={formValues.company}
                        onChange={handleChange}
                        className={`w-full text-sm bg-slate-50/50 hover:bg-slate-100/20 focus:bg-white border border-slate-200 focus:border-[#cb2e41] rounded-xl pl-11 pr-4 py-3.5 transition-all duration-200 placeholder:text-slate-400 text-foreground focus:outline-none focus:ring-4 focus:ring-[#cb2e41]/5 ${errors.company ? 'border-[#cb2e41] ring-4 ring-[#cb2e41]/5 bg-white' : ''}`}
                        placeholder="Acme Contractors"
                      />
                    </div>
                    {errors.company && (
                      <span className="text-[11px] text-[#cb2e41] font-semibold mt-1.5 block">
                        Company name is required
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center px-6 py-4 bg-[#cb2e41] hover:bg-[#cb2e41]/90 text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#cb2e41]/10 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{isSubmitting ? "Reserving..." : "Reserve My Seat"}</span>
                    {!isSubmitting && <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
                  </button>

                </form>
              ) : (
                /* RSVP Success State */
                <div className="py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#cb2e41]/10 grid place-items-center mx-auto mb-6 border border-[#cb2e41]/20 animate-scale-in">
                    <Check className="w-8 h-8 text-[#cb2e41]" />
                  </div>
                  <h3 className="font-inter font-extrabold text-2xl mb-2 text-foreground">
                    RSVP Request Received
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for your request. We will review availability and confirm your dinner reservation shortly via email.
                  </p>
                </div>
              )}

            </div>
          </div>
        </section>

      </main>

      {/* Clara Footer */}
      <Footer />
    </div>
  );
};

export default ExclusiveDinner;
