import { Thermometer, Clock, Users, Calendar, AlertCircle, Wrench } from "lucide-react";

const HVACChallenges = () => {
    const cards = [
        {
            icon: Thermometer,
            title: "Seasonal Demand Is Unforgiving",
            description: "The first heat wave of summer or the first freeze of winter triggers a flood of calls. Your phone rings off the hook while your techs are already booked solid. Every missed call is a job that goes to your competitor."
        },
        {
            icon: Clock,
            title: "After-Hours Emergencies Are the Norm",
            description: "AC goes out at 9 PM. Furnace stops working at 6 AM. Your customers expect you to answer, but your team needs to sleep. The calls you miss after hours are often the highest-margin emergency jobs."
        },
        {
            icon: Users,
            title: "Technician Capacity Limits Growth",
            description: "Hiring is hard. Training takes months. Your best techs are overloaded with callbacks and warranty work while new leads sit waiting. You cannot grow faster than you can train."
        },
        {
            icon: Calendar,
            title: "Maintenance Agreements Need Follow-Through",
            description: "You sell maintenance plans for recurring revenue, but scheduling tune-ups, sending reminders, and following up on renewals falls through the cracks when your team is buried in service calls."
        },
        {
            icon: AlertCircle,
            title: "Diagnostics Are Complex and Costly",
            description: "Troubleshooting a system failure requires experience. Junior techs call senior techs for help. Senior techs spend half their day on the phone walking others through diagnostics instead of running their own calls."
        },
        {
            icon: Wrench,
            title: "Install Revenue Gets Stuck in AR",
            description: "Equipment replacements and new installs are your highest-ticket jobs, but collecting final payment after the job is done requires follow-up. Customers delay. You wait. Cash flow suffers."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The Reality of Running an HVAC Business
                    </h2>
                    <p className="text-xl text-gray-600">
                        HVAC is a business of extremes. When it is hot, everyone calls. When it is cold, everyone calls. And when demand spikes, your team is already stretched thin.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-clara-red mb-6">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HVACChallenges;
