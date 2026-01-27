import { Glasses, Phone, DollarSign, CheckCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ElectricalFeatures = () => {
    return (
        <section className="bg-white overflow-hidden py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        How Each Agent Works for Electrical Contractors
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
                                Document Every Wire, Every Connection, Every Panel
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Electrical installations are complex and inspection-ready documentation is critical. Field Co-Pilot captures every detail of the work: wire gauges, breaker assignments, conduit runs, and test readings. Your team documents as they work without stopping to take notes.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {["Voice-captured installation notes with automatic photo tagging", "Panel schedules and circuit documentation captured in real time", "Test readings and inspection results synced to job records"].map((item, i) => (
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
                                Capture Every Service Call While Running Projects
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Your office is managing project timelines and permit schedules. When a customer calls about a panel upgrade, a generator install, or an outlet issue, Clara Answers captures the request and schedules the appointment. No more lost leads during busy project periods.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Handles residential service calls and commercial inquiries",
                                    "Captures job scope, property type, and urgency level",
                                    "Books appointments and sends confirmation automatically"
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
                                Collect on Projects and Service Work Without Chasing
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Electrical projects have complex payment structures. Progress payments, final invoices, and retainage release all require follow-up. Clara Collects manages the collection process across residential service calls and commercial project billings.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Automated reminders for service call invoices and project payments",
                                    "Follow-up sequences for GC payment applications and retainage",
                                    "Payment status syncs to your accounting and project management systems"
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

export default ElectricalFeatures;
