import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AfsaCallCard from "@/components/AfsaCallCard";

const EVENT_START = new Date("2026-09-27T09:00:00-05:00").getTime();

const css = (s: string): React.CSSProperties =>
  Object.fromEntries(
    s.split(";").filter((d) => d.includes(":")).map((d) => {
      const i = d.indexOf(":");
      const key = d.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return [key, d.slice(i + 1).trim()];
    })
  );

const chip = (active: boolean) =>
  [
    "border-radius:999px", "padding:10px 16px", "font-size:13px", "font-family:inherit", "cursor:pointer",
    "transition:background .25s ease,color .25s ease,border-color .25s ease",
    active ? "background:#CB2E41;color:#fff;border:1px solid #CB2E41" : "background:transparent;color:#C9C5C3;border:1px solid rgba(255,255,255,0.22)",
  ].join(";");

const agents = [
  { num: "01", title: "Field Co-Pilot", sub: "Your AI assistant in the field", body: "Hands-free ITM capture, guided inspection workflows, deficiency notes written as the tech walks the system \u2014 and reports that sync to ServiceTitan, Jobber or FieldEdge before the truck leaves the lot.", tie: "ITM, deficiencies & field documentation" },
  { num: "02", title: "Clara Answers", sub: "Never miss a call again", body: "Inspection requests, service calls and the 2am flow-alarm \u2014 answered in seconds, qualified against your service area, and booked straight onto the dispatch board. Nights, weekends, storm volume.", tie: "Inbound & after-hours coverage" },
  { num: "03", title: "Clara Collects", sub: "Get paid without the awkward call", body: "Professional follow-up across voice, text and email on commercial AR \u2014 net-60 cycles, retainage and the invoices your office manager keeps meaning to chase. Not consumer dunning.", tie: "Commercial AR & retainage" },
];

const heroFacts = [
  { v: "8", k: "AI employees on staff" },
  { v: "3", k: "Running live at Booth 1" },
  { v: "15 min", k: "Per booth walkthrough" },
];

const ticker = ["AFSA45", "Booth 1", "Sept 27\u201330", "San Antonio", "ITM & Inspections", "Deficiency Quotes", "Dispatch", "Commercial AR", "Live Demos"];
const tickerRuns = [1, 2];

const barcode = Array.from({ length: 34 }, (_, i) => ({
  style: "flex:1;border-radius:1px;background:" + (i % 7 === 0 ? "#CB2E41" : "#DCD7D5") + ";height:" + (6 + ((i * 37) % 11)) + "px",
}));

const crew = [
  { name: "Clara Answers", job: "Inbound, inspection requests and after-hours calls", live: true },
  { name: "Field Co-Pilot", job: "Technician support and field documentation", live: true },
  { name: "Clara Collects", job: "Outstanding invoices and AR follow-up", live: true },
  { name: "Confirms", job: "Appointment confirmations, reminders, rescheduling", live: false },
  { name: "Dispatch", job: "Service coordination and scheduling workflows", live: false },
  { name: "Quote Follow-Ups", job: "Deficiency proposals and repair quotes that stall", live: false },
  { name: "Estimate Agent", job: "Estimates built from what the field captured", live: false },
  { name: "Reviews", job: "Review requests and administrative workflows", live: false },
].map((c) => ({
  ...c,
  style: "border:1px solid " + (c.live ? "#F3C9CF" : "#E8E4E2") + ";border-radius:18px;padding:22px 20px;background:" + (c.live ? "#FDF7F8" : "#fff") + ";transition:transform .35s cubic-bezier(.2,.7,.2,1),border-color .35s ease",
  badge: c.live
    ? "background:#CB2E41;color:#fff;border-radius:999px;padding:5px 11px;font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap"
    : "border:1px solid #E6E2E0;color:#8E8A88;border-radius:999px;padding:5px 11px;font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap",
  badgeText: c.live ? "At booth" : "Ask us",
}));

