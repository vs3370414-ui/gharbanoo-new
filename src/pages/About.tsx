import { Target, Eye, Heart, ShieldCheck, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
            About Gharbanoo <span className="text-primary/40 block md:inline text-[0.6em] font-medium md:ml-4">घरबनाओ के बारे में</span>
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-gray-900 leading-relaxed font-medium">
              We are building the first step of every home owner's construction journey in tier 2 and tier 3 cities of India.
            </p>
            <p className="text-md text-gray-500 leading-relaxed italic">
              हम भारत के टियर 2 और टियर 3 शहरों में हर घर के मालिक के निर्माण सफर का पहला कदम बना रहे हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 text-center">
            Our Story <span className="text-primary/40 block text-[0.6em] font-medium">हमारी कहानी</span>
          </h2>
          <div className="prose prose-lg text-gray-800 mx-auto space-y-8">
            <div className="space-y-2">
              <p className="font-medium">
                Gharbanoo was born from a simple observation in Jhanjharpur, Bihar. When home owners needed a reliable plumber, electrician or carpenter, they had no way to find or verify them. And when skilled workers needed customers, they had no way to show their work.
              </p>
              <p className="text-sm text-gray-400 italic">
                घरबनाओ (Gharbanoo) का जन्म बिहार के झंझारपुर में एक साधारण अवलोकन से हुआ था। जब घर के मालिकों को भरोसेमंद प्लंबर या कारपेंटर की जरूरत होती थी, तो उनके पास उन्हें ढूंढने या जांचने का कोई तरीका नहीं था।
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">
                After months of ground research — talking to home owners, service providers and material shop owners across Jhanjharpur and Madhubani — Sushant Shivam founded Gharbanoo with one mission: to be the first step in every home owner's construction journey.
              </p>
              <p className="text-sm text-gray-400 italic">
                महीनों के जमीनी शोध के बाद - झंझारपुर और मधुबनी के घर मालिकों और सर्विस प्रोवाइडर्स से बात करने के बाद - सुशांत शिवम ने घरबनाओ की स्थापना की।
              </p>
            </div>
            <div className="font-bold text-primary text-xl border-l-4 border-primary pl-6 py-4 my-10 bg-gray-50 rounded-r-lg space-y-2">
              <p>
                Today Gharbanoo connects home owners directly with 25+ verified local service providers in Jhanjharpur. No middleman. No commission. Just trust.
              </p>
              <p className="text-lg opacity-60">
                आज घरबनाओ सीधे 25+ वेरिफाइड लोकल एक्सपर्ट्स से जोड़ता है। कोई बिचौलिया नहीं। कोई कमीशन नहीं। सिर्फ भरोसा।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 space-y-4">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-2">
                <Target className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
                <h4 className="text-md font-bold text-primary/60">हमारा मिशन</h4>
              </div>
              <div className="space-y-1">
                <p className="text-gray-100 text-lg leading-relaxed font-medium">
                  To make home construction simple, transparent and affordable for every Indian family.
                </p>
                <p className="text-gray-400 text-sm italic">
                  घर निर्माण को हर भारतीय परिवार के लिए सरल, पारदर्शी और किफायती बनाना।
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 space-y-4">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-2">
                <Eye className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
                <h4 className="text-md font-bold text-accent/60">हमारा विजन</h4>
              </div>
              <div className="space-y-1">
                <p className="text-gray-100 text-lg leading-relaxed font-medium">
                  To become India's most trusted home construction platform for tier 2 and tier 3 cities.
                </p>
                <p className="text-gray-400 text-sm italic">
                  टियर 2 और टियर 3 शहरों के लिए भारत का सबसे भरोसेमंद प्लेटफॉर्म बनना।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
              <div className="space-y-1">
                <div className="uppercase tracking-widest text-[10px] font-black text-primary px-3 py-1 bg-red-50 inline-block rounded-full">Founder / संस्थापक</div>
                <h3 className="text-3xl font-heading font-bold text-gray-900">Sushant Shivam</h3>
              </div>
              <div className="space-y-0.5">
                <p className="text-gray-900 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Based in Jhanjharpur, Bihar
                </p>
                <p className="text-gray-400 text-xs font-bold italic ml-4">झंझारपुर, बिहार से</p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-900 font-medium leading-relaxed">
                  "First generation entrepreneur from Bihar with deep roots in the Jhanjharpur community. I built Gharbanoo to solve a problem I saw my own family face during construction."
                </p>
                <p className="text-md text-gray-400 italic">
                  "मैं झंझारपुर से ही हूँ और मैंने अपने परिवार को घर बनाने में आने वाली परेशानियों को करीब से देखा है।"
                </p>
              </div>
              <a 
                href="https://wa.me/919241562747" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex flex-col group"
              >
                <span className="inline-flex items-center text-primary font-black text-lg hover:gap-2 transition-all">Connect on WhatsApp &rarr;</span>
                <span className="text-xs text-primary/60 font-bold uppercase">व्हाट्सएप पर जुड़ें</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center mb-16">
            What Makes Us Different <span className="text-primary/40 block text-[0.6em] font-medium">क्या हमें अलग बनाता है</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, titleEn: 'Community First', titleHi: 'समाज पहले', descEn: 'Built by locals, for locals. We understand the specific needs of our town.', descHi: 'लोकल लोगों द्वारा, लोकल लोगों के लिए बनाया गया।' },
              { icon: ShieldCheck, titleEn: 'Verified Trust', titleHi: 'सच्चा भरोसा', descEn: 'Every provider is personally verified before they are listed on our platform.', descHi: 'हर प्रोवाइडर को लिस्ट करने से पहले व्यक्तिगत रूप से जांचा जाता है।' },
              { icon: Zap, titleEn: 'Zero Commission', titleHi: 'जीरो कमीशन', descEn: 'We don\'t take a cut from your hard-earned money. It\'s a free connection.', descHi: 'हम आपकी मेहनत की कमाई से कोई हिस्सा नहीं लेते।' },
              { icon: Users, titleEn: 'Direct Contact', titleHi: 'सीधा संपर्क', descEn: 'No hiding numbers. You talk directly to the person who will do the job.', descHi: 'कोई नंबर नहीं छिपाना। सीधे उस व्यक्ति से बात करें जो काम करेगा।' },
            ].map((item, i) => (
              <div key={i} className="text-center group p-6 hover:bg-gray-50 rounded-2xl transition-all">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-black text-gray-900">{item.titleEn}</h3>
                    <h4 className="text-sm font-bold text-primary/60">{item.titleHi}</h4>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-medium text-sm leading-relaxed">{item.descEn}</p>
                    <p className="text-gray-400 text-xs italic">{item.descHi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 bg-accent/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-lg text-gray-900 font-bold leading-relaxed">
            We are an early stage startup currently serving Jhanjharpur, Bihar. We are bootstrapped, community driven and growing organically.
          </p>
          <p className="text-md text-gray-500 italic font-medium">
            हम एक नया स्टार्टअप हैं जो झंझारपुर, बिहार में अपनी सेवाएं दे रहा है।
          </p>
        </div>
      </section>
    </div>
  );
}
