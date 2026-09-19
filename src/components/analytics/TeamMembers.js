'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const initialMembers = [
  { id: 1, avatar: '/users/martin.jpg' },
  { id: 2, avatar: '/users/tony.jpg' },
  { id: 3, avatar: '/users/juliana.jpg' },
];

export default function TeamMembers() {
  const [members, setMembers] = useState(initialMembers);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Editor');

  const handleAdd = () => {
    if (!email.trim()) return;
    const newMember = { id: Date.now(), avatar: null, email, role };
    setMembers((prev) => [...prev, newMember]);
    setEmail('');
  };

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-white font-medium">Team Members</h3>
        <p className="text-xs text-gray-500">add other team members</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {members.slice(0, 4).map((m, index) => (
            <div
              key={m.id}
              className="w-8 h-8 rounded-full bg-gray-600 bg-cover bg-center border-2 border-[#1a1a1a]"
              style={{
                backgroundImage: m.avatar ? `url(${m.avatar})` : undefined,
                marginLeft: index === 0 ? 0 : -10,
              }}
            />
          ))}
          {members.length > 4 && (
            <div
              className="w-8 h-8 rounded-full bg-[#0d0d0d] border-2 border-[#1a1a1a] flex items-center justify-center text-[10px] text-gray-400"
              style={{ marginLeft: -10 }}
            >
              +{members.length - 4}
            </div>
          )}
          <span className="text-xs text-gray-500 ml-2">Team Members</span>
        </div>

        <div className="relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none bg-[#0d0d0d] text-xs text-gray-300 rounded-full pl-3 pr-7 py-1.5 outline-none"
          >
            <option>Role</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
          <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter member's email address"
          className="flex-1 bg-[#0d0d0d] text-sm text-white placeholder-gray-500 rounded-full px-4 py-2 outline-none"
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-full transition-colors"
      >
        Add Member
      </button>
    </div>
  );
}