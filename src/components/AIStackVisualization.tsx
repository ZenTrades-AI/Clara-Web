
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stackLayers = [
  {
    id: 'answers',
    title: 'Answer',
    icon: '📞',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'dispatches',
    title: 'Dispatch',
    icon: '🚐',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'optimizes',
    title: 'Route Optimization',
    icon: '⚡',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'reminds',
    title: 'Reminders',
    icon: '🔔',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'engages',
    title: 'Sales Boost',
    icon: '💬',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'reviews',
    title: 'Inspections',
    icon: '⭐',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'collects',
    title: 'Collections',
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

        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Interactive Stack Visualization */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-40 h-40 bg-gradient-to-br from-clara-teal to-clara-navy rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <div className="text-center">
                  <div className="text-white font-montserrat font-bold text-xl mb-1">Clara AI</div>
                  <div className="text-white/80 text-sm">Core Engine</div>
                </div>
              </div>
            </div>
            
            {/* Orbital Layers */}
            {stackLayers.map((layer, index) => {
              const angle = (index * 360) / stackLayers.length;
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={layer.id}
                  className={`absolute transition-all duration-500 cursor-pointer group ${
                    hoveredLayer === layer.id ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 4rem)`,
                    top: `calc(50% + ${y}px - 4rem)`,
                  }}
                  onMouseEnter={() => setHoveredLayer(layer.id)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Agent Container */}
                  <div className={`relative transform transition-all duration-300 ${
                    hoveredLayer === layer.id ? 'scale-110' : 'scale-100'
                  } group-hover:scale-105`}>
                    {/* Agent Circle */}
                    <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl bg-gradient-to-br ${layer.color} relative overflow-hidden`}>
                      {/* Animated background ring on hover */}
                      {hoveredLayer === layer.id && (
                        <div className="absolute inset-0 rounded-full border-4 border-clara-teal animate-pulse"></div>
                      )}
                      
                      <span className="text-3xl mb-2 relative z-10">{layer.icon}</span>
                      <span className="text-white text-sm font-semibold text-center px-2 relative z-10">
                        {layer.title}
                      </span>
                    </div>
                    
                    {/* Connection Line to Center */}
                    <div 
                      className={`absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-r from-clara-teal/30 to-transparent transition-opacity duration-300 ${
                        hoveredLayer === layer.id ? 'opacity-100' : 'opacity-40'
                      }`}
                      style={{
                        height: `${radius - 80}px`,
                        transformOrigin: 'top center',
                        transform: `rotate(${angle + 180}deg) translateX(-50%)`,
                      }}
                    />
                  </div>

                  {/* Tooltip */}
                  {hoveredLayer === layer.id && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-clara-navy text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-30 shadow-lg">
                      AI {layer.title} Agent
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-clara-navy"></div>
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Orbital Rings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <radialGradient id="orbitGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(32, 178, 170, 0.1)" />
                  <stop offset="100%" stopColor="rgba(32, 178, 170, 0.3)" />
                </radialGradient>
              </defs>
              {/* Main orbit ring */}
              <circle 
                cx="50%" 
                cy="50%" 
                r="200" 
                fill="none" 
                stroke="url(#orbitGradient)" 
                strokeWidth="2" 
                strokeDasharray="10,5" 
                className="animate-[spin_60s_linear_infinite]" 
              />
              {/* Inner orbit ring */}
              <circle 
                cx="50%" 
                cy="50%" 
                r="160" 
                fill="none" 
                stroke="rgba(32, 178, 170, 0.2)" 
                strokeWidth="1" 
                strokeDasharray="5,10" 
                className="animate-[spin_45s_linear_infinite_reverse]" 
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <Link to="/how-it-works">
            <Button className="bg-clara-teal hover:bg-clara-teal/90 text-white font-semibold px-8 py-3 text-lg">
              Explore How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIStackVisualization;
