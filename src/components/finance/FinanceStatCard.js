export default function FinanceStatCard({ label, sublabel, value, badge, badgeColor }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <p className="text-sm text-white font-medium">{label}</p>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            badgeColor === 'green'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {badge}
        </span>
      </div>
      <p className="text-xs text-gray-500">{sublabel}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}