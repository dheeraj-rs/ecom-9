import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Monarch Executive Desk',
    price: 4200,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    category: 'office',
    description: 'Handcrafted from solid walnut with brass accents. Features premium leather writing surface and hidden cable management.',
    materials: ['Solid Walnut', 'Italian Leather', 'Brass Hardware'],
    dimensions: '72" W x 36" D x 30" H',
    inStock: true,
  },
  {
    id: '2',
    name: 'Venetian Dining Table',
    price: 6800,
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg',
    category: 'dining',
    description: 'Elegant dining table with hand-carved details and extending capability. Seats 8-12 guests comfortably.',
    materials: ['Solid Oak', 'Hand-carved Details', 'Premium Finish'],
    dimensions: '96" L x 42" W x 30" H (extends to 120")',
    inStock: true,
  },
  {
    id: '3',
    name: 'Imperial Bed Frame',
    price: 5500,
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
    category: 'bedroom',
    description: 'Majestic king-size bed frame with upholstered headboard and premium velvet finish.',
    materials: ['Solid Mahogany', 'Premium Velvet', 'Hand-tufted Details'],
    dimensions: '84" W x 88" L x 60" H',
    inStock: true,
  },
  {
    id: '4',
    name: 'Aristocrat Armchair',
    price: 2100,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    category: 'living',
    description: 'Classic wingback armchair with hand-carved wooden frame and premium Italian leather upholstery.',
    materials: ['Solid Cherry Wood', 'Italian Leather', 'Brass Studs'],
    dimensions: '32" W x 35" D x 42" H',
    inStock: true,
  },
  {
    id: '5',
    name: 'Royal Bookshelf',
    price: 3200,
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
    category: 'office',
    description: 'Floor-to-ceiling bookshelf with adjustable shelves and hidden lighting system.',
    materials: ['Solid Pine', 'LED Lighting', 'Soft-close Mechanisms'],
    dimensions: '84" W x 14" D x 96" H',
    inStock: true,
  },
  {
    id: '6',
    name: 'Grandeur Sofa Set',
    price: 7200,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    category: 'living',
    description: 'Luxurious 3-piece sofa set with down-filled cushions and hand-stitched details.',
    materials: ['Premium Fabric', 'Down Filling', 'Hardwood Frame'],
    dimensions: 'Sofa: 90" W x 38" D x 32" H',
    inStock: true,
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'living', name: 'Living Room', count: products.filter(p => p.category === 'living').length },
  { id: 'bedroom', name: 'Bedroom', count: products.filter(p => p.category === 'bedroom').length },
  { id: 'dining', name: 'Dining Room', count: products.filter(p => p.category === 'dining').length },
  { id: 'office', name: 'Office', count: products.filter(p => p.category === 'office').length },
];

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}