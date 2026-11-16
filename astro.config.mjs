import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  site: 'https://adapdev.com.au',

  // sitemap-index.xml for search engines; the 404 page is left out.
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],

  // Stylesheets inline so the first paint is not blocked by a separate request.
  build: { inlineStylesheets: 'always' },

  // Markdown processor defaults preserve the copy's punctuation
  // exactly as written (no smart-quote / em-dash conversion). The
  // previous `markdown.smartypants: false` was deprecated in Astro
  // 5 and removed here; opt back in via remark-smartypants if ever
  // needed.
  devToolbar: { enabled: false },

  adapter: cloudflare()
});