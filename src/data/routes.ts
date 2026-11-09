import { PHONE } from './site';
import type { LandingPage } from './types';

interface CitySpec {
  slug: string;
  km: string;
  en: { city: string; region: string; areas: string; why: string; extraQ: { q: string; a: string } };
  ar: { city: string; region: string; areas: string; why: string; extraQ: { q: string; a: string } };
}

const CITIES: CitySpec[] = [
  {
    slug: 'riyadh-to-jeddah',
    km: '950',
    en: {
      city: 'Jeddah',
      region: 'Makkah Province on the Red Sea coast',
      areas: 'We deliver anywhere in Jeddah, from Obhur and Al Shati in the north to Al Rawdah, Al Hamra, Al Safa and the south of the city.',
      why: 'Riyadh–Jeddah is our busiest long-distance route. People use it when they relocate for work, buy a car from a Jeddah showroom or private seller, or send a car ahead of a family move.',
      extraQ: { q: 'Do you also transport cars from Jeddah to Riyadh?', a: 'Yes. We run the route in both directions, so we can collect in Jeddah and deliver to any district in Riyadh.' },
    },
    ar: {
      city: 'جدة',
      region: 'منطقة مكة المكرمة على ساحل البحر الأحمر',
      areas: 'نسلّم في أي مكان في جدة، من أبحر والشاطئ شمالاً إلى الروضة والحمراء والصفا وجنوب المدينة.',
      why: 'خط الرياض–جدة هو أكثر خطوطنا الطويلة طلباً. يستخدمه من ينتقل للعمل، أو يشتري سيارة من معرض أو بائع في جدة، أو يرسل سيارته قبل انتقال العائلة.',
      extraQ: { q: 'هل تنقلون السيارات من جدة إلى الرياض أيضاً؟', a: 'نعم. نعمل على الخط في الاتجاهين، فنستلم من جدة ونسلّم في أي حي في الرياض.' },
    },
  },
  {
    slug: 'riyadh-to-dammam',
    km: '410',
    en: {
      city: 'Dammam',
      region: 'the Eastern Province',
      areas: 'We deliver to Dammam, Al Khobar, Dhahran and Qatif, and on to Jubail and Al Ahsa on request.',
      why: 'Riyadh–Dammam is a short, frequent route along the Riyadh–Dammam highway, popular with people who work between the capital and the Eastern Province and with buyers of cars from Eastern Province showrooms.',
      extraQ: { q: 'Can you deliver to Al Khobar or Dhahran instead of Dammam?', a: 'Yes. The price is confirmed for your exact address, whether it is Dammam, Al Khobar, Dhahran or another Eastern Province city.' },
    },
    ar: {
      city: 'الدمام',
      region: 'المنطقة الشرقية',
      areas: 'نسلّم في الدمام والخبر والظهران والقطيف، وإلى الجبيل والأحساء عند الطلب.',
      why: 'خط الرياض–الدمام قصير ومتكرر عبر طريق الرياض–الدمام السريع، ويطلبه من يعمل بين العاصمة والمنطقة الشرقية ومن يشتري سيارة من معارض الشرقية.',
      extraQ: { q: 'هل يمكن التسليم في الخبر أو الظهران بدلاً من الدمام؟', a: 'نعم. نؤكد السعر لعنوانك بالضبط، سواء كان في الدمام أو الخبر أو الظهران أو أي مدينة في الشرقية.' },
    },
  },
  {
    slug: 'riyadh-to-makkah',
    km: '870',
    en: {
      city: 'Makkah',
      region: 'Makkah Province',
      areas: 'We deliver to residential districts across Makkah and to nearby Taif on the way.',
      why: 'Families moving to Makkah, residents who drove to Riyadh and need their car sent back, and people combining a Makkah delivery with Jeddah all use this route.',
      extraQ: { q: 'Can you deliver to Taif on the way to Makkah?', a: 'Yes. Taif is on the way, so we can deliver there or collect from there. Ask us for the price to your exact address.' },
    },
    ar: {
      city: 'مكة المكرمة',
      region: 'منطقة مكة المكرمة',
      areas: 'نسلّم في الأحياء السكنية في مكة المكرمة، وفي الطائف الواقعة على الطريق.',
      why: 'تستخدم هذا الخط العائلات المنتقلة إلى مكة، والمقيمون فيها ممن قادوا سياراتهم إلى الرياض ويريدون إعادتها، ومن يجمع بين التسليم في مكة وجدة.',
      extraQ: { q: 'هل يمكن التسليم في الطائف في الطريق إلى مكة؟', a: 'نعم. الطائف على الطريق، فنستطيع التسليم فيها أو الاستلام منها. اسألنا عن السعر لعنوانك بالضبط.' },
    },
  },
  {
    slug: 'riyadh-to-madinah',
    km: '850',
    en: {
      city: 'Madinah',
      region: 'Madinah Province',
      areas: 'We deliver to districts across Madinah and can also stop in Qassim on the way.',
      why: 'This route is used by families relocating to Madinah, students and employees moving for work, and buyers of cars from the north-west of the Kingdom.',
      extraQ: { q: 'Can you collect in Qassim and deliver to Madinah?', a: 'Yes. Qassim is on the way, so collection or delivery there can be added to the same trip.' },
    },
    ar: {
      city: 'المدينة المنورة',
      region: 'منطقة المدينة المنورة',
      areas: 'نسلّم في أحياء المدينة المنورة، ويمكننا التوقف في القصيم على الطريق.',
      why: 'يستخدم هذا الخط العائلات المنتقلة إلى المدينة، والطلاب والموظفون المنتقلون للعمل، ومن يشتري سيارة من شمال غرب المملكة.',
      extraQ: { q: 'هل يمكن الاستلام من القصيم والتسليم في المدينة؟', a: 'نعم. القصيم على الطريق، فيمكن إضافة الاستلام أو التسليم فيها إلى الرحلة نفسها.' },
    },
  },
  {
    slug: 'riyadh-to-qassim',
    km: '330',
    en: {
      city: 'Qassim',
      region: 'Qassim Province',
      areas: 'We deliver to Buraydah, Unaizah, Ar Rass and other towns across Qassim.',
      why: 'Qassim is one of our shortest intercity routes, used for family visits, car purchases and moving cars between Riyadh and Buraydah or Unaizah.',
      extraQ: { q: 'Do you deliver to Unaizah and Ar Rass as well as Buraydah?', a: 'Yes. We deliver to any town in Qassim. The price is confirmed for your exact address.' },
    },
    ar: {
      city: 'القصيم',
      region: 'منطقة القصيم',
      areas: 'نسلّم في بريدة وعنيزة والرس وبقية مدن القصيم.',
      why: 'القصيم من أقصر خطوطنا بين المدن، ويُطلب لزيارات العائلة وشراء السيارات ونقل السيارات بين الرياض وبريدة أو عنيزة.',
      extraQ: { q: 'هل تسلّمون في عنيزة والرس إلى جانب بريدة؟', a: 'نعم. نسلّم في أي مدينة في القصيم، ونؤكد السعر لعنوانك بالضبط.' },
    },
  },
  {
    slug: 'riyadh-to-abha',
    km: '1,000',
    en: {
      city: 'Abha',
      region: 'Asir Province in the south-west',
      areas: 'We deliver to Abha, Khamis Mushait and nearby towns in Asir.',
      why: 'Abha is one of our longest routes. It is popular in summer, when families head to Asir, and with people moving between Riyadh and Khamis Mushait for work.',
      extraQ: { q: 'Can you deliver to Khamis Mushait?', a: 'Yes. Khamis Mushait is next to Abha, so we deliver there on the same route.' },
    },
    ar: {
      city: 'أبها',
      region: 'منطقة عسير في جنوب غرب المملكة',
      areas: 'نسلّم في أبها وخميس مشيط والمدن المجاورة في عسير.',
      why: 'أبها من أطول خطوطنا، ويكثر الطلب عليها صيفاً عندما تتوجه العائلات إلى عسير، ومن المنتقلين للعمل بين الرياض وخميس مشيط.',
      extraQ: { q: 'هل تسلّمون في خميس مشيط؟', a: 'نعم. خميس مشيط بجوار أبها، فنسلّم فيها على الخط نفسه.' },
    },
  },
  {
    slug: 'riyadh-to-hail',
    km: '640',
    en: {
      city: 'Hail',
      region: 'Hail Province in the north',
      areas: 'We deliver to Hail city and nearby towns, and can stop in Qassim on the way.',
      why: 'The Riyadh–Hail route passes through Qassim, so it is often combined with a stop in Buraydah. It is used for family moves, car purchases and sending cars to and from the north.',
      extraQ: { q: 'Can you go further north than Hail?', a: 'Yes. We cover every region of the Kingdom. Ask on WhatsApp for a price to your exact city.' },
    },
    ar: {
      city: 'حائل',
      region: 'منطقة حائل في شمال المملكة',
      areas: 'نسلّم في مدينة حائل والمدن المجاورة، ويمكننا التوقف في القصيم على الطريق.',
      why: 'يمر خط الرياض–حائل بالقصيم، لذلك يُجمع غالباً مع توقف في بريدة. ويُطلب لانتقال العائلات وشراء السيارات وإرسالها من وإلى الشمال.',
      extraQ: { q: 'هل تصلون إلى مدن أبعد من حائل شمالاً؟', a: 'نعم. نغطي جميع مناطق المملكة. اسألنا عبر واتساب عن السعر إلى مدينتك بالضبط.' },
    },
  },
];

