const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-12 border border-border shadow-premium">
          <div className="text-5xl mb-8">💬</div>
          
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed">
            "Our DSO dropped from 45 days to 28 days in three months. Clara handles the awkward collection calls so we don't have to."
          </blockquote>
          
          <div className="space-y-1">
            <div className="font-semibold text-lg text-foreground">Michael Torres</div>
            <div className="text-muted-foreground">CFO, Multi-Location Plumbing Group</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
