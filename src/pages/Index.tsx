
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import IntegrationCarousel from '@/components/IntegrationCarousel';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <div className="inline-flex items-center px-3 py-1.5 bg-clara-red/10 border border-clara-red/20 rounded-full">
                  <span className="text-clara-red font-medium text-xs">ROI &lt; 30 days</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold leading-tight">
                  The AI Growth Engine for 
                  <span className="text-clara-red"> Service Contractors</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-lg">
                  From first ring to final payment. Clara answers, dispatches, and collects - delivering 
                  <span className="text-clara-red font-semibold"> +28% booked revenue</span> with 4s answer time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-6 py-2.5 text-base">
                  Book a 15-min Demo
                </Button>
                <ROICalculator 
                  trigger={
                    <Button variant="outline" className="border-clara-red text-clara-red hover:bg-clara-red hover:text-white px-6 py-2.5 text-base font-semibold transition-all duration-200">
                      Calculate ROI
                    </Button>
                  }
                />
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-xl font-montserrat font-bold text-clara-red">4s</div>
                  <div className="text-xs text-gray-300">Answer Time</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-montserrat font-bold text-clara-red">+28%</div>
                  <div className="text-xs text-gray-300">Booked Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-montserrat font-bold text-clara-red">85%</div>
                  <div className="text-xs text-gray-300">AI Confidence</div>
                </div>
              </div>
            </div>

            {/* Right Column - Larger Overlapping Dashboard Screenshots with Red Glow */}
            <div className="relative">
              <div className="relative flex justify-center items-center">
                {/* Back Dashboard - Analytics Dashboard with Red Glow */}
                <div className="absolute right-4 top-2 w-96 h-80 bg-white rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" 
                     style={{ 
                       boxShadow: '0 0 40px rgba(203, 46, 65, 0.5), 0 0 60px rgba(203, 46, 65, 0.3)',
                       filter: 'drop-shadow(0 0 20px rgba(203, 46, 65, 0.4))'
                     }}>
                  <img 
                    src="/lovable-uploads/09fd6a4a-0c75-42c1-a614-ce41537889ed.png" 
                    alt="Clara AI Analytics Dashboard"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Front Dashboard - Overview Dashboard with Red Glow and slight zoom */}
                <div className="relative z-10 w-96 h-80 bg-white rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 scale-105" 
                     style={{ 
                       boxShadow: '0 0 40px rgba(203, 46, 65, 0.5), 0 0 60px rgba(203, 46, 65, 0.3)',
                       filter: 'drop-shadow(0 0 20px rgba(203, 46, 65, 0.4))'
                     }}>
                  <img 
                    src="/lovable-uploads/32762904-fcf4-4cf7-9b05-0c34cb6fff42.png" 
                    alt="Clara AI Dashboard Overview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-clara-red" size={24} />
        </div>
      </section>

      {/* Social Proof - Company Logos */}
      <section className="py-16 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-medium text-gray-600 mb-8">
              Trusted by leading contractors and PE platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/bcd70ec6-c0ae-4ef6-a446-4339ea655d94.png" 
                  alt="HVAC Pro Comfort Shield Club logo" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/f54d82f6-2007-4d29-b972-b589b9101ca1.png" 
                  alt="F&M Fire Protection logo" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8ff94b25-5aeb-42fa-a50a-c5a75b702942.png" 
                  alt="Kantra Electric Inc logo" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8d32313c-c03a-45bc-9cce-bf17727ca1ca.png" 
                  alt="Alliance Specialized Systems logo" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reimagined Process Flow - Capture → Convert → Collect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
              Three Steps to Revenue Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clara's AI stack transforms every customer touchpoint into revenue growth
            </p>
          </div>

          {/* Linear Animated Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
            {/* Capture */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-clara-red rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-4">Capture</h3>
              <p className="text-gray-600 max-w-xs">
                Every call answered in four seconds. AI handles intake, scheduling, and urgent dispatch.
              </p>
              <div className="text-clara-red font-semibold mt-2">Never miss another lead</div>
            </div>

            {/* Animated Arrow */}
            <div className="hidden lg:flex items-center">
              <ArrowRight className="text-clara-red animate-flow-arrow" size={32} />
            </div>

            {/* Convert */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-clara-red rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-4">Convert</h3>
              <p className="text-gray-600 max-w-xs">
                Smart follow-ups and appointment reminders turn prospects into profitable customers.
              </p>
              <div className="text-clara-red font-semibold mt-2">Maximize booking rates</div>
            </div>

            {/* Animated Arrow */}
            <div className="hidden lg:flex items-center">
              <ArrowRight className="text-clara-red animate-flow-arrow" size={32} style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Collect */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-clara-red rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-4">Collect</h3>
              <p className="text-gray-600 max-w-xs">
                Automated invoicing and payment follow-ups accelerate cash flow and grow reputation.
              </p>
              <div className="text-clara-red font-semibold mt-2">Accelerate cash flow</div>
            </div>
          </div>

          {/* CTA to How It Works */}
          <div className="text-center">
            <Link to="/how-it-works">
              <Button className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Explainer Video Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
              See Clara in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how Clara transforms your business operations in just ninety seconds
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-clara-navy rounded-xl overflow-hidden shadow-2xl border-2 border-white">
              <iframe
                src="https://player.vimeo.com/video/1096761906?badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Clara AI Demo Video"
                className="absolute inset-0"
              ></iframe>
              
              {/* Custom Red Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-clara-red rounded-full flex items-center justify-center shadow-2xl opacity-90 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
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
            <Button className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg">
              Book a 15-min Demo
            </Button>
            <ROICalculator 
              trigger={
                <Button variant="outline" className="border-white text-black hover:bg-red/10 px-8 py-3 text-lg">
                  Try Clara Live
                </Button>
              }
            />
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Calls &lt; 85% confidence escalate to human dispatcher within two rings
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
