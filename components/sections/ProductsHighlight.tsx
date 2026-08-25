'use client';

import React from 'react';

interface ProductsHighlightProps {
  onAddToCart?: (product: any, color?: string, size?: string) => void;
}

export const ProductsHighlight: React.FC<ProductsHighlightProps> = () => {
  return (
    <section className="py-6 bg-[#d9f99d] text-black overflow-hidden border-y border-lime-300">
      <div className="animate-marquee-slow whitespace-nowrap flex items-center font-extrabold text-sm sm:text-base tracking-widest uppercase">
        <span>• SAFETY FOR SKIN</span>
        <span className="mx-6 font-black text-xs">PEBBLE</span>
        <span>• COMFORT PRODUCTS</span>
        <span className="mx-6 font-black text-xs">PEBBLE</span>
        <span>• ORGANIC COTTON</span>
        <span className="mx-6 font-black text-xs">PEBBLE</span>
        <span>• SAFETY FOR SKIN</span>
        <span className="mx-6 font-black text-xs">PEBBLE</span>
        <span>• COMFORT PRODUCTS</span>
        <span className="mx-6 font-black text-xs">PEBBLE</span>
        <span>• ORGANIC COTTON</span>
        <span className="mx-6 font-black text-xs">PEBBLE</span>
      </div>
    </section>
  );
};
