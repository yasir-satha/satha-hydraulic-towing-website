/**
 * Cities we serve, in the order they appear in the hub grid and the quote-form dropdowns.
 * `full` is the formal name used in headings and body copy; `ar` / `en` are the short names
 * used in titles, cards and dropdowns.
 */
export interface City {
  slug: string;
  en: string;
  ar: string;
  enFull?: string;
  arFull?: string;
}

export const CITIES: City[] = [
  { slug: 'riyadh', en: 'Riyadh', ar: 'الرياض' },
  { slug: 'jeddah', en: 'Jeddah', ar: 'جدة' },
  { slug: 'makkah', en: 'Makkah', ar: 'مكة', arFull: 'مكة المكرمة' },
  { slug: 'madinah', en: 'Madinah', ar: 'المدينة', arFull: 'المدينة المنورة' },
  { slug: 'dammam', en: 'Dammam', ar: 'الدمام' },
  { slug: 'khobar', en: 'Al Khobar', ar: 'الخبر' },
  { slug: 'jubail', en: 'Jubail', ar: 'الجبيل' },
  { slug: 'ahsa', en: 'Al Ahsa', ar: 'الأحساء' },
  { slug: 'qassim', en: 'Qassim', ar: 'القصيم' },
  { slug: 'hail', en: 'Hail', ar: 'حائل' },
  { slug: 'tabuk', en: 'Tabuk', ar: 'تبوك' },
  { slug: 'abha', en: 'Abha', ar: 'أبها' },
  { slug: 'khamis', en: 'Khamis Mushait', ar: 'خميس مشيط' },
  { slug: 'jazan', en: 'Jazan', ar: 'جازان' },
  { slug: 'najran', en: 'Najran', ar: 'نجران' },
  { slug: 'taif', en: 'Taif', ar: 'الطائف' },
  { slug: 'yanbu', en: 'Yanbu', ar: 'ينبع' },
  { slug: 'baha', en: 'Al Baha', ar: 'الباحة' },
  { slug: 'jouf', en: 'Al Jouf', ar: 'الجوف' },
];

export const OTHER_CITY = { slug: 'other', en: 'Other', ar: 'أخرى' };

export function city(slug: string): City {
  const c = CITIES.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown city: ${slug}`);
  return c;
}

export const cityName = (slug: string, lang: 'en' | 'ar') => city(slug)[lang];
export const cityFull = (slug: string, lang: 'en' | 'ar') => {
  const c = city(slug);
  return (lang === 'ar' ? c.arFull : c.enFull) ?? c[lang];
};
