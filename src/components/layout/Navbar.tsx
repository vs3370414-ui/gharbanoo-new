import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home, LogIn, LogOut, User, ChevronDown, FileText } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../AuthProvider';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, openAuthModal, logout } = useAuth();

  const links = [
    { nameEn: 'Home', nameHi: 'होम', path: '/' },
    { nameEn: 'House Plans', nameHi: 'हाउस प्लान', path: '/house-plans' },
    { nameEn: 'Find Experts', nameHi: 'एक्सपर्ट्स', path: '/find-services' },
    { nameEn: 'Join as Expert', nameHi: 'एक्सपर्ट बनें', path: '/join-provider' },
    { nameEn: 'About', nameHi: 'बारे में', path: '/about' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-dark hover:text-primary transition-colors focus:outline-none"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-9 h-9 rounded-full border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                  <div className="hidden lg:flex flex-col items-start leading-none gap-0.5">
                    <span className="max-w-[100px] truncate text-[13px] font-bold">{user.displayName?.split(' ')[0] || user.phoneNumber}</span>
                    <span className="text-[10px] text-gray-500">My Account</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-gray-50 mb-1">
                      <p className="text-sm font-bold text-dark truncate">{user.displayName || 'User'}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email || user.phoneNumber}</p>
                    </div>
                    <Link to="#" className="flex flex-col px-4 py-2 text-dark hover:bg-red-50 hover:text-primary transition-colors">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-bold">My Profile</span>
                      </div>
                      <span className="text-[10px] pl-6 text-gray-500">मेरी प्रोफाइल</span>
                    </Link>
                    <Link to="#" className="flex flex-col px-4 py-2 text-dark hover:bg-red-50 hover:text-primary transition-colors">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm font-bold">My Requests</span>
                      </div>
                      <span className="text-[10px] pl-6 text-gray-500">मेरी रिक्वेस्ट</span>
                    </Link>
                    <div className="border-t border-gray-50 my-1"></div>
                    <button
                      onClick={() => { logout(); setIsDropdownOpen(false); }}
                      className="w-full flex flex-col px-4 py-2 text-primary hover:bg-red-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-2">
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-bold">Sign Out</span>
                      </div>
                      <span className="text-[10px] pl-6 text-primary/70">साइन आउट</span>
                    </button>
                  </div>
                )}
              </div>
            ) : null}

            {!user && (
              <button
                onClick={openAuthModal}
                className="flex flex-col items-center leading-none group text-dark hover:text-primary transition-colors mr-2"
              >
                <span className="text-sm font-bold">Sign In</span>
                <span className="text-[10px] font-medium opacity-70">साइन इन</span>
              </button>
            )}

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
            {user && (
              <div className="flex items-center gap-3 px-3 py-3 mb-2 border-b border-gray-100">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                )}
                <div className="overflow-hidden">
                  <div className="font-bold text-gray-900 truncate text-[16px]">{user.displayName || user.phoneNumber}</div>
                  <div className="text-[12px] text-gray-500">मेरे अकाउंट (My Account)</div>
                </div>
              </div>
            )}
            
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
            
            {user ? (
              <div className="space-y-1">
                <Link to="#" className="flex flex-col px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span className="text-[16px]">My Profile</span>
                  </div>
                  <span className="text-[13px] pl-8 text-gray-500">मेरी प्रोफाइल</span>
                </Link>
                <Link to="#" className="flex flex-col px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" />
                    <span className="text-[16px]">My Requests</span>
                  </div>
                  <span className="text-[13px] pl-8 text-gray-500">मेरी रिक्वेस्ट</span>
                </Link>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full text-left flex flex-col px-4 py-3 text-primary hover:bg-red-50 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5" />
                    <span className="text-[16px] font-bold">Sign Out</span>
                  </div>
                  <span className="text-[13px] pl-8 opacity-70">साइन आउट</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-2">
                <button
                  onClick={() => { openAuthModal(); setIsOpen(false); }}
                  className="w-full text-left flex flex-col px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LogIn className="w-5 h-5" />
                    <span className="text-[16px] font-bold">Sign In</span>
                  </div>
                  <span className="text-[13px] pl-8 opacity-70">साइन इन</span>
                </button>
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
