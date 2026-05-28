import { MessageSquare, FileText, DollarSign, ArrowRight } from "lucide-react";

const ConnectsToClara = () => {
    return (
        <section className="py-24 bg-[#121212] text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">Part of a Larger System</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How It Connects to <span className="text-clara-red">Clara</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Clara Collects uses intelligence from Clara Answers and Field Co-Pilot to drive faster, smarter collection workflows.
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        {/* Clara Answers */}
                        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 text-center w-full md:w-64 h-40 flex flex-col items-center justify-center">
                            <div className="w-10 h-10 rounded-lg bg-red-900/30 text-clara-red flex items-center justify-center mb-4">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold mb-1">Clara Answers</h3>
                            <p className="text-xs text-gray-500">Captures job details from calls</p>
                        </div>

                        <ArrowRight className="text-gray-600 w-6 h-6 rotate-90 md:rotate-0" />

                        {/* Field Co-Pilot */}
                        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 text-center w-full md:w-64 h-40 flex flex-col items-center justify-center">
                            <div className="w-10 h-10 rounded-lg bg-red-900/30 text-clara-red flex items-center justify-center mb-4">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold mb-1">Field Co-Pilot</h3>
                            <p className="text-xs text-gray-500">Documents completed work</p>
                        </div>

                        <ArrowRight className="text-gray-600 w-6 h-6 rotate-90 md:rotate-0" />

                        {/* Clara Collects */}
                        <div className="bg-[#2A1517] p-6 rounded-2xl border border-clara-red/30 text-center w-full md:w-64 h-40 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-clara-red/5 z-0" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-10 h-10 rounded-lg bg-clara-red/20 text-clara-red flex items-center justify-center mb-4">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold mb-1">Clara Collects</h3>
                                <p className="text-xs text-gray-400">Collects payment on completed jobs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-8">
                    <ArrowRight className="text-gray-600 w-6 h-6 rotate-90" />
                </div>

                {/* CRM Integration Box */}
                <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-2xl border border-gray-800 p-8 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-4 text-gray-400 font-medium">
                            <div className="w-6 h-6 rounded-full border border-clara-red/50 text-clara-red flex items-center justify-center text-xs">
                                <DollarSign className="w-3 h-3" />
                            </div>
                            CRM and Accounting Systems
                        </div>
                        <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
                            All collection activity flows into one unified operating layer. Your accounting tools and CRMs stay updated automatically with payment status and customer communications.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["QuickBooks", "ServiceTitan", "Xero", "Jobber", "BuildOps"].map((tool) => (
                                <span key={tool} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectsToClara;