const signals = [
  { quote: "\u201COur phones are crazy \u2014 we're missing calls.\u201D", agent: "Answers" },
  { quote: "\u201CInspections get done, then the deficiency quote sits for weeks.\u201D", agent: "Quote Follow-Ups" },
  { quote: "\u201CDispatch is constantly changing and someone has to call everyone.\u201D", agent: "Dispatch + Confirms" },
  { quote: "\u201CTechs spend an hour a day on paperwork.\u201D", agent: "Field Co-Pilot" },
  { quote: "\u201CAR takes forever \u2014 we're always chasing customers.\u201D", agent: "Collects" },
  { quote: "\u201CWe're growing faster than our back office.\u201D", agent: "The whole crew" },
];

const checklist = [
  { n: "1", t: "Watch Clara Answers take a live, unscripted call" },
  { n: "2", t: "See a real ITM inspection captured hands-free with Field Co-Pilot" },
  { n: "3", t: "Walk through your ServiceTitan, Jobber, or FieldEdge setup with our team" },
  { n: "4", t: "Cheer on the National Apprentice Competition next door and swing by after" },
];

const boothRows = [
  { k: "Event", v: "AFSA45 Convention" },
  { k: "Dates", v: "Sept 27\u201330, 2026" },
  { k: "Venue", v: "JW Marriott San Antonio Hill Country Resort & Spa" },
  { k: "Location", v: "Exhibition Hall, Booth 1" },
];

const strip = [
  { k: "Event", v: "AFSA45 Convention & Exhibition" },
  { k: "Dates", v: "Sept 27\u201330, 2026" },
  { k: "Venue", v: "JW Marriott San Antonio Hill Country" },
  { k: "Find Us", v: "Exhibition Hall \u2014 Booth 1" },
];

const proof = [
  { value: 100, desc: "call answer rate achieved after switching inbound coverage to Clara Answers \u2014 including nights, weekends, and storm-volume spikes.", customer: "Rapid Fire Protection \u00B7 California" },
  { value: 40, desc: "faster payment collection on commercial invoices, with zero missed compliance deadlines since automating follow-ups.", customer: "Valley Fire Safety \u00B7 Nevada" },
];

const pageCss = `
.afsa-root { background:#fff; color:#0B0B0B; font-family:"Schibsted Grotesk", system-ui, sans-serif; -webkit-font-smoothing:antialiased; overflow-x:clip; }
.afsa-root *, .afsa-root *::before, .afsa-root *::after { box-sizing:border-box; }
.afsa-root a { color:#CB2E41; text-decoration:none; }
.afsa-root a:hover { color:#9E1F30; }
.afsa-root ::selection { background:#CB2E41; color:#fff; }
.afsa-root :focus-visible { outline:2px solid #CB2E41; outline-offset:3px; }
.afsa-root .afsa-play:hover { background:#fff !important; color:#0B0B0B !important; }
@keyframes clara-marquee { from { transform:translate3d(0,0,0); } to { transform:translate3d(-50%,0,0); } }
@keyframes clara-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.35; transform:scale(.7); } }
@keyframes clara-rotate { to { transform:rotate(360deg); } }
@keyframes clara-wave { 0%,100% { transform:scaleY(0.22); } 50% { transform:scaleY(1); } }
@keyframes clara-drift { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
@keyframes clara-ring { 0% { transform:scale(.9); opacity:.55; } 100% { transform:scale(1.5); opacity:0; } }
.afsa-root [data-herogrid] { grid-template-columns:minmax(0,1.15fr) minmax(300px,0.85fr) !important; }
.afsa-root [data-boothaside] { position:sticky !important; }
.afsa-root [data-signalrow] { grid-template-columns:minmax(0,1fr) auto !important; justify-items:stretch !important; gap:20px !important; }
@media (max-width: 900px) { .afsa-root [data-boothaside] { position:static !important; } }
@media (max-width: 820px) { .afsa-root [data-herogrid] { grid-template-columns:minmax(0,1fr) !important; } }
@media (max-width: 680px) { .afsa-root [data-signalrow] { grid-template-columns:minmax(0,1fr) !important; justify-items:start !important; gap:12px !important; } }
@media (max-width: 620px) { .afsa-root [data-arrow] { display:none !important; } }
@media (max-width: 420px) { .afsa-root [data-ticketrow] { flex-wrap:wrap !important; gap:14px !important; } }
@media (hover: none) { .afsa-root [data-tilt], .afsa-root [data-magnetic] { transform:none !important; } }
.afsa-root .afsa-h0:hover{background:#0B0B0B !important}
.afsa-root .afsa-h1:hover{border-color:#0B0B0B !important;background:#FAF9F8 !important}
.afsa-root .afsa-h2:hover{border-color:#CB2E41 !important;box-shadow:0 24px 50px -36px rgba(203,46,65,0.55) !important}
.afsa-root .afsa-h3:hover{background:#FAF8F8 !important;padding-left:22px !important}
.afsa-root .afsa-h4:hover{border-color:#CB2E41 !important}
.afsa-root .afsa-h5:hover{background:#fff !important;color:#0B0B0B !important}
.afsa-root .afsa-h6:hover{background:#FAF8F8 !important}
.afsa-root .afsa-h7:hover{background:#FAF8F8 !important;padding-left:26px !important}
.afsa-root .afsa-h8:hover{background:#CB2E41 !important;color:#fff !important;border-color:#CB2E41 !important}
.afsa-root .afsa-h9:hover{background:#fff !important;color:#0B0B0B !important}
.afsa-root .afsa-h10:hover{border-color:#fff !important;background:rgba(255,255,255,0.06) !important}
`;

