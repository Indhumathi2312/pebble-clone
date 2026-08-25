'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const CollectionHighlight: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      subtitle: 'NEW IN',
      titleHighlight: 'sweet lilac',
      titlePrefix: 'Soft & playful,\nthis ',
      titleSuffix: '',
      highlightColor: '#e9d5ff', // Purple box background
      desc: 'Easy, breathable pieces designed for everyday play, made to feel light, comfy.',
      leftImage: '/images/collection-highlight-1-v2.webp',
      leftOverlay: { name: 'Stripe Shorts', price: '$24.00' },
      rightImage: '/images/collection-highlight-2-v2.webp',
      rightOverlay: { name: 'Colorblock Jacket', price: '$44.00' }
    },
    {
      subtitle: 'NEW IN',
      titleHighlight: 'light blue',
      titlePrefix: 'Bright & airy,\nthis ',
      titleSuffix: '',
      highlightColor: '#bae6fd', // Light blue box background
      desc: 'Crafted from 100% organic combed cotton with double-stitched durability for playground adventures.',
      leftImage: '/images/collection-highlight-3-v2.webp',
      leftOverlay: { name: 'Sneakers Green', price: '$60.00' },
      rightImage: '/images/collection-highlight-4-v2.webp',
      rightOverlay: { name: 'Fleece Hoodie', price: '$22.00' }
    },
    {
      subtitle: 'NEW IN',
      titleHighlight: 'sweet pink',
      titlePrefix: 'Warm & joyful,\nthis ',
      titleSuffix: '',
      highlightColor: '#fbcfe8', // Pink box background
      desc: 'Vibrant colors that stay bright wash after wash. Made to be loved and passed down.',
      leftImage: '/images/collection-highlight-1-v2.webp',
      leftOverlay: { name: 'Colorblock Pack', price: '$58.00' },
      rightImage: '/images/collection-highlight-3-v2.webp',
      rightOverlay: { name: 'Campus Spirit Cap', price: '$45.00' }
    }
  ];

  const slide = slides[activeSlideIndex];

  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Image with Overlay Card */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src={slide.leftImage}
                alt="Highlight Left"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Product Thumbnail Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center justify-between border border-white">
              <div>
                <h4 className="font-bold text-xs text-gray-900">{slide.leftOverlay.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{slide.leftOverlay.price}</p>
              </div>
              <button className="bg-white text-black border border-gray-200 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors">
                Shop
              </button>
            </div>
          </div>

          {/* Middle Column Text Content */}
          <div className="lg:col-span-4 text-center px-4 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              {slide.subtitle}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight whitespace-pre-line">
              {slide.titlePrefix}
              <span
                className="px-2 py-0.5 rounded-md inline-block"
                style={{ backgroundColor: slide.highlightColor }}
              >
                {slide.titleHighlight}
              </span>
              {slide.titleSuffix}
            </h2>

            <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              {slide.desc}
            </p>

            <div className="pt-2">
              <button className="bg-black text-white font-semibold text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-3 shadow-md hover:bg-gray-800 transition-all hover:scale-105">
                Shop Now
                <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Slide Dots Indicator */}
            <div className="flex justify-center gap-2 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeSlideIndex ? 'w-6 bg-black' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column Image with Overlay Card */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src={slide.rightImage}
                alt="Highlight Right"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Product Thumbnail Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center justify-between border border-white">
              <div>
                <h4 className="font-bold text-xs text-gray-900">{slide.rightOverlay.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{slide.rightOverlay.price}</p>
              </div>
              <button className="bg-white text-black border border-gray-200 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors">
                Shop
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
