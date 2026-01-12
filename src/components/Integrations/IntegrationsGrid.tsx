import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Home, Calculator, Briefcase, Hammer, Shield, CreditCard, Calendar } from "lucide-react";

const integrationCategories = [
    {
        title: "Field Service & CRM Platforms",
        description: "Your CRM becomes the command center. Clara reads customer context, creates jobs, updates records, and routes work to the right technicians automatically.",
        integrations: [
            {
                name: "ServiceTitan",
                slug: "service-titan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                icon: Wrench,
                badge: "Full Integration",
                badgeColor: "bg-red-50 text-red-600 border-red-100"
            },
            {
                name: "Housecall Pro",
                slug: "housecall-pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                icon: Home,
                badge: "Full Integration",
                badgeColor: "bg-red-50 text-red-600 border-red-100"
            },
            {
                name: "Jobber",
                slug: "jobber",
                description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and syncs data.",
                icon: Briefcase,
                badge: "Full Integration",
                badgeColor: "bg-red-50 text-red-600 border-red-100"
            },
            {
                name: "BuildOps",
                slug: "buildops",
                description: "Purpose-built for commercial service contractors. Clara integrates with BuildOps to handle complex job workflows.",
                icon: Hammer,
                badge: "Native Integration",
                badgeColor: "bg-green-50 text-green-600 border-green-100"
            },
            {
                name: "FieldEdge",
                slug: "fieldedge",
                description: "Specialized integration for HVAC and electrical service businesses. Data works inside FieldEdge to capture opportunities.",
                icon: Wrench,
                badge: "Full Integration",
                badgeColor: "bg-red-50 text-red-600 border-red-100"
            },
            {
                name: "ServiceTrade",
                slug: "servicetrade",
                description: "Deep bi-directional integration for commercial fire, HVAC, and mechanical contractors. Clara reads context and automates dispatch.",
                icon: Shield,
                badge: "Full Integration",
                badgeColor: "bg-red-50 text-red-600 border-red-100"
            }
        ]
    },
    {
        title: "Accounting & Payments",
        description: "Keep your books accurate and cash flowing. Clara syncs invoice data, tracks payments, and automates collection efforts through your financial systems.",
        integrations: [
            {
                name: "QuickBooks",
                slug: "quickbooks",
                description: "Seamless accounting integration that keeps your books accurate and your cash flowing. Clara syncs invoices and payments.",
                icon: Calculator,
                badge: "Native Integration",
                badgeColor: "bg-green-50 text-green-600 border-green-100"
            },
            {
                name: "Stripe",
                slug: "stripe",
                description: "Secure payment processing that enables Clara Collects to accept payments, send payment links, and reconcile transactions.",
                icon: CreditCard,
                badge: "Native Integration",
                badgeColor: "bg-green-50 text-green-600 border-green-100"
            }
        ]
    },
    {
        title: "Scheduling & Time",
        description: "Smart scheduling that prevents conflicts. Clara checks real-time availability before booking and keeps calendars synchronized across all platforms.",
        integrations: [
            {
                name: "Google Calendar",
                slug: "google-calendar",
                description: "Smart calendar integration that enables Clara to check availability, book appointments, and keep your team aligned.",
                icon: Calendar,
                badge: "Native Integration",
                badgeColor: "bg-green-50 text-green-600 border-green-100"
            }
        ]
    }
];

const IntegrationsGrid = () => {
    return (
        <section className="py-20 px-6 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto space-y-20">
                {integrationCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h2>
                            <p className="text-muted-foreground max-w-3xl leading-relaxed">{category.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.integrations.map((integration, index) => {
                                const Icon = integration.icon;
                                return (
                                    <Link
                                        key={integration.slug}
                                        to={`/integrations/${integration.slug}`}
                                        className="group relative bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-premium hover:scale-105 transition-all duration-300 animate-fade-in block h-full"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="relative h-full flex flex-col">
                                            <div className="flex justify-between items-start mb-6">
                                                {/* Logo/Icon Area */}
                                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                    {/* In a real app these would be actual logos, using icons for now */}
                                                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                                                </div>

                                                {/* Badge */}
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm border ${integration.badgeColor}`}>
                                                    {integration.badge}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                                {integration.name}
                                            </h3>

                                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                                {integration.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-clara-red font-semibold text-xs uppercase tracking-wide group-hover:gap-3 transition-all mt-auto">
                                                View Integration <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IntegrationsGrid;
