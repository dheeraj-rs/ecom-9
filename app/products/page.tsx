'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

// Import the Product type from CartContext
import { Product } from '@/contexts/CartContext';

// Extend the Product type with additional properties for this page
interface ExtendedProduct extends Product {
  rating?: number;
  reviews?: number;
}

// Temporary mock data since lib/products.ts is missing
const categories = ['all', 'furniture', 'lighting', 'decor'];
const products: ExtendedProduct[] = [
  {
    id: '1',
    name: 'Modern Sofa',
    description: 'A comfortable and stylish modern sofa',
    price: 999,
    image: '/images/sofa.jpg',
    category: 'furniture',
    materials: ['Fabric', 'Wood', 'Metal'],
    dimensions: '200cm x 90cm x 90cm',
    inStock: true,
    rating: 4.5,
    reviews: 24
  },
  // Add more mock products as needed
];

const getProductsByCategory = (category: string): ExtendedProduct[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = getProductsByCategory(selectedCategory);
  
  const sortedProducts = [...filteredProducts].sort((a: ExtendedProduct, b: ExtendedProduct) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                Our <span className="gradient-gold">Collection</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our complete range of handcrafted luxury furniture pieces
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
          const categoryProducts = products.filter(p => p.category === category);
          const displayName = category.charAt(0).toUpperCase() + category.slice(1);
          
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {displayName}
              {selectedCategory === category && categoryProducts.length > 0 && (
                <span className="ml-2 text-xs bg-white text-purple-600 px-2 py-0.5 rounded-full">
                  {categoryProducts.length}
                </span>
              )}
            </button>
          );
        })}
              </div>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}