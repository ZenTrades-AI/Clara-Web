import { openClaraLiveForm } from "@/utils/claraLiveForm";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
                <div className="max-w-4xl mx-auto">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {videos.map((video, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-premium bg-black">
                                            <iframe
                                                className="absolute inset-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${video.id}`}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

            </div>
        </section>
    );
};

export default ClaraInAction;
