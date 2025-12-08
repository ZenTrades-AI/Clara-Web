const PricingHero = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0e] to-[#0a0a0a]">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Get Started with Clara AI
                </h1>

                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Tell us about your business and we'll customize Clara to fit your specific needs
                </p>
            </div>
        </section>
    );
};

export default PricingHero;
