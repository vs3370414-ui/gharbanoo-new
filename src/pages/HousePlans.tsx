import React, { useState } from 'react';
import { Check, PenTool, Home, HardHat, Loader2 } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function HousePlans() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    length: '',
    width: '',
    floors: '',
    bedrooms: '',
    budget: '',
    planType: '2D',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { requireAuth } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate phone
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    requireAuth(async () => {
      setIsLoading(true);
      setError('');
      try {
        await addDoc(collection(db, 'house_plan_requests'), {
          full_name: formData.name,
          phone: formData.phone,
          plot_length: formData.length,
          plot_width: formData.width,
          floors: formData.floors,
          bedrooms: formData.bedrooms,
          budget: formData.budget,
          plan_type: formData.planType,
          requirements: formData.requirements,
          timestamp: serverTimestamp(),
          authorUid: auth.currentUser?.uid
        });
        
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          length: '',
          width: '',
          floors: '',
          bedrooms: '',
          budget: '',
          planType: '2D',
          requirements: ''
        });
      } catch (err: any) {
        console.error('Error submitting request:', err);
        setError('Failed to submit request. Please try again.');
      } finally {
        setIsLoading(false);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-black leading-tight">
            Professional House Plans for Jhanjharpur
            <span className="text-accent/60 block text-[0.6em] font-black mt-2">झंझारपुर के लिए प्रोफेशनल घर के नक्शे</span>
          </h1>
          <div className="space-y-1 opacity-90">
            <p className="text-xl text-red-100 max-w-3xl mx-auto font-medium leading-relaxed">
              2D & 3D house plans by experienced civil engineers. Affordable pricing, fast delivery.
            </p>
            <p className="text-md text-red-200/60 font-bold italic">
              सिविल इंजीनियरों द्वारा बनाए गए 2D और 3D नक्शे। किफायती दाम, तेज़ डिलीवरी।
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2D Plan */}
          <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 flex flex-col group hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary border border-red-100 group-hover:scale-110 transition-transform">
                <PenTool className="w-8 h-8" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-primary">₹3</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">per sq ft / प्रति फिट</div>
              </div>
            </div>
            
            <div className="space-y-1 mb-6">
              <h3 className="text-2xl font-heading font-black text-gray-900 leading-tight">2D House Plan</h3>
              <h4 className="text-lg font-bold text-primary/60 italic leading-tight">2D घर का नक्शा</h4>
            </div>

            <p className="text-sm font-bold text-gray-900 mb-6 pb-6 border-b border-gray-50">
              Example: 1000 sq ft = ₹3,000 only
              <br />
              <span className="text-xs text-gray-400">उदाहरण: 1000 sq ft = केवल ₹3,000</span>
            </p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                { en: 'Floor plan & room layout', hi: 'फ्लोर प्लान और रूम लेआउट' },
                { en: 'Accurate dimensions', hi: 'सटीक माप और लंबाई-चौड़ाई' },
                { en: 'Delivery: 48-72 hours', hi: 'डिलीवरी: 2-3 दिन में' },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-gray-900 font-medium text-sm">{feature.en}</span>
                    <span className="text-[10px] text-gray-400 italic">{feature.hi}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#request-form" className="w-full block text-center py-4 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all active:scale-95 leading-tight flex flex-col items-center">
              <span>Get 2D Plan</span>
              <span className="text-[10px] opacity-70 uppercase">नक्शा बनवाएं</span>
            </a>
          </div>

          {/* 3D Plan */}
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 border-2 border-primary flex flex-col relative transform md:-translate-y-6 group hover:translate-y-[-1.75rem] transition-all">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-2xl text-xs font-black tracking-widest uppercase shadow-xl shadow-primary/20">
              Popular / सबसे लोकप्रिय
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary border border-red-100 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-primary">₹5</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">per sq ft / प्रति फिट</div>
              </div>
            </div>
            
            <div className="space-y-1 mb-6">
              <h3 className="text-2xl font-heading font-black text-gray-900 leading-tight">3D House Plan</h3>
              <h4 className="text-lg font-bold text-primary/60 italic leading-tight">3D घर का नक्शा</h4>
            </div>

            <p className="text-sm font-bold text-gray-900 mb-6 pb-6 border-b border-gray-50">
              Example: 1000 sq ft = ₹5,000 only
              <br />
              <span className="text-xs text-gray-400">उदाहरण: 1000 sq ft = केवल ₹5,000</span>
            </p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                { en: 'Everything in 2D Plan', hi: '2D प्लान की सभी सुविधाएं', bold: true },
                { en: '3D visualization', hi: '3D बाहरी बनावट (View)' },
                { en: 'Elevation view', hi: 'एलीवेशन (सामने का लुक)' },
                { en: 'Delivery: 3-5 days', hi: 'डिलीवरी: 3-5 दिन में' },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className={`text-gray-900 text-sm ${feature.bold ? 'font-black' : 'font-medium'}`}>{feature.en}</span>
                    <span className="text-[10px] text-gray-400 italic">{feature.hi}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#request-form" className="w-full block text-center py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95 leading-tight flex flex-col items-center">
              <span>Get 3D Plan</span>
              <span className="text-[10px] opacity-70 uppercase">नक्शा बनवाएं</span>
            </a>
          </div>

          {/* Site Visit */}
          <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 flex flex-col group hover:border-gray-300 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100 group-hover:scale-110 transition-transform">
                <HardHat className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-1 mb-4">
              <h3 className="text-2xl font-heading font-black text-gray-900 leading-tight">Site Visit</h3>
              <h4 className="text-lg font-bold text-gray-400 italic leading-tight">साइट विजिट</h4>
            </div>

            <div className="space-y-1 mb-6">
              <div className="text-xl font-black text-gray-900">As per fee</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none italic">इंजीनियर की फीस के अनुसार</div>
            </div>

            <p className="text-sm font-bold text-gray-400 mb-6 pb-6 border-b border-gray-50">Physical inspection in Jhanjharpur</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                { en: 'Physical plot inspection', hi: 'जमीन की भौतिक जांच' },
                { en: 'Soil testing advice', hi: 'मिट्टी की जांच की सलाह' },
                { en: 'Construction guidance', hi: 'निर्माण संबंधी मार्गदर्शन' },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gray-500" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-gray-900 font-medium text-sm">{feature.en}</span>
                    <span className="text-[10px] text-gray-400 italic">{feature.hi}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 border-2 border-gray-200 text-gray-600 font-black rounded-2xl hover:bg-gray-50 transition-all active:scale-95 leading-tight flex flex-col items-center">
              <span>Book Site Visit</span>
              <span className="text-[10px] opacity-70 uppercase">विजिट बुक करें</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900">How It Works</h2>
            <h3 className="text-xl font-bold text-primary/60 italic">यह काम कैसे करता है</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: '1', titleEn: 'Share Details', titleHi: 'जानकारी भरें', descEn: 'Fill the form with your plot size and requirements.', descHi: 'अपनी जमीन का साइज और जरूरतें फॉर्म में भरें।' },
              { step: '2', titleEn: 'Get Quote', titleHi: 'कीमत जानें', descEn: 'We will call you to confirm details and give a final price.', descHi: 'हम आपको कॉल करेंगे और फाइनल दाम बताएंगे।' },
              { step: '3', titleEn: 'Make Payment', titleHi: 'छोटा एडवांस दें', descEn: 'Pay a small advance to start the design process.', descHi: 'नक्शा शुरू करने के लिए थोड़ा पैसा जमा करें।' },
              { step: '4', titleEn: 'Receive Plan', titleHi: 'नक्शा पाएं', descEn: 'Get your professional house plan on WhatsApp/Email.', descHi: 'व्हाट्सएप या ईमेल पर अपना नक्शा प्राप्त करें।' },
            ].map((item, i) => (
              <div key={i} className="text-center group relative">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 relative z-10 shadow-xl shadow-primary/20 group-hover:rotate-6 transition-transform">
                  {item.step}
                </div>
                {i < 3 && <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-0"></div>}
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

      {/* Sample Plans */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="flex flex-col mb-8 border-l-4 border-primary pl-6">
              <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900">Sample 2D Plans</h2>
              <h3 className="text-lg font-bold text-primary/60 italic leading-tight">2D नक्शे के नमूने</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600&h=400" alt="2D Plan 1" className="object-cover w-full h-80 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" alt="2D Plan 2" className="object-cover w-full h-80 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600&h=400" alt="2D Plan 3" className="object-cover w-full h-80 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-8 border-l-4 border-accent pl-6">
              <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900">Sample 3D Plans</h2>
              <h3 className="text-lg font-bold text-accent/60 italic leading-tight">3D नक्शे के नमूने</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400" alt="3D Plan 1" className="object-cover w-full h-80 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400" alt="3D Plan 2" className="object-cover w-full h-80 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" alt="3D Plan 3" className="object-cover w-full h-80 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-primary px-8 py-10 text-white text-center space-y-2">
              <h2 className="text-3xl font-heading font-black">Request Your House Plan</h2>
              <h3 className="text-xl font-bold text-accent italic">अपने घर के नक्शे के लिए संपर्क करें</h3>
              <p className="text-red-100 mt-4 font-medium opacity-90">Fill the details below and we'll get back to you with a quote. (नीचे फॉर्म भरें, हम आपको दाम बताएंगे)</p>
            </div>
            
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-heading font-black text-gray-900">Request Submitted!</h3>
                    <p className="text-xl font-bold text-green-600/60">रिक्वेस्ट सबमिट कर दी गई!</p>
                  </div>
                  <p className="text-gray-900 font-medium">We will contact you within 24 hours. (हम 24 घंटे में संपर्क करेंगे)</p>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center justify-center px-10 py-5 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 active:scale-95 leading-tight">
                    <span>WhatsApp us at 9241562747</span>
                    <span className="text-xs opacity-70 mt-1">9241562747 पर मैसेज करें</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Full Name / आपका नाम *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="Rahul Kumar" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number / फोन नंबर *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="10-digit mobile number" />
                    </div>
                  </div>
 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Plot Length / लंबाई (feet)</label>
                      <input type="number" name="length" value={formData.length} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="e.g. 50" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Plot Width / चौड़ाई (feet)</label>
                      <input type="number" name="width" value={formData.width} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="e.g. 30" />
                    </div>
                  </div>
 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Floors / मंजिला</label>
                      <select name="floors" value={formData.floors} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50 appearance-none">
                        <option value="">Select (चुनें)</option>
                        <option value="1">1 (Ground only)</option>
                        <option value="2">2 (G+1)</option>
                        <option value="3">3 (G+2)</option>
                        <option value="4+">4 or more</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Bedrooms / कमरे</label>
                      <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50 appearance-none">
                        <option value="">Select (चुनें)</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4+">4+ BHK</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Plan Type / नक्शा</label>
                      <select name="planType" value={formData.planType} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50 appearance-none">
                        <option value="2D">2D Plan Only</option>
                        <option value="3D">3D Plan Only</option>
                        <option value="Both">Both 2D & 3D</option>
                      </select>
                    </div>
                  </div>
 
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Approx Budget / अनुमानित बजट (₹)</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="e.g. 15 Lakhs (15 लाख)" />
                  </div>
 
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Additional Requirements / अन्य जरूरतें</label>
                    <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={4} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all resize-none font-medium bg-gray-50" placeholder="Pooja room, parking, attached bathroom, etc. (पूजा रूम, पार्किंग, आदि)"></textarea>
                  </div>
 
                  <button type="submit" disabled={isLoading} className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 text-xl flex flex-col items-center justify-center leading-tight disabled:opacity-70 disabled:cursor-not-allowed group">
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <>
                        <span className="flex items-center gap-2">Submit Request <PenTool className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        <span className="text-xs opacity-70">रिक्वेस्ट भेजें</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
