import { PHONE } from './site';
import type { LandingPage } from './types';

interface AreaSpec {
  slug: string;
  en: { name: string; context: string; places: string; typical: string };
  ar: { name: string; context: string; places: string; typical: string };
}

const AREAS: AreaSpec[] = [
  {
    slug: 'north-riyadh',
    en: {
      name: 'North Riyadh',
      context: 'North Riyadh is the fastest-growing part of the city, with districts such as Al Malqa, Hittin, Al Narjis, Al Yasmin, Al Aqiq, Al Sahafa and Al Arid.',
      places: 'We regularly work along King Fahd Road, King Salman Road, Abu Bakr Al Siddiq Road, Anas Bin Malik Road and the Northern Ring Road.',
      typical: 'Typical jobs here are breakdowns in villa compounds and new residential streets, cars stuck in office and mall basements, and accident recoveries on the ring road.',
    },
    ar: {
      name: 'شمال الرياض',
      context: 'شمال الرياض هو الجزء الأسرع نمواً في المدينة، ويضم أحياء مثل الملقا وحطين والنرجس والياسمين والعقيق والصحافة والعارض.',
      places: 'نعمل بشكل يومي على طريق الملك فهد وطريق الملك سلمان وطريق أبي بكر الصديق وطريق أنس بن مالك والدائري الشمالي.',
      typical: 'أكثر الطلبات هنا أعطال في المجمعات السكنية والشوارع الجديدة، وسيارات عالقة في أقبية المكاتب والمولات، ونقل سيارات الحوادث من الدائري.',
    },
  },
  {
    slug: 'al-olaya',
    en: {
      name: 'Al Olaya',
      context: 'Al Olaya is Riyadh’s central business district, home to Kingdom Centre, Al Faisaliah Tower and the busy Olaya Street and King Fahd Road corridor.',
      places: 'We know the tower car parks, hotel entrances and one-way service roads around Olaya Street, Tahlia Street (Prince Mohammed bin Abdulaziz Road) and King Fahd Road.',
      typical: 'Most calls here are cars that won’t start in underground car parks, breakdowns in heavy traffic and luxury cars that need to go to an agency workshop.',
    },
    ar: {
      name: 'العليا',
      context: 'العليا هي قلب الرياض التجاري، وفيها برج المملكة وبرج الفيصلية وشارع العليا وطريق الملك فهد المزدحمان.',
      places: 'نعرف مواقف الأبراج ومداخل الفنادق وطرق الخدمة حول شارع العليا وشارع التحلية (طريق الأمير محمد بن عبدالعزيز) وطريق الملك فهد.',
      typical: 'أغلب الطلبات هنا سيارات لا تشتغل في المواقف تحت الأرض، وأعطال وسط الزحام، وسيارات فاخرة تحتاج النقل إلى ورشة الوكالة.',
    },
  },
  {
    slug: 'al-malaz',
    en: {
      name: 'Al Malaz',
      context: 'Al Malaz is one of Riyadh’s established central-east districts, known for King Abdullah Park and its busy residential and commercial streets.',
      places: 'We cover the streets around King Abdullah Park, Salah Al Din Al Ayyubi Road (Siteen Street) and the roads connecting Al Malaz with Al Olaya and the Eastern Ring Road.',
      typical: 'Calls here are mostly breakdowns in narrow residential streets, older cars that need a workshop, and cars moving from Al Malaz to the industrial areas for repair.',
    },
    ar: {
      name: 'الملز',
      context: 'الملز من أحياء الرياض العريقة في وسط وشرق المدينة، ويشتهر بمنتزه الملك عبدالله وشوارعه السكنية والتجارية المزدحمة.',
      places: 'نغطي الشوارع حول منتزه الملك عبدالله وطريق صلاح الدين الأيوبي (شارع الستين) والطرق التي تربط الملز بالعليا والدائري الشرقي.',
      typical: 'أغلب الطلبات هنا أعطال في الشوارع السكنية الضيقة، وسيارات قديمة تحتاج ورشة، ونقل سيارات من الملز إلى المناطق الصناعية للإصلاح.',
    },
  },
  {
    slug: 'al-naseem',
    en: {
      name: 'Al Naseem',
      context: 'Al Naseem is a large, densely populated residential district in east Riyadh, close to the Eastern Ring Road.',
      places: 'We work across east and west Al Naseem and the surrounding roads, including the Eastern Ring Road and the routes towards Khurais Road.',
      typical: 'Most jobs here are home pickups of cars that won’t start, breakdowns on the Eastern Ring Road and cars going to workshops in the industrial areas.',
    },
    ar: {
      name: 'النسيم',
      context: 'النسيم حي سكني كبير ومكتظ في شرق الرياض، قريب من الدائري الشرقي.',
      places: 'نعمل في النسيم الشرقي والغربي والطرق المحيطة، ومنها الدائري الشرقي والطرق المؤدية إلى طريق خريص.',
      typical: 'أغلب الطلبات هنا نقل سيارات لا تشتغل من أمام المنازل، وأعطال على الدائري الشرقي، ونقل سيارات إلى ورش المناطق الصناعية.',
    },
  },
  {
    slug: 'al-yasmin',
    en: {
      name: 'Al Yasmin',
      context: 'Al Yasmin is a modern residential district in north Riyadh, full of villas, new apartment buildings and family compounds.',
      places: 'We cover Al Yasmin and its neighbours Al Narjis, Al Malqa and Al Sahafa, along Anas Bin Malik Road, King Salman Road and Abu Bakr Al Siddiq Road.',
      typical: 'Typical jobs are cars that won’t start at home, new cars going to the agency for warranty work, and luxury and electric cars that need a careful flatbed.',
    },
    ar: {
      name: 'الياسمين',
      context: 'الياسمين حي سكني حديث في شمال الرياض، مليء بالفلل والعمائر الجديدة والمجمعات العائلية.',
      places: 'نغطي الياسمين والأحياء المجاورة مثل النرجس والملقا والصحافة، على طريق أنس بن مالك وطريق الملك سلمان وطريق أبي بكر الصديق.',
      typical: 'أغلب الطلبات سيارات لا تشتغل أمام المنزل، وسيارات جديدة تذهب إلى الوكالة للضمان، وسيارات فاخرة وكهربائية تحتاج سطحة بعناية.',
    },
  },
  {
    slug: 'al-sulay',
    en: {
      name: 'Al Sulay',
      context: 'Al Sulay in south-east Riyadh is a major industrial and workshop area, with many repair shops, spare-parts yards and car scrapyards.',
      places: 'We move cars into and out of Al Sulay every day, from all over Riyadh and from other cities, and know the workshop streets and yard entrances well.',
      typical: 'Most jobs here are cars going to or from repair workshops, scrapped cars going to the yards, and cars bought for parts that need moving across the city.',
    },
    ar: {
      name: 'السلي',
      context: 'السلي في جنوب شرق الرياض منطقة صناعية وورش رئيسية، فيها كثير من ورش الإصلاح ومحلات قطع الغيار والتشاليح.',
      places: 'ننقل السيارات من وإلى السلي يومياً، من جميع أنحاء الرياض ومن المدن الأخرى، ونعرف شوارع الورش ومداخل التشاليح جيداً.',
      typical: 'أغلب الطلبات هنا نقل سيارات من وإلى الورش، وسيارات تالفة إلى التشاليح، وسيارات مشتراة لقطع الغيار تحتاج النقل عبر المدينة.',
    },
  },
  {
    slug: 'diriyah',
    en: {
      name: 'Diriyah',
      context: 'Diriyah lies on the north-western edge of Riyadh along Wadi Hanifah, home to the historic At-Turaif district and fast-growing residential areas.',
      places: 'We cover Diriyah and the roads linking it to north and west Riyadh, including the routes towards King Khalid Road and the Northern Ring Road.',
      typical: 'Typical jobs are visitor cars that break down around the historic area and restaurants, home pickups in residential neighbourhoods and transfers to workshops in the city.',
    },
    ar: {
      name: 'الدرعية',
      context: 'تقع الدرعية على الطرف الشمالي الغربي للرياض على وادي حنيفة، وفيها حي الطريف التاريخي وأحياء سكنية سريعة النمو.',
      places: 'نغطي الدرعية والطرق التي تربطها بشمال وغرب الرياض، ومنها الطرق المؤدية إلى طريق الملك خالد والدائري الشمالي.',
      typical: 'أغلب الطلبات سيارات الزوار التي تتعطل حول المنطقة التاريخية والمطاعم، ونقل السيارات من الأحياء السكنية، والنقل إلى ورش المدينة.',
    },
  },
  {
    slug: 'al-kharj',
    en: {
      name: 'Al Kharj',
      context: 'Al Kharj is a city south-east of Riyadh, connected to the capital by the Al Kharj Road and home to large farms, factories and residential areas.',
      places: 'We tow inside Al Kharj and between Al Kharj and Riyadh, including breakdowns and accidents along the Al Kharj Road.',
      typical: 'Common jobs are cars going from Al Kharj to Riyadh workshops and agencies, highway breakdowns on the Al Kharj Road and pickups from farms and industrial sites.',
    },
    ar: {
      name: 'الخرج',
      context: 'الخرج مدينة تقع جنوب شرق الرياض، يربطها بالعاصمة طريق الخرج، وفيها مزارع ومصانع وأحياء سكنية كبيرة.',
      places: 'نعمل داخل الخرج وبين الخرج والرياض، ومنها الأعطال والحوادث على طريق الخرج.',
      typical: 'أكثر الطلبات نقل السيارات من الخرج إلى ورش ووكالات الرياض، وأعطال طريق الخرج، والاستلام من المزارع والمواقع الصناعية.',
    },
  },
];

