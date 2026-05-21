export default function BalanceCard() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <p className="text-gray-500 text-sm font-medium">Total money inside</p>
      <p className="text-4xl font-extrabold text-blue-900 mt-1">₦12,450.00</p>
      <button className="mt-4 text-blue-600 font-bold text-sm underline">View all your accounts</button>
    </div>
  );
}
