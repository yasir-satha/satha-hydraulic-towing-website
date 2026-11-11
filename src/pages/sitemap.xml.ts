import type { APIRoute } from 'astro';

/**
 * Standard /sitemap.xml — the URL to submit in Google Search Console and Bing Webmaster Tools.
 * It is a sitemap index pointing at the page sitemap that @astrojs/sitemap writes at build time
 * (sitemap-0.xml, with en-SA / ar-SA hreflang links for every page).
 */
export const GET: APIRoute = ({ site }) => {
  const loc = new URL('sitemap-0.xml', site).href;
  const lastmod = new Date().toISOString();
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    `  <sitemap><loc>${loc}</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
    '</sitemapindex>\n';
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
