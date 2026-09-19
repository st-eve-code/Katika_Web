import { Check } from 'lucide-react';

const logins = [
  { id: 1, time: '12:30:44 PM', date: 'Thursday, 19 Nov 2025' },
  { id: 2, time: '12:30:44 PM', date: 'Thursday, 20 Nov 2025' },
  { id: 3, time: '12:30:44 PM', date: 'Thursday, 21 Nov 2025' },
  { id: 4, time: '12:30:44 PM', date: 'Thursday, 22 Nov 2025' },
];

export default function LoginHistory() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <h3 className="text-white font-medium mb-4">Login History</h3>

      <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2">
        {logins.map((login) => (
          <div key={login.id} className="flex items-center gap-3 bg-[#0d0d0d] rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Check size={16} className="text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white font-medium">Welcome Back Admin</p>
              <p className="text-xs text-gray-500">{login.time}</p>
            </div>
            <p className="text-xs text-gray-500">{login.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}