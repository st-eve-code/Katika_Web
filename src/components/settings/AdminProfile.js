import { MoreVertical } from 'lucide-react';

const admin = {
  name: 'Calvin Shawn DeBrown',
  email: 'CalvinShawn@gmail.com',
  origin: 'Cameroonian',
  mobile: '+237 682839384',
  ip: '192.168.200.203',
  avatar: '/users/calvin.jpg',
};

export default function AdminProfile() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 flex gap-5 flex-col sm:flex-row">
      <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${admin.avatar})` }}
        />
        <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white">
          <MoreVertical size={14} />
        </button>
        <div className="absolute bottom-2 left-2">
          <p className="text-white text-sm font-medium">{admin.name}</p>
          <p className="text-xs text-gray-300">Cameroonian - {admin.ip}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <div>
          <p className="text-gray-500 text-xs">Admin Name :</p>
          <p className="text-white font-medium">{admin.name}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Admin Email :</p>
          <p className="text-white font-medium">{admin.email}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Admin Origin :</p>
          <p className="text-white font-medium">{admin.origin}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Admin Mobile :</p>
          <p className="text-white font-medium">{admin.mobile}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Admin Ip Address :</p>
          <p className="text-white font-medium">{admin.ip}</p>
        </div>
      </div>
    </div>
  );
}