import React from 'react';
import { Clock, FileCheck, Bell, Users, Phone, DollarSign } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const benefits = [
    {
        icon: Clock,
        title: "Faster inspections",
        description: "Without cutting corners",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: FileCheck,
        title: "Cleaner documentation",
        description: "On every job",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: Bell,
        title: "Better follow-ups",
        description: "Without reminders",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: Users,
        title: "More confident crews",
        description: "In the field",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: Phone,
        title: "Fewer missed calls",
        description: "24/7 coverage",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: DollarSign,
        title: "Faster payments",
        description: "No chasing needed",
        color: "bg-red-50 text-red-600"
    }
];

const WhyTeamsChooseClara = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            Why Teams Choose <span className="text-[#D32F2F]">Clara</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Real outcomes that make a difference every day
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                    {benefits.map((benefit, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 hover:border-[#D32F2F]/20 hover:shadow-lg transition-all duration-300 bg-white h-full group">
                                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <benefit.icon className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTeamsChooseClara;
