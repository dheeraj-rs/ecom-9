'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden hover-lift luxury-shadow border-0 animate-fade-in h-full flex flex-col">
      <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 px-4">
            <Link href={`/products/${product.id}`}>
              <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100 w-full sm:w-auto text-xs sm:text-sm">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                View
              </Button>
            </Link>
            <Button size="sm" onClick={handleAddToCart} className="bg-yellow-600 hover:bg-yellow-700 text-black w-full sm:w-auto text-xs sm:text-sm">
              <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold text-yellow-600">
            ${product.price.toLocaleString()}
          </span>
          
          {product.inStock ? (
            <span className="text-xs sm:text-sm text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-xs sm:text-sm text-red-600 font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </Card>
  );
}