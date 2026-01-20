import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yoursite.com', // Update with your actual site URL
  integrations: [
    // Temporarily disabled due to build issue
    // sitemap(),
  ],
});
