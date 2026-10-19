import { defineConfig, type Plugin } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap'; // <-- 1. Add this import

// The homepage is a standalone page in public/landing. After the build, serve it as
// dist/index.html (so "/" gets its full HTML) and move the React app shell to
// dist/app.html, which vercel.json rewrites every other route to.
const staticHomePage = (): Plugin => ({
  name: "static-home-page",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    fs.renameSync(path.join(dist, "index.html"), path.join(dist, "app.html"));
    fs.renameSync(path.join(dist, "landing", "index.html"), path.join(dist, "index.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    staticHomePage(),
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
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-ui': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', 'framer-motion'],
        }
      }
    }
  }
}));

