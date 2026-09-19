import { Check } from 'lucide-react';

const activities = [
  {
    name: 'Ado Daniel',
    topic: 'transaction of 2000 fq approval',
    date: 'Thursday, 19 Nov 2025',
  },
  {
    name: 'Steve Caleb',
    topic: 'transaction of 5000 fq approval',
    date: 'Thursday, 19 Nov 2025',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">Recent Activities</h3>
        <button className="text-xs text-gray-500">View all</button>
      </div>

      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <div key={activity.name} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Check size={14} className="text-green-400" />
            </div>
            <div>
              <p className="text-sm text-white font-medium">{activity.name}</p>
              <p className="text-xs text-gray-500">Topic : {activity.topic}</p>
              <p className="text-xs text-gray-600">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}