const HowItWorksHero = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    How Clara Works
                </h1>

                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Seven intelligent layers working together to transform your business operations from first contact to final payment
                </p>
            </div>
        </section>
    );
};

export default HowItWorksHero;
