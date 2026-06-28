import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GooglePlayButton } from '../components/GooglePlayButton';
import { 
  Home as HomeIcon, 
  Heart, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Phone, 
  MessageSquare,
  Quote,
  Star,
  MapPin,
  PenTool,
  HardHat,
  Droplet,
  Zap,
  Hammer,
  Paintbrush,
  Layers,
  Search,
  Users,
  Layout,
  Smartphone,
  CheckCircle2,
  Store
} from 'lucide-react';

export function Home() {
  const [miniForm, setMiniForm] = useState({ name: '', service: '', phone: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* SECTION 1 - HERO */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex flex-col gap-0.5 px-6 py-2 rounded-2xl bg-accent bg-opacity-100 text-dark shadow-sm border border-accent/20">
                <span className="text-sm font-bold">Now Live in Jhanjharpur, Bihar 🎉</span>
                <span className="text-[11px] font-bold opacity-70">अब झंझारपुर, बिहार में लाइव 🎉</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-heading font-bold text-dark leading-[1.1] tracking-tighter">
                <span className="block">Your Home. <span className="text-primary/50 text-[0.6em] font-medium ml-2">आपका घर।</span></span>
                <span className="block">Your Experts. <span className="text-primary/50 text-[0.6em] font-medium ml-2">आपके एक्सपर्ट्स।</span></span>
                <span className="block text-primary">Your Choice. <span className="text-primary/30 text-[0.6em] font-medium ml-2 uppercase">आपकी पसंद।</span></span>
              </motion.h1>
              
              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-lg text-gray-900 leading-relaxed max-w-xl font-medium">
                  Find and compare local material shops, contractors, plumbers, electricians, carpenters, painters and more — all in one place. Connect directly. Zero commission. Always free.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl italic">
                  लोकल मटेरियल दुकानें, कांट्रेक्टर्स, प्लंबर, इलेक्ट्रिशियन, कारपेंटर और बहुत कुछ खोजें। सीधे संपर्क करें। जीरो कमीशन। हमेशा मुफ्त।
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {[
                    { en: '🏪 Local Shops', hi: 'लोकल दुकानें' },
                    { en: '👷 Expert Consultation', hi: 'एक्सपर्ट सलाह' },
                    { en: '🔧 Home Services', hi: 'होम सर्विसेज' }
                  ].map((pill) => (
                    <div key={pill.en} className="flex flex-col px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-dark transition-all hover:border-accent">
                      <span className="text-sm font-bold">{pill.en}</span>
                      <span className="text-[10px] opacity-60 font-bold">{pill.hi}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { en: '🧱 Quality Materials', hi: 'अच्छी सामग्री' },
                    { en: '⚖️ Legal Help', hi: 'कानूनी मदद' },
                    { en: '🏘️ Real Estate', hi: 'रियल एस्टेट' }
                  ].map((pill) => (
                    <div key={pill.en} className="flex flex-col px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold">{pill.en}</span>
                        <span className="text-[8px] uppercase tracking-wider bg-gray-100 px-1 rounded">Soon</span>
                      </div>
                      <span className="text-[10px] opacity-60 font-bold">{pill.hi}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center">
                <Link to="/find-services" className="inline-flex flex-col items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl transition-all group active:scale-95 leading-tight">
                  <span className="text-lg flex items-center gap-2">Find Experts Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  <span className="text-xs opacity-80">एक्सपर्ट्स खोजें</span>
                </Link>
                <Link to="/find-shops" className="inline-flex flex-col items-center justify-center px-8 py-3 bg-accent text-dark font-black rounded-2xl shadow-lg shadow-accent/20 hover:bg-opacity-90 hover:shadow-xl transition-all active:scale-95 leading-tight">
                  <span className="text-lg">Find Local Shops</span>
                  <span className="text-xs opacity-70">दुकानें खोजें</span>
                </Link>
                <GooglePlayButton className="h-full" />
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium text-gray-400">
                  <div className="flex flex-col leading-tight">
                    <span className="flex items-center gap-1.5 text-gray-600 font-bold"><Check className="w-4 h-4 text-primary" /> Free to use</span>
                    <span className="text-[10px] pl-5.5 text-gray-400">इस्तेमाल के लिए मुफ्त</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="flex items-center gap-1.5 text-gray-600 font-bold"><Check className="w-4 h-4 text-primary" /> Zero commission</span>
                    <span className="text-[10px] pl-5.5 text-gray-400">जीरो कमीशन</span>
                  </div>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="flex items-center gap-1.5 text-dark font-bold">
                    <Check className="w-4 h-4 text-primary" /> 25+ verified experts in Jhanjharpur
                  </span>
                  <span className="text-[11px] pl-5.5 text-gray-400 font-medium">झंझारपुर में 25+ वेरिफाइड एक्सपर्ट्स</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square bg-red-50 rounded-full flex items-center justify-center animate-pulse duration-[4000ms]">
                <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-110"></div>
                <div className="absolute inset-0 border border-accent/20 rounded-full scale-125"></div>
                
                {/* Central Phone Mockup */}
                <div className="w-64 h-[500px] bg-dark rounded-[3rem] border-[8px] border-dark-900 shadow-2xl relative z-20 overflow-hidden ring-8 ring-white/10">
                  <div className="absolute top-0 inset-x-0 h-6 bg-dark z-30 flex justify-center">
                    <div className="w-20 h-4 bg-dark rounded-b-xl"></div>
                  </div>
                  <div className="p-4 pt-10 space-y-4">
                    <div className="w-full h-8 bg-gray-800 rounded-lg animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-2">
                       <div className="h-20 bg-primary/20 rounded-xl"></div>
                       <div className="h-20 bg-accent/20 rounded-xl"></div>
                    </div>
                    <div className="space-y-3">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="h-16 bg-gray-800/50 rounded-xl"></div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div 
                  initial={{ x: -20, y: -20, opacity: 0 }}
                  animate={{ x: -140, y: -80, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 w-52"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=100" alt="Provider" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Rakesh Kumar</h4>
                      <p className="text-[10px] text-primary font-bold">Civil Engineer</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-[10px] font-bold text-dark">4.9 (12)</span>
                    </div>
                    <button className="bg-primary text-white p-1.5 rounded-lg">
                      <Phone className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: 20, y: 0, opacity: 0 }}
                  animate={{ x: 120, y: 150, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 w-52"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&q=80&w=100" alt="Provider" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Arjun Mehto</h4>
                      <p className="text-[10px] text-primary font-bold">Expert Plumber</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-[10px] font-bold text-dark">4.8 (8)</span>
                    </div>
                    <button className="bg-primary text-white p-1.5 rounded-lg">
                      <Phone className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: 20, y: -20, opacity: 0 }}
                  animate={{ x: 140, y: -180, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 w-52"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Provider" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Suresh Jha</h4>
                      <p className="text-[10px] text-primary font-bold">Contractor</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-[10px] font-bold text-dark">5.0 (15)</span>
                    </div>
                    <button className="bg-primary text-white p-1.5 rounded-lg">
                      <Phone className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>

                {/* Local Shop Card */}
                <motion.div 
                  initial={{ x: -20, y: 20, opacity: 0 }}
                  animate={{ x: -150, y: 110, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 w-52"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg shrink-0 flex items-center justify-center border border-amber-100">
                      <Store className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Durga Hardware</h4>
                      <p className="text-[10px] text-primary font-bold">Cement & Hardware Store</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-[10px] font-bold text-dark">4.8 (32)</span>
                    </div>
                    <button className="bg-primary text-white p-1.5 rounded-lg">
                      <Phone className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PROBLEM SECTION */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark tracking-tight">
              Sound Familiar? <span className="text-primary/40 block md:inline text-[0.6em] font-medium md:ml-4">क्या आपको ये समस्याएं होती हैं?</span>
            </h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto font-medium">These are the problems every home owner in Jhanjharpur faces</p>
            <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">झंझारपुर में हर घर बनाने वाले को ये दिक्कतें आती हैं</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            {[
              { emoji: '😤', titleEn: 'Where do I find a reliable plumber?', titleHi: 'भरोसेमंद प्लंबर कहाँ मिलेगा?', descEn: 'You ask neighbours, get 2-3 numbers, no one picks up, or they overcharge', descHi: 'आप पड़ोसियों से पूछते हैं, 2-3 नंबर मिलते हैं, कोई फोन नहीं उठाता या ज्यादा पैसे मांगता है' },
              { emoji: '💸', titleEn: 'Am I being overcharged?', titleHi: 'क्या मुझसे ज्यादा पैसे लिए जा रहे हैं?', descEn: 'No way to compare prices. No way to know the market rate. You just have to trust blindly.', descHi: 'कीमतों की तुलना करने का कोई तरीका नहीं है। आपको बस आँख बंद करके ज़िक्र करना पड़ता है।' },
              { emoji: '📋', titleEn: 'Where to buy quality materials?', titleHi: 'अच्छी निर्माण सामग्री कहाँ से खरीदें?', descEn: 'Finding reliable local cement, paint, and hardware shops with fair prices is difficult.', descHi: 'उचित दामों पर विश्वसनीय सीमेंट, पेंट और हार्डवेयर की दुकान ढूंढना मुश्किल है।' },
              { emoji: '📸', titleEn: 'Show me your previous work', titleHi: 'अपना पिछला काम दिखाओ', descEn: 'Workers spend hours searching their gallery for photos. Often lose the customer.', descHi: 'कारीगर फोटो ढूंढने में घंटों बिताते हैं। अक्सर कस्टमर हाथ से निकल जाता है।' },
              { emoji: '🤝', titleEn: 'How do I know I can trust them?', titleHi: 'मैं उन पर भरोसा कैसे करूँ?', descEn: 'No reviews, no ratings, no verification. Just word of mouth which is not always reliable.', descHi: 'कोई रेटिंग या वेरिफिकेशन नहीं। सिर्फ सुनी-सुनाई बातें, जो हमेशा सही नहीं होतीं।' },
              { emoji: '😵', titleEn: 'Too many steps to build a home', titleHi: 'घर बनाने के बहुत सारे झंझट', descEn: 'Materials, contractor, plumber, electrician, painter — you have to find each one separately.', descHi: 'सामग्री, कांट्रेक्टर, प्लंबर, बिजली मिस्त्री, पेंटर — सबको अलग-अलग ढूंढना पड़ता है।' }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{p.emoji}</div>
                <div className="space-y-1 mb-3">
                  <h3 className="text-xl font-heading font-bold text-dark">{p.titleEn}</h3>
                  <h4 className="text-md font-medium text-primary/70">{p.titleHi}</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-900 leading-relaxed text-sm font-medium">{p.descEn}</p>
                  <p className="text-gray-400 leading-relaxed text-xs italic">{p.descHi}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent rounded-3xl p-8 text-center shadow-lg shadow-accent/10 border-2 border-white"
          >
            <p className="text-xl md:text-2xl font-black text-dark leading-relaxed">
              "If you nodded to even ONE of these — Gharbanoo is built for you."
            </p>
            <p className="text-lg md:text-xl font-bold text-dark/60 mt-2 italic">
              "अगर आपने इनमें से एक के लिए भी हाँ कहा है - तो Gharbanoo आपके लिए ही बना है।"
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - SOLUTION */}
      <section className="py-24 bg-white overflow-hidden text-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark tracking-tight">
              One Platform. Every Expert. <span className="text-primary/40 block md:inline text-[0.6em] font-medium md:ml-4">एक ही प्लेटफार्म। सभी एक्सपर्ट्स।</span>
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto font-medium">Gharbanoo connects you directly with verified local experts for every step of building your home</p>
            <p className="text-md text-gray-500 max-w-3xl mx-auto">घरबनाओ आपको घर बनाने के हर कदम के लिए वेरिफाइड लोकल एक्सपर्ट्स से सीधे जोड़ता है</p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-8 md:pb-0 scrollbar-hide snap-x">
             {[
               { icon: Store, titleEn: 'Find Local Shops', titleHi: 'स्थानीय दुकानें', descEn: 'Find local stores for cement, hardware, electricals, paint and marble in Jhanjharpur', descHi: 'सीमेंट, हार्डवेयर, इलेक्ट्रिकल, पेंट और मार्बल की स्थानीय दुकानें खोजें', priceEn: 'Verified local businesses', priceHi: 'वेरिफाइड स्थानीय दुकानें', badgeEn: 'LIVE NOW', badgeHi: 'लाइव', linkEn: 'Find Shops', linkHi: 'दुकानें खोजें', path: '/find-shops' },
               { icon: HardHat, titleEn: 'Contractors', titleHi: 'कांट्रेक्टर्स', descEn: 'Find verified contractors to manage your complete construction', descHi: 'निर्माण कार्य संभालने के लिए वेरिफाइड कांट्रेक्टर्स खोजें', priceEn: 'Fixed price projects', priceHi: 'फिक्स्ड प्राइस प्रोजेक्ट्स', badgeEn: 'LIVE NOW', badgeHi: 'लाइव', linkEn: 'Find Contractors', linkHi: 'कांट्रेक्टर्स खोजें' },
               { icon: Droplet, titleEn: 'Plumbers', titleHi: 'प्लंबर', descEn: 'Compare plumbers by rating, experience and price', descHi: 'रेटिंग, अनुभव और कीमत के आधार पर प्लंबर की तुलना करें', priceEn: 'Daily / Project basis', priceHi: 'प्रति दिन या प्रोजेक्ट के आधार पर', badgeEn: 'LIVE NOW', badgeHi: 'लाइव', linkEn: 'Find Plumbers', linkHi: 'प्लंबर खोजें' },
               { icon: Zap, titleEn: 'Electricians', titleHi: 'इलेक्ट्रिशियन', descEn: 'Verified electricians for safe wiring and all electrical work', descHi: 'सुरक्षित वायरिंग और सभी बिजली कार्यों के लिए वेरिफाइड मिस्त्री', priceEn: 'Modern wiring experts', priceHi: 'आधुनिक वायरिंग एक्सपर्ट्स', badgeEn: 'LIVE NOW', badgeHi: 'लाइव', linkEn: 'Find Electricians', linkHi: 'इलेक्ट्रिशियन खोजें' },
               { icon: Hammer, titleEn: 'Carpenters', titleHi: 'कारपेंटर', descEn: 'Skilled carpenters for doors, windows, furniture and woodwork', descHi: 'दरवाजे, खिड़कियां, फर्नीचर के लिए कुशल बढ़ई', priceEn: 'Quality craftsmanship', priceHi: 'बेहतरीन कारीगरी', badgeEn: 'LIVE NOW', badgeHi: 'लाइव', linkEn: 'Find Carpenters', linkHi: 'कारपेंटर खोजें' },
               { icon: Paintbrush, titleEn: 'Painters', titleHi: 'पेंटर', descEn: 'Professional painters for interior and exterior painting', descHi: 'अंदर और बाहर की पेंटिंग के लिए प्रोफेशनल पेंटर', priceEn: 'All color specialists', priceHi: 'सभी कलर स्पेशलिस्ट', badgeEn: 'LIVE NOW', badgeHi: 'लाइव', linkEn: 'Find Painters', linkHi: 'पेंटर खोजें' },
               { icon: Layers, titleEn: 'And More Coming...', titleHi: 'और बहुत कुछ जल्द...', descEn: 'Quality materials, legal help, financial assistance and real estate listings', descHi: 'अच्छी निर्माण सामग्री, कानूनी मदद, लोन और होम प्रॉपर्टी सर्च', priceEn: 'Coming very soon', priceHi: 'बहुत जल्द आ रहा है', badgeEn: 'COMING SOON', badgeHi: 'आ रहा है', linkEn: null, linkHi: null }
             ].map((s, i) => (
                <div key={i} className="min-w-[300px] md:min-w-0 bg-white border-t-[3px] border-primary rounded-2xl shadow-xl shadow-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all p-8 snap-center flex flex-col h-full border border-gray-100">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <s.icon className="w-7 h-7" />
                    </div>
                    <div className={`flex flex-col items-end px-3 py-1 rounded-full ${s.badgeEn === 'LIVE NOW' ? 'bg-accent text-dark' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-[10px] font-bold">{s.badgeEn}</span>
                      <span className="text-[8px] font-bold">{s.badgeHi}</span>
                    </div>
                  </div>
                  <div className="flex-grow space-y-3">
                    <div className="space-y-0.5">
                      <h3 className="text-2xl font-heading font-bold text-dark">{s.titleEn}</h3>
                      <h4 className="text-lg font-bold text-primary/70">{s.titleHi}</h4>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-900 text-sm leading-relaxed font-medium">{s.descEn}</p>
                      <p className="text-gray-500 text-xs italic">{s.descHi}</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-primary font-bold text-sm tracking-tight">{s.priceEn}</p>
                      <p className="text-primary/60 font-bold text-xs">{s.priceHi}</p>
                    </div>
                  </div>
                  {s.linkEn ? (
                    <Link to={s.path || "/find-services"} className="mt-8 flex flex-col group">
                      <div className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                        {s.linkEn} <ChevronRight className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-primary/60 font-bold">{s.linkHi}</span>
                    </Link>
                  ) : (
                    <div className="mt-8 h-10"></div>
                  )}
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - HOW IT WORKS */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
              How It Works <span className="text-accent/60 block md:inline text-[0.6em] font-medium md:ml-4">काम कैसे करता है</span>
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto opacity-80 font-medium">Simple. Free. Direct. <span className="text-accent/40 text-sm ml-2">सरल। मुफ्त। सीधा संपर्क।</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative text-white">
             <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-red-400/30 -z-0"></div>
             {[
               { icon: Search, titleEn: 'Search', titleHi: 'सर्च करें/खोजें', descEn: 'Browse verified local experts by category and area', descHi: 'अपनी जरूरत के हिसाब से लोकल एक्सपर्ट्स खोजें' },
               { icon: Layout, titleEn: 'Compare', titleHi: 'तुलना करें', descEn: 'View portfolio, ratings, experience and price range', descHi: 'पोर्टफोलियो, रेटिंग और अनुभव की तुलना करें' },
               { icon: Phone, titleEn: 'Connect', titleHi: 'संपर्क करें', descEn: 'Call or WhatsApp directly. No middleman. No commission.', descHi: 'सीधे कॉल या व्हाट्सएप करें। कोई कमीशन नहीं।' }
             ].map((step, i) => (
                <div key={i} className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 bg-accent text-dark font-black text-3xl rounded-full flex items-center justify-center mx-auto shadow-xl ring-[12px] ring-red-500/10 transition-transform hover:scale-110">
                    {i + 1}
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-0.5">
                      <h3 className="text-2xl font-heading font-bold">{step.titleEn}</h3>
                      <h4 className="text-lg font-bold text-accent/80">{step.titleHi}</h4>
                    </div>
                    <div className="space-y-1">
                      <p className="text-red-100 opacity-90 leading-relaxed font-medium">{step.descEn}</p>
                      <p className="text-red-200/60 text-xs italic">{step.descHi}</p>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-black/20 backdrop-blur-md rounded-3xl p-10 text-center border border-white/10 max-w-4xl mx-auto shadow-2xl"
          >
            <p className="text-xl md:text-2xl font-black leading-relaxed text-accent">
              Gharbanoo never charges commission. You connect directly with the expert. What you agree is what you pay.
            </p>
            <p className="text-lg md:text-xl font-bold text-accent/50 mt-4 italic">
              घरबनाओ कभी कोई कमीशन नहीं लेता। आप सीधे एक्सपर्ट से जुड़ते हैं। जो तय होगा, वही आपका खर्चा है।
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - WHY GHARBANOO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark tracking-tight">
              Why Choose Gharbanoo? <span className="text-primary/40 block md:inline text-[0.6em] font-medium md:ml-4">घरबनाओ क्यों चुनें?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Search, color: 'text-primary', bg: 'bg-red-50', titleEn: 'Compare Before You Hire', titleHi: 'हायर करने से पहले तुलना करें', descEn: 'See portfolio, ratings and price of every expert before calling. No more blind trust.', descHi: 'कॉल करने से पहले पोर्टफोलियो, रेटिंग और कीमत देखें।' },
               { icon: MessageSquare, color: 'text-accent', bg: 'bg-yellow-50', titleEn: 'Zero Commission. Always.', titleHi: 'जीरो कमीशन। हमेशा।', descEn: 'We never charge commission. You pay only the expert — nothing extra. Ever.', descHi: 'हम कभी कमीशन नहीं लेते। आप सिर्फ एक्सपर्ट को पैसे देते हैं - कुछ भी एक्स्ट्रा नहीं।' },
               { icon: CheckCircle2, color: 'text-primary', bg: 'bg-red-50', titleEn: 'Verified Local Experts', titleHi: 'वेरिफाइड लोकल एक्सपर्ट्स', descEn: 'Every expert is personally verified. Real people, real work, real trust.', descHi: 'हर एक्सपर्ट को खुद वेरीफाई किया जाता है। असली लोग, असली काम।' },
               { icon: Smartphone, color: 'text-accent', bg: 'bg-yellow-50', titleEn: 'One Click Connect', titleHi: 'एक क्लिक में संपर्क', descEn: 'Call or WhatsApp any expert directly from your phone. No booking. No waiting.', descHi: 'सीधे अपने फोन से कॉल या व्हाट्सएप करें। कोई वेटिंग नहीं।' }
             ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-accent hover:shadow-2xl transition-all duration-300">
                  <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-heading font-bold text-dark">{item.titleEn}</h3>
                      <h4 className="text-sm font-bold text-primary/70">{item.titleHi}</h4>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-900 leading-relaxed text-sm font-medium">{item.descEn}</p>
                      <p className="text-gray-400 leading-relaxed text-xs italic">{item.descHi}</p>
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FOR PROVIDERS */}
      <section className="py-24 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8 text-dark">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark tracking-tight leading-tight">
                  Are You a Local Expert? <span className="text-primary/40 block text-[0.6em] font-medium">क्या आप एक लोकल एक्सपर्ट हैं?</span>
                </h2>
                <div className="space-y-1">
                  <p className="text-2xl text-primary font-bold">Join Gharbanoo and get more customers for free</p>
                  <p className="text-lg text-primary/60 font-bold italic">घरबनाओ से जुड़ें और मुफ्त में नए कस्टमर पाएं</p>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                 {[
                   { en: 'Free digital portfolio', hi: 'मुफ्त डिजिटल पोर्टफोलियो' },
                   { en: 'Customers find you online', hi: 'कस्टमर आपको ऑनलाइन ढूंढेंगे' },
                   { en: 'Share profile in one click', hi: 'एक क्लिक में प्रोफाइल शेयर करें' },
                   { en: 'Show your best work', hi: 'अपना बेहतरीन काम दिखाएं' },
                   { en: 'Zero registration fee', hi: 'जीरो रजिस्ट्रेशन फीस' },
                   { en: 'Zero commission ever', hi: 'कभी कोई कमीशन नहीं' }
                 ].map((text, i) => (
                   <li key={i} className="flex flex-col font-semibold text-dark">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1 rounded-md">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-[15px]">{text.en}</span>
                      </div>
                      <span className="text-[12px] pl-10 text-gray-500 opacity-80">{text.hi}</span>
                   </li>
                 ))}
              </ul>

              <div className="pt-4 p-6 bg-white/50 border border-gray-200 rounded-2xl inline-block shadow-sm">
                <p className="text-sm font-bold text-gray-500 italic">
                  Already joined: Plumbers, Electricians, Carpenters, Painters, Contractors in Jhanjharpur
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  पहले ही जुड़े हुए हैं: झंझारपुर के प्लंबर, मिस्त्री, और ठेकेदार
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"></div>
               <div className="bg-white rounded-[2rem] p-10 shadow-2xl relative z-10 border border-gray-100">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl font-heading font-bold text-dark">Join in 2 Minutes</h3>
                    <p className="text-gray-500 mt-2 font-medium">बिल्कुल मुफ्त / Completely Free</p>
                  </div>
                  
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your name / आपका नाम</label>
                      <input 
                        type="text" 
                        value={miniForm.name} 
                        onChange={e => setMiniForm({...miniForm, name: e.target.value})}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all font-medium"
                        placeholder="e.g. Rahul Kumar"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your service / आपका काम</label>
                      <select 
                        value={miniForm.service} 
                        onChange={e => setMiniForm({...miniForm, service: e.target.value})}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all appearance-none text-dark font-medium"
                      >
                        <option value="">Select service (सेवा चुनें)</option>
                        <option value="Plumber">Plumber (प्लंबर)</option>
                        <option value="Electrician">Electrician (इलेक्ट्रिशियन)</option>
                        <option value="Carpenter">Carpenter (कारपेंटर)</option>
                        <option value="Painter">Painter (पेंटर)</option>
                        <option value="Contractor">Contractor (ठेकेदार)</option>
                        <option value="Architect">Architect (आर्किटेक्ट)</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your number / आपका नंबर</label>
                      <input 
                        type="tel" 
                        value={miniForm.phone} 
                        onChange={e => setMiniForm({...miniForm, phone: e.target.value})}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all font-medium"
                        placeholder="10 digit mobile number"
                      />
                    </div>
                    
                    <Link to="/join-provider" className="w-full py-5 bg-accent text-dark font-black text-lg rounded-xl shadow-xl shadow-accent/20 hover:bg-opacity-90 hover:shadow-2xl transition-all active:scale-[0.98] flex flex-col items-center justify-center leading-tight">
                      <span className="flex items-center gap-2">Join Free <ArrowRight className="w-6 h-6" /></span>
                      <span className="text-sm opacity-60">मुफ्त में जुड़ें</span>
                    </Link>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FOUNDER NOTE */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <Quote className="w-16 h-16 text-primary mx-auto opacity-20" />
            <h2 className="text-3xl font-heading font-black text-dark">A Personal Note from the Founder</h2>
            <h3 className="text-xl font-bold text-primary/60 italic">संस्थापक की ओर से एक संदेश</h3>
          </div>
          
          <div className="space-y-12 text-dark">
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-medium text-dark leading-relaxed italic">
                "I saw a carpenter from Jhanjharpur lose a big project because he couldn't show his previous work on time."
              </p>
              <p className="text-lg text-gray-400 italic">
                "मैंने झंझारपुर के एक बढ़ई को एक बड़ा प्रोजेक्ट खोते देखा क्योंकि वह अपना काम समय पर नहीं दिखा सका।"
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-medium text-dark leading-relaxed italic">
                "I saw home owners pay more than they should because they had no way to compare prices."
              </p>
              <p className="text-lg text-gray-400 italic">
                "मैंने देखा कि घर के मालिकों को जरूरत से ज्यादा पैसे देने पड़ते थे क्योंकि उनके पास कीमतों की तुलना करने का कोई तरीका नहीं था।"
              </p>
            </div>

            <div className="space-y-3 pt-6">
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary leading-relaxed">
                Gharbanoo exists to fix both problems — for every home owner and every skilled worker in Jhanjharpur and beyond.
              </p>
              <p className="text-xl font-bold text-primary/40 italic">
                घरबनाओ इन दोनों समस्याओं को ठीक करने के लिए है — हर घर के मालिक और हर कुशल कारीगर के लिए।
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-12 gap-4">
             <div className="w-20 h-20 bg-gray-100 rounded-full border-2 border-accent p-1 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
             </div>
             <div>
               <h4 className="text-xl font-heading font-bold text-dark">Sushant Shivam</h4>
               <p className="text-gray-500 font-semibold">Founder, Gharbanoo</p>
               <p className="text-xs text-primary font-bold mt-1 uppercase tracking-widest">📍 Jhanjharpur, Bihar</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - VISION */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-2">
              <span className="text-accent font-black tracking-[0.3em] text-sm uppercase">Our Mission</span>
              <span className="block text-accent/50 font-bold uppercase tracking-widest text-xs">हमारा मिशन</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Every Indian family deserves trusted experts to build their dream home.
              </h2>
              <p className="text-xl md:text-3xl font-bold text-red-200/60 leading-tight italic">
                हर भारतीय परिवार अपने सपनों का घर बनाने के लिए भरोसेमंद एक्सपर्ट्स का हकदार है।
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center gap-4 opacity-50 font-medium">
              <div className="space-y-1">
                <p>We start in Jhanjharpur today.</p>
                <p className="text-xs">आज झंझारपुर से शुरुआत।</p>
              </div>
              <div className="space-y-1">
                <p>We expand across Bharat tomorrow.</p>
                <p className="text-xs">कल पूरे भारत में विस्तार।</p>
              </div>
            </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA */}
      <section className="py-24 bg-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
             {/* For Owners */}
             <div className="pb-12 md:pb-0 md:pr-12 space-y-8">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-heading font-bold text-dark">Ready to Find Experts?</h3>
                    <h4 className="text-xl font-bold text-primary/60">एक्सपर्ट्स ढूंढने के लिए तैयार हैं?</h4>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 font-medium">Browse 25+ verified experts in Jhanjharpur — completely free</p>
                    <p className="text-sm text-gray-400 italic">झंझारपुर में 25+ वेरिफाइड एक्सपर्ट्स देखें - बिल्कुल मुफ्त</p>
                  </div>
                </div>
                <Link to="/find-services" className="inline-flex flex-col items-center justify-center px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 leading-tight">
                  <span className="flex items-center gap-2">Find Experts Now <ArrowRight className="w-5 h-5" /></span>
                  <span className="text-xs opacity-70">एक्सपर्ट्स खोजें</span>
                </Link>
             </div>

             {/* For Providers */}
             <div className="pt-12 md:pt-0 md:pl-12 space-y-8">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-bold text-dark">Are you a local expert looking for more work?</h3>
                    <h4 className="text-lg font-bold text-primary/60">क्या आप काम की तलाश में एक लोकल एक्सपर्ट हैं?</h4>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">Join our growing ecosystem</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">हमारे बढ़ते नेटवर्क से जुड़ें</p>
                  </div>
                </div>
                <Link to="/join-provider" className="inline-flex flex-col items-center justify-center px-10 py-4 bg-accent text-dark font-black rounded-2xl shadow-xl shadow-accent/20 hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 leading-tight">
                  <span className="text-lg">Join Gharbanoo Free</span>
                  <span className="text-xs opacity-60">मुफ्त में जुड़ें</span>
                </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
