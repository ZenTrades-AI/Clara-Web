
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const stackLayers = [
  {
    id: 'answers',
    title: 'Clara Answers',
    icon: '💬',
    color: 'from-blue-500 to-blue-600',
    description: 'AI answers every call in 4 seconds',
    pricing: '$250/month'
  },
  {
    id: 'dispatches',
    title: 'Clara Dispatches',
    icon: '🚐', 
    color: 'from-cyan-500 to-blue-500',
    description: 'Smart routing and scheduling',
    pricing: '$400/month'
  },
  {
    id: 'optimizes',
    title: 'Clara Optimises',
    icon: '⚡',
    color: 'from-orange-500 to-red-500',
    description: 'Route optimization and efficiency',
    pricing: '$600/month'
  },
  {
    id: 'reminds',
    title: 'Clara Reminds',
    icon: '🔔',
    color: 'from-orange-400 to-orange-500',
    description: 'Automated reminders and follow-ups',
    pricing: '$850/month'
  },
  {
    id: 'boosts',
    title: 'Clara Boosts',
    icon: '📈',
    color: 'from-blue-600 to-purple-600',
    description: 'Sales optimization and conversion',
    pricing: '$1200/month'
  },
  {
    id: 'reviews',
    title: 'Clara Reviews',
    icon: '⭐',
    color: 'from-blue-700 to-blue-800',
    description: 'Review management and reputation',
    pricing: '$1600/month'
  },
  {
    id: 'collects',
    title: 'Clara Collects',
    icon: '💰',
    color: 'from-blue-800 to-blue-900',
    description: 'Payment processing and collections',
    pricing: '$2000+/month'
  }
];

const AIStackSection = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
            Clara AI Growth Engine - 7 Stack Layers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modular layers that scale from $250/month to $2000+ enterprise stack
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Stack Layers - Reversed order */}
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mb-8 sm:flex sm:flex-row-reverse">
            {stackLayers.map((layer, index) => (
              <div key={layer.id} className="flex flex-col items-center sm:flex-1">
                {/* Stack Blocks */}
                <div className="relative w-full max-w-[140px]">
                  {stackLayers.slice(0, index + 1).reverse().map((stackItem, stackIndex) => (
                    <div
                      key={`${layer.id}-${stackIndex}`}
                      className={`
                        w-full h-12 rounded-lg shadow-md mb-1 last:mb-0 flex items-center justify-center text-white font-semibold text-sm
                        bg-gradient-to-r ${stackItem.color}
                        transform transition-all duration-300 hover:scale-105 cursor-pointer
                        ${hoveredLayer === stackItem.id ? 'ring-4 ring-white shadow-xl scale-105' : ''}
                      `}
                      onMouseEnter={() => setHoveredLayer(stackItem.id)}
                      onMouseLeave={() => setHoveredLayer(null)}
                    >
                      <span className="mr-2">{stackItem.icon}</span>
                      <span className="truncate text-xs">{stackItem.title.replace('Clara ', '')}</span>
                    </div>
                  ))}
                </div>
                
                {/* Level and Pricing */}
                <div className="text-center mt-4">
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    Level {index + 1}
                  </div>
                  <div className="text-xs text-gray-500">
                    {layer.pricing}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hover Details */}
          {hoveredLayer && (
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 animate-fade-in">
              {(() => {
                const layer = stackLayers.find(l => l.id === hoveredLayer);
                return layer ? (
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <span className="text-2xl">{layer.icon}</span>
                      <h3 className="text-xl font-montserrat font-bold text-clara-navy">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2">{layer.description}</p>
                    <div className="text-clara-gold font-semibold">{layer.pricing}</div>
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {/* ROI Banner */}
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-clara-gold to-yellow-500 text-clara-navy px-8 py-4 rounded-2xl shadow-lg">
              <div className="text-2xl font-montserrat font-bold">
                ROI: $1 in, $5 out
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button className="bg-clara-navy hover:bg-clara-navy/90 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              → See how it all works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStackSection;
