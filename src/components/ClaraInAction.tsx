import { openClaraLiveForm } from "@/utils/claraLiveForm";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const videos = [
    {
        title: "John Owens Services",
        id: "PVdznLToSXA"
    },
    {
        title: "Apex Residential Solutions",
        id: "JFNQgfWnOE0"
    },
    {
        title: "Rapid Fire Protection",
        id: "N1DB0MDbDsk"
    },
    {
        title: "Noor Electrical Services",
        id: "RcterWCx1_U"
    }
];

const ClaraInAction = () => {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        const interval = setInterval(() => {
            api.scrollNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [api]);

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

                {/* Video Carousel Section */}
                <div className="w-full max-w-7xl mx-auto">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {videos.map((video, index) => (
                                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="p-2">
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-premium bg-black border border-white/10">
                                            <iframe
                                                className="absolute inset-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${video.id}`}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <h3 className="mt-4 text-center font-medium text-foreground">{video.title}</h3>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex h-12 w-12 border-2 [&>svg]:w-6 [&>svg]:h-6" />
                        <CarouselNext className="hidden md:flex h-12 w-12 border-2 [&>svg]:w-6 [&>svg]:h-6" />
                    </Carousel>
                </div>

            </div>
        </section>
    );
};

export default ClaraInAction;
