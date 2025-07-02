
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stackLayers = [
  {
    id: 'answers',
    title: 'Answer',
    icon: '📞',
    color: 'from-blue-500 to-blue-600',
    orbitRadius: 180,
    speed: 60
  },
  {
    id: 'dispatches',
    title: 'Dispatch',
    icon: '🚐',
    color: 'from-green-500 to-green-600',
    orbitRadius: 220,
    speed: 45
  },
  {
    id: 'optimizes',
    title: 'Route Optimization',
    icon: '⚡',
    color: 'from-purple-500 to-purple-600',
    orbitRadius: 260,
    speed: 75
  },
  {
    id: 'reminds',
    title: 'Reminders',
    icon: '🔔',
    color: 'from-orange-500 to-orange-600',
    orbitRadius: 200,
    speed: 90
  },
  {
    id: 'engages',
    title: 'Sales Boost',
    icon: '💬',
    color: 'from-pink-500 to-pink-600',
    orbitRadius: 240,
    speed: 30
  },
  {
    id: 'reviews',
    title: 'Inspections',
    icon: '⭐',
    color: 'from-yellow-500 to-yellow-600',
    orbitRadius: 300,
    speed: 120
  },
  {
    id: 'collects',
    title: 'Collections',
    icon: '💳',
    color: 'from-teal-500 to-teal-600',
    orbitRadius: 280,
    speed: 100
  }
];

const AIStackVisualization = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
            The Clara AI Solar System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seven AI agents orbiting around Clara's intelligent core, working in perfect harmony to transform your business
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Solar System Container */}
          <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
            
            {/* Clara AI Core - The Sun */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-clara-teal to-clara-navy rounded-full animate-pulse shadow-2xl"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-clara-teal/80 to-clara-navy/80 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-montserrat font-bold text-lg mb-1">Clara AI</div>
                    <div className="text-white/80 text-xs">Core Engine</div>
                  </div>
                </div>
                {/* Core glow effect */}
                <div className="absolute -inset-4 bg-clara-teal/20 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Orbital Paths - Visual Guide Circles */}
            {stackLayers.map((layer, index) => (
              <div
                key={`orbit-${layer.id}`}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ zIndex: 1 }}
              >
                <div
                  className="border border-gray-200/30 rounded-full"
                  style={{
                    width: `${layer.orbitRadius * 2}px`,
                    height: `${layer.orbitRadius * 2}px`,
                  }}
                />
              </div>
            ))}

            {/* Orbiting AI Agents - The Planets */}
            {stackLayers.map((layer, index) => (
              <div
                key={layer.id}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 10 }}
              >
                <div
                  className="absolute"
                  style={{
                    width: `${layer.orbitRadius * 2}px`,
                    height: `${layer.orbitRadius * 2}px`,
                    animation: `orbit-${layer.id} ${layer.speed}s linear infinite`,
                  }}
                >
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-300 ${
                      hoveredLayer === layer.id ? 'scale-110 z-30' : 'scale-100 z-10'
                    }`}
                    style={{
                      marginTop: '-30px', // Half the height of the agent container
                    }}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                  >
                    {/* AI Agent Planet */}
                    <div className={`relative w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg bg-gradient-to-br ${layer.color} transform transition-all duration-300 group-hover:shadow-xl`}>
                      <span className="text-xl">{layer.icon}</span>
                      {/* Planet glow on hover */}
                      {hoveredLayer === layer.id && (
                        <div className="absolute -inset-2 bg-white/30 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Agent Label */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                      <div className={`text-xs font-semibold text-clara-navy whitespace-nowrap px-2 py-1 rounded-md transition-all duration-300 ${
                        hoveredLayer === layer.id 
                          ? 'bg-white shadow-lg scale-105' 
                          : 'bg-white/80'
                      }`}>
                        {layer.title}
                      </div>
                    </div>

                    {/* Detailed Tooltip on Hover */}
                    {hoveredLayer === layer.id && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-clara-navy text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap z-40 shadow-xl">
                        AI {layer.title} Agent
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-clara-navy"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Background orbital effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-clara-teal/5 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/how-it-works">
            <Button className="bg-clara-teal hover:bg-clara-teal/90 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              How It Works →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIStackVisualization;
