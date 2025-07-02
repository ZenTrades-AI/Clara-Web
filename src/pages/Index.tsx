
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import AIStackSection from '@/components/AIStackSection';
import IntegrationCarousel from '@/components/IntegrationCarousel';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-clara-navy text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] lg:min-h-[600px]">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-clara-gold/10 border border-clara-gold/20 rounded-full">
                  <span className="text-clara-gold font-medium text-sm">ROI &lt; 30 days</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight">
                  The AI Growth Engine for 
                  <span className="text-clara-gold"> Service Contractors</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  From first ring to final payment. Clara answers, dispatches, and collects - delivering 
                  <span className="text-clara-gold font-semibold"> +28% booked revenue</span> with four-second answer time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
                  Book a 15-min Demo
                </Button>
                <ROICalculator 
                  trigger={
                    <Button variant="outline" className="border-clara-gold text-clara-gold hover:bg-clara-gold/10 px-8 py-3 text-lg">
                      Calculate ROI
                    </Button>
                  }
                />
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-clara-gold">4s</div>
                  <div className="text-sm text-gray-300">Answer Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-clara-gold">+28%</div>
                  <div className="text-sm text-gray-300">Booked Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-clara-gold">85%</div>
                  <div className="text-sm text-gray-300">AI Confidence</div>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-clara-gold/20 to-clara-teal/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📞</span>
                  </div>
                  <p className="text-lg">Hero technician image placeholder</p>
                  <p className="text-sm mt-2">Real contractor on-site photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-clara-gold" size={24} />
        </div>
      </section>

      {/* Social Proof - Company Logos */}
      <section className="py-16 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-medium text-gray-600 mb-8">
              Trusted by leading contractors and PE platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Logo placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process - Moved to 3rd position */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
              Capture → Convert → Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clara's AI stack transforms every customer touchpoint into revenue growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Capture */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-clara-navy font-bold">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-clara-navy mb-4">Capture</h3>
              <p className="text-gray-600 mb-4">
                Every call answered in 4 seconds. AI handles intake, scheduling, and urgent dispatch with human-level conversation.
              </p>
              <div className="text-clara-gold font-semibold">Never miss another lead</div>
            </div>

            {/* Step 2: Convert */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-clara-navy font-bold">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-clara-navy mb-4">Convert</h3>
              <p className="text-gray-600 mb-4">
                Smart follow-ups, appointment reminders, and service optimization turn prospects into profitable customers.
              </p>
              <div className="text-clara-gold font-semibold">Maximize booking rates</div>
            </div>

            {/* Step 3: Collect */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-clara-navy font-bold">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-clara-navy mb-4">Collect</h3>
              <p className="text-gray-600 mb-4">
                Automated invoicing, payment follow-ups, and review requests ensure you get paid faster and grow reputation.
              </p>
              <div className="text-clara-gold font-semibold">Accelerate cash flow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Stack Section */}
      <AIStackSection />

      {/* Explainer Video Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
              See Clara in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how Clara transforms your business operations in just 90 seconds
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-clara-navy rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-clara-gold/20 to-clara-teal/20"></div>
              <div className="relative text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 bg-clara-gold rounded-full flex items-center justify-center">
                  <span className="text-3xl text-clara-navy">▶️</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">90-Second Explainer Video</h3>
                <p className="text-gray-300">Watch how Clara handles real contractor scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Carousel */}
      <IntegrationCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to grow your business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of contractors already using Clara to capture more leads, 
            convert more customers, and collect payments faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
              Book a 15-min Demo
            </Button>
            <ROICalculator 
              trigger={
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Calculate ROI
                </Button>
              }
            />
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Calls &lt; 85% confidence escalate to human dispatcher within 2 rings
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
