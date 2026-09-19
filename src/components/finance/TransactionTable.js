"use client";

export default function TransactionTable({ transactions, onAccept, onReject }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-white/5">
            <th className="p-4 font-normal">
              <input type="checkbox" className="accent-blue-500" />
            </th>
            <th className="p-4 font-normal">Id number</th>
            <th className="p-4 font-normal">Username</th>
            <th className="p-4 font-normal">Email</th>
            <th className="p-4 font-normal">Date</th>
            <th className="p-4 font-normal">Time</th>
            <th className="p-4 font-normal text-right">Amount</th>
            <th className="p-4 font-normal text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={8} className="p-10 text-center">
                <div className="flex flex-col items-center gap-2 text-gray-500">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <p className="text-sm">All caught up</p>
                  <p className="text-xs text-gray-600">
                    No transactions match your current filters
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-white/5 last:border-0">
                <td className="p-4">
                  <input type="checkbox" className="accent-blue-500" />
                </td>
                <td className="p-4 text-gray-300">{tx.id}</td>
                <td className="p-4 text-white">{tx.username}</td>
                <td className="p-4 text-gray-400">{tx.email}</td>
                <td className="p-4 text-gray-400">{tx.date}</td>
                <td className="p-4 text-gray-400">{tx.time}</td>
                <td className="p-4 text-white font-semibold text-right">
                  {tx.amount.toLocaleString()}
                </td>
                <td className="p-4">
                  {tx.status === "pending" ? (
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onAccept(tx.id)}
                        className="border border-green-500/40 text-green-400 text-xs px-3 py-1.5 rounded-full transition-colors hover:bg-green-500 hover:text-white hover:border-green-500"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => onReject(tx.id)}
                        className="border border-red-500/40 text-red-400 text-xs px-3 py-1.5 rounded-full transition-colors hover:bg-red-500 hover:text-white hover:border-red-500"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <p
                      className={`text-xs text-center capitalize ${
                        tx.status === "accepted"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {tx.status}
                    </p>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
