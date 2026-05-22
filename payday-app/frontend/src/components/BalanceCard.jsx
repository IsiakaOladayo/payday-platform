export const BalanceCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <p className="text-slate-500 text-sm font-medium">YOUR BALANCE</p>
      <h2 className="text-4xl font-bold text-slate-900 mt-2">$254,800</h2>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-slate-400 font-mono text-sm">**** **** **** 2560</p>
        <p className="text-slate-400 text-sm">Valid 12/28</p>
      </div>
      {/* Visual Accent */}
      <div className="mt-6 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-orange-500 rounded-full"></div>
      </div>
    </div>
  );
};
