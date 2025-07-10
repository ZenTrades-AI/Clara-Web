import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { openHubSpotForm } from '@/utils/hubspotForm';
import { Phone, Truck, MapPin, Clock, TrendingUp, Star, CreditCard, User, Zap, CheckCircle } from 'lucide-react';
import ClaraCollectsAnimation from '@/components/ClaraCollectsAnimation';
import ClaraReviewsAnimation from '@/components/ClaraReviewsAnimation';
import ClaraBoostsAnimation from '@/components/ClaraBoostsAnimation';
import ClaraRemindsAnimation from '@/components/ClaraRemindsAnimation';
import ClaraOptimizesAnimation from '@/components/ClaraOptimizesAnimation';

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

const DispatchAnimation = () => {
  const [step, setStep] = useState(0);
  
  const technicians = [
    { id: 1, name: 'Tech A', x: 20, y: 30, available: true, skill: 'HVAC' },
    { id: 2, name: 'Tech B', x: 70, y: 20, available: false, skill: 'Plumbing' },
    { id: 3, name: 'Tech C', x: 40, y: 60, available: true, skill: 'HVAC' },
    { id: 4, name: 'Tech D', x: 80, y: 70, available: true, skill: 'Electrical' }
  ];
  
  const jobLocation = { x: 35, y: 40 };
  const matchedTech = technicians[0]; // Tech A is the best match
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h4 className="font-semibold text-gray-700">Smart Job Dispatching</h4>
      </div>
      
      {/* Digital Map */}
      <div className="relative bg-gray-100 rounded-lg h-48 overflow-hidden">
        {/* Map grid background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-gray-300" style={{ top: `${(i + 1) * 12.5}%` }} />
          ))}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-full w-px bg-gray-300" style={{ left: `${(i + 1) * 12.5}%` }} />
          ))}
        </div>
        
        {/* New Job Alert */}
        {step >= 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs animate-pulse">
            New Job: HVAC Repair
          </div>
        )}
        
        {/* Job Location */}
        <div 
          className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse transform -translate-x-2 -translate-y-2"
          style={{ left: `${jobLocation.x}%`, top: `${jobLocation.y}%` }}
        >
          <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
        </div>
        
        {/* Technicians */}
        {technicians.map((tech) => (
          <div
            key={tech.id}
            className={`absolute w-3 h-3 rounded-full transform -translate-x-1.5 -translate-y-1.5 ${
              tech.available ? 'bg-green-500' : 'bg-gray-400'
            } ${step >= 1 && tech.id === matchedTech.id ? 'ring-2 ring-blue-500 animate-pulse' : ''}`}
            style={{ left: `${tech.x}%`, top: `${tech.y}%` }}
          >
            <User className="w-2 h-2 text-white absolute top-0.5 left-0.5" />
          </div>
        ))}
        
        {/* Matching Algorithm Visual */}
        {step >= 1 && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
            Analyzing: Location + Skills + Availability
          </div>
        )}
        
        {/* Route Line */}
        {step >= 2 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1={`${matchedTech.x}%`}
              y1={`${matchedTech.y}%`}
              x2={`${jobLocation.x}%`}
              y2={`${jobLocation.y}%`}
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        )}
        
        {/* Notification Status */}
        {step >= 3 && (
          <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Tech A notified via SMS
          </div>
        )}
      </div>
      
      {/* Status Steps */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className={`p-2 rounded ${step >= 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100'}`}>
          1. Job received
        </div>
        <div className={`p-2 rounded ${step >= 1 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}>
          2. Best match found
        </div>
        <div className={`p-2 rounded ${step >= 2 ? 'bg-purple-100 text-purple-800' : 'bg-gray-100'}`}>
          3. Route calculated
        </div>
        <div className={`p-2 rounded ${step >= 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
          4. Tech notified
        </div>
      </div>
    </div>
  );
};

const RouteOptimizationAnimation = () => {
  const [showOptimized, setShowOptimized] = useState(false);
  
  const inefficientRoute = [
    { x: 20, y: 20, order: 1 },
    { x: 80, y: 30, order: 2 },
    { x: 30, y: 60, order: 3 },
    { x: 70, y: 70, order: 4 },
    { x: 40, y: 25, order: 5 }
  ];
  
  const optimizedRoute = [
    { x: 20, y: 20, order: 1 },
    { x: 40, y: 25, order: 2 },
    { x: 30, y: 60, order: 3 },
    { x: 70, y: 70, order: 4 },
    { x: 80, y: 30, order: 5 }
  ];
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowOptimized(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const currentRoute = showOptimized ? optimizedRoute : inefficientRoute;
  
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h4 className="font-semibold text-gray-700">
          {showOptimized ? 'Clara Optimized Route' : 'Before: Inefficient Route'}
        </h4>
      </div>
      
      {/* Route Map */}
      <div className="relative bg-gray-100 rounded-lg h-48 overflow-hidden">
        {/* Map grid background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-gray-300" style={{ top: `${(i + 1) * 12.5}%` }} />
          ))}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-full w-px bg-gray-300" style={{ left: `${(i + 1) * 12.5}%` }} />
          ))}
        </div>
        
        {/* Route Points */}
        {currentRoute.map((point, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold transform -translate-x-3 -translate-y-3 ${
              showOptimized ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            {point.order}
          </div>
        ))}
        
        {/* Route Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {currentRoute.map((point, index) => {
            if (index === currentRoute.length - 1) return null;
            const nextPoint = currentRoute[index + 1];
            return (
              <line
                key={index}
                x1={`${point.x}%`}
                y1={`${point.y}%`}
                x2={`${nextPoint.x}%`}
                y2={`${nextPoint.y}%`}
                stroke={showOptimized ? "#10b981" : "#ef4444"}
                strokeWidth="2"
                strokeDasharray={showOptimized ? "0" : "5,5"}
                className={showOptimized ? "" : "animate-pulse"}
              />
            );
          })}
        </svg>
        
        {/* Clara Optimization Indicator */}
        {showOptimized && (
          <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Clara Optimized
          </div>
        )}
      </div>
      
      {/* Stats Comparison */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className={`p-3 rounded-lg ${showOptimized ? 'bg-gray-100' : 'bg-red-50 border border-red-200'}`}>
          <div className="font-semibold text-red-600">Before</div>
          <div className="text-xs text-gray-600">
            • 8 hours driving<br/>
            • 4 jobs/day<br/>
            • Backtracking
          </div>
        </div>
        <div className={`p-3 rounded-lg ${showOptimized ? 'bg-green-50 border border-green-200' : 'bg-gray-100'}`}>
          <div className="font-semibold text-green-600">After Clara</div>
          <div className="text-xs text-gray-600">
            • 6 hours driving<br/>
            • 5 jobs/day<br/>
            • <strong>+25% efficiency</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConversationBubbles = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

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

  // Auto-scroll to bottom when new messages appear
  React.useEffect(() => {
    if (scrollAreaRef.current && visibleMessages > 0) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [visibleMessages]);

  return (
    <div className="space-y-6 max-w-sm mx-auto">
      {/* Phone Icon */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse">
          <Phone className="w-8 h-8 text-white" />
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
      
      {/* Conversation Messages with Auto-scroll */}
      <ScrollArea className="h-64 w-full" ref={scrollAreaRef}>
        <div className="space-y-3 p-2">
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
      </ScrollArea>
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
                    <div className="relative z-10 text-center w-full">
                      
                      {/* Clara Answers Animation with Conversation Sequence */}
                      {currentLayer.name === 'Answers' && (
                        <ConversationBubbles />
                      )}
                      
                      {/* Clara Dispatches Animation */}
                      {currentLayer.name === 'Dispatches' && (
                        <DispatchAnimation />
                      )}
                      
                      {/* Clara Optimizes (Routes) Animation */}
                      {currentLayer.name === 'Optimizes' && (
                        <ClaraOptimizesAnimation />
                      )}
                      
                      {/* Clara Reminds Animation */}
                      {currentLayer.name === 'Reminds' && (
                        <ClaraRemindsAnimation />
                      )}
                      
                      {/* Clara Boosts Animation */}
                      {currentLayer.name === 'Boosts' && (
                        <ClaraBoostsAnimation />
                      )}
                      
                      {/* Clara Collects Animation */}
                      {currentLayer.name === 'Collects' && (
                        <ClaraCollectsAnimation />
                      )}
                      
                      {/* Clara Reviews Animation */}
                      {currentLayer.name === 'Reviews' && (
                        <ClaraReviewsAnimation />
                      )}
                      
                      {/* Other Agent Visuals */}
                      {!['Answers', 'Dispatches', 'Optimizes', 'Reminds', 'Boosts', 'Collects', 'Reviews'].includes(currentLayer.name) && (
                        <>
                          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${currentLayer.visual.bgGradient} mb-6 ${currentLayer.visual.animation}`}>
                            <currentLayer.visual.icon className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            {currentLayer.visual.description}
                          </h4>
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
