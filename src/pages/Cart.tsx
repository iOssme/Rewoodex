import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-offwhite px-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-brand-deep mb-4">Your Cart is Empty</h1>
          <p className="text-brand-charcoal/70 font-light mb-8 max-w-md mx-auto">
            Ready to find your next masterpiece? Explore our curated collections of artisanal tables, mirrors, and clocks.
          </p>
          <Link to="/tables" className="inline-flex items-center justify-center border border-brand-deep text-brand-deep px-8 py-3 uppercase tracking-[0.1em] text-[13px] font-medium hover:bg-brand-deep hover:text-brand-offwhite transition-colors">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-offwhite min-h-[70vh] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl text-brand-deep mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="hidden border-b border-brand-deep/10 pb-4 sm:grid grid-cols-12 gap-4 text-[10px] uppercase tracking-widest text-brand-charcoal">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {items.map((item) => (
              <motion.div 
                layout 
                key={item.id} 
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center py-6 border-b border-brand-deep/5"
              >
                {/* Product Info */}
                <div className="col-span-1 border-b pb-4 sm:border-b-0 sm:pb-0 sm:col-span-6 flex items-center gap-6">
                  <div className="w-24 h-32 flex-shrink-0 bg-brand-cream relative">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-amber">{item.category}</span>
                    <h3 className="font-serif text-xl text-brand-deep my-1">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-charcoal/50 hover:text-red-500 text-[11px] uppercase tracking-wider flex items-center gap-1 mt-2 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="col-span-1 sm:col-span-2 flex justify-between sm:justify-center items-center">
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-brand-charcoal">Quantity</span>
                  <div className="flex items-center border border-brand-deep/10">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-brand-cream text-brand-deep transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-[13px]">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-brand-cream text-brand-deep transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-1 sm:col-span-2 flex justify-between sm:justify-end items-center">
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-brand-charcoal">Price</span>
                  <span className="text-brand-deep font-medium">${item.price}</span>
                </div>

                {/* Internal Total */}
                <div className="col-span-1 sm:col-span-2 flex justify-between sm:justify-end items-center">
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-brand-charcoal">Total</span>
                  <span className="text-brand-deep font-semibold">${item.price * item.quantity}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-brand-deep/10 p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-brand-deep mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[13px]">
                  <span className="text-brand-charcoal/70">Subtotal</span>
                  <span className="font-medium text-brand-deep">${cartTotal}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-brand-charcoal/70">Shipping</span>
                  <span className="font-medium text-brand-deep">Calculated at checkout</span>
                </div>
                <div className="pt-4 border-t border-brand-deep/10 flex justify-between">
                  <span className="uppercase tracking-widest text-[11px] font-semibold text-brand-deep">Estimated Total</span>
                  <span className="font-semibold text-lg text-brand-deep">${cartTotal}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-brand-deep text-brand-offwhite px-6 py-4 text-[13px] uppercase tracking-[1px] font-semibold hover:bg-brand-amber transition-colors"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
