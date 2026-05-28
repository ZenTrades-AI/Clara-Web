import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";

// Case study data
const caseStudiesData: Record<string, any> = {
    "john-owens": {
        title: "John Owens Services",
        industry: "HVAC & Plumbing",
        location: "Texas",
        badge: "+29% Bookings",
        heroMetric: "$31,000",
        heroMetricLabel: "additional revenue in 30 days",
        excerpt: "John Owens Services was missing after-hours calls and losing ready-to-book customers. Clara AI now answers every inquiry, gathers details in real time, and sends post-call summaries + transcripts—turning voicemails into visits and restoring confidence across the team.",
        challenge: "Missing 32% of incoming calls, especially after-hours emergency requests. No visibility into call quality or customer experience. Office staff overwhelmed during peak season.",
        solution: "Clara Answers implemented with full ServiceTitan integration, custom HVAC/plumbing scripts, and 24/7 availability.",
        results: [
            { metric: "100%", label: "call answer rate", before: "68%", after: "100%" },
            { metric: "$31,000", label: "new revenue in 30 days", before: "$0", after: "$31,000" },
            { metric: "+29%", label: "increase in bookings", before: "baseline", after: "+29%" },
            { metric: "24/7", label: "availability", before: "8am-6pm", after: "24/7/365" }
        ],
        timeline: [
            { week: "Week 1", title: "Discovery & Integration", description: "Connected ServiceTitan, configured service types, pricing, and availability rules." },
            { week: "Week 2", title: "Script Training", description: "Trained Clara on HVAC and plumbing terminology, emergency protocols, and booking workflows." },
            { week: "Week 3", title: "Soft Launch", description: "Answered overflow calls during business hours to refine scripts and test integrations." },
            { week: "Week 4", title: "Full Deployment", description: "Activated 24/7 answering. Immediate increase in after-hours bookings and customer satisfaction." }
        ],
        testimonial: {
            quote: "Clara has completely transformed our customer experience. We're answering every call, booking more jobs, and our team can focus on service delivery instead of playing phone tag.",
            name: "Operations Manager",
            company: "John Owens Services"
        }
    },
    "rapid-fire": {
        title: "Rapid Fire Protection",
        industry: "Fire Protection",
        location: "California",
        badge: "Always-On Answering",
        heroMetric: "100%",
        heroMetricLabel: "call answer rate achieved",
        excerpt: "Growth had the owner juggling the office line and risk creating bottlenecks and missed opportunities. Clara AI now answers every inquiry, structured intake for fire inspections and maintenance, and rolls out SMS pulse alerts so the team stays in sync—and on time.",
        challenge: "Owner handling all calls personally, creating bottlenecks. Compliance-critical inspection scheduling was manual and error-prone. No system for tracking follow-ups.",
        solution: "Clara Answers with fire protection compliance workflows, automated inspection scheduling, and SMS alert system for time-sensitive compliance deadlines.",
        results: [
            { metric: "100%", label: "call answer rate", before: "~75%", after: "100%" },
            { metric: "0", label: "missed inspections", before: "2-3/month", after: "0" },
            { metric: "40%", label: "time saved on scheduling", before: "baseline", after: "-40%" },
            { metric: "100%", label: "compliance rate", before: "94%", after: "100%" }
        ],
        timeline: [
            { week: "Week 1", title: "Compliance Mapping", description: "Documented all fire protection services, inspection types, and regulatory requirements." },
            { week: "Week 2", title: "System Integration", description: "Connected scheduling system and configured automated compliance reminders." },
            { week: "Week 3", title: "Training & Testing", description: "Trained Clara on fire protection terminology and compliance protocols." },
            { week: "Week 4", title: "Go Live", description: "Launched with full 24/7 coverage and automated inspection scheduling." }
        ],
        testimonial: {
            quote: "Clara has freed me up to focus on growth instead of answering phones. Our compliance is perfect, customers are happier, and we're scaling without adding overhead.",
            name: "Owner",
            company: "Rapid Fire Protection"
        }
    },
    "apex-residential-solutions": {
        title: "Apex Residential Solutions",
        industry: "HVAC",
        location: "Florida",
        badge: "+225 Leads",
        heroMetric: "835",
        heroMetricLabel: "calls handled in 30 days",
        excerpt: "With seasonal spikes, Apex needed help filtering spam and converting real demand. In 30 days, Clara AI handled high call volume, filtered robocalls, categorized intent, and surfaced qualified opportunities—so the team could focus on customers, not call triage.",
        challenge: "Overwhelmed by seasonal call volume spikes and spam calls. Technicians were wasting time answering robocalls instead of servicing customers. Valid leads were slipping through the cracks due to long hold times.",
        solution: "Clara Answers deployed to screen all incoming calls, filter out spam, and qualify leads before routing them to the sales team. 24/7 availability ensured no opportunity was missed.",
        results: [
            { metric: "835", label: "calls handled", before: "manual triage", after: "automated" },
            { metric: "27%", label: "lead conversion rate", before: "15%", after: "27%" },
            { metric: "95%", label: "spam filtered", before: "0%", after: "95%" },
            { metric: "24/7", label: "availability", before: "9am-5pm", after: "24/7" }
        ],
        timeline: [
            { week: "Week 1", title: "Call Analysis", description: "Analyzed call logs to identify spam patterns and common customer inquiries." },
            { week: "Week 2", title: "Script & Logic Setup", description: "Configured Clara to screen calls, identify intent, and route valid leads to the appropriate team." },
            { week: "Week 3", title: "Integration Testing", description: "Connected with CRM to automatically log qualified leads and schedule appointments." },
            { week: "Week 4", title: "Live Rollout", description: "Full deployment handling 100% of inbound calls. Immediate reduction in spam reaching the office." }
        ],
        testimonial: {
            quote: "We used to drown in spam calls during peak season. Now, Clara filters everything out and only sends us the people who actually need help. Our booking rate has never been higher.",
            name: "General Manager",
            company: "Apex Residential Solutions"
        }
    }
};

const CaseStudyDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const study = slug ? caseStudiesData[slug] : null;

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
                    <Link to="/case-studies" className="text-primary hover:underline">
                        ← Back to Case Studies
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{study.title} Case Study | Clara AI</title>
                <meta name="description" content={study.excerpt} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CaseStudy",
                        "name": study.title,
                        "description": study.excerpt,
                        "industry": study.industry
                    })}
                </script>
            </Helmet>

            <Navigation />

            <div className="mt-20">
                {/* Breadcrumb */}
                <section className="py-6 px-6 bg-[#FAFAFA] border-b border-border">
                    <div className="max-w-7xl mx-auto">
                        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Case Studies
                        </Link>
                    </div>
                </section>

                {/* Hero */}
                <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-primary/5 to-primary-light/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                                    {study.badge}
                                </span>

                                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                    {study.title}
                                </h1>

                                <div className="flex gap-6 mb-8 text-sm">
                                    <div>
                                        <span className="text-muted-foreground">Industry:</span>
                                        <span className="ml-2 font-semibold">{study.industry}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Location:</span>
                                        <span className="ml-2 font-semibold">{study.location}</span>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.excerpt}
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-10 shadow-premium text-center">
                                <div className="text-6xl font-bold text-primary mb-4">
                                    {study.heroMetric}
                                </div>
                                <div className="text-xl font-semibold text-foreground">
                                    {study.heroMetricLabel}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Executive Summary */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">The Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {study.results.map((result: any, index: number) => (
                                <div key={index} className="bg-[#FAFAFA] rounded-xl p-8 text-center">
                                    <div className="text-5xl font-bold text-primary mb-3">
                                        {result.metric}
                                    </div>
                                    <div className="text-sm font-semibold text-foreground mb-4">
                                        {result.label}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Before: {result.before}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="py-20 px-6 bg-[#FAFAFA]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Challenge */}
                            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl p-10 border border-red-500/20">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <X className="w-5 h-5 text-red-600" />
                                    </div>
                                    The Challenge
                                </h3>
                                <p className="text-foreground leading-relaxed">
                                    {study.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-10 border border-green-500/20">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    The Clara Solution
                                </h3>
                                <p className="text-foreground leading-relaxed">
                                    {study.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4-Week Timeline */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">4-Week Rollout Journey</h2>
                        <div className="space-y-8">
                            {study.timeline.map((phase: any, index: number) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-premium">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-[#FAFAFA] rounded-xl p-6">
                                        <div className="text-sm font-semibold text-primary mb-2">{phase.week}</div>
                                        <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                                        <p className="text-muted-foreground">{phase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-primary-light/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl text-primary mb-8">"</div>
                        <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                            {study.testimonial.quote}
                        </p>
                        <div className="font-semibold text-foreground">{study.testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{study.testimonial.company}</div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0e] to-[#0a0a0a]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Ready to transform your operations?
                        </h2>

                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Let Clara handle your calls while you focus on growing your business
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg font-semibold" onClick={openHubSpotForm}>
                                Book a Growth Strategy Demo
                            </Button>
                            <ListenToClaraButton className="text-lg px-10 py-7 bg-white text-primary border-2 border-white hover:bg-white/90 hover:text-primary rounded-full font-semibold" />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default CaseStudyDetail;