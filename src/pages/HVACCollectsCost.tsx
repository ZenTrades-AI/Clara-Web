import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Play, FileText, Users, TrendingUp, Shield, Clock, Zap, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Link } from "react-router-dom";

import { openHubSpotForm } from "@/utils/hubspotForm";

const HVACCollectsCost = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };



    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Reduce HVAC AR Aging & Collection Costs | Clara AI</title>
                <meta name="description" content="Reduce AR aging and collection costs in HVAC. Clara's AI automates invoice follow-ups, getting you paid faster without the overhead." />
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
                            <span className="font-medium text-foreground">HVAC</span>
                            <span>/</span>
                            <span className="font-medium text-foreground">Cost Optimization</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#7C3AED] text-white rounded-full text-sm font-bold shadow-sm">
                                <DollarSign className="w-4 h-4 fill-white" />
                                Clara Collects
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                HVAC
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                Cost Optimization
                            </span>
                        </div>

                        <div className="max-w-6xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                                Reduce AR aging and collection <br />
                                costs in HVAC
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Commercial clients are slow to pay. Clara automates the follow-up process, reducing your
                                Days Sales Outstanding (DSO) and eliminating the need for a dedicated collections team.
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">HVAC companies carry too much debt</h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed text-left">
                            <p>
                                <span className="font-bold text-foreground">Commercial contracts are great, but payment is slow.</span> Property managers juggle a dozen vendors. If you aren't squeaky, you don't get the grease (payment).
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Collections staff is overhead you don't need.</span> Paying someone $50k a year to send emails and make polite phone calls is a drain on your profits.
                            </p>
                            <p>
                                <span className="font-bold text-foreground">Cash flow gaps stall your growth.</span> You can't hire more techs or buy new trucks if you're waiting 60 days for payment on a chiller replacement.
                            </p>
                            <p>
                                That's why <span className="font-bold text-[#7C3AED]">Clara Collects</span> is your automated AR department. She ensures you get paid on time, every time, for a fraction of the cost of a human.
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
                            <h2 className="text-4xl font-bold mb-4">Automated AR That Works</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Consistent follow-ups that get results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    icon: FileText,
                                    title: "Invoice Sent Automatically",
                                    description: "Clara integrates with your accounting software. As soon as a job is closed, the invoice is queued and tracked."
                                },
                                {
                                    step: "2",
                                    icon: Clock,
                                    title: "Clara sends friendly reminders",
                                    description: "She sends personalized emails and texts at set intervals. 'Hi [Name], just a friendly reminder about invoice #1234.'"
                                },
                                {
                                    step: "3",
                                    icon: DollarSign,
                                    title: "Payment arrives WITHOUT awkwardness",
                                    description: "Clients appreciate the reminder. You get paid faster. No one has to have a tense phone call."
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
                            <p className="text-muted-foreground">More cash, less stress.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "40% faster payments",
                                    description: "Reduce your average DSO significantly."
                                },
                                {
                                    title: "Lower overhead",
                                    description: "Eliminate the need for a collections role."
                                },
                                {
                                    title: "Better cash flow",
                                    description: "Fund your operations without loans."
                                },
                                {
                                    title: "Client retention",
                                    description: "Professional, consistent communication."
                                },
                                {
                                    title: "Full visibility",
                                    description: "Dashboard shows exactly who owes what."
                                },
                                {
                                    title: "Scalable process",
                                    description: "Handles 10 invoices or 10,000 equally well."
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
                                    "Your AR aging report shows $150k over 90 days. You're thinking about hiring a collections agency that will take 30%."
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                                        <X className="w-5 h-5" /> Before Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Before Clara: You lose 30% of your revenue to a collections agency, or you write it off as bad debt. Your cash flow suffers, and you stress about payroll.
                                    </p>
                                </div>

                                <div className="p-8 bg-purple-50/50 rounded-2xl border border-purple-100">
                                    <div className="flex items-center gap-2 mb-4 text-purple-700 font-bold">
                                        <Check className="w-5 h-5" /> With Clara
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        With Clara: You recover the money yourself for pennies on the dollar. The automated reminders nudge the client to pay. You keep 100% of the revenue.
                                    </p>
                                </div>
                            </div>

                            {/* Result Box */}
                            <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100">
                                <div className="flex items-center gap-2 mb-4 text-[#7C3AED] font-bold">
                                    <TrendingUp className="w-5 h-5" /> The Result
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    You stabilize your cash flow and protect your margins.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* WHY THIS WORKS FOR HVAC */}
            <RevealOnScroll>
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
                                "Commercial HVAC work is high-ticket; late payments hurt",
                                "Property managers need frequent nudges to process invoices",
                                "Automated reminders look professional, not desperate"
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
                            Clara Collects is the smartest way to manage HVAC accounts receivable.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            See how Clara can solve cost optimization for your hvac business
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
                                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">HVAC</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Faster HVAC diagnostics with AI backup</h3>
                                    <p className="text-green-100 text-sm mb-8">Field Co-Pilot helps technicians troubleshoot faster.</p>
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
                                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs font-bold rounded">HVAC</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Expand your service area for free</h3>
                                    <p className="text-gray-400 text-sm mb-8">Take jobs further away without adding overhead.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see Clara Collects in action for hvac teams?</h2>
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

export default HVACCollectsCost;
