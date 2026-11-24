import { PHONE } from './site';
import { cityName, cityFull } from './cities';
import type { FAQ, RoutePage } from './types';

/* ==========================================================================
   Road distances — ONE place to edit.
   Each row covers the route in both directions. There is no fixed price or delivery
   time per route: every quote depends on the car, both addresses and the date, so
   the site always offers a quote instead of a number.
   ========================================================================== */
export interface PriceRow {
  a: string;
  b: string;
  km: string;
}

export const PRICE_ROWS: PriceRow[] = [
  { a: 'riyadh', b: 'dammam', km: '410' },
  { a: 'riyadh', b: 'qassim', km: '330' },
  { a: 'riyadh', b: 'hail', km: '640' },
  { a: 'riyadh', b: 'madinah', km: '850' },
  { a: 'riyadh', b: 'makkah', km: '870' },
  { a: 'riyadh', b: 'jeddah', km: '950' },
  { a: 'riyadh', b: 'abha', km: '1,000' },
  { a: 'riyadh', b: 'jazan', km: '1,100' },
  { a: 'riyadh', b: 'tabuk', km: '1,300' },
  { a: 'jeddah', b: 'dammam', km: '1,330' },
];

export function priceRow(from: string, to: string): PriceRow {
  const r = PRICE_ROWS.find((p) => (p.a === from && p.b === to) || (p.a === to && p.b === from));
  if (!r) throw new Error(`No price row for ${from} – ${to}`);
  return r;
}

/* ==========================================================================
   Route pages. Each one has its own "why", delivery areas and an extra FAQ,
   so no two pages differ only by the city name.
   `region` describes where the destination is ("in {region}").
   ========================================================================== */
interface Side { region: string; why: string; areas: string; extraQ: FAQ }
interface RouteSpec { from: string; to: string; en: Side; ar: Side }

