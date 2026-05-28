import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { openHubSpotForm } from '@/utils/hubspotForm';
import ClaraCollectsAnimation from '@/components/ClaraCollectsAnimation';
import ClaraReviewsAnimation from '@/components/ClaraReviewsAnimation';
import ClaraBoostsAnimation from '@/components/ClaraBoostsAnimation';
import ClaraRemindsAnimation from '@/components/ClaraRemindsAnimation';
import ClaraOptimizesAnimation from '@/components/ClaraOptimizesAnimation';
import ClaraDispatchesAnimation from '@/components/ClaraDispatchesAnimation';
import { 
    
  ArrowRight, 
  Calendar, 
  TrendingUp, 
  Phone, 
  Target,
  Building2, 
  MapPin, 
  Users, 
  AlertTriangle,
  FileText,
  CheckCircle,
  Clock,
  Quote,
  Settings,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

// Custom hook for scroll animations
const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { elementRef, isVisible };
};

// Animated Counter Component
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = easeOutCubic * end;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  const formattedValue = decimals > 0 
    ? count.toFixed(decimals).replace(/\.?0+$/, '')
    : Math.round(count).toLocaleString();

  return (
    <span ref={counterRef}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};

export default function RapidFireCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);

  const solutionSteps = [
    {
      title: "24/7 Call Answering",
      description: "No missed calls during peak season or after-hours.",
      icon: Phone
    },
    {
      title: "Fire Safety Expertise", 
      description: "Understands inspection schedules, compliance needs, and service types.",
      icon: Settings
    },
    {
      title: "Intelligent Routing",
      description: "Escalates emergencies, books routine inspections, captures details.", 
      icon: Target
    },
    {
      title: "Complete Documentation",
      description: "Detailed call summaries for compliance and follow-up tracking.",
      icon: FileText
    }
  ];

  const weeklyData = [
    {
      week: 1,
      title: "Immediate Relief",
      content: [
        "Owner no longer tied to phone during site visits",
        "Emergency calls properly triaged and escalated", 
        "Basic scheduling for routine inspections began"
      ]
    },
    {
      week: 2, 
      title: "Process Refinement",
      content: [
        "Clara learned specific fire safety terminology",
        "Compliance documentation standardized",
        "Customer satisfaction improved with faster response"
      ]
    },
    {
      week: 3,
      title: "Operational Efficiency", 
      content: [
        "Reduced context switching for owner",
        "Better lead qualification for new customers",
        "Streamlined booking for recurring services"
      ]
    },
    {
      week: 4,
      title: "Scale & Growth",
      content: [
        "Capacity to handle growth without additional staff",
        "Consistent customer experience across all interactions", 
        "Owner time freed for business development"
      ]
    }
  ];

  const challenges = [
    "Single-Threaded Intake: One person fielding most calls led to delays and bottlenecks.",
    "After-Hours Risk: Missed calls could mean lost inspection contracts or delayed compliance service.",
    "Unstructured Notes: Caller details in voicemails or ad-hoc texts made dispatch harder.",
    "Context Switching Tax: Owner time pulled away from operations, estimates, and vendor management."
  ];

  return (

    <div className="min-h-screen bg-white">
      <Helmet>
      <title>Rapid Fire Protection Case Study | Always-On AI Call Answering for Fire Safety Services</title>
      <meta name="description" content="Rapid Fire Protection used Clara AI to capture every call, reduce voicemail reliance, and streamline inspections & maintenance scheduling. Learn how AI-driven intake improved compliance and customer experience." />
    </Helmet>
        <Navigation />
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/case-studies" className="hover:text-red-500 transition-colors">← Case Studies</Link>
              <span>/</span>
              <span className="text-gray-900">Rapid Fire Protection</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 text-sm text-red-700 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>Customer Success Story</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Rapid Fire Protection
            </h1>
            
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              From Phone Bottlenecks to Always-On Assistance: Rapid Fire Protection partnered with Clara AI to ensure every customer inquiry is captured and routed without overloading their lean team.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 inline-block mb-8 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={100} duration={2500} suffix="%" />
                </div>
                <p className="text-gray-600">Call Capture Rate</p>
              </div>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
            <Button 
              className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
              Book a 15-min Demo
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Executive Summary
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Rapid Fire Protection partnered with Clara AI to ensure every customer inquiry is captured and routed—without overloading a lean team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: 100, suffix: "%", label: "Call Capture", icon: Phone, color: "bg-red-50 text-red-600" },
              { value: 95, suffix: "%", label: "Complete Intake", icon: CheckCircle, color: "bg-green-50 text-green-600" },
              { value: 85, suffix: "%", label: "After-Hours Coverage", icon: Clock, color: "bg-blue-50 text-blue-600" },
              { value: 2, suffix: " min", label: "Response Time", icon: TrendingUp, color: "bg-purple-50 text-purple-600" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{animationDelay: `${0.1 + index * 0.1}s`}}
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.color.split(' ')[0]} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className={`w-6 h-6 ${stat.color.split(' ')[1]}`} />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter 
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <blockquote className="text-lg text-center text-gray-800 italic mb-4">
              "We're a small company, and the growth has been excellent. The office line was also my cell line, and we got to a point where I was fielding so many calls that I wasn't getting the other aspects of my job done."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Joshua</p>
              <p className="text-gray-600">Owner, Rapid Fire Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background & Business Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Client Background */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Client Background
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Industry</h3>
                    <p className="text-gray-600 text-sm">
                      16+ years providing inspections and maintenance for life-safety systems including fire extinguishers, kitchen suppression, and emergency lighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">
                      Based in USA, serving customers with growing demand across their service areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Scale</h3>
                    <p className="text-gray-600 text-sm">
                      Small, growing company with the owner handling most customer interactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="font-semibold text-gray-900 mb-4">What They Needed</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Free owner from phone to focus on operations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Handle emergencies and routine inspections</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Maintain compliance documentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Scale without adding headcount</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Challenges */}
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Business Challenges
              </h2>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-md"
                    style={{animationDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Clara AI Solution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              The Clara AI Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              A specialized AI system designed for fire protection services, ensuring compliance, safety, and operational efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col items-center space-y-16 animate-slide-in-left">
              {solutionSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center space-x-6 cursor-pointer transition-all duration-500 hover:transform hover:translate-x-2 w-full max-w-md ${
                      activeStep === index ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-90'
                    }`}
                    onClick={() => setActiveStep(index)}
                    style={{animationDelay: `${0.1 + index * 0.1}s`}}
                  >
                    {index < solutionSteps.length - 1 && (
                      <div 
                        className={`absolute w-0.5 h-16 transition-all duration-700 ${
                          activeStep >= index ? 'bg-red-500' : 'bg-gray-200'
                        }`}
                        style={{
                          left: '48px',
                          top: '64px', 
                          transform: `translateX(-50%) scaleY(${activeStep >= index ? 1 : 0})`,
                          transformOrigin: 'top center'
                        }}
                      ></div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 transform ${
                      activeStep === index
                        ? 'bg-red-500 text-white scale-110 shadow-lg shadow-red-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm animate-slide-in-right transition-all duration-500 hover:shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center transition-all duration-300">
                  {(() => {
                    const IconComponent = solutionSteps[activeStep].icon;
                    return <IconComponent className="w-6 h-6 text-red-600" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 transition-all duration-300">
                    {solutionSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-600">Step {activeStep + 1} of {solutionSteps.length}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 transition-all duration-300">
                {solutionSteps[activeStep].description}
              </p>

              <div className="flex space-x-2">
                {solutionSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      activeStep === index ? 'bg-red-500 shadow-md' : 'bg-gray-300 hover:bg-red-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Rollout Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              4-Week Rollout Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Track the progressive implementation and optimization of Clara AI over the critical first month.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-red-200 animate-scale-in" style={{animationDelay: '0.2s'}}></div>

            <div className="space-y-12">
              {weeklyData.map((week, index) => (
                <div 
                  key={week.week} 
                  className={`relative animate-fade-in`}
                  style={{animationDelay: `${0.3 + index * 0.2}s`}}
                >
                  <div className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-red-200">
                            <span className="text-red-600 font-bold text-sm">{week.week}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">Week {week.week}</h3>
                            <p className="text-sm text-gray-600">{week.title}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {week.content.map((item, itemIndex) => (
                            <li 
                              key={itemIndex} 
                              className="flex items-start space-x-2 animate-fade-in"
                              style={{animationDelay: `${0.4 + index * 0.2 + itemIndex * 0.1}s`}}
                            >
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-sm z-10 animate-scale-in" style={{animationDelay: `${0.3 + index * 0.2}s`}}></div>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              The Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Measurable results that transformed their operational efficiency and customer service capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: 100, suffix: "%", label: "Call Capture Rate", icon: Phone, color: "bg-red-50 text-red-600" },
              { value: 95, suffix: "%", label: "Time Savings", icon: Clock, color: "bg-green-50 text-green-600" },
              { value: 85, suffix: "%", label: "Lead Conversion", icon: TrendingUp, color: "bg-blue-50 text-blue-600" },
              { value: 120, suffix: " sec", label: "Response Time", icon: Zap, color: "bg-purple-50 text-purple-600" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.color.split(' ')[0]} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className={`w-6 h-6 ${stat.color.split(' ')[1]}`} />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter 
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Before & After Clara AI Implementation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 animate-slide-in-left transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-6">Before</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <p className="text-red-700 font-semibold text-2xl mb-2">90%</p>
                  <p className="text-red-700 text-sm">Missed calls during busy periods</p>
                </div>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li className="animate-fade-in" style={{animationDelay: '0.3s'}}>• Owner constantly interrupted by phone calls</li>
                  <li className="animate-fade-in" style={{animationDelay: '0.4s'}}>• Emergency calls mixed with routine inquiries</li>
                  <li className="animate-fade-in" style={{animationDelay: '0.5s'}}>• No standardized call documentation</li>
                  <li className="animate-fade-in" style={{animationDelay: '0.6s'}}>• Limited capacity for business growth</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 animate-slide-in-right transition-all duration-300 hover:shadow-lg" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold text-green-800 mb-6">After</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <p className="text-green-700 font-semibold text-2xl mb-2">95%</p>
                  <p className="text-green-700 text-sm">Call capture and proper routing</p>
                </div>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li className="animate-fade-in" style={{animationDelay: '0.4s'}}>• 24/7 professional call answering</li>
                  <li className="animate-fade-in" style={{animationDelay: '0.5s'}}>• Intelligent emergency triage system</li>
                  <li className="animate-fade-in" style={{animationDelay: '0.6s'}}>• Complete call documentation and tracking</li>
                  <li className="animate-fade-in" style={{animationDelay: '0.7s'}}>• Scalable operations without additional staff</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Results
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Eliminated single-point-of-failure in call handling",
              "Improved dispatch accuracy through structured data capture", 
              "Enhanced compliance documentation and audit trails",
              "Standardized intake process across all service types",
              "Reduced owner context switching and operational interruptions"
            ].map((result, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-red-600" />
            </div>

            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
              "We're a small company, and the growth has been excellent. The office line was also my cell line, and we got to a point where I was fielding so many calls that I wasn't getting the other aspects of my job done."
            </blockquote>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm inline-block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-red-600">J</span>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">Joshua</h4>
                  <p className="text-gray-600">Owner</p>
                  <p className="text-red-600 font-semibold">Rapid Fire Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 text-sm text-red-700 mb-6">
              <Zap className="w-4 h-4" />
              <span>Ready to Transform Your Business?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Capture More Revenue
              <span className="block text-red-500">with Clara AI</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses already using Clara AI to transform their customer service and unlock hidden revenue potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
              Book a 15-min Demo
            </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">$31K+</div>
                <p className="text-gray-600 text-sm">Average monthly revenue increase</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">29%</div>
                <p className="text-gray-600 text-sm">Average conversion lift</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">24/7</div>
                <p className="text-gray-600 text-sm">Always-on customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}