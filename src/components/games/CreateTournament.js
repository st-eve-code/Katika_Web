'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CreateTournament() {
  const [form, setForm] = useState({
    game: '',
    duration: '',
    session: '',
    entryFee: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleStart = () => {
    console.log('Starting tournament with:', form);
    // API call will go here later
  };

  const fields = [
    { key: 'game', label: 'Select game', options: ['Call of Duty', 'FIFA', 'Chess'] },
    { key: 'duration', label: 'Set Duration', options: ['30 min', '1 hour', '2 hours'] },
    { key: 'session', label: 'Game Session', options: ['Morning', 'Afternoon', 'Evening'] },
    { key: 'entryFee', label: 'Min Entry Fee', options: ['500 XAF', '1000 XAF', '2000 XAF'] },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-white font-medium">Create Tournament</h3>
        <p className="text-xs text-gray-500">Create a tournament and set the session</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {fields.map((field) => (
          <div key={field.key} className="relative">
            <select
              value={form[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="w-full appearance-none bg-[#0d0d0d] text-sm text-gray-400 rounded-lg px-3 py-2 pr-8 outline-none"
            >
              <option value="">{field.label}</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        ))}
      </div>

      <button
        onClick={handleStart}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
      >
        Start Tournament
      </button>
    </div>
  );
}