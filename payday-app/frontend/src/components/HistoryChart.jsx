export default function HistoryChart() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <h2 className="font-bold text-slate-800 text-lg mb-6">Revenue Velocity</h2>
      <div className="h-64 flex items-end justify-between gap-2 px-2">
        {/* Mock Chart Bars */}
        {[40, 70, 45, 90, 60, 80, 55].map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} className="w-full bg-blue-500 rounded-t-lg hover:bg-blue-600 transition"></div>
        ))}
      </div>
    </div>
  );
}
