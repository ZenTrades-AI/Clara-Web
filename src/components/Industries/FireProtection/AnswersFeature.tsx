import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AnswersFeature = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="bg-[#2563eb] rounded-3xl p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-xl shadow-blue-200">
                        {/* Visual Placeholder mimicking the blue box with phone icon */}
                        <Phone className="w-32 h-32 text-white/80 opacity-60 -rotate-12" />
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
                            <Phone className="w-3 h-3" />
                            Clara Answers
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Every Fire Alarm Trouble Call Gets Answered
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Fire protection calls are urgent. A trouble signal at 2 AM, a sprinkler leak during business hours, an extinguisher replacement before an inspection. Clara Answers handles every call instantly, understands the urgency, and routes it appropriately.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Distinguishes between emergency trouble calls and routine service requests",
                                "Captures building address, system type, and panel information",
                                "Books inspection callbacks and service appointments automatically"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-clara-red shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/solutions/answers" className="inline-flex items-center text-clara-red font-semibold hover:gap-2 transition-all group border border-clara-red/20 rounded-full px-6 py-3 hover:bg-red-50">
                            Learn More About Clara Answers
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnswersFeature;
