import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";
import { agreementMeta, agreementSections, agreementTitle, type AgreementBlock } from "@/data/subscriptionAgreement";

// Turns email addresses and justclara.ai URLs in the agreement text into links.
const LINK_PATTERN = /([\w.+-]+@[\w-]+\.[\w.]+[a-z])|(https:\/\/justclara\.ai(\/[\w-]*)?)/g;

const linkify = (text: string) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_PATTERN)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    if (m[1]) {
      parts.push(<a key={i} href={`mailto:${m[1]}`} className="text-[#D63E50] hover:underline">{m[1]}</a>);
    } else {
      parts.push(<Link key={i} to={m[3] || "/"} className="text-[#D63E50] hover:underline break-all">{m[2]}</Link>);
    }
    last = i + m[0].length;
  }
  parts.push(text.slice(last));
  return parts;
};

const Block = ({ block }: { block: AgreementBlock }) => {
  if (block.kind === "definition") {
    return (
      <p className="text-sm leading-relaxed">
        <span className="font-semibold text-gray-900">"{block.term}"</span> {linkify(block.text)}
      </p>
    );
  }
  if (block.kind === "clause") {
    return (
      <p id={`section-${block.num}`} className="text-sm leading-relaxed scroll-mt-28">
        <span className="font-semibold text-gray-900">
          {block.num}
          {block.label && ` ${block.label}.`}
        </span>{" "}
        {linkify(block.text)}
      </p>
    );
  }
  return <p className="text-sm leading-relaxed">{linkify(block.text)}</p>;
};

const UserLicenseAgreement = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Clara AI Subscription Agreement</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 pt-24 sm:pt-32 pb-16 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3 text-center">{agreementTitle}</h1>
          <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm text-gray-500 text-center mb-10">
            {agreementMeta.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span aria-hidden="true" className="text-gray-300">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </p>

          <nav aria-label="Contents" className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Contents</h2>
            <ol className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
              {agreementSections.map((s) => (
                <li key={s.num}>
                  <a href={`#section-${s.num}`} className="text-gray-700 hover:text-[#D63E50]">
                    {s.num}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-8">
            {agreementSections.map((s) => (
              <section key={s.num} id={`section-${s.num}`} className="scroll-mt-28">
                <h2 className="text-xl font-semibold mb-3">
                  {s.num}. {s.title}
                </h2>
                <div className="space-y-3">
                  {s.blocks.map((b, i) => (
                    <Block key={i} block={b} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLicenseAgreement;
