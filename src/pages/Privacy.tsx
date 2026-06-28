import { Shield, FileText, Lock, Users, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Header */}
      <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-2">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
            Privacy Policy <span className="text-primary/40 block md:inline text-[0.6em] font-medium md:ml-4">गोपनीयता नीति</span>
          </h1>
          <div className="space-y-1">
            <p className="text-lg text-gray-900 font-bold">
              Effective Date: June 28, 2026
            </p>
            <p className="text-sm text-gray-400 font-bold italic">
              प्रभावी तिथि: 28 जून, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
            <p className="text-gray-900 font-medium leading-relaxed">
              Welcome to <strong>Gharbanoo</strong> ("we", "our", or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our mobile application (the "App") and our related services.
            </p>
            <p className="text-sm text-gray-500 italic">
              <strong>Gharbanoo</strong> ("हम", "हमारा", या "हमें") में आपका स्वागत है। हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारे मोबाइल एप्लिकेशन और संबंधित सेवाओं का उपयोग करते हैं तो हम आपकी जानकारी को कैसे एकत्र, उपयोग और साझा करते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. Information We Collect */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">1. Information We Collect</h2>
                <h3 className="text-sm font-bold text-primary/60">1. जानकारी जो हम एकत्र करते हैं</h3>
              </div>
            </div>
            <div className="pl-11 space-y-6">
              <ul className="space-y-4 text-gray-900 font-medium">
                <li className="space-y-1">
                  <p>
                    <strong>Account & Profile Information</strong>: When you sign in using your phone number, we collect your phone number and verify it via a One-Time Password (OTP). You may also choose to provide a profile name and a profile picture.
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    <strong>खाता और प्रोफ़ाइल जानकारी</strong>: जब आप अपने फ़ोन नंबर का उपयोग करके साइन इन करते हैं, तो हम आपका फ़ोन नंबर एकत्र करते हैं और एक वन-टाइम पासवर्ड (OTP) के माध्यम से इसे सत्यापित करते हैं। आप प्रोफ़ाइल नाम और प्रोफ़ाइल चित्र भी प्रदान कर सकते हैं।
                  </p>
                </li>
                <li className="space-y-1">
                  <p>
                    <strong>Location Information</strong>: With your permission, we collect your location or postal code (pincode) to show you nearby service providers (like electricians, plumbers, carpenters) or material shops.
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    <strong>स्थान की जानकारी</strong>: आपकी अनुमति से, हम आपको पास के सेवा प्रदाताओं (जैसे बिजली मिस्त्री, प्लंबर, बढ़ई) या सामग्री की दुकानों को दिखाने के लिए आपका स्थान या पोस्टल कोड (पिनकोड) एकत्र करते हैं।
                  </p>
                </li>
                <li className="space-y-1">
                  <p>
                    <strong>Likes & Favorites</strong>: We save your list of liked experts and shops so you can easily access them later.
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    <strong>पसंद और पसंदीदा</strong>: हम आपकी पसंद के विशेषज्ञों और दुकानों की सूची सहेजते हैं ताकि आप बाद में उन तक आसानी से पहुँच सकें।
                  </p>
                </li>
                <li className="space-y-1">
                  <p>
                    <strong>Call Records</strong>: We keep a local history of recent calls made through the App to connect you with service providers.
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    <strong>कॉल रिकॉर्ड</strong>: हम आपको सेवा प्रदाताओं से जोड़ने के लिए ऐप के माध्यम से की गई हालिया कॉलों का एक स्थानीय इतिहास रखते हैं।
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">2. How We Use Your Information</h2>
                <h3 className="text-sm font-bold text-primary/60">2. हम आपकी जानकारी का उपयोग कैसे करते हैं</h3>
              </div>
            </div>
            <div className="pl-11 space-y-4 text-gray-900 font-medium">
              <p>We use the collected information for the following purposes:</p>
              <p className="text-sm text-gray-400 italic">हम एकत्रित जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li className="space-y-1">
                  <p>To verify your identity and secure your account.</p>
                  <p className="text-xs text-gray-400 italic">आपकी पहचान को सत्यापित करने और आपके खाते को सुरक्षित करने के लिए।</p>
                </li>
                <li className="space-y-1">
                  <p>To connect homeowners with nearby service providers and material shops.</p>
                  <p className="text-xs text-gray-400 italic">घर के मालिकों को पास के सेवा प्रदाताओं और सामग्री की दुकानों से जोड़ने के लिए।</p>
                </li>
                <li className="space-y-1">
                  <p>To customize your experience (e.g., showing local language translations in English or Hindi).</p>
                  <p className="text-xs text-gray-400 italic">आपके अनुभव को अनुकूलित करने के लिए (जैसे, अंग्रेजी या हिंदी में स्थानीय भाषा अनुवाद दिखाना)।</p>
                </li>
                <li className="space-y-1">
                  <p>To maintain your profile preferences (such as your liked providers and call history) across logins.</p>
                  <p className="text-xs text-gray-400 italic">लॉगिन के दौरान आपकी प्रोफ़ाइल प्राथमिकताओं (जैसे आपके पसंदीदा प्रदाता और कॉल इतिहास) को बनाए रखने के लिए।</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Data Storage & Security */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">3. Data Storage & Security</h2>
                <h3 className="text-sm font-bold text-primary/60">3. डेटा भंडारण और सुरक्षा</h3>
              </div>
            </div>
            <div className="pl-11 space-y-4 text-gray-900 font-medium">
              <ul className="space-y-3">
                <li className="space-y-1">
                  <p><strong>Local Storage</strong>: Your personal settings, such as your profile name, location, and favorites, are stored securely on your device.</p>
                  <p className="text-sm text-gray-400 italic"><strong>स्थानीय भंडारण</strong>: आपकी व्यक्तिगत सेटिंग्स, जैसे कि आपका प्रोफ़ाइल नाम, स्थान और पसंदीदा, आपके डिवाइस पर सुरक्षित रूप से संग्रहीत की जाती हैं।</p>
                </li>
                <li className="space-y-1">
                  <p><strong>Security</strong>: We implement industry-standard security measures to protect your phone number and account verification details.</p>
                  <p className="text-sm text-gray-400 italic"><strong>सुरक्षा</strong>: हम आपके फ़ोन नंबर और खाता सत्यापन विवरण की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपाय लागू करते हैं।</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Sharing of Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">4. Sharing of Information</h2>
                <h3 className="text-sm font-bold text-primary/60">4. जानकारी साझा करना</h3>
              </div>
            </div>
            <div className="pl-11 space-y-2 text-gray-900 font-medium">
              <p>
                We do not sell, rent, or trade your personal information. Your phone number and profile name are only shared with service providers when you explicitly choose to call or contact them through the App.
              </p>
              <p className="text-sm text-gray-400 italic">
                हम आपकी व्यक्तिगत जानकारी को बेचते, किराए पर नहीं देते या व्यापार नहीं करते हैं। आपका फ़ोन नंबर और प्रोफ़ाइल नाम केवल सेवा प्रदाताओं के साथ साझा किया जाता है जब आप स्पष्ट रूप से ऐप के माध्यम से उन्हें कॉल करने या संपर्क करने का विकल्प चुनते हैं।
              </p>
            </div>
          </div>

          {/* 5. Your Choices & Rights */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">5. Your Choices & Rights</h2>
                <h3 className="text-sm font-bold text-primary/60">5. आपके विकल्प और अधिकार</h3>
              </div>
            </div>
            <div className="pl-11 space-y-4 text-gray-900 font-medium">
              <ul className="space-y-3">
                <li className="space-y-1">
                  <p><strong>Access and Update</strong>: You can edit your profile name, change your location, or modify your liked items directly inside the App at any time.</p>
                  <p className="text-sm text-gray-400 italic"><strong>पहुंच और अपडेट</strong>: आप किसी भी समय सीधे ऐप के भीतर अपना प्रोफ़ाइल नाम संपादित कर सकते हैं, अपना स्थान बदल सकते हैं, या अपनी पसंद की वस्तुओं को संशोधित कर सकते हैं।</p>
                </li>
                <li className="space-y-1">
                  <p><strong>Account Deletion</strong>: If you wish to delete your account data, you can do so by logging out and clearing your app data, or by contacting us at <a href="mailto:support@gharbanoo.com" className="text-primary underline">support@gharbanoo.com</a>.</p>
                  <p className="text-sm text-gray-400 italic"><strong>खाता हटाना</strong>: यदि आप अपने खाते का डेटा हटाना चाहते हैं, तो आप लॉग आउट करके और अपने ऐप डेटा को साफ़ करके, या <a href="mailto:support@gharbanoo.com" className="text-primary underline">support@gharbanoo.com</a> पर हमसे संपर्क करके ऐसा कर सकते हैं।</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 6. Contact Us */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">6. Contact Us</h2>
                <h3 className="text-sm font-bold text-primary/60">6. हमसे संपर्क करें</h3>
              </div>
            </div>
            <div className="pl-11 space-y-2 text-gray-900 font-medium">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <p className="text-sm text-gray-400 italic">यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:</p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl inline-block mt-2">
                <p className="font-bold text-gray-900">Gharbanoo Support</p>
                <p className="text-sm text-gray-500 mt-1">
                  Email: <a href="mailto:support@gharbanoo.com" className="text-primary hover:underline font-bold">support@gharbanoo.com</a>
                </p>
                <p className="text-xs text-gray-400 mt-1">ईमेल: support@gharbanoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home / होम पेज पर जाएं
        </Link>
      </section>
    </div>
  );
}
