import { Link } from 'react-router-dom';
import { Heart, Home, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-footer pt-16 pb-8 text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-white/10 pb-8 gap-6 text-center md:text-left">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-xl text-primary shadow-lg">
              <Home className="w-7 h-7" />
              <Heart className="w-3.5 h-3.5 absolute bottom-2.5 right-2.5 fill-primary stroke-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-white leading-tight uppercase tracking-tight">Gharbanoo</span>
              <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">Ghar Ka Pehla Kadam</span>
            </div>
          </Link>
          <p className="text-lg font-medium text-white/80 italic max-w-md">
            "India's marketplace for home construction experts"
          </p>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-accent font-heading font-bold uppercase tracking-widest text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">Home</Link></li>
              <li><Link to="/find-shops" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">Find Shops</Link></li>
              <li><Link to="/find-services" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">Find Experts</Link></li>
              <li><Link to="/join-provider" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">Join as Expert</Link></li>
              <li><Link to="/about" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">About Us</Link></li>
              <li><Link to="/contact" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">Contact</Link></li>
              <li><Link to="/privacy" className="text-base font-medium hover:text-accent transition-all flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-accent">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-accent font-heading font-bold uppercase tracking-widest text-sm">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/find-shops" className="text-base font-medium hover:text-accent transition-all">Find Shops</Link></li>
              <li><Link to="/find-services" className="text-base font-medium hover:text-accent transition-all">Contractors</Link></li>
              <li><Link to="/find-services" className="text-base font-medium hover:text-accent transition-all">Plumbers</Link></li>
              <li><Link to="/find-services" className="text-base font-medium hover:text-accent transition-all">Electricians</Link></li>
              <li><Link to="/find-services" className="text-base font-medium hover:text-accent transition-all">Carpenters</Link></li>
              <li><Link to="/find-services" className="text-base font-medium hover:text-accent transition-all">Painters</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-accent font-heading font-bold uppercase tracking-widest text-sm">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="p-2 bg-accent rounded-lg text-dark">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60 font-medium">WhatsApp</p>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-accent transition-colors">
                    9241562747
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <p className="text-base font-medium">Jhanjharpur, Bihar, India</p>
                  <p className="text-sm text-white/50 italic mt-1 font-semibold underline decoration-accent/30 decoration-2">"Currently serving Jhanjharpur only"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-white/40">
            © 2026 Gharbanoo | Built with ❤️ in Jhanjharpur, Bihar
          </p>
          <div className="flex items-center gap-4 text-sm font-medium text-white/40">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
