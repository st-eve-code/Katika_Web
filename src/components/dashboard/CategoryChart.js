'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Action games', value: 30, color: '#3b82f6' },
  { name: 'Board games', value: 20, color: '#f59e0b' },
  { name: 'Puzzle games', value: 20, color: '#a855f7' },
  { name: 'Sport games', value: 15, color: '#22c55e' },
  { name: 'Physics games', value: 15, color: '#ef4444' },
];

export default function CategoryChart() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <h3 className="text-white font-medium mb-4">Game By Categories</h3>
      <div className="flex items-center gap-4">
        <ResponsiveContainer width={140} height={140}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={65}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-col gap-2">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2 text-xs text-gray-400">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              {entry.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}