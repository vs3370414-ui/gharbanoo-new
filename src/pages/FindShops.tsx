import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Phone, MessageCircle, MapPin, Store, Star } from 'lucide-react';

export interface Shop {
  id: string;
  name: string;
  owner: string;
  category: 'Cement' | 'Electrical' | 'Paints' | 'Hardware' | 'Marbles';
  phone: string;
  address: string;
  rating: number;
}

export const shops: Shop[] = [
  {
    id: 's1',
    name: 'Mithila Cement & Building Materials',
    owner: 'Ramesh Jha',
    category: 'Cement',
    phone: '9845123049',
    address: 'Lohna Road, Near Station, Jhanjharpur',
    rating: 4.8
  },
  {
    id: 's2',
    name: 'Durga Hardware & Sanitary Store',
    owner: 'Sanjay Sahu',
    category: 'Hardware',
    phone: '9934102983',
    address: 'Main Bazar, Jhanjharpur Mandi',
    rating: 4.7
  },
  {
    id: 's3',
    name: 'Jhanjharpur Paint House',
    owner: 'Anil Gupta',
    category: 'Paints',
    phone: '8051532918',
    address: 'Court Road, Jhanjharpur',
    rating: 4.9
  },
  {
    id: 's4',
    name: 'Madan Lal Electricals',
    owner: 'Madan Lal',
    category: 'Electrical',
    phone: '7549221142',
    address: 'Station Road, Jhanjharpur RS',
    rating: 4.6
  },
  {
    id: 's5',
    name: 'Shree Krishna Marbles & Granite',
    owner: 'Kishore Poddar',
    category: 'Marbles',
    phone: '9534381102',
    address: 'NH-57 Bypass, Jhanjharpur',
    rating: 4.8
  },
  {
    id: 's6',
    name: 'Saraswati Building Solutions',
    owner: 'Manoj Paswan',
    category: 'Cement',
    phone: '7807971155',
    address: 'Behat Bazar, Jhanjharpur',
    rating: 4.5
  },
  {
    id: 's7',
    name: 'Bhawani Lights & Electrical Store',
    owner: 'Rajesh Mishra',
    category: 'Electrical',
    phone: '9334701254',
    address: 'Main Bazar, Jhanjharpur',
    rating: 4.7
  },
  {
    id: 's8',
    name: 'Radhe Shyam Paint & Decor',
    owner: 'Pappu Chaurasia',
    category: 'Paints',
    phone: '9801974455',
    address: 'Lohna Road, Jhanjharpur',
    rating: 4.8
  }
];

export function FindShops() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as any || 'All';
  
  const [activeTab, setActiveTab] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', en: 'All Shops', hi: 'सभी दुकानें' },
    { id: 'Cement', en: 'Cement & Sand', hi: 'सीमेंट और बालू' },
    { id: 'Electrical', en: 'Electrical & Lights', hi: 'बिजली और लाइट' },
    { id: 'Paints', en: 'Paints & Decor', hi: 'पेंट और पुट्टी' },
    { id: 'Hardware', en: 'Hardware & Sanitary', hi: 'हार्डवेयर और नल' },
    { id: 'Marbles', en: 'Marbles & Tiles', hi: 'मार्बल और टाइल्स' }
  ];

  const filteredShops = useMemo(() => {
    return shops.filter(shop => {
      const matchesTab = activeTab === 'All' || shop.category === activeTab;
      const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            shop.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            shop.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Cement': return 'bg-gray-100 text-gray-800';
      case 'Electrical': return 'bg-yellow-100 text-yellow-800';
      case 'Paints': return 'bg-purple-100 text-purple-800';
      case 'Hardware': return 'bg-blue-100 text-blue-800';
      case 'Marbles': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvatarColor = (name: string) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:+91${phone}`;
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/91${phone}`, '_blank');
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
            Find Local Shops in Jhanjharpur
            <span className="text-primary/40 block text-[0.6em] font-medium mt-1">झंझारपुर में स्थानीय दुकानें खोजें</span>
          </h1>
          <div className="space-y-1">
            <p className="text-lg text-gray-900 font-bold">Verified local hardware, cement, paint & material shops</p>
            <p className="text-sm text-gray-400 italic">सत्यापित स्थानीय हार्डवेयर, सीमेंट, पेंट और निर्माण सामग्री की दुकानें</p>
          </div>
          
          <div className="max-w-2xl mx-auto relative mt-8 mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary sm:text-sm transition-all shadow-sm font-medium"
              placeholder="Search by shop name, owner, or address... (नाम, मालिक या पता से खोजें...)"
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

      {/* Shop Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredShops.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-inner">
            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-gray-100">
              <Store className="w-10 h-10 text-gray-300" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-heading font-black text-gray-900">No shops found</h3>
              <h4 className="text-sm font-bold text-primary/60 italic">कोई दुकान नहीं मिली</h4>
            </div>
            <p className="text-gray-400 mt-4 text-sm font-medium">Try adjusting your search or filter criteria. (कृपया अपनी खोज बदलें)</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShops.map((shop) => (
              <div key={shop.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col hover:-translate-y-1 group">
                <div className="p-8 flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg ${getAvatarColor(shop.name)} group-hover:scale-110 transition-transform`}>
                      <Store className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${getCategoryColor(shop.category)}`}>
                        {shop.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors h-14">{shop.name}</h3>
                  <p className="text-xs text-gray-400 font-bold mb-4">Proprietor: {shop.owner}</p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center text-sm font-bold bg-accent/10 px-3 py-2 rounded-xl text-gray-900">
                      <Star className="w-4 h-4 text-accent mr-2 fill-current" />
                      <div className="flex flex-col leading-tight">
                        <span>{shop.rating} Rated Store</span>
                        <span className="text-[10px] text-gray-400 italic">विश्वसनीय स्टोर ({shop.rating})</span>
                      </div>
                    </div>
                    <div className="flex items-start text-sm text-gray-500 pl-2">
                      <MapPin className="w-4 h-4 text-gray-300 mr-2 mt-0.5 shrink-0" />
                      <div className="flex flex-col leading-tight">
                        <span className="font-bold text-gray-700">{shop.address}</span>
                        <span className="text-[10px] italic">झंझारपुर, बिहार</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleCall(shop.phone)}
                    className="flex flex-col items-center justify-center py-2.5 px-4 bg-white border border-gray-200 text-dark font-black rounded-xl hover:bg-gray-100 hover:border-gray-300 active:scale-95 transition-all text-xs shadow-sm leading-tight gap-0.5"
                  >
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-primary shrink-0" /> Call Now</span>
                    <span className="text-[9px] opacity-70">कॉल करें</span>
                  </button>
                  <button
                    onClick={() => handleWhatsApp(shop.phone)}
                    className="flex flex-col items-center justify-center py-2.5 px-4 bg-[#25D366] text-white font-black rounded-xl hover:bg-[#20ba5a] active:scale-95 transition-all text-xs shadow-md shadow-green-500/10 leading-tight gap-0.5"
                  >
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 shrink-0" /> WhatsApp</span>
                    <span className="text-[9px] opacity-90">व्हाट्सएप</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
