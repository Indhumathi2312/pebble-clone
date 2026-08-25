'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h2 className="text-lg font-black text-gray-900 uppercase">YOUR SHOPPING CART</h2>
              <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Goal Bar */}
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
            {subtotal >= freeShippingThreshold ? (
              <p className="text-xs font-bold text-emerald-600 text-center">
                🎉 Congratulations! You unlocked FREE SHIPPING!
              </p>
            ) : (
              <div>
                <p className="text-xs font-semibold text-gray-600 text-center mb-1.5">
                  Add <span className="font-bold text-black">₹{freeShippingThreshold - subtotal}</span> more to get <span className="text-rose-600 font-bold">FREE SHIPPING</span>
                </p>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-600 h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-base font-bold text-gray-800 uppercase mb-1">YOUR CART IS EMPTY</h3>
                <p className="text-xs text-gray-500 mb-6">Looks like you haven't added any Pebble gear yet.</p>
                <Button variant="primary" onClick={onClose}>
                  START SHOPPING
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50/50"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white flex-none border border-gray-100">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-xs text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-gray-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedColor && (
                        <p className="text-[11px] text-gray-400 mt-0.5">Color: {item.selectedColor}</p>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-500 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-2">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-500 hover:text-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-black text-sm text-gray-900">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-white space-y-4">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-emerald-600">
                    {subtotal >= freeShippingThreshold ? 'FREE' : '₹99'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-100">
                  <span>Total Amount</span>
                  <span className="text-rose-600">
                    ₹{(subtotal >= freeShippingThreshold ? subtotal : subtotal + 99).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <Button variant="accent" fullWidth size="lg" className="flex items-center justify-center gap-2">
                PROCEED TO CHECKOUT
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
