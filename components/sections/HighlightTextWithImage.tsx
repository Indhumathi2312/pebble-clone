'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Smile, Heart } from 'lucide-react';

export const HighlightTextWithImage: React.FC = () => {
  const cards = [
    {
      bgColor: '#15803d', // Green
      tag: 'Trendy Picks',
      text: 'FUN & COMFY STYLE',
      title: 'Cool Kids',
      image: '/images/PocketVest-42.jpg'
    },
    {
      bgColor: '#7e22ce', // Purple
      tag: 'New Arrival',
      text: 'MOVE FREELY',
      title: 'Playtime Outfits',
      image: '/images/VarsityJacketBlue-138.jpg'
    },
    {
      bgColor: '#78350f', // Brownish-grey
      tag: 'Fancy Set',
      text: 'NEW IN',
      title: 'Winter Season',
      image: '/images/FleeceHoodieBeige-28.jpg'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          
          {/* Floating Sticker SVGs */}
          <div className="absolute -top-6 -left-12 bg-pink-400 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full -rotate-12 shadow-md hidden sm:flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Kids
          </div>
          <div className="absolute -top-4 -right-10 bg-amber-400 text-black text-[11px] font-black uppercase px-3 py-1 rounded-full rotate-12 shadow-md hidden sm:flex items-center gap-1">
            <Smile className="w-3 h-3" /> Playful
          </div>
          <div className="absolute top-16 -right-16 bg-sky-400 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full -rotate-6 shadow-md hidden sm:flex items-center gap-1">
            <Heart className="w-3 h-3" /> Wow
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">
            MIX YOUR STYLE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Feel good & enjoy every day
          </h2>
        </div>

        {/* Stacked Cards Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8 border border-white/10 transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="space-y-4">
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {card.tag}
                </span>

                <p className="text-xs font-bold tracking-widest text-white/80 uppercase">
                  {card.text}
                </p>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {card.title}
                </h3>

                <div>
                  <button className="bg-white text-black font-semibold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 shadow-md hover:bg-gray-100 transition-all">
                    Shop Now
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-black/10">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