export const AREA_PAGES: LandingPage[] = AREAS.map(({ slug, en, ar }) => ({
  slug,
  icon: 'map-pin',
  en: {
    name: en.name,
    short: `24/7 flatbed towing in ${en.name}.`,
    title: `Tow Truck & Flatbed Towing in ${en.name}, Riyadh 24/7 | Satha`,
    description: `Need a tow truck in ${en.name}? 24/7 hydraulic flatbed towing, accident recovery and breakdown help. Price agreed before we move. Call ${PHONE}.`,
    h1: `Tow truck in ${en.name}, Riyadh: 24/7 flatbed towing`,
    lead: `${en.context} Our hydraulic flatbeds are stationed across Riyadh around the clock, so help is never far away.`,
    sections: [
      { h: `Where we work in ${en.name}`, p: [en.places] },
      { h: `Common calls in ${en.name}`, p: [en.typical] },
      {
        h: `Services available in ${en.name}`,
        list: [
          'Hydraulic flatbed towing for any car',
          'Accident recovery to Najm, an estimation centre, the workshop or your home',
          'Breakdown towing from streets, basements and highways',
          'Roadside help: battery, flat tyre and fuel',
          'Car transport to any Saudi city',
        ],
      },
      {
        h: 'Get a tow in three steps',
        list: [
          `Call ${PHONE} or WhatsApp us.`,
          'Send your location pin. We confirm the price and arrival time.',
          'We load your car on the flatbed and deliver it where you choose.',
        ],
      },
    ],
    faqs: [
      { q: `How fast can a tow truck reach me in ${en.name}?`, a: 'The average arrival inside Riyadh is about 30 minutes, depending on traffic. We confirm the exact time on the phone before we set off.' },
      { q: `Do you work in ${en.name} at night?`, a: 'Yes. We work 24 hours a day, 7 days a week, including weekends and holidays.' },
      { q: 'How is the price calculated?', a: 'By the distance, the type of car and where it is parked. You get a fixed price on the phone before we move.' },
    ],
    wa: `Hello Satha, I need a tow truck in ${en.name}.`,
  },
  ar: {
    name: ar.name,
    short: `سطحة هيدروليك 24 ساعة في ${ar.name}.`,
    title: `سطحة ${ar.name} الرياض 24 ساعة | سحب ونقل سيارات`,
    description: `تحتاج سطحة في ${ar.name}؟ سطحة هيدروليك على مدار 24 ساعة لسحب السيارات المعطلة ونقل سيارات الحوادث. سعر قبل أن نتحرك. اتصل ${PHONE}.`,
    h1: `سطحة في ${ar.name} بالرياض 24 ساعة`,
    lead: `${ar.context} سطحاتنا الهيدروليك منتشرة في أنحاء الرياض على مدار الساعة، لذلك المساعدة دائماً قريبة منك.`,
    sections: [
      { h: `أين نعمل في ${ar.name}؟`, p: [ar.places] },
      { h: `أكثر الطلبات في ${ar.name}`, p: [ar.typical] },
      {
        h: `خدماتنا في ${ar.name}`,
        list: [
          'سطحة هيدروليك لجميع أنواع السيارات',
          'نقل سيارات الحوادث إلى نجم أو التقديرات أو الورشة أو المنزل',
          'سحب السيارات المعطلة من الشوارع والأقبية والطرق السريعة',
          'مساعدة على الطريق: بطارية، بنشر، ووقود',
          'نقل السيارات إلى أي مدينة في المملكة',
        ],
      },
      {
        h: 'اطلب السطحة في ثلاث خطوات',
        list: [
          `اتصل على ${PHONE} أو راسلنا واتساب.`,
          'أرسل موقعك، ونؤكد لك السعر ووقت الوصول.',
          'نحمّل سيارتك على السطحة ونوصلها حيث تريد.',
        ],
      },
    ],
    faqs: [
      { q: `كم تحتاج السطحة للوصول إليّ في ${ar.name}؟`, a: 'متوسط الوصول داخل الرياض نحو 30 دقيقة حسب الزحام، ونؤكد لك الوقت الدقيق هاتفياً قبل أن نتحرك.' },
      { q: `هل تعملون في ${ar.name} ليلاً؟`, a: 'نعم. نعمل 24 ساعة يومياً، 7 أيام في الأسبوع، بما في ذلك العطل والأعياد.' },
      { q: 'كيف يُحسب سعر السطحة؟', a: 'حسب المسافة ونوع السيارة ومكان وقوفها، وتحصل على سعر ثابت هاتفياً قبل أن نتحرك.' },
    ],
    wa: `السلام عليكم، أحتاج سطحة في ${ar.name}.`,
  },
}));

