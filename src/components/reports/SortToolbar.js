'use client';

import { useState } from 'react';
import { ArrowUpDown, Check } from 'lucide-react';

const sortOptions = [
  { key: 'default', label: 'Default' },
  { key: 'newest', label: 'Newest first' },
  { key: 'oldest', label: 'Oldest first' },
];

export default function SortToolbar({ sortKey, onSort }) {
  const [open, setOpen] = useState(false);
  const currentLabel = sortOptions.find((o) => o.key === sortKey)?.label ?? 'Default';

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-[#1a1a1a] text-sm text-gray-300 px-4 py-2 rounded-full"
      >
        <ArrowUpDown size={14} />
        Sort: {currentLabel}
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} className="fixed inset-0 z-10" />
          <div className="absolute top-full mt-2 left-0 bg-[#1a1a1a] border border-white/10 rounded-xl py-2 w-44 z-20 shadow-lg">
            {sortOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => { onSort(option.key); setOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {option.label}
                {sortKey === option.key && <Check size={14} className="text-blue-400" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}