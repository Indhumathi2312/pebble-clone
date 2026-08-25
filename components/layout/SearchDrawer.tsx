'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Search } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? []
    : products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-md flex flex-col items-center pt-20 px-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-white hover:text-gray-300 rounded-full bg-white/10 transition-all"
        aria-label="Close Search"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-2xl">
        <div className="relative mb-8">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            autoFocus
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white text-black text-lg font-medium pl-14 pr-6 py-4 rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-black/20"
          />
        </div>

        {/* Results */}
        {query.trim() !== '' && (
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-h-[60vh] overflow-y-auto space-y-3">
            {results.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No matching Pebble Little products found for "{query}".
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    if (onSelectProduct) onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-none">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{product.name}</h4>
                    <p className="text-xs text-black font-extrabold">${product.price}.00</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
