export default function WalletIncomeCard() {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <p className="text-sm text-white font-medium relative z-10">Total Wallet Income</p>
      <p className="text-xs text-white/70 relative z-10">
        the income generated in the past 6 months
      </p>
      <p className="text-2xl font-semibold text-white relative z-10">200.000.000 XAF</p>
    </div>
  );
}