const SPECS: RouteSpec[] = [
  /* ---------- From Riyadh (existing pages) ---------- */
  {
    from: 'riyadh', to: 'jeddah',
    en: {
      region: 'Makkah Province on the Red Sea coast',
      areas: 'We deliver anywhere in Jeddah, from Obhur and Al Shati in the north to Al Rawdah, Al Hamra, Al Safa and the south of the city.',
      why: 'Riyadh–Jeddah is our busiest long-distance route. People use it when they relocate for work, buy a car from a Jeddah showroom or private seller, or send a car ahead of a family move.',
      extraQ: { q: 'Do you also transport cars from Jeddah to Riyadh?', a: 'Yes. We run the route in both directions, so we can collect in Jeddah and deliver to any district in Riyadh.' },
    },
    ar: {
      region: 'منطقة مكة المكرمة على ساحل البحر الأحمر',
      areas: 'نسلّم في أي مكان في جدة، من أبحر والشاطئ شمالاً إلى الروضة والحمراء والصفا وجنوب المدينة.',
      why: 'خط الرياض–جدة هو أكثر خطوطنا الطويلة طلباً. يستخدمه من ينتقل للعمل، أو يشتري سيارة من معرض أو بائع في جدة، أو يرسل سيارته قبل انتقال العائلة.',
      extraQ: { q: 'هل تنقلون السيارات من جدة إلى الرياض أيضاً؟', a: 'نعم. نعمل على الخط في الاتجاهين، فنستلم من جدة ونسلّم في أي حي في الرياض.' },
    },
  },
  {
    from: 'riyadh', to: 'dammam',
    en: {
      region: 'the Eastern Province',
      areas: 'We deliver to Dammam, Al Khobar, Dhahran and Qatif, and on to Jubail and Al Ahsa on request.',
      why: 'Riyadh–Dammam is a short, frequent route along the Riyadh–Dammam highway, popular with people who work between the capital and the Eastern Province and with buyers of cars from Eastern Province showrooms.',
      extraQ: { q: 'Can you deliver to Al Khobar or Dhahran instead of Dammam?', a: 'Yes. The price is confirmed for your exact address, whether it is Dammam, Al Khobar, Dhahran or another Eastern Province city.' },
    },
    ar: {
      region: 'المنطقة الشرقية',
      areas: 'نسلّم في الدمام والخبر والظهران والقطيف، وإلى الجبيل والأحساء عند الطلب.',
      why: 'خط الرياض–الدمام قصير ومتكرر عبر طريق الرياض–الدمام السريع، ويطلبه من يعمل بين العاصمة والمنطقة الشرقية ومن يشتري سيارة من معارض الشرقية.',
      extraQ: { q: 'هل يمكن التسليم في الخبر أو الظهران بدلاً من الدمام؟', a: 'نعم. نؤكد السعر لعنوانك بالضبط، سواء كان في الدمام أو الخبر أو الظهران أو أي مدينة في الشرقية.' },
    },
  },
  {
    from: 'riyadh', to: 'makkah',
    en: {
      region: 'Makkah Province',
      areas: 'We deliver to residential districts across Makkah and to nearby Taif on the way.',
      why: 'Families moving to Makkah, residents who drove to Riyadh and need their car sent back, and people combining a Makkah delivery with Jeddah all use this route.',
      extraQ: { q: 'Can you deliver to Taif on the way to Makkah?', a: 'Yes. Taif is on the way, so we can deliver there or collect from there. Ask us for the price to your exact address.' },
    },
    ar: {
      region: 'منطقة مكة المكرمة',
      areas: 'نسلّم في الأحياء السكنية في مكة المكرمة، وفي الطائف الواقعة على الطريق.',
      why: 'تستخدم هذا الخط العائلات المنتقلة إلى مكة، والمقيمون فيها ممن قادوا سياراتهم إلى الرياض ويريدون إعادتها، ومن يجمع بين التسليم في مكة وجدة.',
      extraQ: { q: 'هل يمكن التسليم في الطائف في الطريق إلى مكة؟', a: 'نعم. الطائف على الطريق، فنستطيع التسليم فيها أو الاستلام منها. اسألنا عن السعر لعنوانك بالضبط.' },
    },
  },
  {
    from: 'riyadh', to: 'madinah',
    en: {
      region: 'Madinah Province',
      areas: 'We deliver to districts across Madinah and can also stop in Qassim on the way.',
      why: 'This route is used by families relocating to Madinah, students and employees moving for work, and buyers of cars from the north-west of the Kingdom.',
      extraQ: { q: 'Can you collect in Qassim and deliver to Madinah?', a: 'Yes. Qassim is on the way, so collection or delivery there can be added to the same trip.' },
    },
    ar: {
      region: 'منطقة المدينة المنورة',
      areas: 'نسلّم في أحياء المدينة المنورة، ويمكننا التوقف في القصيم على الطريق.',
      why: 'يستخدم هذا الخط العائلات المنتقلة إلى المدينة، والطلاب والموظفون المنتقلون للعمل، ومن يشتري سيارة من شمال غرب المملكة.',
      extraQ: { q: 'هل يمكن الاستلام من القصيم والتسليم في المدينة؟', a: 'نعم. القصيم على الطريق، فيمكن إضافة الاستلام أو التسليم فيها إلى الرحلة نفسها.' },
    },
  },
  {
    from: 'riyadh', to: 'qassim',
    en: {
      region: 'Qassim Province',
      areas: 'We deliver to Buraydah, Unaizah, Ar Rass and other towns across Qassim.',
      why: 'Qassim is one of our shortest intercity routes, used for family visits, car purchases and moving cars between Riyadh and Buraydah or Unaizah.',
      extraQ: { q: 'Do you deliver to Unaizah and Ar Rass as well as Buraydah?', a: 'Yes. We deliver to any town in Qassim. The price is confirmed for your exact address.' },
    },
    ar: {
      region: 'منطقة القصيم',
      areas: 'نسلّم في بريدة وعنيزة والرس وبقية مدن القصيم.',
      why: 'القصيم من أقصر خطوطنا بين المدن، ويُطلب لزيارات العائلة وشراء السيارات ونقل السيارات بين الرياض وبريدة أو عنيزة.',
      extraQ: { q: 'هل تسلّمون في عنيزة والرس إلى جانب بريدة؟', a: 'نعم. نسلّم في أي مدينة في القصيم، ونؤكد السعر لعنوانك بالضبط.' },
    },
  },
  {
    from: 'riyadh', to: 'abha',
    en: {
      region: 'Asir Province in the south-west',
      areas: 'We deliver to Abha, Khamis Mushait and nearby towns in Asir.',
      why: 'Abha is one of our longest routes. It is popular in summer, when families head to Asir, and with people moving between Riyadh and Khamis Mushait for work.',
      extraQ: { q: 'Can you deliver to Khamis Mushait?', a: 'Yes. Khamis Mushait is next to Abha, so we deliver there on the same route.' },
    },
    ar: {
      region: 'منطقة عسير في جنوب غرب المملكة',
      areas: 'نسلّم في أبها وخميس مشيط والمدن المجاورة في عسير.',
      why: 'أبها من أطول خطوطنا، ويكثر الطلب عليها صيفاً عندما تتوجه العائلات إلى عسير، ومن المنتقلين للعمل بين الرياض وخميس مشيط.',
      extraQ: { q: 'هل تسلّمون في خميس مشيط؟', a: 'نعم. خميس مشيط بجوار أبها، فنسلّم فيها على الخط نفسه.' },
    },
  },
  {
    from: 'riyadh', to: 'hail',
    en: {
      region: 'Hail Province in the north',
      areas: 'We deliver to Hail city and nearby towns, and can stop in Qassim on the way.',
      why: 'The Riyadh–Hail route passes through Qassim, so it is often combined with a stop in Buraydah. It is used for family moves, car purchases and sending cars to and from the north.',
      extraQ: { q: 'Can you go further north than Hail?', a: 'Yes. We cover every region of the Kingdom. Ask on WhatsApp for a price to your exact city.' },
    },
    ar: {
      region: 'منطقة حائل في شمال المملكة',
      areas: 'نسلّم في مدينة حائل والمدن المجاورة، ويمكننا التوقف في القصيم على الطريق.',
      why: 'يمر خط الرياض–حائل بالقصيم، لذلك يُجمع غالباً مع توقف في بريدة. ويُطلب لانتقال العائلات وشراء السيارات وإرسالها من وإلى الشمال.',
      extraQ: { q: 'هل تصلون إلى مدن أبعد من حائل شمالاً؟', a: 'نعم. نغطي جميع مناطق المملكة. اسألنا عبر واتساب عن السعر إلى مدينتك بالضبط.' },
    },
  },

  /* ---------- Wave 1 (new) ---------- */
  {
    from: 'jeddah', to: 'riyadh',
    en: {
      region: 'the centre of the Kingdom',
      why: 'Jeddah–Riyadh is the trip customers ask for most often in the opposite direction: people starting a new job in the capital, buyers who found a car in Jeddah, and families who flew to Riyadh and need the car brought after them.',
      areas: 'We collect anywhere in Jeddah, from Obhur and Al Shati to Al Rawdah, Al Safa and the south of the city, and deliver to any Riyadh district: north Riyadh, Al Olaya, Al Malaz, Al Naseem, Al Sulay and beyond.',
      extraQ: { q: 'Can you deliver to Al Kharj or Diriyah instead of central Riyadh?', a: 'Yes. Al Kharj, Diriyah and the towns around the capital are on the same route. The price is confirmed for your exact address.' },
    },
    ar: {
      region: 'وسط المملكة',
      why: 'خط جدة–الرياض هو الاتجاه المعاكس الأكثر طلباً: من يبدأ عملاً جديداً في العاصمة، ومن وجد سيارة في جدة واشتراها، والعائلات التي سافرت جواً إلى الرياض وتريد وصول سيارتها بعدها.',
      areas: 'نستلم من أي مكان في جدة، من أبحر والشاطئ إلى الروضة والصفا وجنوب المدينة، ونسلّم في أي حي في الرياض: شمال الرياض والعليا والملز والنسيم والسلي وغيرها.',
      extraQ: { q: 'هل يمكن التسليم في الخرج أو الدرعية بدلاً من وسط الرياض؟', a: 'نعم. الخرج والدرعية والمدن المحيطة بالعاصمة على الخط نفسه، ونؤكد السعر لعنوانك بالضبط.' },
    },
  },
  {
    from: 'dammam', to: 'riyadh',
    en: {
      region: 'the centre of the Kingdom',
      why: 'Dammam–Riyadh is short and frequent. Employees who work in the Eastern Province and live in the capital use it, as do buyers who find a car in a Dammam or Al Khobar showroom and want it delivered home.',
      areas: 'We collect from Dammam, Al Khobar, Dhahran, Qatif and Jubail, and deliver door to door to any district in Riyadh.',
      extraQ: { q: 'Can you collect from Al Khobar or Jubail instead of Dammam?', a: 'Yes. We collect from any city in the Eastern Province. The price is confirmed for your pickup address.' },
    },
    ar: {
      region: 'وسط المملكة',
      why: 'خط الدمام–الرياض قصير ومتكرر. يطلبه الموظفون الذين يعملون في المنطقة الشرقية ويسكنون العاصمة، ومن يجد سيارة في معارض الدمام أو الخبر ويريد توصيلها إلى بيته.',
      areas: 'نستلم من الدمام والخبر والظهران والقطيف والجبيل، ونسلّم من الباب إلى الباب في أي حي في الرياض.',
      extraQ: { q: 'هل تستلمون من الخبر أو الجبيل بدلاً من الدمام؟', a: 'نعم. نستلم من أي مدينة في المنطقة الشرقية، ونؤكد السعر لعنوان الاستلام بالضبط.' },
    },
  },
  {
    from: 'makkah', to: 'riyadh',
    en: {
      region: 'the centre of the Kingdom',
      why: 'Makkah residents moving to the capital, students starting university in Riyadh, and families who drove to Makkah and flew home all use this route to get the car back without the long drive.',
      areas: 'We collect from residential districts across Makkah, and from Taif on the way, and deliver door to door anywhere in Riyadh.',
      extraQ: { q: 'Can you collect from Taif instead of Makkah?', a: 'Yes. Taif is on the road to Riyadh, so a pickup there is on the same route. Send us the location on WhatsApp for the price.' },
    },
    ar: {
      region: 'وسط المملكة',
      why: 'يستخدم هذا الخط سكان مكة المنتقلون إلى العاصمة، والطلاب الملتحقون بجامعات الرياض، والعائلات التي قادت سيارتها إلى مكة ثم عادت جواً وتريد سيارتها دون عناء الطريق الطويل.',
      areas: 'نستلم من الأحياء السكنية في مكة المكرمة، ومن الطائف على الطريق، ونسلّم من الباب إلى الباب في أي مكان في الرياض.',
      extraQ: { q: 'هل يمكن الاستلام من الطائف بدلاً من مكة؟', a: 'نعم. الطائف على طريق الرياض، فالاستلام منها على الخط نفسه. أرسل لنا الموقع عبر واتساب لنعطيك السعر.' },
    },
  },
  {
    from: 'madinah', to: 'riyadh',
    en: {
      region: 'the centre of the Kingdom',
      why: 'Families moving from Madinah to the capital, employees transferred to Riyadh, and buyers who found a car in the north-west use this route.',
      areas: 'We collect anywhere in Madinah and deliver to any Riyadh district. A pickup or drop-off in Qassim can be added on the way.',
      extraQ: { q: 'Can the car stop in Buraydah on the way?', a: 'Yes. Buraydah and Unaizah are on the Madinah–Riyadh road, so a pickup or delivery in Qassim can be added to the same trip.' },
    },
    ar: {
      region: 'وسط المملكة',
      why: 'تستخدم هذا الخط العائلات المنتقلة من المدينة إلى العاصمة، والموظفون المنقولون إلى الرياض، ومن اشترى سيارة من شمال غرب المملكة.',
      areas: 'نستلم من أي مكان في المدينة المنورة ونسلّم في أي حي في الرياض، ويمكن إضافة استلام أو تسليم في القصيم على الطريق.',
      extraQ: { q: 'هل يمكن أن تتوقف السيارة في بريدة على الطريق؟', a: 'نعم. بريدة وعنيزة على طريق المدينة–الرياض، فيمكن إضافة استلام أو تسليم في القصيم إلى الرحلة نفسها.' },
    },
  },
  {
    from: 'jeddah', to: 'dammam',
    en: {
      region: 'the Eastern Province',
      why: 'Jeddah–Dammam links the Red Sea and Gulf coasts and is our longest regular route. It is used by people transferring between the two port cities for work and by Eastern Province buyers of cars from Jeddah showrooms.',
      areas: 'We collect anywhere in Jeddah and deliver to Dammam, Al Khobar, Dhahran, Qatif or Jubail.',
      extraQ: { q: 'Can you also stop in Riyadh on the way?', a: 'Yes. The route passes through Riyadh, so we can collect or deliver a car there on the same trip if you need it.' },
    },
    ar: {
      region: 'المنطقة الشرقية',
      why: 'خط جدة–الدمام يربط ساحل البحر الأحمر بساحل الخليج، وهو أطول خطوطنا المنتظمة. يطلبه المنتقلون للعمل بين المدينتين، وأهل الشرقية الذين يشترون سيارات من معارض جدة.',
      areas: 'نستلم من أي مكان في جدة ونسلّم في الدمام أو الخبر أو الظهران أو القطيف أو الجبيل.',
      extraQ: { q: 'هل يمكن التوقف في الرياض على الطريق؟', a: 'نعم. الخط يمر بالرياض، فنستطيع استلام أو تسليم سيارة فيها ضمن الرحلة نفسها عند الحاجة.' },
    },
  },

  /* ---------- Wave 2 (new) ---------- */
  {
    from: 'dammam', to: 'jeddah',
    en: {
      region: 'Makkah Province on the Red Sea coast',
      why: 'Families relocating from the Eastern Province to the west coast, employees transferred to Jeddah, and sellers delivering a car to a buyer in Jeddah use this coast-to-coast route.',
      areas: 'We collect from Dammam, Al Khobar, Dhahran, Qatif or Jubail and deliver anywhere in Jeddah, including Obhur, Al Shati and the south of the city.',
      extraQ: { q: 'Can you deliver to Makkah instead of Jeddah?', a: 'Yes. Makkah is close to Jeddah, so we can deliver there on the same trip. Ask for the price to your exact address.' },
    },
    ar: {
      region: 'منطقة مكة المكرمة على ساحل البحر الأحمر',
      why: 'تستخدم هذا الخط بين الساحلين العائلات المنتقلة من الشرقية إلى الغربية، والموظفون المنقولون إلى جدة، ومن باع سيارته لمشترٍ في جدة ويريد توصيلها إليه.',
      areas: 'نستلم من الدمام أو الخبر أو الظهران أو القطيف أو الجبيل، ونسلّم في أي مكان في جدة، من أبحر والشاطئ إلى جنوب المدينة.',
      extraQ: { q: 'هل يمكن التسليم في مكة بدلاً من جدة؟', a: 'نعم. مكة قريبة من جدة، فنسلّم فيها ضمن الرحلة نفسها. اسألنا عن السعر لعنوانك بالضبط.' },
    },
  },
  {
    from: 'qassim', to: 'riyadh',
    en: {
      region: 'the centre of the Kingdom',
      why: 'One of our shortest intercity trips. Students and employees from Buraydah and Unaizah who live in the capital use it, and so do people who buy a car in Qassim and want it delivered to Riyadh.',
      areas: 'We collect from Buraydah, Unaizah, Ar Rass, Al Bukayriyah and other Qassim towns, and deliver to any district in Riyadh.',
      extraQ: { q: 'Do you collect from Unaizah and Ar Rass, not only Buraydah?', a: 'Yes. We collect from any town in Qassim. The price is confirmed for your pickup address.' },
    },
    ar: {
      region: 'وسط المملكة',
      why: 'من أقصر رحلاتنا بين المدن. يطلبها الطلاب والموظفون من بريدة وعنيزة المقيمون في العاصمة، ومن يشتري سيارة من القصيم ويريد توصيلها إلى الرياض.',
      areas: 'نستلم من بريدة وعنيزة والرس والبكيرية وبقية مدن القصيم، ونسلّم في أي حي في الرياض.',
      extraQ: { q: 'هل تستلمون من عنيزة والرس وليس بريدة فقط؟', a: 'نعم. نستلم من أي مدينة في القصيم، ونؤكد السعر لعنوان الاستلام بالضبط.' },
    },
  },
  {
    from: 'abha', to: 'riyadh',
    en: {
      region: 'the centre of the Kingdom',
      why: 'Families returning to the capital after a summer in Asir, employees transferred from Khamis Mushait, and students moving to Riyadh use this route instead of the long drive north.',
      areas: 'We collect from Abha, Khamis Mushait, Ahad Rafidah and nearby Asir towns, and deliver door to door anywhere in Riyadh.',
      extraQ: { q: 'Can you collect from Khamis Mushait?', a: 'Yes. Khamis Mushait is next to Abha, so pickup there is on the same route.' },
    },
    ar: {
      region: 'وسط المملكة',
      why: 'تستخدم هذا الخط العائلات العائدة إلى العاصمة بعد صيف في عسير، والموظفون المنقولون من خميس مشيط، والطلاب المنتقلون إلى الرياض بدلاً من القيادة الطويلة شمالاً.',
      areas: 'نستلم من أبها وخميس مشيط وأحد رفيدة ومدن عسير المجاورة، ونسلّم من الباب إلى الباب في أي مكان في الرياض.',
      extraQ: { q: 'هل تستلمون من خميس مشيط؟', a: 'نعم. خميس مشيط بجوار أبها، فالاستلام منها على الخط نفسه.' },
    },
  },
  {
    from: 'riyadh', to: 'tabuk',
    en: {
      region: 'Tabuk Province in the north-west',
      why: 'Tabuk is one of our longest routes. Employees moving to Tabuk for work, families transferred to the north-west, and buyers sending a car from a Riyadh showroom all use it.',
      areas: 'We deliver to districts across Tabuk city, and to towns further out such as Duba and Haql on request.',
      extraQ: { q: 'Can you deliver beyond Tabuk city, for example to Duba or Haql?', a: 'Yes, on request. These towns are further from Tabuk city, so the price is confirmed for your exact address.' },
    },
    ar: {
      region: 'منطقة تبوك في شمال غرب المملكة',
      why: 'تبوك من أطول خطوطنا. يطلبه الموظفون المنتقلون للعمل في تبوك، والعائلات المنقولة إلى الشمال الغربي، ومن يرسل سيارة اشتراها من معارض الرياض.',
      areas: 'نسلّم في أحياء مدينة تبوك، وفي المدن الأبعد مثل ضباء وحقل عند الطلب.',
      extraQ: { q: 'هل تسلّمون خارج مدينة تبوك، مثل ضباء أو حقل؟', a: 'نعم، عند الطلب. هذه المدن أبعد عن مدينة تبوك، لذلك نؤكد السعر لعنوانك بالضبط.' },
    },
  },
  {
    from: 'riyadh', to: 'jazan',
    en: {
      region: 'Jazan Province in the far south-west',
      why: 'Employees transferred to Jazan, families moving south, and people sending a car from a Riyadh showroom to relatives in the province use this route.',
      areas: 'We deliver to Jazan city, Sabya, Abu Arish, Samtah and other towns across the province.',
      extraQ: { q: 'Do you deliver to Sabya and Abu Arish?', a: 'Yes. We deliver to any town in Jazan Province. The price is confirmed for your exact address.' },
    },
    ar: {
      region: 'منطقة جازان في أقصى جنوب غرب المملكة',
      why: 'يستخدم هذا الخط الموظفون المنقولون إلى جازان، والعائلات المنتقلة جنوباً، ومن يرسل سيارة من معارض الرياض إلى أقاربه في المنطقة.',
      areas: 'نسلّم في مدينة جازان وصبيا وأبو عريش وصامطة وبقية مدن المنطقة.',
      extraQ: { q: 'هل تسلّمون في صبيا وأبو عريش؟', a: 'نعم. نسلّم في أي مدينة في منطقة جازان، ونؤكد السعر لعنوانك بالضبط.' },
    },
  },
];

