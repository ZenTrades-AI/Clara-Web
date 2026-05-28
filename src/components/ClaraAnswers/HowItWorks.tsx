import { useState, useRef, useEffect } from "react";
import { Phone, MessageSquare, CheckCircle, FileText, Calendar } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { HowItWorks3DScene } from "./HowItWorks3DScene";
import { useInView } from "framer-motion";

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
                            <div className="text-clara-red font-bold uppercase tracking-wider text-sm">{step.number}</div>
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
            number: "Step 1",
            title: "Incoming Call or Inquiry",
            description: "A customer calls or sends a message to your business. Clara is ready, 24/7.",
            features: [
                "Works with your existing phone numbers",
                "Handles calls, texts, and web inquiries",
                "No setup delays or call forwarding hassles"
            ],
            icon: Phone
        },
        {
            number: "Step 2",
            title: "Clara Answers Instantly",
            description: "Clara picks up within 4 seconds and engages in natural conversation, sounding professional and helpful.",
            features: [
                "Natural, human-like conversation",
                "Branded greeting and tone",
                "Multilingual support available"
            ],
            icon: MessageSquare
        },
        {
            number: "Step 3",
            title: "Intent Is Identified",
            description: "Clara understands what the customer needs, from emergency repairs to routine service requests.",
            features: [
                "Urgency detection built-in",
                "Job type classification",
                "Customer context captured"
            ],
            icon: CheckCircle
        },
        {
            number: "Step 4",
            title: "Details Are Captured",
            description: "All relevant information is collected and structured, ready for your team to act on.",
            features: [
                "Contact information verified",
                "Service details recorded",
                "Location and timing confirmed"
            ],
            icon: FileText
        },
        {
            number: "Step 5",
            title: "Jobs Are Booked or Routed",
            description: "Clara books appointments directly or routes complex requests to the right person on your team.",
            features: [
                "Direct calendar integration",
                "Intelligent routing rules",
                "Seamless handoff when needed"
            ],
            icon: Calendar
        }
    ];

    return (
        <section className="relative bg-white pb-24">
            <div className="text-center pt-24 pb-10 relative z-10 bg-white">
                <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">How It Works</div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    How Clara <span className="text-clara-red">Answers</span> Works
                </h2>
            </div>

            <div className="relative">
                {/* Sticky 3D Background */}
                <div className="sticky top-0 h-screen w-full hidden md:block overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0 pointer-events-none" />
                    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
                        <HowItWorks3DScene activeStep={activeStep} />
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
