
import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import TradeSearch from '@/components/TradeSearch';
import TradeVerticals from '@/components/TradeVerticals';
import BusinessTypeCards from '@/components/BusinessTypeCards';
import { openHubSpotForm } from '@/utils/hubspotForm';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '<2%', label: 'Clara missed calls', sublabel: 'With human backup', color: 'text-clara-red' },
  { value: '4s', label: 'Answer time', sublabel: 'vs 23s industry avg', color: 'text-clara-red' },
  { value: '30d', label: 'ROI payback', sublabel: 'Typical results', color: 'text-clara-red' }
];

const Solutions = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
       <Helmet>
      <title>Solutions | Clara AI: Automate Revenue Cycle for Trades</title>
      <meta name="description" content="Explore Clara AI’s trade-focused solutions: call answering, lead qualification, dispatch, payments & follow-ups. Automate your full revenue cycle." />
    </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-clara-red/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 animate-fade-in">
            Solutions Powered by Clara's 
            <span className="text-clara-red"> AI Growth Engine</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            Clara adapts to your trade, automating every part of your revenue cycle — from first call to final payment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
              Book a 15-min Demo
            </Button>
            <ROICalculator 
              trigger={
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch How It Works
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Trade Verticals Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="trade-header">
            <h2 className={`text-3xlmd:text-4xl font-montserrat font-bold text-clara-navy mb-4 transition-all duration-700 ${
              visibleElements.has('trade-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              How Clara Adapts to Your Industry
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-700 delay-200 ${
              visibleElements.has('trade-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              One AI platform, infinite possibilities across service industries
            </p>
          </div>

          <TradeVerticals />
        </div>
      </section>

      {/* Search Other Trades Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-animate id="search-section">
            <div className={`transition-all duration-700 ${
              visibleElements.has('search-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <TradeSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="business-header">
            <h2 className={`text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4 transition-all duration-700 ${
              visibleElements.has('business-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Built for Every Business Model
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-700 delay-200 ${
              visibleElements.has('business-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              From growing contractors to enterprise portfolios
            </p>
          </div>

          <BusinessTypeCards />
        </div>
      </section>

      {/* Animated Metrics Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="metrics-header">
            <h2 className={`text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4 transition-all duration-700 ${
              visibleElements.has('metrics-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              The Growth Impact of Capture, Convert, Collect
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-700 delay-200 ${
              visibleElements.has('metrics-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Industry-leading results across all business models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                data-animate 
                id={`stat-${index}`}
                className={`text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 ${
                  visibleElements.has(`stat-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-4xl font-montserrat font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-clara-navy mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.sublabel}
                </div>
                <div className="w-16 h-1 mx-auto mt-3 rounded-full bg-clara-red"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-clara-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-clara-red/20 via-transparent to-clara-red/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Capture more. Convert smarter. Collect faster — with Clara.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let Clara automate your entire revenue cycle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
