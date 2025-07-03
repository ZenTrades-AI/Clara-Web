
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import SolutionsInfographic from '@/components/SolutionsInfographic';
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
    detailedFeatures: [
      'Enterprise-grade security protocols',
      'Custom reporting dashboards',
      'Integration with major CRM platforms',
      'Dedicated account management',
      'Priority technical support',
      'Advanced analytics and insights'
    ],
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
    detailedFeatures: [
      'Centralized management console',
      'Brand-specific customization',
      'Cross-portfolio reporting',
      'Standardized KPI tracking',
      'Investment committee reporting',
      'Due diligence support'
    ],
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
    detailedFeatures: [
      'Multi-timezone coordination',
      'National account management',
      'Standardized service delivery',
      'Regional performance analytics',
      'Scalable infrastructure',
      'Enterprise SLA guarantees'
    ],
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
    detailedFeatures: [
      'Integrated facility management',
      'Predictive maintenance AI',
      'Compliance automation',
      'Client portal integration',
      'IoT device connectivity',
      'Advanced reporting suite'
    ],
    icon: '🏭'
  }
];

const stats = [
  { value: '15%', label: 'Avg. missed calls', sublabel: 'Industry standard', color: 'text-red-500' },
  { value: '<2%', label: 'Clara missed calls', sublabel: 'With human escalation', color: 'text-clara-teal' },
  { value: '4s', label: 'Answer time', sublabel: 'vs 23s industry avg', color: 'text-clara-teal' },
  { value: '30d', label: 'ROI payback', sublabel: 'Typical time to ROI', color: 'text-clara-gold' }
];

const Solutions = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Solutions Built for Your Business
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Clara AI adapts to your business model, whether you're a growing contractor or managing a multi-brand portfolio
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

      {/* Solutions Infographic */}
      <SolutionsInfographic />

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-clara-gold/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-clara-gold/5 to-clara-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
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
                
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-gray-600">{solution.description}</p>
                  
                  {/* Basic Features - Always Visible */}
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

                  {/* Expanded Content - Visible on Hover */}
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="pt-4 border-t border-gray-200 space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-clara-navy">Advanced Features:</h4>
                        <ul className="space-y-1">
                          {solution.detailedFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-clara-teal rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Industry Stats */}
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
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`relative p-6 rounded-xl bg-white shadow-lg transition-all duration-300 ${
                  hoveredStat === index ? 'shadow-2xl border-2 border-clara-teal' : 'hover:shadow-xl'
                }`}>
                  <div className={`text-4xl font-montserrat font-bold mb-2 transition-colors duration-300 ${
                    hoveredStat === index ? stat.color : 'text-clara-gold'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-clara-navy mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                  
                  {hoveredStat === index && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-clara-teal rounded-full animate-pulse"></div>
                  )}
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
            Find the right solution for your business
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to discover how Clara can transform your operations
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

      <Footer />
    </div>
  );
};

export default Solutions;
