'use client';

import { useState } from 'react';
import PageHeader from '@/components/games/PageHeader';
import FeaturedGameCarousel from '@/components/games/FeaturedGameCarousel';
import LiveMatches from '@/components/games/LiveMatches';
import CreateTournament from '@/components/games/CreateTournament';
import PopularGamesScroll from '@/components/games/PopularGamesScroll';
import LiveTournamentsScroll from '@/components/games/LiveTournamentsScroll';
import LiveTournamentDetails from '@/components/games/LiveTournamentDetails';

export default function GamesPage() {
  const [selectedTournament, setSelectedTournament] = useState(null);

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      <PageHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <FeaturedGameCarousel />
        </div>
        <LiveMatches />
        <CreateTournament />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <PopularGamesScroll />
          <LiveTournamentsScroll onSelect={setSelectedTournament} />
        </div>
        <LiveTournamentDetails tournament={selectedTournament} />
      </div>
    </div>
  );
}