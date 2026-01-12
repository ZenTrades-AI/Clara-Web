import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Zap, Database, RefreshCw, Bell, PhoneCall, Glasses, DollarSign, Shield } from "lucide-react";
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
        tagline: "Clara + ServiceTitan: Intelligent automation for field service businesses",
        description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center. Clara reads customer context, automates bookings, and syncs every interaction back to your CRM in real time.",
        integrationLevel: "FULL INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Intelligent Job Booking", description: "Clara creates jobs directly in ServiceTitan with customer details, service type, priority level, and scheduling preferences based on call context." },
            { icon: Database, title: "Customer History Access", description: "AI references past jobs, membership status, equipment records, and customer preferences to provide personalized, context-aware service." },
            { icon: RefreshCw, title: "Real-Time Scheduling", description: "Books appointments based on technician availability, location, skillset, and customer priority without human intervention." },
            { icon: Zap, title: "Payment & Invoice Sync", description: "Tracks invoice status and coordinates with Clara Collects to automate payment reminders for outstanding balances." },
            { icon: Zap, title: "Call Transcript Logging", description: "Every customer interaction is transcribed and attached to the job record for complete documentation and team visibility." },
            { icon: Zap, title: "Membership Recognition", description: "Instantly identifies VIP customers and members, routing them to priority scheduling and appropriate service tiers." }
        ],
        relatedIntegrations: [
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            },
            {
                name: "Jobber",
                description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and syncs data.",
                slug: "jobber"
            },
            {
                name: "BuildOps",
                description: "Purpose-built for commercial service contractors. Clara integrates with BuildOps to handle complex job workflows.",
                slug: "buildops"
            }
        ],
        caseStudy: {
            title: "How John Owens Services Grew Revenue 30% with Clara + ServiceTitan",
            description: "See how this premier plumbing & HVAC business used Clara's ServiceTitan integration to capture every opportunity.",
            link: "/case-studies/john-owens"
        },
        setupRequirements: [
            "ServiceTitan account with API access enabled",
            "Business units and job types configured",
            "Technician schedules and service zones defined",
            "Customer communication preferences set",
            "Integration credentials provided to Clara team"
        ],
        trustRequirements: [
            "SOC 2 compliant data handling",
            "Encrypted API connections",
            "No data stored outside your systems",
            "Ongoing optimization by Clara success team",
            "99.9% uptime SLA"
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Customer Calls: Existing customer calls about a broken water heater. Clara answers instantly.",
                "Context Retrieved: Clara pulls the customer's ServiceTitan profile, sees their water heater model, last service date, and membership status.",
                "Job Created: Based on the conversation, Clara creates a priority job in ServiceTitan with all relevant details.",
                "Schedule Synced: Clara books the next available plumber in the customer's service zone based on real-time availability.",
                "Customer Confirmed: Customer receives SMS confirmation with technician name, photo, and arrival window.",
                "Data Logged: Full call transcript, customer sentiment, and job details are attached to the ServiceTitan record."
            ]
        },
        aiAgents: [
            {
                name: "Clara Answers inside ServiceTitan",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-red-500",
                features: [
                    "Answers every inbound call in under 2 seconds with ServiceTitan context",
                    "Pulls customer history, open estimates, and equipment records during the call",
                    "Creates or updates jobs based on conversation outcomes",
                    "Logs full transcripts and call summaries to customer records",
                    "Routes urgent calls to on-call staff based on ServiceTitan schedules"
                ]
            },
            {
                name: "Clara Field Co-Pilot inside ServiceTitan",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-red-500",
                features: [
                    "Structures field data and job notes into ServiceTitan format",
                    "Captures technician observations and syncs to job records",
                    "Updates job status and completion details in real time",
                    "Attaches photos and documentation to ServiceTitan jobs",
                    "Enables hands-free data entry for techs in the field"
                ]
            },
            {
                name: "Clara Collects inside ServiceTitan",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-red-500",
                features: [
                    "Monitors invoice status and aging reports from ServiceTitan",
                    "Initiates automated payment follow-up sequences",
                    "Processes payments and updates ServiceTitan records",
                    "Escalates collection attempts based on account history",
                    "Provides revenue visibility across all open invoices"
                ]
            }
        ]
    },
    "housecall-pro": {
        name: "Housecall Pro",
        tagline: "Clara + Housecall Pro: AI-powered automation for growing service businesses",
        description: "Full integration with job booking, customer management, dispatching, and invoicing. Clara becomes your always-on office team, handling calls and syncing everything back to Housecall Pro.",
        integrationLevel: "FULL INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Instant Job Booking", description: "Clara schedules jobs directly in Housecall Pro based on call conversations, capturing service type, urgency, and customer preferences." },
            { icon: Zap, title: "Customer Database Access", description: "AI pulls customer history, property details, and past service records to personalize every interaction." },
            { icon: Zap, title: "Dispatch Coordination", description: "Routes new jobs to available technicians based on Housecall Pro schedules and location." },
            { icon: Zap, title: "Invoice Awareness", description: "Tracks open invoices and coordinates payment follow-ups with Clara Collects." },
            { icon: Zap, title: "Estimate Management", description: "References open estimates during calls to help convert leads into booked jobs." },
            { icon: Zap, title: "SMS & Email Sync", description: "Customer communications flow through Housecall Pro for complete interaction history." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "New Lead Calls: Potential customer calls about a clogged drain. Clara answers immediately.",
                "Customer Created: Clara creates a new customer profile in Housecall Pro with address and contact details.",
                "Service Qualified: Through natural conversation, Clara identifies the service needed and urgency level.",
                "Appointment Booked: Job is scheduled in Housecall Pro based on technician availability and customer preferences.",
                "Confirmation Sent: Automated confirmation flows through Housecall Pro to the customer.",
                "Complete Record: Call recording, transcript, and booking details are attached to the customer record."
            ]
        },
        setupRequirements: [
            "Housecall Pro account with API access",
            "Service categories and pricing configured",
            "Technician profiles and schedules set",
            "Business hours and service areas defined",
            "Integration authorization completed"
        ],
        trustRequirements: [
            "Bank-level encryption for all data",
            "HIPAA-compliant communication handling",
            "Real-time sync with no data lag",
            "Dedicated integration support",
            "Continuous monitoring and optimization"
        ],
        aiAgents: [
            {
                name: "Clara Answers inside Housecall Pro",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Answers calls with full customer context from Housecall Pro",
                    "Creates new customers and jobs during the call",
                    "References open estimates to drive conversions",
                    "Logs all interactions to customer timeline",
                    "Handles after-hours calls with booking capabilities"
                ]
            },
            {
                name: "Clara Field Co-Pilot inside Housecall Pro",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Syncs field observations and job updates to Housecall Pro",
                    "Captures completion photos and documentation",
                    "Updates job status in real time",
                    "Enables voice-driven data entry for technicians",
                    "Structures unstructured field notes into CRM format"
                ]
            },
            {
                name: "Clara Collects inside Housecall Pro",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Monitors invoice aging from Housecall Pro",
                    "Sends automated payment reminders",
                    "Processes payments with customer consent",
                    "Updates invoice status in real time",
                    "Escalates based on payment history"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Jobber",
                description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and syncs data.",
                slug: "jobber"
            },
            {
                name: "BuildOps",
                description: "Purpose-built for commercial service contractors. Clara integrates with BuildOps to handle complex job workflows.",
                slug: "buildops"
            }
        ]
    },
    "jobber": {
        name: "Jobber",
        tagline: "Clara + Jobber: Seamless AI integration for service professionals",
        description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and keeps Jobber updated with every interaction.",
        integrationLevel: "FULL INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Quote-to-Job Conversion", description: "Clara references open quotes during calls and converts them to booked jobs with customer approval." },
            { icon: Zap, title: "Smart Scheduling", description: "Books jobs based on Jobber calendar availability, technician assignments, and route optimization." },
            { icon: Zap, title: "Client Management", description: "Creates new clients, updates contact information, and maintains property records." },
            { icon: Zap, title: "Request Handling", description: "Processes service requests and converts them to scheduled work automatically." },
            { icon: Zap, title: "Invoice Tracking", description: "Monitors payment status and coordinates collection efforts with Clara Collects." },
            { icon: Zap, title: "Team Notifications", description: "Alerts team members through Jobber when jobs are booked or updated." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Quote Recipient Calls: Customer who received a quote calls back ready to proceed.",
                "Quote Retrieved: Clara pulls the open quote from Jobber and confirms scope with customer.",
                "Job Scheduled: With customer approval, Clara converts the quote to a scheduled job.",
                "Technician Assigned: Job is routed to the appropriate technician based on Jobber schedules.",
                "Deposit Collected: If required, Clara Collects processes the deposit payment.",
                "Records Updated: All interactions logged to the client record in Jobber."
            ]
        },
        setupRequirements: [
            "Jobber account with API credentials",
            "Service items and pricing configured",
            "Team schedules and assignments set",
            "Client communication templates defined",
            "Payment processing enabled"
        ],
        trustRequirements: [
            "End-to-end encryption",
            "Compliant data handling practices",
            "Real-time bidirectional sync",
            "Dedicated onboarding support",
            "Ongoing performance optimization"
        ],
        aiAgents: [
            {
                name: "Clara Answers inside Jobber",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Answers with full Jobber client context",
                    "Converts quotes to jobs during the call",
                    "Creates new clients and service requests",
                    "References job history for repeat customers",
                    "Handles scheduling changes and cancellations"
                ]
            },
            {
                name: "Clara Field Co-Pilot inside Jobber",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Updates job status and completion details",
                    "Captures field notes and observations",
                    "Syncs photos and documentation to jobs",
                    "Enables hands-free Jobber updates",
                    "Structures technician notes for CRM records"
                ]
            },
            {
                name: "Clara Collects inside Jobber",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Tracks invoice status from Jobber",
                    "Automates payment reminder sequences",
                    "Processes credit card payments",
                    "Updates payment records in Jobber",
                    "Reports on collection performance"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            },
            {
                name: "BuildOps",
                description: "Purpose-built for commercial service contractors. Clara integrates with BuildOps to handle complex job workflows.",
                slug: "buildops"
            }
        ]
    },
    "buildops": {
        name: "BuildOps",
        tagline: "Clara + BuildOps: AI automation for commercial contractors",
        description: "Purpose-built for commercial service contractors. Clara integrates with BuildOps to handle complex job workflows, compliance requirements, and multi-location coordination.",
        integrationLevel: "NATIVE INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Commercial Job Management", description: "Creates and updates complex commercial jobs with multiple visits, compliance requirements, and approval workflows." },
            { icon: Zap, title: "Customer Account Access", description: "Pulls account history, contract terms, and site-specific requirements for personalized service." },
            { icon: Zap, title: "Compliance Tracking", description: "Ensures jobs include required documentation, certifications, and safety protocols." },
            { icon: Zap, title: "Multi-Site Coordination", description: "Handles scheduling across multiple locations for large commercial accounts." },
            { icon: Zap, title: "Dispatch Intelligence", description: "Routes jobs based on technician certifications, location, and specialized equipment needs." },
            { icon: Zap, title: "Invoice & PO Management", description: "Tracks purchase orders, invoice approvals, and payment status for commercial accounts." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Facility Manager Calls: Property manager calls about HVAC issue at a multi-tenant building.",
                "Account Retrieved: Clara pulls site details, access requirements, and contract terms from BuildOps.",
                "Service Request Created: Job created with compliance checklist and required certifications noted.",
                "Certified Tech Dispatched: Clara routes to a technician with required certifications and clearances.",
                "Site Access Coordinated: Building access instructions and contacts provided to technician.",
                "Commercial Invoice Generated: Proper billing codes and PO references attached to completed job."
            ]
        },
        setupRequirements: [
            "BuildOps account with integration access",
            "Commercial accounts and contracts configured",
            "Technician certifications and clearances entered",
            "Compliance checklists defined",
            "Billing and PO workflows established"
        ],
        trustRequirements: [
            "Enterprise-grade security",
            "Commercial compliance support",
            "Multi-tenant data isolation",
            "Dedicated commercial account manager",
            "SLA-backed uptime guarantee"
        ],
        aiAgents: [
            {
                name: "Clara Answers inside BuildOps",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Answers with commercial account context",
                    "Handles facility manager calls with site-specific data",
                    "Creates service requests with compliance requirements",
                    "Routes to certified technicians automatically",
                    "Manages emergency escalation protocols"
                ]
            },
            {
                name: "Clara Field Co-Pilot inside BuildOps",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Captures compliance documentation in the field",
                    "Updates job status with commercial-grade detail",
                    "Syncs inspection photos and checklists",
                    "Enables voice-driven BuildOps updates",
                    "Structures field data for commercial reporting"
                ]
            },
            {
                name: "Clara Collects inside BuildOps",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Manages commercial payment terms",
                    "Tracks PO and invoice approval status",
                    "Coordinates with accounts payable contacts",
                    "Handles net-30/60/90 payment schedules",
                    "Reports on commercial AR performance"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            },
            {
                name: "Jobber",
                description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and syncs data.",
                slug: "jobber"
            }
        ]
    },
    "fieldedge": {
        name: "FieldEdge",
        tagline: "Clara + FieldEdge: AI-powered efficiency for HVAC and electrical contractors",
        description: "Specialized integration for HVAC and electrical service businesses. Clara works inside FieldEdge to capture leads, book jobs, and maintain customer relationships.",
        integrationLevel: "FULL INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Lead Capture & Booking", description: "Converts inbound calls to booked jobs with complete customer and service details in FieldEdge." },
            { icon: Zap, title: "Equipment History Access", description: "References installed equipment, maintenance history, and warranty status during customer calls." },
            { icon: Zap, title: "Agreement Management", description: "Identifies maintenance agreement customers and schedules accordingly." },
            { icon: Zap, title: "Dispatch Board Integration", description: "Creates jobs that appear on the FieldEdge dispatch board for immediate routing." },
            { icon: Zap, title: "Flat Rate Pricing", description: "References FieldEdge pricebook during calls for accurate estimates." },
            { icon: Zap, title: "Call Recording Sync", description: "Attaches call recordings and transcripts to customer records." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Agreement Customer Calls: Maintenance agreement holder calls about AC not cooling.",
                "Agreement Recognized: Clara identifies the customer as a VIP agreement holder in FieldEdge.",
                "Equipment Retrieved: Pulls installed equipment details including model, age, and service history.",
                "Priority Job Created: Creates a priority service call on the FieldEdge dispatch board.",
                "Same-Day Scheduled: Routes to the next available HVAC technician in the customer's zone.",
                "Customer Updated: Sends confirmation with priority status acknowledgment to customer."
            ]
        },
        setupRequirements: [
            "FieldEdge account with integration enabled",
            "Equipment and pricebook data configured",
            "Technician schedules and zones set",
            "Agreement types and priorities defined",
            "API credentials provided"
        ],
        trustRequirements: [
            "Secure API integration",
            "HVAC and electrical industry expertise",
            "Real-time dispatch board sync",
            "Dedicated integration support",
            "Continuous performance monitoring"
        ],
        aiAgents: [
            {
                name: "Clara Answers inside FieldEdge",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Answers with equipment and service history context",
                    "Identifies agreement customers for priority handling",
                    "Books jobs on the FieldEdge dispatch board",
                    "Provides estimates using pricebook data",
                    "Logs all interactions to customer records"
                ]
            },
            {
                name: "Clara Field Co-Pilot inside FieldEdge",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Updates job status and work completed",
                    "Captures equipment details and model numbers",
                    "Syncs photos and diagnostic findings",
                    "Enables hands-free FieldEdge updates",
                    "Documents warranty and part information"
                ]
            },
            {
                name: "Clara Collects inside FieldEdge",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Monitors FieldEdge invoice aging",
                    "Automates collection outreach",
                    "Processes payments via FieldEdge",
                    "Updates payment status in real time",
                    "Reports on collection metrics"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            },
            {
                name: "Jobber",
                description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and syncs data.",
                slug: "jobber"
            }
        ]
    },
    "servicetrade": {
        name: "ServiceTrade",
        tagline: "Clara + ServiceTrade: AI automation for commercial service contractors",
        description: "Deep bi-directional integration for commercial fire, HVAC, and mechanical contractors. Clara reads customer context, automates job creation, and manages on-call dispatch through ServiceTrade.",
        integrationLevel: "FULL INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Smart Job Posting", description: "Clara creates service requests and jobs in ServiceTrade with all required details, codes, and documentation." },
            { icon: Zap, title: "Context-Aware Conversations", description: "AI pulls customer history, deficiency reports, and open quotes to deliver personalized responses." },
            { icon: Zap, title: "On-Call Dispatch Automation", description: "After-hours emergency calls automatically route to on-call techs based on ServiceTrade schedules." },
            { icon: Zap, title: "Live Job Updates", description: "Real-time sync of job status, technician notes, and customer communications." },
            { icon: Zap, title: "Quote & Proposal Tracking", description: "References open proposals during calls to drive sales conversions." },
            { icon: Zap, title: "Deficiency Management", description: "Creates and tracks deficiencies identified during inspections and service calls." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Emergency Call Received: Building manager calls after-hours about a fire suppression alarm.",
                "Customer Identified: Clara pulls the account, location details, and fire panel information from ServiceTrade.",
                "On-Call Tech Located: Checks ServiceTrade on-call schedule and identifies the responding technician.",
                "Service Request Created: Emergency service request posted to ServiceTrade with priority flag.",
                "Tech Dispatched: On-call technician receives SMS with job details and site access information.",
                "Full Documentation: Call recording, transcript, and dispatch details logged to ServiceTrade."
            ]
        },
        setupRequirements: [
            "ServiceTrade account with API access",
            "Office user credentials for Clara integration",
            "Job codes and service types configured",
            "On-call schedules and escalation rules defined",
            "Customer locations and contacts verified"
        ],
        trustRequirements: [
            "Commercial-grade security",
            "Fire protection industry compliance",
            "Real-time bidirectional sync",
            "Dedicated commercial support team",
            "99.9% uptime guarantee"
        ],
        aiAgents: [
            {
                name: "Clara Answers inside ServiceTrade",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Answers in under 2 seconds with ServiceTrade context",
                    "Pulls customer history, locations, and open work",
                    "Creates service requests with proper job codes",
                    "Routes emergencies based on on-call schedules",
                    "Logs full call transcripts to customer records"
                ]
            },
            {
                name: "Clara Field Co-Pilot inside ServiceTrade",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Updates job status and completion notes",
                    "Caps deficiencies and inspection findings",
                    "Syncs photos and documentation to ServiceTrade",
                    "Enables hands-free ServiceTrade updates",
                    "Structures observations for compliance reporting"
                ]
            },
            {
                name: "Clara Collects inside ServiceTrade",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Monitors commercial invoice status",
                    "Handles net payment term follow-ups",
                    "Coordinates with accounts payable contacts",
                    "Processes authorized payments",
                    "Reports on commercial AR metrics"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            },
            {
                name: "BuildOps",
                description: "Purpose-built for commercial service contractors. Clara integrates with BuildOps to handle complex job workflows.",
                slug: "buildops"
            }
        ]
    },
    "quickbooks": {
        name: "QuickBooks",
        tagline: "Clara + QuickBooks: Automated accounting for field service businesses",
        description: "Seamless accounting integration that keeps your books accurate and your cash flowing. Clara syncs invoice data, tracks payments, and automates collection efforts through QuickBooks.",
        integrationLevel: "NATIVE INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Invoice Sync", description: "Automatically syncs invoices from your CRM to QuickBooks for accurate financial records." },
            { icon: Zap, title: "Payment Tracking", description: "Monitors payment status and updates records when payments are received." },
            { icon: Zap, title: "AR Aging Visibility", description: "Clara Collects uses QuickBooks aging data to prioritize collection efforts." },
            { icon: Zap, title: "Customer Matching", description: "Matches customer records across systems for consolidated financial views." },
            { icon: Zap, title: "Revenue Reporting", description: "Provides cash flow visibility through QuickBooks integration." },
            { icon: Zap, title: "Write-Off Management", description: "Tracks collection attempts and flags accounts for potential write-off." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Invoice Created: Job completed and invoice generated in your CRM.",
                "QuickBooks Synced: Invoice automatically syncs to QuickBooks for accounting.",
                "Aging Monitored: Clara Collects monitors payment due date and aging.",
                "Reminder Sent: Automated payment reminder sent when invoice becomes overdue.",
                "Payment Collected: Customer pays through Clara Collects payment link.",
                "Records Updated: Payment recorded in QuickBooks and CRM simultaneously."
            ]
        },
        setupRequirements: [
            "QuickBooks Online account",
            "Chart of accounts configured",
            "Customer and item matching rules defined",
            "Payment processing preferences set",
            "Integration authorization completed"
        ],
        trustRequirements: [
            "Bank-level encryption",
            "SOC 2 compliant",
            "Real-time sync accuracy",
            "Accounting best practices",
            "Dedicated financial support"
        ],
        aiAgents: [
            {
                name: "Clara Answers with QuickBooks Context",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "References payment history during customer calls",
                    "Identifies accounts with outstanding balances",
                    "Provides invoice status when customers inquire",
                    "Notes payment discussions in call logs",
                    "Routes payment questions appropriately"
                ]
            },
            {
                name: "Clara Field Co-Pilot with QuickBooks",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Captures job costs and materials used",
                    "Documents billable work for accurate invoicing",
                    "Notes customer payment preferences",
                    "Structures data for accounting accuracy",
                    "Enables field collection when appropriate"
                ]
            },
            {
                name: "Clara Collects inside QuickBooks",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Pulls AR aging reports from QuickBooks",
                    "Prioritizes collection based on balance and age",
                    "Initiates automated payment reminders",
                    "Processes payments and updates QuickBooks",
                    "Reports on collection effectiveness"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Jobber",
                description: "Complete job lifecycle management with real-time updates. Clara handles customer calls, books jobs, and syncs data.",
                slug: "jobber"
            },
            {
                name: "Strpe",
                description: "Secure payment processing that enables Clara Collects to accept payments.",
                slug: "stripe"
            }
        ]
    },
    "stripe": {
        name: "Stripe",
        tagline: "Clara + Stripe: Seamless payment processing for field service businesses",
        description: "Secure payment processing that enables Clara Collects to accept payments, send payment links, and manage the entire collection workflow with industry-leading reliability.",
        integrationLevel: "NATIVE INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Payment Link Generation", description: "Clara Collects creates and sends secure Stripe payment links via SMS and email." },
            { icon: Zap, title: "Credit Card Processing", description: "Accepts all major credit cards, debit cards, and digital wallets." },
            { icon: Zap, title: "ACH & Bank Payments", description: "Enables customers to pay directly from their bank accounts for larger invoices." },
            { icon: Zap, title: "Recurring Billing", description: "Sets up recurring payment schedules for maintenance agreements and payment plans." },
            { icon: Zap, title: "Refund Management", description: "Processes authorized refunds and maintains accurate records." },
            { icon: Zap, title: "Dispute Handling", description: "Tracks and manages payment disputes with proper documentation." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Invoice Sent: Job completed and invoice sent to customer.",
                "Payment Link Created: Clara Collects generates a Stripe payment link for the invoice.",
                "Reminder Sent: Customer receives SMS with payment link when invoice ages.",
                "Customer Pays: Customer clicks link and completes payment through Stripe checkout.",
                "Payment Confirmed: Stripe processes payment and sends confirmation to customer.",
                "Records Updated: Payment recorded in CRM and accounting systems automatically."
            ]
        },
        setupRequirements: [
            "Stripe account with verified business",
            "Bank account connected for payouts",
            "Payment methods enabled",
            "Branding and receipt customization set",
            "Integration authorization completed"
        ],
        trustRequirements: [
            "PCI DSS Level 1 compliance",
            "3D Secure fraud protection",
            "Encrypted payment processing",
            "99.99% uptime track record",
            "Industry-leading dispute protection"
        ],
        aiAgents: [
            {
                name: "Clara Answers with Stripe Context",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "References payment status during customer calls",
                    "Sends payment links during conversations",
                    "Confirms successful payments in real time",
                    "Handles payment questions and concerns",
                    "Routes payment disputes appropriately"
                ]
            },
            {
                name: "Clara Field Co-Pilot with Stripe",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Enables field payment collection",
                    "Generates payment links for on-site customers",
                    "Captures card payments through secure forms",
                    "Documents payment attempts in job records",
                    "Handles deposit collection at job start"
                ]
            },
            {
                name: "Clara Collects inside Stripe",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Creates and tracks payment links",
                    "Monitors payment attempts and success rates",
                    "Retries failed payments automatically",
                    "Sets up payment plans for large balances",
                    "Reports on collection and payment metrics"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "QuickBooks",
                description: "Seamless accounting integration that keeps your books accurate and your cash flowing.",
                slug: "quickbooks"
            },
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            }
        ]
    },
    "google-calendar": {
        name: "Google Calendar",
        tagline: "Clara + Google Calendar: Intelligent scheduling for field service teams",
        description: "Smart calendar integration that enables Clara to check availability, book appointments, and keep your team's schedules accurate across all platforms.",
        integrationLevel: "NATIVE INTEGRATION",
        capabilities: [
            { icon: Zap, title: "Real-Time Availability", description: "Clara checks technician availability in Google Calendar before booking any appointments." },
            { icon: Zap, title: "Appointment Booking", description: "Creates calendar events with job details, customer information, and location." },
            { icon: Zap, title: "Schedule Coordination", description: "Prevents double-booking by checking all connected calendars." },
            { icon: Zap, title: "Reminder Integration", description: "Syncs with Google Calendar reminders for technician notifications." },
            { icon: Zap, title: "Time Block Respect", description: "Honors blocked time, personal events, and travel buffer settings." },
            { icon: Zap, title: "Cross-Platform Sync", description: "Works alongside CRM calendars for complete schedule visibility." }
        ],
        exampleWorkflow: {
            title: "Example Workflow",
            subtitle: "See how Clara transforms a real customer interaction into a fully automated workflow.",
            steps: [
                "Customer Requests Appointment: Customer calls wanting to schedule a service visit.",
                "Availability Checked: Clara queries Google Calendar for technician availability.",
                "Options Presented: Customer is offered available time slots that match their preferences.",
                "Appointment Booked: Selected time is blocked on the technician's Google Calendar.",
                "CRM Updated: Job is created in CRM with matching appointment time.",
                "Confirmations Sent: Both customer and technician receive calendar confirmations."
            ]
        },
        setupRequirements: [
            "Google Workspace or personal Google accounts",
            "Calendar sharing permissions configured",
            "Technician availability hours set",
            "Buffer time preferences defined",
            "Integration authorization completed"
        ],
        trustRequirements: [
            "Google security standards",
            "OAuth 2.0 authentication",
            "No calendar data stored externally",
            "Instant sync updates",
            "Privacy-first design"
        ],
        aiAgents: [
            {
                name: "Clara Answers with Calendar Context",
                icon: PhoneCall,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Checks real-time availability during calls",
                    "Books appointments in appropriate time slots",
                    "Respects technician work hours and preferences",
                    "Handles rescheduling and cancellation requests",
                    "Confirms appointments with calendar invites"
                ]
            },
            {
                name: "Clara Field Co-Pilot with Calendar",
                icon: Glasses,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Updates job duration based on field conditions",
                    "Adjusts schedules when jobs run long",
                    "Blocks drive time between appointments",
                    "Syncs availability for on-site scheduling",
                    "Enables technicians to update their calendars"
                ]
            },
            {
                name: "Clara Collects with Calendar",
                icon: DollarSign,
                iconBg: "bg-red-100",
                iconColor: "text-clara-red",
                features: [
                    "Schedules payment call attempts",
                    "Tracks collection conversation timing",
                    "Coordinates with customer availability",
                    "Logs payment discussions to calendar",
                    "Manages follow-up reminder schedules"
                ]
            }
        ],
        relatedIntegrations: [
            {
                name: "ServiceTitan",
                description: "Deep bi-directional integration that transforms ServiceTitan into an AI-powered command center.",
                slug: "service-titan"
            },
            {
                name: "Jobber",
                description: "Complete job lifecycle management with real-time updates.",
                slug: "jobber"
            },
            {
                name: "Housecall Pro",
                description: "Full integration with job booking, customer management, dispatching, and invoicing.",
                slug: "housecall-pro"
            }
        ]
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
                        {integration.exampleWorkflow.subtitle && (
                            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                                {integration.exampleWorkflow.subtitle}
                            </p>
                        )}
                        <div className="space-y-4">
                            {integration.exampleWorkflow.steps.map((step: string, index: number) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">{index + 1}</div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">{step.split(':')[0]}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{step.split(':')[1] || step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-6 bg-[#FAFAFA]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Setup Requirements */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Setup Requirements</h2>
                            <p className="text-muted-foreground mb-8">
                                Getting started is straightforward. Our team handles the technical configuration so you can focus on running your business.
                            </p>
                            <div className="bg-white rounded-2xl p-8 border border-border shadow-card">
                                {integration.setupRequirements.map((req: string, index: number) => (
                                    <div key={index} className="flex items-start gap-4 mb-4 last:mb-0">
                                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <p className="text-foreground text-sm font-medium">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust & Reliability */}
                        {integration.trustRequirements && (
                            <div>
                                <h2 className="text-3xl font-bold mb-8">Trust & Reliability</h2>
                                <p className="text-muted-foreground mb-8">
                                    Enterprise-grade security and reliability you can count on for your business-critical operations.
                                </p>
                                <div className="bg-white rounded-2xl p-8 border border-border shadow-card">
                                    {integration.trustRequirements.map((req: string, index: number) => (
                                        <div key={index} className="flex items-start gap-4 mb-4 last:mb-0">
                                            <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-foreground text-sm font-medium">{req}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* AI Agents Section */}
                {integration.aiAgents && (
                    <section className="py-20 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-bold mb-4 text-center">How Clara's AI Agents Work Inside {integration.name}</h2>
                            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                                Three specialized AI agents working together to automate every aspect of your customer lifecycle.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {integration.aiAgents.map((agent: any, index: number) => {
                                    const Icon = agent.icon;
                                    return (
                                        <div key={index} className="bg-[#FAFAFA] rounded-2xl p-8 border border-border">
                                            <div className={`w-12 h-12 rounded-xl ${agent.iconBg || 'bg-primary/10'} flex items-center justify-center mb-6`}>
                                                <Icon className={`w-6 h-6 ${agent.iconColor || 'text-primary'}`} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-6">{agent.name}</h3>
                                            <div className="space-y-4">
                                                {agent.features.map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}


                {/* Explore More Integrations */}
                {integration.relatedIntegrations && (
                    <section className="py-20 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold mb-12 text-center">Explore More Integrations</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {integration.relatedIntegrations.map((item: any, index: number) => (
                                    <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                                        <div className="h-8 w-auto mb-6 flex items-center">
                                            {/* Logo placeholder - text for now as we don't have logo assets for these specific ones handy in this context, or use name */}
                                            <span className="font-bold text-lg">{item.name}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA */}
                <section className="py-24 px-6 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to connect Clara with {integration.name}?</h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Let us show you how this integration can transform your operations. Our team will walk you through the setup and get you running in days, not weeks.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-clara-red hover:bg-red-700 text-white px-8 h-12 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all" onClick={openHubSpotForm}>
                                Book a Growth Strategy Demo
                            </Button>
                            <Button size="lg" variant="outline" className="border-clara-red text-clara-red hover:bg-red-50 px-8 h-12 rounded-full font-semibold text-base" onClick={() => window.location.href = '/contact'}>
                                Talk to Clara Team
                            </Button>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default IntegrationDetail;
