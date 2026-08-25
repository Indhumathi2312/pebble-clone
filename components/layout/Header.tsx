'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-black"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Left Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {mainNavItems.map((item) => (
            <div key={item.title} className="relative group py-6">
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-800 hover:text-black transition-colors flex items-center gap-1"
              >
                {item.title}
                {item.dropdown && <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-transform group-hover:rotate-180" />}
              </Link>

              {item.dropdown && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Center Brand Logo: little PEBBLE */}
        <Link href="/" className="flex items-baseline gap-1.5 text-center group">
          <span className="font-serif italic text-2xl text-gray-900 font-medium tracking-tight">little</span>
          <span className="font-black text-xl tracking-widest text-black uppercase">PEBBLE</span>
        </Link>

        {/* Right Search Input & User/Cart Icons */}
        <div className="flex items-center gap-3">
          {/* Integrated Search Input */}
          <div
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 bg-gray-100 hover:bg-gray-200/80 px-4 py-2 rounded-full cursor-pointer transition-colors w-48 lg:w-64"
          >
            <Search className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-500 font-normal">What are you looking for?</span>
          </div>

          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-gray-700 hover:text-black rounded-full"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User Account Icon */}
          <button
            className="p-2 text-gray-700 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Shopping Bag Cart Icon */}
          <button
            onClick={onOpenCart}
            className="p-2 text-gray-900 hover:text-black rounded-full hover:bg-gray-100 transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-gray-900 py-2 border-b border-gray-50"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
