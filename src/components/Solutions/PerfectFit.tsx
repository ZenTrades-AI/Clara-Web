import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PerfectFit = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-6 border border-red-100">
                        SOLUTIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Find Your <span className="text-primary">Perfect Fit</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Tailored solutions for every stage of your business growth.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Field Co-Pilot Section */}
                    <div className="space-y-6">
                        {/* Top Row */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Large Main Card */}
                            <RevealOnScroll className="lg:col-span-2 h-full">
                                <Link to="/solutions/roofing-operations" className="block h-full">
                                    <div className="bg-[#0F172A] rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group min-h-[500px] h-full">
                                        {/* Grid Texture */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

                                        <div className="relative z-10">
                                            <div className="flex gap-3 mb-6">
                                                <span className="px-3 py-1 bg-[#10B981] text-white text-xs font-bold rounded-full">Field Co-Pilot</span>
                                                <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                    <span className="w-1 h-1 rounded-full bg-white" /> Roofing
                                                </span>
                                                <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">Growth</span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Scale inspections without slowing crews</h3>
                                            <p className="text-slate-400 text-lg max-w-xl">
                                                Real-time AI guidance that helps roofing teams complete more inspections with zero drop in quality.
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-10">
                                            <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                See It in Action <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                        {/* Abstract bg shape */}
                                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl -mr-20 -mb-20 transition-all duration-500 group-hover:bg-[#10B981]/20" />
                                    </div>
                                </Link>
                            </RevealOnScroll>

                            {/* Right Column Stack */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                {/* Top Small Card */}
                                <RevealOnScroll delay={0.1} className="flex-1">
                                    <Link to="/solutions/roofing-staff-shortage" className="block h-full">
                                        <div className="bg-[#0F172A] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group h-full">
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                            <div className="relative z-10">
                                                <div className="flex gap-2 mb-4 flex-wrap">
                                                    <span className="px-2 py-1 bg-[#10B981] text-white text-[10px] font-bold rounded-full">Field Co-Pilot</span>
                                                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                        <span className="w-1 h-1 rounded-full bg-white" /> Roofing
                                                    </span>
                                                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">Staff Shortage</span>
                                                </div>
                                                <h4 className="text-xl font-bold mb-3">Do more inspections with fewer people</h4>
                                                <p className="text-slate-400 text-sm">
                                                    AI guidance lets less experienced techs perform like veterans, reducing training time.
                                                </p>
                                            </div>
                                            <div className="relative z-10 mt-6">
                                                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                    See How It Works <ArrowRight className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </RevealOnScroll>

                                {/* Bottom Small Card */}
                                <RevealOnScroll delay={0.2} className="flex-1">
                                    <Link to="/solutions/fire-protection-cost" className="block h-full">
                                        <div className="bg-[#0F172A] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group h-full">
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                            <div className="relative z-10">
                                                <div className="flex gap-2 mb-4 flex-wrap">
                                                    <span className="px-2 py-1 bg-[#10B981] text-white text-[10px] font-bold rounded-full">Field Co-Pilot</span>
                                                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                        <span className="w-1 h-1 rounded-full bg-white" /> Fire
                                                    </span>
                                                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">Cost</span>
                                                </div>
                                                <h4 className="text-xl font-bold mb-3">Inspection reports that pass every time</h4>
                                                <p className="text-slate-400 text-sm">
                                                    Guided workflows ensure nothing gets missed during fire safety inspections.
                                                </p>
                                            </div>
                                            <div className="relative z-10 mt-6">
                                                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                    See Inspection Workflows <ArrowRight className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </RevealOnScroll>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Your first AI that actually helps in the field",
                                    desc: "A practical introduction to AI for electrical teams — no complexity, immediate value.",
                                    tags: ["Electrical", "New to AI"],
                                    link: <Link to="/solutions/electrical-new-to-ai" className="hover:underline">Explore for New Users</Link>
                                },
                                {
                                    title: "Faster HVAC diagnostics with AI backup",
                                    desc: "Field Co-Pilot helps technicians troubleshoot faster with real-time guidance.",
                                    tags: ["HVAC", "Growth"],
                                    link: <Link to="/solutions/hvac-growth" className="hover:underline">See HVAC Workflows</Link>
                                },
                                {
                                    title: "Train new plumbers faster with AI guidance",
                                    desc: "Real-time prompts help junior techs perform complex repairs correctly the first time.",
                                    tags: ["Plumbing", "Staff Shortage"],
                                    link: <Link to="/solutions/plumbing-staff-shortage" className="hover:underline">See Plumbing Workflows</Link>
                                }
                            ].map((item, i) => (
                                <RevealOnScroll key={i} delay={i * 0.1} className="h-full">
                                    <div className="bg-[#0F172A] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group min-h-[300px] h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-[#10B981] text-white text-[10px] font-bold rounded-full">Field Co-Pilot</span>
                                                {item.tags.map((tag, t) => (
                                                    <span key={t} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                        {t === 0 && <span className="w-1 h-1 rounded-full bg-white" />} {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                            <p className="text-slate-400 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                {item.link} <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>

                    {/* Clara Answers Section */}
                    <div className="space-y-6">
                        {/* Top Row */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Large Main Card */}
                            <RevealOnScroll className="lg:col-span-2 h-full">
                                <div className="bg-[#2563EB] rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group min-h-[500px] h-full">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                    <div className="relative z-10">
                                        <div className="flex gap-3 mb-6">
                                            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">Answers</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <span className="w-1 h-1 rounded-full bg-white" /> HVAC
                                            </span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">Staff Shortage</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Answer every call without hiring</h3>
                                        <p className="text-blue-100 text-lg max-w-xl mb-8">
                                            AI answers calls, books jobs, and captures details — 24/7.
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold backdrop-blur-sm">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            100% call answer
                                        </div>
                                    </div>
                                    <div className="relative z-10 mt-10">
                                        <Link to="/solutions/hvac-answers" className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                            Hear Clara Answer <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mb-20 transition-all duration-500 group-hover:bg-white/20" />
                                </div>
                            </RevealOnScroll>

                            {/* Right Column Stack */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                {/* Top Small Card */}
                                <RevealOnScroll delay={0.1} className="flex-1">
                                    <div className="bg-[#2563EB] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full">Answers</span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                    <span className="w-1 h-1 rounded-full bg-white" /> Plumbing
                                                </span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">Growth</span>
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">Capture more emergency calls</h4>
                                            <p className="text-blue-100 text-sm">
                                                Never lose a water heater emergency or backup call to voicemail again.
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <Link to="/solutions/plumbing-answers" className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                See Clara Handle Calls <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </RevealOnScroll>

                                {/* Bottom Small Card */}
                                <RevealOnScroll delay={0.2} className="flex-1">
                                    <div className="bg-[#2563EB] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full">Answers</span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                    <span className="w-1 h-1 rounded-full bg-white" /> Fire
                                                </span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">New to AI</span>
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">Start with 24/7 call coverage</h4>
                                            <p className="text-blue-100 text-sm">
                                                The easiest AI to adopt — answers calls professionally while you evaluate the technology.
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <Link to="/solutions/fire-protection-answers" className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                Start with Answers <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Reduce call center costs by 60%",
                                    desc: "Clara handles routine calls so your team focuses on complex jobs.",
                                    tags: ["Electrical", "Cost"],
                                    link: <Link to="/solutions/electrical-cost" className="hover:underline">See Cost Savings</Link>
                                },
                                {
                                    title: "Never miss a storm call again",
                                    desc: "When storms hit and call volume spikes, Clara handles the overflow automatically.",
                                    tags: ["Roofing", "Staff Shortage"],
                                    link: <Link to="/solutions/roofing-answers" className="hover:underline">See Surge Handling</Link>
                                },
                                {
                                    title: "Book more HVAC jobs while you sleep",
                                    desc: "After-hours calls convert just as well as daytime with Clara answering.",
                                    tags: ["HVAC", "Growth"],
                                    link: <Link to="/solutions/hvac-after-hours" className="hover:underline">See After-Hours Magic</Link>
                                }
                            ].map((item, i) => (
                                <RevealOnScroll key={i} delay={i * 0.1} className="h-full">
                                    <div className="bg-[#2563EB] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group min-h-[300px] h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full">Answers</span>
                                                {item.tags.map((tag, t) => (
                                                    <span key={t} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                        {t === 0 && <span className="w-1 h-1 rounded-full bg-white" />} {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                            <p className="text-blue-100 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                {item.link} <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>

                    {/* Clara Collects Section */}
                    <div className="space-y-6">
                        {/* Top Row */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Large Main Card */}
                            <RevealOnScroll className="lg:col-span-2 h-full">
                                <div className="bg-[#7C3AED] rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group min-h-[500px] h-full">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                    <div className="relative z-10">
                                        <div className="flex gap-3 mb-6">
                                            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">Collects</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <span className="w-1 h-1 rounded-full bg-white" /> Fire
                                            </span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">Cost</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Get paid faster without chasing invoices</h3>
                                        <p className="text-purple-100 text-lg max-w-xl mb-8">
                                            Automated follow-ups that turn completed jobs into cash.
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold backdrop-blur-sm">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            40% faster payments
                                        </div>
                                    </div>
                                    <div className="relative z-10 mt-10">
                                        <Link to="/solutions/fire-protection-collects-cost" className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                            See How Payments Work <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mb-20 transition-all duration-500 group-hover:bg-white/20" />
                                </div>
                            </RevealOnScroll>

                            {/* Right Column Stack */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                {/* Top Small Card */}
                                <RevealOnScroll delay={0.1} className="flex-1">
                                    <div className="bg-[#7C3AED] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full">Collects</span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                    <span className="w-1 h-1 rounded-full bg-white" /> HVAC
                                                </span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">Cost</span>
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">Reduce AR aging by 40%</h4>
                                            <p className="text-purple-100 text-sm">
                                                Automated, friendly follow-ups that collect faster without awkward conversations.
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <Link to="/solutions/hvac-collects-cost" className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                See Collection Workflows <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </RevealOnScroll>

                                {/* Bottom Small Card */}
                                <RevealOnScroll delay={0.2} className="flex-1">
                                    <div className="bg-[#7C3AED] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full">Collects</span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                    <span className="w-1 h-1 rounded-full bg-white" /> Plumbing
                                                </span>
                                                <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">New to AI</span>
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">Automate collections without the hassle</h4>
                                            <p className="text-purple-100 text-sm">
                                                A gentle introduction to AI — just let Clara handle the follow-ups.
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <Link to="/solutions/plumbing-collects-new-to-ai" className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                Start Collecting Faster <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Fund your growth with faster cash",
                                    desc: "Faster payments mean more working capital to take on bigger projects.",
                                    tags: ["Roofing", "Growth"],
                                    link: <Link to="/solutions/roofing-collects-growth" className="hover:underline">See Cash Flow Impact</Link>
                                },
                                {
                                    title: "Collect without a collections team",
                                    desc: "Clara handles all payment follow-ups so your office staff can focus on customers.",
                                    tags: ["Electrical", "Staff Shortage"],
                                    link: <Link to="/solutions/electrical-collects-staff-shortage" className="hover:underline">See Automated Collections</Link>
                                },
                                {
                                    title: "Improve cash flow for fire protection growth",
                                    desc: "Collect faster from commercial clients with persistent, professional follow-ups.",
                                    tags: ["Fire", "Growth"],
                                    link: <Link to="/solutions/fire-protection-collects-growth" className="hover:underline">See Commercial Flows</Link>
                                }
                            ].map((item, i) => (
                                <RevealOnScroll key={i} delay={i * 0.1} className="h-full">
                                    <div className="bg-[#7C3AED] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group min-h-[300px] h-full">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                <span className="px-2 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full">Collects</span>
                                                {item.tags.map((tag, t) => (
                                                    <span key={t} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                                                        {t === 0 && <span className="w-1 h-1 rounded-full bg-white" />} {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                            <p className="text-purple-100 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-6">
                                            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all cursor-pointer">
                                                {item.link} <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfectFit;
