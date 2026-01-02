
import React from 'react';
import { TrendingUp, CheckCircle, Phone, Calendar, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const businessTypes = [
  {
    title: 'Mid-Market Commercial',
    subtitle: '+32% revenue growth',
    description: 'Perfect for established contractors with 10-50 technicians',
    capture: 'Multi-location call routing',
    convert: 'Priority client scheduling',
    collect: 'Contract renewal automation',
    features: ['Multi-account routing', 'Priority systems', 'Contract management', 'Service workflows']
  },
  {
    title: 'PE Roll-up Platforms',
    subtitle: '40% operational efficiency',
    description: 'Unified AI operations across portfolio companies',
    capture: 'Multi-brand call handling',
    convert: 'Portfolio-wide analytics',
    collect: 'Centralized processing',
    features: ['Multi-brand handling', 'Analytics dashboard', 'Standard protocols', 'Cross-selling']
  },
  {
    title: 'National Contractors',
    subtitle: '50+ market coverage',
    description: 'Scale operations across multiple markets',
    capture: 'National call center replacement',
    convert: '24/7 multi-timezone support',  
    collect: 'Enterprise invoicing',
    features: ['National coverage', '24/7 support', 'Brand consistency', 'Capacity management']
  },
  {
    title: 'Enterprise Facilities',
    subtitle: '60% faster response',
    description: 'Comprehensive facility management integration',
    capture: 'Multi-service coordination',
    convert: 'Preventive maintenance alerts',
    collect: 'Compliance tracking',
    features: ['Service coordination', 'Maintenance alerts', 'Compliance tracking', 'Facility-wide service']
  }
];

const BusinessTypeCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {businessTypes.map((business, index) => (
        <Card 
          key={business.title}
          className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 hover:border-clara-red/30 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-clara-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardContent className="p-8 relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-2 group-hover:text-clara-red transition-colors">
                  {business.title}
                </h3>
                <div className="text-clara-red font-bold text-lg mb-4">
                  {business.subtitle}
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-clara-red group-hover:scale-110 transition-transform" />
            </div>
            
            <p className="text-gray-600 mb-6">
              {business.description}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-clara-red/5 rounded-xl hover:bg-clara-red/10 transition-colors">
                <Phone className="w-5 h-5 text-clara-red mx-auto mb-1" />
                <div className="text-xs font-semibold text-clara-red">CAPTURE</div>
                <p className="text-xs text-gray-600 mt-1">{business.capture}</p>
              </div>
              <div className="text-center p-3 bg-clara-red/5 rounded-xl hover:bg-clara-red/10 transition-colors">
                <Calendar className="w-5 h-5 text-clara-red mx-auto mb-1" />
                <div className="text-xs font-semibold text-clara-red">CONVERT</div>
                <p className="text-xs text-gray-600 mt-1">{business.convert}</p>
              </div>
              <div className="text-center p-3 bg-clara-red/5 rounded-xl hover:bg-clara-red/10 transition-colors">
                <CreditCard className="w-5 h-5 text-clara-red mx-auto mb-1" />
                <div className="text-xs font-semibold text-clara-red">COLLECT</div>
                <p className="text-xs text-gray-600 mt-1">{business.collect}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
              <div className="grid grid-cols-2 gap-2">
                {business.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-clara-red flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BusinessTypeCards;
