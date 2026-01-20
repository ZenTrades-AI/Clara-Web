import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonial = () => {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white rounded-xl p-12 md:p-14 border border-border shadow-premium">
          {/* Quote icon */}
          <div className="absolute top-10 left-10 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary" strokeWidth={2} />
          </div>
          
          {/* Testimonial content */}
          <div className="pt-8">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-10 leading-relaxed">
              "Clara has transformed our operations. For the first time ever, every call gets answered — and our team isn't drowning in after-hours work. We booked more jobs in a single month than we did in an entire quarter."
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">MJ</span>
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">Owner, Johnson HVAC</div>
                </div>
              </div>
              
              <Button variant="outline" className="gap-2 border-2">
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
