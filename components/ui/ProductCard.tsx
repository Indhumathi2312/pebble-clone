'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, color?: string, size?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : undefined
  );
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const displayImage = isHovered && product.secondaryImage ? product.secondaryImage : product.image;

  const badgeColorMap = {
    green: 'bg-emerald-600 text-white',
    blue: 'bg-indigo-600 text-white',
    red: 'bg-rose-600 text-white',
    purple: 'bg-purple-600 text-white'
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-3xl p-3 border border-gray-100 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-5 left-5 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.badges?.map((badge, idx) => (
          <span
            key={idx}
            className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider ${
              badgeColorMap[badge.color] || 'bg-black text-white'
            }`}
          >
            {badge.text}
          </span>
        ))}
      </div>

      {/* Wishlist Icon */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-rose-600 transition-all shadow-sm"
        aria-label="Wishlist"
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
      </button>

      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100 mb-3 cursor-pointer">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Add Overlay Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onAddToCart && onAddToCart(product, selectedColor)}
            className="w-full bg-black/90 hover:bg-black text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 px-1">
        <h3 className="font-bold text-sm text-gray-900 line-clamp-1 group-hover:text-black transition-colors cursor-pointer mb-1">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-sm font-extrabold text-gray-900">
            ${product.price}.00
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice}.00
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-auto pt-1">
            {product.colors.map((col) => (
              <button
                key={col.name}
                onClick={() => setSelectedColor(col.name)}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColor === col.name
                    ? 'ring-2 ring-black ring-offset-1 scale-110'
                    : 'border-gray-300 opacity-80'
                }`}
                style={{ backgroundColor: col.hex }}
                title={col.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
