
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, TrendingUp, User, CheckCircle } from 'lucide-react';

const ClaraBoostsAnimation = () => {
  const [step, setStep] = useState(0);
  const [callConnected, setCallConnected] = useState(false);
  const [appointmentScheduled, setAppointmentScheduled] = useState(false);

  const steps = [
    'intro',      // 0 - Clara Boost intro
    'initiating', // 1 - Initiating call
    'ringing',    // 2 - Phone ringing
    'answered',   // 3 - Call answered
    'pitch',      // 4 - Clara's pitch
    'response',   // 5 - Customer response
    'scheduling', // 6 - Scheduling appointment
    'dashboard'   // 7 - Results dashboard
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        const nextStep = (prev + 1) % steps.length;
        
        // Reset states when starting over
        if (nextStep === 0) {
          setCallConnected(false);
          setAppointmentScheduled(false);
        }
        
        // Set call connected state
        if (nextStep === 3) {
          setCallConnected(true);
        }
        
        // Set appointment scheduled state
        if (nextStep === 6) {
          setAppointmentScheduled(true);
        }
        
        return nextStep;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const currentStep = steps[step];

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-semibold text-gray-700">
          {currentStep === 'dashboard' ? 'Sales Results Dashboard' : 'Clara Boost: Accelerating Your Sales'}
        </h4>
      </div>

      {/* Main Animation Area */}
      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 min-h-[300px] flex items-center justify-center">
        
        {/* Intro Scene */}
        {currentStep === 'intro' && (
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-4">🚀</div>
            <p className="text-lg font-medium text-blue-600 mb-2">Clara Boost Active</p>
            <p className="text-sm text-gray-600">Identifying sales opportunities...</p>
          </div>
        )}

        {/* Initiating Call */}
        {currentStep === 'initiating' && (
          <div className="text-center animate-fade-in">
            <div className="relative">
              <Phone className="w-12 h-12 text-blue-500 mx-auto animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Initiating outbound call...</p>
          </div>
        )}

        {/* Phone Ringing */}
        {currentStep === 'ringing' && (
          <div className="flex items-center justify-between w-full animate-fade-in">
            <div className="text-center">
              <div className="relative">
                <Phone className="w-16 h-16 text-blue-500 animate-bounce" />
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <p className="text-sm text-blue-600 font-medium mt-2">Clara Calling...</p>
            </div>
            
            <div className="flex-1 mx-8">
              <div className="border-t-2 border-dashed border-gray-300 relative">
                <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse -top-2"></div>
                <div className="absolute right-0 w-4 h-4 bg-gray-400 rounded-full -top-2"></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Customer</p>
            </div>
          </div>
        )}

        {/* Call Answered */}
        {(currentStep === 'answered' || currentStep === 'pitch') && (
          <div className="flex items-center justify-between w-full animate-fade-in">
            <div className="text-center">
              <div className="relative">
                <Phone className="w-16 h-16 text-green-500" />
                <CheckCircle className="w-6 h-6 text-green-500 absolute -top-1 -right-1" />
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">Connected</p>
            </div>
            
            <div className="flex-1 mx-4">
              <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-xs relative">
                <div className="absolute left-0 top-4 w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent border-r-blue-500 -ml-2"></div>
                <p className="text-sm">
                  {currentStep === 'answered' && "Hello! May I speak with the business owner?"}
                  {currentStep === 'pitch' && "Hi! I'm Clara from ABC Heating. We're offering seasonal HVAC check-ups at 30% off!"}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-sm text-green-600 mt-2">Interested</p>
            </div>
          </div>
        )}

        {/* Customer Response */}
        {currentStep === 'response' && (
          <div className="flex items-center justify-between w-full animate-fade-in">
            <div className="text-center">
              <Phone className="w-16 h-16 text-green-500" />
              <p className="text-sm text-green-600 font-medium mt-2">Clara</p>
            </div>
            
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 text-gray-800 rounded-2xl p-4 max-w-xs ml-auto relative">
                <div className="absolute right-0 top-4 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-gray-200 -mr-2"></div>
                <p className="text-sm font-medium">
                  "Sounds great! When can you come out?"
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-sm text-green-600 mt-2">Ready to Book</p>
            </div>
          </div>
        )}

        {/* Scheduling */}
        {currentStep === 'scheduling' && (
          <div className="text-center animate-fade-in">
            <div className="relative">
              <Calendar className="w-16 h-16 text-purple-500 mx-auto animate-pulse" />
              <CheckCircle className="w-6 h-6 text-green-500 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <p className="text-lg font-medium text-purple-600 mt-4">Appointment Scheduled!</p>
            <div className="bg-purple-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-purple-700">📅 Thursday, 2:00 PM</p>
              <p className="text-sm text-purple-700">💰 Value: $150</p>
            </div>
          </div>
        )}

        {/* Results Dashboard */}
        {currentStep === 'dashboard' && (
          <div className="w-full animate-fade-in">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                <div className="text-2xl font-bold text-green-600">+3</div>
                <div className="text-sm text-green-700">New Appointments</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">$450</div>
                <div className="text-sm text-blue-700">Revenue Added</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Clara Boost Impact</p>
              <p className="text-sm opacity-90">25% increase in weekly bookings</p>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === step ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClaraBoostsAnimation;
