import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  category: string;
  name: string;
  description: string;
  priceStart: number;
  imageUrl: string;
  tags?: string[];
  delay?: number;
}

export default function ProductCard({ id, category, name, description, priceStart, imageUrl, tags = [], delay = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price: priceStart, imageUrl, quantity: 1, category });
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group flex flex-col h-full bg-white border border-brand-warm/10 overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-offwhite">
        <img 
          src={imageUrl} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-brand-offwhite/90 backdrop-blur-sm text-brand-deep text-[10px] uppercase font-medium tracking-widest px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-brand-amber text-[10px] uppercase tracking-[0.2em] mb-2 block">{category}</span>
        <h3 className="font-serif text-2xl text-brand-deep mb-2">{name}</h3>
        <p className="text-brand-charcoal/70 text-sm font-light leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-brand-warm/10">
          <span className="font-sans font-medium text-brand-deep">${priceStart}</span>
          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="text-brand-deep hover:text-brand-amber transition-colors text-xs uppercase tracking-wider font-semibold hidden sm:block"
            >
              Enquire
            </Link>
            <button 
              onClick={handleAddToCart}
              className="flex items-center bg-brand-deep text-brand-offwhite px-4 py-2 text-[11px] uppercase tracking-wider font-semibold hover:bg-brand-amber transition-colors"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
