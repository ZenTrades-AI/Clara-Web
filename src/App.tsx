import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

const Index = React.lazy(() => import('./pages/Index'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ClaraAnswers = React.lazy(() => import('./pages/ClaraAnswers'));
const ClaraDispatch = React.lazy(() => import('./pages/ClaraDispatch'));
const ClaraReminds = React.lazy(() => import('./pages/ClaraReminds'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Integrations = React.lazy(() => import('./pages/Integrations'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail = React.lazy(() => import('./pages/CaseStudyDetail'));
const JohnOwensCaseStudy = React.lazy(() => import('./pages/JohnOwensCaseStudy'));
const IntegrationDetail = React.lazy(() => import('./pages/IntegrationDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Security = React.lazy(() => import('./pages/Security'));
const UserLicenseAgreement = React.lazy(() => import('./pages/UserLicenseAgreement'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const ClaraCollects = React.lazy(() => import('./pages/ClaraCollects'));
const ClaraCollectsNew = React.lazy(() => import('./pages/ClaraCollectsNew'));
const FieldCopilot = React.lazy(() => import('./pages/FieldCopilot'));
const RoofCon = React.lazy(() => import('./pages/RoofCon'));
const RoofingOperations = React.lazy(() => import('./pages/RoofingOperations'));
const RoofingStaffShortage = React.lazy(() => import('./pages/RoofingStaffShortage'));
const FireProtectionCost = React.lazy(() => import('./pages/FireProtectionCost'));
const ElectricalNewToAI = React.lazy(() => import('./pages/ElectricalNewToAI'));
const HVACGrowth = React.lazy(() => import('./pages/HVACGrowth'));
const PlumbingStaffShortage = React.lazy(() => import('./pages/PlumbingStaffShortage'));
const HVACAnswers = React.lazy(() => import('./pages/HVACAnswers'));
const PlumbingAnswers = React.lazy(() => import('./pages/PlumbingAnswers'));
const FireProtectionAnswers = React.lazy(() => import('./pages/FireProtectionAnswers'));
const HVACAfterHours = React.lazy(() => import('./pages/HVACAfterHours'));
const RoofingAnswers = React.lazy(() => import('./pages/RoofingAnswers'));
const ElectricalCost = React.lazy(() => import('./pages/ElectricalCost'));
const FireProtectionCollectsCost = React.lazy(() => import('./pages/FireProtectionCollectsCost'));
const HVACCollectsCost = React.lazy(() => import('./pages/HVACCollectsCost'));
const PlumbingCollectsNewToAI = React.lazy(() => import('./pages/PlumbingCollectsNewToAI'));
const FireProtectionCollectsGrowth = React.lazy(() => import('./pages/FireProtectionCollectsGrowth'));
const ElectricalCollectsStaffShortage = React.lazy(() => import('./pages/ElectricalCollectsStaffShortage'));
const RoofingCollectsGrowth = React.lazy(() => import('./pages/RoofingCollectsGrowth'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const DemoPage = React.lazy(() => import('./pages/DemoPage'));
const FireProtectionIndustry = React.lazy(() => import('./pages/FireProtectionIndustry'));
const HVACIndustry = React.lazy(() => import('./pages/HVACIndustry'));
const RoofingIndustry = React.lazy(() => import('./pages/RoofingIndustry'));
const PlumbingIndustry = React.lazy(() => import('./pages/PlumbingIndustry'));
const ElectricalIndustry = React.lazy(() => import('./pages/ElectricalIndustry'));
const BlogIndex = React.lazy(() => import('./pages/BlogIndex'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Hiring = React.lazy(() => import('./pages/Hiring'));

const queryClient = new QueryClient();

// Add a simple loading spinner for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-[#A91D24] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/answers" element={<ClaraAnswers />} />
              <Route path="/solutions/collects" element={<ClaraCollects />} />
              <Route path="/solutions/collects/quickbooksintegration" element={<ClaraCollectsNew />} />
              <Route path="/solutions/field-copilot" element={<FieldCopilot />} />
              <Route path="/solutions/dispatch" element={<ClaraDispatch />} />
              <Route path="/solutions/reminds" element={<ClaraReminds />} />
              <Route path="/solutions/roofing-operations" element={<RoofingOperations />} />
              <Route path="/solutions/roofing-staff-shortage" element={<RoofingStaffShortage />} />
              <Route path="/solutions/fire-protection-cost" element={<FireProtectionCost />} />
              <Route path="/solutions/electrical-new-to-ai" element={<ElectricalNewToAI />} />
              <Route path="/solutions/hvac-growth" element={<HVACGrowth />} />
              <Route path="/solutions/plumbing-staff-shortage" element={<PlumbingStaffShortage />} />
              <Route path="/solutions/hvac-answers" element={<HVACAnswers />} />
              <Route path="/solutions/plumbing-answers" element={<PlumbingAnswers />} />
              <Route path="/solutions/fire-protection-answers" element={<FireProtectionAnswers />} />
              <Route path="/solutions/hvac-after-hours" element={<HVACAfterHours />} />
              <Route path="/solutions/roofing-answers" element={<RoofingAnswers />} />
              <Route path="/solutions/electrical-cost" element={<ElectricalCost />} />
              <Route path="/solutions/fire-protection-collects-cost" element={<FireProtectionCollectsCost />} />
              <Route path="/solutions/hvac-collects-cost" element={<HVACCollectsCost />} />
              <Route path="/solutions/plumbing-collects-new-to-ai" element={<PlumbingCollectsNewToAI />} />
              <Route path="/solutions/fire-protection-collects-growth" element={<FireProtectionCollectsGrowth />} />
              <Route path="/solutions/electrical-collects-staff-shortage" element={<ElectricalCollectsStaffShortage />} />
              <Route path="/solutions/roofing-collects-growth" element={<RoofingCollectsGrowth />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/integrations/:integrationId" element={<IntegrationDetail />} />
              <Route path="/industries/fire-protection" element={<FireProtectionIndustry />} />
              <Route path="/industries/hvac" element={<HVACIndustry />} />
              <Route path="/industries/roofing" element={<RoofingIndustry />} />
              <Route path="/industries/plumbing" element={<PlumbingIndustry />} />
              <Route path="/industries/electrical" element={<ElectricalIndustry />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/resources/case-studies/john-owens" element={<JohnOwensCaseStudy />} />
              <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/security" element={<Security />} />
              <Route path="/user-licence-agreement" element={<UserLicenseAgreement />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/events/roofcon2026" element={<RoofCon />} />
              <Route path="/resources/blogs" element={<BlogIndex />} />
              <Route path="/resources/blogs/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Hiring />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
