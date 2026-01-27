import { Phone, Glasses, DollarSign, ArrowRight } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";

const RealisticExamples = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Realistic Examples
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how Clara adapts to different business types and scales.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Example 1 */}
                    <div className="rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                        <div className="bg-red-50/50 p-8">
                            <div className="flex gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0 text-red-500">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">
                                        Small HVAC Company
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Using Clara Answers for after-hours call handling
                                    </p>
                                </div>
                            </div>
                            <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                                Clara Answers
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                    Challenges
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Missing 30%+ of calls after 5pm",
                                        "Lost revenue from unanswered weekend calls",
                                        "No visibility into missed opportunities",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-600">
                                            <span className="text-slate-300">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4">
                                    Outcomes with Clara
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "24/7 call coverage without night staff",
                                        "Every call captured and logged automatically",
                                        "Jobs booked while competitors go to voicemail",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-900 font-medium">
                                            <span className="text-red-500">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={openHubSpotForm}
                                className="text-red-500 font-semibold text-sm flex items-center hover:gap-2 transition-all"
                            >
                                Get pricing for your business <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>

                    {/* Example 2 */}
                    <div className="rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                        <div className="bg-red-50/50 p-8">
                            <div className="flex gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0 text-red-500">
                                    <Glasses className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">
                                        Multi-Location Fire Protection
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Full field operations + revenue recovery
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                                    Clara Field Co-Pilot
                                </div>
                                <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                                    Clara Collects
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                    Challenges
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Inconsistent inspection documentation",
                                        "High rework and compliance failures",
                                        "Slow invoicing and aging receivables",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-600">
                                            <span className="text-slate-300">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4">
                                    Outcomes with Clara
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Guided inspections that pass every time",
                                        "Automated documentation and photo capture",
                                        "Faster invoicing and reduced A/R aging",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-900 font-medium">
                                            <span className="text-red-500">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={openHubSpotForm}
                                className="text-red-500 font-semibold text-sm flex items-center hover:gap-2 transition-all"
                            >
                                Get pricing for your business <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>

                    {/* Example 3 */}
                    <div className="rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                        <div className="bg-red-50/50 p-8">
                            <div className="flex gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0 text-red-500">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">
                                        High-Volume Plumbing Business
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Full Clara AI Growth Engine deployment
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                                    Clara Answers
                                </div>
                                <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                                    Clara Field Co-Pilot
                                </div>
                                <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                                    Clara Collects
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                    Challenges
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Can't hire fast enough to meet demand",
                                        "Quality dropping as volume increases",
                                        "Cash flow stretched by slow collections",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-600">
                                            <span className="text-slate-300">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4">
                                    Outcomes with Clara
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Scale call handling without adding headcount",
                                        "Maintain quality with AI-guided field work",
                                        "Accelerate cash flow with automated collections",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-900 font-medium">
                                            <span className="text-red-500">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={openHubSpotForm}
                                className="text-red-500 font-semibold text-sm flex items-center hover:gap-2 transition-all"
                            >
                                Get pricing for your business <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealisticExamples;
