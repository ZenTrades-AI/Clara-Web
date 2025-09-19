import Navigation from '@/components/Navigation';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '@/components/Footer';
import { openHubSpotForm } from '@/utils/hubspotForm';
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

  const [activeStep, setActiveStep] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const steps = [
    {
      title: "Custom Demo",
      description: "We'll show you Clara in action with scenarios specific to your business type",
      icon: "🎯",
      details: [
        "Live product walkthrough",
        "Real-world use cases",
        "Q&A with experts"
      ]
    },
    {
      title: "ROI Analysis", 
      description: "Get a detailed breakdown of potential savings and revenue growth",
      icon: "📊",
      details: [
        "Cost-benefit analysis",
        "Revenue projections",
        "Payback timeline"
      ]
    },
    {
      title: "Implementation Plan",
      description: "Receive a step-by-step plan to get Clara working for your business",
      icon: "🚀",
      details: [
        "Setup timeline",
        "Integration roadmap",
        "Success metrics"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
      <title>Pricing | Clara AI Plans for Trades Contractors</title>
      <meta name="description" content="See Clara AI pricing & plans built for trade businesses. Transparent, scalable pricing so you pay for value | Book demo" />
    </Helmet>
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

      {/* Interactive Benefits Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                <Card className={`h-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-clara-teal shadow-xl bg-clara-teal/5' 
                    : 'border-gray-200 hover:border-clara-teal/50 hover:shadow-lg'
                }`}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-clara-teal text-white scale-110' 
                        : 'bg-clara-gold text-clara-navy'
                    }`}>
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <h3 className={`font-montserrat font-bold mb-4 transition-colors duration-300 ${
                      activeStep === index ? 'text-clara-teal' : 'text-clara-navy'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {activeStep === index && (
                      <div className="animate-fade-in">
                        <div className="border-t border-clara-teal/20 pt-4 mt-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center justify-center mb-2">
                              <div className="w-2 h-2 bg-clara-teal rounded-full mr-3"></div>
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Interactive Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeStep >= index ? 'bg-clara-teal' : 'bg-gray-300'
                  }`}></div>
                  {index < steps.length - 1 && (
                    <div className={`w-24 h-1 mx-4 transition-all duration-300 ${
                      activeStep > index ? 'bg-clara-teal' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                Typical timeline: <span className="font-semibold text-clara-teal">24-48 hours</span>
              </p>
              <Button 
                className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3"
                onClick={openHubSpotForm}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
