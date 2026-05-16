import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Check, HelpCircle, Loader2 } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate phone
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsLoading(true);
    try {
      await addDoc(collection(db, 'contact_messages'), {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        timestamp: serverTimestamp()
      });
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    } catch (err: any) {
      console.error('Error submitting message:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      qEn: "Is Gharbanoo free to use?",
      qHi: "क्या घरबनाओ इस्तेमाल के लिए मुफ्त है?",
      aEn: "Yes, Gharbanoo is 100% free for home owners. We do not charge any commission or fees to connect you with service providers.",
      aHi: "हाँ, घरबनाओ घर के मालिकों के लिए 100% मुफ्त है। हम कोई कमीशन नहीं लेते।"
    },
    {
      qEn: "How do I book a service?",
      qHi: "मैं सर्विस कैसे बुक करूँ?",
      aEn: "Simply browse the 'Find Services' page, choose a provider, and click the Call or WhatsApp button to contact them directly. You negotiate the price and terms with them.",
      aHi: "बस 'Find Services' पेज पर जाएं, किसी प्रोवाइडर को चुनें और सीधे संपर्क करें।"
    },
    {
      qEn: "Are the providers verified?",
      qHi: "क्या प्रोवाइडर वेरिफाइड हैं?",
      aEn: "Yes, our team personally verifies the identity and basic experience of the providers listed on our platform before they go live.",
      aHi: "हाँ, हमारी टीम प्रोवाइडर्स की पहचान और अनुभव की जांच करती है।"
    },
    {
      qEn: "Do you provide materials for construction?",
      qHi: "क्या आप निर्माण सामग्री भी देते हैं?",
      aEn: "Currently, we only connect you with service providers (labor/contractors) and offer house plan designs. We do not supply construction materials.",
      aHi: "वर्तमान में, हम केवल नक्शे और एक्सपर्ट्स से जोड़ते हैं। हम सामग्री सप्लाई नहीं करते।"
    },
    {
      qEn: "Is Gharbanoo available outside Jhanjharpur?",
      qHi: "क्या घरबनाओ झंझारपुर के बाहर भी है?",
      aEn: "At this moment, we are exclusively serving Jhanjharpur and its immediate surrounding areas in Bihar. We plan to expand to other cities soon.",
      aHi: "अभी हम सिर्फ झंझारपुर और आसपास के इलाकों में सेवा दे रहे हैं।"
    }
  ];

  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-primary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Contact Us <span className="text-accent/60 block md:inline text-[0.6em] font-black md:ml-4">हमसे संपर्क करें</span>
          </h1>
          <div className="space-y-1 opacity-90">
            <p className="text-xl text-red-100 max-w-2xl mx-auto font-medium">
              Have a question or need help? We're always here for you.
            </p>
            <p className="text-md text-red-200/60 font-bold italic">
              कोई सवाल है या मदद चाहिए? हम हमेशा आपके लिए यहाँ हैं।
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900">Get in Touch</h2>
              <h3 className="text-lg font-bold text-primary/60">जुड़ें और बात करें</h3>
            </div>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest leading-none mb-1">WhatsApp (Primary)</h3>
                    <h4 className="text-lg font-heading font-bold text-gray-900 leading-tight">व्हाट्सएप (मुख्य)</h4>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-gray-900 font-medium">Fastest way to reach us for any query.</p>
                    <p className="text-gray-400 text-xs italic">किसी भी सवाल के लिए सबसे तेज़ तरीका।</p>
                  </div>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-black hover:underline text-2xl pt-2">
                    +91 92415 62747
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Call Us</h3>
                    <h4 className="text-lg font-heading font-bold text-gray-900 leading-tight">हमें कॉल करें</h4>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-gray-900 font-medium">For house plans or provider registration.</p>
                    <p className="text-gray-400 text-xs italic">नक्शे या रजिस्ट्रेशन के लिए कॉल करें।</p>
                  </div>
                  <a href="tel:+919241562747" className="inline-block text-primary font-black hover:underline text-2xl pt-2">
                    +91 92415 62747
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Location</h3>
                    <h4 className="text-lg font-heading font-bold text-gray-900 leading-tight">हमारा पता</h4>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-gray-900 font-bold text-lg">Jhanjharpur, Bihar, India</p>
                    <p className="text-gray-400 text-xs italic">झंझारपुर, बिहार, भारत</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-heading font-bold text-gray-900">Specific Enquiries</h3>
                <h4 className="text-sm font-bold text-primary/60 italic">विशिष्ट पूछताछ</h4>
              </div>
              <ul className="space-y-4 text-gray-900 font-medium">
                <li className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 pb-4 gap-2">
                  <div className="flex flex-col">
                    <span>For House Plans:</span>
                    <span className="text-xs text-gray-400">घर के नक्शे के लिए</span>
                  </div>
                  <a href="https://wa.me/919241562747" className="text-primary font-black bg-red-50 px-4 py-2 rounded-lg text-center">WhatsApp Us / मैसेज करें</a>
                </li>
                <li className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 pb-4 gap-2">
                  <div className="flex flex-col">
                    <span>For Provider Registration:</span>
                    <span className="text-xs text-gray-400">प्रोवाइडर रजिस्ट्रेशन के लिए</span>
                  </div>
                  <a href="https://wa.me/919241562747" className="text-primary font-black bg-red-50 px-4 py-2 rounded-lg text-center">WhatsApp Us / मैसेज करें</a>
                </li>
                <li className="flex flex-col sm:flex-row justify-between sm:items-center pt-2 gap-2">
                  <div className="flex flex-col">
                    <span>General Support:</span>
                    <span className="text-xs text-gray-400">सामान्य सहायता</span>
                  </div>
                  <a href="https://wa.me/919241562747" className="text-primary font-black bg-red-50 px-4 py-2 rounded-lg text-center">WhatsApp Us / मैसेज करें</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="space-y-1 mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 leading-tight">Send us a Message</h2>
                <h3 className="text-lg font-bold text-primary/60 italic leading-tight">हमें मैसेज भेजें</h3>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-gray-900">Message Sent!</h3>
                    <p className="text-xl font-bold text-green-600/60">मैसेज भेज दिया गया!</p>
                  </div>
                  <p className="text-gray-600 font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center justify-center px-10 py-4 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 active:scale-95 leading-tight">
                    <span>WhatsApp us at 9241562747</span>
                    <span className="text-xs opacity-70 mt-1">9241562747 पर मैसेज करें</span>
                  </a>
                  <div className="mt-4 pt-6 border-t border-gray-50">
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-black hover:underline flex flex-col items-center mx-auto"
                    >
                      <span>Send another message</span>
                      <span className="text-[10px] opacity-40 uppercase tracking-widest">एक और मैसेज भेजें</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
                      {error}
                    </div>
                  )}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Full Name / आपका नाम *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="e.g. Rahul Kumar" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number / फोन नंबर *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium bg-gray-50" placeholder="10-digit mobile number" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Message / मैसेज *</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all resize-none font-medium bg-gray-50" placeholder="How can we help you? (हम आपकी क्या मदद कर सकते हैं?)"></textarea>
                  </div>
 
                  <button type="submit" disabled={isLoading} className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 text-xl flex flex-col items-center justify-center leading-tight disabled:opacity-70 disabled:cursor-not-allowed group">
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <span className="flex items-center gap-2">Send Message <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        <span className="text-xs opacity-70">मैसेज भेजें</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 border border-red-100 shadow-sm">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
              <h3 className="text-xl font-bold text-primary/60 italic">अक्सर पूछे जाने वाले सवाल</h3>
            </div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq: any, i) => (
              <div key={i} className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-bold text-gray-900">{faq.qEn}</h3>
                    <h4 className="text-lg font-bold text-primary/70">{faq.qHi}</h4>
                  </div>
                  <div className="space-y-2 border-t border-gray-200 pt-4">
                    <p className="text-gray-900 font-medium leading-relaxed">{faq.aEn}</p>
                    <p className="text-gray-500 italic leading-relaxed text-sm">{faq.aHi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
