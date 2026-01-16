import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, Glasses } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const RoofingOperations = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Scale Roofing Operations | Clara AI</title>
                <meta name="description" content="Scale your roofing operations without increasing headcount using Clara's Field Co-Pilot." />
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
                            <span className="font-medium text-foreground">Roofing</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Growth Pressure</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#10B981] text-white rounded-full text-sm font-bold shadow-sm">
                                <Glasses className="w-4 h-4 fill-white" />
                                Clara Field Co-Pilot
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <TrendingUp className="w-4 h-4" />
                                Roofing
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                Growth Pressure
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Scale roofing operations without <br />
                                scaling headcount
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Clara provides real-time guidance, hands-free documentation, and automated
                                reporting — helping roofing companies solve fast-growing companies that don't
                                automate hit a ceiling. AI lets you scale operations without linear headcount growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={handleBookDemo} className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                    Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" className="px-8 py-6 rounded-full text-lg font-semibold border-2 border-red-100 text-[#D32F2F] hover:bg-red-50 hover:border-[#D32F2F] hover:text-black transition-all">
                                    See Related Solutions
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
                            <Zap className="w-4 h-4" /> Understanding the Challenge
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Why This Exists</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">Roofing</span> companies facing <span className="font-bold text-foreground">growth pressure</span> know the problem intimately: Growth creates operational
                                chaos — more calls, more jobs, more complexity. Systems that worked at $2M break at $5M.
                            </p>
                            <p>
                                Companies add staff, layer on software, and hope processes scale. Managers spend more time
                                firefighting than growing. But here's why that fails: Adding people doesn't fix process problems — it just
                                adds cost. More software creates more silos and training overhead.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Roofing companies live and die by lead response time — especially after storms when call volume
                                    explodes.</span>
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#D32F2F]">Clara Field Co-Pilot</span> was built — to operate <span className="italic">inside</span> your workflow, not after the fact. Real-time
                                guidance while your team works, not reports they have to fill out later.
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
                                <Zap className="w-4 h-4" /> The Workflow
                            </div>
                            <h2 className="text-4xl font-bold mb-4">How Clara Solves It</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A simple three-step workflow that runs automatically — no manual intervention required.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: Users,
                                    title: "Technician arrives on-site",
                                    description: "Your crews puts on smart glasses and starts the inspection. Clara immediately recognizes the job type, pulls up relevant checklists, and begins hands-free capture."
                                },
                                {
                                    step: "2",
                                    icon: Shield,
                                    title: "Clara guides and documents",
                                    description: "As your tech works, Clara provides real-time prompts — reminding them of required photos, code checks, and documentation. Every image, note, and measurement is captured automatically without touching a phone."
                                },
                                {
                                    step: "3",
                                    icon: TrendingUp,
                                    title: "Clean data flows to your systems",
                                    description: "When the job is done, structured reports are already generated. Data syncs to your CRM, photos are organized, and customers can receive professional documentation within minutes — not days."
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
            </RevealOnScroll >

            {/* WHAT YOU GET */}
            < RevealOnScroll >
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Check className="w-4 h-4" /> Outcomes, Not Features
                            </div>
                            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
                            <p className="text-muted-foreground">Real results that roofing teams see after deploying Clara.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "2x faster inspections",
                                    description: "Complete more jobs per day without rushing quality."
                                },
                                {
                                    title: "Zero missed steps",
                                    description: "Guided workflows ensure every requirement is captured."
                                },
                                {
                                    title: "Instant documentation",
                                    description: "Reports generate automatically as techs work."
                                },
                                {
                                    title: "Faster onboarding",
                                    description: "New hires perform like veterans with AI guidance."
                                },
                                {
                                    title: "CRM sync complete",
                                    description: "Data flows to your systems without manual entry."
                                },
                                {
                                    title: "Customer confidence",
                                    description: "Professional reports build trust and referrals."
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
            </RevealOnScroll >

            {/* REAL WORLD USE CASE */}
            < RevealOnScroll >
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Clock className="w-4 h-4" /> A Day in the Life
                            </div>
                            <h2 className="text-4xl font-bold">Real-World Use Case</h2>
                        </div>

                        <div className="space-y-8">
                            {/* Scenario Box */}
                            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                                <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
                                    "Imagine a roofing technician arriving for roof inspections. It's a complex job with multiple
                                    checkpoints, and the customer expects detailed documentation for their records."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: The tech fumbles with their phone between tasks, forgets to capture a required
                                        photo, and spends 20 minutes writing notes in the truck. The report goes out days later — incomplete
                                        and hard to read.
                                    </p>
                                </div>

                                <div className="p-8 bg-green-50/50 rounded-2xl border border-green-100">
                                    <div className="flex items-center gap-2 mb-4 text-green-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: The tech works hands-free with smart glasses. Clara prompts each required capture,
                                        validates photo quality, and transcribes verbal notes. When the job ends, documentation is
                                        already complete.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                                <div className="flex items-center gap-2 mb-4 text-[#D32F2F] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    The customer receives a professional report within hours. The technician completes the job 40% faster. And
                                    your office staff never had to chase down missing information.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll >

            {/* WHY THIS WORKS FOR ROOFING */}
            < RevealOnScroll >
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#D32F2F] font-bold text-sm rounded-full mb-6">
                                <Shield className="w-4 h-4" /> Industry Fit
                            </div>
                            <h2 className="text-4xl font-bold">Why This Works for Roofing</h2>
                        </div>

                        <div className="space-y-4 mb-12">
                            {[
                                "Roof inspections happen in conditions where phones are impractical — hands-free is essential",
                                "Insurance documentation requires specific photo angles and damage classifications",
                                "Storm response speed depends on inspection throughput — faster means more jobs captured"
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
                            Generic AI tools fail because they don't understand the nuances of roofing work. Clara was <span className="font-bold text-foreground">purpose-built for service trades</span>.
                        </p>
                    </div>
                </section>
            </RevealOnScroll >

            {/* CTA */}
            < RevealOnScroll >
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve growth pressure for your roofing business
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Get a personalized demo showing exactly how Clara Field Co-Pilot works for companies like yours.
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
                            <div className="bg-blue-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded">Clara Live</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Get a custom agency-grade website</h3>
                                    <p className="text-blue-100 text-sm mb-8">Stop losing leads to bad design. Get a high-converting site in weeks.</p>
                                    <Button variant="link" className="text-white p-0 h-auto hover:text-blue-200">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Field Co-Pilot in action for roofing teams?</h2>
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

export default RoofingOperations;