function build(spec: RouteSpec): RoutePage {
  const { from, to, en, ar } = spec;
  const row = priceRow(from, to);
  const { km } = row;
  const slug = `${from}-to-${to}`;
  const F = { en: cityName(from, 'en'), ar: cityName(from, 'ar') };
  const T = { en: cityName(to, 'en'), ar: cityName(to, 'ar') };
  const FF = { en: cityFull(from, 'en'), ar: cityFull(from, 'ar') };
  const TF = { en: cityFull(to, 'en'), ar: cityFull(to, 'ar') };

  const enTimeA = `The road distance is about ${km} km. We confirm the exact pickup and delivery time when you book and keep you updated on WhatsApp until the car arrives.`;
  const arTimeA = `المسافة نحو ${km} كم بالطريق البري. نحدد لك موعد الاستلام والتسليم بالضبط عند الحجز، ونبقيك على اطلاع عبر واتساب حتى تصل السيارة.`;
  const enPriceA = 'There is no fixed price list: the price depends on the type of car and the exact pickup and delivery addresses. Send them on WhatsApp or use the form above and we reply with a fixed price before you book.';
  const arPriceA = 'لا يوجد سعر ثابت للمسار، فالسعر يعتمد على نوع السيارة وعنواني الاستلام والتسليم. أرسلها لنا عبر واتساب أو من النموذج أعلاه ونرد عليك بسعر ثابت قبل الحجز.';

  const enDesc = `Car shipping from ${F.en} to ${T.en} by hydraulic flatbed, door to door and insured. About ${km} km, price before we move. Call ${PHONE}.`;
  const arDesc = `شحن ونقل سيارتك من ${F.ar} إلى ${T.ar} بسطحة هيدروليك، من الباب إلى الباب ومؤمَّن، المسافة ${km} كم وسعر واضح قبل التحرك. اتصل ${PHONE}.`;

  return {
    slug,
    icon: 'path',
    from,
    to,
    km,
    en: {
      name: `${F.en} → ${T.en}`,
      short: `About ${km} km, door-to-door on a hydraulic flatbed.`,
      title: `Car Transport ${F.en} to ${T.en} by Flatbed | Instant Quote`,
      description: enDesc,
      h1: `Car Transport from ${FF.en} to ${TF.en}`,
      lead: `Satha Hydraulic Towing is a car transport company moving cars from ${FF.en} to ${TF.en}, in ${en.region}, on a hydraulic flatbed. The trip is about ${km} km. We collect from your door in ${FF.en}, strap the car at all four wheels and deliver it to the address you choose in ${TF.en}. ${en.why}`,
      sections: [
        { h: `Pickup and delivery areas`, p: [en.areas] },
        {
          h: 'What to prepare',
          list: [
            'The vehicle registration (istimara) and a copy of your ID',
            'Remove valuables and loose items from the car',
            `The name and phone number of the person receiving the car in ${TF.en}`,
          ],
        },
      ],
      faqs: [
        { q: `How much does it cost to move a car from ${F.en} to ${T.en}?`, a: enPriceA },
        { q: `How long does car shipping from ${F.en} to ${T.en} take?`, a: enTimeA },
        en.extraQ,
        { q: 'Is my car insured during the trip?', a: 'Yes. We are a registered company with goods-in-transit insurance, and the car is strapped at all four wheels for the whole trip.' },
      ],
      wa: `Hello Satha, I want to move my car from ${F.en} to ${T.en}.`,
    },
    ar: {
      name: `${F.ar} ← ${T.ar}`,
      short: `نحو ${km} كم، من الباب إلى الباب بسطحة هيدروليك.`,
      title: `نقل سيارات من ${F.ar} إلى ${T.ar} بسطحة هيدروليك | عرض سعر فوري`,
      description: arDesc,
      h1: `نقل سيارات من ${FF.ar} إلى ${TF.ar}`,
      lead: `سطحة هيدروليك شركة نقل سيارات تنقل سيارتك من ${FF.ar} إلى ${TF.ar} في ${ar.region}. المسافة نحو ${km} كم بالطريق البري. نستلم السيارة من بابك في ${FF.ar}، ونثبّتها من العجلات الأربع على سطحة هيدروليك، ونسلّمها إلى العنوان الذي تختاره في ${TF.ar}. ${ar.why}`,
      sections: [
        { h: 'مناطق الاستلام والتسليم', p: [ar.areas] },
        {
          h: 'ماذا تجهّز قبل النقل؟',
          list: [
            'استمارة السيارة وصورة من الهوية',
            'إخراج الأغراض الثمينة والأشياء غير المثبتة من السيارة',
            `اسم ورقم جوال الشخص الذي سيستلم السيارة في ${TF.ar}`,
          ],
        },
      ],
      faqs: [
        { q: `كم سعر نقل سيارة من ${F.ar} إلى ${T.ar}؟`, a: arPriceA },
        { q: `كم يستغرق شحن السيارة من ${F.ar} إلى ${T.ar}؟`, a: arTimeA },
        ar.extraQ,
        { q: 'هل سيارتي مؤمَّنة أثناء الرحلة؟', a: 'نعم. نحن منشأة مسجلة ولدينا تأمين على المركبات أثناء النقل، والسيارة مثبتة من العجلات الأربع طوال الرحلة.' },
      ],
      wa: `السلام عليكم، أريد نقل سيارتي من ${F.ar} إلى ${T.ar}.`,
    },
  };
}

export const ROUTES: RoutePage[] = SPECS.map(build);

export const routeBySlug = (slug: string) => ROUTES.find((r) => r.slug === slug);

/** Data for the home-page route tiles ("Daily trips from Riyadh"), in design order. */
export const ROUTE_TILES = ROUTES.filter((r) => r.from === 'riyadh' && ['jeddah', 'dammam', 'makkah', 'madinah', 'qassim', 'abha', 'hail'].includes(r.to))
  .map((r) => ({ slug: r.slug, km: r.km, en: cityName(r.to, 'en'), ar: cityFull(r.to, 'ar') }));
