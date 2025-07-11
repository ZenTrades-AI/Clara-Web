
import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Mail, DollarSign, CheckCircle, Clock, TrendingDown, AlertCircle, CreditCard } from 'lucide-react';

const ClaraCollectsAnimation = () => {
  const [scene, setScene] = useState(0);
  const [metrics, setMetrics] = useState({ arRecovered: 0, daysReduction: 0 });
  
  const scenes = [
    'Job completed - Payment overdue 14 days',
    'Clara makes friendly voice call',
    'Multi-channel follow-up sent',
    'Clara escalates with persistence',
    'Customer pays - Process complete'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScene(prev => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Animate metrics in final scene
  useEffect(() => {
    if (scene === 4) {
      const duration = 2000;
      const startTime = Date.now();
      
      const animateMetrics = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setMetrics({
          arRecovered: Math.round(2450 * easeOut),
          daysReduction: Math.round(40 * easeOut)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animateMetrics);
        }
      };
      animateMetrics();
    } else if (scene === 0) {
      setMetrics({ arRecovered: 0, daysReduction: 0 });
    }
  }, [scene]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h4 className="font-semibold text-slate-700">Clara Collects</h4>
        <p className="text-sm text-slate-500">Automated Payment Recovery</p>
      </div>

      {/* Main Animation Area */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 min-h-[320px] relative overflow-hidden">
        
        {/* Scene 1 - Missed Payment */}
        {scene === 0 && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-semibold text-slate-800">Invoice #1045</div>
                  <div className="text-sm text-red-600">14 days overdue</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-slate-800">$485.00</div>
                <div className="text-xs text-red-500">Payment Due</div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <Clock className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600">Job completed • Payment overdue</p>
            </div>
          </div>
        )}

        {/* Scene 2 - Clara Voice Call */}
        {scene === 1 && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 border-2 border-blue-300 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            
            {/* Voice Call Animation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-800">Clara calling customer...</span>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-sm text-slate-700 italic">
                  "Hi, this is Clara calling from ABC Heating. We noticed your invoice #1045 is still unpaid. Have you had a chance to look at it?"
                </p>
              </div>
            </div>

            {/* Voice Waveform */}
            <div className="flex justify-center items-center space-x-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-blue-500 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 20 + 8}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.2s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Scene 3 - Multi-Channel Follow-up */}
        {scene === 2 && (
          <div className="animate-fade-in space-y-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <CheckCircle className="w-4 h-4" />
                Call completed - Following up
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* SMS */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">SMS Sent</span>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="text-sm text-slate-700">
                    Hi! Your invoice is ready for payment. Click here to pay securely online: 
                    <span className="text-blue-600 underline cursor-pointer"> pay.abc-heating.com</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Email Sent</span>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="text-sm text-slate-700">
                    Invoice #1045 - Easy Online Payment Available
                  </p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-xs hover:bg-blue-700 transition-colors">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-1 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                Customer has 3 days to respond
              </div>
            </div>
          </div>
        )}

        {/* Scene 4 - Escalation */}
        {scene === 3 && (
          <div className="animate-fade-in space-y-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                3 days later - Escalating
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">Clara following up...</span>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-sm text-slate-700 italic">
                  "Hi again! I wanted to check in about invoice #1045. We're here to help if you have any questions about payment."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-500 mb-1">Persistence</div>
                <div className="text-sm font-semibold text-slate-700">Friendly & Professional</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-500 mb-1">Approach</div>
                <div className="text-sm font-semibold text-slate-700">Never Aggressive</div>
              </div>
            </div>
          </div>
        )}

        {/* Scene 5 - Payment Completed */}
        {scene === 4 && (
          <div className="animate-fade-in space-y-4">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-green-700">Payment Received!</h3>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Invoice #1045 Paid</span>
                </div>
                <div className="text-green-700 font-bold">$485.00</div>
              </div>
              <div className="text-sm text-green-600">
                ✓ Payment processed successfully
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Contractor Notified</span>
              </div>
              <p className="text-sm text-blue-700">
                "Invoice paid. No human follow-up needed."
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        {scenes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === scene ? 'bg-blue-500' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Scene Description */}
      <div className="text-center">
        <p className="text-sm text-slate-600">{scenes[scene]}</p>
      </div>

      {/* Final Metrics Dashboard */}
      {scene === 4 && (
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-6 animate-fade-in">
          <h4 className="font-semibold text-slate-800 mb-4 text-center">Collection Results</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                ${metrics.arRecovered.toLocaleString()}
              </div>
              <div className="text-xs text-slate-600">AR Recovered</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <TrendingDown className="w-4 h-4 text-green-600" />
                <span className="text-2xl font-bold text-green-600">{metrics.daysReduction}%</span>
              </div>
              <div className="text-xs text-slate-600">Avg Days to Pay</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-xs text-slate-500">
              ✓ Automated recovery • ✓ Professional approach • ✓ Zero human effort
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClaraCollectsAnimation;
