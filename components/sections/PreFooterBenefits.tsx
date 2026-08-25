'use client';

import React from 'react';
import { Star, ShieldCheck, Heart, RefreshCw, Truck } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export const PreFooterBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: '100% Organic Cotton',
      desc: 'Softest combed cotton safe for sensitive skin'
    },
    {
      icon: ShieldCheck,
      title: 'Safety Certified',
      desc: 'Non-toxic dyes & nickel-free snap buttons'
    },
    {
      icon: RefreshCw,
      title: '30-Day Easy Returns',
      desc: 'Hassle-free exchanges and size swaps'
    },
    {
      icon: Truck,
      title: 'Free Shipping Over $75',
      desc: 'Fast delivery straight to your doorstep'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Customer Reviews Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">
              OUR REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Over 10,000+ Happy Customers
            </h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <h4 className="font-bold text-sm text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed italic mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-bold text-gray-900">{review.name}</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Verified Buyer</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Guarantee Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-100">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/70 border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center flex-none">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
