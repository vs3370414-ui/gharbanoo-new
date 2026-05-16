import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Phone, MessageCircle, MapPin, Star } from 'lucide-react';
import { providers, ServiceType } from '../data/providers';
import { useAuth } from '../components/AuthProvider';

export function FindServices() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ServiceType | 'All' || 'All';
  
  const [activeTab, setActiveTab] = useState<ServiceType | 'All'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const { requireAuth } = useAuth();

  const categories: { id: ServiceType | 'All', en: string, hi: string }[] = [
    { id: 'All', en: 'All', hi: 'सभी' },
    { id: 'Plumber', en: 'Plumber', hi: 'प्लंबर' },
    { id: 'Electrician', en: 'Electrician', hi: 'इलेक्ट्रीशियन' },
    { id: 'Carpenter', en: 'Carpenter', hi: 'कारपेंटर' },
    { id: 'Painter', en: 'Painter', hi: 'पेंटर' },
    { id: 'Contractor', en: 'Contractor', hi: 'ठेकेदार' }
  ];

  const filteredProviders = useMemo(() => {
    return providers.filter(provider => {
      const matchesTab = activeTab === 'All' || provider.service === activeTab;
      const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            provider.service.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const getServiceColor = (service: ServiceType) => {
    switch(service) {
      case 'Plumber': return 'bg-blue-100 text-blue-800';
      case 'Electrician': return 'bg-yellow-100 text-yellow-800';
      case 'Carpenter': return 'bg-orange-100 text-orange-800';
      case 'Painter': return 'bg-purple-100 text-purple-800';
      case 'Contractor': return 'bg-gray-200 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvatarColor = (name: string) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleCall = (phone: string) => {
    requireAuth(() => {
      window.location.href = `tel:+91${phone}`;
    });
  };

  const handleWhatsApp = (phone: string) => {
    requireAuth(() => {
      window.open(`https://wa.me/91${phone}`, '_blank');
    });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
            Find Service Providers in Jhanjharpur
            <span className="text-primary/40 block text-[0.6em] font-medium mt-1">झंझारपुर में एक्सपर्ट्स खोजें</span>
          </h1>
          <div className="space-y-1">
            <p className="text-lg text-gray-900 font-bold">25+ verified local providers ready to help</p>
            <p className="text-sm text-gray-400 italic">25+ वेरिफाइड लोकल एक्सपर्ट्स मदद के लिए तैयार हैं</p>
          </div>
          
          <div className="max-w-2xl mx-auto relative mt-8 mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary sm:text-sm transition-all shadow-sm font-medium"
              placeholder="Search by name or service... (नाम या काम से खोजें...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setSearchParams(category.id === 'All' ? {} : { category: category.id });
                }}
                className={`px-5 py-2.5 rounded-xl transition-all flex flex-col items-center leading-tight active:scale-95 ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105 z-10'
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-black">{category.en}</span>
                <span className="text-[10px] opacity-70 uppercase font-black">{category.hi}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-accent text-gray-900 py-3 px-4 text-center font-black shadow-sm flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 leading-tight">
        <span>📍 Currently available in Jhanjharpur, Bihar only.</span>
        <span className="text-sm md:text-base opacity-70">अभी केवल झंझारपुर, बिहार में उपलब्ध है।</span>
      </div>

      {/* Provider Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProviders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-inner">
            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-gray-100">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-heading font-black text-gray-900">No providers found</h3>
              <h4 className="text-sm font-bold text-primary/60 italic">कोई एक्सपर्ट नहीं मिला</h4>
            </div>
            <p className="text-gray-400 mt-4 text-sm font-medium">Try adjusting your search or filter criteria. (कृपया अपनी खोज बदलें)</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProviders.map((provider) => (
              <div key={provider.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col hover:-translate-y-1 group">
                <div className="p-8 flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg ${getAvatarColor(provider.name)} group-hover:scale-110 transition-transform`}>
                      {provider.name.charAt(0)}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${getServiceColor(provider.service)}`}>
                        {provider.service}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-black text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">{provider.name}</h3>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center text-sm font-bold bg-accent/10 px-3 py-2 rounded-xl text-gray-900">
                      <Star className="w-4 h-4 text-accent mr-2 fill-current" />
                      <div className="flex flex-col leading-tight">
                        <span>{provider.experience} Years Experience</span>
                        <span className="text-[10px] text-gray-400 italic">{provider.experience} साल का अनुभव</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 pl-2">
                      <MapPin className="w-4 h-4 text-gray-300 mr-2" />
                      <div className="flex flex-col leading-tight">
                        <span className="font-bold">Jhanjharpur, Bihar</span>
                        <span className="text-[10px] italic">झंझारपुर, बिहार</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50/50 border-t border-gray-50 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleCall(provider.phone)}
                    className="flex flex-col items-center justify-center py-4 bg-primary text-white rounded-[1.2rem] hover:bg-primary-dark transition-all shadow-lg shadow-primary/10 active:scale-95 leading-none"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-black">Call</span>
                    </div>
                    <span className="text-[10px] opacity-70 uppercase font-black">कॉल करें</span>
                  </button>
                  <button
                    onClick={() => handleWhatsApp(provider.phone)}
                    className="flex flex-col items-center justify-center py-4 bg-green-500 text-white rounded-[1.2rem] hover:bg-green-600 transition-all shadow-lg shadow-green-500/10 active:scale-95 leading-none"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-black">WhatsApp</span>
                    </div>
                    <span className="text-[10px] opacity-70 uppercase font-black">व्हाट्सएप</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-12 md:p-16 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              Are you a service provider in Jhanjharpur?
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-primary/60 italic leading-tight">
              क्या आप झंझारपुर में सर्विस प्रोवाइडर/मिस्त्री हैं?
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-gray-900 font-medium text-lg">Join Gharbanoo for free and get more customers directly to your phone.</p>
            <p className="text-gray-400 text-md italic">फ्री में घरबनाओ से जुड़ें और सीधे अपने फोन पर काम पाएं।</p>
          </div>
          <a
            href="/join-provider"
            className="inline-flex flex-col items-center justify-center px-12 py-5 border border-transparent rounded-[1.5rem] text-white bg-primary hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95 group leading-tight"
          >
            <span className="text-xl font-black flex items-center gap-2">Register Now &rarr;</span>
            <span className="text-xs opacity-70 uppercase font-black">अभी रजिस्टर करें</span>
          </a>
        </div>
      </section>
    </div>
  );
}
