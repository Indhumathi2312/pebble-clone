'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="footer" className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 border-b border-gray-800 items-center">
          <div>
            <span className="text-xs font-bold uppercase text-yellow-400 tracking-widest block mb-1">
              NEWSLETTER
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Join the Pebble Little Family
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Sign up for 10% off your first order, secret sales, and play updates.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-5 py-3 rounded-2xl text-xs font-bold">
                🎉 Thanks for subscribing! Check your inbox for your 10% discount code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 text-white placeholder-gray-500 text-xs px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-1.5 transition-all"
                >
                  Join
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-gray-800">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1.5 text-white mb-4">
              <span className="font-serif italic text-xl text-gray-300">little</span>
              <span className="font-black text-lg tracking-widest uppercase">PEBBLE</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Comfortable, organic, and play-ready clothes designed with love for little dreamers and outdoor explorers.
            </p>

            <div className="flex gap-3 text-gray-400">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-white mb-4">SHOP</h4>
            <ul className="space-y-2 text-xs">
              {footerNavigation.shop.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-white mb-4">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-xs">
              {footerNavigation.customerCare.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-white mb-4">ABOUT</h4>
            <ul className="space-y-2 text-xs">
              {footerNavigation.about.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Pebble Little. All rights reserved.</p>
          <div className="flex gap-4 text-gray-400">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
