import { Link } from 'react-router-dom';
export function Footer() { return <footer className="company-footer"><a className="company-brand" href="/#top"><span>G</span>GharBanoo</a><div><a href="/#company">Company</a><a href="/#product">Product</a><a href="/#contact">Contact</a><Link to="/privacy">Privacy</Link></div><p>© {new Date().getFullYear()} GharBanoo. All rights reserved.</p></footer>; }
