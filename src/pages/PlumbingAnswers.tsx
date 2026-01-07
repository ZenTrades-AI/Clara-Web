import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, Phone } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const PlumbingAnswers = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    const handleTryClara = () => {
        window.location.href = "tel:+14059136009";
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>24/7 Plumbing Answering Service | Clara AI</title>
                <meta name="description" content="Capture more plumbing jobs while you sleep. Clara's AI receptionist answers calls 24/7, qualifies leads, and books appointments directly." />
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
                            <span className="font-medium text-foreground">Plumbing</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Growth Pressure</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2563EB] text-white rounded-full text-sm font-bold shadow-sm">
                                <Phone className="w-4 h-4 fill-white" />
                                Clara Answers
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                Plumbing
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                Growth Pressure
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Capture more plumbing jobs while <br />
                                you sleep
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                The most profitable plumbing jobs happen when you're not in the office. Clara answers 24/7,
                                qualifies the emergency, and books the job instantly.
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Plumbing emergencies don't watch the clock</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">A burst pipe at 2 AM is a $2,000 job.</span> But if you don't answer the phone, that money goes to your competitor.
                            </p>
                            <p>
                                You can't be awake 24/7, and paying an after-hours answering service is expensive and ineffective. They just take messages; they don't book revenue.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Missed calls are missed growth.</span> Every time a customer hears voicemail, you lose trust and you lose the job.
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#2563EB]">Clara Answers</span> is always on. She handles the late-night panic calls with empathy and efficiency, securing the job so your team can roll out in the morning (or right now).
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
                            <h2 className="text-4xl font-bold mb-4">Always Open for Business</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Turn your phone line into a 24/7 sales engine.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: Phone,
                                    title: "Customer calls your business",
                                    description: "It's late, or you're busy on a job site. Clara picks up immediately. No ringing out, no voicemail."
                                },
                                {
                                    step: "2",
                                    icon: Shield,
                                    title: "Clara confirms the issue",
                                    description: "Clara identifies the problem: 'I understand you have a leak under the sink. Is it actively flooding?' She prioritizes the urgency."
                                },
                                {
                                    step: "3",
                                    icon: TrendingUp,
                                    title: "You have a new job booked",
                                    description: "If it's an emergency, she books your on-call tech. If it can wait, she schedules it for tomorrow morning. You get the notification instantly."
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
                            <p className="text-muted-foreground">More jobs, less stress, higher revenue.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "24/7 lead capture",
                                    description: "Never miss a customer because you're asleep."
                                },
                                {
                                    title: "Full schedule",
                                    description: "Wake up to a calendar full of booked jobs."
                                },
                                {
                                    title: "Zero missed calls",
                                    description: "Every call is answered, every time."
                                },
                                {
                                    title: "Emergency handling",
                                    description: "Prioritize urgent jobs automatically."
                                },
                                {
                                    title: "Complete job details",
                                    description: "Know exactly what the problem is before you go."
                                },
                                {
                                    title: "No agency fees",
                                    description: "Stop paying per minute for bad service."
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
                                    "A homeowner discovers a leak in their basement at 11 PM. They are frantic and start calling plumbers from Google."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: You don't answer. They call the next number. You wake up to a missed call notification and $0 in revenue.
                                    </p>
                                </div>

                                <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: Clara answers instantly, calms the customer down, and books an emergency dispatch. You get the job, the revenue, and a loyal customer who knows you're reliable.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-2 mb-4 text-[#2563EB] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    You capture the high-margin emergency work that builds your business reputation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* WHY THIS WORKS FOR PLUMBING */}
            <RevealOnScroll>
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Shield className="w-4 h-4" /> Why This Works for Plumbing
                            </div>
                            <h2 className="text-4xl font-bold">Why This Works for Plumbing</h2>
                        </div>

                        <div className="space-y-4 mb-12">
                            {[
                                "Plumbing issues are often urgent; speed to answer wins the job",
                                "High average ticket size makes every missed call expensive",
                                "Customers value reliability; being available 24/7 proves it"
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
                            Clara Answers ensures you never leave money on the table.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve growth pressure for your plumbing business
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Get a personalized demo showing exactly how Clara Answers works for companies like yours.
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
                            <div className="bg-[#2563EB] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Answers</span>
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">HVAC</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Answer every HVAC call without hiring</h3>
                                    <p className="text-blue-100 text-sm mb-8">Handle peak season volume and emergency calls automatically.</p>
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
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Plumbing</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Train new plumbers faster with AI guidance</h3>
                                    <p className="text-green-100 text-sm mb-8">Reduce callbacks and help junior techs perform like masters.</p>
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
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">Plumbing</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Catch upsells without chasing techs</h3>
                                    <p className="text-gray-400 text-sm mb-8">Identify revenue opportunities from field notes automatically.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Answers in action for plumbing teams?</h2>
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

export default PlumbingAnswers;
