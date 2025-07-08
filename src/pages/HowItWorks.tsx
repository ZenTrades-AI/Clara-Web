
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { openHubSpotForm } from '@/utils/hubspotForm';

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
    name: 'Boosts', 
    description: 'Proactive customer communication throughout the service lifecycle', 
    icon: '📈',
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

const channels = [
  {
    name: 'Voice',
    icon: '📞',
    description: '4-second answer time with natural conversation'
  },
  {
    name: 'Chat',
    icon: '💬',
    description: 'Real-time website chat support'
  },
  {
    name: 'Email',
    icon: '📧',
    description: 'Automated email workflows and responses'
  },
  {
    name: 'SMS',
    icon: '📱',
    description: 'Text message reminders and updates'
  },
  {
    name: 'API',
    icon: '🔗',
    description: 'Seamless integration with existing systems'
  }
];

const HowItWorks = () => {
  const [activeLayer, setActiveLayer] = useState('0');

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

      {/* 7-Layer Stack with Visual Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Visual Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="sticky top-8">
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-4">
                      Clara AI Visualization
                    </h3>
                  </div>
                  
                  {/* Placeholder for Visual/Infographic */}
                  <div className="flex items-center justify-center h-96 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">
                        Interactive Visual Coming Soon
                      </h4>
                      <p className="text-gray-500 text-sm max-w-xs">
                        Dynamic infographic showing Clara's AI layers in action
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
                  Build your AI growth engine
                </h2>
                <p className="text-lg text-gray-600">
                  Each layer adds intelligence and automation to transform your service operations
                </p>
              </div>

              <Accordion 
                type="single" 
                collapsible 
                value={activeLayer} 
                onValueChange={setActiveLayer}
                className="space-y-4"
              >
                {layers.map((layer, index) => (
                  <AccordionItem 
                    key={layer.name} 
                    value={index.toString()}
                    className="border border-gray-200 rounded-lg px-6 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center space-x-4 text-left">
                        <div className="text-3xl">{layer.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-montserrat font-bold text-clara-navy">
                            Clara {layer.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-16 space-y-3">
                        <h4 className="font-semibold text-clara-navy mb-3">Key Capabilities:</h4>
                        {layer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-clara-red rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <Button 
                            size="sm"
                            className="bg-clara-red hover:bg-clara-red/90 text-white"
                            onClick={openHubSpotForm}
                          >
                            See {layer.name} in Action
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Omnichannel Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-red mb-4">
              Omnichannel Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clara connects with your customers across all communication channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {channels.map((channel, index) => (
              <div
                key={channel.name}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-clara-red/30 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {channel.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-2 text-clara-navy group-hover:text-clara-red transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {channel.description}
                  </p>
                </div>
              </div>
            ))}
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
            <Button 
              className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
              Book a 15-min Demo
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
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
