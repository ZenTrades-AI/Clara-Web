import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-card rounded-xl p-10 md:p-12 border border-border shadow-card">
          <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary" />
          </div>
          
          <div className="pt-8">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
              "Our scheduling efficiency jumped overnight. Clara assigns the right technician every time, and our dispatching errors dropped by 40%. It's transformed how we operate."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">SM</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Sarah Martinez</div>
                <div className="text-sm text-muted-foreground">Operations Manager, National HVAC Provider</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
