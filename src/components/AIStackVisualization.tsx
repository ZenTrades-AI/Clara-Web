import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stackLayers = [
  {
    id: 'answers',
    title: 'Answer',
    icon: '📞',
    color: 'from-blue-500 to-blue-600',
    description: 'AI answers every call in 4 seconds'
  },
  {
    id: 'dispatches',
    title: 'Dispatch',
    icon: '🚐',
    color: 'from-green-500 to-green-600',
    description: 'Smart routing and scheduling'
  },
  {
    id: 'optimizes',
    title: 'Routing',
    icon: '⚡',
    color: 'from-purple-500 to-purple-600',
    description: 'Maximize efficiency and reduce costs'
  },
  {
    id: 'reminds',
    title: 'Reminders',
    icon: '🔔',
    color: 'from-orange-500 to-orange-600',
    description: 'Automated follow-ups and notifications'
  },
  {
    id: 'engages',
    title: 'Sales ↑',
    icon: '💬',
    color: 'from-pink-500 to-pink-600',
    description: 'Convert more leads to customers'
  },
  {
    id: 'reviews',
    title: 'Inspections',
    icon: '⭐',
    color: 'from-yellow-500 to-yellow-600',
    description: 'Quality assurance and reviews'
  },
  {
    id: 'collects',
    title: 'Collections',
    icon: '💳',
    color: 'from-teal-500 to-teal-600',
    description: 'Automated payment processing'
  }
];

const AIStackVisualization = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const orbitRadius = 180;
  const angleStep = 360 / stackLayers.length; // 51.43° even spacing

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

        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Solar System Container */}
          <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
            
            {/* Clara AI Core - The Sun */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-clara-teal to-clara-navy rounded-full shadow-2xl animate-pulse"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-clara-teal/90 to-clara-navy/90 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-montserrat font-bold text-xs mb-0.5">Clara AI</div>
                    <div className="text-white/80 text-[10px]">Core Engine</div>
                  </div>
                </div>
                {/* Core glow effect */}
                <div className="absolute -inset-2 bg-clara-teal/20 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Single Orbital Path - Visual Guide Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div
                className="border border-gray-200/50 rounded-full"
                style={{
                  width: `${orbitRadius * 2}px`,
                  height: `${orbitRadius * 2}px`,
                }}
              />
            </div>

            {/* Orbiting AI Agents - Evenly Spaced on Single Orbit */}
            {stackLayers.map((layer, index) => {
              const angle = index * angleStep;
              return (
                <div
                  key={layer.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ zIndex: 20 }}
                >
                  <div
                    className={`absolute transition-all duration-300 ${
                      isPaused ? '' : 'animate-orbit-smooth'
                    }`}
                    style={{
                      width: `${orbitRadius * 2}px`,
                      height: `${orbitRadius * 2}px`,
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: 'center',
                    }}
                  >
                    {/* Agent Container - Counter-rotates to keep label upright */}
                    <div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer group"
                      style={{
                        marginTop: '-20px',
                        transform: `translateX(-50%) ${isPaused ? '' : `rotate(-${angle}deg)`}`,
                      }}
                      onMouseEnter={() => {
                        setHoveredLayer(layer.id);
                        setIsPaused(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredLayer(null);
                        setIsPaused(false);
                      }}
                    >
                      {/* AI Agent Planet */}
                      <div className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${layer.color} transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl`}>
                        <span className="text-sm" role="img" aria-label={layer.title}>{layer.icon}</span>
                        {/* Planet glow on hover */}
                        {hoveredLayer === layer.id && (
                          <div className="absolute -inset-1 bg-white/40 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      
                      {/* Agent Label - Always Horizontal and Readable */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                        <div className={`text-xs font-semibold text-clara-navy whitespace-nowrap px-2 py-1 rounded-md transition-all duration-300 ${
                          hoveredLayer === layer.id 
                            ? 'bg-white shadow-lg scale-110 border border-gray-200' 
                            : 'bg-white/95'
                        }`}>
                          {layer.title}
                        </div>
                      </div>

                      {/* Detailed Tooltip on Hover */}
                      {hoveredLayer === layer.id && (
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-clara-navy text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap z-40 shadow-xl max-w-48">
                          <div className="font-semibold mb-0.5">{layer.title}</div>
                          <div className="text-[10px] text-gray-300">{layer.description}</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-clara-navy"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Background orbital effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-clara-teal/5 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Animation Control */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-sm text-gray-500 hover:text-clara-navy transition-colors px-4 py-2 border border-gray-200 rounded-full hover:border-clara-navy/30"
              aria-label={isPaused ? 'Resume orbit animation' : 'Pause orbit animation'}
            >
              {isPaused ? '▶️ Resume Animation' : '⏸️ Pause Animation'}
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link to="/how-it-works">
            <Button className="bg-clara-teal hover:bg-clara-teal/90 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              → See how it all works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIStackVisualization;
