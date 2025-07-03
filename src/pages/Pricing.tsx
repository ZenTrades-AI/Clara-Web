
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const businessTypes = [
  'HVAC',
  'Plumbing',
  'Electrical',
  'Fire Safety',
  'Facilities Management',
  'Construction',
  'Cleaning Services',
  'Security Services',
  'Landscaping',
  'Other'
];

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    businessCategory: '',
    crm: '',
    revenue: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Get Started with Clara AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tell us about your business and we'll customize Clara to fit your specific needs
          </p>
        </div>
      </section>

      {/* Smart Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Tell Us About Your Business
            </h2>
            <p className="text-xl text-gray-600">
              We'll customize Clara to fit your business needs
            </p>
          </div>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-clara-navy font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-clara-navy font-semibold">Company Name *</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-clara-navy font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-clara-navy font-semibold">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessType" className="text-clara-navy font-semibold">Business Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="businessCategory" className="text-clara-navy font-semibold">Business Category *</Label>
                  <Select onValueChange={(value) => handleInputChange('businessCategory', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your business category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="pe-backed">PE-backed</SelectItem>
                      <SelectItem value="mid-market">Mid-market</SelectItem>
                      <SelectItem value="national-accounts">National accounts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="crm" className="text-clara-navy font-semibold">Current CRM/Software</Label>
                  <Select onValueChange={(value) => handleInputChange('crm', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your current CRM or software" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="netsuite">NetSuite</SelectItem>
                      <SelectItem value="servicetrade">ServiceTrade</SelectItem>
                      <SelectItem value="buildops">BuildOps</SelectItem>
                      <SelectItem value="fieldwire">Fieldwire</SelectItem>
                      <SelectItem value="housecall">Housecall Pro</SelectItem>
                      <SelectItem value="jobber">Jobber</SelectItem>
                      <SelectItem value="servicetitan">ServiceTitan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="none">No current CRM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="revenue" className="text-clara-navy font-semibold">Annual Revenue</Label>
                  <Select onValueChange={(value) => handleInputChange('revenue', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your annual revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1m">Under $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                      <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                      <SelectItem value="25m-50m">$25M - $50M</SelectItem>
                      <SelectItem value="50m-100m">$50M - $100M</SelectItem>
                      <SelectItem value="over-100m">Over $100M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold py-3 text-lg"
                >
                  Get Custom Demo & Pricing
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We'll contact you within 24 hours to schedule your personalized demo</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-clara-navy font-bold">1</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Custom Demo</h3>
              <p className="text-gray-600">We'll show you Clara in action with scenarios specific to your business type</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-clara-navy font-bold">2</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">ROI Analysis</h3>
              <p className="text-gray-600">Get a detailed breakdown of potential savings and revenue growth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-clara-navy font-bold">3</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Implementation Plan</h3>
              <p className="text-gray-600">Receive a step-by-step plan to get Clara working for your business</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
