import { Phone, MessageSquare, Mail, Smartphone, Wrench } from "lucide-react";

const channels = [
    {
        icon: Phone,
        title: "Voice",
        description: "4-second answer time with natural conversation",
    },
    {
        icon: MessageSquare,
        title: "Chat",
        description: "Real-time website chat support",
    },
    {
        icon: Mail,
        title: "Email",
        description: "Automated email workflows and responses",
    },
    {
        icon: Smartphone,
        title: "SMS",
        description: "Text message reminders and updates",
    },
    {
        icon: Wrench,
        title: "API",
        description: "Seamless integration with existing systems",
    },
];

const OmnichannelSupport = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Omnichannel Support
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Clara connects with your customers across all communication channels
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {channels.map((channel, index) => {
                        const Icon = channel.icon;
                        return (
                            <div
                                key={index}
                                className="text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors">
                                    <Icon className="w-10 h-10 text-primary" strokeWidth={2} />
                                </div>

                                <h3 className="text-lg font-bold mb-2 text-foreground">
                                    {channel.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {channel.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OmnichannelSupport;
