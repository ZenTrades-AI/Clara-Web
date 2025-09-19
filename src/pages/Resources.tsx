
import Navigation from '@/components/Navigation';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

const resources = [
  {
    title: 'ROI Case Studies',
    description: 'Real customer stories showing measurable business impact',
    type: 'Case Study Collection',
    icon: '📊'
  },
  {
    title: 'API Documentation',
    description: 'Comprehensive developer resources and integration guides',
    type: 'Technical Docs',
    icon: '🔧'
  }
];

const faqs = [
  {
    question: "What happens if Clara can't handle a call?",
    answer: "Calls with <85% confidence automatically escalate to your human dispatcher within 2 rings. This ensures that complex or sensitive situations always receive human attention while maintaining fast response times."
  },
  {
    question: "How quickly can we get started with Clara?",
    answer: "Most customers are live within 48 hours for standard setups. Enterprise implementations with custom integrations typically take 1-2 weeks. We provide dedicated onboarding support throughout the process."
  },
  {
    question: "Does Clara integrate with our existing tools?",
    answer: "Yes! Clara supports NetSuite, ServiceTrade, BuildOps, and 50+ other platforms. We also offer custom integrations for enterprise customers with specific requirements."
  },
  {
    question: "What's the typical ROI timeline?",
    answer: "Most customers see positive ROI within 30 days. The combination of reduced missed calls, improved scheduling efficiency, and faster payment collection typically results in immediate revenue improvements."
  },
  {
    question: "How does Clara ensure data security?",
    answer: "Clara uses enterprise-grade security with AWS data residency, end-to-end encryption, and SOC-2 compliance. All customer data is protected with bank-level security protocols."
  },
  {
    question: "Can Clara handle multiple locations?",
    answer: "Absolutely. Clara is designed to handle multi-location operations with location-specific routing, local phone numbers, and centralized management dashboards for enterprise oversight."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer tiered support: email support for Starter plans, phone support for Growth plans, and dedicated success managers for Scale customers. All plans include comprehensive onboarding."
  },
  {
    question: "How accurate is Clara's call handling?",
    answer: "Clara maintains 85%+ confidence levels for autonomous call handling. When confidence drops below this threshold, calls are seamlessly transferred to human dispatchers within 2 rings."
  }
];

const Resources = () => {
  const [activeSupport, setActiveSupport] = useState(0);

  const supportOptions = [
    {
      title: "Live Chat",
      icon: "💬",
      description: "Get instant answers from our support team",
      features: ["24/7 availability", "Instant responses", "Technical guidance"],
      buttonText: "Start Chat",
      color: "bg-blue-500"
    },
    {
      title: "Phone Support",
      icon: "📞",
      description: "Speak directly with our technical experts",
      features: ["Human expertise", "Complex troubleshooting", "Personalized help"],
      buttonText: "Call Now",
      color: "bg-green-500"
    },
    {
      title: "Success Manager",
      icon: "🎯",
      description: "Dedicated support for Enterprise customers",
      features: ["Strategic guidance", "Custom solutions", "Priority support"],
      buttonText: "Learn More",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
      <title>Resources | Clara AI for Trade Businesses</title>
      <meta name="description" content="Explore helpful resources, guides, and articles for growing your trade business with Clara AI." />
    </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead with industry insights, technical guides, and best practices for growing your service business with AI
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
        </div>
      </section>

      {/* Featured Resources - Streamlined */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Essential guides and tools to maximize your AI investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-clara-gold/30">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <CardTitle className="text-lg font-montserrat font-bold text-clara-navy group-hover:text-clara-teal transition-colors">
                    {resource.title}
                  </CardTitle>
                  <div className="text-sm text-clara-gold font-medium">{resource.type}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Button className="w-full bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold text-sm">
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Clara AI
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-montserrat font-semibold text-clara-navy hover:text-clara-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Stay Updated with Clara Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get monthly insights on AI trends, customer success stories, and product updates
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-clara-gold"
              />
              <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Help Center */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-600">
              Our team is here to support your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeSupport === index ? 'transform scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveSupport(index)}
                onMouseEnter={() => setActiveSupport(index)}
              >
                <Card className={`h-full transition-all duration-300 ${
                  activeSupport === index 
                    ? 'border-clara-teal shadow-xl bg-clara-teal/5' 
                    : 'border-gray-200 hover:border-clara-teal/50 hover:shadow-lg'
                }`}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                      activeSupport === index 
                        ? 'bg-clara-teal scale-110' 
                        : 'bg-clara-gold'
                    }`}>
                      <span className="text-3xl">{option.icon}</span>
                    </div>
                    <h3 className={`font-montserrat font-bold mb-4 transition-colors duration-300 ${
                      activeSupport === index ? 'text-clara-teal' : 'text-clara-navy'
                    }`}>
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    
                    {activeSupport === index && (
                      <div className="animate-fade-in">
                        <div className="border-t border-clara-teal/20 pt-4 mt-4 mb-6">
                          {option.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center mb-2">
                              <div className="w-2 h-2 bg-clara-teal rounded-full mr-3"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className={`w-full transition-all duration-300 ${
                        activeSupport === index 
                          ? 'bg-clara-teal hover:bg-clara-teal/90 text-white' 
                          : 'border-clara-navy text-clara-navy hover:bg-clara-navy/10'
                      }`}
                      variant={activeSupport === index ? "default" : "outline"}
                    >
                      {option.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Response Time Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-clara-teal/10 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-clara-navy font-medium">
                Average response time: {activeSupport === 0 ? "< 2 minutes" : activeSupport === 1 ? "< 1 hour" : "< 24 hours"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
