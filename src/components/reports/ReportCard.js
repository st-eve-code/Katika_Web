'use client';

import { useState } from 'react';
import { MoreVertical, CheckCircle2, XCircle, User } from 'lucide-react';

export default function ReportCard({ report, isSelected, onSelect, onResolve, onDismiss }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      onClick={() => onSelect(report.id)}
      className={`bg-[#1a1a1a] rounded-2xl p-4 flex items-start gap-4 cursor-pointer border transition-colors ${
        isSelected ? 'border-blue-500' : 'border-transparent hover:border-white/10'
      }`}
    >
      <div
        className="w-10 h-10 rounded-full bg-gray-600 bg-cover bg-center flex-shrink-0"
        style={{ backgroundImage: `url(${report.avatar})` }}
      />

      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-white font-medium">
            {report.id} {report.reporter}
          </p>
          <span className="text-xs text-gray-500">{report.date}</span>
          <span className="text-xs text-gray-500">{report.time}</span>
          {report.status !== 'open' && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                report.status === 'resolved'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {report.status}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 mt-1">{report.message}</p>
      </div>

      {/* Three-dot menu — stop propagation so clicking it doesn't also select the card */}
      <div className="relative flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-gray-500 hover:text-white p-1"
        >
          <MoreVertical size={16} />
        </button>

        {menuOpen && (
          <>
            <div onClick={() => setMenuOpen(false)} className="fixed inset-0 z-10" />
            <div className="absolute top-full right-0 mt-2 bg-[#0d0d0d] border border-white/10 rounded-xl py-2 w-44 z-20 shadow-lg">
              <button
                onClick={() => { onResolve(report.id); setMenuOpen(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
              >
                <CheckCircle2 size={14} className="text-green-400" />
                Mark Resolved
              </button>
              <button
                onClick={() => { onDismiss(report.id); setMenuOpen(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
              >
                <XCircle size={14} className="text-red-400" />
                Dismiss Report
              </button>
              <button
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
              >
                <User size={14} className="text-gray-400" />
                View Player Profile
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}