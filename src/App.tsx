import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Solutions from "./pages/Solutions";
import ClaraAnswers from "./pages/ClaraAnswers";
import ClaraDispatch from "./pages/ClaraDispatch";
import ClaraReminds from "./pages/ClaraReminds";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Integrations from "./pages/Integrations";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import IntegrationDetail from "./pages/IntegrationDetail";
import NotFound from "./pages/NotFound";
import Security from './pages/Security';
import UserLicenseAgreement from './pages/UserLicenseAgreement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ClaraCollects from './pages/ClaraCollects';
import RoofCon from './pages/RoofCon';
import RoofingOperations from './pages/RoofingOperations';
import RoofingStaffShortage from './pages/RoofingStaffShortage';
import FireProtectionCost from './pages/FireProtectionCost';
import ElectricalNewToAI from './pages/ElectricalNewToAI';
import HVACGrowth from './pages/HVACGrowth';
import PlumbingStaffShortage from './pages/PlumbingStaffShortage';
import HVACAnswers from './pages/HVACAnswers';
import PlumbingAnswers from './pages/PlumbingAnswers';
import FireProtectionAnswers from './pages/FireProtectionAnswers';
import HVACAfterHours from './pages/HVACAfterHours';
import RoofingAnswers from './pages/RoofingAnswers';
import ElectricalCost from './pages/ElectricalCost';
import FireProtectionCollectsCost from './pages/FireProtectionCollectsCost';
import HVACCollectsCost from './pages/HVACCollectsCost';
import PlumbingCollectsNewToAI from './pages/PlumbingCollectsNewToAI';
import FireProtectionCollectsGrowth from './pages/FireProtectionCollectsGrowth';
import ElectricalCollectsStaffShortage from './pages/ElectricalCollectsStaffShortage';
import RoofingCollectsGrowth from './pages/RoofingCollectsGrowth';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/answers" element={<ClaraAnswers />} />
            <Route path="/solutions/collects" element={<ClaraCollects />} />
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
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/security" element={<Security />} />
            <Route path="/user-licence-agreement" element={<UserLicenseAgreement />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/events/roofcon2026" element={<RoofCon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

