'use client';

import { useState } from 'react';
import { ShieldCheck, FileText, Lock, EyeOff, ChevronRight } from 'lucide-react';

export default function AccountSettings() {
  const [twoFactor, setTwoFactor] = useState(true);

  const links = [
    { icon: FileText, label: 'Terms & Conditions' },
    { icon: Lock, label: 'Privacy Policy' },
    { icon: EyeOff, label: 'Change Password' },
  ];

  return (
    <div>
      <h3 className="text-white font-medium mb-4">Account Settings</h3>

      <div className="flex flex-col gap-3">
        {/* 2FA toggle row */}
        <div className="bg-[#1a1a1a] rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={18} className="text-gray-400" />
            <p className="text-sm text-white">Enable and Configure 2-factor authentication</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{twoFactor ? 'enabled' : 'disabled'}</span>
           <button
  onClick={() => setTwoFactor((prev) => !prev)}
  className={`appearance-none border-none outline-none p-0 flex-shrink-0 w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
    twoFactor ? 'bg-blue-500' : 'bg-gray-700'
  }`}
>
  <span
    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
      twoFactor ? 'translate-x-6' : 'translate-x-0'
    }`}
  />
</button>
          </div>
        </div>

        {/* Link rows */}
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.label}
              className="bg-[#1a1a1a] rounded-xl px-4 py-3 flex items-center justify-between hover:bg-[#222] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-gray-400" />
                <p className="text-sm text-white">{link.label}</p>
              </div>
              <ChevronRight size={16} className="text-gray-500" />
            </button>
          );
        })}
      </div>
    </div>
  );
}