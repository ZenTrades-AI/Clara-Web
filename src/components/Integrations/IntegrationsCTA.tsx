import { Button } from "@/components/ui/button";

const IntegrationsCTA = () => {
    return (
        <section className="relative py-24 px-6 bg-white overflow-hidden text-center">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,46,65,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,46,65,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Turn your tech stack into an <span className="text-primary">AI growth engine</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                    Connect Clara to your existing tools and watch AI transform every customer interaction, job, and payment into growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg px-8 py-6 text-base">
                        Book a Growth Strategy Demo
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-semibold px-8 py-6 text-base">
                        Explore Integrations
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsCTA;
