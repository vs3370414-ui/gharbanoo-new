import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'hi';

const STORAGE_KEY = 'gb-lang';

const en = {
  navHow: 'How it works',
  navGuide: 'Building guide',
  navFaq: 'FAQ',
  navContact: 'Contact',
  getApp: 'Get the app',
  langSwitch: 'हिंदी',
  langSwitchLabel: 'हिंदी में पढ़ें',

  heroEyebrow: 'For families building their first home',
  heroTitle: 'Build your home with people you can trust.',
  heroLead:
    'Find masons, contractors, plumbers, electricians and building-material shops near you. See their work and reviews, then call them directly. Free, with no commission.',
  heroMeta: ['Free for homeowners', 'No middleman', 'Hindi & English'],
  playSmall: 'GET IT ON',
  playBig: 'Google Play',

  worryEyebrow: 'Building a home for the first time?',
  worryTitle: 'We know the worries. GharBanoo is made for them.',
  worries: [
    {
      q: '“Who can I trust with my savings?”',
      a: 'See each expert’s past work, experience and reviews from other homeowners before you call. Our team checks every profile and review before it goes live.',
    },
    {
      q: '“What should be done first?”',
      a: 'Follow a simple step-by-step building guide, from architect to painter, and find the right local expert for each step.',
    },
    {
      q: '“Am I paying too much?”',
      a: 'Compare experts and their visit fees side by side. You talk and pay them directly, so no one adds a commission in between.',
    },
  ],

  guideEyebrow: 'Ghar ka pehla kadam',
  guideTitle: 'The right order to build your house',
  guideLead:
    'Doing things in the wrong order costs money. The GharBanoo app walks you through every step and shows trusted local experts for each one.',
  guideSteps: [
    ['Architect', 'Floor plans, 2D/3D layouts and the blueprint.'],
    ['Civil engineer', 'Checks structure, columns and site approvals.'],
    ['Contractor', 'Foundation, slab, brickwork and plastering.'],
    ['Mason', 'Bricks, walls, cement plaster and concrete work.'],
    ['Plumber', 'Concealed pipelines, drainage and water tank.'],
    ['Electrician', 'Conduits, switchboards and copper wiring.'],
    ['Tile setter', 'Floor tiles, bathroom marble and kitchen counter.'],
    ['Carpenter', 'Door frames, windows, cabinets and wardrobes.'],
    ['Painter', 'Putty, primer and final interior/exterior coats.'],
    ['Material shops', 'Cement, steel, bricks, paint, pipes and cables.'],
  ],
  guideStep: 'Step',
  guideCta: 'Open the full guide in the app',

  howEyebrow: 'How it works',
  howTitle: 'From search to site visit in minutes',
  howSteps: [
    ['Install GharBanoo', 'Free on Google Play. Choose “I need services / material”.'],
    ['Set your area', 'Enter your pincode to see experts and shops near you.'],
    ['Compare', 'Check work photos, experience, ratings and visit fees.'],
    ['Call or WhatsApp', 'Talk directly and fix the visit. No middleman, no commission.'],
  ],

  shotsTitle: 'A look inside the app',
  shots: [
    'Everything for your home in one place',
    'Step-by-step building guide',
    'Compare experts side by side',
  ],

  trustTitle: 'Why homeowners choose GharBanoo',
  trust: [
    ['Free for you', 'Homeowners never pay to use GharBanoo.'],
    ['Zero commission', 'You deal with the expert or shop directly, at fair rates.'],
    ['Checked by our team', 'Profiles and reviews are reviewed before they appear. Look for the verified badge.'],
    ['Simple sign-in', 'Browse without an account. Sign in with Google only when you need to.'],
  ],

  faqTitle: 'Questions homeowners ask',
  faqs: [
    ['Is GharBanoo really free?', 'Yes. GharBanoo is free for homeowners, and we take no commission from experts or shops either.'],
    ['Do I pay through the app?', 'No. You agree on the work and the price with the expert or shop yourself, and pay them directly. We recommend agreeing on the price before work starts.'],
    ['How are experts checked?', 'Every expert and shop profile, and every review, is checked by our team before it is shown. Profiles we have verified carry a verified badge.'],
    ['Is it available in my area?', 'Open the app and set your pincode to see who is near you. New local experts and shops are joining all the time.'],
    ['Do I need to sign in?', 'No. You can browse as a guest. Sign in with your Google account to save favourites or write a review.'],
    ['Is there an iPhone app?', 'Not yet. GharBanoo is on Android through Google Play for now.'],
  ],

  proTitle: 'Are you a mason, contractor or material shop?',
  proText: 'Show your work to homeowners near you and get direct calls. Listing is free and we take no commission.',
  proCta: 'Join free on the app',

  finalTitle: 'Start your home the right way.',
  finalText: 'Download GharBanoo free and find trusted local experts today.',

  contactTitle: 'Have a question? Talk to us.',
  contactText: 'We reply on WhatsApp and email.',
  whatsapp: 'Chat on WhatsApp',
  whatsappMessage: 'Hi GharBanoo, I have a question about building my home.',
  email: 'Email us',

  stickyTitle: 'GharBanoo',
  stickySub: 'Free on Google Play',
  stickyCta: 'Install',

  footerTagline: 'Ghar ka pehla kadam',
  footerCompany: 'GharBanoo Technologies Private Limited, India',
  privacy: 'Privacy policy',
  terms: 'Terms of use',
  deleteAccount: 'Delete account',
  rights: 'All rights reserved.',
};

