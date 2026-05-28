import { Glasses, Phone, DollarSign, CheckCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlumbingFeatures = () => {
    return (
        <section className="bg-white overflow-hidden py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        How Each Agent Works for Plumbing
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
                                Document Every Inspection and Repair
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Plumbing diagnostics are visual. Customers need to see the problem to understand the repair. Field Co-Pilot captures camera footage, photos, and technician notes, turning every service call into documented proof that justifies the work.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {["Voice-captured notes during camera inspections and diagnostics", "Photo documentation of pipe conditions, leaks, and repairs", "Automatic sync to job records without manual data entry"].map((item, i) => (
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
                                Answer Every Emergency, Day or Night
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Plumbing emergencies do not follow business hours. Clara Answers picks up every call instantly, understands the urgency, and captures the details your dispatcher needs. True emergencies get escalated. Routine requests get scheduled.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Distinguishes burst pipes and sewer backups from routine drain issues",
                                    "Captures problem description, property type, and customer urgency",
                                    "Books service calls or escalates to on-call tech based on severity"
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
                                Collect on Service Work Without Awkward Follow-Ups
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                The leak is fixed. The drain is cleared. But the invoice is unpaid. Clara Collects follows up professionally and persistently, handling the collection process so your team does not have to chase customers manually.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Automated reminders for completed service call invoices",
                                    "Membership renewal follow-ups for drain cleaning and maintenance plans",
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

export default PlumbingFeatures;
