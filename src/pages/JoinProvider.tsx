import React, { useState } from 'react';
import { Check, TrendingUp, Users, Smartphone, Briefcase, Loader2 } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function JoinProvider() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    serviceType: '',
    experience: '',
    area: '',
    about: ''
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
        await addDoc(collection(db, 'provider_registrations'), {
          full_name: formData.name,
          phone: formData.phone,
          whatsapp: formData.whatsapp || formData.phone,
          service_type: formData.serviceType,
          experience: formData.experience,
          area: formData.area,
          about: formData.about,
          timestamp: serverTimestamp(),
          authorUid: auth.currentUser?.uid
        });
        
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          whatsapp: '',
          serviceType: '',
          experience: '',
          area: '',
          about: ''
        });
      } catch (err: any) {
        console.error('Error submitting registration:', err);
        setError('Failed to submit registration. Please try again.');
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
      <section className="bg-gradient-to-br from-primary to-primary-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight">Join as Provider</h1>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-accent/80 italic">सर्विस प्रोवाइडर बनें</h2>
          </div>
          <div className="space-y-1 pt-4 opacity-90">
            <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto">
              Grow Your Business with Gharbanoo
            </p>
            <p className="text-lg md:text-xl font-bold text-red-100 max-w-2xl mx-auto italic">
              घरबनू के साथ अपना काम बढ़ाएं
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Briefcase, titleEn: 'Free Listing', titleHi: 'मुफ्त लिस्टिंग', descEn: 'No monthly fee, no commission', descHi: 'कोई मासिक शुल्क नहीं, कोई कमीशन नहीं' },
            { icon: Smartphone, titleEn: 'Direct Customers', titleHi: 'सीधे ग्राहक', descEn: 'Customers call you directly', descHi: 'ग्राहक सीधे आपको कॉल करेंगे' },
            { icon: Users, titleEn: 'Digital Portfolio', titleHi: 'डिजिटल पोर्टफोलियो', descEn: 'Show your best work online', descHi: 'अपना काम ऑनलाइन दिखाएं' },
            { icon: TrendingUp, titleEn: 'More Work', titleHi: 'ज्यादा काम', descEn: 'Get regular enquiries', descHi: 'नियमित enquiries पाएं' },
          ].map((benefit, i) => (
            <div key={i} className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 text-center flex flex-col group hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary border border-red-100 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <benefit.icon className="w-8 h-8" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-black text-gray-900 leading-tight">{benefit.titleEn}</h3>
                  <h4 className="text-sm font-bold text-primary/60 italic leading-tight">{benefit.titleHi}</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-900 font-medium text-sm leading-relaxed">{benefit.descEn}</p>
                  <p className="text-gray-400 text-xs italic">{benefit.descHi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 leading-tight">How It Works for Providers</h2>
            <h3 className="text-xl font-bold text-primary/60 italic">प्रोवाइडर्स के लिए यह कैसे काम करता है</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { step: '1', titleEn: 'Register', titleHi: 'रजिस्टर करें', descEn: 'Fill simple form', descHi: 'आसान फॉर्म भरें' },
              { step: '2', titleEn: 'Get Listed', titleHi: 'लिस्ट हों', descEn: 'We verify and list you free', descHi: 'हम मुफ्त में verify करके list करेंगे' },
              { step: '3', titleEn: 'Get Customers', titleHi: 'ग्राहक पाएं', descEn: 'Customers call you directly', descHi: 'ग्राहक सीधे call करेंगे' },
            ].map((item, i) => (
              <div key={i} className="text-center group relative">
                <div className="w-20 h-20 bg-white border-4 border-primary text-primary rounded-[2rem] flex items-center justify-center text-3xl font-black mx-auto mb-8 relative z-10 shadow-xl shadow-primary/10 group-hover:bg-primary group-hover:text-white transition-all group-hover:rotate-6">
                  {item.step}
                </div>
                {i < 2 && <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gray-100 -z-0"></div>}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-heading font-black text-gray-900 leading-tight">{item.titleEn}</h3>
                    <h4 className="text-sm font-bold text-primary/60 italic leading-tight">{item.titleHi}</h4>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-bold text-lg leading-relaxed">{item.descEn}</p>
                    <p className="text-gray-400 text-sm font-medium italic">{item.descHi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 px-8 py-10 text-white text-center space-y-2">
            <h2 className="text-3xl font-heading font-black">Register as a Service Provider</h2>
            <h3 className="text-xl font-bold text-gray-400 italic">सर्विस प्रोवाइडर के रूप में रजिस्टर करें</h3>
          </div>
          
          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-8">
                <div className="w-24 h-24 bg-green-100 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-heading font-black text-gray-900">Registration Successful!</h3>
                  <p className="text-xl font-bold text-green-600/60 uppercase tracking-widest leading-none">रजिस्ट्रेशन सफल!</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-2xl font-black text-gray-900 leading-tight">Welcome to Gharbanoo {formData.name}!</p>
                  <p className="text-lg font-bold text-gray-400 italic leading-tight">घरबनू में आपका स्वागत है {formData.name}!</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xl font-bold text-gray-900">Sushant will contact you within 24 hours</p>
                  <p className="text-md font-bold text-gray-400 italic">सुशांत 24 घंटे में आपसे WhatsApp पर संपर्क करेंगे</p>
                </div>
                
                <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center justify-center px-12 py-5 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 active:scale-95 leading-tight">
                  <span className="font-black text-xl">Chat on WhatsApp</span>
                  <span className="text-xs opacity-70 mt-1 uppercase tracking-widest font-black">WhatsApp पर बात करें</span>
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
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Service Type / काम का प्रकार *</label>
                    <select required name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50 appearance-none">
                      <option value="">Select your service (चुनें)</option>
                      <option value="Plumber">Plumber / प्लंबर</option>
                      <option value="Electrician">Electrician / बिजली मिस्त्री</option>
                      <option value="Carpenter">Carpenter / बढ़ई</option>
                      <option value="Painter">Painter / पेंटर</option>
                      <option value="Contractor">Contractor / कांट्रेक्टर</option>
                      <option value="Architect">Architect / आर्किटेक्ट</option>
                      <option value="Engineer">Engineer / इंजीनियर</option>
                      <option value="Interior Designer">Interior Designer / इंटीरियर डिजाइनर</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number / फोन नंबर *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="10-digit mobile number" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">WhatsApp Number / व्हाट्सएप</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="Same as phone or different" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Experience / अनुभव के साल</label>
                    <input type="number" name="experience" value={formData.experience} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="Years of experience" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Work Area / काम का इलाका</label>
                    <input type="text" name="area" value={formData.area} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="Jhanjharpur Market, etc." />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">About Yourself / अपने बारे में</label>
                  <textarea name="about" value={formData.about} onChange={handleChange} rows={4} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all resize-none font-medium bg-gray-50" placeholder="Tell customers about your work and experience... (अपने काम के बारे में बताएं)"></textarea>
                </div>

                <button type="submit" disabled={isLoading} className="w-full py-6 bg-primary text-white font-black rounded-[1.5rem] hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 text-xl flex flex-col items-center justify-center leading-tight disabled:opacity-70 disabled:cursor-not-allowed group">
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <>
                      <span className="flex items-center gap-2">Register for Free <TrendingUp className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                      <span className="text-xs opacity-70 uppercase tracking-widest font-black">मुफ्त में रजिस्टर करें</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
