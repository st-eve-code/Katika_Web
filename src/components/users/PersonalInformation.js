import { MoreVertical } from 'lucide-react';

export default function PersonalInformation({ customer }) {
  if (!customer) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-5 text-sm text-gray-500">
        Select a customer to view their profile
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-white font-medium">Personal Information</h3>
          <p className="text-xs text-gray-500">edit customer information at your own risk</p>
        </div>
      </div>

      <div className="relative h-72 mx-4 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${customer.avatar})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white">
          <MoreVertical size={16} />
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-white font-semibold">{customer.name}</p>
            <p className="text-xs text-gray-300">
              Cameroonian - 192.168.200.203
            </p>
            <p className="text-xs text-gray-400">device name: {customer.device}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              age {customer.age}
            </span>
            <span className="text-xs text-gray-300">{customer.points}</span>
          </div>
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}