
import { useState, useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import IntegrationCarousel from '@/components/IntegrationCarousel';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Play, Phone, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AIEngineCore } from "@/components/AIEngineCore";

const Index = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const segments = [
    {
      title: "Capture",
      description: "Never miss another lead",
      icon: Phone,
      color: "from-red-500/20 to-pink-500/20",
      features: ["Inbound & outbound AI voice calls", "AI answering missed calls", "Real-time lead capture"],
      number: "01"
    },
    {
      title: "Convert", 
      description: "Maximize booking rates",
      icon: Calendar,
      color: "from-blue-500/20 to-cyan-500/20", 
      features: ["AI auto-dispatch & scheduling", "Route optimization", "Upsell recommendations"],
      number: "02"
    },
    {
      title: "Collect",
      description: "Accelerate cash flow",
      icon: DollarSign,
      color: "from-green-500/20 to-emerald-500/20",
      features: ["AI payment follow-ups", "Invoice recovery", "Automated collections"],
      number: "03"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) {
        setActiveSegment((prev) => (prev + 1) % 3);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Updated */}
      <section className="relative bg-clara-navy text-white pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
            {/* Centered Content */}
            <div className="text-center space-y-6 animate-fade-in">
              <div className="space-y-3">
                <div className="inline-flex items-center px-3 py-1.5 bg-clara-red/10 border border-clara-red/20 rounded-full">
                  <span className="text-clara-red font-medium text-xs">ROI &lt; 30 days</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold leading-tight">
                  The AI Growth Engine for 
                  <span className="text-clara-red"> Service Contractors</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From first ring to final payment. Clara answers, dispatches, and collects - delivering 
                  <span className="text-clara-red font-semibold"> +28% booked revenue</span> with 4s answer time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto">
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
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-clara-red" size={24} />
        </div>
      </section>

      {/* AI Growth Engine Section - Updated with same background */}
      <section className="relative bg-clara-navy text-white py-12 overflow-hidden">
        {/* Background Pattern - Same as hero */}
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6">
          {/* AI Engine Core - Centered */}
          <div className="flex justify-center mb-16">
            <AIEngineCore 
              activeSegment={activeSegment} 
              onSegmentClick={(index) => {
                setActiveSegment(index);
                setIsAnimating(false);
                setTimeout(() => setIsAnimating(true), 5000);
              }}
            />
          </div>

          {/* Process Cards Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Capture, Convert and Collect
              </h3>
              <p className="text-gray-400 text-lg">
                Watch your business transform with our AI-powered process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
              {segments.map((segment, index) => (
                <div 
                  key={segment.title}
                  className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer backdrop-blur-sm ${
                    activeSegment === index 
                      ? 'border-red-500/50 bg-gradient-to-br ' + segment.color + ' transform scale-105 shadow-2xl shadow-red-500/10' 
                      : 'border-gray-700/30 bg-gray-800/20 hover:border-gray-600/50 hover:bg-gray-800/30'
                  }`}
                  onClick={() => {
                    setActiveSegment(index);
                    setIsAnimating(false);
                    setTimeout(() => setIsAnimating(true), 5000);
                  }}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-all duration-300 ${
                    activeSegment === index
                      ? 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/30'
                      : 'bg-gray-800 border-gray-600 text-gray-400 group-hover:border-gray-500'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl mr-4 transition-all duration-300 ${
                      activeSegment === index 
                        ? 'bg-red-500/20 text-red-400 shadow-lg' 
                        : 'bg-gray-700/50 text-gray-400 group-hover:text-white group-hover:bg-gray-600/50'
                    }`}>
                      <segment.icon size={28} />
                    </div>
                    <div>
                      <h4 className={`text-2xl font-bold transition-colors duration-300 ${
                        activeSegment === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {segment.title}
                      </h4>
                      <div className={`text-sm font-medium transition-colors duration-300 ${
                        activeSegment === index ? 'text-red-400' : 'text-gray-500 group-hover:text-gray-400'
                      }`}>
                        {segment.description}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h5 className={`text-sm font-semibold transition-colors duration-300 ${
                      activeSegment === index ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-300'
                    }`}>
                      Key Features:
                    </h5>
                    {segment.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${
                          activeSegment === index ? 'bg-red-400' : 'bg-gray-500 group-hover:bg-gray-400'
                        }`} />
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          activeSegment === index ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'
                        }`}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Active Indicator */}
                  {activeSegment === index && (
                    <div className="absolute bottom-4 right-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Flow Arrows */}
            <div className="hidden md:flex items-center justify-center mb-16 gap-8">
              {[0, 1].map((index) => (
                <div key={index} className="flex items-center">
                  <div className={`h-0.5 w-16 bg-gradient-to-r transition-all duration-500 ${
                    activeSegment >= index + 1 
                      ? 'from-red-500 to-red-400' 
                      : 'from-gray-600 to-gray-700'
                  }`} />
                  <div className={`w-3 h-3 rotate-45 border-r-2 border-t-2 transition-colors duration-500 ${
                    activeSegment >= index + 1 ? 'border-red-400' : 'border-gray-600'
                  }`} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in">
              <Link to="/how-it-works">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  See Clara In Action
                </Button>
              </Link>
              <p className="text-gray-500 mt-6 text-base">
                Watch how the AI engine transforms your service business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Company Logos - Updated with reduced width */}
      <section className="py-16 bg-clara-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