const Afsa45 = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);
  const [day, setDay] = useState("Sun 27");
  const [time, setTime] = useState("10:30 AM");
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // Scroll reveals, counters, parallax and pointer effects from the original design.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = (s: string) => Array.from(root.querySelectorAll<HTMLElement>(s));
    const cleanups: (() => void)[] = [];

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const d = parseInt(el.getAttribute("data-delay") || "0", 10);
        setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, d);
        const u = el.querySelector<HTMLElement>("[data-underline]");
        if (u) setTimeout(() => { u.style.transform = "scaleX(1)"; }, d);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    q("[data-reveal]").forEach((el) => io.observe(el));
    // Failsafe: never leave content hidden.
    const failsafe = setTimeout(() => q("[data-reveal]").forEach((el) => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }), 4000);

    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseFloat(el.getAttribute("data-count") || "0") || 0;
        const suffix = el.getAttribute("data-suffix") || "";
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / 1400);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    q("[data-count]").forEach((el) => cio.observe(el));

    const on = (el: EventTarget, ev: string, fn: EventListener, opts?: AddEventListenerOptions) => {
      el.addEventListener(ev, fn, opts);
      cleanups.push(() => el.removeEventListener(ev, fn));
    };

    if (window.matchMedia("(hover: hover)").matches) {
      q("[data-magnetic]").forEach((el) => {
        on(el, "mousemove", (ev) => {
          const { clientX, clientY } = ev as MouseEvent;
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(clientX - r.left - r.width / 2) * 0.16}px, ${(clientY - r.top - r.height / 2) * 0.22}px)`;
        });
        on(el, "mouseleave", () => { el.style.transform = "translate(0,0)"; });
      });
      q("[data-tilt]").forEach((el) => {
        on(el, "mousemove", (ev) => {
          const { clientX, clientY } = ev as MouseEvent;
          const r = el.getBoundingClientRect();
          const px = (clientX - r.left) / r.width - 0.5, py = (clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
        });
        on(el, "mouseleave", () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)"; });
      });
    }

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      q("[data-parallax]").forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * parseFloat(el.getAttribute("data-parallax") || "0");
        el.style.transform = `translate3d(0, ${off}px, 0)`;
      });
      q("[data-float]").forEach((el) => {
        el.style.transform = `translate3d(0, ${y * parseFloat(el.getAttribute("data-float") || "0")}px, 0)`;
      });
    };
    on(window, "scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      cio.disconnect();
      clearTimeout(failsafe);
      cleanups.forEach((c) => c());
    };
  }, []);

  const diff = Math.max(0, EVENT_START - now);
  const d = Math.floor(diff / 86400000), h = Math.floor(diff / 3600000) % 24, m = Math.floor(diff / 60000) % 60, s = Math.floor(diff / 1000) % 60;
  const countdownShort = diff > 0 ? d + "d " + h + "h to doors" : "Live at AFSA45";
  const countdownLong = diff > 0 ? d + "d " + h + "h " + m + "m " + s + "s" : "Happening now";

  const showPhotos = true;
  const showEventStrip = true;
  const showBadge = true;

  const days = ["Sun 27", "Mon 28", "Tue 29", "Wed 30"].map((label) => ({ label, style: chip(day === label), pick: () => setDay(label) }));
  const times = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"].map((label) => ({ label, style: chip(time === label), pick: () => setTime(label) }));
  const bookLabel = "Book " + day + " \u00B7 " + time + " \u2192";

  const agentRows = agents.map((a, i) => ({
    ...a,
    open: () => setOpen(i),
    rowStyle: "cursor:pointer;padding:clamp(22px,2.6vw,34px) clamp(0px,1.4vw,18px);border-bottom:1px solid #E8E4E2;transition:background .4s ease;background:" + (open === i ? "#FAF8F8" : "transparent"),
    dotStyle: "width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .4s ease;" + (open === i ? "background:#CB2E41;color:#fff;border:1px solid #CB2E41;transform:rotate(45deg)" : "background:transparent;color:#0B0B0B;border:1px solid #DEDAD8"),
    panelStyle: "overflow:hidden;transition:max-height .55s cubic-bezier(.2,.7,.2,1),opacity .45s ease;max-height:" + (open === i ? "300px" : "0px") + ";opacity:" + (open === i ? "1" : "0"),
  }));

  return (
    <>
      <Helmet>
        <title>Clara AI at AFSA45 — Booth 1 · Sept 27–30, 2026</title>
        <meta name="description" content="Clara AI is exhibiting at AFSA45 in San Antonio, Sept 27–30, 2026. Visit Booth 1 for live demos of Clara Answers, Field Co-Pilot and Clara Collects." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap" />
        <style>{pageCss}</style>
      </Helmet>
      <Navigation />
      <div ref={rootRef} className="afsa-root pt-20 md:pt-24">
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
        <header style={{ padding: "clamp(48px,8vw,96px) 0 0", position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", gap: "clamp(28px,5vw,72px)", alignItems: "start" }} data-herogrid="">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", right: "-6vw", top: "-2vw", width: "clamp(180px,26vw,400px)", height: "clamp(180px,26vw,400px)", border: "1px solid #F0ECEA", borderRadius: "999px", pointerEvents: "none", zIndex: -1 }} data-float="0.06" />
            <div data-reveal="" style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", display: "inline-flex", alignItems: "center", gap: "12px", border: "1px solid #E6E2E0", borderRadius: "999px", padding: "9px 18px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#5C5856" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#CB2E41", display: "inline-block" }} />
              {" "}Sept 27–30, 2026 · JW Marriott San Antonio Hill Country Resort & Spa
            </div>
            <h1 style={{ fontWeight: 500, fontSize: "clamp(46px,7vw,104px)", lineHeight: 0.92, letterSpacing: "-0.045em", margin: "clamp(26px,3vw,40px) 0 0", maxWidth: "100%", textWrap: "balance" }}>
              <span data-reveal="" style={{ display: "block", opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)" }}>
                Clara AI is
              </span>
              <span data-reveal="" data-delay="90" style={{ display: "block", opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" }}>
                exhibiting at
              </span>
              <span data-reveal="" data-delay="180" style={{ display: "inline-block", position: "relative", opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", color: "#CB2E41" }}>
                AFSA45
                <span data-underline="" style={{ position: "absolute", left: 0, right: 0, bottom: "0.08em", height: "3px", background: "#CB2E41", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 1s cubic-bezier(.2,.7,.2,1) .35s", display: "block" }} />
              </span>
            </h1>
            <div data-reveal="" data-delay="260" style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", marginTop: "clamp(26px,3vw,40px)" }}>
              <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.62, color: "#4A4644", maxWidth: "50ch", textWrap: "pretty" }}>
                Four days of contractors, apprentices, and code experts under one roof. Come hear Clara answer a real call, watch Field Co-Pilot guide an inspection, and see why fire protection companies are letting an AI chase their invoices.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "30px" }}>
                <a href="#booth" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#CB2E41", color: "#fff", padding: "16px 28px", borderRadius: "999px", fontSize: "14.5px", fontWeight: 500, transition: "background .3s ease,transform .3s ease" }} className="afsa-h0">
                  Reserve a Booth Meeting{" "}
                  <span style={{ display: "inline-block", transition: "transform .3s ease" }}>
                    →
                  </span>
                </a>
                <a href="#agents" style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid #DEDAD8", color: "#0B0B0B", padding: "16px 28px", borderRadius: "999px", fontSize: "14.5px", fontWeight: 500, transition: "border-color .3s ease,background .3s ease" }} className="afsa-h1">
                  See What We're Demoing
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", marginTop: "34px", paddingTop: "26px", borderTop: "1px solid #EFECEA" }}>
                {heroFacts.map((f, fIndex) => (
                  <div key={fIndex} style={{ minWidth: "120px" }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "30px", lineHeight: 1, color: "#0B0B0B" }}>
                      {f.v}
                    </div>
                    <div style={{ marginTop: "8px", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8E8A88" }}>
                      {f.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div data-reveal="" data-delay="200" data-herocol="" style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", display: "flex", flexDirection: "column", gap: "16px", position: "relative", paddingTop: "clamp(0px,2vw,26px)" }}>
            <div style={{ position: "absolute", right: "-8%", top: "-6%", width: "clamp(120px,16vw,220px)", height: "clamp(120px,16vw,220px)", border: "1px solid #F7D6DB", borderRadius: "999px", pointerEvents: "none", zIndex: 0 }} data-float="-0.08" />
            <AfsaCallCard />
            <a href="#booth" data-tilt="" style={{ position: "relative", zIndex: 1, display: "block", border: "1px solid #E8E4E2", borderRadius: "24px", background: "#fff", color: "#0B0B0B", overflow: "hidden", transition: "transform .35s cubic-bezier(.2,.7,.2,1),border-color .35s ease,box-shadow .35s ease", willChange: "transform" }} className="afsa-h2">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "13px 20px", background: "#FAF8F8", borderBottom: "1px dashed #E0DBD9" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8E8A88" }}>
                  Priority walkthrough pass
                </span>
                <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#CB2E41" }}>
                  No. 0045
                </span>
              </div>
              <div data-ticketrow="" style={{ position: "relative", display: "flex", alignItems: "stretch", gap: "20px", padding: "22px 20px" }}>
                <span style={{ position: "absolute", left: "-7px", top: "50%", width: "14px", height: "14px", borderRadius: "999px", background: "#fff", border: "1px solid #E8E4E2", transform: "translateY(-50%)" }} />
                <span style={{ position: "absolute", right: "-7px", top: "50%", width: "14px", height: "14px", borderRadius: "999px", background: "#fff", border: "1px solid #E8E4E2", transform: "translateY(-50%)" }} />
                <div style={{ flex: "none", width: "88px", background: "#CB2E41", color: "#fff", borderRadius: "16px", padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <span style={{ fontSize: "8.5px", letterSpacing: "0.2em", textTransform: "uppercase", opacity: ".85" }}>
                    Booth
                  </span>
                  <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: "46px", lineHeight: 0.9, marginTop: "2px" }}>
                    01
                  </span>
                  <span style={{ fontSize: "8.5px", letterSpacing: "0.18em", textTransform: "uppercase", opacity: ".85", marginTop: "6px" }}>
                    Exhib. Hall
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px dashed #E8E4E2", paddingLeft: "20px" }}>
                  <div style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "-0.015em" }}>
                    15 minutes, reserved for you
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: 1.5, color: "#6A6664" }}>
                    Live ITM, deficiency-quote and AR walkthrough — built on your own workflow.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", border: "1px solid #E6E2E0", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", color: "#4A4644", fontVariantNumeric: "tabular-nums" }}>
                      Doors in {countdownLong}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "#CB2E41", fontWeight: 500 }}>
                      Claim →
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "22px", padding: "0 20px 12px" }}>
                {barcode.map((b, bIndex) => (
                  <span key={bIndex} style={css(b.style)} />
                ))}
              </div>
            </a>
          </div>
        </header>
        {showPhotos && (
          <>
            <div data-reveal="" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1)", position: "relative", marginTop: "clamp(40px,5vw,72px)", height: "clamp(280px,42vw,520px)", borderRadius: "28px", overflow: "hidden", background: "#F4F2F1" }}>
              <div data-parallax="0.12" style={{ position: "absolute", inset: "-8% 0", willChange: "transform" }}>
                <img src="/photos/Copy of Service World Expo Booth.jpg" alt="Clara AI exhibit booth on a trade show floor" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 58%", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "22px", bottom: "22px", pointerEvents: "none", background: "#fff", borderRadius: "999px", padding: "11px 22px", fontSize: "11.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Exhibition Hall ·{" "}
                <span style={{ color: "#CB2E41" }}>
                  Booth 1
                </span>
              </div>
              <div style={{ position: "absolute", right: "22px", top: "22px", pointerEvents: "none", background: "rgba(11,11,11,0.82)", color: "#fff", borderRadius: "999px", padding: "11px 22px", fontSize: "11.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                {countdownLong}
              </div>
            </div>
          </>
        )}
      </div>
      <div style={{ marginTop: "clamp(40px,5vw,72px)", borderTop: "1px solid #EFECEA", borderBottom: "1px solid #EFECEA", padding: "18px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "max-content", animation: "clara-marquee 42s linear infinite" }}>
          {tickerRuns.map((run, runIndex) => (
            <div key={runIndex} style={{ display: "flex", alignItems: "center", gap: "36px", paddingRight: "36px", fontSize: "12px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8E8A88", whiteSpace: "nowrap" }}>
              {ticker.map((t, tIndex) => (
                <span key={tIndex} style={{ display: "flex", alignItems: "center", gap: "36px" }}>
                  <span>
                    {t}
                  </span>
                  <span style={{ width: "5px", height: "5px", borderRadius: "999px", background: "#CB2E41", display: "inline-block" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
        <section id="booth" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(330px,100%),1fr))", gap: "clamp(36px,5vw,72px)", alignItems: "start" }}>
            <div data-reveal="" style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
                Visit the Booth
              </div>
              <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "17ch" }}>
                Skip the line at the booth —{" "}
                <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                  grab a slot now.
                </em>
              </h2>
              <p style={{ margin: "22px 0 0", fontSize: "16.5px", lineHeight: 1.62, color: "#4A4644", maxWidth: "50ch", textWrap: "pretty" }}>
                We're keeping a short daily schedule of 15-minute walkthroughs open for contractors who want a real conversation, not a hallway pitch.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "36px 0 0", display: "flex", flexDirection: "column" }}>
                {checklist.map((c, cIndex) => (
                  <li key={cIndex} data-row="" style={{ display: "flex", gap: "18px", alignItems: "flex-start", padding: "20px 12px", margin: "0 -12px", borderTop: "1px solid #EFECEA", borderRadius: "14px", transition: "background .35s ease,padding-left .35s ease" }} className="afsa-h3">
                    <span style={{ flex: "none", width: "22px", height: "22px", borderRadius: "999px", border: "1px solid #CB2E41", color: "#CB2E41", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", marginTop: "2px", fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                      {c.n}
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: 1.55, color: "#2A2726" }}>
                      {c.t}
                    </span>
                  </li>
                ))}
              </ul>
              {showBadge && (
                <>
                  <div style={{ marginTop: "36px", border: "1px solid #E8E4E2", borderRadius: "22px", padding: "24px 26px", display: "flex", gap: "20px", alignItems: "center", background: "#FBFAFA", transition: "border-color .35s ease,transform .35s ease" }} className="afsa-h4">
                    <div style={{ flex: "none", width: "60px", height: "60px", borderRadius: "999px", border: "1px solid #CB2E41", color: "#CB2E41", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "20px" }}>
                      45
                    </div>
                    <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.55, color: "#4A4644" }}>
                      Clara AI is a proud exhibitor at the American Fire Sprinkler Association's 45th Annual Convention & Exhibition.
                    </p>
                  </div>
                </>
              )}
            </div>
            <aside data-reveal="" data-delay="120" data-boothaside="" style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", background: "#0B0B0B", color: "#fff", borderRadius: "28px", padding: "clamp(28px,3vw,40px)", position: "sticky", top: "104px", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9A9694" }}>
                  Booth No. 1
                </div>
                <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#CB2E41" }}>
                  {countdownShort}
                </div>
              </div>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.08, marginTop: "16px" }}>
                Fifteen minutes,
                <br />
                on the floor.
              </div>
              <div style={{ marginTop: "28px", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7E7A78" }}>
                Pick a day
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                {days.map((d, dIndex) => (
                  <button key={dIndex} type="button" onClick={d.pick} style={css(d.style)}>
                    {d.label}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: "22px", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7E7A78" }}>
                Pick a time
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                {times.map((t, tIndex) => (
                  <button key={tIndex} type="button" onClick={t.pick} style={css(t.style)}>
                    {t.label}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: "26px", display: "flex", flexDirection: "column" }}>
                {boothRows.map((r, rIndex) => (
                  <div key={rIndex} style={{ display: "flex", justifyContent: "space-between", gap: "20px", padding: "13px 0", borderTop: "1px solid rgba(255,255,255,0.13)" }}>
                    <span style={{ fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8E8A88", flex: "none" }}>
                      {r.k}
                    </span>
                    <span style={{ fontSize: "14px", textAlign: "right", color: "#F2F0EF" }}>
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
              <a href="#booth" data-magnetic="" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "26px", background: "#CB2E41", color: "#fff", padding: "17px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, transition: "background .3s ease,color .3s ease" }} className="afsa-h5">
                {bookLabel}
              </a>
              <p style={{ margin: "18px 0 0", fontSize: "13px", lineHeight: 1.55, color: "#8E8A88" }}>
                Prefer to talk before the show? Reach out any time — we'll bring the demo to you.
              </p>
            </aside>
          </div>
        </section>
        {showEventStrip && (
          <>
            <div data-reveal="" style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))", gap: "1px", background: "#E8E4E2", borderTop: "1px solid #E8E4E2", borderBottom: "1px solid #E8E4E2", margin: "clamp(64px,8vw,104px) 0 0" }}>
              {strip.map((s, sIndex) => (
                <div key={sIndex} style={{ background: "#fff", padding: "28px 22px", transition: "background .35s ease" }} className="afsa-h6">
                  <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8E8A88" }}>
                    {s.k}
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "16px", fontWeight: 500 }}>
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <section id="agents" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              On the Show Floor
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "21ch" }}>
              Three agents, built for a trade that runs on{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                trucks and inspections.
              </em>
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "16.5px", lineHeight: 1.62, color: "#4A4644", maxWidth: "60ch", textWrap: "pretty" }}>
              Clara isn't a chatbot bolted onto a phone line — it's an operating layer built specifically for merit-shop trades. At the booth, we'll run all three live.
            </p>
          </div>
          <div data-reveal="" data-delay="100" style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", marginTop: "clamp(32px,4vw,52px)", borderTop: "1px solid #E8E4E2" }}>
            {agentRows.map((a, aIndex) => (
              <div key={aIndex} onMouseEnter={a.open} onClick={a.open} style={css(a.rowStyle)}>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "clamp(16px,3vw,40px)", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(20px,2.4vw,30px)", color: "#CB2E41", minWidth: "44px" }}>
                    {a.num}
                  </span>
                  <div>
                    <div style={{ fontSize: "clamp(24px,3.2vw,40px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                      {a.title}
                    </div>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(16px,1.6vw,20px)", color: "#6A6664", marginTop: "6px" }}>
                      {a.sub}
                    </div>
                  </div>
                  <span data-arrow="" style={css(a.dotStyle)}>
                    →
                  </span>
                </div>
                <div style={css(a.panelStyle)}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))", gap: "24px", padding: "24px 0 8px 0" }}>
                    <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.62, color: "#4A4644", maxWidth: "52ch", textWrap: "pretty" }}>
                      {a.body}
                    </p>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid #E6E2E0", borderRadius: "999px", padding: "9px 18px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#5C5856" }}>
                        Live at booth · {a.tie}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="crew" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: "clamp(28px,4vw,64px)", alignItems: "end" }}>
            <div data-reveal="" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
                The Full Crew
              </div>
              <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,4.2vw,54px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "18ch" }}>
                Eight AI employees.{" "}
                <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                  Three on the floor.
                </em>
              </h2>
            </div>
            <p data-reveal="" data-delay="80" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", margin: 0, fontSize: "16.5px", lineHeight: 1.62, color: "#4A4644", maxWidth: "52ch", textWrap: "pretty" }}>
              Clara staffs the workflow, not the job title — from the first ring through dispatch, the deficiency quote, and the invoice that finally gets paid. Fire protection first, and the same loop runs for HVAC, electrical, plumbing, facility, security, elevator and dock contractors.
            </p>
          </div>
          <div data-reveal="" data-delay="140" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))", gap: "12px", marginTop: "clamp(32px,4vw,52px)" }}>
            {crew.map((c, cIndex) => (
              <div key={cIndex} style={css(c.style)}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                  <span style={{ fontSize: "17px", fontWeight: 500, letterSpacing: "-0.01em" }}>
                    {c.name}
                  </span>
                  <span style={css(c.badge)}>
                    {c.badgeText}
                  </span>
                </div>
                <div style={{ marginTop: "10px", fontSize: "13.5px", lineHeight: 1.5, color: "#6A6664" }}>
                  {c.job}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="signals" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              Bring Us Your Worst Workflow
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,4.2vw,54px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "20ch" }}>
              If you've said one of these out loud,{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                we'll demo the fix.
              </em>
            </h2>
          </div>
          <div data-reveal="" data-delay="100" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", marginTop: "clamp(30px,4vw,48px)", borderTop: "1px solid #E8E4E2" }}>
            {signals.map((s, sIndex) => (
              <div key={sIndex} data-signalrow="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "20px", alignItems: "center", padding: "20px 14px", margin: "0 -14px", borderBottom: "1px solid #EFECEA", borderRadius: "14px", transition: "background .35s ease,padding-left .35s ease" }} className="afsa-h7">
                <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(19px,2.2vw,27px)", lineHeight: 1.3, color: "#1A1817" }}>
                  {s.quote}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", border: "1px solid #E6E2E0", borderRadius: "999px", padding: "8px 16px", fontSize: "11.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A4644", whiteSpace: "nowrap", transition: "background .3s ease,color .3s ease,border-color .3s ease" }} className="afsa-h8">
                  {s.agent}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section id="proof" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              Already Running In Fire Protection
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "19ch" }}>
              Not a pitch.{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                Two contractors
              </em>
              {" "}already running Clara.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: "clamp(24px,4vw,56px)", marginTop: "clamp(36px,4.6vw,60px)" }}>
            {proof.map((p, pIndex) => (
              <div key={pIndex} data-reveal="" style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", borderTop: "2px solid #0B0B0B", padding: "30px 0 0" }}>
                <div data-count={p.value} data-suffix="%" style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(70px,10vw,124px)", lineHeight: 0.88, letterSpacing: "-0.04em", color: "#CB2E41" }}>
                  0%
                </div>
                <p style={{ margin: "26px 0 0", fontSize: "16.5px", lineHeight: 1.6, color: "#2A2726", maxWidth: "40ch", textWrap: "pretty" }}>
                  {p.desc}
                </p>
                <div style={{ marginTop: "20px", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8E8A88" }}>
                  {p.customer}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section data-reveal="" style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)", marginTop: "clamp(80px,10vw,140px)", background: "#0B0B0B", color: "#fff", borderRadius: "32px", padding: "clamp(40px,6vw,84px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "320px", height: "320px", border: "1px solid rgba(203,46,65,0.5)", borderRadius: "999px", pointerEvents: "none" }} data-float="0.08" />
          <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
            Booth 1 · Exhibition Hall
          </div>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(34px,5.6vw,76px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: "20px 0 0", maxWidth: "16ch" }}>
            Come watch an AI{" "}
            <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
              work a shift.
            </em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "34px" }}>
            <a href="#booth" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#CB2E41", color: "#fff", padding: "17px 30px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, transition: "background .3s ease,color .3s ease" }} className="afsa-h9">
              Reserve a Booth Meeting →
            </a>
            <a href="#agents" style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(255,255,255,0.28)", color: "#fff", padding: "17px 30px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, transition: "border-color .3s ease,background .3s ease" }} className="afsa-h10">
              See What We're Demoing
            </a>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Afsa45;
