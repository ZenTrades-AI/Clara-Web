
import { useState } from 'react';

const stackLayers = [
  {
    id: 'answers',
    title: 'Answers',
    description: 'Every call answered in 4 seconds with human-level conversation and intelligent routing',
    features: ['Natural language processing', 'Context-aware responses', 'Multi-language support', 'Call prioritization'],
    icon: '📞'
  },
  {
    id: 'dispatches',
    title: 'Dispatches',
    description: 'Smart technician routing and scheduling optimization based on location, skills, and availability',
    features: ['Real-time GPS tracking', 'Skill-based routing', 'Dynamic scheduling', 'Emergency prioritization'],
    icon: '🚐'
  },
  {
    id: 'optimizes',
    title: 'Optimizes',
    description: 'Route optimization and resource allocation to maximize efficiency and reduce travel time',
    features: ['AI route planning', 'Traffic analysis', 'Resource allocation', 'Capacity optimization'],
    icon: '⚡'
  },
  {
    id: 'reminds',
    title: 'Reminds',
    description: 'Automated appointment reminders and follow-ups to reduce no-shows and improve customer satisfaction',
    features: ['Multi-channel reminders', 'Custom timing', 'Personalized messages', 'Confirmation tracking'],
    icon: '🔔'
  },
  {
    id: 'engages',
    title: 'Engages',
    description: 'Proactive customer communication and relationship building throughout the service journey',
    features: ['Customer journey mapping', 'Personalized outreach', 'Satisfaction surveys', 'Upsell opportunities'],
    icon: '💬'
  },
  {
    id: 'reviews',
    title: 'Reviews',
    description: 'Automated review collection and reputation management to build trust and attract new customers',
    features: ['Review automation', 'Reputation monitoring', 'Response management', 'Rating optimization'],
    icon: '⭐'
  },
  {
    id: 'collects',
    title: 'Collects',
    description: 'Streamlined payment processing and automated collection to accelerate cash flow',
    features: ['Payment automation', 'Invoice generation', 'Collection workflows', 'Payment tracking'],
    icon: '💳'
  }
];

const AIStackSection = () => {
  const [activeLayer, setActiveLayer] = useState('answers');

  const activeLayerData = stackLayers.find(layer => layer.id === activeLayer);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Active Layer Details */}
          <div className="bg-clara-gray p-8 rounded-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">{activeLayerData?.icon}</div>
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-clara-navy">
                  {activeLayerData?.title}
                </h3>
                <div className="text-clara-gold font-semibold">Layer {stackLayers.findIndex(l => l.id === activeLayer) + 1} of 7</div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              {activeLayerData?.description}
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-clara-navy">Key Features:</h4>
              {activeLayerData?.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-clara-gold rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Visualization */}
          <div className="space-y-3">
            {stackLayers.map((layer, index) => (
              <div
                key={layer.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeLayer === layer.id
                    ? 'bg-clara-navy text-white shadow-lg scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveLayer(layer.id)}
                onMouseEnter={() => setActiveLayer(layer.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{layer.icon}</div>
                  <div className="flex-1">
                    <div className="font-montserrat font-bold text-lg">{layer.title}</div>
                    <div className="text-sm opacity-80">
                      {layer.description.substring(0, 80)}...
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    activeLayer === layer.id ? 'text-clara-gold' : 'text-gray-400'
                  }`}>
                    0{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStackSection;
