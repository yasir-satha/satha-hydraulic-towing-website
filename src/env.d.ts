/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly PUBLIC_PHONE_NUMBER?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_CALL_LABEL?: string;
  readonly PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL?: string;
  readonly PUBLIC_GOOGLE_ADS_FORM_LABEL?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_TIKTOK_PIXEL_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_FACEBOOK_DOMAIN_VERIFICATION?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
