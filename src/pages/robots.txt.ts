import type { APIRoute } from 'astro';

/**
 * Standard robots.txt.
 * Everything is open to search engines and to AI search / chatbot crawlers, so the site can be
 * cited in Google, Bing, ChatGPT, Claude, Perplexity, Gemini and Apple answers.
 * The AI bots are listed by name only to make that choice explicit (they are already covered by "*").
 */
const AI_BOTS = [
  'GPTBot', // OpenAI (ChatGPT training)
  'OAI-SearchBot', // OpenAI (ChatGPT search)
  'ChatGPT-User', // OpenAI (ChatGPT browsing on a user's request)
  'ClaudeBot', // Anthropic
  'Claude-SearchBot', // Anthropic (Claude search)
  'Claude-User', // Anthropic (Claude browsing on a user's request)
  'PerplexityBot', // Perplexity
  'Perplexity-User',
  'Google-Extended', // Google Gemini
  'Applebot-Extended', // Apple Intelligence
  'Bingbot', // Bing + Microsoft Copilot
  'CCBot', // Common Crawl (used by many AI models)
];

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap.xml', site).href;
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
