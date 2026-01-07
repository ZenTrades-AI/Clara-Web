import { WifiOff, Truck, Camera, BookOpen, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const DesignedForRealWorld = () => {
    const features = [
        {
            icon: WifiOff,
            title: "No WiFi? No Problem",
            description: "Works offline in basements and attics."
        },
        {
            icon: Truck,
            title: "Truck Stocking",
            description: "Knows what parts are on which truck."
        },
        {
            icon: Camera,
            title: "Photo Heavy Workflows",
            description: "Analyzes job site photos instantly."
        },
        {
            icon: BookOpen,
            title: "Complex Pricebooks",
            description: "Navigates thousands of SKUs easily."
        },
        {
            icon: MapPin,
            title: "Multi-Location Operations",
            description: "Manages multiple branches seamlessly."
        }
    ];

    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Designed for the Real World
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We know service work is messy. Clara is built for the chaos of the field.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="bg-white p-6 rounded-2xl text-center border border-gray-100 h-full hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignedForRealWorld;
