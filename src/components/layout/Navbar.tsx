import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { GooglePlayButton } from '../GooglePlayButton';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="company-nav"><a className="company-brand" href="/#top"><span>G</span>GharBanoo</a><button className="company-menu" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X /> : <Menu />}</button><nav className={open ? 'company-links company-links-open' : 'company-links'}><a href="/#company" onClick={close}>Company</a><a href="/#product" onClick={close}>Product</a><a href="/#vision" onClick={close}>Vision</a><a href="/#contact" onClick={close}>Contact</a></nav><div className="company-nav-cta"><GooglePlayButton compact /><ArrowUpRight size={14} /></div></header>;
}
