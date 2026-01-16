import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain } from "lucide-react"; // Using Brain icon for AI Field Intelligence
import { openHubSpotForm } from "@/utils/hubspotForm";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";
import { Canvas } from "@react-three/fiber";
import { FieldCopilot3DScene } from "./FieldCopilot3DScene";
import { Suspense } from "react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative mx-auto px-4 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-clara-red text-sm font-medium mb-8">
                            <Brain className="w-4 h-4" />
                            AI Field Intelligence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            Clara AI <span className="text-clara-red">Field Co-Pilot</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                            Real-time AI guidance for field teams to work hands-free, document accurately, and complete jobs with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                            <Button size="lg" className="bg-clara-red hover:bg-red-700 text-white px-8 h-12 rounded-full font-medium group" onClick={openHubSpotForm}>
                                Book a Demo
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <ListenToClaraButton className="border-clara-red text-clara-red hover:bg-red-50 px-8 h-12 rounded-full font-medium bg-transparent border-2 border-red-100" />
                        </div>
                    </div>

                    {/* Right Column: 3D Model */}
                    <div className="h-[500px] w-full relative">
                        <div className="absolute inset-0">
                            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
                                <Suspense fallback={null}>
                                    <FieldCopilot3DScene />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
