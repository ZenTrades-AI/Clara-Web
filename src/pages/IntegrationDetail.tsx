import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Zap, Database, RefreshCw, Bell } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { openHubSpotForm } from "@/utils/hubspotForm";

// Integration data
const integrationData: Record<string, any> = {
    "service-trade": {
        name: "ServiceTrade",
        tagline: "Clara + ServiceTrade: AI-powered growth for commercial contractors",
        description: "Deep bi-directional integration enabling AI answering, smart job posting, on-call dispatch automation, and real-time job updates.",
        integrationLevel: "Full API Integration",
        capabilities: [
            {
                icon: Database,
                title: "Smart Job Posting",
                description: "Clara reads customer context, creates jobs in ServiceTrade with all details, and assigns to the right technician based on skills and availability."
            },
            {
                icon: Zap,
                title: "Context-Aware Conversations",
                description: "AI pulls customer history, service records, and open quotes to deliver personalized responses and accurate scheduling."
            },
            {
                icon: RefreshCw,
                title: "On-Call Dispatch",
                description: "After-hours emergency calls automatically route to on-call techs based on ServiceTrade schedules and escalation rules."
            },
            {
                icon: Bell,
                title: "Live Job Updates",
                description: "Real-time sync of job status, technician notes, and customer communications between Clara and ServiceTrade."
            }
        ],
        setupRequirements: [
            "ServiceTrade account with API access",
            "Office user credentials for Clara",
            "Service catalog and pricing configured",
            "Technician schedules and zones defined",
            "On-call rotation rules established"
        ],
        exampleWorkflow: {
            title: "Example: Emergency HVAC Call",
            steps: [
                "Customer calls after-hours with broken AC",
                "Clara answers in under 2 seconds",
                "Pulls customer history from ServiceTrade",
                "Qualifies emergency based on temperature and building type",
                "Creates ServiceTrade job with priority flag",
                "Routes to on-call HVAC tech via SMS",
                "Sends customer confirmation with ETA",
                "Updates job notes with call transcript"
            ]
        }
    },
    "service-titan": {
        name: "ServiceTitan",
        tagline: "Clara + ServiceTitan: Complete automation for residential contractors",
        description: "Full integration with job booking, customer lookup, scheduling, and payment tracking for HVAC, plumbing, and electrical businesses.",
        integrationLevel: "Full API Integration",
        capabilities: [
            { icon: Database, title: "Intelligent Job Booking", description: "Clara creates jobs directly in ServiceTitan with customer details, service type, and scheduling preferences." },
            { icon: Zap, title: "Customer History Access", description: "AI references past jobs, membership status, and preferences to provide personalized service." },
            { icon: RefreshCw, title: "Real-Time Scheduling", description: "Books appointments based on technician availability, location, and skillset." },
            { icon: Bell, title: "Payment & Invoice Sync", description: "Tracks invoice status and automates payment reminders for outstanding balances." }
        ],
        setupRequirements: ["ServiceTitan account with API credentials", "Business unit and job types configured", "Technician schedules synchronized", "Call booking workflows defined", "Payment terms and reminder rules set"],
        exampleWorkflow: { title: "Example: Plumbing Service Call", steps: ["Existing customer calls with leaking pipe", "Clara recognizes phone number and pulls history", "Reviews past plumbing work and membership status", "Offers priority scheduling for members", "Books next available plumber in customer's zone", "Creates job in ServiceTitan with leak details", "Sends confirmation SMS with tech ETA", "Logs call transcript to job notes"] }
    }
};

const IntegrationDetail = () => {
    const { integrationId } = useParams<{ integrationId: string }>();
    const integration = integrationId ? integrationData[integrationId] : null;

    if (!integration) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Integration Not Found</h1>
                    <Link to="/integrations" className="text-primary hover:underline">← Back to Integrations</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{integration.name} Integration | Clara AI</title>
                <meta name="description" content={integration.description} />
            </Helmet>

            <Navigation />

            {/* ADD MARGIN TOP HERE */}
            <div className="mt-20">
                <section className="py-6 px-6 bg-[#FAFAFA] border-b border-border">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            to="/integrations"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Integrations
                        </Link>
                    </div>
                </section>

                <section className="relative py-20 px-6 overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full uppercase tracking-wider inline-block mb-6">{integration.integrationLevel}</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{integration.tagline}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">{integration.description}</p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg" onClick={openHubSpotForm}>Book a Growth Strategy Demo</Button>
                    </div>
                </section>

                <section className="py-20 px-6 bg-[#FAFAFA]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">What This Integration Enables</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {integration.capabilities.map((capability: any, index: number) => {
                                const Icon = capability.icon;
                                return (
                                    <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-card">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"><Icon className="w-6 h-6 text-primary" /></div>
                                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-6 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 text-center">{integration.exampleWorkflow.title}</h2>
                        <div className="space-y-4">
                            {integration.exampleWorkflow.steps.map((step: string, index: number) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">{index + 1}</div>
                                    <p className="text-foreground leading-relaxed pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-6 bg-[#FAFAFA]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Setup Requirements</h2>
                        <div className="bg-white rounded-2xl p-8 border border-border shadow-card">
                            {integration.setupRequirements.map((req: string, index: number) => (
                                <div key={index} className="flex items-start gap-4 mb-4">
                                    <Check className="w-5 h-5 text-primary mt-0.5" />
                                    <p className="text-foreground">{req}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default IntegrationDetail;
