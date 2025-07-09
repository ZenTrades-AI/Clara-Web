
import React, { useState, useEffect } from 'react';
import { CreditCard, DollarSign, FileText, CheckCircle, Clock, TrendingUp, AlertCircle } from 'lucide-react';

const ClaraCollectsAnimation = () => {
  const [step, setStep] = useState(0);
  const [cashFlowValue, setCashFlowValue] = useState(0);
  
  const invoices = [
    { id: 1, amount: 450, status: 'pending', customer: 'Smith Home', daysOverdue: 0 },
    { id: 2, amount: 325, status: 'overdue', customer: 'Johnson LLC', daysOverdue: 15 },
    { id: 3, amount: 680, status: 'pending', customer: 'Wilson Corp', daysOverdue: 7 },
    { id: 4, amount: 295, status: 'paid', customer: 'Davis Inc', daysOverdue: 0 }
  ];

  const steps = [
    'Job completed - Auto invoice sent',
    'Payment reminder sequence active',
    'Customer pays via automated link',
    'Payment processed & recorded',
    'Cash flow updated in real-time'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animate cash flow improvement
  useEffect(() => {
    if (step === 4) {
      const targetValue = 1750;
      const duration = 1500;
      const startTime = Date.now();
      const startValue = cashFlowValue;
      
      const animateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (targetValue - startValue) * easeOutCubic;
        setCashFlowValue(Math.round(currentValue));
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      animateValue();
    } else if (step === 0) {
      setCashFlowValue(0);
    }
  }, [step]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h4 className="font-semibold text-gray-700">Automated Payment Processing</h4>
      </div>

      {/* Main Dashboard */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
        {/* Header with Clara Processing Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${step >= 0 ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
            <span className="text-sm font-medium">Clara Processing</span>
          </div>
          <div className="text-xs text-gray-500">
            {steps[step]}
          </div>
        </div>

        {/* Invoice List */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-600 mb-2">Outstanding Invoices</div>
          {invoices.map((invoice, index) => (
            <div
              key={invoice.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-500 ${
                invoice.status === 'paid' || (step >= 3 && index === 0)
                  ? 'bg-green-50 border-green-200'
                  : invoice.status === 'overdue'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  invoice.status === 'paid' || (step >= 3 && index === 0)
                    ? 'bg-green-500'
                    : invoice.status === 'overdue'
                    ? 'bg-red-500'
                    : 'bg-yellow-500'
                }`}></div>
                <div>
                  <div className="text-sm font-medium">{invoice.customer}</div>
                  <div className="text-xs text-gray-500">
                    {invoice.status === 'paid' || (step >= 3 && index === 0) ? 'Paid' : 
                     invoice.daysOverdue > 0 ? `${invoice.daysOverdue} days overdue` : 'Due soon'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">${invoice.amount}</span>
                {invoice.status === 'paid' || (step >= 3 && index === 0) ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : invoice.status === 'overdue' ? (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                ) : (
                  <Clock className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Automated Actions Timeline */}
        {step >= 1 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-800">Clara Actions</span>
            </div>
            <div className="space-y-1 text-xs text-blue-600">
              {step >= 1 && <div>✓ Reminder email sent to Smith Home</div>}
              {step >= 2 && <div>✓ SMS payment link delivered</div>}
              {step >= 3 && <div>✓ Payment received & verified</div>}
              {step >= 4 && <div>✓ Cash flow updated automatically</div>}
            </div>
          </div>
        )}
      </div>

      {/* Cash Flow Visualization */}
      <div className="grid grid-cols-2 gap-4">
        {/* Before Clara */}
        <div className={`p-4 rounded-lg border transition-all duration-500 ${
          step < 4 ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="text-center">
            <div className="text-xs font-medium text-gray-600 mb-2">Before Clara</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Avg Collection Time</span>
                <span className="font-semibold text-red-600">45 days</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Manual Follow-ups</span>
                <span className="font-semibold text-red-600">8 hrs/week</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Late Payments</span>
                <span className="font-semibold text-red-600">35%</span>
              </div>
            </div>
          </div>
        </div>

        {/* After Clara */}
        <div className={`p-4 rounded-lg border transition-all duration-500 ${
          step >= 4 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="text-center">
            <div className="text-xs font-medium text-gray-600 mb-2">With Clara</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Avg Collection Time</span>
                <span className="font-semibold text-green-600">18 days</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Automated Process</span>
                <span className="font-semibold text-green-600">24/7</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Late Payments</span>
                <span className="font-semibold text-green-600">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Flow Impact */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800">Cash Flow Improvement</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              +${cashFlowValue.toLocaleString()}
            </div>
            <div className="text-xs text-green-600">This month</div>
          </div>
        </div>
        {step >= 4 && (
          <div className="mt-2 text-xs text-green-700 animate-fade-in">
            ✓ 60% faster payments • ✓ Reduced admin time • ✓ Improved cash flow
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaraCollectsAnimation;
