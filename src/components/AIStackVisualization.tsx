
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stackLayers = [
  {
    id: 'answers',
    title: 'Answers',
    icon: '📞',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'dispatches',
    title: 'Dispatches',
    icon: '🚐',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'optimizes',
    title: 'Optimizes',
    icon: '⚡',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'reminds',
    title: 'Reminds',
    icon: '🔔',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'engages',
    title: 'Engages',
    icon: '💬',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'reviews',
    title: 'Reviews',
    icon: '⭐',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'collects',
    title: 'Collects',
    icon: '💳',
    color: 'from-teal-500 to-teal-600'
  }
];

const AIStackVisualization = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
            The 7-Layer AI Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each layer works seamlessly together to transform every customer touchpoint into growth
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Interactive Stack Visualization */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-clara-gold to-clara-teal rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-montserrat font-bold text-xl">Clara AI</span>
              </div>
            </div>
            
            {/* Orbital Layers */}
            {stackLayers.map((layer, index) => {
              const angle = (index * 360) / stackLayers.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={layer.id}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform ${
                    hoveredLayer === layer.id ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg'
                  } bg-gradient-to-br ${layer.color}`}
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`,
                  }}
                  onMouseEnter={() => setHoveredLayer(layer.id)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  <span className="text-2xl">{layer.icon}</span>
                  
                  {/* Tooltip */}
                  {hoveredLayer === layer.id && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-clara-navy text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap z-10">
                      {layer.title}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-clara-navy"></div>
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <defs>
                <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(32, 178, 170, 0.3)" />
                  <stop offset="100%" stopColor="rgba(32, 178, 170, 0.1)" />
                </radialGradient>
              </defs>
              <circle cx="50%" cy="50%" r="140" fill="none" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <Link to="/how-it-works">
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-8 py-3 text-lg">
              Explore How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIStackVisualization;
