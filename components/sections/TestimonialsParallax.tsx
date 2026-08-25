'use client';

import React from 'react';
import Image from 'next/image';
import { Smile, Heart } from 'lucide-react';

export const TestimonialsParallax: React.FC = () => {
  const lookbookCards = [
    {
      id: 1,
      image: '/images/cart-collection-1.jpg',
      badge: '3 Items',
      title: 'Rainy Day Play'
    },
    {
      id: 2,
      image: '/images/cart-collection-2.jpg',
      badge: '3 Items',
      title: 'Cozy Overalls'
    },
    {
      id: 3,
      image: '/images/SneakersGreen-114.jpg',
      badge: '2 Items',
      title: 'Park & Sneakers'
    },
    {
      id: 4,
      image: '/images/BasicTee-61.jpg',
      badge: '2 Items',
      title: 'Campus Spirit'
    },
    {
      id: 5,
      image: '/images/FloralKnitMint-84.jpg',
      badge: '3 Items',
      title: 'Floral Dress'
    }
  ];

  return (
    <section id="lookbook" className="py-20 bg-[#f5f0ff] border-y border-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
            STYLE & COMFORT
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight flex flex-wrap items-center justify-center gap-2">
            For over{' '}
            <span className="inline-flex items-center bg-yellow-300 text-black px-2 py-0.5 rounded-full text-2xl">
              <Smile className="w-5 h-5" />
            </span>{' '}
            25 years we've been creating comfort products{' '}
            <span className="inline-flex items-center bg-rose-400 text-white px-2 py-0.5 rounded-full text-2xl">
              <Heart className="w-5 h-5 fill-white" />
            </span>
          </h2>
        </div>

        {/* Lookbook Horizontal Slider */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6">
          {lookbookCards.map((card) => (
            <div
              key={card.id}
              className="group flex-none w-[240px] sm:w-[280px] relative rounded-3xl overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                <span className="text-xs font-bold text-gray-900">{card.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
