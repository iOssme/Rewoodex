import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ShoppingCart, MessageSquare, ArrowRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PRODUCTS, SearchableProduct } from '../data/products';
import { useCart } from '../context/CartContext';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableProduct[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SearchableProduct | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Handle outside clicks to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update filtered list when typing
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = ALL_PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(lowerQuery);
      const matchCategory = product.category.toLowerCase().includes(lowerQuery);
      const matchDescription = product.description.toLowerCase().includes(lowerQuery);
      const matchTags = product.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
      return matchName || matchCategory || matchDescription || matchTags;
    });

    setResults(filtered);
  }, [query]);

  const handleResultClick = (product: SearchableProduct) => {
    setSelectedProduct(product);
    setShowDropdown(false);
    setQuery('');
  };

  const handleAddToCart = (product: SearchableProduct) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.priceStart,
      imageUrl: product.imageUrl,
      quantity: 1,
      category: product.category,
    });
    // Add brief confirmation status in premium way or dismiss
    setSelectedProduct(null);
  };

  const handleWhatsAppEnquiry = (product: SearchableProduct) => {
    const text = `Hi ReWoodex, I am highly interested in the custom handcrafted "${product.name}" ${product.category}. Please let me know the customization options and timeline.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/201064612468?text=${encodedText}`, '_blank');
  };

  const handleGoToCategory = (product: SearchableProduct) => {
    setSelectedProduct(null);
    navigate(`/${product.type}`);
  };

  return (
    <div className="relative w-full max-w-[280px]" ref={dropdownRef}>
      {/* Search Input Box */}
      <div className="flex items-center bg-brand-cream/50 hover:bg-brand-cream border border-brand-deep/10 focus-within:border-brand-amber/40 focus-within:bg-white px-3 py-1.5 h-9 transition-all duration-300">
        <Search className="w-4 h-4 text-brand-deep/40 mr-2 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          placeholder="Search tables, materials..."
          className="bg-transparent text-brand-deep font-sans placeholder:text-brand-deep/40 text-xs w-full focus:outline-none focus:ring-0"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="text-brand-deep/40 hover:text-brand-deep transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Floating Dropdown Overlay */}
      <AnimatePresence>
        {showDropdown && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 md:left-auto md:w-[320px] bg-brand-offwhite border border-brand-deep/15 shadow-2xl mt-1.5 z-[150] max-h-[380px] overflow-y-auto flex flex-col"
          >
            {/* Header of Search Dropdown */}
            <div className="sticky top-0 bg-brand-cream/95 backdrop-blur-sm px-4 py-2 border-b border-brand-deep/10 flex justify-between items-center text-[10px] uppercase tracking-widest text-brand-charcoal/50">
              <span>{results.length} matched artisans</span>
              <span className="text-brand-amber text-[9px]">Live catalog</span>
            </div>

            {/* Results Grid */}
            <div className="p-2 flex flex-col gap-1.5">
              {results.length > 0 ? (
                results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleResultClick(product)}
                    type="button"
                    className="flex text-left items-center p-2 rounded hover:bg-brand-cream transition-all duration-200 group gap-3.5"
                  >
                    {/* Tiny Image */}
                    <div className="w-12 h-12 bg-white border border-brand-deep/10 shrink-0 overflow-hidden relative">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-brand-amber text-[8px] uppercase tracking-widest font-sans font-medium">
                          {product.category}
                        </span>
                        <span className="text-[8px] text-brand-deep/40 uppercase tracking-tight">
                          • {product.type}
                        </span>
                      </div>
                      <h4 className="font-serif font-semibold text-brand-deep text-sm truncate leading-tight transition-colors group-hover:text-brand-amber">
                        {product.name}
                      </h4>
                      {/* Material Tags as Badge Strip */}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[8px] tracking-tight bg-brand-cream border border-brand-deep/5 px-1 rounded-sm text-brand-charcoal/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Eye icon */}
                    <div className="text-right shrink-0">
                      <span className="block text-[11px] font-sans font-semibold text-brand-deep">
                        ${product.priceStart}
                      </span>
                      <span className="text-[9px] text-brand-amber tracking-wide flex items-center justify-end font-medium mt-1 gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View <Eye className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="text-center py-8 text-brand-charcoal/40 text-xs">
                  No matching product found.
                  <span className="block text-[10px] text-brand-charcoal/30 mt-1">
                    Try searching: "Olive Wood", "Walnut", "Blue Resin"
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Quick View Immersive Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-brand-offwhite border border-brand-deep/10 shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Close Button Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-brand-offwhite/95 backdrop-blur shadow-md hover:bg-brand-amber hover:text-white transition-colors text-brand-deep p-2 border border-brand-deep/5 rounded-full"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Product Visual */}
              <div className="md:w-1/2 h-[260px] md:h-auto min-h-[300px] relative bg-brand-cream shrink-0">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-brand-amber text-brand-offwhite text-[9px] uppercase font-semibold tracking-widest px-2.5 py-1 shadow-sm">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              {/* Product Details & Actions */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase font-medium tracking-widest text-[#6DFF69] bg-brand-deep/90 py-1 px-2.5 rounded-sm inline-block mb-4 leading-none">
                    Artisan Commission
                  </div>
                  <h3 className="font-serif text-3xl text-brand-deep mb-2">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex gap-2.5 items-center mb-4">
                    <span className="text-xl font-sans font-semibold text-brand-deep">
                      ${selectedProduct.priceStart}
                    </span>
                    <span className="text-xs text-brand-charcoal/50 font-light">
                      Starting price (variable customize options)
                    </span>
                  </div>

                  <p className="text-brand-charcoal/80 text-sm font-light leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Materials / Tags badgestrip */}
                  <div className="mb-6">
                    <h5 className="text-[10px] uppercase tracking-widest font-medium text-brand-deep/60 mb-2">
                      Master Materials & Spec
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wide bg-brand-cream border border-brand-deep/10 px-2.5 py-1 text-brand-charcoal hover:border-brand-amber transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Drawer */}
                <div className="flex flex-col gap-2 pt-4 border-t border-brand-deep/10">
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="w-full flex items-center justify-center bg-brand-deep hover:bg-brand-amber text-brand-offwhite py-3 px-4 uppercase tracking-widest text-xs font-semibold transition-colors shadow-md gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleWhatsAppEnquiry(selectedProduct)}
                      className="flex items-center justify-center bg-[#6DFF69] hover:bg-[#5ce658] text-brand-charcoal py-3 px-3 uppercase tracking-wider text-[10px] font-bold transition-all shadow-md gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Discuss
                    </button>
                    <button
                      onClick={() => handleGoToCategory(selectedProduct)}
                      className="flex items-center justify-center border border-brand-warm/20 bg-brand-cream/30 hover:bg-brand-cream text-brand-deep py-3 px-3 uppercase tracking-wider text-[10px] font-bold transition-all gap-1"
                    >
                      View Catalog <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
