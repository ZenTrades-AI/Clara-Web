
import React, { useState, useEffect } from 'react';
import { MapPin, Truck, Clock, DollarSign, TrendingUp, Users, Zap } from 'lucide-react';

const ClaraOptimizesAnimation = () => {
  const [step, setStep] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Service appointments data
  const appointments = [
    { id: 1, x: 15, y: 25, customer: 'Home A', time: '9:00 AM' },
    { id: 2, x: 75, y: 30, customer: 'Office B', time: '10:30 AM' },
    { id: 3, x: 25, y: 65, customer: 'Store C', time: '12:00 PM' },
    { id: 4, x: 80, y: 75, customer: 'House D', time: '2:00 PM' },
    { id: 5, x: 45, y: 40, customer: 'Apt E', time: '4:00 PM' }
  ];

  // Inefficient route order (before optimization)
  const inefficientRoute = [0, 1, 2, 3, 4];
  
  // Optimized route order (after Clara's optimization)
  const optimizedRoute = [0, 4, 2, 1, 3];

  const currentRoute = step >= 2 ? optimizedRoute : inefficientRoute;

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev === 1) {
          setIsOptimizing(true);
          setTimeout(() => setIsOptimizing(false), 1500);
        }
        return (prev + 1) % 4;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getRouteColor = () => {
    if (step >= 2) return '#10b981'; // Green for optimized
    return '#ef4444'; // Red for inefficient
  };

  const getRouteDashArray = () => {
    if (step >= 2) return '0'; // Solid line for optimized
    return '8,4'; // Dashed line for inefficient
  };

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-violet-500">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-gray-700">Clara Optimizes</h4>
        </div>
        <p className="text-sm text-gray-600">Smart Route & Dispatch Optimization</p>
      </div>

      {/* Map Container */}
      <div className="relative bg-gray-50 rounded-xl h-64 overflow-hidden border border-gray-200">
        {/* Map Grid Background */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-gray-300" style={{ top: `${(i + 1) * 16.67}%` }} />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-gray-300" style={{ left: `${(i + 1) * 16.67}%` }} />
          ))}
        </div>

        {/* City Elements */}
        <div className="absolute top-2 left-2 text-xs text-gray-500 font-medium">Service Area Map</div>
        
        {/* Clara Optimization Indicator */}
        {isOptimizing && (
          <div className="absolute top-2 right-2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 animate-pulse">
            <Zap className="w-3 h-3" />
            Clara Optimizing...
          </div>
        )}

        {/* Appointment Pins */}
        {appointments.map((apt, index) => (
          <div
            key={apt.id}
            className={`absolute w-6 h-6 transform -translate-x-3 -translate-y-3 transition-all duration-500 ${
              step >= 1 && currentRoute.indexOf(index) === 0 ? 'z-20' : 'z-10'
            }`}
            style={{ left: `${apt.x}%`, top: `${apt.y}%` }}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${
              step >= 2 ? 'bg-green-500' : 'bg-blue-500'
            } ${isOptimizing ? 'animate-pulse' : ''}`}>
              {currentRoute.indexOf(index) + 1}
            </div>
            <div className="absolute top-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs font-medium whitespace-nowrap">
              {apt.customer}
            </div>
          </div>
        ))}

        {/* Route Lines */}
        {step >= 1 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {currentRoute.map((aptIndex, routeIndex) => {
              if (routeIndex === currentRoute.length - 1) return null;
              const currentApt = appointments[aptIndex];
              const nextApt = appointments[currentRoute[routeIndex + 1]];
              
              return (
                <line
                  key={`${aptIndex}-${routeIndex}`}
                  x1={`${currentApt.x}%`}
                  y1={`${currentApt.y}%`}
                  x2={`${nextApt.x}%`}
                  y2={`${nextApt.y}%`}
                  stroke={getRouteColor()}
                  strokeWidth="3"
                  strokeDasharray={getRouteDashArray()}
                  className={`transition-all duration-1000 ${isOptimizing ? 'animate-pulse' : ''}`}
                />
              );
            })}
          </svg>
        )}

        {/* Truck Icon */}
        {step >= 1 && (
          <div
            className="absolute w-8 h-8 transform -translate-x-4 -translate-y-4 transition-all duration-1000 z-30"
            style={{ 
              left: `${appointments[currentRoute[0]].x}%`, 
              top: `${appointments[currentRoute[0]].y}%` 
            }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-green-500' : 'bg-blue-500'
            } shadow-lg`}>
              <Truck className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Metrics Comparison */}
      {step >= 2 && (
        <div className="grid grid-cols-2 gap-4 animate-fade-in">
          {/* Before */}
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h5 className="text-sm font-semibold text-red-700 mb-2">Before Clara</h5>
            <div className="space-y-2 text-xs text-red-600">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                8.5 hours driving
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                $145 fuel cost
              </div>
              <div>4 jobs completed</div>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h5 className="text-sm font-semibold text-green-700 mb-2">After Clara</h5>
            <div className="space-y-2 text-xs text-green-600">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                6.2 hours driving
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                $105 fuel cost
              </div>
              <div>5 jobs completed</div>
            </div>
          </div>
        </div>
      )}

      {/* Performance Dashboard */}
      {step >= 3 && (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200 animate-fade-in">
          <h5 className="text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Performance Impact
          </h5>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">+25%</div>
              <div className="text-xs text-gray-600">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">+15%</div>
              <div className="text-xs text-gray-600">Fuel Savings</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">+30%</div>
              <div className="text-xs text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      )}

      {/* Status Indicator */}
      <div className="flex justify-center space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i <= step ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClaraOptimizesAnimation;
