import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://adapdev.com.au',
  // sitemap-index.xml for search engines; the 404 page is left out.
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  // Stylesheets inline so the first paint is not blocked by a separate request.
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  // Keep the copy's punctuation exactly as written.
  markdown: { smartypants: false },
});
