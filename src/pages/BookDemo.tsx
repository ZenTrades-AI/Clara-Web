import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Lock, Loader2 } from "lucide-react";
import { submitToHubSpotForm } from "@/utils/hubspotSubmit";
import { openHubSpotForm } from "@/utils/hubspotForm";

/* ------------------------------------------------------------------ */
/* Content (proof points and quotes come from the homepage)            */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "$1.4M", label: "in invoices paid after a CLARA call" },
  { value: "$6.5M+", label: "in overdue receivables worked" },
  { value: "94,995+", label: "calls handled by CLARA agents" },
];

const QUOTES = [
  { q: "When I do get a lead from Clara… I know that that call is a genuine sales lead.", n: "Fabrizio", r: "Owner, RGV Fire Extinguisher" },
  { q: "We chose Clara because it was tailored more to our industry and we were able to train it with technical information.", n: "Ellen Davis", r: "AGF Manufacturing" },
  { q: "If you’re answering phones all the time, but that’s not really what you want to be doing… Clara would be a great product for you.", n: "David", r: "Owner, Leduc Electrical Contracting" },
  { q: "Once you come on board, you will stay on board.", n: "Sean Devan", r: "HVAC Proz" },
  { q: "You’ll save money. Just do it.", n: "Daniel Nipper", r: "Owner, Coastal Electric of Naples" },
];

const LOGOS = [
  ["servicetitan", "ServiceTitan"],
  ["servicetrade", "ServiceTrade"],
  ["buildops", "BuildOps"],
  ["jobber", "Jobber"],
  ["housecallpro", "Housecall Pro"],
  ["fieldedge", "FieldEdge"],
  ["quickbooks", "QuickBooks"],
  ["simpro", "Simpro"],
];

const TRADES = ["Fire & life safety", "HVAC", "Electrical", "Plumbing", "Mechanical", "Roofing", "Other"];
const TEAM_SIZES = ["1–5", "6–15", "16–50", "51–200", "200+"];
const SOFTWARE = ["ServiceTitan", "ServiceTrade", "BuildOps", "Jobber", "Housecall Pro", "FieldEdge", "Simpro", "QuickBooks", "Other", "None yet"];
const AGENTS = ["Answering calls", "Visit confirmations", "Quote follow-up", "Collections", "Estimating", "Field tech support"];
const SOURCES = ["Google search", "LinkedIn", "YouTube", "Trade show or event", "Referral", "Email", "Other"];

const STEP_TITLES = ["Your email", "About your business", "Tailor your demo"];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#151213] placeholder:text-[#A39C9E] outline-none transition focus:border-[#151213] focus:ring-4 focus:ring-[#151213]/5";

const Label = ({ children, required, htmlFor }: { children: React.ReactNode; required?: boolean; htmlFor?: string }) => (
  <label htmlFor={htmlFor} className="mb-2 block text-[13.5px] font-medium text-[#3A3536]">
    {children}
    {required ? <span className="ml-0.5 text-[#E11A2B]">*</span> : <span className="ml-1.5 font-normal text-[#A39C9E]">optional</span>}
  </label>
);

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p className="mt-1.5 text-[12.5px] text-[#C8102E]">{msg}</p> : null;

