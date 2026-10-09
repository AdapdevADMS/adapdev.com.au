# adapdev.com.au

Corporate marketing site for **Adapdev Pty Ltd**, built with Astro and deployed
to Cloudflare Pages.

## Stack

- **Framework:** [Astro 5](https://astro.build) (static output)
- **Language:** TypeScript (strict)
- **Fonts:** Inter (variable) + JetBrains Mono, self-hosted via `@fontsource*`
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/) (free tier)
- **DNS / TLS / WAF:** Cloudflare free plan on the `adapdev.com.au` zone
- **Registrar:** VentraIP (auDA-accredited)

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # emits ./dist
pnpm preview      # preview the built site
pnpm check        # astro check (type/content errors)
pnpm format:check # Prettier
```

Requires Node.js 20 LTS and pnpm 9.

## Project layout

```
.
├── astro.config.mjs
├── public/              Static assets copied verbatim into the build
│   ├── _headers         Cloudflare Pages response headers (CSP, HSTS, ...)
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/      Astro components (Header, Footer, BusinessCard, ...)
│   ├── content/
│   │   ├── blog/        Markdown blog posts (content collection)
│   │   └── config.ts    Zod schema for the blog collection
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/           File-based routes
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── [...slug].astro
│   │       └── rss.xml.ts
│   └── styles/
│       ├── tokens.css   Brand palette + typography (do not hard-code hex)
│       └── global.css   Reset + base typography + utility classes
└── tsconfig.json
```

## Secrets

**No secret belongs in this repository.** All credentials for Cloudflare,
GitHub, VentraIP and third-party services live in the 1Password **ADAPDEV**
vault; CI reads what it needs from GitHub Actions encrypted secrets. See
`ADMS-Secret-Storage-Setup.docx` for the two-tier model.

## Reference documents

- `C:\Dev\Repos\ADMS-Website-Build-Guide.docx` -- step-by-step build guide
- `C:\Dev\Repos\ADMS-Secret-Storage-Setup.docx` -- secret management
- `C:\Dev\Repos\ADMS-Auth-and-Website-Infrastructure.docx` -- design analysis
