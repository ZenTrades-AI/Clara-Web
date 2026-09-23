import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AfsaCallCard from "@/components/AfsaCallCard";
import AfsaBookingDetails from "@/components/AfsaBookingDetails";

const EVENT_START = new Date("2026-09-29T14:30:00-05:00").getTime();

const css = (s: string): React.CSSProperties =>
  Object.fromEntries(
    s.split(";").filter((d) => d.includes(":")).map((d) => {
      const i = d.indexOf(":");
      const key = d.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return [key, d.slice(i + 1).trim()];
    })
  );

const agents = [
  { num: "01", title: "Clara Answers", sub: "The call you missed at 2am", body: "Inspection requests, service calls and the flow-alarm at 2am, answered in seconds, qualified against your service area, and booked straight onto the board. Nights, weekends, storm volume." },
  { num: "02", title: "Quote Follow-Ups", sub: "The deficiency quote that sat for six weeks", body: "Every repair proposal chased on a cadence until it is approved or dead. It\u2019s the single biggest pile of idle revenue sitting in most fire protection shops." },
  { num: "03", title: "Clara Collects", sub: "The invoice nobody wants to call about", body: "Professional follow-up across voice, text and email on commercial AR: net-60 cycles, retainage, and the invoices your office manager keeps meaning to chase." },
  { num: "04", title: "Confirms", sub: "The no-show that burned a truck roll", body: "Appointment confirmations, reminders and reschedules handled automatically, so the schedule your dispatcher built in the morning is the one your techs actually run." },
  { num: "05", title: "Estimate Agent", sub: "The estimate waiting on one person", body: "Estimates built straight from the inspection findings your techs captured, so the quote goes out the same week instead of queueing behind the one person who writes them." },
  { num: "06", title: "Reviews", sub: "The five-star job nobody heard about", body: "Review requests timed to the completed job, plus the administrative follow-through nobody in the office has time for." },
];

const sessionFacts = [
  { k: "Time", v: "2:15 – 3:15 PM" },
  { k: "Room", v: "Grand Oaks Q–S" },
  { k: "Day", v: "Mon, Sept 28" },
];

const heroFacts = [
  { v: "6", k: "AI employees on staff" },
  { v: "15 min", k: "Per booth walkthrough" },
];

const ticker = ["AFSA45", "Booth 1", "Tue 29 & Wed 30", "San Antonio", "Missed Calls", "Deficiency Quotes", "Estimates", "Commercial AR", "Live Demos"];
const tickerRuns = [1, 2];

const barcode = Array.from({ length: 34 }, (_, i) => ({
  style: "flex:1;border-radius:1px;background:" + (i % 7 === 0 ? "#CB2E41" : "#DCD7D5") + ";height:" + (6 + ((i * 37) % 11)) + "px",
}));

const signals = [
  { quote: "“Our phones are crazy. We’re missing calls.”", agent: "Clara Answers" },
  { quote: "“Inspections get done, then the deficiency quote sits for weeks.”", agent: "Quote Follow-Ups" },
  { quote: "“Estimates wait on the one person who writes them.”", agent: "Estimate Agent" },
  { quote: "“Somebody has to call every customer to confirm tomorrow.”", agent: "Confirms" },
  { quote: "“AR takes forever. We’re always chasing customers.”", agent: "Clara Collects" },
  { quote: "“We’re growing faster than our back office.”", agent: "The whole crew" },
];

const checklist = [
  { n: "1", t: "Hear how Clara Answers handles an inbound service call" },
  { n: "2", t: "See how a stalled deficiency quote gets followed up on its own" },
  { n: "3", t: "Talk through the one workflow in your shop that keeps slipping" },
];

const boothRows = [
  { k: "Event", v: "AFSA45 Convention" },
  { k: "Tue, Sept 29", v: "2:30 – 5:00 PM" },
  { k: "Wed, Sept 30", v: "12:30 – 3:30 PM" },
  { k: "Venue", v: "JW Marriott San Antonio Hill Country Resort & Spa" },
  { k: "Location", v: "Exhibition Hall, Booth 1" },
];

