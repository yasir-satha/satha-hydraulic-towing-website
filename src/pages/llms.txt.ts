import type { APIRoute } from 'astro';
import { SITE, localePath, type Lang } from '../data/site';
import { UI } from '../data/ui';
import { SERVICES } from '../data/services';
import { AREA_PAGES } from '../data/areas';
import { ROUTES } from '../data/routes';
import { PRICES } from '../data/pages';
import type { LandingPage } from '../data/types';

/**
 * /llms.txt — the llmstxt.org standard: a plain Markdown summary of the business and its key pages
 * for AI chatbots and AI search (ChatGPT, Claude, Perplexity, Gemini). Generated from the same data
 * files as the pages, so it stays in sync automatically.
 */
export const GET: APIRoute = ({ site }) => {
  const abs = (lang: Lang, p: string) => new URL(localePath(lang, p), site).href;
  const list = (lang: Lang, section: string, pages: LandingPage[]) =>
    pages.map((p) => `- [${p[lang].name}](${abs(lang, `/${section}/${p.slug}/`)}): ${p[lang].short}`).join('\n');

  const body = `# ${SITE.name.en}

> ${UI.en.footer.blurb} Open 24 hours a day, 7 days a week. Phone and WhatsApp: ${SITE.phoneIntlDisplay}. Prices are agreed before the truck moves. The website is in English and Arabic.

## Key facts
- Business: ${SITE.name.en} (${SITE.name.ar})
- Based in: ${SITE.city.en}, ${SITE.country.en}
- Service area: all districts of Riyadh, plus car transport from Riyadh to every region of Saudi Arabia
- Hours: 24/7, including Fridays and Eid holidays
- Phone / WhatsApp: ${SITE.phoneE164}
- Languages: Arabic, English
- Payment: cash, mada, bank transfer

## Main pages
- [Home](${abs('en', '/')}): ${UI.en.footer.blurb}
- [Towing prices](${abs('en', '/prices/')}): ${PRICES.en.description}
- [All services](${abs('en', '/services/')})
- [Riyadh districts](${abs('en', '/areas/')})
- [City-to-city routes](${abs('en', '/routes/')})

## Services
${list('en', 'services', SERVICES)}

## Riyadh districts
${list('en', 'areas', AREA_PAGES)}

## City-to-city car transport
${list('en', 'routes', ROUTES)}

## بالعربية
- [الرئيسية](${abs('ar', '/')}): ${UI.ar.footer.blurb}
- [الأسعار](${abs('ar', '/prices/')}): ${PRICES.ar.description}

### الخدمات
${list('ar', 'services', SERVICES)}

### أحياء الرياض
${list('ar', 'areas', AREA_PAGES)}

### النقل بين المدن
${list('ar', 'routes', ROUTES)}

## Optional
- [Privacy policy](${abs('en', '/privacy/')})
- [Terms](${abs('en', '/terms/')})
- [Sitemap](${new URL('sitemap.xml', site).href})
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
