
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$100',
    period: '/month',
    description: 'Perfect for small contractors getting started with AI',
    features: [
      'Up to 500 calls/month',
      'Basic call answering & scheduling',
      'SMS notifications',
      'Standard integrations',
      'Email support',
      '4-second response time'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Growth',
    price: '$1,200',
    period: '/month',
    description: 'Ideal for growing contractors with multiple technicians',
    features: [
      'Up to 2,500 calls/month',
      'Advanced dispatching & routing',
      'Payment collection automation',
      'CRM integrations',
      'Priority phone support',
      'Custom call scripts',
      'Analytics dashboard'
    ],
    cta: 'Book Demo',
    popular: true
  },
  {
    name: 'Scale',
    price: '$2,000+',
    period: '/month',
    description: 'Enterprise solution for large contractors and PE platforms',
    features: [
      'Unlimited calls',
      'Multi-location management',
      'Advanced analytics & reporting',
      'Custom integrations',
      'Dedicated success manager',
      'White-label options',
      'API access',
      'SLA guarantees'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business size. All plans include our core AI features with no setup fees.
          </p>
          <ROICalculator 
            trigger={
              <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
                Calculate Your ROI
              </Button>
            }
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${tier.popular ? 'border-2 border-clara-gold shadow-xl scale-105' : 'border border-gray-200'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-clara-gold text-clara-navy px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-montserrat font-bold text-clara-navy mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-montserrat font-bold text-clara-navy">
                      {tier.price}
                    </span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="text-clara-gold mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full font-semibold py-3 ${
                      tier.popular 
                        ? 'bg-clara-gold hover:bg-clara-gold/90 text-clara-navy'
                        : 'bg-clara-navy hover:bg-clara-navy/90 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-sm text-gray-500">
              Enterprise pricing based on call volume and custom requirements. 
              <a href="#" className="text-clara-teal hover:underline ml-1">Contact us for details.</a>
            </p>
          </div>
        </div>
      </section>

      {/* ROI Breakdown */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              The Clara ROI Story
            </h2>
            <p className="text-xl text-gray-600">
              See how Clara pays for itself within 30 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-montserrat font-bold text-clara-navy mb-3">Before Clara</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15% of calls go to voicemail</li>
                  <li>• Average 23-second response time</li>
                  <li>• Manual scheduling creates gaps</li>
                  <li>• 30% no-show rate</li>
                  <li>• Delayed payment collection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-montserrat font-bold text-clara-navy mb-3">With Clara</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• &lt;2% missed calls</li>
                  <li>• 4-second response time</li>
                  <li>• Optimized scheduling</li>
                  <li>• 18% no-show rate</li>
                  <li>• Automated payment follow-up</li>
                </ul>
              </div>
            </div>

            <div className="bg-clara-navy text-white p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
                Typical ROI Calculation
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Annual Revenue:</span>
                  <span className="font-semibold">$2,500,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Missed Call %:</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lost Revenue/Year:</span>
                  <span className="font-semibold text-clara-red">-$75,000</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between">
                    <span>Clara Monthly Cost:</span>
                    <span className="font-semibold">$1,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Recovered/Month:</span>
                    <span className="font-semibold text-clara-gold">+$5,000</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-600">
                    <span>Monthly ROI:</span>
                    <span className="text-clara-gold">+$3,800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-clara-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-clara-navy mb-2">What happens if Clara can't handle a call?</h3>
                <p className="text-gray-600 text-sm">Calls with &lt;85% confidence automatically escalate to your human dispatcher within 2 rings.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-clara-navy mb-2">How quickly can we get started?</h3>
                <p className="text-gray-600 text-sm">Most customers are live within 48 hours. Enterprise setups may take 1-2 weeks for custom integrations.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-clara-navy mb-2">Do you integrate with our existing tools?</h3>
                <p className="text-gray-600 text-sm">Yes! We support NetSuite, ServiceTrade, BuildOps, and 50+ other platforms. Custom integrations available.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-clara-navy mb-2">What's included in the free trial?</h3>
                <p className="text-gray-600 text-sm">Full access to all Starter plan features for 14 days. No credit card required, no setup fees.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-clara-navy mb-2">Can we upgrade or downgrade anytime?</h3>
                <p className="text-gray-600 text-sm">Absolutely. Plans are flexible and can be adjusted monthly based on your business needs.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-clara-navy mb-2">What kind of support do you provide?</h3>
                <p className="text-gray-600 text-sm">Email support for Starter, phone support for Growth, and dedicated success managers for Scale plans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Ready to grow your revenue with Clara?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today or speak with our team about your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
