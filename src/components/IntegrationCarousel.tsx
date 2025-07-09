
import { useState, useEffect } from 'react';

const integrations = [
  { 
    name: 'NetSuite', 
    logo: (
      <img 
        src="/lovable-uploads/c8a7bc1f-fcd4-45e9-bb52-05dd0eb9577e.png" 
        alt="NetSuite logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'ERP & Financial Management' 
  },
  { 
    name: 'ServiceTrade', 
    logo: (
      <img 
        src="/lovable-uploads/57d2938e-9780-43d5-88a0-95f380278b9a.png" 
        alt="ServiceTrade logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Field Service Management' 
  },
  { 
    name: 'BuildOps', 
    logo: (
      <img 
        src="/lovable-uploads/f61ebd70-5db9-48b3-be28-252cd2502db8.png" 
        alt="BuildOps logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Construction Operations' 
  },
  { 
    name: 'QuickBooks', 
    logo: (
      <img 
        src="/lovable-uploads/f0c4e272-eb15-42d4-955b-c8cf4403db2a.png" 
        alt="QuickBooks logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Accounting Software' 
  },
  { 
    name: 'Fieldwire', 
    logo: (
      <img 
        src="/lovable-uploads/282232b0-0ffb-4469-b0de-7cd4c7d6dcd2.png" 
        alt="Fieldwire logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Project Management' 
  },
  { 
    name: 'Housecall Pro', 
    logo: (
      <img 
        src="/lovable-uploads/f3a696a6-29cc-47fc-8f65-c912308b70e8.png" 
        alt="Housecall Pro logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Service Business Management' 
  },
  { 
    name: 'JobNimbus', 
    logo: (
      <img 
        src="/lovable-uploads/ef216e49-e109-45b0-9d02-425f5b12e721.png" 
        alt="JobNimbus logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'CRM & Project Management' 
  },
  { 
    name: 'ServiceTitan', 
    logo: (
      <img 
        src="/lovable-uploads/55412082-b4e3-4134-96f0-df7cd4618034.png" 
        alt="ServiceTitan logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Home Service CRM' 
  },
  { 
    name: 'ZenTrades', 
    logo: (
      <img 
        src="/lovable-uploads/2bbfef7e-b908-4f10-810d-8d0a6ec1a125.png" 
        alt="Zentrades logo" 
        className="w-12 h-12 object-contain"
      />
    ), 
    description: 'Field Service Management' 
  },
];

const IntegrationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(integrations.length / 4));
    }, 4000); // Smoother timing

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
            className="flex transition-transform duration-700 ease-in-out" // Smoother transition
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
                        className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer border border-gray-200 hover:border-clara-red/30"
                      >
                        <div className="text-center">
                          <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                            {integration.logo}
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
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-clara-red' : 'bg-gray-300'
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
