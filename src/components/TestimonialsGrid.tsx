import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsGrid = () => {
    return (
        <section id="case-studies" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Clara AI case studies & outcomes across verticals
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Real results from service contractors using Clara as their AI Growth Engine.
                    </p>
                </div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {/* Large Hero Card - Top Left (spans 2 columns) */}
                    <Link
                        to="/case-studies"
                        className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-[1.03] cursor-pointer min-h-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2a4a5e] via-[#1a3a4e] to-[#0a2a3e]" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                        <div className="relative h-full p-8 flex flex-col justify-between">
                            {/* Logo placeholder */}
                            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white font-bold text-sm w-fit">
                                A1 GARAGE
                            </div>

                            {/* Quote */}
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                    "Clara is giving us data accuracy and helping us book more calls. Their AI CSR now answers 24/7 and is booking over 85% of calls"
                                </p>
                                <div className="text-white/90 mb-4">
                                    <div className="font-semibold">Tommy Mello</div>
                                    <div className="text-sm text-white/70">Owner, A1 Garage</div>
                                </div>

                                {/* Play button */}
                                <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110">
                                    <Play className="w-5 h-5 text-white" fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    </Link>

                    {/* Tall CTA Card - Top Right */}
                    <Link
                        to="/case-studies"
                        className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-[1.03] cursor-pointer min-h-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a]" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                        <div className="relative h-full p-8 flex flex-col justify-center items-start">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                Hear why our customers love Clara
                            </h3>
                            <p className="text-white/80 mb-6">
                                Watch short stories from real service contractors.
                            </p>
                            <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Bottom Two Medium Cards */}
                    <Link
                        to="/case-studies"
                        className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-[1.03] cursor-pointer min-h-[300px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#134e4a] via-[#115e59] to-[#0f766e]" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                        <div className="relative h-full p-8 flex flex-col justify-between">
                            <span className="inline-block px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full text-xs font-semibold text-teal-200 w-fit">
                                Fire Protection
                            </span>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    20 hours saved weekly on manual call listening
                                </h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Aaron Gaynor<br />
                                    CEO & Owner | Eco Plumbers & HVAC
                                </p>
                                <div className="flex gap-4 text-teal-200">
                                    <div>
                                        <div className="text-2xl font-bold">85% AI</div>
                                        <div className="text-xs text-white/70">Call handling</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">94%</div>
                                        <div className="text-xs text-white/70">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="/case-studies"
                        className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-[1.03] cursor-pointer min-h-[300px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce] via-[#6b21a8] to-[#581c87]" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                        <div className="relative h-full p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="inline-block px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-200">
                                    PE Roll-up
                                </span>
                                <span className="inline-block px-3 py-1 bg-primary backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                    +32% Revenue
                                </span>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    16% increase in booking rate in just 30 days
                                </h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Dari Payrow<br />
                                    Owner | R.S. Andrews
                                </p>
                                <div className="flex gap-6 text-purple-200">
                                    <div>
                                        <div className="text-2xl font-bold">+16%</div>
                                        <div className="text-xs text-white/70">Booking increase</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">4s avg</div>
                                        <div className="text-xs text-white/70">Response time</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">+32%</div>
                                        <div className="text-xs text-white/70">Revenue growth</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="
        text-lg px-10 py-6 
        border-2 border-primary 
        text-black 
        hover:text-black 
        hover:bg-primary/5 
        rounded-full font-semibold
    "
                        asChild
                    >
                        <Link to="/case-studies">
                            View All Case Studies
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsGrid;
