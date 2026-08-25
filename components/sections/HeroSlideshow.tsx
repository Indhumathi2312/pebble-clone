'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data/slides';

export const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="relative w-full h-[580px] sm:h-[680px] lg:h-[750px] transition-colors duration-1000 overflow-hidden"
      style={{ backgroundColor: slide.bgColor }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Column Text Content */}
        <div className="z-10 text-white space-y-6 pt-10 lg:pt-0">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/90">
            {slide.subtitle}
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
            {slide.title}
          </h1>

          <div>
            <button className="bg-white text-black font-semibold text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-3 shadow-lg hover:bg-gray-100 transition-all hover:scale-105">
              {slide.buttonText}
              <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column Image Banner */}
        <div className="relative h-[380px] sm:h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl my-auto">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Slide Controls & Progress Bar */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white">
        <span className="text-xs font-bold">{slide.tag}</span>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
