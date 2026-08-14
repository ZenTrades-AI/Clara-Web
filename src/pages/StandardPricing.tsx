import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Lock } from "lucide-react";

const GATE_PASSWORD = "ClaraPricing2026";

type TermKey = "q" | "s" | "a";
type CurrencyKey = "USD" | "CAD";

const TERMS: Record<TermKey, { mult: number; note: string }> = {
  q: { mult: 1, note: "quarterly" },
  s: { mult: 0.95, note: "semi-annually" },
  a: { mult: 0.85, note: "annually" }
};

const CAD_RATE = 1.40;

export default function StandardPricing() {
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const [currency, setCurrency] = useState<CurrencyKey>("USD");
  const [term, setTerm] = useState<TermKey>("q");
  const [ansTab, setAnsTab] = useState<"sb" | "mm">("sb");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("clara_unlocked") === "1") {
        setUnlocked(true);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (passwordInput === GATE_PASSWORD) {
      setUnlocked(true);
      setHasError(false);
      try {
        sessionStorage.setItem("clara_unlocked", "1");
      } catch (e) {
        // Ignore
      }
    } else {
      setHasError(true);
      setPasswordInput("");
    }
  };

  const baseFor = (u: number) => {
    return currency === "CAD" ? Math.round(u * CAD_RATE) : u;
  };

  const pfx = () => {
    return currency === "CAD" ? "CA$" : "$";
  };

  const fmt = (base: number, unitSuffix: string = "/mo") => {
    const val = Math.round(baseFor(base) * TERMS[term].mult);
    return pfx() + val.toLocaleString("en-US") + unitSuffix;
  };

  const overageRateStr = currency === "CAD" ? "CA$0.70" : "$0.50";
  const onbFeeStr = currency === "CAD" ? "CA$1,400" : "$1,000";

  return (
    <div className="min-h-screen font-sans bg-[#FAF9F6] text-[#0F172A] selection:bg-[#CB2E41] selection:text-white flex flex-col justify-between">
      <Helmet>
        <title>Clara — Standard Pricing</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="slurp" content="noindex, nofollow" />
      </Helmet>

      {/* Global Navigation Bar */}
      <Navigation />

      {/* Embedded CSS matching Clara Red Theme */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .clara-std-pricing {
          --red: #CB2E41;
          --red-hover: #B92435;
          --dark: #0D0D10;
          --dark-soft: #1C1C24;
          --teal: #0E9F6E;
          --ink: #0F172A;
          --mute: #64748B;
          --line: #E2E8F0;
          --bg: #FAF9F6;
          --card: #FFFFFF;
          --shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.03);
        }

        .clara-std-pricing .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 24px 72px;
        }

        .clara-std-pricing .eyebrow {
          color: var(--red);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-family: monospace;
          margin-bottom: 4px;
        }

        .clara-std-pricing h1 {
          font-size: 42px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -.02em;
          margin: 8px 0 6px;
        }

        .clara-std-pricing .lede {
          color: var(--mute);
          font-size: 16px;
          max-width: 640px;
          line-height: 1.6;
        }

        .clara-std-pricing .billing {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin: 36px 0 12px;
        }

        .clara-std-pricing .seg {
          display: inline-flex;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 5px;
          box-shadow: var(--shadow);
        }

        .clara-std-pricing .seg button {
          border: 0;
          background: transparent;
          font: inherit;
          font-weight: 700;
          font-size: 14px;
          color: var(--mute);
          padding: 9px 20px;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all .2s ease;
        }

        .clara-std-pricing .seg button:hover {
          color: var(--dark);
        }

        .clara-std-pricing .seg button.active {
          background: var(--red);
          color: #fff;
          box-shadow: 0 4px 12px rgba(203, 46, 65, 0.3);
        }

        .clara-std-pricing .save {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 999px;
          background: #FEF2F2;
          color: var(--red);
        }

        .clara-std-pricing .seg button.active .save {
          background: rgba(255,255,255,.25);
          color: #fff;
        }

        .clara-std-pricing .billing-note {
          color: var(--mute);
          font-size: 13.5px;
          font-weight: 500;
        }

        .clara-std-pricing section.product {
          margin-top: 52px;
        }

        .clara-std-pricing .p-head {
          display: flex;
          align-items: baseline;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }

        .clara-std-pricing .p-head h2 {
          font-size: 26px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -.02em;
        }

        .clara-std-pricing .p-desc {
          color: var(--mute);
          font-size: 15px;
          max-width: 720px;
          margin-bottom: 22px;
          line-height: 1.6;
        }

        .clara-std-pricing .tabs {
          display: inline-flex;
          gap: 4px;
          background: #E2E8F0;
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 22px;
        }

        .clara-std-pricing .tabs button {
          border: 0;
          background: transparent;
          font: inherit;
          font-weight: 700;
          font-size: 13.5px;
          color: var(--mute);
          padding: 9px 18px;
          border-radius: 9px;
          cursor: pointer;
          transition: all .15s ease;
        }

        .clara-std-pricing .tabs button.active {
          background: #fff;
          color: var(--dark);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
        }

        .clara-std-pricing .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .clara-std-pricing .grid.four {
          grid-template-columns: repeat(4, 1fr);
        }

        .clara-std-pricing .grid.five {
          grid-template-columns: repeat(4, 1fr);
        }

        @media(max-width:900px){
          .clara-std-pricing .grid,
          .clara-std-pricing .grid.four,
          .clara-std-pricing .grid.five {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width:560px){
          .clara-std-pricing .grid,
          .clara-std-pricing .grid.four,
          .clara-std-pricing .grid.five {
            grid-template-columns: 1fr;
          }
        }

        .clara-std-pricing .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px 22px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .clara-std-pricing .card:hover {
          transform: translateY(-2px);
          border-color: #CBD5E1;
        }

        .clara-std-pricing .tier {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--red);
          font-family: monospace;
        }

        .clara-std-pricing .price {
          margin: 14px 0 4px;
          font-size: 36px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -.02em;
          line-height: 1;
          font-family: sans-serif;
        }

        .clara-std-pricing .price .per {
          font-size: 14px;
          font-weight: 600;
          color: var(--mute);
          letter-spacing: 0;
        }

        .clara-std-pricing .price.custom {
          font-size: 28px;
        }

        .clara-std-pricing .meta {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--line);
          color: var(--ink);
          font-size: 14px;
        }

        .clara-std-pricing .meta .big {
          font-weight: 700;
        }

        .clara-std-pricing .meta .sub {
          color: var(--mute);
          font-size: 13px;
          margin-top: 4px;
        }

        /* Enterprise Dark Accent Card */
        .clara-std-pricing .card.enter {
          background: linear-gradient(180deg, #1C1C24, #0D0D10);
          border-color: #2D2D3A;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .clara-std-pricing .card.enter .tier {
          color: #F87171;
        }

        .clara-std-pricing .card.enter .price,
        .clara-std-pricing .card.enter .meta,
        .clara-std-pricing .card.enter .meta .sub {
          color: #F8FAFC;
        }

        .clara-std-pricing .card.enter .meta {
          border-top-color: rgba(255,255,255,.15);
        }

        .clara-std-pricing .note {
          color: var(--mute);
          font-size: 13.5px;
          margin-top: 14px;
          font-weight: 500;
        }

        .clara-std-pricing .band {
          margin-top: 36px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media(max-width:720px){
          .clara-std-pricing .band {
            grid-template-columns: 1fr;
          }
        }

        .clara-std-pricing .info {
          border-radius: 16px;
          padding: 22px 24px;
          border: 1px solid var(--line);
          background: #fff;
          box-shadow: var(--shadow);
        }

        .clara-std-pricing .info h3 {
          font-size: 16px;
          color: var(--dark);
          font-weight: 800;
          margin-bottom: 6px;
        }

        .clara-std-pricing .info p {
          color: var(--mute);
          font-size: 14px;
          line-height: 1.6;
        }

        .clara-std-pricing .info.onb {
          border-left: 5px solid var(--red);
        }

        .clara-std-pricing .info.bundle {
          border-left: 5px solid var(--dark);
        }

        .clara-std-pricing .waived {
          display: inline-block;
          margin-top: 10px;
          font-size: 13px;
          font-weight: 700;
          color: var(--red);
          background: #FEF2F2;
          padding: 4px 12px;
          border-radius: 999px;
        }

        .clara-std-pricing .strike {
          text-decoration: line-through;
          color: var(--mute);
        }

        /* Password Gate Modal Overlay */
        .clara-gate {
          position: fixed;
          inset: 0;
          background: rgba(13, 13, 16, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
        }

        .clara-gate .gate-card {
          background: #fff;
          border-radius: 24px;
          padding: 40px 32px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          text-align: center;
          border: 1px solid #E2E8F0;
        }

        .clara-gate .gate-title {
          font-size: 22px;
          font-weight: 800;
          color: #0D0D10;
          margin: 12px 0 6px;
          letter-spacing: -.01em;
        }

        .clara-gate .gate-sub {
          color: #64748B;
          font-size: 14px;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .clara-gate input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          font: inherit;
          font-size: 15px;
          margin-bottom: 14px;
          background: #FAF9F6;
          color: #0D0D10;
          transition: all 0.2s ease;
        }

        .clara-gate input:focus {
          outline: none;
          border-color: #CB2E41;
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(203, 46, 65, 0.1);
        }

        .clara-gate button {
          width: 100%;
          padding: 14px;
          border: 0;
          border-radius: 12px;
          background: #CB2E41;
          color: #fff;
          font: inherit;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px -5px rgba(203, 46, 65, 0.3);
        }

        .clara-gate button:hover {
          background: #B92435;
          transform: translateY(-1px);
        }

        .clara-gate .gate-err {
          color: #DC2626;
          font-size: 13px;
          margin-top: 14px;
          font-weight: 700;
        }
      `}} />

      {/* LOGIN GATE OVERLAY */}
      {!unlocked && (
        <div className="clara-gate">
          <div className="gate-card">
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#CB2E41] flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <div className="eyebrow">JustClara.ai</div>
            <div className="gate-title">Confidential — Team Access</div>
            <p className="gate-sub">Enter the team password to view Clara standard pricing.</p>
            <form onSubmit={handleUnlock}>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
              />
              <button type="submit">View pricing</button>
            </form>
            {hasError && <div className="gate-err">Incorrect password — please try again.</div>}
          </div>
        </div>
      )}

      {/* UNLOCKED MAIN PRICING PAGE */}
      {unlocked && (
        <main className="clara-std-pricing pt-28 pb-16">
          <div className="wrap">
            <div className="eyebrow">JustClara.ai</div>
            <h1>Standard Pricing</h1>
            <p className="lede">
              AI agents for commercial trades — HVAC, plumbing, electrical, and fire protection.
            </p>

            {/* CURRENCY & BILLING TERM TOGGLE */}
            <div className="billing">
              <div className="seg">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={currency === "USD" ? "active" : ""}
                >
                  USD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("CAD")}
                  className={currency === "CAD" ? "active" : ""}
                >
                  CAD
                </button>
              </div>

              <div className="seg">
                <button
                  type="button"
                  onClick={() => setTerm("q")}
                  className={term === "q" ? "active" : ""}
                >
                  Quarterly
                </button>
                <button
                  type="button"
                  onClick={() => setTerm("s")}
                  className={term === "s" ? "active" : ""}
                >
                  Semi-Annual <span className="save">Save 5%</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTerm("a")}
                  className={term === "a" ? "active" : ""}
                >
                  Annual <span className="save">Save 15%</span>
                </button>
              </div>
              <div className="billing-note">
                Prices shown are per month in {currency}, billed {TERMS[term].note} in advance.
              </div>
            </div>

            {/* PRODUCT 1: CLARA ANSWERS */}
            <section className="product">
              <div className="p-head">
                <h2>Clara Answers</h2>
              </div>
              <p className="p-desc">
                A 24/7 AI front desk. Answers every call, books jobs, routes emergencies, and handles overflow — day, night, and weekends.
              </p>

              <div className="tabs">
                <button
                  type="button"
                  onClick={() => setAnsTab("sb")}
                  className={ansTab === "sb" ? "active" : ""}
                >
                  Small Business &amp; After-Hours / Overflow
                </button>
                <button
                  type="button"
                  onClick={() => setAnsTab("mm")}
                  className={ansTab === "mm" ? "active" : ""}
                >
                  Multi-Location &amp; Medium Business
                </button>
              </div>

              {ansTab === "sb" && (
                <div className="grid">
                  <div className="card">
                    <div className="tier">Essentials</div>
                    <div className="price">{fmt(249)}</div>
                    <div className="meta">
                      <div className="big">400 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Standard</div>
                    <div className="price">{fmt(449)}</div>
                    <div className="meta">
                      <div className="big">800 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Growth</div>
                    <div className="price">{fmt(649)}</div>
                    <div className="meta">
                      <div className="big">1,200 minutes / month</div>
                    </div>
                  </div>
                </div>
              )}

              {ansTab === "mm" && (
                <div className="grid">
                  <div className="card">
                    <div className="tier">Pro</div>
                    <div className="price">{fmt(899)}</div>
                    <div className="meta">
                      <div className="big">2,000 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Scale</div>
                    <div className="price">{fmt(1199)}</div>
                    <div className="meta">
                      <div className="big">3,000 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Enterprise</div>
                    <div className="price">{fmt(1799)}</div>
                    <div className="meta">
                      <div className="big">5,000 minutes / month</div>
                    </div>
                  </div>
                </div>
              )}

              <p className="note">Additional minutes billed at {overageRateStr} / minute.</p>
            </section>

            {/* PRODUCT 2: CLARA COLLECTS */}
            <section className="product">
              <div className="p-head">
                <h2>Clara Collects</h2>
              </div>
              <p className="p-desc">
                An AI accounts-receivable agent. Calls, emails, and texts overdue accounts with a consistent, professional voice — captures promises-to-pay and speeds up cash flow.
              </p>
              <div className="grid four">
                <div className="card">
                  <div className="tier">Starter</div>
                  <div className="price">{fmt(349)}</div>
                  <div className="meta">
                    <div className="big">Up to 50 AR customers</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Growth</div>
                  <div className="price">{fmt(749)}</div>
                  <div className="meta">
                    <div className="big">Up to 150 AR customers</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Scale</div>
                  <div className="price">{fmt(1299)}</div>
                  <div className="meta">
                    <div className="big">Up to 300 AR customers</div>
                  </div>
                </div>
                <div className="card enter">
                  <div className="tier">Enterprise</div>
                  <div className="price custom">Custom</div>
                  <div className="meta">
                    <div className="big">300+ AR customers</div>
                    <div className="sub">Tailored to your book</div>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCT 3: CLARA CONFIRMS */}
            <section className="product">
              <div className="p-head">
                <h2>Clara Confirms</h2>
              </div>
              <p className="p-desc">
                AI job confirmation &amp; scheduling. Books your due inspections and confirms every job the day before — customer access and technician readiness.
              </p>
              <div className="grid five">
                <div className="card">
                  <div className="tier">Starter</div>
                  <div className="price">{fmt(249)}</div>
                  <div className="meta">
                    <div className="big">Up to 50 Customers</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Growth</div>
                  <div className="price">{fmt(499)}</div>
                  <div className="meta">
                    <div className="big">Up to 100 Customers</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Pro</div>
                  <div className="price">{fmt(1399)}</div>
                  <div className="meta">
                    <div className="big">Up to 300 Customers</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Scale</div>
                  <div className="price">{fmt(2399)}</div>
                  <div className="meta">
                    <div className="big">Up to 600 Customers</div>
                  </div>
                </div>
                <div className="card enter">
                  <div className="tier">Enterprise</div>
                  <div className="price custom">Custom</div>
                  <div className="meta">
                    <div className="big">600+ Customers</div>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCT 4: CLARA ESTIMATOR */}
            <section className="product">
              <div className="p-head">
                <h2>Clara Estimator</h2>
              </div>
              <p className="p-desc">
                An AI estimating agent that turns job details and site notes into ready-to-send quotes — so your team prices more work in less time, consistently.
              </p>
              <div className="grid">
                <div className="card">
                  <div className="tier">Per technician</div>
                  <div className="price">{fmt(100, "/tech")}</div>
                  <div className="meta">
                    <div className="big">Billed per active technician, per month</div>
                  </div>
                </div>
              </div>
            </section>

            {/* INFO BANDS */}
            <div className="band">
              <div className="info onb">
                <h3>Setup &amp; onboarding</h3>
                <p>
                  A one-time setup fee covers workflow mapping, integration setup, and script &amp; tonality configuration before you go live.
                </p>
                <span className="waived">
                  {term === "a" ? (
                    <>
                      <span className="strike">{onbFeeStr}</span> &nbsp;Waived on your Annual plan
                    </>
                  ) : (
                    `${onbFeeStr} one-time — waived on Annual plans`
                  )}
                </span>
              </div>
              <div className="info bundle">
                <h3>Run more than one agent</h3>
                <p>
                  Bundle your Clara agents and save across the board, with a single onboarding.
                </p>
                <span className="waived">2 agents −10% &nbsp;·&nbsp; 3 or more −15%</span>
              </div>
            </div>

            <div className="text-center text-[#64748B] text-[12.5px] mt-12 pt-5 border-t border-[#E2E8F0]">
              Prices effective July 2026 · JustClara.ai
            </div>
          </div>
        </main>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
