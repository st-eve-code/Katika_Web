"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Crown, Dices, Grid3x3 } from "lucide-react";

const players = {
  chess: [
    {
      id: 1,
      name: "Martin Marshal",
      location: "cameroon",
      points: "1200 points",
      avatar: "/users/martin.jpg",
    },
    {
      id: 2,
      name: "Tony Spark",
      location: "cameroon",
      points: "1350 points",
      avatar: "/users/tony.jpg",
    },
    {
      id: 3,
      name: "Senji Rooky",
      location: "cameroon",
      points: "1370 points",
      avatar: "/users/senji.jpg",
    },
  ],
  ludo: [
    {
      id: 1,
      name: "Kendrik Lana",
      location: "cameroon",
      points: "900 points",
      avatar: "/users/kendrik.jpg",
    },
    {
      id: 2,
      name: "Boma King",
      location: "cameroon",
      points: "1100 points",
      avatar: "/users/boma.jpg",
    },
  ],
  checkers: [
    {
      id: 1,
      name: "Carlos Kenn",
      location: "cameroon",
      points: "1050 points",
      avatar: "/users/carlos.jpg",
    },
  ],
};

const tabs = ["chess", "ludo", "checkers"];

const tabIcons = {
  chess: Crown,
  ludo: Dices,
  checkers: Grid3x3,
};

export default function TopPlayers() {
  const [activeTab, setActiveTab] = useState("chess");
  const [tabIndex, setTabIndex] = useState(0);

  const goPrev = () => {
    const newIndex = Math.max(0, tabIndex - 1);
    setTabIndex(newIndex);
    setActiveTab(tabs[newIndex]);
  };
  const goNext = () => {
    const newIndex = Math.min(tabs.length - 1, tabIndex + 1);
    setTabIndex(newIndex);
    setActiveTab(tabs[newIndex]);
  };

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <h3 className="text-white font-medium">Top Players</h3>
      <p className="text-xs text-gray-500 mb-3">
        Most active players on the platform
      </p>

      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={goPrev}
          className="flex-shrink-0 text-white bg-[#0d0d0d] hover:text-[#0d0d0d] hover:bg-white p-1 rounded-full"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2 flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab, index) => {
            const Icon = tabIcons[tab];
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setTabIndex(index);
                }}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full capitalize ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-[#0d0d0d] text-gray-400"
                }`}
              >
                <Icon size={12} />
                {tab}
              </button>
            );
          })}
        </div>
        <button
          onClick={goNext}
          className="flex-shrink-0 text-white bg-[#0d0d0d] hover:text-[#0d0d0d] hover:bg-white p-1 rounded-full"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex flex-col gap-3 max-h-56 overflow-y-auto pr-2">
        {players[activeTab].map((p) => (
          <div key={p.id} className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full bg-gray-600 bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${p.avatar})` }}
            />
            <div>
              <p className="text-sm text-white">{p.name}</p>
              <p className="text-xs text-gray-500">
                {p.location}, {p.points}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
