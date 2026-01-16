import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const ElectricalCollectsStaffShortage = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    const handleTryClara = () => {
        window.location.href = "tel:+14059136009";
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Automated Collections for Electrical | Clara AI</title>
                <meta name="description" content="Collect payments without a collections team. Clara's AI handles invoice follow-ups for electrical businesses, solving staff shortages." />
            </Helmet>

            <Navigation />

            {/* HERO SECTION */}
            <RevealOnScroll>
                <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                            <span>Solutions</span>
                            <span>/</span>
                            <span>Collects</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Electrical</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Staff Shortage</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#7C3AED] text-white rounded-full text-sm font-bold shadow-sm">
                                <DollarSign className="w-4 h-4 fill-white" />
                                Clara Collects
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                Electrical
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                Staff Shortage
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Collect payments without a <br />
                                collections team
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                You don't need to hire more office staff to get paid. Clara automates the entire
                                follow-up process, acting as a tireless collections agent that never takes a day off.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                    Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" className="px-8 py-6 rounded-full text-lg font-semibold border-2 border-red-100 text-[#D32F2F] hover:bg-red-50 hover:border-[#D32F2F] hover:text-black transition-all">
                                    Try Clara Live
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* WHY THIS EXISTS */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-8">
                            <Zap className="w-4 h-4" /> Why This Exists
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Hiring admin staff is hard</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">Good help is hard to find.</span> Finding reliable office staff who can handle collections professionally is a challenge in this labor market.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Collections is a full-time job.</span> Chasing down hundreds of invoices takes hours every day. Your current staff is already overwhelmed with scheduling and dispatching.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Overhead kills profits.</span> Adding another salary, benefits, and desk space just to collect money you've already earned hurts your bottom line.
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#7C3AED]">Clara Collects</span> is the perfect solution. She does the work of a full-time collections agent for a fraction of the cost, with zero management required.
                            </p>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* HOW CLARA SOLVES IT */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Zap className="w-4 h-4" /> How Clara Solves It
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Your AI Collections Agent</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Automated, persistent, and polite.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: FileText,
                                    title: "Job Done, Invoice Sent",
                                    description: "Your techs finish the work. The invoice goes out. Clara is already watching."
                                },
                                {
                                    step: "2",
                                    icon: Clock,
                                    title: "Clara handles the follow-up",
                                    description: "No human needs to remember to call. Clara sends emails and texts automatically based on the schedule you set."
                                },
                                {
                                    step: "3",
                                    icon: DollarSign,
                                    title: "Payment arrives without effort",
                                    description: "The money hits your account. Your staff didn't have to lift a finger or make an awkward call."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-[#7C3AED] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                                            {item.step}
                                        </div>
                                        <item.icon className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* WHAT YOU GET */}
            <RevealOnScroll>
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Check className="w-4 h-4" /> What You Get
                            </div>
                            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
                            <p className="text-muted-foreground">A lean, efficient office.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Zero hiring needed",
                                    description: "Scale your revenue without adding headcount."
                                },
                                {
                                    title: "Staff focus on service",
                                    description: "Let your team handle customers, not invoices."
                                },
                                {
                                    title: "Consistent process",
                                    description: "Every invoice gets the same professional treatment."
                                },
                                {
                                    title: "Lower overhead",
                                    description: "Save $40k-$60k/year on a collections salary."
                                },
                                {
                                    title: "Faster payments",
                                    description: "Automated nudges work better than sporadic calls."
                                },
                                {
                                    title: "24/7 operation",
                                    description: "Clara works weekends and holidays."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-4 shrink-0">
                                        <Check className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* REAL WORLD USE CASE */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Clock className="w-4 h-4" /> Real-World Use Case
                            </div>
                            <h2 className="text-4xl font-bold">Real-World Use Case</h2>
                        </div>

                        <div className="space-y-8">
                            {/* Scenario Box */}
                            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                                <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
                                    "Your office manager, Sarah, is drowning. She's answering phones, scheduling techs, and trying to handle payroll. She hasn't looked at the aging report in three weeks."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: Invoices slip through the cracks. Customers forget to pay. You have to ask Sarah to stay late to make calls, which she hates. Morale drops, and cash flow stalls.
                                    </p>
                                </div>

                                <div className="p-8 bg-purple-50/50 rounded-2xl border border-purple-100">
                                    <div className="flex items-center gap-2 mb-4 text-purple-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: You connect Clara to your accounting software. She starts emailing overdue accounts immediately. Sarah breathes a sigh of relief and goes back to helping customers.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100">
                                <div className="flex items-center gap-2 mb-4 text-[#7C3AED] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    You get paid, Sarah is happy, and you didn't have to hire anyone new.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* WHY THIS WORKS FOR ELECTRICAL */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Shield className="w-4 h-4" /> Why This Works for Electrical
                            </div>
                            <h2 className="text-4xl font-bold">Why This Works for Electrical</h2>
                        </div>

                        <div className="space-y-4 mb-12">
                            {[
                                "High volume of service calls means lots of small invoices to track",
                                "Electricians are expensive; you can't afford to have them doing admin work",
                                "Automated systems don't get tired, sick, or burned out"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mr-6 shrink-0 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-lg text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Clara Collects is the force multiplier your electrical business needs.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve staff shortage for your electrical business
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Get a personalized demo showing exactly how Clara Collects works for companies like yours.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                Book a Growth Strategy Demo <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button onClick={handleTryClara} variant="outline" className="px-8 py-6 rounded-full text-lg font-semibold border-2 border-red-100 text-[#D32F2F] hover:bg-red-50 hover:border-[#D32F2F] hover:text-black transition-all">
                                Try Clara Live
                            </Button>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* RELATED SOLUTIONS */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold">Related Solutions</h2>
                            <p className="text-muted-foreground mt-4">Explore how else Clara can help your business.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-[#7C3AED] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Collects</span>
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Electrical</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Get paid faster without chasing invoices</h3>
                                    <p className="text-purple-100 text-sm mb-8">Automated follow-ups that turn completed jobs into cash.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-purple-200">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#10B981] p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Field Co-Pilot</span>
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Electrical</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Your First & Second year helpers Verified</h3>
                                    <p className="text-green-100 text-sm mb-8">Ensure your junior electricians are doing the job right.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-green-200">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#0A1A2F] p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">Front Office</span>
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">Electrical</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Code inspections without slowing down</h3>
                                    <p className="text-gray-400 text-sm mb-8">Instant NEC code answers for your team.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-green-400">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* FINAL CTA */}
            <div className="bg-black text-white py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Collects in action for electrical teams?</h2>
                <p className="text-gray-400 mb-12">Book a demo and see how we can help you scale.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold">
                        Book a Free Demo
                    </Button>
                    <Button onClick={handleTryClara} variant="outline" className="px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full text-lg font-semibold">
                        Talk to Sales
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ElectricalCollectsStaffShortage;
