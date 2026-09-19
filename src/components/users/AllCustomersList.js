'use client';

const customers = [
  { id: 1, name: 'Martin Marshal', location: 'cameroon', avatar: '/users/martin.jpg', device: 'Pixel 3a', age: 12, points: '1200XP' },
  { id: 2, name: 'Tony Redman', location: 'cameroon', avatar: '/users/tony.jpg', device: 'iPhone 12', age: 19, points: '900XP' },
  { id: 3, name: 'Juliana Becker', location: 'cameroon', avatar: '/users/juliana.jpg', device: 'Galaxy S21', age: 22, points: '1500XP' },
  { id: 4, name: 'Ebong Junior', location: 'cameroon', avatar: '/users/ebong.jpg', device: 'Pixel 6', age: 20, points: '800XP' },
];

export default function AllCustomersList({ selectedId, onSelect }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <h3 className="text-white font-medium">All Customers</h3>
      <p className="text-xs text-gray-500 mb-4">registered and active customers</p>

      <div className="flex flex-col gap-3 max-h-56 overflow-y-auto pr-2">
        {customers.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c)}
            className={`flex items-center gap-3 text-left rounded-xl p-2 transition-colors ${
              selectedId === c.id ? 'bg-white/5' : 'hover:bg-white/5'
            }`}
          >
            <div
              className="w-9 h-9 rounded-full bg-gray-600 bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${c.avatar})` }}
            />
            <div>
              <p className="text-sm text-white">{c.name}</p>
              <p className="text-xs text-gray-500">{c.location}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}