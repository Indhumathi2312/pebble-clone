'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { SearchDrawer } from '@/components/layout/SearchDrawer';
import { HeroSlideshow } from '@/components/sections/HeroSlideshow';
import { ScrollingCards } from '@/components/sections/ScrollingCards';
import { CollectionTabs } from '@/components/sections/CollectionTabs';
import { CollectionHighlight } from '@/components/sections/CollectionHighlight';
import { ProductTabs } from '@/components/sections/ProductTabs';
import { ScrollingCardLayered } from '@/components/sections/ScrollingCardLayered';
import { HighlightTextWithImage } from '@/components/sections/HighlightTextWithImage';
import { ProductsHighlight } from '@/components/sections/ProductsHighlight';
import { ProductsBundle } from '@/components/sections/ProductsBundle';
import { TestimonialsParallax } from '@/components/sections/TestimonialsParallax';
import { PreFooterBenefits } from '@/components/sections/PreFooterBenefits';
import { CartItem, Product } from '@/types';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleAddToCart = (product: Product, selectedColor?: string) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1, selectedColor }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Banner Carousel */}
      <HeroSlideshow />

      {/* Popular Category Cards Slider */}
      <ScrollingCards />

      {/* Category Collection Grid with Tabs */}
      <CollectionTabs onAddToCart={handleAddToCart} />

      {/* Flagship Showcase Highlight */}
      <CollectionHighlight />

      {/* Bestsellers & New Launches Product Tabs */}
      <ProductTabs onAddToCart={handleAddToCart} />

      {/* Why Choose Pebble Feature Deck */}
      <ScrollingCardLayered />

      {/* Story / Highlight Feature */}
      <HighlightTextWithImage />

      {/* Recommended Spotlight Products */}
      <ProductsHighlight onAddToCart={handleAddToCart} />

      {/* Special Combo Bundle Offer */}
      <ProductsBundle onAddToCart={handleAddToCart} />

      {/* Customer Reviews Parallax Carousel */}
      <TestimonialsParallax />

      {/* Brand Benefit Guarantee Badges */}
      <PreFooterBenefits />

      {/* Multi-Column Footer */}
      <Footer />

      {/* Interactive Cart Drawer Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Interactive Search Overlay */}
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => handleAddToCart(product)}
      />
    </main>
  );
}
