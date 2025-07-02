
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const layers = [
  { name: 'Answers', description: 'AI answers every call in 4 seconds with natural conversation', icon: '📞' },
  { name: 'Dispatches', description: 'Smart routing to the right technician based on location, skills, and availability', icon: '🚐' },
  { name: 'Optimizes', description: 'Route optimization and scheduling to maximize efficiency and profitability', icon: '📍' },
  { name: 'Reminds', description: 'Automated appointment reminders and follow-ups reduce no-shows by 40%', icon: '⏰' },
  { name: 'Engages', description: 'Proactive customer communication throughout the service lifecycle', icon: '💬' },
  { name: 'Reviews', description: 'Automated review requests and reputation management', icon: '⭐' },
  { name: 'Collects', description: 'Intelligent payment processing and follow-up automation', icon: '💳' },
];

const HowItWorks = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            How Clara Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seven intelligent layers working together to transform your business operations from first contact to final payment
          </p>
        </div>
      </section>

      {/* 7-Layer Stack Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Layer Stack Visualization */}
            <div className="relative">
              <div className="space-y-4">
                {layers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className={`relative p-6 rounded-lg border-2 transition-all duration-500 cursor-pointer ${
                      index === activeLayer
                        ? 'border-clara-gold bg-clara-gold/10 transform scale-105'
                        : 'border-gray-200 bg-white hover:border-clara-gold/50'
                    }`}
                    onClick={() => setActiveLayer(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`text-3xl ${index === activeLayer ? 'animate-bounce' : ''}`}>
                        {layer.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-montserrat font-bold ${
                          index === activeLayer ? 'text-clara-navy' : 'text-gray-700'
                        }`}>
                          {layer.name}
                        </h3>
                        <p className={`text-sm ${
                          index === activeLayer ? 'text-gray-700' : 'text-gray-500'
                        }`}>
                          {layer.description}
                        </p>
                      </div>
                    </div>
                    {index === activeLayer && (
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 bg-clara-gold rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Active Layer Details */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="text-6xl mb-4">{layers[activeLayer].icon}</div>
                <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
                  {layers[activeLayer].name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {layers[activeLayer].description}
                </p>
                
                {/* Layer-specific benefits */}
                <div className="space-y-3">
                  {activeLayer === 0 && (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                        <span className="text-gray-700">24/7 availability with human-like conversation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                        <span className="text-gray-700">Intelligent call routing and escalation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                        <span className="text-gray-700">Complete call transcription and logging</span>
                      </div>
                    </>
                  )}
                  {activeLayer === 1 && (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                        <span className="text-gray-700">Real-time technician availability tracking</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                        <span className="text-gray-700">Skills-based matching for complex jobs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                        <span className="text-gray-700">Emergency prioritization and instant alerts</span>
                      </div>
                    </>
                  )}
                  {/* Add more layer-specific details as needed */}
                </div>
              </div>

              <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3">
                See Clara in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-6">
            Watch Clara in Action
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Clara handles real customer calls and transforms your business operations
          </p>
          
          {/* Video Placeholder */}
          <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">▶️</span>
              </div>
              <p className="text-lg font-semibold">90-Second Explainer Video</p>
              <p className="text-sm text-gray-300 mt-2">Clara AI in action - real calls, real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let Clara handle your calls while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
              Book a 15-min Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Try Clara Live
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
