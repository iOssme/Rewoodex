import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-brand-offwhite pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-amber text-[10px] uppercase tracking-[0.2em] mb-4 block">Commission a Piece</span>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-deep mb-6">Let's create your masterpiece</h1>
          <p className="max-w-2xl mx-auto text-brand-charcoal/70 font-light text-lg">
            We work closely with every client to choose the perfect wood slab, select resin colors, and design custom bases. Begin the conversation below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Flow & Info */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col space-y-12">
            
            {/* Direct WhatsApp CTA */}
            <div className="bg-white p-8 border border-brand-warm/10 shadow-sm text-center">
              <h3 className="font-serif text-2xl text-brand-deep mb-4">Fastest Response</h3>
              <p className="text-brand-charcoal/70 font-light text-sm mb-6">
                Most Egyptian clients prefer to chat directly. Message our artisans on WhatsApp to see current slabs in the workshop.
              </p>
              <a 
                href="https://wa.me/201064612468?text=Hi%20ReWoodex,%20I'm%20interested%20in%20commissioning%20a%20piece"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#6DFF69] text-white px-6 py-4 uppercase tracking-[0.1em] text-sm font-medium hover:opacity-90 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="uppercase tracking-widest text-sm font-medium text-brand-deep mb-6">Studio Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start text-brand-charcoal/80 font-light text-sm">
                  <MapPin className="w-5 h-5 text-brand-gold mr-4 shrink-0" />
                  <span>ReWoodex Studio<br/>New Cairo, Egypt<br/>(Visits by appointment only)</span>
                </li>
                <li className="flex items-center text-brand-charcoal/80 font-light text-sm">
                  <Phone className="w-5 h-5 text-brand-gold mr-4 shrink-0" />
                  <span>+20 106 461 2468</span>
                </li>
                <li className="flex items-center text-brand-charcoal/80 font-light text-sm">
                  <Mail className="w-5 h-5 text-brand-gold mr-4 shrink-0" />
                  <span>studio@rewoodex.com</span>
                </li>
              </ul>
            </div>

            {/* Lead Time Notice */}
            <div className="bg-brand-cream/50 p-6 border-l-2 border-brand-gold flex items-start">
              <Clock className="w-5 h-5 text-brand-gold mr-4 mt-0.5 shrink-0" />
              <div>
                <h4 className="uppercase tracking-widest text-xs font-semibold text-brand-deep mb-1">Current Lead Time</h4>
                <p className="font-light text-sm text-brand-charcoal/80">
                  Custom commissions currently take <strong>4–8 weeks</strong> from design approval to delivery. We'll confirm your exact timeline after consultation.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 border border-brand-warm/10 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-serif text-3xl text-brand-deep mb-8 block">Enquiry Form</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors" placeholder="e.g. Omar Tarek" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors" placeholder="+20 1..." required />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="productLine" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Product Interest</label>
                  <select id="productLine" className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors appearance-none">
                    <option value="">Select a type...</option>
                    <option value="Dining Table">Dining Table</option>
                    <option value="Coffee Table">Coffee Table</option>
                    <option value="Mirror">Mirror</option>
                    <option value="Clock">Clock</option>
                    <option value="Custom">Other Custom Piece</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Preferred Size</label>
                  <input type="text" id="size" className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors" placeholder="e.g. 200x100 cm" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="resin" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Resin Color Preference</label>
                <input type="text" id="resin" className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors" placeholder="e.g. Transparent Black, Teal, Clear, Solid White" />
              </div>

              <div className="mb-10">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-brand-charcoal mb-2">Details & Vision</label>
                <textarea id="message" rows={5} className="w-full bg-brand-offwhite border border-brand-warm/20 px-4 py-3 focus:outline-none focus:border-brand-deep transition-colors resize-none" placeholder="Tell us about the space this piece will live in..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-deep text-brand-offwhite px-6 py-4 uppercase tracking-[0.1em] text-sm font-medium hover:bg-brand-amber transition-colors">
                Submit Enquiry
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
}
