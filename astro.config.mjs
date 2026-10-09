// @ts-check
// Astro configuration for adapdev.com.au.
//
// Step 15 of the ADMS Website Build Guide (section 8 - Scaffold the Corporate
// Site Locally). The `site` setting is required for @astrojs/sitemap and for
// Open Graph canonical URL generation inside BaseLayout.astro.
//
// Note: this configuration intentionally avoids an SPA framework integration -
// the corporate marketing site is static-first per the architecture decision
// in section 3 of the build guide.

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adapdev.com.au',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
  vite: {
    ssr: {
      // @fontsource-variable/inter ships CSS imports Astro must NOT externalise
      // or font files will fail to load in the production build.
      noExternal: ['@fontsource-variable/inter', '@fontsource/jetbrains-mono'],
    },
  },
});
