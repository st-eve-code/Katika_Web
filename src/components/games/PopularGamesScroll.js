'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const games = [
  { title: 'Call of duty', subtitle: 'Enter the arena and fight for victory', genre: 'Action', image: '/games/cod.jpg' },
  { title: 'Lego Star Wars', subtitle: 'Fight crime in space with the Jedi', genre: 'Action', image: '/games/lego-star-wars.jpg' },
  { title: 'Mario Bros SG', subtitle: 'Save the kingdom from evil forces', genre: 'Action, Adventure', image: '/games/mario.jpg' },
];

export default function PopularGamesScroll() {
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
          <h3 className="text-white font-medium">Popular Games</h3>
          <p className="text-xs text-gray-500">Most popular game for this month</p>
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

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {games.map((game) => (
          <div
            key={game.title}
            className="relative flex-shrink-0 w-64 h-56 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-end p-4"
            style={{ backgroundImage: `url(${game.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10">
              <p className="text-white font-semibold">{game.title}</p>
              <p className="text-xs text-gray-300">{game.subtitle}</p>
              <p className="text-xs text-gray-400">game: {game.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}