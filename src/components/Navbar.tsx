import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const isProductsActive = ['/tables', '/mirrors', '/clocks'].includes(location.pathname);

  return (
    <nav className="sticky top-0 z-50 bg-brand-offwhite border-b border-brand-deep/10 h-[70px] flex items-center">
      <div className="w-full px-[40px]">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex flex-col">
            <img src="/logo.png" alt="ReWoodex Logo" className="h-8 md:h-10 w-auto object-contain" onError={(e) => {
              // Fallback if logo not yet uploaded
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="font-serif text-[24px] font-bold text-brand-deep tracking-[2px] uppercase hidden">REWOODEX</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-[30px] items-center">
            <Link
              to="/"
              className={`text-[12px] font-semibold tracking-[1px] uppercase transition-colors hover:text-brand-amber ${
                location.pathname === '/' ? 'text-brand-deep' : 'text-brand-deep'
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center text-[12px] font-semibold tracking-[1px] uppercase transition-colors hover:text-brand-amber ${
                  isProductsActive ? 'text-brand-amber' : 'text-brand-deep'
                }`}
              >
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <div className="bg-brand-offwhite border border-brand-deep/10 shadow-lg min-w-[150px] flex flex-col py-2">
                  <Link to="/tables" className="px-6 py-3 text-[12px] uppercase tracking-[1px] hover:bg-brand-cream transition-colors">Tables</Link>
                  <Link to="/mirrors" className="px-6 py-3 text-[12px] uppercase tracking-[1px] hover:bg-brand-cream transition-colors">Mirrors</Link>
                  <Link to="/clocks" className="px-6 py-3 text-[12px] uppercase tracking-[1px] hover:bg-brand-cream transition-colors">Clocks</Link>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-[12px] font-semibold tracking-[1px] uppercase transition-colors hover:text-brand-amber ${
                location.pathname === '/about' ? 'text-brand-deep' : 'text-brand-deep'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-[12px] font-semibold tracking-[1px] uppercase transition-colors hover:text-brand-amber ${
                location.pathname === '/contact' ? 'text-brand-deep' : 'text-brand-deep'
              }`}
            >
              Contact
            </Link>

            <Link to="/cart" className="relative ml-2 text-brand-deep hover:text-brand-amber transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-amber text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-brand-deep pointer-events-auto">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-amber text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-deep focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-offwhite border-b border-brand-warm/10 overflow-hidden absolute top-full left-0 right-0 z-40 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[14px] font-semibold tracking-widest uppercase border-b border-brand-warm/10"
              >
                Home
              </Link>
              <div className="block px-3 py-3 border-b border-brand-warm/10">
                <span className="text-[14px] font-semibold tracking-widest uppercase mb-2 block">Products</span>
                <div className="pl-4 flex flex-col gap-2">
                  <Link to="/tables" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] hover:text-brand-amber">Tables</Link>
                  <Link to="/mirrors" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] hover:text-brand-amber">Mirrors</Link>
                  <Link to="/clocks" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] hover:text-brand-amber">Clocks</Link>
                </div>
              </div>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[14px] font-semibold tracking-widest uppercase border-b border-brand-warm/10"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[14px] font-semibold tracking-widest uppercase border-b border-brand-warm/10"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
