import { Phone, Calendar, Clock, DollarSign, TrendingUp, Users } from "lucide-react";

const ROISection = () => {
    const metrics = [
        {
            icon: Phone,
            title: "Missed Calls Recovered",
            description:
                "Every call answered means revenue that would have gone to competitors.",
        },
        {
            icon: Calendar,
            title: "Faster Job Bookings",
            description:
                "Instant scheduling converts more inquiries into paying customers.",
        },
        {
            icon: Clock,
            title: "Reduced Admin Overhead",
            description:
                "Less time on phones and paperwork means more time on billable work.",
        },
        {
            icon: DollarSign,
            title: "Faster Cash Collection",
            description:
                "Automated follow-ups shrink A/R aging and improve cash flow.",
        },
        {
            icon: TrendingUp,
            title: "Higher Technician Efficiency",
            description:
                "AI-guided workflows mean more jobs completed per tech, per day.",
        },
        {
            icon: Users,
            title: "Scale Without Hiring",
            description:
                "Handle more volume without proportionally increasing headcount.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Clara Is Designed to Pay for Itself
                    </h2>
                    <p className="text-lg text-slate-600">
                        Most customers evaluate Clara based on ROI, not software cost.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all bg-white"
                        >
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500">
                                <metric.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-slate-900">
                                {metric.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 rounded-full text-red-600 font-semibold text-sm">
                        <TrendingUp className="w-4 h-4" />
                        Typical payback period: 30–60 days
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROISection;
