import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, FileText, Bell, DollarSign, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { openHubSpotForm } from "@/utils/hubspotForm";

const RoofCon = () => {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Clara AI for RoofCon | The AI Growth Engine for Roofers</title>
                <meta
                    name="description"
                    content="Clara AI helps roofing companies increase revenue by automating calls, dispatch, reminders, and collections. Built for RoofCon crews."
                />
            </Helmet>

            <Navigation />

            {/* HERO SECTION */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-[#fafafa] to-[#ffecef] overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold mb-6">
                            ROOFCON 2026
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                            Your Best Roofer Just Got Smarter with <span className="text-primary">Clara AI</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Real-time AI guidance, customer handling, and collections — built for roofing crews.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={openHubSpotForm}
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Book a Demo to Watch Clara in Action
                            </Button>
                            <Button
                                variant="outline"
                                asChild
                                className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-black px-6 py-3 rounded-full font-semibold transition-all"
                            >
                                <a href="tel:+14059136009">See How Clara Works on the Job</a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/lovable-uploads/Clara-AI-Smart-Glasses.png"
                            alt="Clara AI Smart Glasses"
                            className="w-[130%] max-w-none h-auto -ml-36 relative z-10"
                        />
                    </div>
                </div>
            </section>

            {/* MEET CLARA AI */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Meet Clara AI</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Clara is an AI operating layer for roofing companies — not just software. Three intelligent agents working together across the job site, customer conversations, and payments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clara Field Co-pilot</h3>
                            <p className="text-red-500 font-medium text-sm mb-4">Your AI teammate on the roof</p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Live job guidance during inspections",
                                    "Hands-free documentation using smart glasses",
                                    "Captures photos, notes, and measurements automatically",
                                    "Keeps crews focused without clicking on a screen"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                                <a href="tel:+14053746516">Watch Demo</a>
                            </Button>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                                <DollarSign className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clara Collects</h3>
                            <p className="text-red-500 font-medium text-sm mb-4">Get paid without chasing</p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Automated invoice follow-ups via text, email, and voice",
                                    "Faster payments without awkward calls",
                                    "Reduces AR aging and write-offs",
                                    "Works quietly in the background"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant="outline"
                                onClick={openHubSpotForm}
                                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-black rounded-full"
                            >
                                See Clara Collects in Action
                            </Button>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                                <Phone className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clara Answers</h3>
                            <p className="text-red-500 font-medium text-sm mb-4">Never miss another call or lead</p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "24/7 call answering for roofing companies",
                                    "Books jobs while competitors are still on the line",
                                    "Captures lead info, urgency, and job details",
                                    "Handles repairs, estimates, and overflow calls"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                                <a href="tel:+14059136009">Book a Demo</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY ROOFING COMPANIES USE CLARA */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Why Roofing Companies Use Clara</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: TrendingUp, title: "Faster inspections", desc: "Without cutting corners" },
                            { icon: FileText, title: "Cleaner documentation", desc: "On every job" },
                            { icon: Bell, title: "Better follow-ups", desc: "More sold estimates" },
                            { icon: Clock, title: "More confident crews", desc: "In the field" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FIRST 30 DAYS STATS */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">What You See in the First 30 Days</h2>
                        <p className="text-slate-600">Real results from roofing contractors using Clara vs. their AI Growth Engine.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: TrendingUp, stat: "+25–30%", label: "More booked jobs", sub: "From the same call volume" },
                            { icon: Clock, stat: "24/7", label: "After-hours coverage", sub: "Without extra hires" },
                            { icon: Check, stat: "Fewer", label: "Repeat truck rolls", sub: "Better data & documentation" },
                            { icon: DollarSign, stat: "40%", label: "Faster payments", sub: "On outstanding invoices" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <item.icon className="w-6 h-6 text-primary mb-4" />
                                <div className="text-4xl font-bold text-slate-900 mb-2">{item.stat}</div>
                                <div className="font-bold text-slate-900 mb-1">{item.label}</div>
                                <div className="text-xs text-slate-500">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BUILT FOR ROOFCON CREWS */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto bg-slate-50 rounded-[3rem] p-8 md:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Built for RoofCon Crews</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Whether you're managing multiple crews, scaling fast, or tightening operations, Clara helps roofing businesses work smarter — on the roof, in the office, and after the job is done.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={openHubSpotForm}
                                    className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
                                >
                                    Book a Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    asChild
                                    className="border-primary text-primary hover:bg-primary/5 hover:text-black px-8 rounded-full"
                                >
                                    <Link to="/solutions">Explore All Solutions</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/lovable-uploads/Clara-AI-Smart-Glasses.png"
                                alt="Clara AI Smart Glasses"
                                className="w-full max-w-2xl h-auto -ml-20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEE CLARA AI LIVE */}
            <section className="py-24 px-6 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">See Clara AI Live</h2>
                    <p className="text-lg text-slate-600 mb-10">
                        Book a demo to watch Clara work across your entire roofing operation.
                    </p>
                    <Button
                        onClick={openHubSpotForm}
                        className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Book a Demo to Watch Clara in Action
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RoofCon;
