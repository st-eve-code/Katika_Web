'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tournaments = [
  { title: 'Fortnite', image: '/games/fortnite.jpg' },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg' },
  { title: 'Batman-Arkham Knight', image: '/games/Batman.jpg' },
];

export default function LiveTournamentsScroll({ onSelect }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 280, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-medium">Live Tournaments</h3>
          <p className="text-xs text-gray-500">hotspot for live game tournaments</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => scroll(1)} className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden">
        {tournaments.map((t) => (
          <button
            key={t.title}
            onClick={() => onSelect(t)}
            className="relative flex-shrink-0 w-64 h-56 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-end p-4 text-left"
            style={{ backgroundImage: `url(${t.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="relative z-10 text-white font-semibold">{t.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}