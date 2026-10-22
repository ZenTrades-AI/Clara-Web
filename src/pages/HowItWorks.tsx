import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HowItWorksHero from "@/components/HowItWorks/HowItWorksHero";
import ThreeIntelligentAgents from "@/components/HowItWorks/ThreeIntelligentAgents";
import DataFlow from "@/components/HowItWorks/DataFlow";
import WhyClaraWorks from "@/components/HowItWorks/WhyClaraWorks";
import DesignedForRealWorld from "@/components/HowItWorks/DesignedForRealWorld";
import BuiltForTrust from "@/components/HowItWorks/BuiltForTrust";
import HowItWorksCTA from "@/components/HowItWorks/HowItWorksCTA";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

// Trial of the AI Mate chatbot on this page only. The widget is loaded when the page opens
// and removed again when the visitor navigates elsewhere in the app.
const CHATBOT_SRC = "https://chatbot.hiaimate.com/chatbot-widget.js";
const CHATBOT_KEY = "aw_ifOtRcuHIbmHeikDoIk87KIzlAwVQdyB";

// Page-level elements that belong to the site's other tools (Crisp chat, the HubSpot demo
// pop-up, scripts) and must survive when the chatbot is cleaned up.
const KEEP_ON_CLEANUP = '.crisp-client, #crisp-chatbox, [id^="hubspot"], [id^="hs-"], #agent-modal-overlay, script, noscript';

const useChatbotWidget = () => {
  useEffect(() => {
    const added: Element[] = [];
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n instanceof Element && !n.matches(KEEP_ON_CLEANUP)) added.push(n);
        })
      );
    });
    observer.observe(document.body, { childList: true });

    const script = document.createElement("script");
    script.src = CHATBOT_SRC;
    script.async = true;
    script.dataset.widgetKey = CHATBOT_KEY;
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      added.forEach((n) => n.remove());
    };
  }, []);
};

const HowItWorks = () => {
  useChatbotWidget();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>How Clara Works | The AI Growth Engine</title>
        <meta name="description" content="See how Clara's three intelligent agents - Front Office, Field Co-Pilot, and Back Office - work together to transform your home services business." />
      </Helmet>

      <Navigation />
      <HowItWorksHero />
      <ThreeIntelligentAgents />
      <DataFlow />
      <WhyClaraWorks />
      <DesignedForRealWorld />
      <BuiltForTrust />
      <HowItWorksCTA />
      <Footer />
    </div>
  );
};

export default HowItWorks;
