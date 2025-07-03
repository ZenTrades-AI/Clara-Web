
import { useState, useEffect } from 'react';

const integrations = [
  { 
    name: 'NetSuite', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#FF6600"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">NS</text>
      </svg>
    ), 
    description: 'ERP & Financial Management' 
  },
  { 
    name: 'ServiceTrade', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#1B5E20"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">ST</text>
      </svg>
    ), 
    description: 'Field Service Management' 
  },
  { 
    name: 'BuildOps', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#795548"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">BO</text>
      </svg>
    ), 
    description: 'Construction Operations' 
  },
  { 
    name: 'QuickBooks', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#0077C5"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">QB</text>
      </svg>
    ), 
    description: 'Accounting Software' 
  },
  { 
    name: 'Fieldwire', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#E65100"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">FW</text>
      </svg>
    ), 
    description: 'Project Management' 
  },
  { 
    name: 'Housecall Pro', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#00BCD4"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HP</text>
      </svg>
    ), 
    description: 'Service Business Management' 
  },
  { 
    name: 'JobNimbus', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#6A1B9A"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">JN</text>
      </svg>
    ), 
    description: 'CRM & Project Management' 
  },
  { 
    name: 'ServiceTitan', 
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#D32F2F"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">ST</text>
      </svg>
    ), 
    description: 'Home Service CRM' 
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
                        className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer border border-gray-200 hover:border-clara-teal/30"
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
                  index === currentIndex ? 'bg-clara-teal' : 'bg-gray-300'
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
