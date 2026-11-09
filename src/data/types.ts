export interface Section {
  h: string;
  p?: string[];
  list?: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface PageCopy {
  /** Short name used in cards, menus and breadcrumbs */
  name: string;
  /** One-line summary for cards */
  short: string;
  /** <title> (keep under ~60 chars where possible) */
  title: string;
  /** meta description (~140–160 chars) */
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
  faqs: FAQ[];
  /** Pre-filled WhatsApp message */
  wa: string;
}

export interface LandingPage {
  slug: string;
  icon: string;
  en: PageCopy;
  ar: PageCopy;
}
