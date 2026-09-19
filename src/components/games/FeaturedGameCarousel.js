'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { title: 'Call of Duty: Modern Warfare II', image: '/games/COD.jpg' },
  { title: 'Lego Star Wars', image: '/games/lego-star-wars.jpg' },
  { title: 'Mario Bros SG', image: '/games/Mario.jpg' },
];

export default function FeaturedGameCarousel() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative h-72 rounded-2xl overflow-hidden bg-[#1a1a1a]"
      style={{
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Prev / Next buttons */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}