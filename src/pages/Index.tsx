import { useEffect } from "react";

// The homepage is the standalone page in public/landing, served as "/" in production
// (see the static-home-page plugin in vite.config.ts). When the app routes to "/"
// client-side, load that page instead; the dev server serves it from /landing/.
const Index = () => {
  useEffect(() => {
    const target = import.meta.env.DEV ? "/landing/index.html" : "/";
    window.location.replace(target + window.location.search + window.location.hash);
  }, []);
  return null;
};

export default Index;
