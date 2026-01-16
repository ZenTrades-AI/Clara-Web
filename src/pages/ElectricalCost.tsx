import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, Phone } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const ElectricalCost = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };



    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Reduce Electrical Call Handling Costs | Clara AI</title>
                <meta name="description" content="Reduce call center costs by 60% for your electrical business. Clara's AI receptionist handles routine calls so your team focuses on high-value work." />
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
                            <span>Answers</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Electrical</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Cost Optimization</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2563EB] text-white rounded-full text-sm font-bold shadow-sm">
                                <Phone className="w-4 h-4 fill-white" />
                                Clara Answers
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                Electrical
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                Cost Optimization
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Reduce call handling costs for <br />
                                electrical businesses
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Stop paying humans to answer routine questions. Clara handles scheduling, dispatch, and inquiries
                                at a fraction of the cost of a traditional call center.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                    Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Electrical CSRs are expensive</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">Hiring good office staff is hard and costly.</span> Salaries, benefits, training, and turnover add up fast. And they can only handle one call at a time.
                            </p>
                            <p>
                                Paying a human to tell a customer "we'll be there between 8 and 12" is a waste of money.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Outsourced call centers are cheaper but worse.</span> They mispronounce your name, book the wrong jobs, and frustrate your customers.
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#2563EB]">Clara Answers</span> is the perfect middle ground. She costs less than an offshore agent but performs like your best in-house CSR.
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
                            <h2 className="text-4xl font-bold mb-4">Automation That Feels Human</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Cut costs without cutting quality.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: Phone,
                                    title: "Handles the routine",
                                    description: "Clara takes care of scheduling, confirmations, and general inquiries automatically. Your staff only touches the complex stuff."
                                },
                                {
                                    step: "2",
                                    icon: Shield,
                                    title: "Scales without cost",
                                    description: "Whether you get 10 calls or 100 calls a day, your cost per call goes down. No overtime pay, no benefits."
                                },
                                {
                                    step: "3",
                                    icon: TrendingUp,
                                    title: "You save massive overhead",
                                    description: "Replace your after-hours answering service and reduce your daytime staffing needs. The savings go straight to your bottom line."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-[#2563EB] text-white rounded-xl flex items-center justify-center font-bold text-lg">
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
                            <p className="text-muted-foreground">Lower overhead, higher margins.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "60% cost reduction",
                                    description: "Compared to traditional answering services."
                                },
                                {
                                    title: "Zero training costs",
                                    description: "Clara comes ready to work."
                                },
                                {
                                    title: "No turnover",
                                    description: "Stop the endless hiring cycle."
                                },
                                {
                                    title: "Consistent quality",
                                    description: "Every customer gets the A-team experience."
                                },
                                {
                                    title: "24/7 availability",
                                    description: "Included in the base price."
                                },
                                {
                                    title: "Instant ROI",
                                    description: "Pays for itself in the first week."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                                        <Check className="w-5 h-5 text-blue-600" />
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
                                    "You're spending $4,000/month on a call center that charges by the minute, plus $50,000/year for an office manager."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: Your overhead is bloated. You're paying for idle time. When it gets busy, you pay even more in overage fees. Your profit margins are thin.
                                    </p>
                                </div>

                                <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: You replace the call center and free up your office manager to do high-value work. Your phone bill drops to a flat monthly fee. Your margins jump immediately.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-2 mb-4 text-[#2563EB] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    You run a leaner, more profitable business.
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
                                "Electrical jobs often involve many small service calls; volume is high",
                                "Margins can be tight; overhead reduction is pure profit",
                                "Scheduling is complex; Clara integrates with your calendar to automate it"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center mr-6 shrink-0 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-lg text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Clara Answers is the most cost-effective employee you'll ever hire.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can sales cost optimization for your electrical business
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Get a personalized demo showing exactly how Clara Answers works for companies like yours.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                Book a Growth Strategy Demo <ArrowRight className="ml-2 w-5 h-5" />
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
                            <div className="bg-[#2563EB] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Answers</span>
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">HVAC</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Answer every call without hiring</h3>
                                    <p className="text-blue-100 text-sm mb-8">AI answers calls, books jobs, and captures details — 24/7.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-blue-200">
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
                                    <h3 className="text-xl font-bold mb-4">Your first AI that actually helps in the field</h3>
                                    <p className="text-green-100 text-sm mb-8">A practical introduction to AI for electrical teams.</p>
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
                                    <h3 className="text-xl font-bold mb-4">Improve quote fix pace with AI</h3>
                                    <p className="text-gray-400 text-sm mb-8">Automate follow-ups and quote generation.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Answers in action for electrical teams?</h2>
                <p className="text-gray-400 mb-12">Book a demo and see how we can help you scale.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold">
                        Book a Free Demo
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ElectricalCost;
