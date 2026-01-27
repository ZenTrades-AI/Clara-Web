import { MapPin, Settings, ClipboardList, RefreshCw } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DesignedFor3DScene } from "./DesignedFor3DScene";

const DesignedFor = () => {
    const items = [
        {
            icon: MapPin,
            title: "On-Site Teams",
            description: "Designed for teams that work on customer sites, not behind desks."
        },
        {
            icon: ClipboardList,
            title: "Inspections",
            description: "Works across inspections, assessments, and compliance checks."
        },
        {
            icon: Settings,
            title: "Repairs and Maintenance",
            description: "Fits naturally into repair workflows and maintenance routines."
        },
        {
            icon: RefreshCw,
            title: "Existing Workflows",
            description: "Fits into existing workflows without retraining teams or changing processes."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: 3D Model */}
                    <div className="relative min-h-[400px] w-full">
                        <div className="absolute inset-0">
                            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
                                <Suspense fallback={null}>
                                    <DesignedFor3DScene />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>

                    <div className="text-left">
                        <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">BUILT FOR THE REAL WORLD</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Designed for <span className="text-clara-red">Field Service</span> Businesses
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Clara adapts to how your business actually runs, not how software thinks it should. Field Co-Pilot works wherever your teams work.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-clara-red shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignedFor;
