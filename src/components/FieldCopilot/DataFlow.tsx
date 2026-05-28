import { ArrowRight, Database, MessageSquare, DollarSign, Brain } from "lucide-react";

const DataFlow = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">PART OF A LARGER SYSTEM</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Data Flow and <span className="text-clara-red">Intelligence Layer</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Field Co-Pilot captures intelligence that powers the entire Clara AI ecosystem. All agents share context, all data flows to your systems of record.
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className="relative max-w-5xl mx-auto mb-20">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Card 1 */}
                        <div className="relative bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center z-10">
                            <div className="w-12 h-12 mx-auto bg-red-900/30 rounded-xl flex items-center justify-center text-clara-red mb-4">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Field Co-Pilot</h3>
                            <p className="text-gray-400 text-sm">Captures and structures field data</p>

                            {/* Arrow for Desktop */}
                            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-clara-red z-20">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center z-10">
                            <div className="w-12 h-12 mx-auto bg-red-900/30 rounded-xl flex items-center justify-center text-clara-red mb-4">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clara Answers</h3>
                            <p className="text-gray-400 text-sm">Uses field intelligence for better responses</p>

                            {/* Arrow for Desktop */}
                            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-clara-red z-20">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center z-10">
                            <div className="w-12 h-12 mx-auto bg-red-900/30 rounded-xl flex items-center justify-center text-clara-red mb-4">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clara Collects</h3>
                            <p className="text-gray-400 text-sm">Accelerates revenue collection</p>
                        </div>
                    </div>
                </div>

                {/* CRM Layer */}
                <div className="max-w-4xl mx-auto bg-[#151515] rounded-3xl p-8 md:p-12 border border-gray-800 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                        <Brain className="w-6 h-6 text-clara-red" />
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                        <span className="font-bold text-lg">CRM and Systems of Record</span>
                    </div>

                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
                        All intelligence flows into one unified operating layer. Your CRMs and existing tools remain the system of record, enhanced with real-time field data.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {["ServiceTitan", "Jobber", "Housecall Pro", "Build Ops", "Salesforce"].map((crm) => (
                            <span key={crm} className="px-4 py-2 rounded-full bg-[#252525] text-gray-400 text-xs font-medium border border-gray-800">
                                {crm}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataFlow;
