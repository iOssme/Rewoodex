export interface Product {
  id: string;
  category: string;
  name: string;
  priceStart: number;
  tags: string[];
  imageUrl: string;
  description: string;
}

export interface CategoryData {
  title: string;
  description: string;
  heroImage: string;
  filters: string[];
  products: Product[];
}

export const CATEGORY_DATA: Record<'tables' | 'mirrors' | 'clocks', CategoryData> = {
  tables: {
    title: 'Tables',
    description: 'Bespoke dining, coffee, and console tables. Our signature river designs combining natural grain and fluid geometry.',
    heroImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2670&auto=format&fit=crop',
    filters: ['All', 'Dining', 'Coffee', 'Side & Console', 'Bar & Kitchen'],
    products: [
      { id: '1', category: 'Dining Table', name: 'Nile Current', priceStart: 850, tags: ['Olive Wood', 'Teal Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/1.jpg', description: 'A breathtaking dining table capturing the spirit of the Nile.' },
      { id: '2', category: 'Coffee Table', name: 'Round Slice', priceStart: 2400, tags: ['Wood Slice', 'Emerald Green'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/2.jpg', description: 'Round coffee table with emerald green resin and natural wood slice.' },
      { id: '3', category: 'Rectangular Table', name: 'Desert Mirage', priceStart: 600, tags: ['Wood', 'Blue Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/3.jpg', description: 'Rectangular table with a gentle blue resin river.' },
      { id: '4', category: 'Side Table', name: 'Geometric Pattern', priceStart: 2800, tags: ['Ash Wood', 'Green Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/5.jpg', description: 'Geometrically designed side table with green resin infills.' },
      { id: '5', category: 'Console Table', name: 'Arctic Flow', priceStart: 950, tags: ['Maple', 'Clear Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/6.jpg', description: 'Minimalist console with subtle resin infills preserving the natural edge.' },
      { id: '6', category: 'Bar & Kitchen', name: 'Industrial Edge', priceStart: 1200, tags: ['Walnut', 'Steel Legs'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/4.jpg', description: 'High bar table marrying raw wood elements with industrial structural legs.' },
    ]
  },
  mirrors: {
    title: 'Mirrors',
    description: 'Reflect your space through a frame of natural beauty. From striking floor mirrors to intricate wall pieces.',
    heroImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2670&auto=format&fit=crop',
    filters: [],
    products: [
      { id: 'm1', category: 'Wall Mirror', name: 'The Arch', priceStart: 450, tags: ['Oak'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/8.jpg', description: 'Classic arch frame with a slender, sophisticated resin border.' },
      { id: 'm2', category: 'Floor Mirror', name: 'Grand Reflection', priceStart: 890, tags: ['Walnut', 'Clear Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/9.jpg', description: 'A massive leaning floor mirror, adding dramatic depth to any room.' },
      { id: 'm3', category: 'Decorative', name: 'Eclipse', priceStart: 350, tags: ['Olive Wood', 'Round'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/10.jpg', description: 'Circular mirror encased perfectly in an asymmetrical live edge.' },
      { id: 'm4', category: 'Wall Mirror', name: 'Coastal Frame', priceStart: 400, tags: ['Driftwood', 'Blue Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/11.jpg', description: 'Inspired by the Red Sea, blending sandy tones with oceanic blue.' },
    ]
  },
  clocks: {
    title: 'Clocks',
    description: 'Time measured in rings of growth. Unique wall clocks that double as captivating resin art installations.',
    heroImage: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=2670&auto=format&fit=crop',
    filters: [],
    products: [
      { id: 'c1', category: 'Wall Clock', name: 'Infinity Circle', priceStart: 250, tags: ['Walnut', 'Silent Sweep'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/7.jpg', description: 'A dark, brooding piece with gold-leaf embedded into deep resin.' },
      { id: 'c2', category: 'Wall Clock', name: 'Geode Time', priceStart: 320, tags: ['Olive Wood', 'Amethyst Resin'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/10.jpg', description: 'Features a center core that mimics a cracked crystal geode.' },
      { id: 'c3', category: 'Large Clock', name: 'The Studio', priceStart: 400, tags: ['Oak', 'Minimalist'], imageUrl: 'https://raw.githubusercontent.com/iOssme/Rewoodex/main/src/pages/Images/11.jpg', description: 'An oversized, minimalist clock face allowing the wood grain to speak.' },
    ]
  }
};

// Flattened list of all products with their parent type reference
export interface SearchableProduct extends Product {
  type: 'tables' | 'mirrors' | 'clocks';
}

export const ALL_PRODUCTS: SearchableProduct[] = Object.entries(CATEGORY_DATA).flatMap(([key, cat]) => 
  cat.products.map(p => ({
    ...p,
    type: key as 'tables' | 'mirrors' | 'clocks'
  }))
);