const strip = [
  { k: "Event", v: "AFSA45 Convention & Exhibition" },
  { k: "Booth Hours", v: "Tue 2:30–5 PM · Wed 12:30–3:30 PM" },
  { k: "Venue", v: "JW Marriott San Antonio Hill Country" },
  { k: "Find Us", v: "Exhibition Hall, Booth 1" },
];

const proof = [
  { value: 100, desc: "call answer rate achieved after switching inbound coverage to Clara Answers, including nights, weekends, and storm-volume spikes.", customer: "Multi-branch sprinkler contractor · California" },
  { value: 40, desc: "faster payment collection on commercial invoices, with zero missed compliance deadlines since automating follow-ups.", customer: "ITM & service contractor · Nevada" },
];

const slots = (day: string) =>
  day === "Wed 30" ? ["12:30 PM", "1:15 PM", "2:00 PM", "2:45 PM"] : ["2:30 PM", "3:15 PM", "4:00 PM", "4:30 PM"];

const pageCss = `
.afsa-root { background:#fff; color:#0B0B0B; font-family:"Schibsted Grotesk", system-ui, sans-serif; -webkit-font-smoothing:antialiased; overflow-x:clip; }
.afsa-root *, .afsa-root *::before, .afsa-root *::after { box-sizing:border-box; }
.afsa-root a { color:#CB2E41; text-decoration:none; }
.afsa-root a:hover { color:#9E1F30; }
.afsa-root ::selection { background:#CB2E41; color:#fff; }
.afsa-root :focus-visible { outline:2px solid #CB2E41; outline-offset:3px; }
.afsa-root .afsa-book:hover:not(:disabled) { background:#fff !important; color:#0B0B0B !important; }
.afsa-root input:focus { border-color:#CB2E41 !important; }
.afsa-root .afsa-play:hover { background:#fff !important; color:#0B0B0B !important; }
@keyframes clara-marquee { from { transform:translate3d(0,0,0); } to { transform:translate3d(-50%,0,0); } }
@keyframes clara-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.35; transform:scale(.7); } }
@keyframes clara-rotate { to { transform:rotate(360deg); } }
@keyframes clara-wave { 0%,100% { transform:scaleY(0.22); } 50% { transform:scaleY(1); } }
@keyframes clara-drift { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
@keyframes clara-rise { from { opacity:0; transform:translateY(26px); } to { opacity:1; transform:translateY(0); } }
@keyframes clara-underline { from { transform:scaleX(0); } to { transform:scaleX(1); } }
@keyframes clara-ring { 0% { transform:scale(.9); opacity:.55; } 100% { transform:scale(1.5); opacity:0; } }
.afsa-root [data-herogrid] { grid-template-columns:minmax(0,1.15fr) minmax(300px,0.85fr) !important; }
.afsa-root [data-boothaside] { position:sticky !important; }
.afsa-root [data-crewgrid] { grid-template-columns:minmax(0,1fr) minmax(0,1fr) !important; }
.afsa-root [data-sessiongrid] { grid-template-columns:minmax(0,0.8fr) minmax(0,1.2fr) !important; }
@media (max-width: 1000px) { .afsa-root [data-crewgrid] { grid-template-columns:minmax(0,1fr) !important; } }
@media (max-width: 880px) { .afsa-root [data-sessiongrid] { grid-template-columns:minmax(0,1fr) !important; } }
.afsa-root [data-signalrow] { grid-template-columns:minmax(0,1fr) auto !important; justify-items:stretch !important; gap:20px !important; }
@media (max-width: 900px) { .afsa-root [data-boothaside] { position:static !important; } }
@media (max-width: 820px) { .afsa-root [data-herogrid] { grid-template-columns:minmax(0,1fr) !important; } }
@media (max-width: 680px) { .afsa-root [data-signalrow] { grid-template-columns:minmax(0,1fr) !important; justify-items:start !important; gap:12px !important; } }
@media (max-width: 620px) { .afsa-root [data-arrow] { display:none !important; } }
@media (max-width: 420px) { .afsa-root [data-ticketrow] { flex-wrap:wrap !important; gap:14px !important; } }
@media (max-width: 700px) {
  .afsa-root [data-mapbox] { height:auto !important; aspect-ratio:1200 / 560; border-radius:18px !important; }
  .afsa-root [data-mapbox] [data-parallax] { inset:0 !important; transform:none !important; }
  .afsa-root [data-mapbox] > div:not([data-parallax]) { padding:6px 11px !important; font-size:9px !important; letter-spacing:0.12em !important; }
  .afsa-root [data-mapbox] > div:nth-child(2) { top:10px !important; bottom:auto !important; left:10px !important; }
  .afsa-root [data-mapbox] > div:nth-child(3) { top:auto !important; bottom:10px !important; right:10px !important; }
}
@media (hover: none) { .afsa-root [data-tilt], .afsa-root [data-magnetic] { transform:none !important; } }
.afsa-root .afsa-h0:hover{background:#0B0B0B !important}
.afsa-root .afsa-h1:hover{border-color:#CB2E41 !important;box-shadow:0 24px 50px -36px rgba(203,46,65,0.55) !important}
.afsa-root .afsa-h2:hover{background:#FAF8F8 !important;padding-left:22px !important}
.afsa-root .afsa-h3:hover{border-color:#CB2E41 !important}
.afsa-root .afsa-h4:hover{color:#fff !important;border-color:rgba(255,255,255,0.5) !important}
.afsa-root .afsa-h5:hover{color:#fff !important;border-color:rgba(255,255,255,0.5) !important}
.afsa-root .afsa-h6:hover{background:#fff !important;color:#0B0B0B !important}
.afsa-root .afsa-h7:hover{background:#FAF8F8 !important}
.afsa-root .afsa-h8:hover{background:#FAF8F8 !important;padding-left:26px !important}
.afsa-root .afsa-h9:hover{background:#CB2E41 !important;color:#fff !important;border-color:#CB2E41 !important}
.afsa-root .afsa-h10:hover{border-color:#CB2E41 !important;box-shadow:0 24px 50px -36px rgba(203,46,65,0.45) !important}
.afsa-root .afsa-h11:hover{background:#FAF8F8 !important}
.afsa-root .afsa-h12:hover{background:#CB2E41 !important}
.afsa-root .afsa-h13:hover{background:#fff !important;color:#0B0B0B !important}
`;

