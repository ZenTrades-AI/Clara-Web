
import { useState, useEffect } from 'react';

const channels = [
  {
    name: 'Voice',
    icon: '📞',
    description: '4-second answer time with natural conversation',
    blueShade: 'from-blue-300 to-blue-500'
  },
  {
    name: 'Chat',
    icon: '💬',
    description: 'Real-time website chat support',
    blueShade: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Email',
    icon: '📧',
    description: 'Automated email workflows and responses',
    blueShade: 'from-blue-500 to-blue-700'
  },
  {
    name: 'SMS',
    icon: '📱',
    description: 'Text message reminders and updates',
    blueShade: 'from-blue-600 to-blue-800'
  },
  {
    name: 'API',
    icon: '🔗',
    description: 'Seamless integration with existing systems',
    blueShade: 'from-blue-700 to-blue-900'
  }
];

const OmnichannelCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % channels.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-clara-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
            Omnichannel Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clara connects with your customers across all communication channels
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {channels.map((channel, index) => (
            <div
              key={channel.name}
              className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                index === activeIndex
                  ? 'scale-110 shadow-2xl'
                  : 'scale-100 shadow-lg hover:scale-105'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`bg-gradient-to-br ${channel.blueShade} p-6 rounded-2xl text-white`}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{channel.icon}</div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">{channel.name}</h3>
                  <p className="text-sm opacity-90">{channel.description}</p>
                </div>
              </div>
              
              {index === activeIndex && (
                <div className="absolute -inset-1 bg-clara-teal rounded-2xl opacity-75 animate-pulse -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {channels.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-clara-teal' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmnichannelCarousel;
