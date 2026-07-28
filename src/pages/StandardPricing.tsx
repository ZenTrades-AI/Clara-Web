import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GATE_PASSWORD = "ClaraPricing2026";

type TermKey = "q" | "s" | "a";

const TERMS: Record<TermKey, { mult: number; note: string }> = {
  q: { mult: 1, note: "quarterly" },
  s: { mult: 0.95, note: "semi-annually" },
  a: { mult: 0.85, note: "annually" }
};

export default function StandardPricing() {
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const [term, setTerm] = useState<TermKey>("q");
  const [ansTab, setAnsTab] = useState<"sb" | "mm">("sb");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("clara_unlocked") === "1") {
        setUnlocked(true);
      }
    } catch (e) {
      // Ignore sessionStorage restriction
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

  const fmt = (base: number) => {
    const val = Math.round(base * TERMS[term].mult);
    return "$" + val.toLocaleString("en-US");
  };

  return (
    <div className="min-h-screen font-sans bg-[#F5F7FB] text-[#1A2233] selection:bg-[#149E8C] selection:text-white">
      <Helmet>
        <title>Clara — Standard Pricing</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="slurp" content="noindex, nofollow" />
      </Helmet>

      {/* Embedded CSS matching provided template */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .clara-std-pricing {
          --navy: #1F2A5B;
          --navy-2: #2b3a72;
          --teal: #149E8C;
          --teal-d: #0e7d6f;
          --ink: #1A2233;
          --mute: #6B7385;
          --line: #E7E9F0;
          --bg: #F5F7FB;
          --card: #FFFFFF;
          --shadow: 0 1px 2px rgba(20,30,60,.04), 0 8px 24px rgba(20,30,60,.06);
        }

        .clara-std-pricing .wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 56px 24px 72px;
        }

        .clara-std-pricing .eyebrow {
          color: var(--teal);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .clara-std-pricing h1 {
          font-size: 40px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -.02em;
          margin: 8px 0 6px;
        }

        .clara-std-pricing .lede {
          color: var(--mute);
          font-size: 16px;
          max-width: 640px;
        }

        .clara-std-pricing .billing {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin: 34px 0 6px;
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
          font-weight: 600;
          font-size: 14px;
          color: var(--mute);
          padding: 9px 20px;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: .15s;
        }

        .clara-std-pricing .seg button:hover {
          color: var(--navy);
        }

        .clara-std-pricing .seg button.active {
          background: var(--navy);
          color: #fff;
        }

        .clara-std-pricing .save {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 999px;
          background: #E3F5F1;
          color: var(--teal-d);
        }

        .clara-std-pricing .seg button.active .save {
          background: rgba(255,255,255,.22);
          color: #fff;
        }

        .clara-std-pricing .billing-note {
          color: var(--mute);
          font-size: 13.5px;
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
          font-size: 24px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -.01em;
        }

        .clara-std-pricing .p-desc {
          color: var(--mute);
          font-size: 15px;
          max-width: 720px;
          margin-bottom: 20px;
        }

        .clara-std-pricing .tabs {
          display: inline-flex;
          gap: 4px;
          background: #eceef4;
          border-radius: 10px;
          padding: 4px;
          margin-bottom: 20px;
        }

        .clara-std-pricing .tabs button {
          border: 0;
          background: transparent;
          font: inherit;
          font-weight: 600;
          font-size: 13.5px;
          color: var(--mute);
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: .15s;
        }

        .clara-std-pricing .tabs button.active {
          background: #fff;
          color: var(--navy);
          box-shadow: 0 1px 2px rgba(20,30,60,.08);
        }

        .clara-std-pricing .grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
        }

        .clara-std-pricing .grid.four {
          grid-template-columns: repeat(4,1fr);
        }

        .clara-std-pricing .grid.five {
          grid-template-columns: repeat(5,1fr);
        }

        @media(max-width:900px){
          .clara-std-pricing .grid,
          .clara-std-pricing .grid.four,
          .clara-std-pricing .grid.five {
            grid-template-columns: repeat(2,1fr);
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
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
        }

        .clara-std-pricing .tier {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--teal-d);
        }

        .clara-std-pricing .price {
          margin: 12px 0 2px;
          font-size: 34px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -.02em;
          line-height: 1;
        }

        .clara-std-pricing .price .per {
          font-size: 14px;
          font-weight: 600;
          color: var(--mute);
          letter-spacing: 0;
        }

        .clara-std-pricing .price.custom {
          font-size: 26px;
        }

        .clara-std-pricing .meta {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--line);
          color: var(--ink);
          font-size: 14px;
        }

        .clara-std-pricing .meta .big {
          font-weight: 600;
        }

        .clara-std-pricing .meta .sub {
          color: var(--mute);
          font-size: 13px;
          margin-top: 3px;
        }

        .clara-std-pricing .card.enter {
          background: linear-gradient(180deg,#20305f,#1a2650);
          border-color: #20305f;
        }

        .clara-std-pricing .card.enter .tier {
          color: #7fe3d3;
        }

        .clara-std-pricing .card.enter .price,
        .clara-std-pricing .card.enter .meta,
        .clara-std-pricing .card.enter .meta .sub {
          color: #eef1f8;
        }

        .clara-std-pricing .card.enter .meta {
          border-top-color: rgba(255,255,255,.16);
        }

        .clara-std-pricing .note {
          color: var(--mute);
          font-size: 13px;
          margin-top: 12px;
        }

        .clara-std-pricing .band {
          margin-top: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media(max-width:720px){
          .clara-std-pricing .band {
            grid-template-columns: 1fr;
          }
        }

        .clara-std-pricing .info {
          border-radius: 14px;
          padding: 20px 22px;
          border: 1px solid var(--line);
          background: #fff;
          box-shadow: var(--shadow);
        }

        .clara-std-pricing .info h3 {
          font-size: 15px;
          color: var(--navy);
          font-weight: 700;
          margin-bottom: 6px;
        }

        .clara-std-pricing .info p {
          color: var(--mute);
          font-size: 14px;
        }

        .clara-std-pricing .info.onb {
          border-left: 5px solid var(--navy);
        }

        .clara-std-pricing .info.bundle {
          border-left: 5px solid var(--teal);
        }

        .clara-std-pricing .waived {
          display: inline-block;
          margin-top: 8px;
          font-size: 13px;
          font-weight: 700;
          color: var(--teal-d);
          background: #E3F5F1;
          padding: 4px 10px;
          border-radius: 999px;
        }

        .clara-std-pricing .strike {
          text-decoration: line-through;
          color: var(--mute);
        }

        .clara-std-pricing footer {
          margin-top: 48px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
          color: var(--mute);
          font-size: 12.5px;
          text-align: center;
        }

        /* Password Gate Modal Overlay */
        .clara-gate {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, #1F2A5B, #141d40);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
        }

        .clara-gate .gate-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 30px;
          width: 100%;
          max-width: 380px;
          box-shadow: 0 24px 70px rgba(0,0,0,.4);
          text-align: center;
        }

        .clara-gate .gate-title {
          font-size: 22px;
          font-weight: 800;
          color: #1F2A5B;
          margin: 10px 0 6px;
          letter-spacing: -.01em;
        }

        .clara-gate .gate-sub {
          color: #6B7385;
          font-size: 14px;
          margin-bottom: 22px;
        }

        .clara-gate input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #E7E9F0;
          border-radius: 10px;
          font: inherit;
          font-size: 15px;
          margin-bottom: 12px;
        }

        .clara-gate input:focus {
          outline: none;
          border-color: #149E8C;
          box-shadow: 0 0 0 3px rgba(20,158,140,.15);
        }

        .clara-gate button {
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 10px;
          background: #1F2A5B;
          color: #fff;
          font: inherit;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: .15s;
        }

        .clara-gate button:hover {
          background: #2b3a72;
        }

        .clara-gate .gate-err {
          color: #B93815;
          font-size: 13px;
          margin-top: 12px;
          font-weight: 600;
        }
      `}} />

      {/* LOGIN GATE OVERLAY */}
      {!unlocked && (
        <div className="clara-gate">
          <div className="gate-card">
            <div className="eyebrow" style={{ textAlign: "center" }}>
              JustClara.ai
            </div>
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
        <div className="clara-std-pricing">
          <div className="wrap">
            <div className="eyebrow">JustClara.ai</div>
            <h1>Standard Pricing</h1>
            <p className="lede">
              AI voice agents for commercial trades — HVAC, plumbing, electrical, and fire protection.
            </p>

            {/* BILLING TERM TOGGLE */}
            <div className="billing">
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
                Prices shown are per month, billed {TERMS[term].note} in advance.
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
                    <div className="price">{fmt(249)}<span className="per">/mo</span></div>
                    <div className="meta">
                      <div className="big">400 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Standard</div>
                    <div className="price">{fmt(449)}<span className="per">/mo</span></div>
                    <div className="meta">
                      <div className="big">800 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Growth</div>
                    <div className="price">{fmt(649)}<span className="per">/mo</span></div>
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
                    <div className="price">{fmt(899)}<span className="per">/mo</span></div>
                    <div className="meta">
                      <div className="big">2,000 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Scale</div>
                    <div className="price">{fmt(1199)}<span className="per">/mo</span></div>
                    <div className="meta">
                      <div className="big">3,000 minutes / month</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="tier">Enterprise</div>
                    <div className="price">{fmt(1799)}<span className="per">/mo</span></div>
                    <div className="meta">
                      <div className="big">5,000 minutes / month</div>
                    </div>
                  </div>
                </div>
              )}

              <p className="note">Additional minutes billed at $0.50 / minute.</p>
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
                  <div className="price">{fmt(349)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 50 AR customers</div>
                    <div className="sub">Up to $50,000 AR covered</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Growth</div>
                  <div className="price">{fmt(749)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 150 AR customers</div>
                    <div className="sub">Up to $150,000 AR covered</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Scale</div>
                  <div className="price">{fmt(1299)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 300 AR customers</div>
                    <div className="sub">Up to $300,000 AR covered</div>
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
                  <div className="price">{fmt(249)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 50 locations</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Growth</div>
                  <div className="price">{fmt(499)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 100 locations</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Pro</div>
                  <div className="price">{fmt(1399)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 300 locations</div>
                  </div>
                </div>
                <div className="card">
                  <div className="tier">Scale</div>
                  <div className="price">{fmt(2399)}<span className="per">/mo</span></div>
                  <div className="meta">
                    <div className="big">Up to 600 locations</div>
                  </div>
                </div>
                <div className="card enter">
                  <div className="tier">Enterprise</div>
                  <div className="price custom">Custom</div>
                  <div className="meta">
                    <div className="big">600+ locations</div>
                  </div>
                </div>
              </div>
            </section>

            {/* INFO BANDS */}
            <div className="band">
              <div className="info onb">
                <h3>Setup &amp; onboarding</h3>
                <p>
                  A one-time $1,000 fee covers workflow mapping, integration setup, and script &amp; tonality configuration before you go live.
                </p>
                <span className="waived">
                  {term === "a" ? (
                    <>
                      <span className="strike">$1,000</span> &nbsp;Waived on your Annual plan
                    </>
                  ) : (
                    "$1,000 one-time · waived on Annual plans"
                  )}
                </span>
              </div>
              <div className="info bundle">
                <h3>Run more than one agent</h3>
                <p>
                  Bundle your Clara agents and save across the board, with a single onboarding.
                </p>
                <span className="waived">2 agents −10% &nbsp;·&nbsp; all 3 agents −15%</span>
              </div>
            </div>

            <footer>Prices effective July 2026 · JustClara.ai</footer>
          </div>
        </div>
      )}
    </div>
  );
}