const Chips = ({
  options,
  value,
  onChange,
  multi,
  invalid,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  multi?: boolean;
  invalid?: boolean;
}) => (
  <div className="flex flex-wrap gap-2" role={multi ? "group" : "radiogroup"}>
    {options.map((o) => {
      const on = value.includes(o);
      return (
        <button
          key={o}
          type="button"
          role={multi ? "checkbox" : "radio"}
          aria-checked={on}
          onClick={() => onChange(multi ? (on ? value.filter((v) => v !== o) : [...value, o]) : [o])}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13.5px] transition ${
            on
              ? "border-[#151213] bg-[#151213] text-white"
              : `bg-white text-[#3A3536] hover:border-[#151213] ${invalid ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`
          }`}
        >
          {on && multi && <Check className="h-3.5 w-3.5" />}
          {o}
        </button>
      );
    })}
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

type Form = {
  email: string;
  firstname: string;
  lastname: string;
  company: string;
  phone: string;
  trade: string[];
  team: string[];
  software: string[];
  agents: string[];
  challenges: string;
  source: string;
};

const EMPTY: Form = {
  email: "",
  firstname: "",
  lastname: "",
  company: "",
  phone: "",
  trade: [],
  team: [],
  software: [],
  agents: [],
  challenges: "",
  source: "",
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPhone = (v: string) => v.replace(/\D/g, "").length >= 7;

const BookDemo = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [quote, setQuote] = useState(0);
  const [paused, setPaused] = useState(false);
  const formTop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setQuote((q) => (q + 1) % QUOTES.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (s: number) => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (s === 0 && !isEmail(form.email)) e.email = "Enter a valid work email";
    if (s === 1) {
      if (!form.firstname.trim()) e.firstname = "Required";
      if (!form.lastname.trim()) e.lastname = "Required";
      if (!form.company.trim()) e.company = "Required";
      if (!isPhone(form.phone)) e.phone = "Enter a valid phone number";
      if (!form.trade.length) e.trade = "Pick your trade";
      if (!form.team.length) e.team = "Pick a team size";
    }
    if (s === 2) {
      if (!form.software.length) e.software = "Pick at least one";
      if (!form.source) e.source = "Let us know how you found us";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goTo = (s: number) => {
    setStep(s);
    requestAnimationFrame(() => formTop.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(step)) return;
    if (step < 2) goTo(step + 1);
    else submit();
  };

  const submit = async () => {
    setStatus("sending");
    // HubSpot standard contact fields, plus everything else summarised in the "message" field.
    const summary = [
      `Trade: ${form.trade.join(", ")}`,
      `Field technicians: ${form.team.join(", ")}`,
      `Software: ${form.software.join(", ")}`,
      form.agents.length ? `Interested in: ${form.agents.join(", ")}` : "",
      form.challenges.trim() ? `Challenges: ${form.challenges.trim()}` : "",
      `Heard about Clara via: ${form.source}`,
      "Submitted from the Book a demo page",
    ]
      .filter(Boolean)
      .join("\n");
    try {
      await submitToHubSpotForm([
        { name: "email", value: form.email.trim() },
        { name: "firstname", value: form.firstname.trim() },
        { name: "lastname", value: form.lastname.trim() },
        { name: "company", value: form.company.trim() },
        { name: "phone", value: form.phone.trim() },
        { name: "message", value: summary },
      ]);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("failed");
    }
  };

  const q = QUOTES[quote];

  return (
    <div className="bd-root min-h-screen bg-white text-[#151213]">
      <Helmet>
        <title>Book a Demo | Clara AI</title>
        <meta
          name="description"
          content="See CLARA's AI agents answer calls, confirm visits, chase quotes and collect invoices for a commercial trades business like yours. Book a demo."
        />
        <style>{`
          @font-face { font-family: 'Google Sans Flex'; font-style: normal; font-weight: 100 900; font-display: swap;
            src: url('/landing/assets/fonts/google-sans-flex-latin.woff2') format('woff2'); }
          @font-face { font-family: 'Instrument Serif'; font-style: italic; font-weight: 400; font-display: swap;
            src: url('/landing/assets/fonts/instrument-serif-italic-latin.woff2') format('woff2'); }
          .bd-root { font-family: 'Google Sans Flex', 'Inter', system-ui, sans-serif; }
          .bd-scroll { scrollbar-width: none; }
          .bd-scroll::-webkit-scrollbar { display: none; }
          .bd-serif { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; }
          @keyframes bd-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
          .bd-in { animation: bd-in .45s cubic-bezier(.2,.8,.2,1) both; }
          @keyframes bd-pulse { 0% { box-shadow: 0 0 0 0 rgba(127,214,164,.55); } 100% { box-shadow: 0 0 0 8px rgba(127,214,164,0); } }
        `}</style>
      </Helmet>

      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* ---------------- Brand panel ---------------- */}
        <aside className="bd-scroll relative order-2 overflow-hidden bg-[#151213] text-white lg:order-1 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60"
            style={{ background: "radial-gradient(closest-side, rgba(225,26,43,.28), rgba(225,26,43,0))" }}
          />
          <div className="relative flex min-h-full flex-col px-6 py-10 sm:px-10 lg:px-14 lg:py-10 xl:px-20">
            <div className="hidden items-center justify-between lg:flex">
              <Link to="/" aria-label="CLARA AI home">
                <img src="/landing/assets/logo/clara-white.svg" alt="CLARA AI" className="h-5 w-auto" />
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 text-[13.5px] text-[#ABA4A5] transition hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Back to site
              </Link>
            </div>

            <div className="flex flex-1 flex-col justify-center py-4 lg:py-8">
              <span className="hidden w-fit items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 text-[13px] text-[#E9E4E4] lg:inline-flex">
                <span className="h-2 w-2 rounded-full bg-[#7FD6A4]" style={{ animation: "bd-pulse 1.8s infinite" }} />
                Live within 24 hours. No new software to learn.
              </span>

              <h1 className="mt-6 hidden text-[clamp(36px,3.9vw,56px)] font-medium leading-[1.02] tracking-[-0.04em] lg:block">
                Put CLARA to work
                <br />
                <span className="bd-serif text-[1.08em] tracking-[-0.02em]">on your jobs</span>
                <span className="text-[#E11A2B]">.</span>
              </h1>
              <p className="max-w-[46ch] text-[16.5px] leading-relaxed text-[#ABA4A5] lg:mt-5">
                We'll show CLARA answering your calls, confirming visits, chasing quotes and collecting invoices, set up
                around the software you already run.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {STATS.map((s) => (
                  <div key={s.value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-[clamp(22px,2.2vw,30px)] font-medium tracking-[-0.03em]">{s.value}</dd>
                    <dd className="mt-1.5 text-[12.5px] leading-snug text-[#8F8889]">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <figure
                className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8F8889]">In their own words</p>
                <blockquote key={quote} className="bd-in mt-3 min-h-[78px] text-[clamp(18px,1.55vw,21px)] leading-snug text-white">
                  <span className="bd-serif">“{q.q}”</span>
                </blockquote>
                <figcaption key={`c${quote}`} className="bd-in mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#E11A2B] text-[14px] font-medium">
                    {q.n
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-medium">{q.n}</span>
                    <span className="block text-[13px] text-[#8F8889]">{q.r}</span>
                  </span>
                </figcaption>
                <div className="mt-5 flex gap-1.5" role="tablist" aria-label="Customer quotes">
                  {QUOTES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === quote}
                      aria-label={`Quote ${i + 1}`}
                      onClick={() => setQuote(i)}
                      className={`h-1.5 rounded-full transition-all ${i === quote ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
                    />
                  ))}
                </div>
              </figure>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8F8889]">Works inside the software you already run</p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
                {LOGOS.map(([id, name]) => (
                  <li key={id}>
                    <img src={`/landing/assets/logos/${id}.webp`} alt={name} className="h-[18px] w-auto max-w-[110px] object-contain opacity-70" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* ---------------- Form panel ---------------- */}
        <main className="order-1 flex flex-col bg-[#FBFAFA] lg:order-2">
          <div className="flex items-center justify-between px-6 py-5 sm:px-10 lg:hidden">
            <Link to="/" aria-label="CLARA AI home">
              <img src="/landing/assets/logo/clara-nav.svg" alt="CLARA AI" className="h-[18px] w-auto" />
            </Link>
            <Link to="/" className="inline-flex items-center gap-1.5 text-[13.5px] text-[#6B6466]">
              <ArrowLeft className="h-4 w-4" /> Back to site
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center px-5 pb-12 pt-2 sm:px-10 lg:py-16">
            <div ref={formTop} className="w-full max-w-[500px] scroll-mt-6">
              {status === "done" ? (
                <div className="bd-in rounded-3xl border border-[#EDE9EA] bg-white p-8 shadow-[0_30px_60px_-40px_rgba(21,18,19,.35)] sm:p-10">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#151213] text-white">
                    <Check className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 text-[30px] font-medium leading-tight tracking-[-0.03em]">
                    You're on the list, <span className="bd-serif">{form.firstname.trim()}</span>
                    <span className="text-[#E11A2B]">.</span>
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-[#6B6466]">
                    Thanks for telling us about {form.company.trim()}. Here's what happens next:
                  </p>
                  <ol className="mt-6 space-y-4">
                    {[
                      `We'll reach out at ${form.email.trim()} within one business day to pick a time.`,
                      `We'll set the demo up around ${form.trade[0]?.toLowerCase() ?? "your"} work${
                        form.software.length && !form.software.includes("None yet") ? ` and ${form.software.filter((s) => s !== "Other")[0] ?? "your software"}` : ""
                      }.`,
                      "Bring the one workflow that costs you most. We'll show you the agent that handles it.",
                    ].map((t, i) => (
                      <li key={i} className="flex gap-3.5 text-[15px] leading-relaxed text-[#3A3536]">
                        <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full border border-[#E4DFE0] text-[12.5px] font-medium">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ol>
                  <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-medium text-[#151213] underline-offset-4 hover:underline"
                  >
                    Back to justclara.ai <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <>
                  {/* Mobile-only headline above the form */}
                  <div className="mb-6 lg:hidden">
                    <h2 className="text-[32px] font-medium leading-[1.05] tracking-[-0.035em]">
                      Put CLARA to work
                      <br />
                      <span className="bd-serif text-[1.08em]">on your jobs</span>
                      <span className="text-[#E11A2B]">.</span>
                    </h2>
                  </div>

                  {/* Progress */}
                  <div className="mb-5 flex items-end justify-between">
                    <div>
                      <p className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-[#8F8889]">
                        Step {step + 1} of 3
                      </p>
                      <p className="mt-1 text-[14px] text-[#3A3536]">{STEP_TITLES[step]}</p>
                    </div>
                    {step > 0 && status !== "sending" && (
                      <button
                        type="button"
                        onClick={() => goTo(step - 1)}
                        className="inline-flex items-center gap-1.5 text-[13.5px] text-[#6B6466] transition hover:text-[#151213]"
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </button>
                    )}
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-1.5" aria-hidden>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className={`h-1 rounded-full transition-colors duration-500 ${i <= step ? "bg-[#E11A2B]" : "bg-[#E9E5E6]"}`} />
                    ))}
                  </div>

                  <form
                    noValidate
                    onSubmit={next}
                    key={step}
                    className="bd-in rounded-3xl border border-[#EDE9EA] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(21,18,19,.35)] sm:p-9"
                  >
                    {step === 0 && (
                      <>
                        <h2 className="text-[28px] font-medium leading-tight tracking-[-0.03em]">Book a demo</h2>
                        <p className="mt-2 text-[15px] leading-relaxed text-[#6B6466]">
                          A live walkthrough of CLARA on a business like yours, from the first call to the paid invoice.
                        </p>
                        <div className="mt-7">
                          <Label htmlFor="bd-email" required>
                            Work email
                          </Label>
                          <input
                            id="bd-email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            placeholder="you@yourcompany.com"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            aria-invalid={!!errors.email}
                            className={`${fieldBase} ${errors.email ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                          />
                          <FieldError msg={errors.email} />
                        </div>
                      </>
                    )}

                    {step === 1 && (
                      <>
                        <h2 className="text-[26px] font-medium leading-tight tracking-[-0.03em]">Tell us about your business</h2>
                        <p className="mt-2 text-[14.5px] text-[#6B6466]">
                          Booking as <span className="font-medium text-[#151213]">{form.email.trim()}</span>
                        </p>
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="bd-first" required>First name</Label>
                            <input id="bd-first" autoComplete="given-name" autoFocus value={form.firstname} onChange={(e) => set("firstname", e.target.value)} aria-invalid={!!errors.firstname} className={`${fieldBase} ${errors.firstname ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`} />
                            <FieldError msg={errors.firstname} />
                          </div>
                          <div>
                            <Label htmlFor="bd-last" required>Last name</Label>
                            <input id="bd-last" autoComplete="family-name" value={form.lastname} onChange={(e) => set("lastname", e.target.value)} aria-invalid={!!errors.lastname} className={`${fieldBase} ${errors.lastname ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`} />
                            <FieldError msg={errors.lastname} />
                          </div>
                          <div>
                            <Label htmlFor="bd-company" required>Company</Label>
                            <input id="bd-company" autoComplete="organization" value={form.company} onChange={(e) => set("company", e.target.value)} aria-invalid={!!errors.company} className={`${fieldBase} ${errors.company ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`} />
                            <FieldError msg={errors.company} />
                          </div>
                          <div>
                            <Label htmlFor="bd-phone" required>Phone</Label>
                            <input id="bd-phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" value={form.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} className={`${fieldBase} ${errors.phone ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`} />
                            <FieldError msg={errors.phone} />
                          </div>
                        </div>
                        <div className="mt-6">
                          <Label required>Your trade</Label>
                          <Chips options={TRADES} value={form.trade} onChange={(v) => set("trade", v)} invalid={!!errors.trade} />
                          <FieldError msg={errors.trade} />
                        </div>
                        <div className="mt-6">
                          <Label required>Field technicians</Label>
                          <Chips options={TEAM_SIZES} value={form.team} onChange={(v) => set("team", v)} invalid={!!errors.team} />
                          <FieldError msg={errors.team} />
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <h2 className="text-[26px] font-medium leading-tight tracking-[-0.03em]">Almost there</h2>
                        <p className="mt-2 text-[14.5px] text-[#6B6466]">A few answers so the demo looks like your day, not a generic tour.</p>
                        <div className="mt-6">
                          <Label required>Software you run today</Label>
                          <Chips multi options={SOFTWARE} value={form.software} onChange={(v) => set("software", v)} invalid={!!errors.software} />
                          <FieldError msg={errors.software} />
                        </div>
                        <div className="mt-6">
                          <Label>Where should CLARA start?</Label>
                          <Chips multi options={AGENTS} value={form.agents} onChange={(v) => set("agents", v)} />
                        </div>
                        <div className="mt-6">
                          <Label htmlFor="bd-challenges">What's slipping right now?</Label>
                          <textarea
                            id="bd-challenges"
                            rows={3}
                            placeholder="Missed calls after hours, quotes that sit for weeks, invoices nobody chases…"
                            value={form.challenges}
                            onChange={(e) => set("challenges", e.target.value)}
                            className={`${fieldBase} resize-y border-[#E4DFE0]`}
                          />
                        </div>
                        <div className="mt-6">
                          <Label htmlFor="bd-source" required>How did you hear about us?</Label>
                          <select
                            id="bd-source"
                            value={form.source}
                            onChange={(e) => set("source", e.target.value)}
                            aria-invalid={!!errors.source}
                            className={`${fieldBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B6466%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px] bg-[right_16px_center] bg-no-repeat pr-10 ${
                              form.source ? "" : "text-[#A39C9E]"
                            } ${errors.source ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            {SOURCES.map((s) => (
                              <option key={s} value={s} className="text-[#151213]">
                                {s}
                              </option>
                            ))}
                          </select>
                          <FieldError msg={errors.source} />
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#E11A2B] py-2 pl-6 pr-2 text-[15.5px] font-medium text-white transition hover:bg-[#151213] disabled:cursor-wait disabled:opacity-80"
                    >
                      {status === "sending" ? "Booking your demo…" : step === 0 ? "Get started" : step === 1 ? "Continue" : "Book my demo"}
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#151213] transition group-hover:translate-x-0.5">
                        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                      </span>
                    </button>

                    {step === 0 && (
                      <p className="mt-4 text-center text-[13px] text-[#8F8889]">No commitment. We'll show you the platform live.</p>
                    )}

                    {status === "failed" && (
                      <div role="alert" className="mt-5 rounded-2xl border border-[#F3C9CF] bg-[#FDF5F6] p-4 text-[14px] leading-relaxed text-[#3A3536]">
                        We couldn't send your request just now.{" "}
                        <button type="button" onClick={() => submit()} className="font-medium underline underline-offset-2">
                          Try again
                        </button>{" "}
                        or{" "}
                        <button type="button" onClick={() => openHubSpotForm()} className="font-medium underline underline-offset-2">
                          use our quick form
                        </button>
                        .
                      </div>
                    )}
                  </form>

                  <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12.5px] text-[#8F8889]">
                    <span className="inline-flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5" /> Your details stay private
                    </span>
                    <span aria-hidden>·</span>
                    <span>Live within 24 hours</span>
                    <span aria-hidden>·</span>
                    <span>No new software to learn</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookDemo;
