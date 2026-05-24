import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Trees, Droplet, Paintbrush, Hammer, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORY_DATA } from '../data/products';

interface CategoryProps {
  type: 'tables' | 'mirrors' | 'clocks';
}

export default function Category({ type }: CategoryProps) {
  const data = CATEGORY_DATA[type];
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Reset filter when type changes
  useEffect(() => {
    setActiveFilter('All');
    window.scrollTo(0, 0);
  }, [type]);

  const filteredProducts = activeFilter === 'All' 
    ? data.products 
    : data.products.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col">
      {/* 2. Hero Banner */}
      <section className="relative h-[60vh] flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8 bg-brand-charcoal text-brand-offwhite">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-center text-[10px] uppercase tracking-widest text-brand-gold mb-4">
            <Link to="/" className="hover:text-brand-offwhite transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span>{data.title}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">{data.title}</h1>
          <p className="max-w-xl text-brand-cream/80 font-light text-lg">
            {data.description}
          </p>
        </div>
      </section>

      <div className="flex-grow bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Social Proof Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs uppercase tracking-widest text-brand-charcoal mb-16 border-b border-brand-warm/10 pb-8">
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-brand-teal mr-2" /> 300+ pieces crafted</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-brand-teal mr-2" /> 7+ years expertise</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-brand-teal mr-2" /> 5-star studio reviews</span>
          </div>

          {/* 3. Filter tabs (Only if tables) */}
          {data.filters.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {data.filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs uppercase tracking-widest px-6 py-2 transition-all ${
                    activeFilter === filter 
                      ? 'bg-brand-deep text-brand-offwhite' 
                      : 'border border-brand-warm/20 text-brand-deep hover:border-brand-deep'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}

          {/* 4. Product grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${type === 'clocks' ? 'lg:grid-cols-2 lg:gap-16' : 'lg:grid-cols-3'} gap-8`}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard {...product} delay={i * 0.1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-brand-charcoal/50">
              No products found in this category.
            </div>
          )}
        </div>
      </div>

      {/* 5. Materials strip */}
      <section className="bg-brand-cream py-16 border-y border-brand-warm/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl text-brand-deep">Our Master Materials</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Trees className="w-8 h-8 text-brand-amber mb-4 stroke-1" />
              <h4 className="uppercase text-xs tracking-widest font-medium mb-2">Aged Hardwoods</h4>
              <p className="text-sm font-light text-brand-charcoal/70">Olive, Walnut, & Oak slabs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Droplet className="w-8 h-8 text-brand-teal mb-4 stroke-1" />
              <h4 className="uppercase text-xs tracking-widest font-medium mb-2">Premium Epoxy</h4>
              <p className="text-sm font-light text-brand-charcoal/70">UV-resistant, crystal clear resins</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Paintbrush className="w-8 h-8 text-brand-gold mb-4 stroke-1" />
              <h4 className="uppercase text-xs tracking-widest font-medium mb-2">Artisan Tints</h4>
              <p className="text-sm font-light text-brand-charcoal/70">Custom color matching</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Hammer className="w-8 h-8 text-brand-deep mb-4 stroke-1" />
              <h4 className="uppercase text-xs tracking-widest font-medium mb-2">Steel & Brass</h4>
              <p className="text-sm font-light text-brand-charcoal/70">Forged architectural bases</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Commission CTA */}
      <section className="bg-brand-charcoal text-brand-offwhite py-20 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Don't see what you envision?</h2>
          <p className="text-brand-cream/70 font-light mb-8">
            These pieces represent a fraction of what's possible. Every slab is unique, and your piece will be too.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center border border-brand-gold bg-brand-gold text-brand-deep px-8 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-transparent hover:text-brand-gold transition-colors">
            Start a Custom Commission
          </Link>
        </div>
      </section>
    </div>
  );
}
