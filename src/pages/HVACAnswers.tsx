import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, Phone } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const HVACAnswers = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>AI Answering Service for HVAC | Clara AI</title>
                <meta name="description" content="Answer every HVAC call without hiring. Clara's AI receptionist books jobs, answers questions, and integrates with your CRM 24/7." />
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
                            <span className="font-medium text-foreground">HVAC</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Call Answering</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2563EB] text-white rounded-full text-sm font-bold shadow-sm">
                                <Phone className="w-4 h-4 fill-white" />
                                Clara Answers
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                HVAC
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                24/7 Coverage
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Answer every HVAC call without <br />
                                hiring
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Missed calls are missed revenue. Clara answers every call instantly, books appointments directly
                                into your calendar, and never calls in sick.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                    Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div >
                    </div >
                </section >
            </RevealOnScroll >

            {/* WHY THIS EXISTS */}
            < RevealOnScroll >
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-8">
                            <Zap className="w-4 h-4" /> Why This Exists
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">HVAC companies lose 30% of calls</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">During peak season, your phone rings off the hook.</span> Your CSRs are overwhelmed, and calls go to voicemail. Customers don't leave voicemails; they call the next guy on Google.
                            </p>
                            <p>
                                Hiring more staff for a few busy months is a nightmare. Training takes time, and then you have to lay them off when it slows down.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Answering services are terrible.</span> They don't know your business, they can't book jobs, and they charge you by the minute to take a message.
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#2563EB]">Clara Answers</span> is built specifically for HVAC. It knows how to troubleshoot, check your availability, and book the job right then and there.
                            </p>
                        </div>
                    </div>
                </section>
            </RevealOnScroll >

            {/* HOW CLARA SOLVES IT */}
            < RevealOnScroll >
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Zap className="w-4 h-4" /> How Clara Solves It
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Your Best CSR, Available 24/7</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                No hold times, no scripts, just natural conversation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: Phone,
                                    title: "Customer calls your number",
                                    description: "Whether it's 2 PM or 2 AM, Clara answers instantly. No 'press 1 for service.' Just a friendly voice ready to help."
                                },
                                {
                                    step: "2",
                                    icon: Shield,
                                    title: "Clara qualifies and books",
                                    description: "Clara asks the right questions: 'Is your AC blowing warm air?' 'How old is the unit?' She checks your ServiceTitan or Housecall Pro schedule and books the appointment."
                                },
                                {
                                    step: "3",
                                    icon: TrendingUp,
                                    title: "You never miss a revenue opportunity",
                                    description: "The job is on your board. The customer is happy. You didn't lift a finger. Clara even handles rescheduling and cancellations."
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
            </RevealOnScroll >

            {/* WHAT YOU GET */}
            < RevealOnScroll >
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Check className="w-4 h-4" /> What You Get
                            </div>
                            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
                            <p className="text-muted-foreground">Capture every lead, day or night.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "100% answer rate",
                                    description: "Never send a customer to voicemail again."
                                },
                                {
                                    title: "24/7 booking",
                                    description: "Fill your schedule while you sleep."
                                },
                                {
                                    title: "Zero hold times",
                                    description: "Handle unlimited concurrent calls instantly."
                                },
                                {
                                    title: "CRM integration",
                                    description: "Works with ServiceTitan, Housecall Pro, and more."
                                },
                                {
                                    title: "Consistent service",
                                    description: "Every customer gets the same professional experience."
                                },
                                {
                                    title: "No staffing headaches",
                                    description: "Scale up for summer without hiring anyone."
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
            </RevealOnScroll >

            {/* REAL WORLD USE CASE */}
            < RevealOnScroll >
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
                                    "It's July 4th weekend. Your on-call tech is asleep. A customer calls at 11 PM because their AC died and they have a newborn baby."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: The call goes to voicemail. The customer panics and calls your competitor. They answer, book the emergency fee job, and you lose a customer for life.
                                    </p>
                                </div>

                                <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: Clara answers instantly. She empathizes with the situation, checks the on-call schedule, and books the emergency visit. She texts the tech the details. The customer feels taken care of immediately.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-2 mb-4 text-[#2563EB] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    You capture high-value emergency work without burning out your staff. Your reputation for reliability grows.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll >

            {/* WHY THIS WORKS FOR HVAC */}
            < RevealOnScroll >
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Shield className="w-4 h-4" /> Why This Works for HVAC
                            </div>
                            <h2 className="text-4xl font-bold">Why This Works for HVAC</h2>
                        </div>

                        <div className="space-y-4 mb-12">
                            {[
                                "HVAC demand is highly seasonal; AI scales instantly up or down",
                                "Emergency service is a key differentiator; 24/7 answering proves it",
                                "Dispatch efficiency is critical; Clara collects all the technical details upfront"
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
                            Clara Answers turns your phone line into a revenue generating machine.
                        </p>
                    </div>
                </section>
            </RevealOnScroll >

            {/* CTA */}
            < RevealOnScroll >
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve staff shortage for your hvac business
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
            </RevealOnScroll >

            {/* RELATED SOLUTIONS */}
            < RevealOnScroll >
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
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Plumbing</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Capture more emergency calls</h3>
                                    <p className="text-blue-100 text-sm mb-8">Never lose a water heater emergency or backup call to voicemail again.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-blue-200">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#0A1A2F] p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">Front Office</span>
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">HVAC</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Scale HVAC operations without hiring</h3>
                                    <p className="text-gray-400 text-sm mb-8">Automate dispatch and customer service to handle more volume.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-green-400">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#0A1A2F] p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">Front Office</span>
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">Plumbing</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Do more service calls with fewer plumbers</h3>
                                    <p className="text-gray-400 text-sm mb-8">Train new hires faster and reduce callbacks with AI guidance.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-green-400">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll >

            {/* FINAL CTA */}
            < div className="bg-black text-white py-24 px-6 text-center" >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Answers in action for hvac teams?</h2>
                <p className="text-gray-400 mb-12">Book a demo and see how we can help you scale.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold">
                        Book a Free Demo
                    </Button>
                </div>
            </div >

            <Footer />
        </div >
    );
};

export default HVACAnswers;
