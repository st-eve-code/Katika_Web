'use client';

import { Search,  MessageSquare, Bell, Wand2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Topbar() {
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    const formatted = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    setToday(formatted);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-5 bg-[#0d0d0d] border-b border-white/5">
      {/* Search bar */}
      <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2 w-32 sm:w-48 md:w-72">
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full"
        />
      </div>

      {/* Date */}
      <div className="hidden sm:block text-sm text-gray-400">
        {today && <>Today, {today}</>}
      </div>

      {/* Right icons + profile */}
      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white">
          < Wand2Icon size={16} />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white">
          < Bell size={16} />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white">
          <MessageSquare size={16} />
        </button>

        <div className="flex items-center gap-2 pl-2">
          <div className="w-9 h-9 rounded-full bg-gray-600" />
         <span className="hidden sm:inline text-sm text-white">Nji Rodney</span>
        </div>
      </div>
    </header>
  );
}