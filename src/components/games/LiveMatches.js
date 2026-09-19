'use client';

import { useState } from 'react';

const matches = [
  { player1: 'Bruno mars', player2: 'Steve caleb', game: 'Chess', score: '2000 XAF' },
  { player1: 'Bruno mars', player2: 'Steve caleb', game: 'Chess', score: '2000 XAF' },
  { player1: 'Bruno mars', player2: 'Steve caleb', game: 'Chess', score: '2000 XAF' },
];

export default function LiveMatches() {
  const [tab, setTab] = useState('live');

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => setTab('live')}
            className={`flex items-center gap-1.5 ${
              tab === 'live' ? 'text-white' : 'text-gray-500'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Live matches
          </button>
          <button
            onClick={() => setTab('history')}
            className={tab === 'history' ? 'text-white' : 'text-gray-500'}
          >
            History
          </button>
        </div>
        <button className="text-xs bg-white text-black px-3 py-1 rounded-full">
          View all
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {matches.map((match, index) => (
          <div key={index} className="flex items-center justify-between bg-[#0d0d0d] rounded-xl p-3">
            <div className="flex items-center gap-2 text-sm text-white">
              <div className="w-7 h-7 rounded-full bg-gray-600" />
              {match.player1}
            </div>
            <div className="text-xs text-gray-500 text-center">
              <p>{match.game}</p>
              <p>{match.score}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white">
              {match.player2}
              <div className="w-7 h-7 rounded-full bg-gray-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}