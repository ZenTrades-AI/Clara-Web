import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const FireProtectionCollectsGrowth = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };



    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Fuel Fire Protection Growth | Clara AI</title>
                <meta name="description" content="Fuel fire protection growth with faster payments. Clara's AI automates collections so you can invest in new equipment and hiring." />
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
                            <span className="font-medium text-foreground">Fire Protection</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Growth</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#7C3AED] text-white rounded-full text-sm font-bold shadow-sm">
                                <DollarSign className="w-4 h-4 fill-white" />
                                Clara Collects
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                Fire Protection
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                Growth
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Fuel fire protection growth <br />
                                with faster payments
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Growth eats cash. Clara automates your collections so you have the working capital
                                to bid on bigger jobs, buy new trucks, and hire more techs.
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Fire protection is capital intensive</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">You can't grow if you're waiting on checks.</span> Every day an invoice sits unpaid is a day you can't invest in your business.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Commercial clients are slow payers.</span> Property managers and GCs often stretch payment terms to 60 or 90 days. You need that cash now.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Banks are expensive.</span> Relying on lines of credit to fund payroll while you wait for payments eats into your margins.
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#7C3AED]">Clara Collects</span> accelerates your cash flow. She gets you paid faster, so you can fund your own growth without debt.
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
                            <h2 className="text-4xl font-bold mb-4">Accelerated Cash Flow</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Turn receivables into cash, faster.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: FileText,
                                    title: "Invoice Sent Immediately",
                                    description: "Clara integrates with your system. As soon as the inspection or install is done, the clock starts."
                                },
                                {
                                    step: "2",
                                    icon: Clock,
                                    title: "Clara sends persistent reminders",
                                    description: "She follows up consistently and professionally. She doesn't get 'too busy' to send an email."
                                },
                                {
                                    step: "3",
                                    icon: DollarSign,
                                    title: "Payment arrives WITHOUT excuses",
                                    description: "Your invoices stay at the top of the pile. You get paid weeks earlier than before."
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
                            <p className="text-muted-foreground">Fuel for your business engine.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "40% faster payments",
                                    description: "Drastically reduce your DSO."
                                },
                                {
                                    title: "More working capital",
                                    description: "Cash on hand to invest in growth."
                                },
                                {
                                    title: "Less debt",
                                    description: "Reduce reliance on credit lines."
                                },
                                {
                                    title: "Scalability",
                                    description: "Handle 2x the volume without 2x the admin staff."
                                },
                                {
                                    title: "Professional image",
                                    description: "Consistent communication builds trust."
                                },
                                {
                                    title: "Predictable cash flow",
                                    description: "Know when money is coming in."
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
                                    "You have the opportunity to bid on a massive new apartment complex, but you need to buy $50k in materials upfront."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: You're waiting on $100k in overdue invoices from last month. You have to pass on the bid or take out a high-interest loan.
                                    </p>
                                </div>

                                <div className="p-8 bg-purple-50/50 rounded-2xl border border-purple-100">
                                    <div className="flex items-center gap-2 mb-4 text-purple-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: Those invoices were paid weeks ago. You have the cash in the bank. You bid the job, win it, and keep growing.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100">
                                <div className="flex items-center gap-2 mb-4 text-[#7C3AED] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Your growth is limited only by your ambition, not your cash flow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* WHY THIS WORKS FOR FIRE PROTECTION */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Shield className="w-4 h-4" /> Why This Works for Fire Protection
                            </div>
                            <h2 className="text-4xl font-bold">Why This Works for Fire Protection</h2>
                        </div>

                        <div className="space-y-4 mb-12">
                            {[
                                "Recurring inspection revenue is the lifeblood of growth",
                                "Commercial clients respond well to professional, consistent follow-ups",
                                "Faster cash conversion cycle = faster business scaling"
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
                            Clara Collects turns your AR ledger into a growth engine.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve growth pressure for your fire protection business
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Get a personalized demo showing exactly how Clara Collects works for companies like yours.
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
                            <div className="bg-[#7C3AED] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Collects</span>
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Fire Protection</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Reduce AR aging by 40%</h3>
                                    <p className="text-purple-100 text-sm mb-8">Automated, friendly follow-ups that collect faster.</p>
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
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Fire Protection</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Inspection reports for your entire fleet</h3>
                                    <p className="text-green-100 text-sm mb-8">Standardize reporting across all your technicians.</p>
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
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">Fire Protection</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Code inspections without slowing down</h3>
                                    <p className="text-gray-400 text-sm mb-8">AI assistance for complex code compliance questions.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Collects in action for fire protection teams?</h2>
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

export default FireProtectionCollectsGrowth;
