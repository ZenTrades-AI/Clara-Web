
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, CheckCircle, TrendingUp, User, MessageSquare } from 'lucide-react';

const ClaraRemindsAnimation = () => {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false);

  const steps = [
    'intro',        // 0 - Clara Reminds intro
    'calendar',     // 1 - Appointment on calendar
    'reminder',     // 2 - Sending reminder
    'phone',        // 3 - Phone receives message
    'confirm',      // 4 - Customer confirms
    'dashboard'     // 5 - Analytics dashboard
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        const nextStep = (prev + 1) % steps.length;
        
        // Reset states when starting over
        if (nextStep === 0) {
          setIsTyping(false);
          setConfirmClicked(false);
        }
        
        // Trigger typing animation for reminder step
        if (nextStep === 2) {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 2000);
        }
        
        // Reset confirm button when cycling
        if (nextStep === 4) {
          setConfirmClicked(false);
          setTimeout(() => setConfirmClicked(true), 1500);
        }
        
        return nextStep;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentStep = steps[step];

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 mb-4">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-semibold text-gray-700">
          Clara Reminds: Reduce No-shows, Boost Revenue
        </h4>
      </div>

      {/* Main Animation Area */}
      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 min-h-[320px] flex items-center justify-center">
        
        {/* Intro Scene */}
        {currentStep === 'intro' && (
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-4">📅</div>
            <p className="text-lg font-medium text-blue-600 mb-2">Clara Reminds Active</p>
            <p className="text-sm text-gray-600">Proactive appointment management...</p>
          </div>
        )}

        {/* Calendar with Appointment */}
        {currentStep === 'calendar' && (
          <div className="w-full animate-fade-in">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <p className="font-medium text-gray-700">Tomorrow's Schedule</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Alex Johnson</p>
                    <p className="text-sm text-gray-600">HVAC Maintenance</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">2:00 PM</p>
                  <p className="text-xs text-gray-500">Tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sending Reminder */}
        {currentStep === 'reminder' && (
          <div className="w-full animate-fade-in">
            <div className="text-center mb-6">
              <div className="relative">
                <MessageSquare className="w-12 h-12 text-green-500 mx-auto animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <p className="font-medium text-gray-700 mt-2">Sending Reminder</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">C</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-700">Clara AI</p>
                  <div className="mt-2 bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-800">
                      Hi Alex! Just a friendly reminder—your HVAC maintenance appointment is tomorrow at 2 PM.
                      {isTyping && <span className="animate-pulse">|</span>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phone Receives Message */}
        {currentStep === 'phone' && (
          <div className="text-center animate-fade-in">
            <div className="relative mx-auto w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
              {/* Phone screen */}
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-100 h-6 flex items-center justify-between px-3 text-xs">
                  <span>9:41</span>
                  <span>📶 📶 📶 🔋</span>
                </div>
                
                {/* Notification */}
                <div className="p-3">
                  <div className="bg-blue-500 text-white rounded-lg p-3 animate-bounce">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-500 text-xs font-bold">C</span>
                      </div>
                      <span className="font-medium text-sm">Clara AI</span>
                    </div>
                    <p className="text-sm">Hi Alex! Just a friendly reminder—your HVAC maintenance appointment is tomorrow at 2 PM.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Message received</p>
          </div>
        )}

        {/* Customer Confirms */}
        {currentStep === 'confirm' && (
          <div className="w-full animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-medium text-gray-700">Alex's Response</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-4">
                  "Hi Alex! Just a friendly reminder—your HVAC maintenance appointment is tomorrow at 2 PM."
                </p>
                
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    confirmClicked 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } ${!confirmClicked ? 'animate-pulse' : ''}`}
                >
                  {confirmClicked ? (
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Confirmed!</span>
                    </div>
                  ) : (
                    'Confirm Appointment'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Dashboard */}
        {currentStep === 'dashboard' && (
          <div className="w-full animate-fade-in">
            <div className="text-center mb-6">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <p className="font-medium text-gray-700">Business Impact</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-green-600">85%</p>
                    <p className="text-sm text-green-700">Appointment Confirmation Rate</p>
                  </div>
                  <div className="text-green-500">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                  <p className="text-lg font-bold text-blue-600">-40%</p>
                  <p className="text-xs text-blue-700">No-shows</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-200">
                  <p className="text-lg font-bold text-amber-600">+25%</p>
                  <p className="text-xs text-amber-700">Revenue</p>
                </div>
              </div>
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

export default ClaraRemindsAnimation;
