'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Shirt } from 'lucide-react';

export const ScrollingCardLayered: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'move' | 'glow' | 'study' | 'roam'>('move');

  const contentMap = {
    move: {
      tag: 'MOVE COLLECTION',
      heading: 'Made to Move,\nBuilt for Comfort',
      desc: 'The feeling of getting home from school to find the sun still shining. Designed for playground sprints and lazy afternoons.',
      image: '/images/image-card-scroll-1-v2.webp'
    },
    glow: {
      tag: 'GLOW COLLECTION',
      heading: 'Coats & Jackets\nfor Chilly Days',
      desc: 'Warm fleece linings, windproof shells, and vibrant colors that make dreary winter days sparkle.',
      image: '/images/image-card-scroll-2-v2.webp'
    },
    study: {
      tag: 'STUDY COLLECTION',
      heading: 'Smart & Neat\nClassroom Wear',
      desc: 'Wrinkle-resistant polo tees and comfortable stretch trousers built for everyday school confidence.',
      image: '/images/LogoPoloRed-121.jpg'
    },
    roam: {
      tag: 'ROAM COLLECTION',
      heading: 'Weekend Adventure\nEveryday Sets',
      desc: 'Flexible colorblock sets and matching accessories ready for park picnics and backyard games.',
      image: '/images/ColorblockBackpack-156.jpg'
    }
  };

  const current = contentMap[activeTab];

  return (
    <section id="outfit-for" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Image Showcase */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/5]">
            <Image
              src={current.image}
              alt={current.tag}
              fill
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

            {/* Overlays */}
            <div className="absolute top-8 left-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-white/90">
                {current.tag}
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight whitespace-pre-line leading-tight">
                {current.heading}
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
          </div>

          {/* Right Column Links & Description */}
          <div className="lg:col-span-6 bg-[#f7f8ee] p-8 sm:p-14 rounded-3xl space-y-8 border border-yellow-100/50">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              OUTFIT FOR
            </span>

            {/* Interactive Collection List Links */}
            <div className="space-y-4 text-3xl sm:text-5xl font-extrabold">
              {(['move', 'glow', 'study', 'roam'] as const).map((key) => {
                const isActive = activeTab === key;
                const labels = { move: 'Move', glow: 'Glow', study: 'Study', roam: 'Roam' };
                return (
                  <div
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className="cursor-pointer flex items-center gap-4 transition-all"
                  >
                    <span
                      className={`capitalize transition-colors ${
                        isActive ? 'text-black underline underline-offset-8 decoration-wavy decoration-black' : 'text-gray-400 hover:text-gray-700'
                      }`}
                    >
                      {labels[key]}
                    </span>

                    {isActive && (
                      <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm shadow-sm animate-pulse">
                        <Shirt className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Description Box */}
            <div className="pt-4 border-t border-gray-200/60 space-y-2">
              <h4 className="font-bold text-lg text-gray-900 capitalize">
                {activeTab} Collection
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                {current.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
