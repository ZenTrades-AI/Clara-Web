import { useEffect, useRef, useState } from 'react';

const stackLayers = [
  { id: 'answers', title: 'Answers', icon: '📞' },
  { id: 'dispatches', title: 'Dispatches', icon: '🚐' },
  { id: 'routing', title: 'Routing', icon: '⚡' },
  { id: 'reminds', title: 'Reminders', icon: '🔔' },
  { id: 'engages', title: 'Engages', icon: '💬' },
  { id: 'reviews', title: 'Reviews', icon: '⭐' },
  { id: 'collects', title: 'Collections', icon: '💳' }
];

const OrbitalAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const orbitRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.3); // Smooth rotation
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const radius = 120; // px
  const center = 150; // px (half of container width/height)

  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative w-[300px] h-[300px]">
        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-clara-navy to-clara-purple rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md -translate-x-1/2 -translate-y-1/2 z-10">
          Clara AI<br />Core
        </div>

        {/* Orbiting Icons */}
        {stackLayers.map((layer, i) => {
          const angle = ((360 / stackLayers.length) * i + rotation) % 360;
          const rad = (angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad) - 20;
          const y = center + radius * Math.sin(rad) - 20;

          return (
            <div
              key={layer.id}
              className="absolute w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-xl transition-transform duration-300"
              style={{ top: y, left: x }}
            >
              <span title={layer.title}>{layer.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitalAnimation;
