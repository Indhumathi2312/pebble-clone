'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categoryItems } from '@/data/products';

export const ScrollingCards: React.FC = () => {
  const [activeGender, setActiveGender] = useState<'boys' | 'girls'>('boys');

  const filteredCategories = categoryItems.filter(
    (item) => item.gender === activeGender
  );

  return (
    <section id="categories" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Explore Categories
          </h2>

          {/* Gender Filter Tabs */}
          <div className="flex bg-gray-100 p-1 rounded-full mt-4 sm:mt-0 w-fit">
            <button
              onClick={() => setActiveGender('boys')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeGender === 'boys'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Boy's
            </button>
            <button
              onClick={() => setActiveGender('girls')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeGender === 'girls'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Girl's
            </button>
          </div>
        </div>

        {/* Scrollable Cards Grid */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="group flex-none w-[200px] sm:w-[240px] cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-gray-100 mb-3 shadow-sm group-hover:shadow-md transition-all">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="font-bold text-base text-gray-900 group-hover:text-black transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  ({cat.count})
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-2 mt-2">
          <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors shadow-md">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
