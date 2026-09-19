"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowUpDown,
  Crown,
  Dices,
  Grid3x3,
} from "lucide-react";

const games = ["Chess", "Ludo", "Checkers"];

const gameIcons = {
  Chess: Crown,
  Ludo: Dices,
  Checkers: Grid3x3,
};

const history = {
  Chess: [
    {
      id: 1,
      p1: "Martin Marshal",
      rank1: 23,
      p2: "Steve caleb",
      rank2: 24,
      amount: "5000 xaf",
      date: "Thursday, 08 Nov 2026",
      status: "win",
    },
    {
      id: 2,
      p1: "Martin Marshal",
      rank1: 23,
      p2: "Senji Hakori",
      rank2: 24,
      amount: "5000 xaf",
      date: "Thursday, 08 Nov 2026",
      status: "win",
    },
    {
      id: 3,
      p1: "Martin Marshal",
      rank1: 23,
      p2: "Takum Idriss",
      rank2: 24,
      amount: "5000 xaf",
      date: "Thursday, 08 Nov 2026",
      status: "loss",
    },
  ],
  Ludo: [
    {
      id: 1,
      p1: "Martin Marshal",
      rank1: 23,
      p2: "Boma King",
      rank2: 18,
      amount: "3000 xaf",
      date: "Friday, 09 Nov 2026",
      status: "win",
    },
  ],
  Checkers: [
    {
      id: 1,
      p1: "Martin Marshal",
      rank1: 23,
      p2: "Carlos Kenn",
      rank2: 20,
      amount: "2000 xaf",
      date: "Saturday, 10 Nov 2026",
      status: "loss",
    },
  ],
};

export default function GameHistory() {
  const [activeGame, setActiveGame] = useState("Chess");
  const gameIndex = games.indexOf(activeGame);

  const goPrev = () => {
    const newIndex = Math.max(0, gameIndex - 1);
    setActiveGame(games[newIndex]);
  };
  const goNext = () => {
    const newIndex = Math.min(games.length - 1, gameIndex + 1);
    setActiveGame(games[newIndex]);
  };
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-1 flex-wrap gap-3">
        <div>
          <h3 className="text-white font-medium">Game History</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            className="text-white bg-[#0d0d0d] hover:text-[#0d0d0d] hover:bg-white p-1 rounded-full"
          >
            <ChevronLeft size={16} />
          </button>
          {games.map((g) => {
            const Icon = gameIcons[g];
            return (
              <button
                key={g}
                onClick={() => setActiveGame(g)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
                  activeGame === g
                    ? "bg-white text-black"
                    : "bg-[#0d0d0d] text-gray-400"
                }`}
              >
                <Icon size={12} />
                {g}
              </button>
            );
          })}
          <button
            onClick={goNext}
            className="text-white bg-[#0d0d0d] hover:text-[#0d0d0d] hover:bg-white p-1 rounded-full"
          >
            <ChevronRight size={16} />
          </button>
          <button className="flex items-center gap-1 text-xs bg-[#0d0d0d] text-gray-400 px-3 py-1.5 rounded-full">
            <Download size={13} /> Export
          </button>
          <button className="flex items-center gap-1 text-xs bg-[#0d0d0d] text-gray-400 px-3 py-1.5 rounded-full">
            <ArrowUpDown size={13} /> Sort: default
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        personal game history profile
      </p>

      <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2">
        {history[activeGame].map((match) => (
          <div
            key={match.id}
            className="bg-[#0d0d0d] rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                💀
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${match.status === "win" ? "bg-green-500" : "bg-red-500"}`}
                  />
                  {(() => {
                    const RowIcon = gameIcons[activeGame];
                    return <RowIcon size={12} className="text-gray-400" />;
                  })()}
                  <span className="text-xs text-gray-400">{activeGame}</span>
                </div>
                <p className="text-white font-medium">{match.p1}</p>
                <p className="text-xs text-gray-500">Rank {match.rank1}</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-white">{match.amount}</p>
              <p className="text-xs text-gray-500">{match.date}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-white font-medium">{match.p2}</p>
                <p className="text-xs text-gray-500">Rank {match.rank2}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                💀
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
