import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const LOGOS = [
    "ABQ.png", "AGF Manufacturing.svg", "All Star Plumbing.png", "All-Purpose.webp",
    "Calgary.webp", "Classic Electric.png", "Cool Change.png", "Ener Confort.png",
    "HVAC Home service.webp", "Hallside.png", "Jimselectric.webp", "John .webp",
    "KANTRA+MAPLE+cropped-1920w.webp", "Keystone.png", "Next level.png", "P3.webp",
    "Pacific AIR.svg", "Perrottas-Plumbing-Logo.svg", "Pro Tech Fire INC.png", "RGV.png",
    "RapidFire .webp", "Valley Fire .avif", "York Power.svg", "Zenaelectric.jpg",
    "icy-hot-heating-and-air-logo-252w.png", "jays.avif", "kord.webp", "on demand.webp"
];

// Helper to get repeated logos to fill slots
const getLogos = (count: number) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(LOGOS[i % LOGOS.length]);
    }
    return result;
};

const OrbitingCircles = () => {
    const { scrollY } = useScroll();

    // Map global scroll Y pixels to rotation degrees directly
    // This ensures continuous rotation as the user scrolls down the entire page
    // mimicking the original snippet: outer.style.transform = `rotate(${scrollY * 0.05}deg)`;
    const outerRotate = useTransform(scrollY, (value) => value * 0.05);
    const middleRotate = useTransform(scrollY, (value) => value * -0.08);
    const innerRotate = useTransform(scrollY, (value) => value * 0.12);

    return (
        <div className="relative h-[600px] md:h-[1200px] bg-black overflow-hidden flex items-center justify-center font-['Inter'] text-white">


            {/* CUT CARD */}
            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[95%] md:max-w-5xl bg-black/80 md:bg-black px-4 py-8 md:px-9 md:py-16 text-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-sm md:backdrop-blur-none">
                <h2 className="m-0 mb-3 text-3xl md:text-5xl font-medium text-white">
                    The AI Growth Engine behind modern service teams
                </h2>
                <p className="m-0 text-base md:text-xl text-[#aaa] leading-relaxed max-w-3xl mx-auto">
                    Teams trust Clara to answer calls instantly, guide technicians in the field, and keep payments moving across the entire customer lifecycle.
                </p>
            </div>

            {/* RESPONSIVE SCALE WRAPPER */}
            <div className="transform scale-[0.35] sm:scale-50 md:scale-75 lg:scale-100 transition-transform duration-300 origin-center">
                {/* ORBIT CONTAINER */}
                <div className="relative w-[1000px] h-[1000px]">

                    {/* OUTER CIRCLE (24 items) - 1000px */}
                    <motion.div
                        style={{ rotate: outerRotate }}
                        className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full border border-white/5"
                    >
                        {getLogos(24).map((logo, i) => (
                            <div
                                key={`outer-${i}`}
                                className="absolute left-1/2 top-0"
                                style={{
                                    transformOrigin: "0 500px",
                                    transform: `rotate(${i * 15}deg) translateX(-50%)`,
                                }}
                            >
                                <div className="w-[80px] h-[80px] flex items-center justify-center">
                                    <img
                                        src={`/photos/Logos/${logo}`}
                                        alt="logo"
                                        className="w-full h-full object-contain rounded-xl transition-all duration-300 transform hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* MIDDLE CIRCLE (16 items) - 700px */}
                    <motion.div
                        style={{ rotate: middleRotate }}
                        className="absolute top-[150px] left-[150px] w-[700px] h-[700px] rounded-full border border-white/5"
                    >
                        {getLogos(16).map((logo, i) => (
                            <div
                                key={`middle-${i}`}
                                className="absolute left-1/2 top-0"
                                style={{
                                    transformOrigin: "0 350px",
                                    transform: `rotate(${i * 22.5}deg) translateX(-50%)`,
                                }}
                            >
                                <div className="w-[60px] h-[60px] flex items-center justify-center">
                                    <img
                                        src={`/photos/Logos/${logo}`}
                                        alt="logo"
                                        className="w-full h-full object-contain rounded-lg transition-all duration-300 transform hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* INNER CIRCLE (10 items) - 450px */}
                    <motion.div
                        style={{ rotate: innerRotate }}
                        className="absolute top-[275px] left-[275px] w-[450px] h-[450px] rounded-full border border-white/5"
                    >
                        {getLogos(10).map((logo, i) => (
                            <div
                                key={`inner-${i}`}
                                className="absolute left-1/2 top-0"
                                style={{
                                    transformOrigin: "0 225px",
                                    transform: `rotate(${i * 36}deg) translateX(-50%)`,
                                }}
                            >
                                <div className="w-[40px] h-[40px] flex items-center justify-center">
                                    <img
                                        src={`/photos/Logos/${logo}`}
                                        alt="logo"
                                        className="w-full h-full object-contain rounded transition-all duration-300 transform hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default OrbitingCircles;
