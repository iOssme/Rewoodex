import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-offwhite px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-white p-12 border border-brand-deep/10 max-w-2xl w-full shadow-sm"
        >
          <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl text-brand-deep mb-4">Order Confirmed</h1>
          <p className="text-brand-charcoal/70 font-light mb-8 max-w-md mx-auto">
            Thank you for choosing ReWoodex. Your artisan piece is now in queue. We will email you the order details and shipping updates soon.
          </p>
          <Link to="/" className="inline-flex bg-brand-deep text-brand-offwhite px-8 py-3 uppercase tracking-[0.1em] text-[13px] font-medium hover:bg-brand-amber transition-colors">
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-brand-offwhite min-h-[70vh] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl text-brand-deep mb-12">Secure Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-12 bg-white p-8 md:p-10 border border-brand-deep/10 shadow-sm">
              
              {/* Contact Details */}
              <section>
                <h2 className="font-serif text-2xl text-brand-deep mb-6 pb-2 border-b border-brand-deep/10">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">First Name</label>
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Last Name</label>
                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                </div>
              </section>

              {/* Shipping Details */}
              <section>
                <h2 className="font-serif text-2xl text-brand-deep mb-6 pb-2 border-b border-brand-deep/10">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Street Address</label>
                    <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Country</label>
                    <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">City</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Postal / Zip Code</label>
                    <input type="text" name="zip" required value={formData.zip} onChange={handleChange} className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite" />
                  </div>
                </div>
              </section>

              {/* Payment Details */}
              <section>
                <h2 className="font-serif text-2xl text-brand-deep mb-6 pb-2 border-b border-brand-deep/10 flex items-center justify-between">
                  Payment Method
                  <ShieldCheck className="w-6 h-6 text-brand-teal" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Card Number</label>
                    <input type="text" name="cardNumber" required value={formData.cardNumber} onChange={handleChange} placeholder="0000 0000 0000 0000" className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite font-mono tracking-widest" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">Expiry Date</label>
                    <input type="text" name="expiry" required value={formData.expiry} onChange={handleChange} placeholder="MM/YY" className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite font-mono" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-brand-charcoal mb-2">CVC</label>
                    <input type="text" name="cvc" required value={formData.cvc} onChange={handleChange} placeholder="123" className="w-full border border-brand-deep/20 px-4 py-3 focus:outline-none focus:border-brand-deep bg-brand-offwhite font-mono" />
                  </div>
                </div>
              </section>

              <button type="submit" className="w-full bg-brand-deep text-brand-offwhite px-6 py-4 text-[13px] uppercase tracking-[1px] font-semibold hover:bg-brand-amber transition-colors mt-8">
                Complete Order
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white border border-brand-deep/10 p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-brand-deep mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-brand-deep/5 pb-4">
                    <div className="w-16 h-20 bg-brand-cream relative flex-shrink-0">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-charcoal text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col flex-grow text-sm">
                      <span className="font-medium text-brand-deep">{item.name}</span>
                      <span className="text-brand-charcoal/50 text-[11px] uppercase tracking-widest mt-1">{item.category}</span>
                      <span className="text-brand-deep font-semibold mt-auto">${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-brand-charcoal/70">Subtotal</span>
                  <span className="font-medium text-brand-deep">${cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-charcoal/70">Shipping (Flat Rate)</span>
                  <span className="font-medium text-brand-deep">$150</span>
                </div>
                <div className="pt-4 border-t border-brand-deep/10 flex justify-between">
                  <span className="uppercase tracking-widest text-[13px] font-semibold text-brand-deep">Total</span>
                  <span className="font-semibold text-xl text-brand-deep">${cartTotal + 150}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
