import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero / Brand Story */}
      <section className="pt-24 pb-16 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-amber text-[10px] uppercase tracking-[0.2em] mb-4 block">Our Story</span>
              <h1 className="font-serif text-5xl md:text-6xl text-brand-deep mb-8 leading-tight">
                Born in Cairo.<br/>Centuries of woodworking meets modern resin art.
              </h1>
              <div className="space-y-6 text-brand-charcoal/80 font-light text-lg leading-relaxed">
                <p>
                  ReWoodex began with a simple fascination: what happens when you combine the chaotic, unpredictable beauty of ancient tree growth with the geometric perfection of liquid resin?
                </p>
                <p>
                  In our Cairo atelier, we don't manufacture furniture; we curate nature. Every slab of walnut, olive, or oak carries centuries of history in its grain. The burls, the cracks, the live edges—these are not defects to be milled away, but stories to be preserved forever in crystal-clear epoxy.
                </p>
                <p>
                  We are proud to champion Egyptian craftsmanship on a global standard, delivering heirloom pieces that command the room.
                </p>
              </div>
            </motion.div>

            {/* 2-Col Staggered Gallery */}
            <div className="grid grid-cols-2 gap-6 relative">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <img src="https://images.unsplash.com/photo-1542104593-3ea760d62ab9?q=80&w=2574&auto=format&fit=crop" loading="lazy" alt="Sanding wood" className="w-full aspect-[4/5] object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <img src="https://images.unsplash.com/photo-1595821946356-4279abfb4c36?q=80&w=2670&auto=format&fit=crop" loading="lazy" alt="Resin pour" className="w-full aspect-[4/5] object-cover border-4 border-brand-offwhite shadow-2xl relative z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-brand-deep text-brand-cream/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-brand-warm/30">
            <div className="flex flex-col">
              <span className="font-serif text-5xl text-brand-gold mb-2">7+</span>
              <span className="uppercase text-xs tracking-widest">Years Expertise</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-5xl text-brand-gold mb-2">300+</span>
              <span className="uppercase text-xs tracking-widest">Masterpieces Crafted</span>
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-serif text-5xl text-brand-gold mb-2">100%</span>
              <span className="uppercase text-xs tracking-widest">Handmade</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-5xl text-brand-gold mb-2">1</span>
              <span className="uppercase text-xs tracking-widest">Cairo Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Craftsmanship Process */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-amber text-[10px] uppercase tracking-[0.2em] mb-4 block">The Process</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-deep">From Forest to Living Room</h2>
        </div>
        
        <div className="space-y-24">
          {[
            { 
              num: "01", 
              title: "Wood Selection & Sourcing", 
              desc: "It begins with the hunt. We source sustainably felled timber, looking for extreme character—deep voids, dramatic grains, and sweeping live edges. The wood must be kiln-dried to specific moisture levels (usually around 8%) to ensure it will never warp or crack after it leaves our studio.",
              img: "https://images.unsplash.com/photo-1549487920-7212450ba1e0?q=80&w=2670&auto=format&fit=crop"
            },
            { 
              num: "02", 
              title: "Milling & Preparation", 
              desc: "The slabs are flattened using a custom router sled until perfectly parallel. The live edges are meticulously cleaned by hand using chisels and wire brushes, removing loose bark while preserving the organic contour shaped by nature itself.",
              img: "https://images.unsplash.com/photo-1622372736546-2e62680fac81?q=80&w=2603&auto=format&fit=crop",
              reverse: true
            },
            { 
              num: "03", 
              title: "The Resin Pour", 
              desc: "The heart of our process. The prepared slabs are clamped into a leak-proof melamine mold. We mix premium, slow-curing epoxy resin, carefully tinting it to client specifications. For deep pours, this must be done in a temperature-controlled room to prevent exothermic overheating, curing for up to 72 hours.",
              img: "https://images.unsplash.com/photo-1582236371754-5d55b8be3bd5?q=80&w=2574&auto=format&fit=crop"
            },
            { 
              num: "04", 
              title: "Surfacing & Refined Finish", 
              desc: "Once cured, the piece is removed from the mold and flattened again. Then begins the arduous sanding process, progressing through grit levels to achieve a flawless slate. We finish every table with a premium hard-wax oil, binding with the wood fibers to protect it while maintaining a natural, tactile feel.",
              img: "https://images.unsplash.com/photo-1581428982868-e410dd127810?q=80&w=2574&auto=format&fit=crop",
              reverse: true
            }
          ].map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${step.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] overflow-hidden -mx-4 sm:mx-0">
                  <img src={step.img} loading="lazy" alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className={`absolute top-8 ${step.reverse ? '-right-6' : '-left-6'} bg-brand-gold text-brand-deep font-serif text-3xl italic p-6 leading-none shadow-xl hidden md:block`}>
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <span className="text-brand-gold font-serif text-3xl italic mb-4 block md:hidden">{step.num}</span>
                <h3 className="font-serif text-3xl text-brand-deep mb-6">{step.title}</h3>
                <p className="text-brand-charcoal/80 font-light leading-relaxed text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal text-brand-offwhite py-24 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl mb-8">Ready to start?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center border border-brand-gold bg-brand-gold text-brand-deep px-10 py-5 uppercase tracking-[0.15em] text-sm font-medium hover:bg-transparent hover:text-brand-gold transition-colors">
            Commission Your Piece
          </Link>
        </div>
      </section>
    </div>
  );
}
