import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get current directory equivalent to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts directly to get slugs
// Note: We need a way to read this TS file in Node. 
// Since we can't easily import TS in JS without a loader, we'll read the file content and regex for slugs.
// This is a robust hack for a build script to avoid TS config hell.
const blogPostsPath = path.join(__dirname, 'src', 'data', 'blogPosts.ts');
const blogContent = fs.readFileSync(blogPostsPath, 'utf-8');
const slugMatches = blogContent.matchAll(/slug:\s*["']([^"']+)["']/g);
const blogSlugs = Array.from(slugMatches).map(match => match[1]);

const ROUTES = [
    '/',
    '/how-it-works',
    '/solutions',
    '/solutions/answers',
    '/solutions/collects',
    '/solutions/field-copilot',
    '/solutions/dispatch',
    '/solutions/reminds',
    '/solutions/roofing-operations',
    '/solutions/roofing-staff-shortage',
    '/solutions/fire-protection-cost',
    '/solutions/electrical-new-to-ai',
    '/solutions/hvac-growth',
    '/solutions/plumbing-staff-shortage',
    '/solutions/hvac-answers',
    '/solutions/plumbing-answers',
    '/solutions/fire-protection-answers',
    '/solutions/hvac-after-hours',
    '/solutions/roofing-answers',
    '/solutions/electrical-cost',
    '/solutions/fire-protection-collects-cost',
    '/solutions/hvac-collects-cost',
    '/solutions/plumbing-collects-new-to-ai',
    '/solutions/fire-protection-collects-growth',
    '/solutions/electrical-collects-staff-shortage',
    '/solutions/roofing-collects-growth',
    '/pricing',
    '/resources',
    '/integrations',
    '/industries/fire-protection',
    '/industries/hvac',
    '/industries/roofing',
    '/industries/plumbing',
    '/industries/electrical',
    '/case-studies',
    '/resources/case-studies/john-owens',
    '/security',
    '/user-licence-agreement',
    '/privacy-policy',
    '/contact',
    '/events/roofcon2026',
    '/resources/blogs',
];

// Add blog routes
blogSlugs.forEach(slug => {
    ROUTES.push(`/resources/blogs/${slug}`);
});

const PORT = 4173;
const DIST_DIR = path.join(__dirname, 'dist');

async function prerender() {
    console.log('Starting prerender process...');

    // 1. Start a local server serving the dist folder
    const app = express();
    app.use(express.static(DIST_DIR));
    // Fallback to index.html for SPA routing
    app.use((req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    });

    const server = app.listen(PORT, () => {
        console.log(`Prerender server running on port ${PORT}`);
    });

    // 2. Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: true, // Try simple 'true'
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        dumpio: true // Print Chrome stdout/stderr
    });
    const page = await browser.newPage();

    // 3. Visit each route
    for (const route of ROUTES) {
        try {
            console.log(`Prerendering: ${route}`);

            const url = `http://localhost:${PORT}${route}`;
            // Use domcontentloaded because 3D scenes keep network active (networkidle0 causes timeouts)
            // We rely on the manual 1s sleep afterwards for basic rendering
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

            // Wait a bit extra for React to fully settle (animations, etc.)
            // 100ms is usually enough for "instant" appearance, but for this heavy app we'll do 1s 
            // just to be safe and ensure the SEO content is there.
            await new Promise(r => setTimeout(r, 1000));

            // Capture the HTML
            const html = await page.content();

            // Determine where to save the file
            // e.g., /solutions/answers -> dist/solutions/answers/index.html
            const filePath = route === '/'
                ? path.join(DIST_DIR, 'index.html')
                : path.join(DIST_DIR, ...route.split('/').filter(Boolean), 'index.html');

            // Ensure directory exists
            const dirPath = path.dirname(filePath);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            // Save the file
            fs.writeFileSync(filePath, html);
            console.log(`Saved: ${filePath}`);

        } catch (err) {
            console.error(`Failed to prerender ${route}:`, err);
        }
    }

    // 4. Cleanup
    await browser.close();
    server.close();
    console.log('Validating prerender...');

    // Validate a random blog post exists
    const testBlog = path.join(DIST_DIR, 'resources', 'blogs', blogSlugs[0], 'index.html');
    if (fs.existsSync(testBlog)) {
        console.log('SUCCESS: Prerender complete. Blog posts generated.');
    } else {
        console.error('WARNING: Blog post file not found.');
    }
}

prerender();
