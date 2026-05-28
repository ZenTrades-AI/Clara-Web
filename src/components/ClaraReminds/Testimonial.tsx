const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-12 border border-border shadow-premium">
          <div className="text-5xl mb-8">💬</div>
          
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed">
            "We're converting 30% more quotes just by having Clara follow up automatically. It's like having a CSR who never forgets."
          </blockquote>
          
          <div className="space-y-1">
            <div className="font-semibold text-lg text-foreground">Sarah Chen</div>
            <div className="text-muted-foreground">Operations Manager, Regional HVAC Company</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