const Afsa45 = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);
  const [day, setDay] = useState("Tue 29");
  const [time, setTime] = useState("3:15 PM");
  const [now, setNow] = useState(Date.now());
  const [bookingStep, setBookingStep] = useState<"pick" | "details">("pick");

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

  const days = ["Tue 29", "Wed 30"].map((label) => ({
    label, on: day === label, off: day !== label,
    pick: () => { setDay(label); setTime(slots(label)[1]); },
  }));
  const times = slots(day).map((label) => ({ label, on: time === label, off: time !== label, pick: () => setTime(label) }));
  const bookLabel = "Book " + day + " \u00B7 " + time + " \u2192";

  const agentRows = agents.map((a, i) => ({
    ...a,
    open: () => setOpen(i),
    rowStyle: "cursor:pointer;padding:clamp(16px,1.8vw,22px) clamp(0px,1.2vw,14px);border-bottom:1px solid #E8E4E2;transition:background .4s ease;background:" + (open === i ? "#FAF8F8" : "transparent"),
    dotStyle: "width:38px;height:38px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .4s ease;" + (open === i ? "background:#CB2E41;color:#fff;border:1px solid #CB2E41;transform:rotate(45deg)" : "background:transparent;color:#0B0B0B;border:1px solid #DEDAD8"),
    panelStyle: "overflow:hidden;transition:max-height .55s cubic-bezier(.2,.7,.2,1),opacity .45s ease;max-height:" + (open === i ? "300px" : "0px") + ";opacity:" + (open === i ? "1" : "0"),
  }));

  return (
    <>
      <Helmet>
        <title>Clara AI at AFSA45 · Booth 1 · Sept 27–30, 2026</title>
        <meta name="description" content="Clara AI is exhibiting at AFSA45 in San Antonio. Visit Booth 1 on Tue, Sept 29 and Wed, Sept 30 for a 15-minute walkthrough, or catch Tony Fleming's session on Mon, Sept 28." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap" />
        <style>{pageCss}</style>
      </Helmet>
      <Navigation />
      <div ref={rootRef} className="afsa-root pt-20 md:pt-24 pb-[clamp(72px,8vw,110px)]">
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
        <header style={{ padding: "clamp(48px,8vw,96px) 0 0", position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", gap: "clamp(28px,5vw,72px)", alignItems: "start" }} data-herogrid="">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", right: "-6vw", top: "-2vw", width: "clamp(180px,26vw,400px)", height: "clamp(180px,26vw,400px)", border: "1px solid #F0ECEA", borderRadius: "999px", pointerEvents: "none", zIndex: -1 }} data-float="0.06" />
            <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", border: "1px solid #E6E2E0", borderRadius: "999px", padding: "9px 18px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#5C5856", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#CB2E41", display: "inline-block" }} />
              {" "}Sept 27–30, 2026 · JW Marriott San Antonio Hill Country Resort & Spa
            </div>
            <h1 style={{ fontWeight: 500, fontSize: "clamp(46px,7vw,104px)", lineHeight: 0.92, letterSpacing: "-0.045em", margin: "clamp(26px,3vw,40px) 0 0", maxWidth: "100%", textWrap: "balance" }}>
              <span data-reveal="" style={{ display: "block", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
                Clara AI is
              </span>
              <span data-reveal="" data-delay="90" style={{ display: "block", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.09s both" }}>
                exhibiting at
              </span>
              <span data-reveal="" data-delay="180" style={{ display: "inline-block", position: "relative", color: "#CB2E41", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.18s both" }}>
                AFSA45
                <span data-underline="" style={{ position: "absolute", left: 0, right: 0, bottom: "0.08em", height: "3px", background: "#CB2E41", transformOrigin: "left", animation: "clara-underline 1s cubic-bezier(.2,.7,.2,1) .53s both", display: "block" }} />
              </span>
            </h1>
            <div data-reveal="" data-delay="260" style={{ marginTop: "clamp(26px,3vw,40px)", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.26s both" }}>
              <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.62, color: "#4A4644", maxWidth: "50ch", textWrap: "pretty" }}>
                Missed calls, quotes that sit for weeks, confirmations nobody has time to make, invoices nobody wants to chase. Bring us the one that costs you most and we’ll show you the agent that handles it.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "30px" }}>
                <a href="#booth" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#CB2E41", color: "#fff", padding: "16px 28px", borderRadius: "999px", fontSize: "14.5px", fontWeight: 500, transition: "background .3s ease,transform .3s ease" }} className="afsa-h0">
                  Book a Demo at Booth #1{" "}
                  <span style={{ display: "inline-block", transition: "transform .3s ease" }}>
                    →
                  </span>
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
          <div data-reveal="" data-delay="200" data-herocol="" style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", paddingTop: "clamp(0px,2vw,26px)", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.20s both" }}>
            <div style={{ position: "absolute", right: "-8%", top: "-6%", width: "clamp(120px,16vw,220px)", height: "clamp(120px,16vw,220px)", border: "1px solid #F7D6DB", borderRadius: "999px", pointerEvents: "none", zIndex: 0 }} data-float="-0.08" />
            <AfsaCallCard />
            <a href="#booth" data-tilt="" style={{ position: "relative", zIndex: 1, display: "block", border: "1px solid #E8E4E2", borderRadius: "24px", background: "#fff", color: "#0B0B0B", overflow: "hidden", transition: "transform .35s cubic-bezier(.2,.7,.2,1),border-color .35s ease,box-shadow .35s ease", willChange: "transform" }} className="afsa-h1">
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
                    Bring one workflow you want to fix and we’ll show you how Clara handles it.
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
            <div data-reveal="" data-mapbox="" style={{ position: "relative", marginTop: "clamp(40px,5vw,72px)", height: "clamp(280px,42vw,520px)", borderRadius: "28px", overflow: "hidden", background: "#F4F2F1", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
              <div data-parallax="0.12" style={{ position: "absolute", inset: "-8% 0", willChange: "transform" }}>
                <img src="/photos/afsa45-floor-map.webp" alt="AFSA45 exhibit hall floor map showing Clara AI at Booth 1, near the entrance" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "fill", display: "block" }} />
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
            <div data-reveal="" style={{ animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
                Visit the Booth
              </div>
              <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "17ch" }}>
                Skip the line at the booth.{" "}
                <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                  Grab a slot now.
                </em>
              </h2>
              <p style={{ margin: "22px 0 0", fontSize: "16.5px", lineHeight: 1.62, color: "#4A4644", maxWidth: "50ch", textWrap: "pretty" }}>
                The hall is open Tuesday afternoon and Wednesday midday only, so we're keeping 15-minute walkthroughs open for contractors who want a real conversation, not a hallway pitch.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "36px 0 0", display: "flex", flexDirection: "column" }}>
                {checklist.map((c, cIndex) => (
                  <li key={cIndex} data-row="" style={{ display: "flex", gap: "18px", alignItems: "flex-start", padding: "20px 12px", margin: "0 -12px", borderTop: "1px solid #EFECEA", borderRadius: "14px", transition: "background .35s ease,padding-left .35s ease" }} className="afsa-h2">
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
                  <div style={{ marginTop: "36px", border: "1px solid #E8E4E2", borderRadius: "22px", padding: "24px 26px", display: "flex", gap: "20px", alignItems: "center", background: "#FBFAFA", transition: "border-color .35s ease,transform .35s ease" }} className="afsa-h3">
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
            <aside data-reveal="" data-delay="120" data-boothaside="" style={{ background: "#0B0B0B", color: "#fff", borderRadius: "28px", padding: "clamp(28px,3vw,40px)", position: "sticky", top: "104px", overflow: "hidden", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.12s both" }}>
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
              {bookingStep === "pick" ? (
                <>
                <div style={{ marginTop: "28px", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7E7A78" }}>
                  Pick a day
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                  {days.map((d, dIndex) =>
                    d.on ? (
                      <button key={dIndex} type="button" onClick={d.pick} style={{ borderRadius: "999px", padding: "10px 16px", fontSize: "13px", fontFamily: "inherit", cursor: "pointer", background: "#CB2E41", color: "#fff", border: "1px solid #CB2E41" }}>
                        {d.label}
                      </button>
                    ) :
                    d.off ? (
                      <button key={dIndex} type="button" onClick={d.pick} style={{ borderRadius: "999px", padding: "10px 16px", fontSize: "13px", fontFamily: "inherit", cursor: "pointer", background: "transparent", color: "#C9C5C3", border: "1px solid rgba(255,255,255,0.22)", transition: "border-color .25s ease,color .25s ease" }} className="afsa-h4">
                        {d.label}
                      </button>
                    ) :
                    null
                  )}
                </div>
                <div style={{ marginTop: "22px", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7E7A78" }}>
                  Pick a time
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                  {times.map((t, tIndex) =>
                    t.on ? (
                      <button key={tIndex} type="button" onClick={t.pick} style={{ borderRadius: "999px", padding: "10px 16px", fontSize: "13px", fontFamily: "inherit", cursor: "pointer", background: "#CB2E41", color: "#fff", border: "1px solid #CB2E41" }}>
                        {t.label}
                      </button>
                    ) :
                    t.off ? (
                      <button key={tIndex} type="button" onClick={t.pick} style={{ borderRadius: "999px", padding: "10px 16px", fontSize: "13px", fontFamily: "inherit", cursor: "pointer", background: "transparent", color: "#C9C5C3", border: "1px solid rgba(255,255,255,0.22)", transition: "border-color .25s ease,color .25s ease" }} className="afsa-h5">
                        {t.label}
                      </button>
                    ) :
                    null
                  )}
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
                <button type="button" onClick={() => setBookingStep("details")} data-magnetic="" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "26px", background: "#CB2E41", color: "#fff", padding: "17px 24px", borderRadius: "999px", fontSize: "15px", width: "100%", border: "none", fontFamily: "inherit", cursor: "pointer", fontWeight: 500, transition: "background .3s ease,color .3s ease" }} className="afsa-h6">
                  {bookLabel}
                </button>
                </>
              ) : (
                <AfsaBookingDetails day={day} time={time} onBack={() => setBookingStep("pick")} />
              )}
              <p style={{ margin: "18px 0 0", fontSize: "13px", lineHeight: 1.55, color: "#8E8A88" }}>
                Prefer to talk before the show? Reach out any time and we'll bring the demo to you.
              </p>
            </aside>
          </div>
        </section>
        {showEventStrip && (
          <>
            <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))", gap: "1px", background: "#E8E4E2", borderTop: "1px solid #E8E4E2", borderBottom: "1px solid #E8E4E2", margin: "clamp(64px,8vw,104px) 0 0", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
              {strip.map((s, sIndex) => (
                <div key={sIndex} style={{ background: "#fff", padding: "28px 22px", transition: "background .35s ease" }} className="afsa-h7">
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
        <section id="signals" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              The Problems You Came Here With
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,4.2vw,54px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "20ch" }}>
              If you've said one of these out loud,{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                we'll demo the fix.
              </em>
            </h2>
          </div>
          <div data-reveal="" data-delay="100" style={{ marginTop: "clamp(30px,4vw,48px)", borderTop: "1px solid #E8E4E2", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.10s both" }}>
            {signals.map((s, sIndex) => (
              <div key={sIndex} data-signalrow="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "20px", alignItems: "center", padding: "20px 14px", margin: "0 -14px", borderBottom: "1px solid #EFECEA", borderRadius: "14px", transition: "background .35s ease,padding-left .35s ease" }} className="afsa-h8">
                <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(19px,2.2vw,27px)", lineHeight: 1.3, color: "#1A1817" }}>
                  {s.quote}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", border: "1px solid #E6E2E0", borderRadius: "999px", padding: "8px 16px", fontSize: "11.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A4644", whiteSpace: "nowrap", transition: "background .3s ease,color .3s ease,border-color .3s ease" }} className="afsa-h9">
                  {s.agent}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section id="agents" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              The Full Crew
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "19ch" }}>
              Six AI employees.{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                One per problem.
              </em>
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "16.5px", lineHeight: 1.62, color: "#4A4644", maxWidth: "62ch", textWrap: "pretty" }}>
              Each problem above maps to one agent, from the first ring through the deficiency quote, the estimate, and the invoice that finally gets paid. Built for fire protection contractors running ITM and service work, not a generic assistant with a sprinkler skin.
            </p>
          </div>
          <div data-reveal="" data-delay="100" style={{ marginTop: "clamp(32px,4vw,52px)", display: "grid", gridTemplateColumns: "minmax(0,1fr)", columnGap: "clamp(24px,4vw,56px)", alignItems: "start", borderTop: "1px solid #E8E4E2", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.10s both" }} data-crewgrid="">
            {agentRows.map((a, aIndex) => (
              <div key={aIndex} onMouseEnter={a.open} onClick={a.open} style={css(a.rowStyle)}>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "clamp(16px,3vw,40px)", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(17px,1.8vw,22px)", color: "#CB2E41", minWidth: "34px" }}>
                    {a.num}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "clamp(20px,2.2vw,28px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                      {a.title}
                    </div>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "clamp(15px,1.4vw,18px)", color: "#6A6664", marginTop: "5px" }}>
                      {a.sub}
                    </div>
                  </div>
                  <span data-arrow="" style={css(a.dotStyle)}>
                    →
                  </span>
                </div>
                <div style={css(a.panelStyle)}>
                  <div style={{ display: "grid", gap: "16px", padding: "18px 0 6px 0" }}>
                    <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.6, color: "#4A4644", maxWidth: "52ch", textWrap: "pretty" }}>
                      {a.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="session" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              On the AFSA45 Program
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "17ch" }}>
              We’re speaking, too.{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                Come ask hard questions.
              </em>
            </h2>
          </div>
          <div data-reveal="" data-delay="100" data-sessiongrid="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "clamp(20px,3vw,32px)", marginTop: "clamp(32px,4vw,52px)", alignItems: "stretch", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0.10s both" }}>
            <div data-tilt="" style={{ border: "1px solid #E8E4E2", borderRadius: "24px", overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column", transition: "transform .35s cubic-bezier(.2,.7,.2,1),border-color .35s ease,box-shadow .35s ease", willChange: "transform" }} className="afsa-h10">
              <div style={{ display: "flex", gap: "18px", alignItems: "center", padding: "22px" }}>
                <img src="/photos/afsa45-tony-fleming.webp" loading="lazy" alt="Tony Fleming" style={{ flex: "none", width: "104px", height: "104px", borderRadius: "999px", objectFit: "cover", objectPosition: "50% 30%", border: "1px solid #E8E4E2" }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8E8A88" }}>
                    Speaker
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "clamp(21px,2.1vw,26px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                    Tony Fleming
                  </div>
                  <div style={{ marginTop: "5px", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "18px", color: "#6A6664" }}>
                    Partner, Clara AI
                  </div>
                </div>
              </div>
              <div style={{ padding: "0 22px 24px", borderTop: "1px solid #EFECEA", marginTop: "2px", paddingTop: "18px" }}>
                <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: "#4A4644", textWrap: "pretty" }}>
                  Tony started in fire protection as a sprinkler designer, founded his own sprinkler contracting company in 1992, and grew it into a multi-office operation across the Mid-Atlantic. He has run the payroll, the schedule and the AR, so the demo is a contractor conversation, not a software pitch.
                </p>
              </div>
            </div>
            <div style={{ border: "1px solid #E8E4E2", borderRadius: "24px", background: "#FBFAFA", padding: "clamp(26px,3vw,36px)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span style={{ background: "#CB2E41", color: "#fff", borderRadius: "999px", padding: "7px 15px", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  Monday, Sept 28
                </span>
                <span style={{ border: "1px solid #E0DBD9", color: "#4A4644", borderRadius: "999px", padding: "7px 15px", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  1 Session
                </span>
              </div>
              <h3 style={{ margin: "22px 0 0", fontWeight: 500, fontSize: "clamp(26px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.03em" }}>
                What Can AI Do for Me?
              </h3>
              <p style={{ margin: "18px 0 0", fontSize: "16px", lineHeight: 1.62, color: "#4A4644", maxWidth: "50ch", textWrap: "pretty" }}>
                A plain-English session on where AI actually earns its keep in a sprinkler shop (the calls, the quotes, the collections) and where it still doesn’t. Bring the workflow that frustrates you most.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(150px,100%),1fr))", gap: "1px", background: "#E8E4E2", borderRadius: "16px", overflow: "hidden", marginTop: "28px" }}>
                {sessionFacts.map((f, fIndex) => (
                  <div key={fIndex} style={{ background: "#fff", padding: "18px 20px", transition: "background .35s ease" }} className="afsa-h11">
                    <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8E8A88" }}>
                      {f.k}
                    </div>
                    <div style={{ marginTop: "8px", fontSize: "16px", fontWeight: 500 }}>
                      {f.v}
                    </div>
                  </div>
                ))}
              </div>
              <a href="#booth" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#0B0B0B", color: "#fff", padding: "16px 26px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, marginTop: "28px", transition: "background .3s ease" }} className="afsa-h12">
                Book a Demo at Booth #1 →
              </a>
            </div>
          </div>
        </section>
        <section id="proof" style={{ padding: "clamp(72px,9vw,128px) 0 0", scrollMarginTop: "96px" }}>
          <div data-reveal="" style={{ animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CB2E41" }}>
              Already Running In Fire Protection
            </div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "19ch" }}>
              Not a pitch.{" "}
              <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic" }}>
                Contractors
              </em>
              {" "}already running Clara.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: "clamp(24px,4vw,56px)", marginTop: "clamp(36px,4.6vw,60px)" }}>
            {proof.map((p, pIndex) => (
              <div key={pIndex} data-reveal="" style={{ borderTop: "2px solid #0B0B0B", padding: "30px 0 0", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
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
        <section data-reveal="" style={{ marginTop: "clamp(80px,10vw,140px)", background: "#0B0B0B", color: "#fff", borderRadius: "32px", padding: "clamp(40px,6vw,84px)", position: "relative", overflow: "hidden", animation: "clara-rise .9s cubic-bezier(.2,.7,.2,1) 0s both" }}>
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
            <a href="#booth" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#CB2E41", color: "#fff", padding: "17px 30px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, transition: "background .3s ease,color .3s ease" }} className="afsa-h13">
              Meet Clara at Booth #1 →
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
