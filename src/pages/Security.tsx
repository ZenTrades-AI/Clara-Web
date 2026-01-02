
import Navigation from '@/components/Navigation';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Download, Shield, Server, Lock } from 'lucide-react';

const Security = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-clara-navy text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Shield className="mx-auto text-clara-gold" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Enterprise-Grade Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clara meets the highest security standards with AWS infrastructure, SOC 2 compliance, and seamless integrations
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Your Data is Protected
            </h2>
            <p className="text-xl text-gray-600">
              Built on enterprise-grade infrastructure with best-in-class security practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AWS Infrastructure */}
            <Card className="text-center">
              <CardHeader>
                <Server className="mx-auto text-clara-gold mb-4" size={48} />
                <CardTitle className="font-montserrat text-clara-navy">AWS Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Hosted on Amazon Web Services with 99.99% uptime SLA and global data residency options
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>Multi-region redundancy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>Auto-scaling infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>DDoS protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Encryption */}
            <Card className="text-center">
              <CardHeader>
                <Lock className="mx-auto text-clara-gold mb-4" size={48} />
                <CardTitle className="font-montserrat text-clara-navy">Data Encryption</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  End-to-end encryption for all data in transit and at rest using AES-256 standards
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>TLS 1.3 encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>Encrypted data storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>Key rotation policies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="text-center">
              <CardHeader>
                <Shield className="mx-auto text-clara-gold mb-4" size={48} />
                <CardTitle className="font-montserrat text-clara-navy">Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  SOC 2 Type II certified with ongoing compliance monitoring and annual audits
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>SOC 2 Type II certified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>GDPR compliant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-clara-gold" size={16} />
                    <span>Regular security audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SOC 2 Timeline */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              SOC 2 Compliance Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Transparent security milestones and continuous compliance monitoring
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-clara-gold"></div>
            
            <div className="space-y-12">
              {/* Q1 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-montserrat font-bold text-clara-navy mb-2">Q1 2024</h3>
                    <p className="text-gray-600">SOC 2 Type I assessment completed</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-clara-gold rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Q2 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-clara-gold rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-montserrat font-bold text-clara-navy mb-2">Q2 2024</h3>
                    <p className="text-gray-600">12-month observation period initiated for Type II</p>
                  </div>
                </div>
              </div>

              {/* Q4 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-clara-navy text-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-montserrat font-bold text-clara-gold mb-2">Q4 2024</h3>
                    <p className="text-gray-300">SOC 2 Type II certification expected</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-clara-navy rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect Clara with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Featured Integration Badges */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-gray-600">NetSuite</span>
              </div>
              <h3 className="font-semibold text-clara-navy">NetSuite ERP</h3>
              <p className="text-sm text-gray-600 mt-2">Complete financial integration</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-gray-600">ServiceTrade</span>
              </div>
              <h3 className="font-semibold text-clara-navy">ServiceTrade</h3>
              <p className="text-sm text-gray-600 mt-2">Field service management</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-gray-600">BuildOps</span>
              </div>
              <h3 className="font-semibold text-clara-navy">BuildOps</h3>
              <p className="text-sm text-gray-600 mt-2">Construction management</p>
            </div>
          </div>

          {/* Additional Integrations */}
          <div className="bg-clara-gray p-8 rounded-xl">
            <h3 className="font-montserrat font-bold text-clara-navy text-center mb-6">
              50+ Additional Integrations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
              <div>QuickBooks</div>
              <div>Salesforce</div>
              <div>Microsoft Dynamics</div>
              <div>ServiceMax</div>
              <div>FieldEdge</div>
              <div>HouseCall Pro</div>
              <div>Jobber</div>
              <div>ServiceTitan</div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">Need a custom integration?</p>
              <Button variant="outline" className="border-clara-navy text-clara-navy hover:bg-clara-navy/10">
                Contact Integration Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API & Developer Resources */}
      <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold mb-6">
                Developer-Friendly APIs
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Build custom integrations with our comprehensive REST API and webhook system
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <Check className="text-clara-gold" size={20} />
                  <span>RESTful API with OpenAPI specification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-clara-gold" size={20} />
                  <span>Real-time webhooks for event notifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-clara-gold" size={20} />
                  <span>Comprehensive SDK libraries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-clara-gold" size={20} />
                  <span>Interactive API documentation</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-8 rounded-xl mb-6">
                <Download className="mx-auto text-clara-gold mb-4" size={48} />
                <h3 className="font-montserrat font-bold mb-4">Postman Collection</h3>
                <p className="text-gray-300 mb-4">
                  Ready-to-use API collection with sample requests and authentication setup
                </p>
                <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold">
                  Download Collection
                </Button>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>API Rate Limits: 10,000 requests/hour</p>
                <p>99.9% API uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clara-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-6">
            Enterprise Security You Can Trust
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn more about our security practices and compliance standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
              Schedule Security Review
            </Button>
            <Button variant="outline" className="border-clara-navy text-clara-navy hover:bg-clara-navy/10 px-8 py-3 text-lg">
              Download Security Whitepaper
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
