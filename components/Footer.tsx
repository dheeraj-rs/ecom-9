import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-playfair font-bold gradient-gold mb-3 sm:mb-4">
              Luxe Furniture
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Crafting exceptional furniture pieces that define luxury living since 1985.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-yellow-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-yellow-600 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-yellow-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Home', 'Products', 'About', 'Contact', 'Custom Orders'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-sm sm:text-base text-gray-300 hover:text-yellow-600 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Categories</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'].map((category) => (
                <li key={category}>
                  <Link href="/products" className="text-sm sm:text-base text-gray-300 hover:text-yellow-600 transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300">123 Luxury Ave, Design District</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                <span className="text-sm sm:text-base text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                <span className="text-sm sm:text-base text-gray-300">info@luxefurniture.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Luxe Furniture. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-600 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-600 text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}