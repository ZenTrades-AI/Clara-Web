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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/integrations/:integrationId" element={<IntegrationDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/security" element={<Security />} />
            <Route path="/user-licence-agreement" element={<UserLicenseAgreement />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/events/roofcon2026" element={<RoofCon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

