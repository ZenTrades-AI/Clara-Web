import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, FileText, Bell, DollarSign, TrendingUp, Clock, AlertCircle, Camera, Brain, Database, ArrowRight, Mic, Glasses } from "lucide-react";
import { Link } from "react-router-dom";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";

const RoofCon = () => {
    const handleBookDemo = () => {
        openHubSpotForm();
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Clara AI at RoofCon 2026 | AI Field Co-Pilot for Roofing Crews</title>
                <meta
                    name="description"
                    content="Clara AI at RoofCon 2026 helps roofing companies inspect faster, answer every call, and collect payments automatically. Book a live demo."
                />
            </Helmet>

            <Navigation />

            {/* HERO SECTION */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 bg-gradient-to-br from-white via-[#fafafa] to-[#ffecef] overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold mb-6">
                            ROOFCON 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                            Your Best Roofer Just Got Smarter with <span className="text-primary">Clara AI</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Real-time AI guidance, customer handling, and collections — built for roofing crews.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handleBookDemo}
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Book a Demo to Watch Clara in Action
                            </Button>
                            <ListenToClaraButton className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-black px-6 py-3 rounded-full font-semibold transition-all bg-transparent" />
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/lovable-uploads/Clara-AI-Smart-Glasses.png"
                            alt="Clara AI Smart Glasses"
                            className="w-full md:w-[130%] max-w-none h-auto md:-ml-36 relative z-10"
                        />
                    </div>
                </div>
            </section>

            {/* MEET CLARA AI */}
            <section className="py-12 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Meet Clara AI</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Clara is an AI operating layer for roofing companies — not just software. Three intelligent agents working together across the job site, customer conversations, and payments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-6 md:p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
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
                            <Button onClick={handleBookDemo} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                                Watch Demo
                            </Button>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 md:p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
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
                                onClick={handleBookDemo}
                                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-black rounded-full"
                            >
                                See Clara Collects in Action
                            </Button>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 md:p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
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
                            <Button onClick={handleBookDemo} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FIELD CO-PILOT */}
            <section className="py-12 md:py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">
                            Clara Field Co-Pilot Works Where the Job Happens
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            The smart glasses are not a product — they are an input/output interface that activates Clara's intelligence in the field. Everything flows into Clara: images, audio, context. Everything flows back to the technician: guidance, reminders, workflow intelligence.
                        </p>
                        <p className="text-slate-600 mb-10 leading-relaxed">
                            The software stays in control. The glasses activate it where work happens.
                        </p>

                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Camera className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Hands-free image capture</h3>
                                    <p className="text-sm text-slate-600">
                                        Smart glasses capture documentation without stopping work. No phones, no tablets, no interruptions.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Mic className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Audio context captured automatically</h3>
                                    <p className="text-sm text-slate-600">
                                        With permission, Clara listens to job-site conversations and structures them into actionable notes.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Brain className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Real-time guidance and nudges</h3>
                                    <p className="text-sm text-slate-600">
                                        Procedural reminders, safety checks, and next steps delivered exactly when needed.
                                    </p>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Database className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Data structured automatically</h3>
                                    <p className="text-sm text-slate-600">
                                        Every photo, note, and observation is tagged, mapped, and synced without manual entry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <img
                            src="/lovable-uploads/Clara-AI-Smart-Glasses.png"
                            alt="Clara AI Smart Glasses"
                            className="w-full max-w-lg h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* FROM ROOF TO CRM */}
            <section className="py-12 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">From Roof to CRM — Automatically</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Data captured in the field flows seamlessly into your existing systems without manual entry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-20 h-20 bg-white border-2 border-red-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Camera className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Images Captured</h3>
                            <ArrowRight className="hidden md:block absolute top-10 left-full ml-1 -translate-y-1/2 w-6 h-6 text-slate-400" />
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-20 h-20 bg-white border-2 border-red-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Brain className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Tagged & Structured</h3>
                            <ArrowRight className="hidden md:block absolute top-10 left-full ml-1 -translate-y-1/2 w-6 h-6 text-slate-400" />
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-20 h-20 bg-white border-2 border-red-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <FileText className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Mapped to Job Context</h3>
                            <ArrowRight className="hidden md:block absolute top-10 left-full ml-1 -translate-y-1/2 w-6 h-6 text-slate-400" />
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-20 h-20 bg-white border-2 border-red-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Database className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Synced to Your Systems</h3>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-sm text-slate-500">
                            Works with ServiceTrade, Simpro, BuildOps, Salesforce, and more — no complex integrations required.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY ROOFING COMPANIES USE CLARA */}
            <section className="py-12 md:py-20 px-6 bg-slate-50">
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
            <section className="py-12 md:py-20 px-6 bg-white">
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

            {/* GROWTH ENGINE */}
            <section className="py-12 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">The Clara AI Growth Engine</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Clara Field Co-Pilot is part of a broader system built for trades. AI does not just assist the workflow — it runs it end-to-end.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Glasses className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Field Co-Pilot</h3>
                            <p className="text-slate-600">Executes the job correctly</p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Phone className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Clara Answers</h3>
                            <p className="text-slate-600">Captures demand</p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <DollarSign className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Clara Collects</h3>
                            <p className="text-slate-600">Closes the loop financially</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUILT FOR ROOFCON CREWS */}
            <section className="py-12 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto bg-slate-50 rounded-3xl md:rounded-[3rem] p-8 md:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Built for RoofCon Crews</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Whether you're managing multiple crews, scaling fast, or tightening operations, Clara helps roofing businesses work smarter — on the roof, in the office, and after the job is done.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={handleBookDemo}
                                    className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
                                >
                                    Book a Demo
                                </Button>
                                <ListenToClaraButton className="border-primary text-primary hover:bg-primary/5 hover:text-black px-8 rounded-full bg-transparent border" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/lovable-uploads/Clara-AI-Smart-Glasses.png"
                                alt="Clara AI Smart Glasses"
                                className="w-full max-w-2xl h-auto md:-ml-20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEE CLARA AI LIVE */}
            <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">See Clara AI Live at RoofCon 2026</h2>
                        <p className="text-lg text-slate-600 mb-4">
                            Book a demo to watch Clara work across your entire roofing operation.
                        </p>
                        <p className="text-slate-600 mb-8">
                            Built for crews on the roof. Trusted by teams in the office.
                        </p>
                        <Button
                            onClick={handleBookDemo}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto h-auto whitespace-normal text-center"
                        >
                            Book a Demo to Watch Clara in Action
                        </Button>
                        <ListenToClaraButton className="w-full sm:w-auto bg-transparent border-red-200 text-red-600 border-2 hover:bg-red-50 hover:text-black px-8 py-6 rounded-full text-lg font-semibold h-auto" />
                    </div>
                    <div className="flex justify-center relative">
                        <img
                            src="/lovable-uploads/Clara-AI-Smart-Glasses.png"
                            alt="Clara AI Smart Glasses"
                            className="w-full max-w-lg h-auto drop-shadow-2xl relative z-10"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RoofCon;
