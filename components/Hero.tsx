import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] ease-out"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-responsive">
        <h1 className="text-responsive-5xl lg:text-responsive-6xl font-playfair font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
          Luxury
          <span className="gradient-gold block mt-2">Redefined</span>
        </h1>
        
        <p className="text-responsive-lg lg:text-responsive-xl mb-6 sm:mb-8 text-gray-200 animate-slide-up max-w-2xl mx-auto leading-relaxed px-4">
          Discover our collection of handcrafted furniture pieces, where timeless elegance meets modern sophistication
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in px-4">
          <Link href="/products">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto text-sm sm:text-base">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Link href="/about">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}