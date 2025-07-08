import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import IntegrationCarousel from '@/components/IntegrationCarousel';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Play, Phone, Calendar, DollarSign } from 'lucide-react';
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

      {/* AI Growth Engine Section - Enhanced with Animations */}
      <section className="py-20 bg-clara-navy text-white relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-clara-navy via-clara-navy to-gray-900"></div>
          <div className="absolute inset-0 opacity-20">
            {/* Floating Particles */}
            <div className="absolute w-2 h-2 bg-clara-red rounded-full animate-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
            <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
            <div className="absolute w-1.5 h-1.5 bg-clara-red/50 rounded-full animate-pulse" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
            <div className="absolute w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{top: '30%', left: '70%', animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline with Staggered Animation */}
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
              <span className="block animate-[fade-in_1s_ease-out_0.5s_both] opacity-0">Clara AI</span>
              <span className="block text-4xl md:text-5xl text-gray-300 animate-[fade-in_1s_ease-out_1s_both] opacity-0">
                Your AI Growth Engine
              </span>
              <span className="block text-3xl md:text-4xl text-clara-red animate-[fade-in_1s_ease-out_1.5s_both] opacity-0">
                for Service Trades
              </span>
            </h2>
          </div>

          {/* Animated Circular Engine */}
          <div className="flex justify-center mb-16">
            <div className="relative w-96 h-96 animate-[fade-in_1s_ease-out_2s_both] opacity-0">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-clara-red/30 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-4 rounded-full border border-white/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              
              {/* Center Circle - Clara AI Growth Engine */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-clara-red to-red-700 rounded-full flex flex-col items-center justify-center shadow-2xl animate-pulse">
                <div className="absolute inset-0 rounded-full bg-clara-red animate-ping opacity-20"></div>
                <div className="relative z-10 text-center">
                  <div className="text-white font-bold text-lg mb-1">Clara AI</div>
                  <div className="text-white/90 text-sm">Growth Engine</div>
                </div>
              </div>

              {/* Orbiting Elements with Staggered Animations */}
              {/* Capture */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 animate-[orbit-answers_10s_linear_infinite]" style={{animationDelay: '2.5s'}}>
                <div className="w-full h-full bg-clara-navy border-2 border-clara-red rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[fade-in_0.8s_ease-out_2.5s_both] opacity-0">
                  <Phone className="w-8 h-8 text-clara-red mb-1" />
                  <div className="text-xs text-white font-semibold">Capture</div>
                </div>
              </div>

              {/* Convert */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-20 h-20 animate-[orbit-dispatches_10s_linear_infinite]" style={{animationDelay: '3s'}}>
                <div className="w-full h-full bg-clara-navy border-2 border-yellow-400 rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[fade-in_0.8s_ease-out_3s_both] opacity-0">
                  <Calendar className="w-8 h-8 text-yellow-400 mb-1" />
                  <div className="text-xs text-white font-semibold">Convert</div>
                </div>
              </div>

              {/* Collect */}
              <div className="absolute bottom-12 left-8 w-20 h-20 animate-[orbit-collects_10s_linear_infinite]" style={{animationDelay: '3.5s'}}>
                <div className="w-full h-full bg-green-600 rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[fade-in_0.8s_ease-out_3.5s_both] opacity-0">
                  <DollarSign className="w-8 h-8 text-white mb-1" />
                  <div className="text-xs text-white font-semibold">Collect</div>
                </div>
              </div>

              {/* Additional Orbiting Elements */}
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 animate-[orbit-reminds_12s_linear_infinite]" style={{animationDelay: '4s'}}>
                <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-[fade-in_0.8s_ease-out_4s_both] opacity-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-12 w-12 h-12 animate-[orbit-engages_8s_linear_infinite]" style={{animationDelay: '4.5s'}}>
                <div className="w-full h-full bg-purple-600 rounded-full flex items-center justify-center shadow-lg animate-[fade-in_0.8s_ease-out_4.5s_both] opacity-0">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Tagline */}
          <div className="mb-12">
            <div className="text-4xl md:text-5xl font-montserrat font-bold">
              <span className="inline-block text-clara-red animate-[fade-in_0.8s_ease-out_5s_both] opacity-0 mr-4">Capture.</span>
              <span className="inline-block text-yellow-400 animate-[fade-in_0.8s_ease-out_5.5s_both] opacity-0 mr-4">Convert.</span>
              <span className="inline-block text-green-400 animate-[fade-in_0.8s_ease-out_6s_both] opacity-0">Collect.</span>
            </div>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto animate-[fade-in_1s_ease-out_6.5s_both] opacity-0">
              Capture missed calls, convert more jobs, collect faster — all on autopilot.
            </p>
          </div>

          {/* Animated CTA Button */}
          <div className="animate-[fade-in_1s_ease-out_7s_both] opacity-0">
            <Button className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-clara-red/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">See Clara in Action</span>
              <div className="absolute inset-0 bg-gradient-to-r from-clara-red to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-clara-red animate-pulse opacity-20"></div>
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              Watch how the AI engine transforms your service business
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-[fade-in_1s_ease-out_7.5s_both] opacity-0">
            <ArrowDown className="text-clara-red" size={24} />
          </div>
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
