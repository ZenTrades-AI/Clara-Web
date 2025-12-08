import { openClaraLiveForm } from "@/utils/claraLiveForm";

const ClaraInAction = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        See Clara in Action
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Watch how Clara handles real customer calls naturally, intelligently, and instantly.
                    </p>
                </div>

                {/* Video Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-premium">

                        {/* YouTube Player */}
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/PVdznLToSXA?si=EtS-uuNfkE1xtuLp"
                            title="Clara Live Calls"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                        {/* Play Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center pointer-events-auto">

                                {/* Play Button */}


                                {/* CTA Text */}
                                <div className="text-white text-lg font-semibold drop-shadow">
                                    Watch Clara Handle Live Calls
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClaraInAction;
