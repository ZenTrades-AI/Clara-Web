import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Glasses, Phone, DollarSign } from "lucide-react";
import { openClaraLiveForm } from "@/utils/claraLiveForm";

interface HomeHeroOverlayProps {
    scrollProgress: number;
}

export const HomeHeroOverlay = ({ scrollProgress }: HomeHeroOverlayProps) => {
    // Opacity for the initial centered content (fades out as we scroll)
    const introOpacity = Math.max(0, 1 - scrollProgress * 2);
    const introScale = 1 + scrollProgress * 0.5;
    const introPointerEvents = scrollProgress > 0.5 ? "none" : "auto";

    // Opacity for the Hero content (fades in as we scroll)
    const heroOpacity = Math.max(0, (scrollProgress - 0.5) * 2);
    const heroTranslateX = (1 - Math.min(1, (scrollProgress - 0.5) * 2)) * -50; // Slide in from left
    const heroPointerEvents = scrollProgress < 0.5 ? "none" : "auto";

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* SECTION 1: INTRO (Centered) */}
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                style={{
                    opacity: introOpacity,
                    scale: introScale,
                    pointerEvents: introPointerEvents as any
                }}
            >
                <h1 className="text-[12vw] font-black text-slate-900/10 tracking-tighter leading-none select-none">
                    CLARA AI
                </h1>

                {/* Floating Info Cards */}
                <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto">
                    <div className="absolute top-1/4 left-10 md:left-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-800">24/7 Receptionist</span>
                        </div>
                        <p className="text-sm text-slate-600">Never miss a call. Clara answers instantly, day or night.</p>
                    </div>

                    <div className="absolute bottom-1/3 right-10 md:right-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs text-right">
                        <div className="flex items-center gap-3 mb-2 justify-end">
                            <span className="font-bold text-slate-800">Smart Dispatch</span>
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Glasses className="w-5 h-5" />
                            </div>
                        </div>
                        <p className="text-sm text-slate-600">Assign the right tech to the right job automatically.</p>
                    </div>
                </div>

                <div className="absolute bottom-20 text-center animate-bounce">
                    <p className="text-sm font-medium text-slate-500 mb-2">Scroll to Explore</p>
                    <div className="w-6 h-10 border-2 border-slate-300 rounded-full mx-auto flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    </div>
                </div>
            </motion.div>


            {/* SECTION 2: HERO CONTENT (Left Aligned) */}
            <motion.div
                className="absolute inset-0 flex items-center z-20"
                style={{
                    opacity: heroOpacity,
                    x: heroTranslateX,
                    pointerEvents: heroPointerEvents as any
                }}
            >
                <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="max-w-2xl w-full mx-auto md:mx-0 md:max-w-xl lg:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left mt-[40vh] md:mt-0">
                        {/* BADGE */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-border shadow-sm mb-8 hover:shadow-md transition-all cursor-default pointer-events-auto">
                            <div className="flex gap-1.5 text-[#D32F2F]">
                                <Glasses className="w-4 h-4" />
                                <Phone className="w-4 h-4" />
                                <DollarSign className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold text-foreground tracking-wide">Three Agents. One Operating Layer.</span>
                        </div>

                        {/* HEADLINE */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-foreground">
                            The AI Growth Engine for <br className="hidden md:block" />
                            <span className="text-[#D32F2F]">Service Contractors</span>
                        </h1>

                        {/* SUBHEADLINE */}
                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                            Clara answers calls, guides field teams, and collects payments — <br className="hidden md:block" />
                            so your business grows without adding headcount.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto pointer-events-auto">
                            <Button
                                className="px-8 py-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
                                asChild
                            >
                                <Link to="/pricing">Book a Growth Strategy Demo <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="px-8 py-6 bg-white text-foreground border border-border hover:bg-gray-50 hover:text-[#D32F2F] rounded-full text-lg font-semibold hover:scale-105 transition-all group w-full sm:w-auto"
                                onClick={openClaraLiveForm}
                            >
                                <Play className="mr-2 w-5 h-5 text-[#D32F2F] fill-[#D32F2F]" /> Try Clara Live
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
