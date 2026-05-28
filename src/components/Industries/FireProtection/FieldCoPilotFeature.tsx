import { CheckCircle, Glasses, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FieldCoPilotFeature = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        How Each Agent Works for Fire Protection
                    </h2>
                </div>

                <div className="flex flex-col gap-24">
                    {/* Feature Row 1: Field Co-Pilot */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-emerald-600 text-xs font-medium mb-6">
                                <Glasses className="w-3 h-3" />
                                Clara Field Co-Pilot
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Compliance Documentation That Protects You
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fire protection inspections require airtight documentation. Field Co-Pilot captures everything your technicians see, say, and do, turning it into structured inspection records that meet NFPA standards and satisfy any AHJ.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {["Voice-captured deficiency notes with automatic photo tagging", "System-by-system inspection checklists (fire alarm, sprinkler, suppression, extinguisher)", "Immediate sync to your inspection management system"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-clara-red shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/solutions/field-copilot" className="inline-flex items-center text-clara-red font-semibold hover:gap-2 transition-all group border border-clara-red/20 rounded-full px-6 py-3 hover:bg-red-50">
                                Learn More About Field Co-Pilot
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="order-1 lg:order-2 bg-[#1a202c] rounded-3xl p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                            {/* Visual Placeholder mimicking the dark box with glasses in screenshot */}
                            <Glasses className="w-32 h-32 text-emerald-500/80 opacity-80" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FieldCoPilotFeature;
