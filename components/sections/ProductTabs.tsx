'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Product } from '@/types';

interface ProductTabsProps {
  onAddToCart?: (product: Product, color?: string, size?: string) => void;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'bestsellers' | 'new'>('bestsellers');

  const filteredProducts = activeTab === 'bestsellers'
    ? products
    : products.filter((p) => p.badges?.some((b) => b.text === 'New'));

  return (
    <section id="hot" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Hot This Week
          </h2>

          {/* Filter Tabs */}
          <div className="flex bg-gray-100 p-1 rounded-full mt-4 sm:mt-0 w-fit">
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'bestsellers'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'new'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
          <div className="w-48 bg-gray-200 h-1 rounded-full overflow-hidden">
            <div className="bg-black h-full w-1/3" />
          </div>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors shadow-md">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
