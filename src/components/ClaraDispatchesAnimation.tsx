
import React, { useState, useEffect } from 'react';
import { Phone, User, MapPin, Clock, CheckCircle, Smartphone, AlertTriangle, Zap, TrendingUp, Users, Timer } from 'lucide-react';

const ClaraDispatchesAnimation = () => {
  const [step, setStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Sample technician data
  const technicians = [
    { 
      id: 1, 
      name: 'Mike S.', 
      skill: 'Plumbing', 
      rating: 4.9, 
      location: '2.3 mi away', 
      available: true,
      avatar: '👨‍🔧'
    },
    { 
      id: 2, 
      name: 'Sarah J.', 
      skill: 'HVAC', 
      rating: 4.7, 
      location: '4.1 mi away', 
      available: false,
      avatar: '👩‍🔧'
    },
    { 
      id: 3, 
      name: 'Tom R.', 
      skill: 'Electrical', 
      rating: 4.8, 
      location: '3.7 mi away', 
      available: true,
      avatar: '👨‍💼'
    }
  ];

  const bestMatch = technicians[0]; // Mike S. is the best match

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev === 1) {
          setIsAnalyzing(true);
          setTimeout(() => setIsAnalyzing(false), 1500);
        }
        return (prev + 1) % 6;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-gray-700">Clara Dispatches</h4>
        </div>
        <p className="text-sm text-gray-600">Right Tech, Right Job, Every Time</p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        
        {/* Step 0: Incoming Request */}
        {step === 0 && (
          <div className="p-6 animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-100 rounded-full animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-800 mb-1">Urgent Service Request</h5>
                <p className="text-sm text-gray-600 mb-2">Plumbing issue reported</p>
                <div className="text-xs text-gray-500">
                  <div>📍 123 Oak Street, Downtown</div>
                  <div>⏰ Just now</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Clara Analyzing */}
        {step === 1 && (
          <div className="p-6 animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                <Zap className={`w-4 h-4 text-blue-600 ${isAnalyzing ? 'animate-pulse' : ''}`} />
                <span className="text-sm font-medium text-blue-800">
                  {isAnalyzing ? 'Clara Analyzing...' : 'Analysis Complete'}
                </span>
              </div>
              
              {isAnalyzing && (
                <div className="space-y-2 text-sm text-gray-600">
                  <div>🔍 Analyzing job requirements</div>
                  <div>👥 Checking technician availability</div>
                  <div>📍 Calculating optimal routing</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Technician Selection */}
        {step === 2 && (
          <div className="p-6 animate-fade-in">
            <h5 className="font-semibold text-gray-800 mb-3">Available Technicians</h5>
            <div className="space-y-2">
              {technicians.map((tech) => (
                <div
                  key={tech.id}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    tech.id === bestMatch.id
                      ? 'border-green-500 bg-green-50 ring-2 ring-green-200'
                      : tech.available
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 bg-gray-100 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tech.avatar}</span>
                      <div>
                        <div className="font-medium text-sm">{tech.name}</div>
                        <div className="text-xs text-gray-600">{tech.skill} • ⭐ {tech.rating}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-600">{tech.location}</div>
                      <div className={`text-xs font-medium ${
                        tech.available ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {tech.available ? 'Available' : 'Busy'}
                      </div>
                    </div>
                  </div>
                  {tech.id === bestMatch.id && (
                    <div className="mt-2 text-xs text-green-700 font-medium">
                      ✅ Best Match Selected
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Dispatch Notification */}
        {step === 3 && (
          <div className="p-6 animate-fade-in">
            <div className="text-center mb-4">
              <Smartphone className="w-12 h-12 mx-auto text-blue-600 mb-2 animate-bounce" />
              <h5 className="font-semibold text-gray-800">Dispatching to {bestMatch.name}</h5>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type:</span>
                  <span className="font-medium">Plumbing Emergency</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">123 Oak Street</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Priority:</span>
                  <span className="font-medium text-red-600">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ETA:</span>
                  <span className="font-medium">15 minutes</span>
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <div className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs animate-pulse">
                  <CheckCircle className="w-3 h-3" />
                  Job Accepted
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Customer Confirmation */}
        {step === 4 && (
          <div className="p-6 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Customer Notified</h5>
              
              <div className="bg-blue-50 rounded-lg p-4 text-left">
                <div className="text-sm text-blue-800">
                  <strong>Good news!</strong> Your technician is on the way!
                </div>
                <div className="text-xs text-blue-600 mt-2">
                  📱 Mike S. • ⭐ 4.9 rating<br/>
                  🚗 ETA: 15 minutes<br/>
                  📞 Call: (555) 123-4567
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Performance Metrics */}
        {step === 5 && (
          <div className="p-6 animate-fade-in">
            <div className="text-center mb-4">
              <TrendingUp className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <h5 className="font-semibold text-gray-800">Performance Impact</h5>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-800">Dispatch Time</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">-40%</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-800">Tech Utilization</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">+20%</span>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-purple-800">Response Time</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">+50%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i <= step ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClaraDispatchesAnimation;
