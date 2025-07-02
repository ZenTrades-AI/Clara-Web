
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const blogPosts = [
  {
    title: 'How AI is Transforming the Service Industry',
    excerpt: 'Discover the latest trends in AI adoption among service contractors and the measurable impact on business growth.',
    date: 'November 15, 2024',
    category: 'Industry Trends',
    readTime: '5 min read'
  },
  {
    title: 'ROI Calculator: The True Cost of Missed Calls',
    excerpt: 'A deep dive into how missed calls impact your bottom line and strategies to recover lost revenue.',
    date: 'November 10, 2024',
    category: 'Business Growth',
    readTime: '7 min read'
  },
  {
    title: 'Integration Guide: Clara + NetSuite',
    excerpt: 'Step-by-step guide to integrating Clara AI with your NetSuite ERP system for seamless operations.',
    date: 'November 5, 2024',
    category: 'Technical',
    readTime: '10 min read'
  }
];

const resources = [
  {
    title: 'Service Contractor Playbook',
    description: 'Complete guide to growing your service business with AI automation',
    type: 'PDF Download',
    icon: '📖'
  },
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
  },
  {
    title: 'Webinar: AI for Contractors',
    description: 'Monthly live sessions covering AI best practices',
    type: 'Live Webinar',
    icon: '🎥'
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
  return (
    <div className="min-h-screen">
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

      {/* Featured Resources */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Blog Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Latest from our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Industry insights and practical advice for service contractors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-clara-gold/10 text-clara-navy px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-clara-navy group-hover:text-clara-teal transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="outline" className="border-clara-navy text-clara-navy hover:bg-clara-navy/10 text-sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-clara-navy hover:bg-clara-navy/90 text-white px-8 py-3">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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

      {/* Help Center */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant answers from our support team</p>
              <Button variant="outline" className="border-clara-navy text-clara-navy hover:bg-clara-navy/10">
                Start Chat
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our technical experts</p>
              <Button variant="outline" className="border-clara-navy text-clara-navy hover:bg-clara-navy/10">
                Call Now
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Success Manager</h3>
              <p className="text-gray-600 mb-4">Dedicated support for Enterprise customers</p>
              <Button variant="outline" className="border-clara-navy text-clara-navy hover:bg-clara-navy/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
