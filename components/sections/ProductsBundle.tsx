'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductsBundleProps {
  onAddToCart?: (product: Product, color?: string, size?: string) => void;
}

export const ProductsBundle: React.FC<ProductsBundleProps> = ({ onAddToCart }) => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Text Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              HOT ITEMS
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Shop The<br />Winter Set
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Comfortably wear our fleece hoodie sets all day and night to stay warm, soft, and playful during outdoor activities.
            </p>

            <div>
              <button
                onClick={() => {
                  if (onAddToCart) {
                    onAddToCart({
                      id: 'prod-7',
                      name: 'Sweet Lilac Fleece Set',
                      price: 48,
                      image: '/images/FleeceHoodieBeige-28.jpg',
                      category: 'sets'
                    });
                  }
                }}
                className="bg-black text-white font-semibold text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-3 shadow-md hover:bg-gray-800 transition-all hover:scale-105"
              >
                Shop Now
                <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column Visual Banner */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
            <Image
              src="/images/banner_Pebble.jpg"
              alt="Shop The Winter Set"
              fill
              className="object-cover"
            />

            {/* Foreground Overlay Card */}
            <div className="absolute bottom-6 right-6 w-48 sm:w-64 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-none">
                <Image
                  src="/images/FleeceHoodieKids-192.jpg"
                  alt="Winter Hoodie"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900">Green Hoodie Set</h4>
                <p className="text-xs text-gray-500">$58.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
