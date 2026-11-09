import type { ImageMetadata } from 'astro';
import { SERVICES } from '../data/services';
import { ROUTES } from '../data/routes';
import { AREA_PAGES } from '../data/areas';
import { localePath, type Lang } from '../data/site';
import type { LandingPage } from '../data/types';
import heroEn from '../assets/img/hero-flatbed-riyadh-night.jpg';
import featureImg from '../assets/img/hydraulic-flatbed-loading-sports-car.jpg';
import processImg from '../assets/img/operator-strapping-wheel-flatbed.jpg';
import riyadhImg from '../assets/img/riyadh-night-aerial.jpg';

export type Section = 'services' | 'routes' | 'areas';

export const SECTION_LABEL: Record<Section, Record<Lang, string>> = {
  services: { en: 'Services', ar: 'الخدمات' },
  routes: { en: 'City-to-city routes', ar: 'النقل بين المدن' },
  areas: { en: 'Riyadh districts', ar: 'أحياء الرياض' },
};

const SERVICE_IMAGE: Record<string, ImageMetadata> = {
  'hydraulic-flatbed-towing': featureImg,
  'accident-recovery': processImg,
  'breakdown-towing': processImg,
  'city-to-city-car-transport': heroEn,
  'roadside-assistance': processImg,
  'luxury-car-transport': featureImg,
};

const ALT: Record<string, Record<Lang, string>> = {
  feature: {
    en: 'Sports car being winched onto a Satha hydraulic flatbed in Riyadh',
    ar: 'سيارة رياضية تُرفع على سطحة هيدروليك في الرياض',
  },
  process: {
    en: 'Tow operator securing a car wheel with a strap on a flatbed at night in Riyadh',
    ar: 'فني سطحة يثبّت عجلة السيارة بحزام على السطحة ليلاً في الرياض',
  },
  hero: {
    en: 'Hydraulic flatbed carrying an SUV on a Riyadh highway at night',
    ar: 'سطحة هيدروليك تنقل سيارة دفع رباعي على طريق سريع في الرياض ليلاً',
  },
  riyadh: {
    en: 'Riyadh at night from above, where Satha flatbeds operate 24/7',
    ar: 'الرياض ليلاً من الأعلى، حيث تعمل سطحاتنا على مدار 24 ساعة',
  },
};

function altFor(img: ImageMetadata, lang: Lang) {
  if (img === featureImg) return ALT.feature[lang];
  if (img === processImg) return ALT.process[lang];
  if (img === riyadhImg) return ALT.riyadh[lang];
  return ALT.hero[lang];
}

const PRESET: Record<string, string> = {
  'accident-recovery': 'accident',
  'city-to-city-car-transport': 'city',
  'luxury-car-transport': 'luxury',
};

const SERVICE_TYPE: Record<Section, string> = {
  services: 'Towing service',
  routes: 'Vehicle transport',
  areas: 'Towing service',
};

function card(section: Section, p: LandingPage, lang: Lang) {
  return { href: localePath(lang, `/${section}/${p.slug}/`), title: p[lang].name, desc: p[lang].short, icon: p.icon };
}

export function getLandingProps(section: Section, page: LandingPage, lang: Lang) {
  const image = section === 'services' ? SERVICE_IMAGE[page.slug] : section === 'routes' ? heroEn : riyadhImg;
  let related;
  if (section === 'services') {
    related = [
      ...SERVICES.filter((s) => s.slug !== page.slug).slice(0, 5).map((s) => card('services', s, lang)),
      card('routes', ROUTES[0], lang),
    ];
  } else if (section === 'routes') {
    related = [
      ...ROUTES.filter((r) => r.slug !== page.slug).map((r) => card('routes', r, lang)),
      card('services', SERVICES.find((s) => s.slug === 'city-to-city-car-transport')!, lang),
    ];
  } else {
    related = [
      ...AREA_PAGES.filter((a) => a.slug !== page.slug).map((a) => card('areas', a, lang)),
      card('services', SERVICES.find((s) => s.slug === 'accident-recovery')!, lang),
      card('services', SERVICES.find((s) => s.slug === 'breakdown-towing')!, lang),
    ];
  }
  return {
    lang,
    page,
    section,
    sectionLabel: SECTION_LABEL[section][lang],
    image,
    imageAlt: altFor(image, lang),
    related,
    preset: section === 'routes' ? 'city' : PRESET[page.slug] ?? 'breakdown',
    serviceType: SERVICE_TYPE[section],
  };
}

export const COLLECTIONS: Record<Section, LandingPage[]> = {
  services: SERVICES,
  routes: ROUTES,
  areas: AREA_PAGES,
};
