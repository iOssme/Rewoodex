import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Trees, Droplet, Paintbrush, Hammer, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CategoryProps {
  type: 'tables' | 'mirrors' | 'clocks';
}

const CATEGORY_DATA = {
  tables: {
    title: 'Tables',
    description: 'Bespoke dining, coffee, and console tables. Our signature river designs combining natural grain and fluid geometry.',
    heroImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2670&auto=format&fit=crop',
    filters: ['All', 'Dining', 'Coffee', 'Side & Console', 'Bar & Kitchen'],
    products: [
      { id: '1', category: 'Coffee Table', name: 'Nile Current', priceStart: 850, tags: ['Olive Wood', 'Teal Resin'], imageUrl: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=2669&auto=format&fit=crop', description: 'A breathtaking coffee table capturing the spirit of the Nile.' },
      { id: '2', category: 'Dining Table', name: 'Midnight Onyx', priceStart: 2400, tags: ['Walnut', 'Black Resin'], imageUrl: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2576&auto=format&fit=crop', description: 'Grand dining table seating eight, with a deep black river center.' },
      { id: '3', category: 'Side & Console', name: 'Desert Mirage', priceStart: 600, tags: ['Oak', 'Clear Resin'], imageUrl: 'https://images.unsplash.com/photo-1532372576067-17eb481fb2e3?q=80&w=2674&auto=format&fit=crop', description: 'Minimalist console with subtle resin infills preserving the natural edge.' },
      { id: '4', category: 'Dining Table', name: 'Golden Hour', priceStart: 2800, tags: ['Ash Wood', 'Amber Resin'], imageUrl: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2565&auto=format&fit=crop', description: 'Warm amber tones create a glowing centerpiece for your dining room.' },
      { id: '5', category: 'Coffee Table', name: 'Arctic Flow', priceStart: 950, tags: ['Maple', 'White Resin'], imageUrl: 'https://images.unsplash.com/photo-1565706596131-7e7e399589a1?q=80&w=2609&auto=format&fit=crop', description: 'Crisp white resin meets pale maple for a modern, airy aesthetic.' },
      { id: '6', category: 'Bar & Kitchen', name: 'Industrial Edge', priceStart: 1200, tags: ['Walnut', 'Steel Legs'], imageUrl: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=2574&auto=format&fit=crop', description: 'High bar table marrying raw wood elements with industrial structural legs.' },
    ]
  },
  mirrors: {
    title: 'Mirrors',
    description: 'Reflect your space through a frame of natural beauty. From striking floor mirrors to intricate wall pieces.',
    heroImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2670&auto=format&fit=crop',
    filters: [],
    products: [
      { id: 'm1', category: 'Wall Mirror', name: 'The Arch', priceStart: 450, tags: ['Oak'], imageUrl: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2730&auto=format&fit=crop', description: 'Classic arch frame with a slender, sophisticated resin border.' },
      { id: 'm2', category: 'Floor Mirror', name: 'Grand Reflection', priceStart: 890, tags: ['Walnut', 'Clear Resin'], imageUrl: 'https://images.unsplash.com/photo-1617104443194-d419fba85fdf?q=80&w=2574&auto=format&fit=crop', description: 'A massive leaning floor mirror, adding dramatic depth to any room.' },
      { id: 'm3', category: 'Decorative', name: 'Eclipse', priceStart: 350, tags: ['Olive Wood', 'Round'], imageUrl: 'https://images.unsplash.com/photo-1602028682029-79878dc44f0b?q=80&w=2670&auto=format&fit=crop', description: 'Circular mirror encased perfectly in an asymmetrical live edge.' },
      { id: 'm4', category: 'Wall Mirror', name: 'Coastal Frame', priceStart: 400, tags: ['Driftwood', 'Blue Resin'], imageUrl: 'https://images.unsplash.com/photo-1605337222168-52fb94711319?q=80&w=2670&auto=format&fit=crop', description: 'Inspired by the Red Sea, blending sandy tones with oceanic blue.' },
    ]
  },
  clocks: {
    title: 'Clocks',
    description: 'Time measured in rings of growth. Unique wall clocks that double as captivating resin art installations.',
    heroImage: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=2670&auto=format&fit=crop',
    filters: [],
    products: [
      { id: 'c1', category: 'Wall Clock', name: 'Infinity Circle', priceStart: 250, tags: ['Walnut', 'Silent Sweep'], imageUrl: 'https://images.unsplash.com/photo-1582236371754-5d55b8be3bd5?q=80&w=2574&auto=format&fit=crop', description: 'A dark, brooding piece with gold-leaf embedded into deep resin.' },
      { id: 'c2', category: 'Wall Clock', name: 'Geode Time', priceStart: 320, tags: ['Olive Wood', 'Amethyst Resin'], imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2832&auto=format&fit=crop', description: 'Features a center core that mimics a cracked crystal geode.' },
      { id: 'c3', category: 'Large Clock', name: 'The Studio', priceStart: 400, tags: ['Oak', 'Minimalist'], imageUrl: 'https://images.unsplash.com/photo-1506456181678-795b95a43878?q=80&w=2676&auto=format&fit=crop', description: 'An oversized, minimalist clock face allowing the wood grain to speak.' },
    ]
  }
};

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