export const ROUTES: LandingPage[] = CITIES.map(({ slug, km, en, ar }) => ({
  slug,
  icon: 'path',
  en: {
    name: `Riyadh → ${en.city}`,
    short: `About ${km} km, door-to-door on a hydraulic flatbed.`,
    title: `Car Transport Riyadh to ${en.city} by Flatbed | Satha`,
    description: `Move your car from Riyadh to ${en.city} (about ${km} km) on a hydraulic flatbed. Door-to-door, strapped at 4 wheels, insured. Price before we move. Call ${PHONE}.`,
    h1: `Car transport from Riyadh to ${en.city}`,
    lead: `We move cars from Riyadh to ${en.city}, in ${en.region}, on a hydraulic flatbed. The trip is about ${km} km. We collect from your door in Riyadh, strap the car at all four wheels and deliver it to the address you choose in ${en.city}.`,
    sections: [
      { h: `Why people send cars to ${en.city}`, p: [en.why] },
      { h: `Delivery areas in and around ${en.city}`, p: [en.areas] },
      {
        h: 'How it works',
        list: [
          'Call or WhatsApp us with the car type and both addresses.',
          'We confirm the price and the pickup and delivery time before you book.',
          'We collect the car in Riyadh and load it on a hydraulic flatbed, strapped at all four wheels.',
          `The car is delivered door-to-door in ${en.city}. You pay in cash, by mada or bank transfer.`,
        ],
      },
      {
        h: 'What to prepare',
        list: [
          'The vehicle registration (istimara) and a copy of your ID',
          'Remove valuables and loose items from the car',
          `The name and phone number of the person receiving the car in ${en.city}`,
        ],
      },
    ],
    faqs: [
      { q: `How far is it from Riyadh to ${en.city}?`, a: `About ${km} km by road. The price is based on the exact pickup and delivery addresses and the type of car.` },
      { q: `How much does it cost to move a car from Riyadh to ${en.city}?`, a: 'It depends on the car and both addresses. Send them on WhatsApp and we reply with a fixed price before you book.' },
      { q: 'Is my car insured during the trip?', a: 'Yes. We are a registered company with goods-in-transit insurance, and the car is strapped at all four wheels for the whole trip.' },
      en.extraQ,
    ],
    wa: `Hello Satha, I want to move my car from Riyadh to ${en.city}.`,
  },
  ar: {
    name: `الرياض ← ${ar.city}`,
    short: `نحو ${km} كم، من الباب إلى الباب بسطحة هيدروليك.`,
    title: `نقل سيارات من الرياض الى ${ar.city} بسطحة هيدروليك | سطحة`,
    description: `نقل وشحن سيارتك من الرياض إلى ${ar.city} (نحو ${km} كم) بسطحة هيدروليك. من الباب إلى الباب، تثبيت 4 عجلات، ومؤمَّن. سعر قبل أن نتحرك. اتصل ${PHONE}.`,
    h1: `نقل السيارات من الرياض إلى ${ar.city}`,
    lead: `ننقل السيارات من الرياض إلى ${ar.city} في ${ar.region} على سطحة هيدروليك. المسافة نحو ${km} كم. نستلم السيارة من بابك في الرياض، ونثبّتها من العجلات الأربع، ونسلّمها إلى العنوان الذي تختاره في ${ar.city}.`,
    sections: [
      { h: `لماذا يُرسل الناس سياراتهم إلى ${ar.city}؟`, p: [ar.why] },
      { h: `مناطق التسليم في ${ar.city} وما حولها`, p: [ar.areas] },
      {
        h: 'كيف تتم الخدمة؟',
        list: [
          'اتصل بنا أو راسلنا واتساب بنوع السيارة وعنواني الاستلام والتسليم.',
          'نؤكد لك السعر ووقت الاستلام والتسليم قبل الحجز.',
          'نستلم السيارة في الرياض ونحمّلها على سطحة هيدروليك مثبتة من العجلات الأربع.',
          `تُسلَّم السيارة من الباب إلى الباب في ${ar.city}، وتدفع نقداً أو مدى أو تحويلاً بنكياً.`,
        ],
      },
      {
        h: 'ماذا تجهّز قبل النقل؟',
        list: [
          'استمارة السيارة وصورة من الهوية',
          'إخراج الأغراض الثمينة والأشياء غير المثبتة من السيارة',
          `اسم ورقم جوال الشخص الذي سيستلم السيارة في ${ar.city}`,
        ],
      },
    ],
    faqs: [
      { q: `كم المسافة من الرياض إلى ${ar.city}؟`, a: `نحو ${km} كم بالطريق البري. ويُحسب السعر حسب عنواني الاستلام والتسليم ونوع السيارة.` },
      { q: `كم تكلفة نقل سيارة من الرياض إلى ${ar.city}؟`, a: 'تعتمد على نوع السيارة والعنوانين. أرسلها لنا عبر واتساب ونرد عليك بسعر ثابت قبل الحجز.' },
      { q: 'هل سيارتي مؤمَّنة أثناء الرحلة؟', a: 'نعم. نحن منشأة مسجلة ولدينا تأمين على المركبات أثناء النقل، والسيارة مثبتة من العجلات الأربع طوال الرحلة.' },
      ar.extraQ,
    ],
    wa: `السلام عليكم، أريد نقل سيارتي من الرياض إلى ${ar.city}.`,
  },
}));

/** Data for the home-page route tiles, in design order. */
export const ROUTE_TILES = CITIES.map((c) => ({ slug: c.slug, km: c.km, en: c.en.city, ar: c.ar.city }));
