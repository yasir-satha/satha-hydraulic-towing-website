export type Lang = 'en' | 'ar';

/**
 * Phone number comes from PUBLIC_PHONE_NUMBER (any format, e.g. 0569470469 or +966569470469).
 * WhatsApp uses PUBLIC_WHATSAPP_NUMBER if set, otherwise the same number.
 * Values are read at build time, so redeploy after changing them.
 */
function toIntl(raw: string): string {
  let d = raw.replace(/\D/g, '');
  if (d.startsWith('00')) d = d.slice(2);
  if (d.startsWith('0')) d = `966${d.slice(1)}`;
  if (!d.startsWith('966') && d.length === 9) d = `966${d}`;
  return d;
}
const phoneIntl = toIntl(import.meta.env.PUBLIC_PHONE_NUMBER || '0569470469');
const waIntl = toIntl(import.meta.env.PUBLIC_WHATSAPP_NUMBER || phoneIntl);
const national = phoneIntl.startsWith('966') ? phoneIntl.slice(3) : phoneIntl; // 569470469
const local = `0${national}`; // 0569470469
const group = (x: string) => (x.length === 10 ? `${x.slice(0, 3)} ${x.slice(3, 6)} ${x.slice(6)}` : x);
const groupIntl = (x: string) => (x.length === 9 ? `${x.slice(0, 2)} ${x.slice(2, 5)} ${x.slice(5)}` : x);

export const SITE = {
  name: { en: 'Satha Hydraulic Towing Service', ar: 'سطحة هيدروليك لخدمات السحب' },
  shortName: { en: 'Satha', ar: 'سطحة' },
  phoneDisplay: group(local),
  phoneIntlDisplay: `+966 ${groupIntl(national)}`,
  phoneE164: `+${phoneIntl}`,
  whatsappNumber: waIntl,
  city: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  year: 2026,
} as const;

export const TEL_HREF = `tel:${SITE.phoneE164}`;

export function waHref(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Prefix a path with the language segment. Paths are written without the /ar prefix. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ar' ? (clean === '/' ? '/ar/' : `/ar${clean}`) : clean;
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'ar' : 'en');

/** Shorthand for use inside copy strings */
export const PHONE = SITE.phoneDisplay;
