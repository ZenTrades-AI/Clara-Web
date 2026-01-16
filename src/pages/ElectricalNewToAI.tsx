import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, Glasses } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const ElectricalNewToAI = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    const handleTryClara = () => {
        window.location.href = "tel:+14059136009";
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>AI for Electrical Documentation | Clara AI</title>
                <meta name="description" content="Start your AI journey with smarter electrical documentation. Clara's Field Co-Pilot makes it easy for electrical teams to adopt AI." />
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
                            <span>Field Co-Pilot</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Electrical</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">New to AI</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#10B981] text-white rounded-full text-sm font-bold shadow-sm">
                                <Glasses className="w-4 h-4 fill-white" />
                                Clara Field Co-Pilot
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                Electrical
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                New to AI
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Start your AI journey with smarter <br />
                                electrical documentation
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Change is hard, but bad documentation is harder. Clara is the easiest way to introduce AI
                                to your electrical team — no complex training, just instant value.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                    Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" className="px-8 py-6 rounded-full text-lg font-semibold border-2 border-red-100 text-[#D32F2F] hover:bg-red-50 hover:border-[#D32F2F] hover:text-black transition-all">
                                    See Related Solutions
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Overwhelmed by Technology?</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">Electrical</span> contractors are bombarded with new software every day. "All-in-one" platforms that promise everything but deliver confusion. Your electricians want to pull wire, not fight with an iPad.
                            </p>
                            <p>
                                You know AI is the future, but you're afraid of disrupting your current workflow. You've seen other tools gather dust because they were too hard to learn.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">We built Clara for people who hate software.</span>
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#D32F2F]">Clara Field Co-Pilot</span> is different. It's hands-free, voice-activated, and intuitive. It doesn't ask your techs to be data entry clerks; it just helps them do their job better.
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
                            <h2 className="text-4xl font-bold mb-4">Simple by Design</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A tool your team will actually want to use.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: Users,
                                    title: "Tech puts on the glasses",
                                    description: "No login screens, no complex menus. They just put on the smart glasses and Clara wakes up, ready to work."
                                },
                                {
                                    step: "2",
                                    icon: Shield,
                                    title: "Clara speaks and listens",
                                    description: "Your tech talks to Clara like a helper. 'Clara, take a photo of this panel.' 'Clara, note that the breaker is 20 amps.' It's as natural as talking to an apprentice."
                                },
                                {
                                    step: "3",
                                    icon: TrendingUp,
                                    title: "Clean data flows to your systems",
                                    description: "Clara does the typing and organizing in the background. Your office gets a clean, professional report without your tech ever touching a keyboard."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-[#10B981] text-white rounded-xl flex items-center justify-center font-bold text-lg">
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
                            <p className="text-muted-foreground">Tangible benefits from day one.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "100% tech adoption",
                                    description: "So simple, everyone uses it."
                                },
                                {
                                    title: "Better field notes",
                                    description: "Capture details that used to get lost."
                                },
                                {
                                    title: "Reduced admin time",
                                    description: "Stop chasing guys for paperwork."
                                },
                                {
                                    title: "Photo reliability",
                                    description: "Every job documented with clear photos."
                                },
                                {
                                    title: "Safety compliance",
                                    description: "Ensure safety checks are actually done."
                                },
                                {
                                    title: "Future-proof business",
                                    description: "Get ahead of competitors with AI."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4 shrink-0">
                                        <Check className="w-5 h-5 text-green-600" />
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
                                    "Your best electrician is a master at his craft but hates technology. He refuses to use the new iPad app you bought."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: He writes notes on scrap paper and loses them. The office has to call him three times to get the details for the invoice. He threatens to quit if you make him use "another computer thing."
                                    </p>
                                </div>

                                <div className="p-8 bg-green-50/50 rounded-2xl border border-green-100">
                                    <div className="flex items-center gap-2 mb-4 text-green-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: You hand him the glasses. He puts them on and says, "Clara, take a picture." That's it. He does his job, talks to the AI, and feels like Iron Man. The office gets perfect data.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                                <div className="flex items-center gap-2 mb-4 text-[#D32F2F] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    You modernize your operations without alienating your best workers. You get the data you need to grow, and your team gets a tool that actually helps them.
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
                                "Electrical work requires hands to be free for safety and precision",
                                "Detailed documentation is critical for code compliance and liability",
                                "The workforce is aging and resistant to complex new software"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center mr-6 shrink-0 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-lg text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Clara bridges the gap between traditional craftsmanship and modern technology.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve new to ai for your electrical business
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Get a personalized demo showing exactly how Clara Field Co-Pilot works for companies like yours.
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
                            <div className="bg-[#0A1A2F] p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">Front Office</span>
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">HVAC</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Organize dispatch for zero downtime</h3>
                                    <p className="text-gray-400 text-sm mb-8">Keep your techs moving and your customers happy with AI dispatch.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-green-400">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#0A1A2F] p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">Payments</span>
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">Plumbing</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Cut overdue invoices by 50%</h3>
                                    <p className="text-gray-400 text-sm mb-8">Automated collections that get you paid faster without the awkward calls.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-blue-400">
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#2563EB] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Answers</span>
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">Fire</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Switch 24/7 call coverage</h3>
                                    <p className="text-blue-100 text-sm mb-8">The easiest AI to adopt — answers calls professionally while you evaluate.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-blue-200">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Field Co-Pilot in action for electrical teams?</h2>
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

export default ElectricalNewToAI;
