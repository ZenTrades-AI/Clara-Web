import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Clock, ShieldCheck } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";

const ClaraCollectsNew = () => {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* New Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#fafafa]">
                <div className="container relative mx-auto px-4 z-10 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Column: Content */}
                        <div className="text-left font-sans flex flex-col gap-8">
                            <h1 className="text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold text-[#0f213b] tracking-tight">
                                Stop Chasing<br />Payments. <span className="text-[#d9304f]">Start<br />Controlling Cash Flow.</span>
                            </h1>

                            <p className="text-lg text-gray-500 max-w-[500px] leading-relaxed font-medium">
                                Clara AI For Collections works inside QuickBooks to automatically follow up on due and overdue invoices — professionally, consistently, and without manual effort.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Button
                                    size="lg"
                                    className="bg-[#d9304f] hover:bg-red-700 text-white px-8 h-12 rounded-lg font-medium text-base shadow-lg shadow-red-500/20"
                                    onClick={openHubSpotForm}
                                >
                                    Book a Live Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-green-50/50 hover:bg-green-50/50 hover:text-[#0f213b] border border-green-100 text-[#0f213b] px-8 h-12 rounded-lg font-medium text-base shadow-sm"
                                >
                                    View 2-Min Overview
                                </Button>
                            </div>

                            {/* Stats below buttons */}
                            <div className="flex flex-wrap items-center gap-8 md:gap-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-1 text-[#0f213b] font-bold text-[22px]">
                                        <ArrowDown className="w-5 h-5 text-[#d9304f]" strokeWidth={3} />
                                        10-15 Days
                                    </div>
                                    <div className="text-[13px] text-gray-500 font-medium">Reduction In DSO</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1 text-[#0f213b] font-bold text-[22px]">
                                        <Clock className="w-5 h-5 text-[#d9304f]" strokeWidth={2.5} />
                                        15-20 Hrs
                                    </div>
                                    <div className="text-[13px] text-gray-500 font-medium">Saved Every Week</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1 text-[#0f213b] font-bold text-[22px]">
                                        <ShieldCheck className="w-5 h-5 text-[#d9304f]" strokeWidth={2.5} />
                                        100%
                                    </div>
                                    <div className="text-[13px] text-gray-500 font-medium">Invoice Coverage</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Dashboard UI Representation */}
                        <div className="relative w-full aspect-[16/11] bg-[#0c1831] rounded-[20px] shadow-2xl border border-gray-800 p-4 sm:p-5 flex flex-col gap-4 overflow-hidden transform lg:scale-[1.05] lg:translate-x-4">
                            {/* Popout Floating Card (mimicking the "DSO stats" overlay) */}
                            <div className="absolute top-10 left-[20%] w-44 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 z-20">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#00f2a9]"></div>
                                    <div className="text-[11px] font-bold text-gray-800 tracking-wide uppercase">DSO stats</div>
                                </div>
                                <div className="text-3xl font-black text-[#0f213b] tracking-tight">22<span className="text-gray-400">.32</span></div>
                                <div className="text-[11px] font-semibold text-gray-500 mt-1">DSO - 302 days</div>
                            </div>

                            {/* Top Navigation Bar */}
                            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="h-3 w-20 bg-gray-800 rounded ml-4"></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="h-3 w-32 bg-gray-800 rounded-full hidden sm:block"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                                </div>
                            </div>

                            {/* Main Dashboard Area */}
                            <div className="flex flex-1 gap-4">
                                {/* Sidebar */}
                                <div className="w-10 flex flex-col items-center gap-4 py-2 border-r border-gray-800 pr-4">
                                    <div className="w-6 h-6 rounded bg-gray-800"></div>
                                    <div className="w-6 h-6 rounded bg-gray-800 mb-2"></div>
                                    <div className="w-5 h-5 rounded-full bg-[#d9304f]"></div>
                                    <div className="w-6 h-6 rounded bg-gray-800"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-4 pl-1">
                                    {/* Dashboard Subheader */}
                                    <div className="flex gap-2">
                                        <div className="h-6 w-24 bg-gray-800 rounded-md"></div>
                                        <div className="h-6 w-20 bg-gray-800 rounded-md"></div>
                                        <div className="h-6 w-24 bg-gray-800 rounded-md"></div>
                                        <div className="h-6 w-8 bg-gray-800 rounded-md ml-auto"></div>
                                    </div>

                                    {/* Top row cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {/* Overdue */}
                                        <div className="bg-[#172544] rounded-lg p-3 flex flex-col justify-between h-28">
                                            <div className="text-gray-400 text-[10px] font-semibold uppercase">Overdue</div>
                                            <div className="mt-auto">
                                                <div className="text-white text-lg font-bold bg-gray-700/50 rounded inline-block px-2 py-1 mb-2">$2/374,000</div>
                                            </div>
                                        </div>
                                        {/* Cash Flow */}
                                        <div className="bg-[#172544] rounded-lg p-3 flex flex-col relative h-28 overflow-hidden">
                                            <div className="text-gray-400 text-[10px] font-semibold uppercase z-10">Cash flow</div>
                                            <div className="absolute inset-0 flex items-center justify-center pt-4">
                                                <div className="w-14 h-14 rounded-full border-[5px] border-[#0f213b] border-l-[#00f2a9] border-t-[#00f2a9] flex items-center justify-center">
                                                    <span className="text-white text-[10px] font-bold">-$44K</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Invoice status */}
                                        <div className="bg-[#172544] rounded-lg p-3 flex flex-col justify-between h-28 relative overflow-hidden">
                                            <div className="text-gray-400 text-[10px] font-semibold uppercase relative z-10">Invoice status</div>
                                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-1.5 px-3 opacity-90">
                                                <div className="w-full bg-[#00f2a9] rounded-t-sm h-[40%]"></div>
                                                <div className="w-full bg-[#00f2a9] rounded-t-sm h-[65%]"></div>
                                                <div className="w-full bg-[#00f2a9] rounded-t-sm h-[50%]"></div>
                                                <div className="w-full bg-[#00f2a9] rounded-t-sm h-[85%]"></div>
                                                <div className="w-full bg-[#00f2a9] rounded-t-sm h-[70%]"></div>
                                            </div>
                                            {/* Trend Line overlay */}
                                            <svg className="absolute bottom-3 left-0 right-0 w-full h-12" preserveAspectRatio="none" viewBox="0 0 100 50">
                                                <path d="M0,40 Q20,30 40,20 T80,10 T100,5" fill="none" stroke="#60a5fa" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Bottom row */}
                                    <div className="grid grid-cols-4 gap-3 flex-1 h-32">
                                        <div className="col-span-1 bg-[#172544] rounded-lg p-3 relative h-full flex flex-col items-center justify-center">
                                            <div className="absolute top-3 left-3 text-gray-400 text-[10px] font-semibold uppercase">Missing Accounts</div>
                                            <div className="w-14 h-14 rounded-full border-[6px] border-[#00f2a9] border-r-transparent rotate-45 flex items-center justify-center mt-4">
                                                <div className="w-6 h-6 rounded-full bg-[#0f213b]"></div>
                                            </div>
                                        </div>
                                        <div className="col-span-3 bg-[#172544] rounded-lg p-3 flex flex-col justify-between h-full relative">
                                            <div className="text-gray-400 text-[10px] font-semibold uppercase z-10">Revenue</div>
                                            {/* Faint bar chart background */}
                                            <div className="absolute bottom-6 left-3 right-3 flex items-end justify-between h-16 opacity-30">
                                                {[30, 45, 35, 60, 50, 70, 85, 65, 95, 75, 40].map((h, i) => (
                                                    <div key={i} className="w-[6%] rounded-t bg-gray-400" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                            {/* Area chart overlay */}
                                            <svg className="absolute bottom-6 left-0 right-0 w-full h-14 text-[#00f2a9]" preserveAspectRatio="none" viewBox="0 0 100 50">
                                                <path d="M0,50 L0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,15 L100,50 Z" fill="currentColor" fillOpacity="0.1" />
                                                <path d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                            <div className="flex justify-between text-[8px] text-gray-500 mt-auto pt-2 border-t border-gray-700/50">
                                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd Section: Comparison */}
            <section className="bg-gray-50 py-24 text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-[#0f213b]">
                        QuickBooks Shows You Who<br />
                        Owes Money.<br />
                        <span className="text-[#d9304f]">It Doesn't Collect It.</span>
                    </h2>

                    <div className="flex flex-col gap-2 text-gray-600 mb-16 text-lg">
                        <p>Aging reports don't send reminders.</p>
                        <p>Spreadsheets don't follow up.</p>
                        <p>Busy teams forget.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                        {/* Manual Process Card */}
                        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 text-left">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="text-[#d9304f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#0f213b]">Manual Process</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    <span>Manual Emails</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <span>Chasing Calls</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    <span>Sticky Notes</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                    <span>Missed Follow-ups</span>
                                </li>
                            </ul>
                        </div>

                        {/* Clara AI Card */}
                        <div className="bg-white border-2 border-[#d9314f]/20 rounded-2xl p-8 text-left relative overflow-hidden shadow-md group hover:border-[#d9314f]/50 hover:shadow-lg transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:bg-red-100 transition-colors"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="text-[#d9314f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#0f213b]">Clara AI</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-[#0f213b] font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d9314f]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    <span>Monitors Invoices</span>
                                </li>
                                <li className="flex items-center gap-3 text-[#0f213b] font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d9314f]"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                                    <span>Follows Up Automatically</span>
                                </li>
                                <li className="flex items-center gap-3 text-[#0f213b] font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d9314f]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    <span>Stops When Paid</span>
                                </li>
                                <li className="flex items-center gap-3 text-[#0f213b] font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d9314f]"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    <span>Escalates When Needed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-[11px] font-semibold text-gray-500 tracking-widest uppercase mb-8">
                        COLLECTION IS AN EXECUTION PROBLEM. CLARA SOLVES IT.
                    </p>
                </div>
            </section>

            {/* NEW 3rd Section: Relationship-Safe Features (Previously 4th) */}
            <section className="bg-[#f8faf9] py-24 text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#0f213b] tracking-tight">
                        Professional. Controlled. <span className="text-[#d9314f]">Relationship-Safe.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 max-w-5xl mx-auto">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] text-left flex flex-col h-full border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="w-full aspect-video bg-gray-100 relative mb-6">
                                <img src="/photos/collact%20images/Agent%20Identity.png" alt="Agent Identity settings" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="px-6 pb-6">
                                <h3 className="text-[#0f213b] font-bold text-lg mb-4 leading-snug">Agent Identity</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Name your AI and choose from 100+ male or female voice options to match your brand and customer style.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] text-left flex flex-col h-full border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="w-full aspect-video bg-gray-100 relative mb-6">
                                <img src="/photos/collact%20images/Agent%20Settings%202.png" alt="Agent Settings" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="px-6 pb-6">
                                <h3 className="text-[#0f213b] font-bold text-lg mb-4 leading-snug">Agent Settings</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Control how your AI communicates by adjusting response speed, conversation pacing, voice tone, volume, voicemail detection, and call duration settings.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] text-left flex flex-col h-full border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="w-full aspect-video bg-gray-100 relative mb-6">
                                <img src="/photos/collact%20images/Opening%20message%202.png" alt="Opening Message templates" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="px-6 pb-6">
                                <h3 className="text-[#0f213b] font-bold text-lg mb-4 leading-snug">Opening Message</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Choose how your AI greets customers with 20+ ready-made templates designed for your industry and business, so every conversation starts on the right note.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] text-left flex flex-col h-full border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="w-full aspect-video bg-gray-100 relative mb-6">
                                <img src="/photos/collact%20images/Quickbooks%20integration%202.png" alt="QuickBooks Sync and Invoice Upload" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="px-6 pb-6">
                                <h3 className="text-[#0f213b] font-bold text-lg mb-4 leading-snug">QB Sync + Invoice Upload</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">One-click to connect your QuickBooks account to sync invoices and customer data. You can also import invoices from CSV files or view import history.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW 4th Section: How It Works (Previously 3rd) */}
            <section className="bg-white py-24 text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-20 text-[#0f213b] tracking-tight">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 px-4 md:px-0">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-red-50/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center mb-4">
                                1
                            </div>
                            <h3 className="text-lg font-bold text-[#0f213b] mb-2 leading-tight">Connect QuickBooks</h3>
                            <p className="text-xs text-gray-400 font-medium tracking-wide">One click</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center mt-8 md:mt-0">
                            <div className="w-20 h-20 bg-red-50/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21v-5h5"></path></svg>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center mb-4">
                                2
                            </div>
                            <h3 className="text-lg font-bold text-[#0f213b] mb-2 leading-tight">Sync Invoices &<br />Customers</h3>
                            <p className="text-xs text-gray-400 font-medium tracking-wide">Automatic</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center mt-8 md:mt-0">
                            <div className="w-20 h-20 bg-red-50/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center mb-4">
                                3
                            </div>
                            <h3 className="text-lg font-bold text-[#0f213b] mb-2 leading-tight">Email, SMS & Voice<br />Reminders</h3>
                            <p className="text-xs text-gray-400 font-medium tracking-wide">AI-powered</p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center mt-8 md:mt-0">
                            <div className="w-20 h-20 bg-red-50/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9314f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line></svg>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center mb-4">
                                4
                            </div>
                            <h3 className="text-lg font-bold text-[#0f213b] mb-2 leading-tight">Auto-Pause When Paid</h3>
                            <p className="text-xs text-gray-400 font-medium tracking-wide">Intelligent</p>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto flex flex-col items-center pt-8 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-8 font-medium">
                            No double entry. No awkward follow-ups after payment. Full control anytime.
                        </p>
                        <Button
                            size="lg"
                            className="bg-[#d9304f] hover:bg-red-700 text-white px-10 h-14 rounded-lg font-bold text-base shadow-lg shadow-red-500/20 w-fit"
                            onClick={openHubSpotForm}
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5th Section: Dashboard View */}
            <section className="bg-[#0f213b] py-24 text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white tracking-tight">
                        Everything. <span className="text-[#d9314f]">In One Clear View.</span>
                    </h2>



                    {/* Features under Dashboard */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 max-w-5xl mx-auto">
                        {/* Dashboard Feature 1 */}
                        <div className="bg-[#172544] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#d9314f]/50 transition-colors flex flex-col">
                            <div className="w-full aspect-video bg-[#0c1322] relative border-b border-white/5">
                                <img src="/photos/collact%20images/Dashboard%20Overview%202.png" alt="Dashboard Overview showing overdues and collected amounts" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-8 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-3">Dashboard Overview</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">View all outstanding payments, overdue collections, total calls made, and a prioritized list of customers who need immediate attention — all in one place.</p>
                            </div>
                        </div>

                        {/* Dashboard Feature 2 */}
                        <div className="bg-[#172544] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#d9314f]/50 transition-colors flex flex-col">
                            <div className="w-full aspect-video bg-[#0c1322] relative border-b border-white/5">
                                <img src="/photos/collact%20images/Call%20History%20and%20Transcripts%202.png" alt="Call History and Transcripts" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-8 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-3">Call History & Transcripts</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Access complete call logs, listen to recordings, and review transcripts for full visibility into every customer interaction.</p>
                            </div>
                        </div>

                        {/* Dashboard Feature 3 */}
                        <div className="bg-[#172544] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#d9314f]/50 transition-colors flex flex-col">
                            <div className="w-full aspect-video bg-[#0c1322] relative border-b border-white/5">
                                <img src="/photos/collact%20images/Customer%20Management%202.png" alt="Customer Management tools" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-8 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-3">Customer Management</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Select customers, check their eligibility for payment follow-up, and schedule collection calls directly from a single, organized list.</p>
                            </div>
                        </div>

                        {/* Dashboard Feature 4 */}
                        <div className="bg-[#172544] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#d9314f]/50 transition-colors flex flex-col">
                            <div className="w-full aspect-video bg-[#0c1322] relative border-b border-white/5">
                                <img src="/photos/collact%20images/Escalation%20Management%202.png" alt="Escalation Management view" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-8 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-3">Escalation Management</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Automatically route disputed or negative responses to an escalation list, so sensitive situations can be reviewed and handled appropriately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6th Section: Bottom CTA */}
            < section className="bg-white py-24 text-center" >
                <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0f213b] tracking-tight leading-tight">
                        Built for Service Businesses That<br className="hidden md:block" />
                        Take Cash Flow <span className="text-[#d9314f]">Seriously.</span>
                    </h2>

                    <p className="text-gray-500 mb-10 font-medium text-sm md:text-[15px]">
                        HVAC. Plumbing. Electrical. Fire Protection. B2B Service Companies using QuickBooks.
                    </p>

                    <Button
                        size="lg"
                        className="bg-[#d9304f] hover:bg-red-700 text-white px-10 h-14 rounded-lg font-bold text-base shadow-lg shadow-red-500/20 mb-8 w-fit"
                        onClick={openHubSpotForm}
                    >
                        Book a Live Demo
                    </Button>

                    <p className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-wide">
                        Designed specifically for QuickBooks users who want structured, automated AR execution.
                    </p>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default ClaraCollectsNew;
