import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
    {
        title: "Scale inspections without slowing crews",
        description: "Real-time AI guidance that helps roofing teams complete more inspections with zero drop in quality.",
        tags: ["Field Co-Pilot", "Roofing", "Growth"],
        link: "/solutions/roofing-operations",
        type: "field"
    },
    {
        title: "Do more inspections with fewer people",
        description: "AI guidance lets less experienced techs perform like veterans, reducing training time.",
        tags: ["Field Co-Pilot", "Roofing", "Staff Shortage"],
        link: "/solutions/roofing-staff-shortage",
        type: "field"
    },
    {
        title: "Inspection reports that pass every time",
        description: "Guided workflows ensure nothing gets missed during fire safety inspections.",
        tags: ["Field Co-Pilot", "Fire", "Cost"],
        link: "/solutions/fire-protection-cost",
        type: "field"
    },
    {
        title: "Your first AI that actually helps in the field",
        description: "A practical introduction to AI for electrical teams — no complexity, immediate value.",
        tags: ["Field Co-Pilot", "Electrical", "New to AI"],
        link: "/solutions/electrical-new-to-ai",
        type: "field"
    },
    {
        title: "Faster HVAC diagnostics with AI backup",
        description: "Field Co-Pilot helps technicians troubleshoot faster with real-time access to manuals and history.",
        tags: ["Field Co-Pilot", "HVAC", "Growth"],
        link: "/solutions/hvac-growth",
        type: "field"
    },
    {
        title: "Train new plumbers faster with AI guidance",
        description: "Real-time prompts help junior techs perform complex repairs correctly the first time.",
        tags: ["Field Co-Pilot", "Plumbing", "Staff Shortage"],
        link: "/solutions/plumbing-staff-shortage",
        type: "field"
    },
    {
        title: "Answer every call without hiring",
        description: "AI answers calls, books jobs, and captures details — 24/7.",
        tags: ["Answers", "HVAC", "Staff Shortage"],
        link: "/solutions/hvac-answers",
        type: "answers"
    },
    {
        title: "Capture more emergency calls",
        description: "Never lose a water heater emergency or backup call to voicemail again.",
        tags: ["Answers", "Plumbing", "Growth"],
        link: "/solutions/plumbing-answers",
        type: "answers"
    },
    {
        title: "Start with 24/7 call coverage",
        description: "The easiest AI to adopt — answers calls professionally while you evaluate full dispatch automation.",
        tags: ["Answers", "Fire", "New to AI"],
        link: "/solutions/fire-protection-answers",
        type: "answers"
    },
    {
        title: "Reduce call center costs by 60%",
        description: "Clara handles routine calls so your team focuses on complex jobs.",
        tags: ["Answers", "Electrical", "Cost"],
        link: "/solutions/electrical-cost",
        type: "answers"
    },
    {
        title: "Never miss a storm call again",
        description: "When storms hit and call volume spikes, Clara handles the overflow instantly.",
        tags: ["Answers", "Roofing", "Staff Shortage"],
        link: "/solutions/roofing-answers",
        type: "answers"
    },
    {
        title: "Book more HVAC jobs while you sleep",
        description: "After-hours calls convert just as well as daytime with Clara answering.",
        tags: ["Answers", "HVAC", "Growth"],
        link: "/solutions/hvac-after-hours",
        type: "answers"
    },
    {
        title: "Get paid faster without chasing invoices",
        description: "Automated follow-ups that turn completed jobs into cash.",
        tags: ["Collects", "Fire", "Cost"],
        link: "/solutions/fire-protection-collects-cost",
        type: "collects"
    },
    {
        title: "Reduce AR aging by 40%",
        description: "Automated, friendly follow-ups that collect faster without awkward conversations.",
        tags: ["Collects", "HVAC", "Cost"],
        link: "/solutions/hvac-collects-cost",
        type: "collects"
    },
    {
        title: "Automate collections without the hassle",
        description: "A gentle introduction to AI — just let Clara handle the follow-ups.",
        tags: ["Collects", "Plumbing", "New to AI"],
        link: "/solutions/plumbing-collects-new-to-ai",
        type: "collects"
    },
    {
        title: "Fund your growth with faster cash",
        description: "Faster payments mean more working capital to take on bigger projects.",
        tags: ["Collects", "Roofing", "Growth"],
        link: "/solutions/roofing-collects-growth",
        type: "collects"
    },
    {
        title: "Collect without a collections team",
        description: "Clara handles all payment follow-ups so your office staff can focus on service.",
        tags: ["Collects", "Electrical", "Staff Shortage"],
        link: "/solutions/electrical-collects-staff-shortage",
        type: "collects"
    },
    {
        title: "Improve cash flow for fire protection growth",
        description: "Collect faster from commercial clients with consistent, professional follow-ups.",
        tags: ["Collects", "Fire", "Growth"],
        link: "/solutions/fire-protection-collects-growth",
        type: "collects"
    }
];

const ExploreSolutions = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!api) {
            return;
        }

        const interval = setInterval(() => {
            if (!isPaused) {
                api.scrollNext();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [api, isPaused]);

    return (
        <section className="py-20 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Explore Solutions by Role, Industry, and <span className="text-[#D32F2F]">Challenge</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Find the right Clara solution for your specific needs
                    </p>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <CarouselContent className="-ml-4">
                        {solutions.map((solution, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="bg-white rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md hover:bg-gradient-to-br hover:from-white hover:to-[#FFF5F5] hover:border-[#D32F2F]/30 transition-all h-full flex flex-col group">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {solution.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${i === 0
                                                    ? solution.type === 'field' ? 'bg-[#FFEBEE] text-[#D32F2F]'
                                                        : solution.type === 'answers' ? 'bg-[#E8F5E9] text-[#2E7D32]'
                                                            : 'bg-[#E3F2FD] text-[#1565C0]'
                                                    : 'bg-gray-100 text-gray-600'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-2">
                                        {solution.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                        {solution.description}
                                    </p>

                                    <Link
                                        to={solution.link}
                                        className={`inline-flex items-center text-xs font-bold hover:gap-2 transition-all group-hover:translate-x-1 ${solution.type === 'field' ? 'text-[#D32F2F]'
                                            : solution.type === 'answers' ? 'text-[#2E7D32]'
                                                : 'text-[#1565C0]'
                                            }`}
                                    >
                                        {solution.type === 'field' ? 'See It in Action'
                                            : solution.type === 'answers' ? 'See Clara Answer'
                                                : 'See How Payments Work'} <ArrowRight className="ml-1 w-3 h-3" />
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-4 lg:-left-12" />
                        <CarouselNext className="-right-4 lg:-right-12" />
                    </div>
                </Carousel>

                <div className="text-center mt-12">
                    <Button variant="outline" className="rounded-full px-8 border-2 hover:text-foreground" asChild>
                        <Link to="/solutions">
                            See All Solutions <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ExploreSolutions;
