import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Solutions = lazy(() => import("./pages/Solutions"));
const ClaraAnswers = lazy(() => import("./pages/ClaraAnswers"));
const ClaraDispatch = lazy(() => import("./pages/ClaraDispatch"));
const ClaraReminds = lazy(() => import("./pages/ClaraReminds"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const Integrations = lazy(() => import("./pages/Integrations"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const JohnOwensCaseStudy = lazy(() => import("./pages/JohnOwensCaseStudy"));
const IntegrationDetail = lazy(() => import("./pages/IntegrationDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Security = lazy(() => import('./pages/Security'));
const UserLicenseAgreement = lazy(() => import('./pages/UserLicenseAgreement'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ClaraCollects = lazy(() => import('./pages/ClaraCollects'));
const FieldCopilot = lazy(() => import('./pages/FieldCopilot'));
const RoofCon = lazy(() => import('./pages/RoofCon'));
const RoofingOperations = lazy(() => import('./pages/RoofingOperations'));
const RoofingStaffShortage = lazy(() => import('./pages/RoofingStaffShortage'));
const FireProtectionCost = lazy(() => import('./pages/FireProtectionCost'));
const ElectricalNewToAI = lazy(() => import('./pages/ElectricalNewToAI'));
const HVACGrowth = lazy(() => import('./pages/HVACGrowth'));
const PlumbingStaffShortage = lazy(() => import('./pages/PlumbingStaffShortage'));
const HVACAnswers = lazy(() => import('./pages/HVACAnswers'));
const PlumbingAnswers = lazy(() => import('./pages/PlumbingAnswers'));
const FireProtectionAnswers = lazy(() => import('./pages/FireProtectionAnswers'));
const HVACAfterHours = lazy(() => import('./pages/HVACAfterHours'));
const RoofingAnswers = lazy(() => import('./pages/RoofingAnswers'));
const ElectricalCost = lazy(() => import('./pages/ElectricalCost'));
const FireProtectionCollectsCost = lazy(() => import('./pages/FireProtectionCollectsCost'));
const HVACCollectsCost = lazy(() => import('./pages/HVACCollectsCost'));
const PlumbingCollectsNewToAI = lazy(() => import('./pages/PlumbingCollectsNewToAI'));
const FireProtectionCollectsGrowth = lazy(() => import('./pages/FireProtectionCollectsGrowth'));
const ElectricalCollectsStaffShortage = lazy(() => import('./pages/ElectricalCollectsStaffShortage'));
const RoofingCollectsGrowth = lazy(() => import('./pages/RoofingCollectsGrowth'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const DemoPage = lazy(() => import('./pages/DemoPage'));
const FireProtectionIndustry = lazy(() => import('./pages/FireProtectionIndustry'));
const HVACIndustry = lazy(() => import('./pages/HVACIndustry'));
const RoofingIndustry = lazy(() => import('./pages/RoofingIndustry'));
const PlumbingIndustry = lazy(() => import('./pages/PlumbingIndustry'));
const ElectricalIndustry = lazy(() => import('./pages/ElectricalIndustry'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/answers" element={<ClaraAnswers />} />
              <Route path="/solutions/collects" element={<ClaraCollects />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

