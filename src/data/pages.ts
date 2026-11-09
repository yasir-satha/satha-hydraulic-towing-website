import { PHONE, type Lang } from './site';
import type { Section, FAQ } from './types';

interface ContentCopy {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
  faqs?: FAQ[];
  note?: string;
}

export const PRICES: Record<Lang, ContentCopy> = {
  en: {
    title: 'Towing Prices in Riyadh: How Flatbed Costs Are Worked Out | Satha',
    description: 'How much does a tow truck cost in Riyadh? See what affects the price of a hydraulic flatbed inside Riyadh and between cities, and get a fixed quote on WhatsApp in 60 seconds.',
    h1: 'Towing prices in Riyadh',
    lead: 'Every tow is different, so we don’t hide behind a vague “from” price. Tell us where the car is, where it is going and what kind of car it is, and we give you one fixed price on the phone or WhatsApp before we move.',
    sections: [
      {
        h: 'What affects the price of a tow',
        list: [
          'Distance between pickup and drop-off',
          'Type and size of the car (sedan, SUV, pickup, sports or luxury car)',
          'Where the car is: street, parking basement, highway shoulder or desert road',
          'Condition: drives on to the bed, won’t start, locked wheels or accident damage',
          'Extra stops, such as Najm or an estimation centre before the workshop',
        ],
      },
      {
        h: 'Inside Riyadh',
        p: [
          'Most tows inside Riyadh are priced by distance and the car’s condition. A short trip from a street to a nearby workshop costs less than a recovery from a basement or the ring road. Share your location pin and drop-off on WhatsApp and we reply with the exact price.',
        ],
      },
      {
        h: 'Between cities',
        p: [
          'City-to-city transport is priced by route and car type. Riyadh to Qassim or Dammam is a shorter trip than Riyadh to Jeddah, Abha or Tabuk. The price includes door-to-door collection and delivery on a hydraulic flatbed, with the car strapped at all four wheels.',
        ],
      },
      {
        h: 'No surprises at drop-off',
        p: [
          'The price we agree on the phone is the price you pay. You can pay in cash, by mada or by bank transfer when your car is delivered.',
        ],
      },
    ],
    faqs: [
      { q: 'Why don’t you publish a fixed price list?', a: 'Because the same distance can mean a quick street pickup or a difficult basement recovery. A fixed quote for your exact situation is fairer than a list price that changes on arrival.' },
      { q: 'How do I get a price quickly?', a: 'Use the “Get a price in 60 seconds” form or send your location pin on WhatsApp. We reply with the price and arrival time.' },
      { q: 'Is the price different at night or on weekends?', a: 'Ask when you call. We always confirm the full price before the truck leaves, whatever the time.' },
    ],
  },
  ar: {
    title: 'أسعار سطحة الرياض | كيف يُحسب سعر السطحة داخل الرياض وبين المدن',
    description: 'كم سعر السطحة في الرياض؟ تعرّف على ما يحدد سعر السطحة الهيدروليك داخل الرياض وبين المدن، واحصل على سعر ثابت عبر واتساب خلال 60 ثانية.',
    h1: 'أسعار السطحة في الرياض',
    lead: 'كل نقلة مختلفة، لذلك لا نختبئ خلف سعر "يبدأ من" غير واضح. أخبرنا بمكان السيارة ووجهتها ونوعها، ونعطيك سعراً واحداً ثابتاً هاتفياً أو عبر واتساب قبل أن نتحرك.',
    sections: [
      {
        h: 'ما الذي يحدد سعر السطحة؟',
        list: [
          'المسافة بين موقع الاستلام والتسليم',
          'نوع السيارة وحجمها (صغيرة، جيب، بيك أب، رياضية أو فاخرة)',
          'مكان السيارة: شارع، قبو مواقف، جانب طريق سريع أو طريق بري',
          'حالة السيارة: تصعد على السطحة، لا تشتغل، عجلات مقفلة أو متضررة من حادث',
          'التوقفات الإضافية، مثل نجم أو مركز التقديرات قبل الورشة',
        ],
      },
      {
        h: 'داخل الرياض',
        p: [
          'تُسعَّر أغلب النقلات داخل الرياض حسب المسافة وحالة السيارة. النقل القصير من شارع إلى ورشة قريبة أقل تكلفة من إخراج سيارة من قبو أو من الدائري. أرسل موقعك ووجهتك عبر واتساب ونرد عليك بالسعر الدقيق.',
        ],
      },
      {
        h: 'بين المدن',
        p: [
          'يُسعَّر النقل بين المدن حسب الوجهة ونوع السيارة. الرياض إلى القصيم أو الدمام أقصر من الرياض إلى جدة أو أبها أو تبوك. ويشمل السعر الاستلام والتسليم من الباب إلى الباب على سطحة هيدروليك مع تثبيت العجلات الأربع.',
        ],
      },
      {
        h: 'بدون مفاجآت عند التسليم',
        p: [
          'السعر الذي نتفق عليه هاتفياً هو السعر الذي تدفعه. يمكنك الدفع نقداً أو عبر مدى أو بالتحويل البنكي عند تسليم سيارتك.',
        ],
      },
    ],
    faqs: [
      { q: 'لماذا لا تنشرون قائمة أسعار ثابتة؟', a: 'لأن المسافة نفسها قد تعني استلاماً سريعاً من الشارع أو إخراجاً صعباً من قبو. السعر الثابت لحالتك بالضبط أعدل من سعر قائمة يتغير عند الوصول.' },
      { q: 'كيف أحصل على السعر بسرعة؟', a: 'استخدم نموذج "احصل على السعر خلال 60 ثانية" أو أرسل موقعك عبر واتساب، ونرد عليك بالسعر ووقت الوصول.' },
      { q: 'هل يختلف السعر ليلاً أو في العطل؟', a: 'اسألنا عند الاتصال. نؤكد لك السعر كاملاً قبل أن تتحرك السطحة في أي وقت.' },
    ],
  },
};

