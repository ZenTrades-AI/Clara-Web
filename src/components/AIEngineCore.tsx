
import { useState, useEffect } from "react";
import { Phone, Calendar, DollarSign } from "lucide-react";

interface AIEngineCoreProps {
  activeSegment: number;
  onSegmentClick: (index: number) => void;
}

export const AIEngineCore = ({ activeSegment, onSegmentClick }: AIEngineCoreProps) => {
  const [pulseAnimation, setPulseAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const segments = [
    { icon: Phone, angle: 0, color: "#FF4F5A", label: "Capture" },
    { icon: Calendar, angle: 120, color: "#4F9CF9", label: "Convert" },
    { icon: DollarSign, angle: 240, color: "#10B981", label: "Collect" }
  ];

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-gray-700/30">
        <div 
          className="absolute inset-0 rounded-full border-2 border-red-500/50"
          style={{
            transform: `rotate(${pulseAnimation}deg)`,
            background: `conic-gradient(from 0deg, transparent, #FF4F5A20, transparent)`
          }}
        />
      </div>

      {/* Middle Ring */}
      <div className="absolute inset-4 rounded-full border border-gray-600/20">
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            transform: `rotate(${-pulseAnimation * 0.7}deg)`,
            background: `conic-gradient(from 0deg, transparent, #4F9CF920, transparent, #10B98120, transparent)`
          }}
        />
      </div>

      {/* Connection Lines to Center */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {segments.map((segment, index) => {
          const isActive = activeSegment === index;
          const x1 = Math.cos((segment.angle - 90) * Math.PI / 180) * 140 + 160; // segment position
          const y1 = Math.sin((segment.angle - 90) * Math.PI / 180) * 140 + 160;
          const x2 = 160; // center position
          const y2 = 160;
          
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isActive ? "#FF4F5A" : "#4B5563"}
              strokeWidth="2"
              strokeDasharray="5,5"
              className="transition-all duration-500"
              opacity={isActive ? "1" : "0.3"}
            />
          );
        })}
      </svg>

      {/* Central Core */}
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/30 flex items-center justify-center shadow-2xl">
        <div className="text-center">
          <div className="text-red-400 font-bold text-lg mb-1">Clara AI</div>
          <div className="text-gray-400 text-sm">Growth Engine</div>
          <div className="w-12 h-12 mx-auto mt-2 rounded-full bg-red-500/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-red-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Segment Nodes */}
      {segments.map((segment, index) => {
        const isActive = activeSegment === index;
        const x = Math.cos((segment.angle - 90) * Math.PI / 180) * 140;
        const y = Math.sin((segment.angle - 90) * Math.PI / 180) * 140;
        
        return (
          <div
            key={index}
            className={`absolute w-16 h-16 cursor-pointer transition-all duration-500 ${
              isActive ? 'transform scale-125' : 'hover:scale-110'
            }`}
            style={{
              left: `calc(50% + ${x}px - 32px)`,
              top: `calc(50% + ${y}px - 32px)`,
            }}
            onClick={() => onSegmentClick(index)}
          >
            <div 
              className={`w-full h-full rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-500 ${
                isActive 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-red-500 shadow-red-500/50' 
                  : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 hover:border-gray-500'
              }`}
            >
              <segment.icon 
                size={24} 
                className={`transition-colors duration-300 ${
                  isActive ? 'text-red-400' : 'text-gray-400 hover:text-white'
                }`} 
              />
            </div>
            
            {/* Label */}
            <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium transition-colors duration-300 ${
              isActive ? 'text-red-400' : 'text-gray-500'
            }`}>
              {segment.label}
            </div>
          </div>
        );
      })}

      {/* Pulse Effect */}
      <div 
        className="absolute inset-8 rounded-full border border-red-500/20 animate-ping"
        style={{ animationDuration: '3s' }}
      />
    </div>
  );
};
