import { CheckCircle2, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ClaraCollectsFeature = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium mb-6">
                            <DollarSign className="w-3 h-3" />
                            Clara Collects
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Collect on Inspection Contracts Without Chasing
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Fire protection revenue is predictable but slow to collect. Annual inspection contracts, quarterly testing agreements, and multi-site service contracts sit in AR for months. Clara Collects follows up professionally and persistently.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Automated reminders timed to property management payment cycles",
                                "Escalation sequences for overdue inspection invoices",
                                "Syncs payment status back to your accounting system"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-clara-red shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/solutions/collects" className="inline-flex items-center text-clara-red font-semibold hover:gap-2 transition-all group border border-clara-red/20 rounded-full px-6 py-3 hover:bg-red-50">
                            Learn More About Clara Collects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Visual Side */}
                    <div className="order-1 lg:order-2 bg-[#8b5cf6] rounded-3xl p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-xl shadow-purple-200">
                        {/* Visual Placeholder mimicking the purple box with dollar icon */}
                        <DollarSign className="w-32 h-32 text-white/80 opacity-60" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClaraCollectsFeature;
