
import React from 'react';
import { Phone, Calendar, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const primaryTrades = [
  {
    id: 'fire-safety',
    name: 'Fire Safety',
    icon: '🔥',
    capture: '24/7 emergency call routing',
    convert: 'Auto-dispatch for safety inspections',
    collect: 'Follow-up on compliance docs'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    capture: 'Respond to fault & outage alerts',
    convert: 'Dispatch skilled tech based on type',
    collect: 'Send reminders for recurring work'
  },
  {
    id: 'hvac',
    name: 'HVAC',
    icon: '❄️',
    capture: 'Catch seasonal call surges',
    convert: 'Smartly route based on urgency',
    collect: 'Collect overdue service payments'
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    capture: 'Handle emergency or leak calls',
    convert: 'Dispatch ideal local plumber',
    collect: 'Automate invoice follow-ups'
  }
];

const TradeVerticals = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {primaryTrades.map((trade, index) => (
        <Card 
          key={trade.id} 
          className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 transform border-2 hover:border-clara-red/30"
        >
          <CardContent className="p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-clara-red to-clara-red/80 flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              {trade.icon}
            </div>
            <h3 className="text-xl font-montserrat font-bold text-center mb-4 text-clara-navy">{trade.name}</h3>
            
            <div className="transition-all duration-500 overflow-hidden opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96">
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-clara-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-clara-red text-sm">CAPTURE</div>
                    <p className="text-sm text-gray-600">{trade.capture}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-clara-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-clara-red text-sm">CONVERT</div>
                    <p className="text-sm text-gray-600">{trade.convert}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-clara-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-clara-red text-sm">COLLECT</div>
                    <p className="text-sm text-gray-600">{trade.collect}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 relative">
              <ChevronDown className="w-5 h-5 mx-auto text-gray-400 group-hover:text-clara-red transition-colors opacity-100 group-hover:opacity-0" />
              <ChevronUp className="w-5 h-5 mx-auto text-clara-red transition-colors opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TradeVerticals;
