import { Button } from "@/components/ui/button";
import { ListenToClaraButton } from "@/components/ListenToClaraButton";
import { openHubSpotForm } from "@/utils/hubspotForm";

const photoFileNames = [
    // WhatsApp images
    "WhatsApp Image 2025-06-18 at 21.56.27.jpeg",
    "WhatsApp Image 2025-06-18 at 21.56.25.jpeg",
    "WhatsApp Image 2025-06-18 at 21.56.23.jpeg",
    "WhatsApp Image 2025-06-18 at 01.21.02.jpeg",
    "WhatsApp Image 2025-06-17 at 11.55.49.jpeg",
    "WhatsApp Image 2025-06-17 at 11.55.49 (2).jpeg",
    "WhatsApp Image 2025-06-17 at 11.55.49 (1).jpeg",
    "WhatsApp Image 2025-06-17 at 11.55.48.jpeg",
    "WhatsApp Image 2025-06-17 at 11.55.47.jpeg",
    "WhatsApp Image 2025-06-17 at 11.55.47 (1).jpeg",

    // Camera images
    "IMG_6243.JPG",
    "IMG_6211.JPG",
    "IMG_6206.JPG",
    "IMG_6205.JPG",
    "IMG_6203.JPG",
    "IMG_6197.JPG",
    "IMG_6191.JPG",
    "IMG_6189.JPG",
    "IMG_6185.JPG",

    "IMG_6161.JPG",
    "IMG_6160.JPG",
    "IMG_6158.JPG",
    "IMG_6157.JPG",

    // Booth & demo images
    "Copy of Service World Expo Booth.jpg",
    "Copy of Demo(2).jpg",
    "Copy of Demo(1).jpg",
    "Copy of Demo.jpg",
    "Copy of Attendees.jpg",
    "Copy of Attendee.jpg",
];

const photos = photoFileNames.map((file, index) => ({
    id: index + 1,
    src: `/photos/${file}`,
}));

const PhotoMosaic = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Photo Mosaic Grid */}
                <div className="mb-16 relative">
                    {/* Row 1 */}
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-4">
                        {photos.slice(0, 9).map((photo) => (
                            <div
                                key={photo.id}
                                className="aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-200 hover:scale-110 hover:shadow-lg hover:z-10 cursor-pointer"
                            >
                                <img
                                    src={photo.src}
                                    alt={`Clara tradeshow ${photo.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-4 px-4 md:px-12 lg:px-24">
                        {photos.slice(9, 17).map((photo) => (
                            <div
                                key={photo.id}
                                className="aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-200 hover:scale-110 hover:shadow-lg hover:z-10 cursor-pointer"
                            >
                                <img
                                    src={photo.src}
                                    alt={`Clara tradeshow ${photo.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-4 px-8 md:px-20 lg:px-44">
                        {photos.slice(17, 24).map((photo) => (
                            <div
                                key={photo.id}
                                className="aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-200 hover:scale-110 hover:shadow-lg hover:z-10 cursor-pointer"
                            >
                                <img
                                    src={photo.src}
                                    alt={`Clara tradeshow ${photo.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-12 md:px-32 lg:px-64">
                        {photos.slice(24, 29).map((photo) => (
                            <div
                                key={photo.id}
                                className="aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-200 hover:scale-110 hover:shadow-lg hover:z-10 cursor-pointer"
                            >
                                <img
                                    src={photo.src}
                                    alt={`Clara tradeshow ${photo.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Content */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        The AI secret behind call centers for the trades
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                        See how Clara can transform how you run your operation — from first call to final payment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                            onClick={openHubSpotForm}
                        >
                            Book a Demo
                        </Button>
                        <ListenToClaraButton className="text-lg px-10 py-7 bg-white text-primary border-2 border-primary hover:bg-primary/5 hover:text-black rounded-full font-semibold transition-all" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoMosaic;
