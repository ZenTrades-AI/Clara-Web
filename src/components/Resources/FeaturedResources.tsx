import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Wrench, BookOpen } from "lucide-react";

const resources = [
    {
        icon: BarChart3,
        title: "ROI Case Studies",
        subtitle: "Case Study Collection",
        description: "Real customer stories showing measurable business results.",
        cta: "Access Resource",
        link: "/case-studies",
        comingSoon: false
    },
    {
        icon: Wrench,
        title: "Integrations",
        subtitle: "Technical Docs",
        description: "Comprehensive integration guides and technical resources.",
        cta: "Learn More",
        link: "/integrations",
        comingSoon: false
    },
    {
        icon: BookOpen,
        title: "Blogs",
        subtitle: "Industry Insights",
        description: "Latest insights on AI, growth strategies, and service business operations.",
        cta: "Coming Soon",
        link: "/resources/blogs",
        comingSoon: true
    },
];

const FeaturedResources = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* MAIN SECTION */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            Featured Resources
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Essential guides and tools to maximize your AI investment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.map((resource, index) => {
                            const Icon = resource.icon;

                            const handleClick = (e: any) => {
                                if (resource.comingSoon) {
                                    e.preventDefault();
                                    setShowPopup(true);
                                }
                            };

                            return (
                                <Link
                                    key={index}
                                    to={resource.comingSoon ? "#" : resource.link}
                                    onClick={handleClick}
                                    className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-premium hover:scale-105 transition-all duration-300 block cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                                        {resource.title}
                                    </h3>

                                    <p className="text-sm text-primary font-semibold mb-4">
                                        {resource.subtitle}
                                    </p>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                        {resource.description}
                                    </p>

                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                                        {resource.cta}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* POPUP MODAL */}
            {showPopup && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999]"
                    onClick={() => setShowPopup(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-3 text-foreground">
                            Coming Soon 🚧
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                            Our blog section is currently in development.
                            New industry insights, AI deep dives, and growth playbooks are on the way!
                        </p>

                        <Button
                            className="bg-primary text-white rounded-full px-8 py-3 hover:bg-primary/90"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeaturedResources;
