
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const solutions = [
  {
    title: 'Mid-Market Commercial',
    description: 'Perfect for established contractors with 10-50 technicians serving commercial clients',
    kpi: '+32% revenue growth',
    features: [
      'Multi-location call routing',
      'Commercial client priority queues',
      'Advanced scheduling optimization',
      'Service contract management'
    ],
    caseStudy: 'HVAC contractor increased booked jobs by 45% in 6 months',
    icon: '🏢'
  },
  {
    title: 'PE Roll-up Platforms',
    description: 'Unified AI operations across your portfolio companies with centralized analytics',
    kpi: '40% operational efficiency gain',
    features: [
      'Multi-brand call handling',
      'Portfolio-wide analytics dashboard',
      'Standardized service protocols',
      'Cross-selling opportunities'
    ],
    caseStudy: 'PE firm achieved 25% EBITDA improvement across 8 portfolio companies',
    icon: '📊'
  },
  {
    title: 'National-Account Contractors',
    description: 'Scale operations across multiple markets with consistent service delivery',
    kpi: '50+ market coverage',
    features: [
      'National call center replacement',
      '24/7 multi-timezone support',
      'Brand consistency enforcement',
      'Real-time capacity management'
    ],
    caseStudy: 'National plumbing chain reduced operational costs by 35%',
    icon: '🌍'
  },
  {
    title: 'Enterprise Facility Services',
    description: 'Comprehensive facility management with integrated AI across all service lines',
    kpi: '60% faster response times',
    features: [
      'Multi-service line coordination',
      'Predictive maintenance alerts',
      'Compliance tracking & reporting',
      'Enterprise client portals'
    ],
    caseStudy: 'Facilities company improved client retention to 98%',
    icon: '🏭'
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Solutions Built for Your Business
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clara AI adapts to your business model, whether you're a growing contractor or managing a multi-brand portfolio
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-clara-gold/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-3">{solution.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-montserrat font-bold text-clara-gold">
                        {solution.kpi}
                      </div>
                      <div className="text-sm text-gray-500">Avg. improvement</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-clara-navy group-hover:text-clara-teal transition-colors">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">{solution.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-clara-navy">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-clara-gold rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-clara-gray p-4 rounded-lg">
                    <h4 className="font-semibold text-clara-navy mb-2">Case Study</h4>
                    <p className="text-sm text-gray-700">{solution.caseStudy}</p>
                  </div>

                  <Button className="w-full bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Why Service Contractors Choose Clara
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading results across all business models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-clara-gold mb-2">15%</div>
              <div className="text-lg font-semibold text-clara-navy mb-1">Avg. missed calls</div>
              <div className="text-sm text-gray-600">Industry standard</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-clara-gold mb-2">&lt;2%</div>
              <div className="text-lg font-semibold text-clara-navy mb-1">Clara missed calls</div>
              <div className="text-sm text-gray-600">With human escalation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-clara-gold mb-2">4s</div>
              <div className="text-lg font-semibold text-clara-navy mb-1">Answer time</div>
              <div className="text-sm text-gray-600">vs 23s industry avg</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-clara-gold mb-2">30d</div>
              <div className="text-lg font-semibold text-clara-navy mb-1">ROI payback</div>
              <div className="text-sm text-gray-600">Typical time to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Find the right solution for your business
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to discover how Clara can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
              Book a 15-min Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Calculate ROI
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
