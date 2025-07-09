import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { openHubSpotForm } from '@/utils/hubspotForm';
import { Phone, Truck, MapPin, Clock, TrendingUp, Star, CreditCard } from 'lucide-react';

const layers = [
  { 
    name: 'Answers', 
    description: 'AI answers every call in 4 seconds with natural conversation and intelligent routing', 
    icon: '📞',
    features: [
      'Instantly answers every call, 24/7',
      'Captures lead info and reason for call',
      'Escalates high-value calls automatically'
    ],
    visual: {
      icon: Phone,
      animation: 'animate-pulse',
      bgGradient: 'from-blue-500 to-cyan-500',
      description: 'Smart phone system with AI conversation bubbles'
    }
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
    ],
    visual: {
      icon: Truck,
      animation: 'animate-bounce',
      bgGradient: 'from-green-500 to-emerald-500',
      description: 'Dispatch truck with route optimization lines'
    }
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
    ],
    visual: {
      icon: MapPin,
      animation: 'animate-spin',
      bgGradient: 'from-purple-500 to-violet-500',
      description: 'Interactive map with optimized route paths'
    }
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
    ],
    visual: {
      icon: Clock,
      animation: 'animate-pulse',
      bgGradient: 'from-orange-500 to-amber-500',
      description: 'Animated clock with notification alerts'
    }
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
    ],
    visual: {
      icon: TrendingUp,
      animation: 'animate-bounce',
      bgGradient: 'from-red-500 to-pink-500',
      description: 'Growth chart with upward trending arrows'
    }
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
    ],
    visual: {
      icon: Star,
      animation: 'animate-pulse',
      bgGradient: 'from-yellow-500 to-orange-500',
      description: '5-star rating system with animated reviews'
    }
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
    ],
    visual: {
      icon: CreditCard,
      animation: 'animate-bounce',
      bgGradient: 'from-indigo-500 to-blue-500',
      description: 'Automated payment processing with cash flow visuals'
    }
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

const ConversationBubbles = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  const conversation = [
    { sender: 'clara', text: "Hi there! This is Clara with ABC Heating. How can I help you today?" },
    { sender: 'customer', text: "My heater isn't working — no hot air at all." },
    { sender: 'clara', text: "We have a slot at 10 AM tomorrow — should I book it?" },
    { sender: 'customer', text: "Yes!" },
    { sender: 'clara', text: "Got it! You're booked for 10 AM tomorrow. We'll send a reminder too." }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev < conversation.length) {
          return prev + 1;
        } else {
          // Reset after showing all messages
          setTimeout(() => setVisibleMessages(0), 2000);
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-3 max-w-sm mx-auto h-80 overflow-hidden">
      {conversation.slice(0, visibleMessages).map((message, index) => (
        <div
          key={index}
          className={`flex animate-fade-in ${message.sender === 'clara' ? 'justify-start' : 'justify-end'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`rounded-2xl px-4 py-2 max-w-[85%] ${
            message.sender === 'clara' 
              ? 'bg-blue-500 text-white rounded-bl-md' 
              : 'bg-gray-200 text-gray-800 rounded-br-md'
          }`}>
            <p className="text-sm font-medium">
              {message.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const HowItWorks = () => {
  const [activeLayer, setActiveLayer] = useState('0');
  const currentLayer = layers[parseInt(activeLayer)] || layers[0];

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

      {/* Centered Heading */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
            Build your AI growth engine
          </h2>
          <p className="text-lg text-gray-600">
            Each layer adds intelligence and automation to transform your service operations
          </p>
        </div>
      </section>

      {/* 7-Layer Stack with Visual Placeholder */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Dynamic Visual Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="sticky top-8">
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-4">
                      Clara {currentLayer.name}
                    </h3>
                  </div>
                  
                  {/* Dynamic Visual Based on Active Layer */}
                  <div className="flex items-center justify-center h-96 rounded-xl relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentLayer.visual.bgGradient} opacity-10`}></div>
                    <div className="relative z-10 text-center">
                      
                      {/* Clara Answers Animation with Conversation Sequence */}
                      {currentLayer.name === 'Answers' && (
                        <div className="space-y-6">
                          {/* Incoming Call Animation */}
                          <div className="relative">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse">
                              <Phone className="w-10 h-10 text-white animate-bounce" />
                            </div>
                          </div>
                          
                          {/* AI Waveform Animation */}
                          <div className="flex justify-center items-center space-x-1">
                            {[...Array(7)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-blue-500 rounded-full animate-pulse"
                                style={{
                                  height: `${Math.random() * 30 + 10}px`,
                                  animationDelay: `${i * 0.1}s`,
                                  animationDuration: '1s'
                                }}
                              ></div>
                            ))}
                          </div>
                          
                          {/* Conversation Sequence */}
                          <ConversationBubbles />
                        </div>
                      )}
                      
                      {/* Other Agent Visuals */}
                      {currentLayer.name !== 'Answers' && (
                        <>
                          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${currentLayer.visual.bgGradient} mb-6 ${currentLayer.visual.animation}`}>
                            <currentLayer.visual.icon className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            {currentLayer.visual.description}
                          </h4>
                          
                          {/* Additional animated elements based on agent type */}
                          {currentLayer.name === 'Dispatches' && (
                            <div className="relative mt-4">
                              <div className="flex justify-between items-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                <div className="flex-1 h-0.5 bg-green-300 mx-2 relative">
                                  <div className="absolute top-0 left-0 h-full bg-green-500 animate-pulse" style={{width: '60%'}}></div>
                                </div>
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          
                          {currentLayer.name === 'Optimizes' && (
                            <div className="grid grid-cols-3 gap-2 mt-4">
                              {[...Array(9)].map((_, i) => (
                                <div key={i} className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-purple-500' : 'bg-purple-200'} ${i % 3 === 0 ? 'animate-pulse' : ''}`}></div>
                              ))}
                            </div>
                          )}
                          
                          {currentLayer.name === 'Reviews' && (
                            <div className="flex justify-center space-x-1 mt-4">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'} animate-pulse`} style={{animationDelay: `${i * 0.1}s`}} />
                              ))}
                            </div>
                          )}
                          
                          {currentLayer.name === 'Collects' && (
                            <div className="flex justify-center items-center space-x-2 mt-4">
                              <div className="text-green-500 font-bold animate-pulse">$</div>
                              <div className="w-8 h-0.5 bg-green-300">
                                <div className="h-full bg-green-500 animate-pulse" style={{width: '80%'}}></div>
                              </div>
                              <div className="text-green-500 font-bold">💰</div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div className="order-1 lg:order-2">
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
                          <p className="text-sm text-gray-600 mt-1">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-16 space-y-4">
                        <h4 className="font-semibold text-clara-navy">Key Capabilities:</h4>
                        <div className="space-y-3">
                          {layer.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-clara-red rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
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
              className="bg-white text-clara-red hover:bg-white hover:text-clara-red border border-white px-8 py-3 text-lg"
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
