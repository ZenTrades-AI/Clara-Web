import { Glasses, Phone, DollarSign, CheckCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HVACFeatures = () => {
    return (
        <section className="bg-white overflow-hidden py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        How Each Agent Works for HVAC
                    </h2>
                </div>

                <div className="flex flex-col gap-24">
                    {/* Feature 1: Field Co-Pilot */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-emerald-600 text-xs font-medium mb-6">
                                <Glasses className="w-3 h-3" />
                                Clara Field Co-Pilot
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Diagnostic Support for Every Tech
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                HVAC diagnostics require experience. Field Co-Pilot gives every technician real-time guidance, captures system readings and fault codes, and documents work automatically so junior techs can handle complex calls without constant supervision.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {["Voice-captured readings for refrigerant levels, superheat, subcooling", "Fault code documentation with recommended next steps", "Before and after photos tagged automatically to job records"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-clara-red shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/solutions/field-copilot" className="inline-flex items-center text-clara-red font-bold text-xs hover:gap-2 transition-all group border border-clara-red/20 rounded-md px-4 py-2 hover:bg-red-50">
                                Learn More About Field Co-Pilot
                                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="order-1 lg:order-2 bg-[#1a202c] rounded-lg p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                            <Glasses className="w-24 h-24 text-emerald-500/80 opacity-80" />
                        </div>
                    </div>

                    {/* Feature 2: Answers */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-[#2563eb] rounded-lg p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden shadow-xl shadow-blue-200">
                            <Phone className="w-24 h-24 text-white/80 opacity-60 -rotate-12" />
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
                                <Phone className="w-3 h-3" />
                                Clara Answers
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Capture Every Emergency, Every Season
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                When the temperature spikes or drops, your phone explodes. Clara Answers handles the surge, distinguishes between emergencies and routine maintenance, and books appointments automatically. No more missed calls during peak season.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Triages emergency no-heat and no-cool calls from routine requests",
                                    "Captures equipment age, symptoms, and customer priority",
                                    "Books service calls and sends confirmation automatically"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-clara-red shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/solutions/answers" className="inline-flex items-center text-clara-red font-bold text-xs hover:gap-2 transition-all group border border-clara-red/20 rounded-md px-4 py-2 hover:bg-red-50">
                                Learn More About Clara Answers
                                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Feature 3: Collects */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium mb-6">
                                <DollarSign className="w-3 h-3" />
                                Clara Collects
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Collect on Installs and Service Without Chasing
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Equipment replacements are your biggest revenue, but also your biggest AR headache. Clara Collects follows up on install invoices, maintenance agreement renewals, and service call balances so you do not have to chase customers manually.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Automated reminders for install completion payments",
                                    "Maintenance plan renewal follow-ups before expiration",
                                    "Payment status syncs back to your service management system"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-clara-red shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/solutions/collects" className="inline-flex items-center text-clara-red font-bold text-xs hover:gap-2 transition-all group border border-clara-red/20 rounded-md px-4 py-2 hover:bg-red-50">
                                Learn More About Clara Collects
                                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="order-1 lg:order-2 bg-[#8b5cf6] rounded-lg p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden shadow-xl shadow-purple-200">
                            <DollarSign className="w-24 h-24 text-white/80 opacity-60" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HVACFeatures;
