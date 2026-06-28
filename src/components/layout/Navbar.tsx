import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { nameEn: 'Home', nameHi: 'होम', path: '/' },
    { nameEn: 'Find Shops', nameHi: 'दुकानें खोजें', path: '/find-shops' },
    { nameEn: 'Find Experts', nameHi: 'एक्सपर्ट्स', path: '/find-services' },
    { nameEn: 'Join as Expert', nameHi: 'एक्सपर्ट बनें', path: '/join-provider' },
    { nameEn: 'About', nameHi: 'बारे में', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-lg text-primary group-hover:border-primary transition-all shadow-sm">
                <Home className="w-6 h-6" />
                <Heart className="w-3 h-3 absolute bottom-2 right-2 fill-primary stroke-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-dark leading-tight tracking-tight uppercase">Gharbanoo</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-grow md:space-x-4 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={link.nameEn}
                to={link.path}
                className={cn(
                  "flex flex-col items-center transition-colors hover:text-primary leading-tight",
                  location.pathname === link.path ? "text-primary" : "text-dark/80"
                )}
              >
                <span className="text-[14px] font-bold tracking-wide">{link.nameEn}</span>
                <span className="text-[11px] font-medium opacity-70">{link.nameHi}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <Link
              to="/find-services"
              className="inline-flex flex-col items-center justify-center px-5 py-2 border border-transparent rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-md hover:shadow-lg active:scale-95 leading-none"
            >
              <span className="text-[14px] font-bold">Find Experts</span>
              <span className="text-[10px] opacity-90">एक्सपर्ट्स खोजें</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-dark hover:text-primary hover:bg-red-50 transition-all focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.nameEn}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl transition-all",
                  location.pathname === link.path
                    ? "text-primary bg-red-50 font-bold"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                <div className="flex flex-col">
                  <span className="text-[16px]">{link.nameEn}</span>
                  <span className="text-[13px] opacity-70">{link.nameHi}</span>
                </div>
              </Link>
            ))}
            
            <div className="space-y-4 pt-4">
              <a
                href="https://wa.me/919241562747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center mx-3 px-6 py-3 rounded-xl text-white bg-primary hover:bg-primary-dark shadow-md transition-all active:scale-95"
              >
                <span className="text-[16px] font-bold">WhatsApp Us</span>
                <span className="text-[13px] opacity-90">हमें व्हाट्सएप करें</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
