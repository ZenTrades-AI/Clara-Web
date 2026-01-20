import { PhoneCall, Glasses, DollarSign, Database, BrainCircuit, Calendar } from "lucide-react";

const IntegrationsHowItWorks = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How Clara Works Across Integrations</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Clara is the intelligence layer that connects your entire tech stack, turning disconnected tools into a unified growth system.
                    </p>
                </div>

                {/* 3 Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Clara Answers */}
                    <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-border">
                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                            <PhoneCall className="w-6 h-6 text-clara-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Clara Answers</h3>
                        <p className="text-sm text-foreground font-medium mb-4 leading-relaxed">
                            Captures intent and context from every customer interaction. Answers calls, qualifies leads, books appointments, and logs everything back to your CRM.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Pulls customer history during calls
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Creates and updates CRM records
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Routes to the right team members
                            </li>
                        </ul>
                    </div>

                    {/* Clara Field Co-Pilot */}
                    <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-border">
                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                            <Glasses className="w-6 h-6 text-clara-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Clara Field Co-Pilot</h3>
                        <p className="text-sm text-foreground font-medium mb-4 leading-relaxed">
                            Structures job and field data for perfect CRM records. Captures technician observations, updates job status, and syncs documentation automatically.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Voice-driven data entry
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Real-time job status updates
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Photo and documentation sync
                            </li>
                        </ul>
                    </div>

                    {/* Clara Collects */}
                    <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-border">
                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                            <DollarSign className="w-6 h-6 text-clara-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Clara Collects</h3>
                        <p className="text-sm text-foreground font-medium mb-4 leading-relaxed">
                            Manages invoices and payments across all connected systems. Tracks aging, sends reminders, processes payments, and updates financial records.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Monitors invoice aging
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Automated payment follow-ups
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-clara-red flex-shrink-0" />
                                Real-time payment processing
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Workflow Diagram */}
                <div className="relative bg-[#FAFAFA] rounded-3xl p-12 border border-border text-center overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                        {/* CRM Node */}
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-white border border-border shadow-sm flex items-center justify-center mx-auto mb-3">
                                <Database className="w-7 h-7 text-clara-red" />
                            </div>
                            <h4 className="font-bold text-sm">Your CRM</h4>
                            <p className="text-xs text-muted-foreground">Customer data hub</p>
                        </div>

                        {/* Connection Line */}
                        <div className="hidden md:flex flex-col items-center gap-2">
                            <div className="w-20 h-[2px] bg-border relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-clara-red" />
                            </div>
                        </div>

                        {/* Central Node */}
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-clara-red text-white shadow-lg flex items-center justify-center mx-auto mb-3">
                                <BrainCircuit className="w-9 h-9" />
                            </div>
                            <h4 className="font-bold text-sm">Clara Intelligence</h4>
                            <p className="text-xs text-muted-foreground">Context-aware automation</p>
                        </div>

                        {/* Connection Line */}
                        <div className="hidden md:flex flex-col items-center gap-2">
                            <div className="w-20 h-[2px] bg-border relative">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-clara-red" />
                            </div>
                        </div>

                        {/* Financial/Calendar Node */}
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-white border border-border shadow-sm flex items-center justify-center mx-auto mb-3">
                                <div className="relative">
                                    <DollarSign className="w-7 h-7 text-clara-red" />
                                    <Calendar className="w-4 h-4 text-clara-red absolute -top-1 -right-2 opacity-60" />
                                </div>
                            </div>
                            <h4 className="font-bold text-sm">Payments & Calendar</h4>
                            <p className="text-xs text-muted-foreground">Schedule & collections</p>
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-12 max-w-lg mx-auto leading-relaxed">
                        Data flows seamlessly between all connected systems. Clara becomes the operating layer that reads, writes, and synchronizes across your entire stack.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsHowItWorks;
