import { PhoneOff, Users, Clock, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
    const problems = [
        {
            icon: PhoneOff,
            title: "Missed Calls",
            description: "Every unanswered call is a lost opportunity. Customers move on to competitors who pick up the phone.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Users,
            title: "Overloaded Staff",
            description: "Your team is stretched thin, juggling multiple responsibilities. Calls pile up during busy periods.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: Clock,
            title: "After-Hours Demand",
            description: "Emergencies do not follow business hours. Customers need help when your office is closed.",
            bgColor: "bg-red-50",
            iconColor: "text-clara-red"
        },
        {
            icon: AlertTriangle,
            title: "Inconsistent Handling",
            description: "Different people answer differently. Quality varies, information gets lost, opportunities slip away.",
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
                        Why Clara <span className="text-clara-red">Answers</span> Exists
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Field service businesses lose revenue every day to calls that never get answered properly. Clara Answers is your reliability layer for inbound demand.
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
