import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, PenTool, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="flex flex-col md:flex-row w-full md:h-[380px] mt-0">
        <div className="flex-1 bg-brand-deep text-brand-offwhite flex flex-col justify-center px-8 py-16 md:py-0 md:px-[60px] relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="font-serif text-[48px] leading-[1.1] mb-[20px]">
              Where Wood<br/>
              Meets Living Resin
            </h1>
            <Link to="/tables" className="bg-brand-gold text-white px-[28px] py-[14px] text-[13px] uppercase tracking-[2px] font-semibold w-fit hover:bg-brand-gold-light transition-colors">
              Explore Collection
            </Link>
          </motion.div>
          {/* Arrow */}
          <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-45 w-[40px] h-[40px] bg-brand-deep z-10"></div>
        </div>
        <div className="flex-1 bg-brand-warm flex items-center justify-center overflow-hidden h-[300px] md:h-auto">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#3D2513] to-brand-warm text-white/20 text-[14px] italic relative">
            <img 
              src="/hero-table.jpg" 
              alt="Premium Resin River Table" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1605337222168-52fb94711319?q=80&w=2670&auto=format&fit=crop'; }}
            />
          </div>
        </div>
      </section>

      {/* 2. Category Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-3 md:h-[260px] bg-[#FAF7F2] w-full">
        <Link to="/tables" className="relative overflow-hidden border-b md:border-b-0 md:border-r border-brand-deep/5 flex flex-col justify-end p-[30px] hover:bg-brand-cream transition-colors duration-300 group">
          <img src="/tables-category.jpg" alt="Tables" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop'; }} />
          <span className="text-[11px] uppercase tracking-[2px] text-brand-amber mb-[5px] relative z-10">Collection 01</span>
          <h3 className="font-serif text-[24px] mb-[10px] text-brand-deep relative z-10">Artisan Tables</h3>
          <span className="text-brand-deep text-[12px] font-bold flex items-center gap-[8px] relative z-10 uppercase tracking-[1px]">Shop Tables <ArrowRight className="w-4 h-4 ml-1" /></span>
        </Link>
        <Link to="/mirrors" className="relative overflow-hidden border-b md:border-b-0 md:border-r border-brand-deep/5 flex flex-col justify-end p-[30px] hover:bg-brand-cream transition-colors duration-300 group">
          <img src="/mirrors-category.jpg" alt="Mirrors" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop'; }} />
          <span className="text-[11px] uppercase tracking-[2px] text-brand-amber mb-[5px] relative z-10">Collection 02</span>
          <h3 className="font-serif text-[24px] mb-[10px] text-brand-deep relative z-10">Luminous Mirrors</h3>
          <span className="text-brand-deep text-[12px] font-bold flex items-center gap-[8px] relative z-10 uppercase tracking-[1px]">Shop Mirrors <ArrowRight className="w-4 h-4 ml-1" /></span>
        </Link>
        <Link to="/clocks" className="relative overflow-hidden flex flex-col justify-end p-[30px] hover:bg-brand-cream transition-colors duration-300 group">
          <img src="/clocks-category.jpg" alt="Clocks" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=1000&auto=format&fit=crop'; }} />
          <span className="text-[11px] uppercase tracking-[2px] text-brand-amber mb-[5px] relative z-10">Collection 03</span>
          <h3 className="font-serif text-[24px] mb-[10px] text-brand-deep relative z-10">Resin Clocks</h3>
          <span className="text-brand-deep text-[12px] font-bold flex items-center gap-[8px] relative z-10 uppercase tracking-[1px]">Shop Clocks <ArrowRight className="w-4 h-4 ml-1" /></span>
        </Link>
      </section>

      {/* 3. Trust Strip */}
      <section className="bg-brand-charcoal h-auto md:h-[58px] flex items-center justify-center py-4 md:py-0 w-full text-[11px] uppercase tracking-[1.5px] text-brand-offwhite">
        <div className="flex flex-wrap text-center justify-center gap-6 md:gap-[50px] items-center px-4 w-full">
          <div className="flex items-center gap-[10px]">
             <div className="w-[4px] h-[4px] bg-brand-gold rounded-full"></div>
             <span>100% Handmade</span>
          </div>
          <div className="flex items-center gap-[10px]">
             <div className="w-[4px] h-[4px] bg-brand-gold rounded-full"></div>
             <span>5-Year Guarantee</span>
          </div>
          <div className="flex items-center gap-[10px]">
             <div className="w-[4px] h-[4px] bg-brand-gold rounded-full"></div>
             <span>Custom Orders</span>
          </div>
          <div className="flex items-center gap-[10px]">
             <div className="w-[4px] h-[4px] bg-brand-gold rounded-full"></div>
             <span>Cairo Studio</span>
          </div>
        </div>
      </section>

      {/* 4. Featured Products Mosaic */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <span className="text-brand-amber text-[10px] uppercase tracking-[0.2em] mb-2 block">Masterpieces</span>
          <h2 className="font-serif text-4xl text-brand-deep">Featured Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mosaic logic */}
          <div className="relative aspect-square group overflow-hidden md:col-span-2 lg:col-span-2 lg:row-span-2">
            <img src="https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/1.jpg" loading="lazy" alt="Olive Wood Coffee Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-brand-gold text-xs uppercase tracking-widest mb-2">Olive Wood & Teal Resin</span>
              <h3 className="font-serif text-2xl text-white">The Mediterranean Edge</h3>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full lg:aspect-square group overflow-hidden">
            <img src="https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/8.jpg" loading="lazy" alt="Walnut Wall Mirror" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-brand-gold text-xs uppercase tracking-widest mb-2">Walnut & Clear Resin</span>
              <h3 className="font-serif text-xl text-white">Eternity Mirror</h3>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full lg:aspect-square group overflow-hidden">
            <img src="https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/7.jpg" loading="lazy" alt="Resin Wall Clock" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-brand-gold text-xs uppercase tracking-widest mb-2">Oak & Onyx Resin</span>
              <h3 className="font-serif text-xl text-white">Midnight Tracker</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Teaser */}
      <section className="py-24 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1622372736546-2e62680fac81?q=80&w=2603&auto=format&fit=crop" loading="lazy" alt="Workshop 1" className="w-full aspect-[4/5] object-cover rounded-sm mt-8" />
              <img src="https://images.unsplash.com/photo-1595821946356-4279abfb4c36?q=80&w=2670&auto=format&fit=crop" loading="lazy" alt="Workshop 2" className="w-full aspect-[4/5] object-cover rounded-sm" />
            </div>
            <div>
              <span className="text-brand-amber text-[10px] uppercase tracking-[0.2em] mb-4 block">Our Story</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-brand-deep mb-6">Born in Cairo, <br/>Crafted for the World</h2>
              <p className="text-brand-charcoal/80 font-light leading-relaxed mb-8">
                Every piece of ReWoodex furniture is a labor of love, bringing together the raw, unpredictable beauty of 
                sustainably sourced Egyptian and imported woods, and the precise, fluid elegance of liquid resin. 
                We are a small atelier dedicated to the pursuit of perfection.
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-teal uppercase tracking-wider font-medium text-sm hover:text-brand-deep transition-colors group">
                Read our story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Steps */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-deep">The Craftsmanship</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { num: "01", title: "Wood Selection", desc: "Sourcing unique timber with undeniable character and live edges." },
            { num: "02", title: "Milling & Prep", desc: "Kiln-drying, planing, and meticulous sanding for the perfect mold." },
            { num: "03", title: "Resin Pour", desc: "Tinting and pouring premium epoxy in controlled layers for depth." },
            { num: "04", title: "Refined Finish", desc: "Polishing to a glass-like shine or a satin touch, sealed for life." }
          ].map((step, i) => (
            <div key={step.num} className="flex flex-col relative">
              {i !== 3 && <div className="hidden md:block absolute top-[1.125rem] left-[2.5rem] right-[-1rem] h-[1px] bg-brand-warm/20"></div>}
              <span className="text-brand-gold font-serif text-2xl italic mb-4 bg-brand-offwhite inline-block w-max pr-4 relative z-10">{step.num}</span>
              <h4 className="uppercase tracking-widest text-sm font-medium mb-3">{step.title}</h4>
              <p className="text-sm font-light text-brand-charcoal/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Commission CTA */}
      <section className="bg-brand-charcoal text-brand-offwhite py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Every piece is yours alone.</h2>
          <p className="text-brand-cream/70 font-light mb-10 max-w-xl mx-auto">
            Work directly with our artisans to select your slabs, choose your resin tint, and create a masterpiece that fits your space perfectly.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center border border-brand-gold bg-brand-gold text-brand-deep px-8 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-transparent hover:text-brand-gold transition-colors">
            Commission Now
          </Link>
        </div>
      </section>
    </div>
  );
}
