const methods = [
  { id: 1, name: 'Bitcoin', bg: 'bg-black', label: '₿', labelColor: 'text-yellow-500' },
  { id: 2, name: 'Orange Money', bg: 'bg-black', label: 'OM', labelColor: 'text-orange-500' },
  { id: 3, name: 'PayPal', bg: 'bg-white', label: 'PayPal', labelColor: 'text-blue-600' },
  { id: 4, name: 'MoMo', bg: 'bg-yellow-500', label: 'MoMo', labelColor: 'text-blue-900' },
];

export default function PaymentMethods() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-medium">Payment Methods</h3>
          <p className="text-xs text-gray-500">add a new method of payment</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-2 rounded-full transition-colors">
          Add payment method
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {methods.map((m) => (
          <div
            key={m.id}
            className={`${m.bg} rounded-xl h-16 flex items-center justify-center font-bold ${m.labelColor}`}
          >
            {m.label}
          </div>
        ))}
      </div>
    </div>
  );
}