
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OmnichannelCarousel from '@/components/OmnichannelCarousel';
import { Button } from '@/components/ui/button';

const layers = [
  { 
    name: 'Answers', 
    description: 'AI answers every call in 4 seconds with natural conversation and intelligent routing', 
    icon: '📞',
    features: [
      '24/7 availability with human-like conversation',
      'Intelligent call routing and escalation',
      'Complete call transcription and logging',
      'Multi-language support for diverse markets'
    ]
  },
  { 
    name: 'Dispatches', 
    description: 'Smart routing to the right technician based on location, skills, and availability', 
    icon: '🚐',
    features: [
      'Real-time technician availability tracking',
      'Skills-based matching for complex jobs',
      'Emergency prioritization and instant alerts',
      'GPS-optimized routing for efficiency'
    ]
  },
  { 
    name: 'Optimizes', 
    description: 'Route optimization and scheduling to maximize efficiency and profitability', 
    icon: '📍',
    features: [
      'AI-powered route planning',
      'Dynamic scheduling based on traffic patterns',
      'Resource allocation optimization',
      'Capacity management across teams'
    ]
  },
  { 
    name: 'Reminds', 
    description: 'Automated appointment reminders and follow-ups reduce no-shows by 40%', 
    icon: '⏰',
    features: [
      'Multi-channel reminder campaigns',
      'Personalized messaging templates',
      'Automatic rescheduling workflows',
      'Confirmation tracking and analytics'
    ]
  },
  { 
    name: 'Engages', 
    description: 'Proactive customer communication throughout the service lifecycle', 
    icon: '💬',
    features: [
      'Customer journey mapping',
      'Personalized outreach campaigns',
      'Satisfaction surveys and feedback loops',
      'Upselling and cross-selling opportunities'
    ]
  },
  { 
    name: 'Reviews', 
    description: 'Automated review requests and reputation management boost online presence', 
    icon: '⭐',
    features: [
      'Automated review collection workflows',
      'Reputation monitoring across platforms',
      'Response management and alerts',
      'Rating optimization strategies'
    ]
  },
  { 
    name: 'Collects', 
    description: 'Intelligent payment processing and follow-up automation accelerate cash flow', 
    icon: '💳',
    features: [
      'Automated invoice generation',
      'Payment reminder sequences',
      'Collection workflow automation',
      'Payment tracking and reporting'
    ]
  },
];

const HowItWorks = () => {
  const [activeLayer, setActiveLayer] = useState(0);

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

      {/* 7-Layer Stack with Detailed Descriptions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Layer Stack Visualization */}
            <div className="relative">
              <div className="space-y-4">
                {layers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className={`relative p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      index === activeLayer
                        ? 'border-clara-teal bg-clara-teal/10 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-clara-teal/50 hover:shadow-md'
                    }`}
                    onClick={() => setActiveLayer(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`text-3xl transition-transform duration-300 ${
                        index === activeLayer ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        {layer.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-montserrat font-bold transition-colors duration-300 ${
                          index === activeLayer ? 'text-clara-navy' : 'text-gray-700'
                        }`}>
                          {layer.name}
                        </h3>
                        <p className={`text-sm transition-colors duration-300 ${
                          index === activeLayer ? 'text-gray-700' : 'text-gray-500'
                        }`}>
                          {layer.description}
                        </p>
                      </div>
                      <div className={`text-sm font-medium transition-colors duration-300 ${
                        index === activeLayer ? 'text-clara-teal' : 'text-gray-400'
                      }`}>
                        0{index + 1}
                      </div>
                    </div>
                    {index === activeLayer && (
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 bg-clara-teal rounded-full animate-pulse"></div>
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
                
                {/* Layer-specific features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-clara-navy">Key Features:</h4>
                  {layers[activeLayer].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-clara-teal rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-clara-teal hover:bg-clara-teal/90 text-white font-semibold px-8 py-3">
                See Clara in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Omnichannel Support Carousel */}
      <OmnichannelCarousel />

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
