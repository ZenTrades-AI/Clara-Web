import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Home, Calculator, Briefcase, Hammer, Shield } from "lucide-react";

const integrations = [
    {
        name: "ServiceTitan",
        slug: "service-titan",
        description: "Bi-directional sync with job creation, customer lookup, and scheduling.",
        tag: "Field Service CRM",
        icon: Wrench,
        available: true,
    },
    {
        name: "Housecall Pro",
        slug: "housecall-pro",
        description: "Full integration with job booking, customer management, and invoicing.",
        tag: "Field Service Management",
        icon: Home,
        available: false,
    },
    {
        name: "ServiceTrade",
        slug: "service-trade",
        description: "Smart job posting, on-call dispatch, and live job updates.",
        tag: "Commercial Service Platform",
        icon: Shield,
        available: true,
    },
    {
        name: "QuickBooks",
        slug: "quickbooks",
        description: "Invoice sync, payment tracking, and accounting automation.",
        tag: "Accounting & AR",
        icon: Calculator,
        available: false,
    },
    {
        name: "Jobber",
        slug: "jobber",
        description: "Complete job lifecycle management with real-time updates.",
        tag: "Service Business Platform",
        icon: Briefcase,
        available: false,
    },
    {
        name: "BuildOps",
        slug: "buildops",
        description: "Commercial contractor workflows with compliance tracking.",
        tag: "Commercial Contractors",
        icon: Hammer,
        available: false,
    },
];

const IntegrationsGrid = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Coming Soon Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                    <div className="bg-white rounded-xl p-8 shadow-xl max-w-sm text-center">
                        <h3 className="text-xl font-bold mb-3 text-clara-navy">Coming Soon</h3>
                        <p className="text-gray-600 mb-6">
                            This integration is currently in development and will be available soon.
                        </p>

                        <button
                            className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
                            onClick={() => setShowModal(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* Integrations Grid */}
            <section className="py-20 px-6 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integrations.map((integration, index) => {
                            const Icon = integration.icon;

                            const cardContent = (
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full mb-4 inline-block">
                                        {integration.tag}
                                    </span>

                                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                                        {integration.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {integration.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                        {integration.available ? "View Integration" : "Coming Soon"}
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            );

                            return integration.available ? (
                                // Normal working link
                                <Link
                                    key={integration.slug}
                                    to={`/integrations/${integration.slug}`}
                                    className="group relative bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-premium hover:scale-105 transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {cardContent}
                                </Link>
                            ) : (
                                // Coming Soon popup trigger
                                <button
                                    key={integration.slug}
                                    onClick={() => setShowModal(true)}
                                    className="group relative bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-premium hover:scale-105 transition-all duration-300 animate-fade-in text-left w-full"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {cardContent}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntegrationsGrid;
