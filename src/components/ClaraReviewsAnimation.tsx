
import React, { useState, useEffect } from 'react';
import { Star, Smartphone, MessageSquare, CheckCircle, TrendingUp } from 'lucide-react';

const ClaraReviewsAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fullReviewText = "Fantastic service, thank you!";

  useEffect(() => {
    const stepDurations = [2000, 1500, 2000, 1500, 2000, 3000]; // Duration for each step
    
    const timer = setTimeout(() => {
      if (currentStep < 5) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentStep(0);
          setSelectedStars(0);
          setIsTyping(false);
          setReviewText('');
          setIsSubmitted(false);
        }, 1000);
      }
    }, stepDurations[currentStep] || 2000);

    // Handle specific step animations
    if (currentStep === 2) {
      // Star selection animation
      setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
          setTimeout(() => setSelectedStars(i), i * 200);
        }
      }, 500);
    }

    if (currentStep === 3) {
      // Typing animation
      setIsTyping(true);
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullReviewText.length) {
          setReviewText(fullReviewText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 80);
      
      return () => clearInterval(typingInterval);
    }

    if (currentStep === 4) {
      setTimeout(() => setIsSubmitted(true), 300);
    }

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Clara Reviews in Action</h4>
        <div className="flex justify-center space-x-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 min-h-96">
        
        {/* Step 0-1: Notification on Phone */}
        {currentStep <= 1 && (
          <div className="p-8 text-center">
            <div className="relative mx-auto w-48 h-80 bg-gray-900 rounded-3xl p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-3xl relative overflow-hidden">
                {/* Phone Header */}
                <div className="h-6 bg-gray-50 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Notification */}
                <div className={`absolute top-16 left-4 right-4 transition-all duration-1000 ${
                  currentStep >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
                }`}>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-sm text-gray-900">Clara AI</div>
                        <div className="text-xs text-gray-600">How did we do today?</div>
                      </div>
                    </div>
                    {currentStep >= 1 && (
                      <div className="absolute -bottom-1 right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-200"></div>
                    )}
                  </div>
                </div>

                {/* Tap indicator */}
                {currentStep === 1 && (
                  <div className="absolute top-28 right-8 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2-3: Review Interface */}
        {currentStep >= 2 && currentStep <= 3 && (
          <div className="p-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rate Your Experience</h3>
                <p className="text-sm text-gray-600">We'd love your feedback!</p>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 transition-all duration-300 cursor-pointer ${
                      star <= selectedStars
                        ? 'text-yellow-400 fill-current animate-pulse'
                        : 'text-gray-300'
                    }`}
                    style={{
                      animationDelay: star <= selectedStars ? `${star * 0.1}s` : '0s'
                    }}
                  />
                ))}
              </div>

              {/* Comment Box */}
              {selectedStars >= 5 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700">
                    Tell us more (optional)
                  </label>
                  <div className="relative">
                    <textarea
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                      placeholder="Share your experience..."
                      value={reviewText}
                      readOnly
                    />
                    {isTyping && (
                      <div className="absolute bottom-3 right-3 w-1 h-4 bg-blue-500 animate-pulse"></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Submission */}
        {currentStep === 4 && (
          <div className="p-8 text-center">
            <div className="space-y-6">
              <div className={`transition-all duration-500 ${isSubmitted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Thank You!</h3>
                <p className="text-gray-600">Your review has been submitted</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Business Dashboard */}
        {currentStep === 5 && (
          <div className="p-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Business Dashboard</h3>
                <div className="flex items-center space-x-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Update</span>
                </div>
              </div>
              
              {/* New Review Alert */}
              <div className="bg-white rounded-lg p-4 border border-green-200 shadow-sm animate-fade-in">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-900">New 5-Star Review</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{fullReviewText}"</p>
                    <div className="text-xs text-gray-500 mt-2">Just now • Auto-collected by Clara AI</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">4.9</div>
                  <div className="text-xs text-gray-600">Avg Rating</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">127</div>
                  <div className="text-xs text-gray-600">Total Reviews</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step Labels */}
      <div className="text-center">
        <div className="text-sm text-gray-600">
          {currentStep === 0 && "Clara sends personalized review request"}
          {currentStep === 1 && "Customer receives friendly notification"}
          {currentStep === 2 && "Simple, engaging review interface"}
          {currentStep === 3 && "Customer shares positive experience"}
          {currentStep === 4 && "Review submitted successfully"}
          {currentStep === 5 && "Business dashboard updates instantly"}
        </div>
      </div>
    </div>
  );
};

export default ClaraReviewsAnimation;
