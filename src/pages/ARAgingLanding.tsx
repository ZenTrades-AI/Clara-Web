import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Check, ChevronDown, ChevronUp, Star, ShieldCheck, HelpCircle, Zap, DollarSign, ArrowRight, User, Mail, Phone, Building, Loader2, ArrowLeft, Activity, TrendingUp, Clock, Sparkles, Play } from "lucide-react";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwpyoWjP_4vn68IgzKyZQ-5RonL6uN3_R_hI4xb1_VPzzAcEmwiB_eXusYGPssSsd6zWg/exec";

export default function ARAgingLanding() {
  // Step 1: Business Details, Step 2: Calendly Embed, Step 3: Confirmation Ticket
  const [step, setStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};

    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.companyName.trim()) newErrors.companyName = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmittingLead(true);

    // Split fullName into first and last name for Apps Script schema compatibility
    const nameParts = formData.fullName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Save lead to webhook in background (non-blocking)
    try {
      if (GOOGLE_SHEETS_URL) {
        fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            first: firstName,
            last: lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.companyName,
            software: "Clara Collects / A/R Aging",
            trade: "General Trades",
            source: "A/R Aging Landing Hero Lead Form",
          }),
        }).catch((err) => console.log("Lead webhook error:", err));
      }
    } catch (err) {
      console.error("Submission error", err);
    }

    setIsSubmittingLead(false);
    setStep(2); // Go to Calendly Scheduler Step
  };

  // Build Calendly URL with pre-filled query params
  const buildCalendlyUrl = () => {
    const baseUrl = "https://calendly.com/ankit-dhingra-justclara/30-min-meeting-with-clara-ai";
    const params = new URLSearchParams();
    if (formData.fullName) params.append("name", formData.fullName);
    if (formData.email) params.append("email", formData.email);
    return `${baseUrl}?${params.toString()}`;
  };

  // Listen for Calendly event confirmation to advance to Step 3
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data && e.data.event && e.data.event.indexOf("calendly") === 0) {
        console.log("Calendly message received:", e.data);
        if (e.data.event === "calendly.event_scheduled") {
          console.log("Calendly appointment scheduled successfully!");
          setStep(3); // Go to Success Step
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  // Smooth Scroll Helper
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("book-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  const faqs = [
    {
      q: "How long does it take to get started with Clara?",
      a: "We connect directly to your CRM (ServiceTitan, Housecall Pro, Jobber, etc.) and accounting ledger. The setup takes about 10 minutes of authentication. Once synced, Clara analyzes your overdue book and is ready to start collections campaigns within 24 hours."
    },
    {
      q: "What CRM platforms and devices does Clara work with?",
      a: "Clara runs in the cloud and syncs automatically in the background. We support direct integrations with ServiceTitan, QuickBooks, Jobber, Housecall Pro, BuildOps, and Sage. Your field technicians and office staff do not need to install any new apps."
    },
    {
      q: "How does Clara protect and secure my customer data?",
      a: "Data security is our top priority. Clara is SOC 2 compliant and encrypts all data transmission and storage using 256-bit SSL protocols. We only read invoice records to execute your reminder settings; we never sell or share billing parameters."
    },
    {
      q: "How does Clara follow up with overdue accounts?",
      a: "Clara operates completely under your brand voice. It deploys friendly, customized multi-channel reminders (polite phone calls, SMS notifications, and emails) starting from Day 1 an invoice goes overdue, ensuring comprehensive coverage."
    },
    {
      q: "What happens if a customer disputes a charge?",
      a: "If a customer flags a discrepancy or disputes an invoice during a call or email thread, Clara instantly halts all automated follow-ups, marks the account as 'Disputed' on your dashboard, and routes the transcript to your team."
    }
  ];

  return (
    <div className="clara-ar-campaign-page">
      <Helmet>
        <title>How much of your A/R is stuck past 60 days? | Clara Collects Agent</title>
        <meta name="description" content="Connect Clara AI to your field-service platform (ServiceTitan, Housecall Pro, Jobber) and start collecting outstanding A/R automatically. Scan your aging report and recover unpaid balances in minutes." />
        <meta name="keywords" content="AR Collections, Accounts Receivable, ServiceTitan Integration, Housecall Pro, Jobber Collections, Contractor Billing, HVAC collections, Plumbing Billing AI" />
        <meta property="og:title" content="How much of your A/R is stuck past 60 days? | Clara Collects Agent" />
        <meta property="og:description" content="Connect Clara AI to your CRM, scan your aging report, and display the collections coverage gap automatically." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justclara.com/solutions/ar-aging" />
        <meta property="og:image" content="/photos/HB.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How much of your A/R is stuck past 60 days?" />
        <meta name="twitter:description" content="Collect your outstanding invoices automatically with Clara's A/R recovery operating layer." />
      </Helmet>

      {/* Scoped CSS for the campaign landing page */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .clara-ar-campaign-page {
          --ink: #0D0D10;
          --ink-soft: #1C1C24;
          --red: #CB2E41; /* Aligned with Clara Global Red */
          --red-dim: #A82030;
          --amber: #E8A33D;
          --paper: #FAF9F6; /* Premium warm off-white */
          --paper-card: #FFFFFF;
          --line: #E8E5DC;
          --gray: #9CA3AF;
          --gray-dark: #6B7280;
          --white: #FFFFFF;
          --radius: 16px;
          --radius-sm: 8px;
          
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        
        .clara-ar-campaign-page h1,
        .clara-ar-campaign-page h2,
        .clara-ar-campaign-page h3,
        .clara-ar-campaign-page .display {
          font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: var(--ink);
        }
        
        .clara-ar-campaign-page .wrap {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .clara-ar-campaign-page :focus-visible {
          outline: 3px solid var(--red);
          outline-offset: 2px;
        }

        /* HERO AREA */
        .clara-ar-campaign-page .hero-container {
          position: relative;
          padding: 150px 0 90px;
          background: radial-gradient(circle at 85% 15%, rgba(203, 46, 65, 0.04) 0%, rgba(255, 255, 255, 0) 60%), #FFFFFF;
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .clara-ar-campaign-page .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 56px;
          align-items: start;
        }
        @media(max-width: 1024px) {
          .clara-ar-campaign-page .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        
        /* EXPANDED SIDE-BY-SIDE SCHEDULER CARD */
        .clara-ar-campaign-page .form-card {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #EAE7DF;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 30px 80px -20px rgba(13, 13, 16, 0.08), 0 0 0 1px rgba(234, 231, 223, 0.5);
          position: relative;
          text-align: left;
        }
        .clara-ar-campaign-page .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 32px;
          right: 32px;
          height: 3px;
          background: linear-gradient(90deg, #CB2E41 0%, #F3D2D5 100%);
          border-radius: 3px 3px 0 0;
        }
        .clara-ar-campaign-page .form-card .eyebrow {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: var(--red);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: inline-block;
        }
        .clara-ar-campaign-page .form-card .step-badge {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #16A34A;
          background: #F0FDF4;
          border: 1px solid #DCFCE7;
          padding: 4px 12px;
          border-radius: 99px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .clara-ar-campaign-page .form-card h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #0D0D10;
          margin-bottom: 6px;
        }
        .clara-ar-campaign-page .form-card .sub-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #71717A;
          font-size: 14px;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        
        .clara-ar-campaign-page .gradient-divider {
          height: 2px;
          width: 120px;
          background: linear-gradient(90deg, var(--red) 0%, rgba(203,46,65,0.15) 100%);
          margin-bottom: 32px;
        }
        .clara-ar-campaign-page .prop-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }
        .clara-ar-campaign-page .prop-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          background: #FAF9F6;
          border: 1px solid #EAE7DF;
          border-radius: 16px;
          transition: all 0.2s ease;
        }
        .clara-ar-campaign-page .prop-card:hover {
          background: #FFFFFF;
          border-color: #CBD5E1;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03);
          transform: translateY(-2px);
        }
        .clara-ar-campaign-page .prop-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid #EAE7DF;
          color: #CB2E41;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .clara-ar-campaign-page .prop-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0D0D10;
          margin-bottom: 2px;
        }
        .clara-ar-campaign-page .prop-card-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          color: #64748B;
          line-height: 1.4;
        }

        .clara-ar-campaign-page .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .clara-ar-campaign-page .form-group label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #27272A;
          letter-spacing: 0.05em;
        }
        .clara-ar-campaign-page .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .clara-ar-campaign-page .input-icon {
          position: absolute;
          left: 14px;
          color: #A1A1AA;
          pointer-events: none;
        }
        .clara-ar-campaign-page .form-group input,
        .clara-ar-campaign-page .form-group select {
          padding: 15px 16px;
          padding-left: 44px;
          border-radius: 10px;
          border: 1px solid #E4E4E7;
          background: #FAFAFA;
          color: #09090B;
          font-size: 14.5px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          width: 100%;
          transition: all 0.2s ease;
        }
        .clara-ar-campaign-page .form-group input::placeholder {
          color: #A1A1AA;
        }
        .clara-ar-campaign-page .form-group select {
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg fill='%236B7280' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 42px;
        }
        .clara-ar-campaign-page .form-group input:focus,
        .clara-ar-campaign-page .form-group select:focus {
          border-color: var(--red);
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(203, 46, 65, 0.08);
          outline: none;
        }
        
        .clara-ar-campaign-page .btn-submit {
          background: #CB2E41;
          color: #FFFFFF;
          padding: 16px 30px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15.5px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 20px -5px rgba(203, 46, 65, 0.2);
        }
        .clara-ar-campaign-page .btn-submit:hover:not(:disabled) {
          background: #B92435;
          transform: translateY(-1px);
          box-shadow: 0 12px 24px -5px rgba(203, 46, 65, 0.3);
        }
        .clara-ar-campaign-page .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* RIGHT HERO SIDE PANEL */
        .clara-ar-campaign-page .side-panels {
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-align: left;
        }
        .clara-ar-campaign-page .testimonial-box {
          background: var(--paper-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 36px;
          box-shadow: 0 10px 25px -10px rgba(13,13,16,0.03);
          position: relative;
        }
        .clara-ar-campaign-page .testimonial-box p {
          font-size: 16px;
          color: var(--ink-soft);
          font-style: italic;
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .clara-ar-campaign-page .author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .clara-ar-campaign-page .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #EAE7DF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          color: var(--red);
        }
        .clara-ar-campaign-page .author-info h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--ink);
        }
        .clara-ar-campaign-page .author-info p {
          font-size: 12px;
          color: var(--gray-dark);
          margin-bottom: 0;
          font-style: normal;
        }
        
        .clara-ar-campaign-page .rating-box {
          background: var(--paper-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .clara-ar-campaign-page .stars {
          display: flex;
          gap: 4px;
          color: #E8A33D;
        }
        .clara-ar-campaign-page .rating-title {
          font-size: 15px;
          font-weight: 700;
        }
        .clara-ar-campaign-page .rating-desc {
          font-size: 13px;
          color: var(--gray-dark);
          line-height: 1.5;
        }

        /* INTEGRATIONS STRIP */
        .clara-ar-campaign-page .strip-section {
          background: #FFFFFF;
          border-bottom: 1px solid var(--line);
          padding: 80px 0;
          text-align: center;
        }
        .clara-ar-campaign-page .circular-flow-wrapper {
          position: relative;
          width: 100%;
          max-width: 950px;
          height: 600px;
          margin: 0 auto;
        }
        @media(max-width: 820px) {
          .clara-ar-campaign-page .circular-flow-wrapper {
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .flow-card,
          .clara-ar-campaign-page .circular-flow-wrapper .clara-hub-card {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            width: 240px !important;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .connector-svg {
            display: none !important;
          }
        }
        .clara-ar-campaign-page .connector-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .clara-ar-campaign-page .connector-svg path {
          stroke: #D6D2C4;
          stroke-width: 2;
          stroke-dasharray: 6 4;
          animation: flow-line 15s linear infinite;
        }
        @keyframes flow-line {
          to {
            stroke-dashoffset: -500;
          }
        }
        @media(min-width: 821px) {
          .clara-ar-campaign-page .circular-flow-wrapper .clara-hub-card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .flow-card {
            position: absolute;
            width: 200px;
            z-index: 20;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .card-1 {
            top: 5%;
            left: 10%;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .card-2 {
            top: calc(50% - 74px);
            left: 0%;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .card-3 {
            bottom: 5%;
            left: 10%;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .card-4 {
            top: 5%;
            right: 10%;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .card-5 {
            top: calc(50% - 74px);
            right: 0%;
          }
          .clara-ar-campaign-page .circular-flow-wrapper .card-6 {
            bottom: 5%;
            right: 10%;
          }
        }
        .clara-ar-campaign-page .flow-card {
          background: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 148px;
          gap: 16px;
        }
        .clara-ar-campaign-page .flow-card:hover {
          transform: translateY(-2px);
          border-color: var(--red);
          box-shadow: 0 10px 20px rgba(203, 46, 65, 0.05);
          z-index: 30;
        }
        .clara-ar-campaign-page .flow-card-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 68px;
          width: 100%;
        }
        .clara-ar-campaign-page .flow-card .logo-img {
          max-height: 68px;
          max-width: 90%;
          width: auto;
          object-fit: contain;
        }
        .clara-ar-campaign-page .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #2E7D4F;
          background: #EAF3EC;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .clara-ar-campaign-page .status-badge .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2E7D4F;
        }
        .clara-ar-campaign-page .clara-hub-card {
          background: #0D0D10;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          width: 220px;
          min-height: 200px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .clara-ar-campaign-page .clara-hub-logo {
          height: 110px;
          width: auto;
          object-fit: contain;
          margin-bottom: -16px;
        }
        .clara-ar-campaign-page .hub-workspace-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #A1A1AA;
        }
        .clara-ar-campaign-page .hub-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #4ADE80;
          background: rgba(74, 222, 128, 0.1);
          padding: 3px 12px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .clara-ar-campaign-page .pulse-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ADE80;
          box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
          animation: hub-pulse 1.6s infinite;
        }
        @keyframes hub-pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
          }
        }

        /* BANNER */
        .clara-ar-campaign-page .support-banner {
          background: #FFFFFF;
          border-bottom: 1px solid var(--line);
          padding: 32px 0;
          text-align: center;
        }
        .clara-ar-campaign-page .banner-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .clara-ar-campaign-page .banner-text {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--gray-dark);
        }
        .clara-ar-campaign-page .btn-banner {
          background: transparent;
          border: 1px solid var(--red);
          color: var(--red);
          font-weight: 700;
          font-size: 13px;
          padding: 8px 18px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .clara-ar-campaign-page .btn-banner:hover {
          background: var(--red);
          color: white;
        }

        /* FAQ ACCORDION SECTION */
        .clara-ar-campaign-page .faq-section {
          padding: 96px 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--line);
        }
        .clara-ar-campaign-page .faq-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 56px;
        }
        @media(max-width: 768px) {
          .clara-ar-campaign-page .faq-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .clara-ar-campaign-page .faq-head {
          text-align: left;
        }
        .clara-ar-campaign-page .faq-head h2 {
          font-size: clamp(30px, 4vw, 44px);
          margin-bottom: 18px;
          letter-spacing: -0.04em;
        }
        .clara-ar-campaign-page .faq-head h2 span {
          color: var(--red);
        }
        .clara-ar-campaign-page .faq-head p {
          color: var(--gray-dark);
          font-size: 15.5px;
          line-height: 1.65;
        }
        
        .clara-ar-campaign-page .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .clara-ar-campaign-page .accordion-item {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 0 20px;
          text-align: left;
          transition: border-color 0.2s ease;
        }
        .clara-ar-campaign-page .accordion-item:hover {
          border-color: var(--red);
        }
        .clara-ar-campaign-page .accordion-button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          padding: 20px 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: left;
        }
        .clara-ar-campaign-page .accordion-content {
          padding: 0 0 20px;
          font-size: 14.5px;
          color: var(--gray-dark);
          line-height: 1.65;
          border-top: 1px solid var(--line);
          padding-top: 14px;
        }

        /* BOTTOM CALLOUT */
        .clara-ar-campaign-page .bottom-banner {
          background: radial-gradient(circle at 100% 100%, rgba(203, 46, 65, 0.08) 0%, rgba(13, 13, 16, 0) 50%), linear-gradient(135deg, #0D0D10, #1A1A24);
          color: white;
          padding: 100px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .clara-ar-campaign-page .bottom-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 72px;
          align-items: center;
        }
        @media(max-width: 991px) {
          .clara-ar-campaign-page .bottom-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
        }
        .clara-ar-campaign-page .bottom-text {
          text-align: left;
        }
        @media(max-width: 991px) {
          .clara-ar-campaign-page .bottom-text {
            text-align: center;
          }
        }
        .clara-ar-campaign-page .bottom-text h2 {
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(32px, 4.5vw, 44px);
          font-weight: 800;
          margin-bottom: 18px;
          letter-spacing: -0.03em;
        }
        .clara-ar-campaign-page .bottom-text p {
          color: #A1A1AA;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 520px;
        }
        .clara-ar-campaign-page .btn-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media(max-width: 991px) {
          .clara-ar-campaign-page .btn-row {
            justify-content: center;
          }
        }
        .clara-ar-campaign-page .btn-dark-primary {
          background: #CB2E41;
          color: white;
          padding: 16px 32px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px -5px rgba(203, 46, 65, 0.3);
        }
        .clara-ar-campaign-page .btn-dark-primary:hover {
          background: #B92435;
          transform: translateY(-1px);
          box-shadow: 0 12px 24px -5px rgba(203, 46, 65, 0.4);
        }
        .clara-ar-campaign-page .btn-dark-secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          padding: 16px 32px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .clara-ar-campaign-page .btn-dark-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
          transform: translateY(-1px);
        }
        .clara-ar-campaign-page .bottom-graphic {
          position: relative;
        }
      `}} />

      {/* Website Navigation */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="hero-container" id="book-section">
        {/* Ambient Radial Mesh Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#CB2E41]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-red-400/10 rounded-full blur-[120px]" />
          <img
            src="/photos/HB.webp"
            alt="Contractor Background Graphic"
            className="w-full h-full object-cover object-center opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#FFFFFF]/80 to-[var(--paper)]"></div>
        </div>

        <div className="wrap relative z-10">
          <div className="hero-grid">

            {/* Left Hero Content panel - Eye-catchy Redesign */}
            <div className="hero-left text-left self-start pt-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-red-200/80 shadow-md shadow-red-500/5 mb-6 hover:border-red-300 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CB2E41] animate-pulse"></span>
                <span className="text-[11.5px] font-bold text-gray-900 tracking-wider font-mono uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#CB2E41]" />
                  Clara Collects Agent &bull; Autonomous A/R Recovery
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[1.12] tracking-tight text-gray-900 font-display">
                How much of your A/R is{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#CB2E41] via-[#E11D48] to-[#991B1B]">
                  stuck past 60 days?
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#CB2E41] to-transparent rounded-full opacity-60"></span>
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl font-medium">
                Clara plugs into your billing platforms in 10 minutes — automatically scanning aging reports and executing polite AI voice calls to recover overdue invoice balances.
              </p>

              {/* Value props stack */}
              <div className="prop-row">
                <div className="prop-card">
                  <div className="prop-card-icon">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="prop-card-title">Reduce AR Aging Faster</div>
                    <div className="prop-card-desc">Friendly outreach moves overdue invoices without manual chasing.</div>
                  </div>
                </div>

                <div className="prop-card">
                  <div className="prop-card-icon">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="prop-card-title">Voice, Text & Email Follow-Ups</div>
                    <div className="prop-card-desc">Reach customers across every key channel from one workflow.</div>
                  </div>
                </div>

                <div className="prop-card">
                  <div className="prop-card-icon">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="prop-card-title">Fully Logged for Compliance</div>
                    <div className="prop-card-desc">Every reminder and response is tracked for complete visibility.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Form Card - Multi-step Funnel */}
            <div className="form-card">
              {/* Stepper Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
                <div className={`flex items-center gap-2 text-xs font-bold ${step === 1 ? 'text-[#CB2E41]' : step > 1 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-[#CB2E41] text-white' : step > 1 ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-400'}`}>
                    {step > 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
                  </div>
                  <span className="hidden sm:inline">Details</span>
                </div>

                <div className={`h-0.5 flex-1 ${step > 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>

                <div className={`flex items-center gap-2 text-xs font-bold ${step === 2 ? 'text-[#CB2E41]' : step > 2 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-[#CB2E41] text-white' : step > 2 ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-400'}`}>
                    {step > 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
                  </div>
                  <span className="hidden sm:inline">Schedule</span>
                </div>

                <div className={`h-0.5 flex-1 ${step > 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>

                <div className={`flex items-center gap-2 text-xs font-bold ${step === 3 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {step === 3 ? <Check className="w-3.5 h-3.5" /> : "3"}
                  </div>
                  <span className="hidden sm:inline">Confirmed</span>
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <div className="mb-6">
                <div className="eyebrow mb-1">
                  {step === 1 && "STEP 1 OF 2 • BUSINESS DETAILS"}
                  {step === 2 && "STEP 2 OF 2 • LIVE AVAILABILITY"}
                  {step === 3 && "DEMO CONFIRMED"}
                </div>
                <h2>
                  {step === 1 && "Request a Live Demo"}
                  {step === 2 && "Select Date & Time"}
                  {step === 3 && "You're All Set!"}
                </h2>
                <p className="sub-desc mb-0">
                  {step === 1 && "Enter your details below to instantly unlock our 1-on-1 Calendly availability."}
                  {step === 2 && "Pick an available slot for your walkthrough. Your info will be automatically attached."}
                  {step === 3 && "Thank you! A confirmation email and calendar invitation has been dispatched."}
                </p>
              </div>

              {/* STEP 1: Business Lead Capture Form */}
              {step === 1 && (
                <form onSubmit={handleLeadSubmit} className="space-y-4 animate-fade-in">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <div className="input-wrapper">
                      <User className="input-icon w-4 h-4" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={errors.fullName ? "input-error" : ""}
                      />
                    </div>
                    {errors.fullName && <span className="text-xs text-red-500 font-medium">Please enter your full name</span>}
                  </div>

                  <div className="form-group">
                    <label>Work Email *</label>
                    <div className="input-wrapper">
                      <Mail className="input-icon w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@yourcompany.com"
                        className={errors.email ? "input-error" : ""}
                      />
                    </div>
                    {errors.email && <span className="text-xs text-red-500 font-medium">Please enter a valid work email</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <div className="input-wrapper">
                        <Phone className="input-icon w-4 h-4" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 000-0000"
                          className={errors.phone ? "input-error" : ""}
                        />
                      </div>
                      {errors.phone && <span className="text-xs text-red-500 font-medium">Required</span>}
                    </div>

                    <div className="form-group">
                      <label>Company Name *</label>
                      <div className="input-wrapper">
                        <Building className="input-icon w-4 h-4" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Acme Plumbing & HVAC"
                          className={errors.companyName ? "input-error" : ""}
                        />
                      </div>
                      {errors.companyName && <span className="text-xs text-red-500 font-medium">Required</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="btn-submit mt-2"
                  >
                    {isSubmittingLead ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Securing Slot...</span>
                      </>
                    ) : (
                      <>
                        <span>Continue to Schedule Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center mt-3 font-sans">
                    🔒 100% Secure & Confidential. Instant access to live calendar.
                  </p>
                </form>
              )}

              {/* STEP 2: Calendly Interactive Scheduler (Prefilled) */}
              {step === 2 && (
                <div className="animate-fade-in space-y-3">
                  {/* Prefill Banner / Back Button */}
                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-sans">
                    <div className="text-gray-700 truncate pr-2">
                      <span className="font-semibold text-gray-900">Pre-filled for:</span> {formData.fullName} ({formData.email})
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#CB2E41] hover:underline font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div style={{ height: "640px", minWidth: "280px", background: "#FAF9F6", borderRadius: "16px", border: "1px solid #EAE7DF", overflow: "hidden" }}>
                    <iframe
                      src={buildCalendlyUrl()}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Calendly Scheduler"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* STEP 3: Success Confirmation Ticket */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in text-center py-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2 shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D0D10] font-sans">
                    You're All Set!
                  </h3>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-sm mx-auto space-y-2 text-xs font-sans">
                    <div><span className="text-gray-500">Attendee:</span> <span className="font-bold text-gray-900">{formData.fullName || "Scheduled Guest"}</span></div>
                    {formData.companyName && <div><span className="text-gray-500">Company:</span> <span className="font-bold text-gray-900">{formData.companyName}</span></div>}
                    {formData.email && <div><span className="text-gray-500">Email:</span> <span className="font-bold text-gray-900">{formData.email}</span></div>}
                  </div>

                  <p className="text-xs text-gray-500 font-sans max-w-sm mx-auto leading-relaxed">
                    A calendar invitation link and meeting details have been sent to your email.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({ fullName: "", email: "", phone: "", companyName: "" });
                      }}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-bold text-xs transition-all cursor-pointer"
                    >
                      Book Another Session
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORTED INTEGRATIONS FLOW DIAGRAM */}
      <section className="strip-section">
        <div className="wrap">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBEAEA] text-[var(--red)] rounded-full text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] animate-pulse"></span>
            SEAMLESS INTEGRATIONS
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-center">
            Connect your entire <span style={{ color: "var(--red)" }}>operation.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-center text-sm md:text-base">
            Bring your tools together and keep every AR and collection workflow in sync.
          </p>
          <div className="circular-flow-wrapper">
            {/* SVG Connecting Lines behind the grid elements */}
            <svg className="connector-svg" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left curves and line */}
              <path d="M 300 90 C 370 90, 420 130, 450 200" stroke="#E8E5DC" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 200 300 L 390 300" stroke="#E8E5DC" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 300 510 C 370 510, 420 470, 450 400" stroke="#E8E5DC" strokeWidth="2" strokeDasharray="4 4" />

              {/* Right curves and line */}
              <path d="M 700 90 C 630 90, 580 130, 550 200" stroke="#E8E5DC" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 800 300 L 610 300" stroke="#E8E5DC" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 700 510 C 630 510, 580 470, 550 400" stroke="#E8E5DC" strokeWidth="2" strokeDasharray="4 4" />

              {/* Red indicator circles in path midpoints */}
              <circle cx="390" cy="119" r="5" fill="#CB2E41" />
              <circle cx="295" cy="300" r="5" fill="#CB2E41" />
              <circle cx="390" cy="481" r="5" fill="#CB2E41" />

              <circle cx="610" cy="119" r="5" fill="#CB2E41" />
              <circle cx="705" cy="300" r="5" fill="#CB2E41" />
              <circle cx="610" cy="481" r="5" fill="#CB2E41" />
            </svg>

            {/* Left side cards */}
            <div className="flow-card card-1">
              <div className="flow-card-logo-wrap">
                <img src="/teams/1.png" alt="ServiceTitan" className="logo-img" />
              </div>
              <div className="status-badge">
                <span className="dot"></span> Connected
              </div>
            </div>

            <div className="flow-card card-2">
              <div className="flow-card-logo-wrap">
                <img src="/teams/5 (1).png" alt="QuickBooks" className="logo-img" />
              </div>
              <div className="status-badge">
                <span className="dot"></span> Connected
              </div>
            </div>

            <div className="flow-card card-3">
              <div className="flow-card-logo-wrap">
                <img src="/teams/3.png" alt="Jobber" className="logo-img" />
              </div>
              <div className="status-badge">
                <span className="dot"></span> Connected
              </div>
            </div>

            {/* Center Clara AI workspace card */}
            <div className="clara-hub-card">
              <img src="/lovable-uploads/white.png" alt="Clara AI Logo" className="clara-hub-logo" />
              <div className="hub-workspace-text">Your workspace</div>
              <div className="hub-status">
                <span className="pulse-green"></span> Live
              </div>
            </div>

            {/* Right side cards */}
            <div className="flow-card card-4">
              <div className="flow-card-logo-wrap">
                <img src="/teams/2 (5).png" alt="Housecall Pro" className="logo-img" />
              </div>
              <div className="status-badge">
                <span className="dot"></span> Connected
              </div>
            </div>

            <div className="flow-card card-5">
              <div className="flow-card-logo-wrap">
                <img src="/teams/6 (1).png" alt="BuildOps" className="logo-img" />
              </div>
              <div className="status-badge">
                <span className="dot"></span> Connected
              </div>
            </div>

            <div className="flow-card card-6">
              <div className="flow-card-logo-wrap">
                <img src="/teams/4 (4).png" alt="FieldEdge" className="logo-img" />
              </div>
              <div className="status-badge">
                <span className="dot"></span> Connected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TESTIMONIALS SECTION */}
      <section className="proof-section py-20 bg-gray-50 border-b border-line">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial */}
            <div className="testimonial-box bg-white p-8 rounded-2xl border border-line shadow-sm">
              <p className="text-gray-600 italic leading-relaxed mb-6">
                "Clara was up and running with our ServiceTitan in minutes. Within the first month, it recovered $42,500 of overdue invoice balances that our office staff simply didn't have time to chase."
              </p>
              <div className="author flex items-center gap-3">
                <div className="avatar w-10 h-10 rounded-full bg-[#EAE7DF] flex items-center justify-center font-bold text-sm text-[var(--red)]">DD</div>
                <div className="author-info">
                  <h4 className="font-bold text-sm text-gray-900">Dustin Davis</h4>
                  <p className="text-xs text-gray-500">Owner, Davis Heating & Air</p>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="rating-box bg-white p-8 rounded-2xl border border-line shadow-sm flex flex-col justify-center gap-4">
              <div className="stars flex gap-1 text-[#E8A33D]">
                <Star className="w-4 h-4 fill-current animate-pulse" />
                <Star className="w-4 h-4 fill-current animate-pulse" />
                <Star className="w-4 h-4 fill-current animate-pulse" />
                <Star className="w-4 h-4 fill-current animate-pulse" />
                <Star className="w-4 h-4 fill-current animate-pulse" />
              </div>
              <div className="rating-title font-bold text-gray-900 text-base">4.9 Star Rating from Trades Owners</div>
              <div className="rating-desc text-xs text-gray-500 leading-relaxed">
                Rated as the most reliable AI accounts receivable collection agent for plumbing, HVAC, and electrical service contractors.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="wrap">
          <div className="faq-grid">

            {/* Left FAQ text */}
            <div className="faq-head">
              <h2>What else do you <span>need to know?</span></h2>
              <p>
                Everything you need to understand about syncing Clara Collects with your existing cash workflows.
              </p>
            </div>

            {/* Right FAQ Accordion list */}
            <div className="accordion-list">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <button className="accordion-button" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    {activeFaq === index ? <ChevronUp className="w-4 h-4 text-red-500" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeFaq === index && (
                    <div className="accordion-content animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CALLOUT - ELEVATED DESIGN */}
      <section className="py-24 px-6 bg-[#0D0D10] text-white text-center relative overflow-hidden border-t border-white/10">
        {/* Ambient Glow Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#CB2E41]/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-300 uppercase mb-6 tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#CB2E41] animate-pulse"></span>
            A/R Recovery Layer &bull; Zero Staff Lock-In
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.15] font-display text-white">
            <span className="text-white drop-shadow-md block">Stop chasing invoices.</span>
            <span className="text-[#CB2E41]">Start collecting automatically.</span>
          </h2>

          <p className="text-base md:text-lg text-slate-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect Clara AI to your field-service CRM and accounting platforms in less than 10 minutes. Automatically messaging and calling overdue accounts to recover unpaid invoice balances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToBooking}
              className="px-9 py-4 bg-[#CB2E41] hover:bg-[#B92435] text-white rounded-xl text-base font-bold shadow-xl shadow-red-600/30 transition-all hover:scale-105 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Book a Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
