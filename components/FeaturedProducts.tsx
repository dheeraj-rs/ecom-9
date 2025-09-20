'use client';

import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '@/lib/products';

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-responsive-3xl lg:text-responsive-4xl font-playfair font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-gold">Collection</span>
          </h2>
          <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover our most sought-after pieces, handcrafted with precision and designed for luxury living
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}