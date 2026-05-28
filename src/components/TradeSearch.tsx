
import React, { useState, useEffect } from 'react';
import { Search, Phone, Calendar, CreditCard } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface TradeResult {
  name: string;
  icon: string;
  capture: string;
  convert: string;
  collect: string;
}

const TradeSearch = () => {
  const [searchTrade, setSearchTrade] = useState('');
  const [searchResults, setSearchResults] = useState<TradeResult | null>(null);
  const [searchPlaceholder, setSearchPlaceholder] = useState('');

  const placeholderTexts = ['Construction...', 'Security...', 'Cleaning...', 'Landscaping...'];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Animated placeholder effect
  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let letterIndex = 0;
    const currentPlaceholder = placeholderTexts[placeholderIndex];

    const typeEffect = () => {
      if (!isDeleting && letterIndex < currentPlaceholder.length) {
        currentText += currentPlaceholder[letterIndex];
        letterIndex++;
      } else if (isDeleting && letterIndex > 0) {
        currentText = currentText.slice(0, -1);
        letterIndex--;
      } else if (!isDeleting && letterIndex === currentPlaceholder.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
      }

      setSearchPlaceholder(currentText);
    };

    const timer = setInterval(typeEffect, isDeleting ? 50 : 100);
    return () => clearInterval(timer);
  }, [placeholderIndex]);

  const handleSearch = (trade: string) => {
    if (!trade.trim()) {
      setSearchResults(null);
      return;
    }

    const searchTerm = trade.toLowerCase();
    
    if (searchTerm.includes('construction')) {
      setSearchResults({
        name: 'Construction',
        icon: '🏗️',
        capture: 'Handle project inquiry calls and emergency site issues',
        convert: 'Schedule site visits, consultations, and crew dispatch',
        collect: 'Follow up on project payments and contract renewals'
      });
    } else if (searchTerm.includes('security')) {
      setSearchResults({
        name: 'Security',
        icon: '🛡️',
        capture: 'Answer security emergency calls and alarm notifications',
        convert: 'Schedule security assessments and system installations',
        collect: 'Manage monitoring fees and service contracts'
      });
    } else if (searchTerm.includes('cleaning')) {
      setSearchResults({
        name: 'Cleaning',
        icon: '🧽',
        capture: 'Handle commercial cleaning inquiries and scheduling',
        convert: 'Schedule cleaning crews efficiently across locations',
        collect: 'Automate recurring billing and contract management'
      });
    } else if (searchTerm.includes('landscaping')) {
      setSearchResults({
        name: 'Landscaping',
        icon: '🌿',
        capture: 'Manage seasonal service calls and emergency requests',
        convert: 'Schedule maintenance crews and seasonal services',
        collect: 'Process payments for recurring landscape services'
      });
    } else if (searchTerm.includes('plumbing')) {
      setSearchResults({
        name: 'Plumbing',
        icon: '🔧',
        capture: 'Handle emergency leak calls and service requests',
        convert: 'Dispatch ideal local plumber based on expertise',
        collect: 'Automate invoice follow-ups and payment processing'
      });
    } else if (searchTerm.includes('electrical')) {
      setSearchResults({
        name: 'Electrical',
        icon: '⚡',
        capture: 'Respond to electrical faults and outage alerts',
        convert: 'Dispatch skilled electricians based on issue type',
        collect: 'Send reminders for recurring electrical maintenance'
      });
    } else if (searchTerm.includes('hvac')) {
      setSearchResults({
        name: 'HVAC',
        icon: '❄️',
        capture: 'Catch seasonal HVAC call surges and emergencies',
        convert: 'Route calls based on urgency and technician availability',
        collect: 'Collect overdue service payments and maintenance fees'
      });
    } else {
      setSearchResults({
        name: trade,
        icon: '🔧',
        capture: 'Capture and route all incoming service calls efficiently',
        convert: 'Convert leads into scheduled appointments automatically',
        collect: 'Collect payments and manage customer billing seamlessly'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
        Search Your Trade
      </h3>
      <p className="text-gray-600 mb-8">
        Clara's AI adapts to any service business. See how it works for your industry.
      </p>
      
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={`Search your trade... ${searchPlaceholder}`}
          className="pl-12 pr-4 py-4 text-lg border-2 hover:border-clara-red/30 focus:border-clara-red transition-all duration-300"
          value={searchTrade}
          onChange={(e) => {
            setSearchTrade(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['Construction', 'Security', 'Cleaning', 'Landscaping'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setSearchTrade(suggestion);
              handleSearch(suggestion);
            }}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-clara-red/10 hover:text-clara-red rounded-full transition-all duration-200 transform hover:scale-105"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {searchResults && (
        <Card className="max-w-md mx-auto animate-fade-in shadow-xl">
          <CardContent className="p-6">
            <div className="text-3xl mb-4">{searchResults.icon}</div>
            <h4 className="text-xl font-montserrat font-bold mb-4">{searchResults.name}</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-clara-red mt-1" />
                <div>
                  <span className="font-semibold text-clara-red text-xs">CAPTURE</span>
                  <p className="text-sm text-gray-600">{searchResults.capture}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Calendar className="w-4 h-4 text-clara-red mt-1" />
                <div>
                  <span className="font-semibold text-clara-red text-xs">CONVERT</span>
                  <p className="text-sm text-gray-600">{searchResults.convert}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CreditCard className="w-4 h-4 text-clara-red mt-1" />
                <div>
                  <span className="font-semibold text-clara-red text-xs">COLLECT</span>
                  <p className="text-sm text-gray-600">{searchResults.collect}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TradeSearch;
