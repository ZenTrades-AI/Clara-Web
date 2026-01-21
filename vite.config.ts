import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap'; // <-- 1. Add this import

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // 2. Add the sitemap plugin here
    sitemap({
      // IMPORTANT: Replace with your actual website domain
      hostname: 'https://www.justclara.ai',
      outDir: 'public',
      // List of all your routes
      dynamicRoutes: [
        '/',
        '/how-it-works',
        '/solutions',
        '/pricing',
        '/resources',
        '/case-studies',
        '/case-studies/rapid-fire-protection',
        '/case-studies/john-owens-services',
        '/case-studies/apex-residential-solutions',
      ],
      robots: [{ userAgent: '*', allow: '/' }]
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', 'framer-motion', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));

