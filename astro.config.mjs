// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical domain. Set SITE_URL in Vercel (e.g. https://www.satha-riyadh.com).
// Falls back to the Vercel production domain, then to localhost for local dev.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

if (!process.env.SITE_URL && process.env.VERCEL_ENV === 'production') {
  console.warn(
    `\n[seo] SITE_URL is not set — canonical URLs, sitemap and robots.txt will use ${site}.\n` +
      '      Set SITE_URL to your real domain in Vercel → Settings → Environment Variables and redeploy.\n',
  );
}

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-SA', ar: 'ar-SA' },
      },
    }),
  ],
});
