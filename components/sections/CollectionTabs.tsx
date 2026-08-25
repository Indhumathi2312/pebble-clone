'use client';

import React, { useState } from 'react';
import { products, categoryItems } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Product } from '@/types';

interface CollectionTabsProps {
  onAddToCart?: (product: Product, color?: string, size?: string) => void;
}

export const CollectionTabs: React.FC<CollectionTabsProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="shop-collections" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">
          EXPLORE OUR RANGE
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Shop By Category
        </h2>
        <div className="w-12 h-1 bg-black mx-auto mt-3 rounded-full" />
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap mb-10">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${
            activeTab === 'all'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Items
        </button>

        <button
          onClick={() => setActiveTab('boys')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${
            activeTab === 'boys'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Boy's
        </button>

        <button
          onClick={() => setActiveTab('girls')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${
            activeTab === 'girls'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Girl's
        </button>

        <button
          onClick={() => setActiveTab('sets')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${
            activeTab === 'sets'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Sets
        </button>

        <button
          onClick={() => setActiveTab('accessories')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${
            activeTab === 'accessories'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Accessories
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};
