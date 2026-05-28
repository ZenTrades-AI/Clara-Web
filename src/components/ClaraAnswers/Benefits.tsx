import { TrendingUp, Target, CheckCircle, UserMinus, Heart, Zap } from "lucide-react";

const Benefits = () => {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Higher Booking Rates",
            description: "More calls answered means more jobs booked. Simple math, significant impact.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Target,
            title: "No Missed Opportunities",
            description: "Every call gets answered. Every lead gets captured. Nothing slips through the cracks.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: CheckCircle,
            title: "Consistent Call Handling",
            description: "Every customer gets the same professional experience, every time they call.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: UserMinus,
            title: "Reduced Staffing Pressure",
            description: "Your team focuses on high-value work while Clara handles routine calls.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Heart,
            title: "Better Customer Experience",
            description: "Instant answers, no hold times, professional service around the clock.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Zap,
            title: "Faster Response Time",
            description: "Four second answer time. No customer waits, no opportunity cools off.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">What You Gain</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Businesses <span className="text-clara-red">Gain</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Clara Answers delivers measurable improvements across your entire inbound operation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
