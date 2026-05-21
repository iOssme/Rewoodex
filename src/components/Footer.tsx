import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-offwhite py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-4">
              <span className="font-serif text-3xl font-bold tracking-tight">ReWoodex</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">Cairo Studio</span>
            </Link>
            <p className="text-brand-cream/70 text-sm mt-4 font-light">
              Where centuries of woodworking technique meets modern resin art. Every piece is handcrafted in Egypt.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-gold">Collections</h4>
            <ul className="space-y-3 text-sm font-light text-brand-cream/80">
              <li><Link to="/tables" className="hover:text-brand-gold transition-colors">Tables</Link></li>
              <li><Link to="/mirrors" className="hover:text-brand-gold transition-colors">Mirrors</Link></li>
              <li><Link to="/clocks" className="hover:text-brand-gold transition-colors">Clocks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-gold">Studio</h4>
            <ul className="space-y-3 text-sm font-light text-brand-cream/80">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><span className="text-brand-cream/50 cursor-not-allowed">Care Guide</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-gold">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" aria-label="Instagram" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm font-light text-brand-cream/80 mb-2">Cairo, Egypt</p>
            <p className="text-sm font-light text-brand-cream/80">+20 106 461 2468</p>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-brand-cream/50">
          <p>&copy; {new Date().getFullYear()} ReWoodex. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Handmade in Cairo</p>
        </div>
      </div>
    </footer>
  );
}
