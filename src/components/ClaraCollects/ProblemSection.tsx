import { Clock, RefreshCw, TrendingDown, UserX } from "lucide-react";

const ProblemSection = () => {
    const problems = [
        {
            icon: Clock,
            title: "Delayed Payments",
            description: "Invoices sit unpaid for weeks or months. Cash flow suffers while completed work waits for collection.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: RefreshCw,
            title: "Manual Follow-ups",
            description: "Your team spends valuable time chasing payments instead of serving customers and growing the business.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: TrendingDown,
            title: "Inconsistent Collections",
            description: "Without a system, some invoices get followed up and others slip through the cracks.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: UserX,
            title: "Strained Relationships",
            description: "Awkward payment conversations can damage customer relationships and future business opportunities.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">The Problem</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Clara <span className="text-clara-red">Collects</span> Exists
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Field service businesses complete excellent work but struggle to get paid on time. Clara Collects ensures every completed job turns into completed payment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className={`w-14 h-14 ${problem.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                <problem.icon className={`w-7 h-7 ${problem.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