export type Copy = typeof en;

const hi: Copy = {
  navHow: 'कैसे काम करता है',
  navGuide: 'निर्माण गाइड',
  navFaq: 'सवाल-जवाब',
  navContact: 'संपर्क',
  getApp: 'ऐप डाउनलोड करें',
  langSwitch: 'English',
  langSwitchLabel: 'Read in English',

  heroEyebrow: 'पहली बार घर बनाने वाले परिवारों के लिए',
  heroTitle: 'भरोसेमंद लोगों के साथ अपना घर बनाइए।',
  heroLead:
    'अपने पास के राजमिस्त्री, ठेकेदार, प्लंबर, बिजली कारीगर और मटेरियल की दुकानें खोजें। उनका काम और रिव्यू देखें, फिर सीधे कॉल करें। बिल्कुल मुफ़्त, कोई कमीशन नहीं।',
  heroMeta: ['घर मालिकों के लिए मुफ़्त', 'कोई बिचौलिया नहीं', 'हिंदी और English'],
  playSmall: 'डाउनलोड करें',
  playBig: 'Google Play',

  worryEyebrow: 'पहली बार घर बना रहे हैं?',
  worryTitle: 'हम आपकी चिंताएं समझते हैं। GharBanoo इन्हीं के लिए बना है।',
  worries: [
    {
      q: '“अपनी जमा-पूंजी किस पर भरोसा करके दूं?”',
      a: 'कॉल करने से पहले हर एक्सपर्ट का पुराना काम, अनुभव और दूसरे घर मालिकों के रिव्यू देखें। हर प्रोफ़ाइल और रिव्यू हमारी टीम जांचती है, फिर ही दिखाया जाता है।',
    },
    {
      q: '“पहले कौन-सा काम कराएं?”',
      a: 'आर्किटेक्ट से पेंटर तक, आसान चरण-दर-चरण गाइड देखें और हर चरण के लिए सही लोकल एक्सपर्ट खोजें।',
    },
    {
      q: '“कहीं ज़्यादा पैसे तो नहीं दे रहे?”',
      a: 'एक्सपर्ट्स और उनकी विज़िट फीस की आपस में तुलना करें। बात और भुगतान सीधे उनसे होता है, बीच में कोई कमीशन नहीं।',
    },
  ],

  guideEyebrow: 'घर का पहला कदम',
  guideTitle: 'घर बनाने का सही क्रम',
  guideLead:
    'गलत क्रम में काम कराने से पैसा बर्बाद होता है। GharBanoo ऐप हर चरण समझाता है और हर काम के लिए भरोसेमंद लोकल एक्सपर्ट दिखाता है।',
  guideSteps: [
    ['आर्किटेक्ट', 'फ्लोर प्लान, 2D/3D नक्शा और घर का ब्लूप्रिंट।'],
    ['सिविल इंजीनियर', 'मकान की मजबूती, पिलर और निर्माण सुरक्षा की जांच।'],
    ['ठेकेदार', 'नींव, लेंटर, दीवारें उठाना और प्लास्टर।'],
    ['राजमिस्त्री', 'ईंटों की चिनाई, सीमेंट प्लास्टर और कंक्रीट का काम।'],
    ['प्लंबर', 'पानी की पाइपलाइन, सीवरेज लाइन और टंकी फिटिंग।'],
    ['बिजली कारीगर', 'बिजली पाइप, बोर्ड और तांबे की वायरिंग।'],
    ['टाइल मिस्त्री', 'फर्श टाइल, बाथरूम संगमरमर और किचन प्लेटफार्म।'],
    ['बढ़ई', 'चौखट, दरवाजे, खिड़कियां और अलमारी।'],
    ['पेंटर', 'पुट्टी, प्राइमर और अंदर-बाहर की पेंटिंग।'],
    ['मटेरियल की दुकानें', 'सीमेंट, सरिया, ईंट, पेंट, पाइप और तार।'],
  ],
  guideStep: 'चरण',
  guideCta: 'पूरी गाइड ऐप में देखें',

  howEyebrow: 'कैसे काम करता है',
  howTitle: 'खोज से साइट विज़िट तक, कुछ ही मिनटों में',
  howSteps: [
    ['GharBanoo इंस्टॉल करें', 'Google Play पर मुफ़्त। “मुझे सेवा / मटेरियल चाहिए” चुनें।'],
    ['अपना इलाका चुनें', 'पिनकोड डालें और पास के एक्सपर्ट व दुकानें देखें।'],
    ['तुलना करें', 'काम की फोटो, अनुभव, रेटिंग और विज़िट फीस देखें।'],
    ['कॉल या WhatsApp करें', 'सीधे बात करें और विज़िट तय करें। न बिचौलिया, न कमीशन।'],
  ],

  shotsTitle: 'ऐप की एक झलक',
  shots: [
    'घर बनाने की हर ज़रूरत, एक जगह',
    'चरण-दर-चरण निर्माण गाइड',
    'एक्सपर्ट्स की आपस में तुलना करें',
  ],

  trustTitle: 'घर मालिक GharBanoo क्यों चुनते हैं',
  trust: [
    ['आपके लिए मुफ़्त', 'घर मालिकों को GharBanoo के लिए कभी पैसे नहीं देने होते।'],
    ['शून्य कमीशन', 'एक्सपर्ट या दुकान से सीधे, उचित दाम पर बात करें।'],
    ['हमारी टीम द्वारा जांचा गया', 'प्रोफ़ाइल और रिव्यू दिखने से पहले जांचे जाते हैं। वेरिफ़ाइड बैज देखें।'],
    ['आसान साइन-इन', 'बिना अकाउंट के देखें। ज़रूरत हो तभी Google से साइन-इन करें।'],
  ],

  faqTitle: 'घर मालिकों के सवाल',
  faqs: [
    ['क्या GharBanoo सच में मुफ़्त है?', 'हां। घर मालिकों के लिए GharBanoo मुफ़्त है, और हम एक्सपर्ट या दुकानों से भी कोई कमीशन नहीं लेते।'],
    ['क्या भुगतान ऐप से होता है?', 'नहीं। काम और दाम आप खुद एक्सपर्ट या दुकान से तय करते हैं और सीधे उन्हें भुगतान करते हैं। काम शुरू होने से पहले दाम तय कर लें।'],
    ['एक्सपर्ट्स की जांच कैसे होती है?', 'हर एक्सपर्ट और दुकान की प्रोफ़ाइल, और हर रिव्यू, दिखाने से पहले हमारी टीम जांचती है। जांची गई प्रोफ़ाइल पर वेरिफ़ाइड बैज होता है।'],
    ['क्या मेरे इलाके में उपलब्ध है?', 'ऐप खोलें और पिनकोड डालें, पास के लोग दिख जाएंगे। नए लोकल एक्सपर्ट और दुकानें लगातार जुड़ रहे हैं।'],
    ['क्या साइन-इन ज़रूरी है?', 'नहीं। आप मेहमान के रूप में देख सकते हैं। पसंदीदा सेव करने या रिव्यू लिखने के लिए Google अकाउंट से साइन-इन करें।'],
    ['क्या iPhone ऐप है?', 'अभी नहीं। फ़िलहाल GharBanoo, Google Play पर Android के लिए है।'],
  ],

  proTitle: 'क्या आप राजमिस्त्री, ठेकेदार या मटेरियल दुकानदार हैं?',
  proText: 'अपने पास के घर मालिकों को अपना काम दिखाएं और सीधे कॉल पाएं। लिस्टिंग मुफ़्त है, कोई कमीशन नहीं।',
  proCta: 'ऐप पर मुफ़्त जुड़ें',

  finalTitle: 'अपने घर की शुरुआत सही तरीके से करें।',
  finalText: 'GharBanoo मुफ़्त डाउनलोड करें और आज ही भरोसेमंद लोकल एक्सपर्ट खोजें।',

  contactTitle: 'कोई सवाल है? हमसे बात करें।',
  contactText: 'हम WhatsApp और ईमेल पर जवाब देते हैं।',
  whatsapp: 'WhatsApp पर बात करें',
  whatsappMessage: 'नमस्ते GharBanoo, मुझे घर बनाने के बारे में एक सवाल पूछना है।',
  email: 'ईमेल करें',

  stickyTitle: 'GharBanoo',
  stickySub: 'Google Play पर मुफ़्त',
  stickyCta: 'इंस्टॉल',

  footerTagline: 'घर का पहला कदम',
  footerCompany: 'GharBanoo Technologies Private Limited, भारत',
  privacy: 'प्राइवेसी पॉलिसी',
  terms: 'उपयोग की शर्तें',
  deleteAccount: 'अकाउंट डिलीट करें',
  rights: 'सर्वाधिकार सुरक्षित।',
};

const copies: Record<Lang, Copy> = { en, hi };

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'hi') return saved;
  } catch {
    // Storage can be blocked; fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('hi') ? 'hi' : 'en';
}

const LangContext = createContext<{ lang: Lang; t: Copy; toggle: () => void }>({
  lang: 'en',
  t: en,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not critical: the choice just won't be remembered.
    }
  }, [lang]);

  const toggle = () => setLang(current => (current === 'en' ? 'hi' : 'en'));
  return <LangContext.Provider value={{ lang, t: copies[lang], toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
