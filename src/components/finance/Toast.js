'use client';

import { useEffect } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-lg animate-in fade-in slide-in-from-bottom-2">
      {type === 'accepted' ? (
        <CheckCircle2 size={18} className="text-green-400" />
      ) : (
        <XCircle size={18} className="text-red-400" />
      )}
      <p className="text-sm text-white">{message}</p>
    </div>
  );
}