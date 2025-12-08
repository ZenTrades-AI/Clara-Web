
import { LucideIcon } from "lucide-react";

interface Segment {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  number: string;
}

interface EngineSegmentProps {
  segment: Segment;
  isActive: boolean;
}

export const EngineSegment = ({ segment, isActive }: EngineSegmentProps) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'animate-fade-in' : ''}`}>
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700/40 shadow-2xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="relative mr-6">
            <div className={`p-5 rounded-2xl bg-gradient-to-br ${segment.color} shadow-xl`}>
              <segment.icon size={36} className="text-white" />
            </div>
            {/* Step Number Badge */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
              {segment.number}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{segment.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{segment.description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-5">
          <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <div className="w-1 h-6 bg-red-500 rounded-full mr-3" />
            Key Features
          </h4>
          {segment.features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-2 flex-shrink-0 group-hover:bg-red-400 transition-colors shadow-sm" />
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-8 p-5 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-semibold">AI Engine Status</span>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
              <span className="text-green-400 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