/** Districts shown as chips on the home page, in design order. */
export const HOME_DISTRICT_SLUGS = ['north-riyadh', 'al-olaya', 'al-malaz', 'al-naseem', 'al-yasmin', 'al-sulay', 'diriyah', 'al-kharj'];

/** Other districts we serve (listed on the areas hub, no dedicated page yet). */
export const MORE_DISTRICTS = {
  en: ['Al Narjis', 'Al Malqa', 'Hittin', 'Al Arid', 'Al Rabi', 'Ishbiliyah', 'Granada', 'Al Nakheel', 'Al Hamra', 'Al Qadisiyah', 'Al Rawdah', 'Al Khaleej', 'Al Andalus', 'Al Yarmuk', 'Al Munsiyah', 'Al Rimal', 'Al Nahdah', 'Umm Al Hamam', 'Al Ammariyah', 'Irqah', 'Al Sulimaniyah', 'Old Industrial Area', 'Al Muzahimiyah'],
  ar: ['النرجس', 'الملقا', 'حطين', 'العارض', 'الربيع', 'إشبيلية', 'غرناطة', 'النخيل', 'الحمراء', 'القادسية', 'الروضة', 'الخليج', 'الأندلس', 'اليرموك', 'المونسية', 'الرمال', 'النهضة', 'أم الحمام', 'العمارية', 'عرقة', 'السليمانية', 'الصناعية القديمة', 'المزاحمية'],
};
