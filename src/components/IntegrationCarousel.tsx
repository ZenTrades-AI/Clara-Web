
import { useState, useEffect } from 'react';

const integrations = [
  { name: 'NetSuite', logo: 'NS', description: 'ERP & Financial Management' },
  { name: 'ServiceTrade', logo: 'ST', description: 'Field Service Management' },
  { name: 'BuildOps', logo: 'BO', description: 'Construction Operations' },
  { name: 'QuickBooks', logo: 'QB', description: 'Accounting Software' },
  { name: 'Fieldwire', logo: 'FW', description: 'Project Management' },
  { name: 'Housecall Pro', logo: 'HP', description: 'Service Business Management' },
  { name: 'JobNimbus', logo: 'JN', description: 'CRM & Project Management' },
  { name: 'ServiceTitan', logo: 'ST', description: 'Home Service CRM' },
];

const IntegrationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(integrations.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-clara-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-montserrat font-bold text-clara-navy mb-4">
            Seamless Integrations
          </h3>
          <p className="text-lg text-gray-600">
            Clara connects with your existing tools and workflows
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(integrations.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {integrations
                    .slice(slideIndex * 4, slideIndex * 4 + 4)
                    .map((integration, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-clara-gold/30"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-clara-gold/20 to-clara-teal/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <span className="font-bold text-clara-navy text-lg">
                              {integration.logo}
                            </span>
                          </div>
                          <h4 className="font-montserrat font-semibold text-clara-navy mb-1">
                            {integration.name}
                          </h4>
                          <p className="text-xs text-gray-500">{integration.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(integrations.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-clara-gold' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationCarousel;
