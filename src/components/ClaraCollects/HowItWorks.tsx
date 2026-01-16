import { useState, useRef, useEffect } from "react";
import { CheckCircle, Send, DollarSign, RefreshCcw, Database } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import { CollectsHowItWorks3DScene } from "./CollectsHowItWorks3DScene";

const Step = ({ step, index, setStep, totalSteps }: { step: any, index: number, setStep: (i: number) => void, totalSteps: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) {
            setStep(index);
        }
    }, [isInView, index, setStep]);

    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className="min-h-[60vh] flex items-center justify-center py-12 relative pointer-events-none"
        >
            {/* Center Line for Desktop - Local Segment */}
            {index !== totalSteps - 1 && (
                <div className="absolute top-1/2 bottom-[-50%] left-1/2 -translate-x-1/2 w-0.5 bg-red-200 hidden md:block -z-10" />
            )}

            <div className={`container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center pointer-events-auto w-full`}>
                {/* Content Column */}
                <div className={`${isEven ? 'md:col-start-1 md:text-left' : 'md:col-start-2 md:text-left'} transition-all duration-500 ease-in-out`}>
                    <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-red-50 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-red-100 text-clara-red flex items-center justify-center shadow-inner">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div className="text-clara-red font-bold uppercase tracking-wider text-sm">Step {step.number}</div>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                        <ul className="space-y-3">
                            {step.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-clara-red shrink-0 shadow-sm" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "1",
            title: "Job Completion Triggers Workflow",
            description: "When a job is marked complete, Clara Collects automatically initiates the collection process.",
            features: [
                "Integrates with your job management system",
                "No manual triggers required",
                "Works with existing invoicing"
            ],
            icon: CheckCircle
        },
        {
            number: "2",
            title: "Clara Sends Reminders Automatically",
            description: "Professional, friendly reminders go out via SMS, email, and voice at optimal intervals.",
            features: [
                "Multi-channel delivery",
                "Customizable timing and frequency",
                "Branded, professional messaging"
            ],
            icon: Send
        },
        {
            number: "3",
            title: "Payment Intent Is Tracked",
            description: "Clara monitors responses and engagement to understand where each customer is in the payment process.",
            features: [
                "Real-time status tracking",
                "Customer engagement signals",
                "Priority scoring for follow-ups"
            ],
            icon: DollarSign
        },
        {
            number: "4",
            title: "Follow-ups Adapt Based on Response",
            description: "Clara adjusts the approach based on customer behavior, escalating or pausing as appropriate.",
            features: [
                "Intelligent escalation paths",
                "Pause when payment is promised",
                "Customer-friendly approach"
            ],
            icon: RefreshCcw
        },
        {
            number: "5",
            title: "Status Syncs to Systems of Record",
            description: "Payment status, communication history, and customer responses flow back to your accounting and CRM systems.",
            features: [
                "Real-time sync with accounting",
                "Complete audit trail",
                "No duplicate data entry"
            ],
            icon: Database
        }
    ];

    return (
        <section id="how-it-works" className="relative bg-white pb-24">
            <div className="text-center pt-24 pb-10 relative z-10 bg-white">
                <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">How It Works</div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    How Clara <span className="text-clara-red">Collects</span> Works
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 px-4">
                    From job completion to payment received, Clara handles every step of the collection process.
                </p>
            </div>

            <div className="relative">
                {/* Sticky 3D Background */}
                <div className="sticky top-0 h-screen w-full hidden md:block overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0 pointer-events-none" />
                    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
                        <CollectsHowItWorks3DScene activeStep={activeStep} />
                    </Canvas>
                </div>

                {/* Scrollable Steps */}
                <div className="relative z-10 md:-mt-[100vh]">
                    {/* Continuous Line Background */}
                    <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-red-100 -translate-x-1/2 hidden md:block -z-20" />

                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            step={step}
                            index={index}
                            setStep={setActiveStep}
                            totalSteps={steps.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
