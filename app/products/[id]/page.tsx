'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Heart, Share2, ArrowLeft } from 'lucide-react';
import { getProductById } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // For demo, we'll use the same image multiple times
  const productImages = Array(4).fill(product.image);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link href="/products">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg luxury-shadow">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded border-2 transition-colors ${
                      selectedImage === index ? 'border-yellow-600' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-yellow-600">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-3"
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <Badge key={index} variant="outline">
                      {material}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Dimensions</h3>
                <p className="text-gray-600">{product.dimensions}</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Shipping & Returns</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Free white-glove delivery</li>
                  <li>• Professional assembly included</li>
                  <li>• 30-day return policy</li>
                  <li>• 5-year warranty included</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}