const UPDATED = { en: 'Last updated: 9 November 2026', ar: 'آخر تحديث: 9 نوفمبر 2026' };

export const PRIVACY: Record<Lang, ContentCopy> = {
  en: {
    title: 'Privacy Policy | Satha Hydraulic Towing Service',
    description: 'How Satha Hydraulic Towing Service collects, uses and protects your information when you use our website, call us or contact us on WhatsApp.',
    h1: 'Privacy policy',
    lead: 'This policy explains what information we collect when you visit this website or contact us, and how we use it.',
    sections: [
      {
        h: 'Information we collect',
        list: [
          'Details you give us when you call or message us on WhatsApp, such as your name, phone number, location, destination and car details.',
          'Your location, only if you choose to share it with the “Use my current location” button or in WhatsApp.',
          'Technical data collected automatically when you visit the site, such as pages viewed, device and browser type, approximate location and the ad or link that brought you here.',
        ],
      },
      {
        h: 'How we use it',
        list: [
          'To give you a price, send a truck and deliver your car.',
          'To contact you about your booking.',
          'To understand how the website is used and improve it.',
          'To measure and improve our advertising.',
        ],
      },
      {
        h: 'Cookies, analytics and advertising',
        p: [
          'This website may use Google Analytics, Google Ads, the Meta (Facebook and Instagram) Pixel and the TikTok Pixel. These services use cookies and similar technologies to measure visits and the results of our ads, for example when someone taps our call or WhatsApp button after seeing an ad. They are operated by their providers under their own privacy policies. You can block or delete cookies in your browser settings, and manage ad personalisation in your Google, Meta and TikTok account settings.',
        ],
      },
      {
        h: 'WhatsApp',
        p: [
          'When you contact us on WhatsApp, your messages are handled by WhatsApp (Meta) under its own terms and privacy policy. We use what you send us only to handle your request.',
        ],
      },
      {
        h: 'Sharing and retention',
        p: [
          'We do not sell your personal information. We share it only with our drivers and staff who need it to complete your job, or where the law requires it. We keep booking information only as long as needed for the service, accounting and legal obligations.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          `In line with the Saudi Personal Data Protection Law, you can ask us to access, correct or delete your personal information. Contact us by phone or WhatsApp on ${PHONE}.`,
        ],
      },
    ],
    note: UPDATED.en,
  },
  ar: {
    title: 'سياسة الخصوصية | سطحة هيدروليك لخدمات السحب',
    description: 'كيف تجمع سطحة هيدروليك لخدمات السحب معلوماتك وتستخدمها وتحميها عند استخدام موقعنا أو الاتصال بنا أو مراسلتنا عبر واتساب.',
    h1: 'سياسة الخصوصية',
    lead: 'توضح هذه السياسة المعلومات التي نجمعها عند زيارتك لهذا الموقع أو تواصلك معنا، وكيف نستخدمها.',
    sections: [
      {
        h: 'المعلومات التي نجمعها',
        list: [
          'البيانات التي تعطينا إياها عند الاتصال أو المراسلة عبر واتساب، مثل الاسم ورقم الجوال والموقع والوجهة وبيانات السيارة.',
          'موقعك الجغرافي، فقط إذا اخترت مشاركته عبر زر "استخدم موقعي الحالي" أو في واتساب.',
          'بيانات تقنية تُجمع تلقائياً عند زيارة الموقع، مثل الصفحات التي تزورها ونوع الجهاز والمتصفح والموقع التقريبي والإعلان أو الرابط الذي أوصلك إلينا.',
        ],
      },
      {
        h: 'كيف نستخدمها',
        list: [
          'لإعطائك السعر وإرسال السطحة وتوصيل سيارتك.',
          'للتواصل معك بخصوص طلبك.',
          'لفهم طريقة استخدام الموقع وتحسينه.',
          'لقياس إعلاناتنا وتحسينها.',
        ],
      },
      {
        h: 'ملفات تعريف الارتباط والتحليلات والإعلانات',
        p: [
          'قد يستخدم هذا الموقع خدمات Google Analytics وGoogle Ads وبكسل Meta (فيسبوك وإنستغرام) وبكسل TikTok. تستخدم هذه الخدمات ملفات تعريف الارتباط وتقنيات مشابهة لقياس الزيارات ونتائج إعلاناتنا، مثلاً عندما يضغط شخص على زر الاتصال أو واتساب بعد مشاهدة إعلان. وتُدار هذه الخدمات من قبل مزوديها وفق سياسات الخصوصية الخاصة بهم. يمكنك حظر ملفات تعريف الارتباط أو حذفها من إعدادات المتصفح، وإدارة تخصيص الإعلانات من إعدادات حساباتك في Google وMeta وTikTok.',
        ],
      },
      {
        h: 'واتساب',
        p: [
          'عند تواصلك معنا عبر واتساب، تُعالج رسائلك من قبل واتساب (Meta) وفق شروطها وسياسة خصوصيتها. ونستخدم ما ترسله لنا فقط لتنفيذ طلبك.',
        ],
      },
      {
        h: 'المشاركة ومدة الاحتفاظ',
        p: [
          'لا نبيع معلوماتك الشخصية. نشاركها فقط مع السائقين والموظفين الذين يحتاجونها لإتمام طلبك، أو عندما يطلب النظام ذلك. ونحتفظ ببيانات الطلبات فقط للمدة اللازمة للخدمة والمحاسبة والالتزامات النظامية.',
        ],
      },
      {
        h: 'حقوقك',
        p: [
          `وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية، يحق لك طلب الاطلاع على معلوماتك الشخصية أو تصحيحها أو حذفها. تواصل معنا هاتفياً أو عبر واتساب على ${PHONE}.`,
        ],
      },
    ],
    note: UPDATED.ar,
  },
};

