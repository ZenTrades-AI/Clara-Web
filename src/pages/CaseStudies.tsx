import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { openHubSpotForm } from '@/utils/hubspotForm';
import { Phone, Truck, MapPin, Clock, TrendingUp, Star, CreditCard, User, Zap, CheckCircle } from 'lucide-react';
import ClaraCollectsAnimation from '@/components/ClaraCollectsAnimation';
import ClaraReviewsAnimation from '@/components/ClaraReviewsAnimation';
import ClaraBoostsAnimation from '@/components/ClaraBoostsAnimation';
import ClaraRemindsAnimation from '@/components/ClaraRemindsAnimation';
import ClaraOptimizesAnimation from '@/components/ClaraOptimizesAnimation';
import ClaraDispatchesAnimation from '@/components/ClaraDispatchesAnimation';

interface CaseStudy {
  id: number;
  badge: string;
  category: string;
  title: string;
  description: string;
  stat1: string;
  stat2: string;
  color: string;
  industry: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 4,
    badge: "+29% Bookings",
    category: "HVAC | PLUMBING",
    title: "John Owens Services",
    description: "John Owens Services was missing after-hours calls and losing ready-to-book customers. Clara AI answered instantly, booked in real time, and sent post-call summaries + transcripts—turning voicemails into visits and restoring confidence across the team.",
    stat1: "$31,000 revenue",
    stat2: "30 days",
    color: "#ef4445",
    industry: "hvac"
  },
  {
    id: 5,
    badge: "Always-On Answering",
    category: "FIRE PROTECTION",
    title: "Rapid Fire Protection",
    description: "Growth had the owner juggling the office line and his cell, creating bottlenecks and missed opportunities. Clara AI now answers every inquiry, captures structured intake for inspections and maintenance, and rolls out SMS + email alerts so the team stays in the know—and on time.",
    stat1: "Structured intake & SMS alerts",
    stat2: "30 days",
    color: "#ef4445",
    industry: "electrical"
  },
  {
    id: 6,
    badge: "+225 Leads",
    category: "HVAC",
    title: "Apex Residential Solutions",
    description: "With seasonal spikes, Apex needed help filtering spam and converting real demand. In 30 days, Clara AI handled high call volume, filtered robocalls, categorized intent, and surfaced qualified opportunities—so the team could focus on customers, not call triage.",
    stat1: "835 calls handled (≈27% lead rate)",
    stat2: "30 days",
    color: "#ef4445",
    industry: "hvac"
  }
];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCaseStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  const filters = [
    { id: "all", label: "All" },
    { id: "plumbing", label: "Plumbing" },
    { id: "hvac", label: "HVAC" },
    { id: "electrical", label: "Electrical" }
  ];

  return (
    <div className="min-h-screen bg-background">
        <Navigation />
      {/* Header Section */}

      <section className="relative overflow-hidden">
        <div 
          className="px-8 py-20"
          style={{
            background: `
              radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.03) 2px, transparent 2px),
              linear-gradient(180deg, #101931 0%, hsl(220 13% 9%) 100%)
            `,
            backgroundSize: '40px 40px, 100% 100%'
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Badge 
              variant="secondary" 
              className="mb-8 px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: 'rgba(239, 68, 69, 0.1)',
                color: '#ef4445',
                border: '1px solid rgba(239, 68, 69, 0.2)'
              }}
            >
              ⭐ Customer Success Stories
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Real Results from </span>
              <span 
                className="relative"
                style={{
                  background: 'linear-gradient(135deg, #ef4445, #dc2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Real Customers
                <div 
                  className="absolute -bottom-2 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(135deg, #ef4445, #dc2626)',
                    borderRadius: '2px'
                  }}
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              See how trade businesses are transforming their operations with Clara AI's multi-agent workforce, turning every call into booked jobs and cash collected.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-6">
            <span className="text-gray-600 font-medium flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
              </svg>
              Filter by industry:
            </span>
            <div className="flex gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'text-white shadow-lg border-0'
                      : 'text-gray-700 hover:text-white bg-white border-gray-300 hover:border-[#ef4445] hover:bg-[#ef4445]'
                  }`}
                  style={activeFilter === filter.id ? {
                    backgroundColor: '#ef4445',
                    borderColor: '#ef4445'
                  } : {}}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card 
                key={study.id}
                className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge 
                        className="text-white px-4 py-2 rounded-full text-sm font-semibold"
                        style={{backgroundColor: study.color}}
                      >
                        {study.badge}
                      </Badge>
                      <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                        {study.category}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {study.description}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{study.stat1}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{study.stat2}</div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full text-white py-3 rounded-full font-semibold transition-all duration-300 group-hover:shadow-lg"
                      style={{backgroundColor: '#ef4445'}}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.backgroundColor = '#dc2626';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = '#ef4445';
                      }}
                    >
                      Read Full Case Study →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       {/* CTA Section */}
       <section className="py-20 bg-clara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let Clara handle your calls while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
              Book a 15-min Demo
            </Button>
            <Button 
              className="bg-white text-clara-red hover:bg-white hover:text-clara-red border border-white px-8 py-3 text-lg"
              onClick={openHubSpotForm}
            >
              Try Clara Live
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;