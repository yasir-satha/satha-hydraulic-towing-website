# Satha Hydraulic Towing Service — website

Bilingual (English `/` + Arabic `/ar/`) static site built with [Astro](https://astro.build) from `satha-design.pen`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview
```
Requires Node 22.23+ (Node 24 recommended).

## Deploy on Vercel
1. Push this folder to a GitHub repo and import it in Vercel (framework is detected as Astro; `vercel.json` is included).
2. Add the environment variables from `.env.example` in **Project → Settings → Environment Variables**. Set `SITE_URL` to your final domain.
3. Redeploy whenever you change an environment variable (they're read at build time).

## Where things live
| What | File |
| --- | --- |
| Phone / WhatsApp number | `PUBLIC_PHONE_NUMBER` env var (`src/data/site.ts`) |
| Home page copy (EN + AR) | `src/data/ui.ts` |
| Service pages | `src/data/services.ts` |
| City route pages | `src/data/routes.ts` |
| Riyadh district pages | `src/data/areas.ts` |
| Prices / privacy / terms | `src/data/pages.ts` |
| Analytics, Ads, Meta & TikTok pixels | `src/components/Analytics.astro` (IDs via env vars) |
| Design tokens & styles | `src/styles/global.css` |

Adding a new district, route or service = add one entry to the matching data file; the EN and AR pages, sitemap, hreflang and internal links are generated automatically.

## SEO & AI search (GEO)
All of these are generated at build time from the data files and `SITE_URL`:

| URL | What it is | Source |
| --- | --- | --- |
| `/sitemap.xml` | Sitemap index — **submit this one** | `src/pages/sitemap.xml.ts` |
| `/sitemap-0.xml` | Every page, with EN/AR hreflang | `@astrojs/sitemap` in `astro.config.mjs` |
| `/robots.txt` | Allows all search engines and AI crawlers, links the sitemap | `src/pages/robots.txt.ts` |
| `/llms.txt` | Plain summary of the business and pages for AI chatbots (llmstxt.org) | `src/pages/llms.txt.ts` |
| Meta, canonical, hreflang, Open Graph, JSON-LD | Every page `<head>` | `src/layouts/Base.astro` + page components |

**Google Search Console:** add a *URL-prefix* property for your domain → choose *HTML tag* → paste the `content` value into `PUBLIC_GOOGLE_SITE_VERIFICATION` → redeploy → Verify → Sitemaps → submit `sitemap.xml`.

**Bing Webmaster Tools** (powers ChatGPT search and Copilot): import the site from Search Console, or use the meta-tag option with `PUBLIC_BING_SITE_VERIFICATION`, then submit `sitemap.xml`.

## Tracked conversions
Clicks on any `tel:` link, any WhatsApp link, and the "Get a price" form are sent to every configured platform:
- GA4 events: `click_to_call`, `click_whatsapp`, `whatsapp_quote_form` (mark them as key events in GA4)
- Google Ads: conversion labels from `PUBLIC_GOOGLE_ADS_*_LABEL`
- Meta Pixel: `Contact` / `Lead`
- TikTok Pixel: `Contact` / `SubmitForm`
