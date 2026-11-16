import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Lock, Loader2 } from "lucide-react";
import { submitToHubSpotForm, HUBSPOT_BOOK_DEMO_FORM_ID } from "@/utils/hubspotSubmit";
import { openHubSpotDemoPopup } from "@/utils/hubspotForm";

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

const TECH_COUNTS = ["1–5", "5–20", "20–50", "50–100", "100+"];

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

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

type Form = {
  email: string;
  name: string;
  company: string;
  phone: string;
  techs: string;
};

const EMPTY: Form = { email: "", name: "", company: "", phone: "", techs: "" };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPhone = (v: string) => v.replace(/\D/g, "").length >= 7;

const BookDemo = () => {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [quote, setQuote] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setQuote((q) => (q + 1) % QUOTES.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const set = (k: keyof Form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!isEmail(form.email)) e.email = "Enter a valid email";
    if (!form.name.trim()) e.name = "Enter your name";
    if (!form.company.trim()) e.company = "Enter your company name";
    if (!isPhone(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.techs) e.techs = "Select your tech count";
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) document.getElementById(`bd-${first}`)?.focus();
    return !first;
  };

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const [firstname, ...rest] = form.name.trim().split(/\s+/);
    try {
      // Each value goes to both the contact (0-1) and the company (0-2) property, since the HubSpot
      // form can use either; HubSpot rejects the ones the form lacks and the helper drops them.
      // Tech count: contact "Number of Techs" (number_of_techs) / company "Number of Tech" (number_of_tech).
      const techs = form.techs.replace(/\u2013/g, "-");
      const company = form.company.trim();
      const phone = form.phone.trim();
      await submitToHubSpotForm([
        { name: "email", value: form.email.trim() },
        { name: "firstname", value: firstname },
        { name: "lastname", value: rest.join(" ") },
        { name: "company", value: company },
        { name: "name", value: company, objectTypeId: "0-2" },
        { name: "phone", value: phone },
        { name: "phone", value: phone, objectTypeId: "0-2" },
        { name: "number_of_techs", value: techs },
        { name: "number_of_tech", value: techs, objectTypeId: "0-2" },
        { name: "message", value: `Tech count: ${techs}\nSubmitted from the Book a demo page` },
      ], HUBSPOT_BOOK_DEMO_FORM_ID);
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
            <div className="w-full max-w-[500px]">
              {status === "done" ? (
                <div className="bd-in rounded-3xl border border-[#EDE9EA] bg-white p-8 shadow-[0_30px_60px_-40px_rgba(21,18,19,.35)] sm:p-10">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#151213] text-white">
                    <Check className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 text-[30px] font-medium leading-tight tracking-[-0.03em]">
                    You're on the list, <span className="bd-serif">{form.name.trim().split(/\s+/)[0]}</span>
                    <span className="text-[#E11A2B]">.</span>
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-[#6B6466]">
                    Thanks for your interest in CLARA for {form.company.trim()}. Here's what happens next:
                  </p>
                  <ol className="mt-6 space-y-4">
                    {[
                      `We'll reach out at ${form.email.trim()} within one business day to pick a time.`,
                      "We'll set the demo up around a business like yours, from the first call to the paid invoice.",
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

                  <form
                    noValidate
                    onSubmit={submit}
                    className="bd-in rounded-3xl border border-[#EDE9EA] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(21,18,19,.35)] sm:p-9"
                  >
                    <h2 className="text-[28px] font-medium leading-tight tracking-[-0.03em]">Book a demo</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#6B6466]">
                      A live walkthrough of CLARA on a business like yours, from the first call to the paid invoice.
                    </p>

                    <div className="mt-7 space-y-5">
                      <div>
                        <Label htmlFor="bd-email" required>Email</Label>
                        <input
                          id="bd-email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@yourcompany.com"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          aria-invalid={!!errors.email}
                          className={`${fieldBase} ${errors.email ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                        />
                        <FieldError msg={errors.email} />
                      </div>
                      <div>
                        <Label htmlFor="bd-name" required>Name</Label>
                        <input
                          id="bd-name"
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          aria-invalid={!!errors.name}
                          className={`${fieldBase} ${errors.name ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                        />
                        <FieldError msg={errors.name} />
                      </div>
                      <div>
                        <Label htmlFor="bd-company" required>Company name</Label>
                        <input
                          id="bd-company"
                          autoComplete="organization"
                          placeholder="Acme Fire Protection"
                          value={form.company}
                          onChange={(e) => set("company", e.target.value)}
                          aria-invalid={!!errors.company}
                          className={`${fieldBase} ${errors.company ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                        />
                        <FieldError msg={errors.company} />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="bd-phone" required>Phone number</Label>
                          <input
                            id="bd-phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="(555) 123-4567"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            aria-invalid={!!errors.phone}
                            className={`${fieldBase} ${errors.phone ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                          />
                          <FieldError msg={errors.phone} />
                        </div>
                        <div>
                          <Label htmlFor="bd-techs" required>Tech count</Label>
                          <select
                            id="bd-techs"
                            value={form.techs}
                            onChange={(e) => set("techs", e.target.value)}
                            aria-invalid={!!errors.techs}
                            className={`${fieldBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B6466%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px] bg-[right_16px_center] bg-no-repeat pr-10 ${
                              form.techs ? "" : "text-[#A39C9E]"
                            } ${errors.techs ? "border-[#E8A4AC]" : "border-[#E4DFE0]"}`}
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            {TECH_COUNTS.map((t) => (
                              <option key={t} value={t} className="text-[#151213]">
                                {t}
                              </option>
                            ))}
                          </select>
                          <FieldError msg={errors.techs} />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#E11A2B] py-2 pl-6 pr-2 text-[15.5px] font-medium text-white transition hover:bg-[#151213] disabled:cursor-wait disabled:opacity-80"
                    >
                      {status === "sending" ? "Booking your demo…" : "Book my demo"}
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#151213] transition group-hover:translate-x-0.5">
                        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                      </span>
                    </button>
                    <p className="mt-4 text-center text-[13px] text-[#8F8889]">No commitment. We'll show you the platform live.</p>

                    {status === "failed" && (
                      <div role="alert" className="mt-5 rounded-2xl border border-[#F3C9CF] bg-[#FDF5F6] p-4 text-[14px] leading-relaxed text-[#3A3536]">
                        We couldn't send your request just now.{" "}
                        <button type="button" onClick={() => submit()} className="font-medium underline underline-offset-2">
                          Try again
                        </button>{" "}
                        or{" "}
                        <button type="button" onClick={() => openHubSpotDemoPopup()} className="font-medium underline underline-offset-2">
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