export const TERMS: Record<Lang, ContentCopy> = {
  en: {
    title: 'Terms of Service | Satha Hydraulic Towing Service',
    description: 'Terms that apply when you book towing, recovery or car transport with Satha Hydraulic Towing Service in Riyadh and across Saudi Arabia.',
    h1: 'Terms of service',
    lead: 'These terms apply when you book towing, recovery, roadside help or car transport with us.',
    sections: [
      {
        h: 'Quotes and prices',
        p: ['We confirm the price before the truck leaves, based on the information you give us. If the actual situation is very different (for example a different car, location or condition), we will tell you before loading and agree any change with you first.'],
      },
      {
        h: 'Arrival times',
        p: ['Arrival times are estimates based on traffic and distance. We keep you updated by phone or WhatsApp if anything changes.'],
      },
      {
        h: 'Your responsibilities',
        list: [
          'Give accurate details about the car, its location and its condition.',
          'Have the vehicle registration (istimara) and ID available if requested.',
          'Remove valuables and personal items from the car before it is loaded.',
          'Make sure you are the owner of the car or are authorised by the owner.',
        ],
      },
      {
        h: 'Our responsibilities',
        p: ['We load every car on a hydraulic flatbed, secure it at all four wheels and transport it with care. Goods-in-transit insurance applies during transport according to the policy terms.'],
      },
      {
        h: 'Payment',
        p: ['Payment is due on delivery unless agreed otherwise, by cash, mada or bank transfer.'],
      },
      {
        h: 'Damage claims',
        p: [`Please inspect the car on delivery and tell the driver about any concern before signing off, then contact us on ${PHONE} so we can follow up.`],
      },
      {
        h: 'Governing law',
        p: ['These terms are governed by the laws of the Kingdom of Saudi Arabia.'],
      },
    ],
    note: UPDATED.en,
  },
  ar: {
    title: 'الشروط والأحكام | سطحة هيدروليك لخدمات السحب',
    description: 'الشروط التي تنطبق عند طلب خدمات السحب ونقل سيارات الحوادث ونقل السيارات مع سطحة هيدروليك لخدمات السحب في الرياض وجميع مناطق المملكة.',
    h1: 'الشروط والأحكام',
    lead: 'تنطبق هذه الشروط عند طلبك خدمات السحب أو نقل الحوادث أو المساعدة على الطريق أو نقل السيارات معنا.',
    sections: [
      {
        h: 'عروض الأسعار',
        p: ['نؤكد السعر قبل تحرك السطحة بناءً على المعلومات التي تقدمها. إذا كان الوضع الفعلي مختلفاً بشكل كبير (مثل سيارة أو موقع أو حالة مختلفة)، نخبرك قبل التحميل ونتفق معك على أي تغيير أولاً.'],
      },
      {
        h: 'أوقات الوصول',
        p: ['أوقات الوصول تقديرية حسب الزحام والمسافة، ونبقيك على اطلاع هاتفياً أو عبر واتساب إذا تغير أي شيء.'],
      },
      {
        h: 'مسؤولياتك',
        list: [
          'تقديم معلومات صحيحة عن السيارة وموقعها وحالتها.',
          'توفير استمارة السيارة والهوية عند الطلب.',
          'إخراج الأغراض الثمينة والشخصية من السيارة قبل تحميلها.',
          'التأكد من أنك مالك السيارة أو مفوّض من المالك.',
        ],
      },
      {
        h: 'مسؤولياتنا',
        p: ['نحمّل كل سيارة على سطحة هيدروليك ونثبّتها من العجلات الأربع وننقلها بعناية. ويسري التأمين على المركبات أثناء النقل وفق شروط الوثيقة.'],
      },
      {
        h: 'الدفع',
        p: ['يكون الدفع عند التسليم ما لم يُتفق على غير ذلك، نقداً أو عبر مدى أو بالتحويل البنكي.'],
      },
      {
        h: 'المطالبات',
        p: [`يرجى فحص السيارة عند التسليم وإبلاغ السائق بأي ملاحظة قبل الاستلام، ثم التواصل معنا على ${PHONE} لمتابعتها.`],
      },
      {
        h: 'النظام المطبق',
        p: ['تخضع هذه الشروط لأنظمة المملكة العربية السعودية.'],
      },
    ],
    note: UPDATED.ar,
  },
};
