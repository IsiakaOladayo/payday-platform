export default function TransactionList() {
  const sales = [
    { name: "Oluwaseun Market", amount: "₦5,000", status: "Paid" },
    { name: "Chinedu Stores", amount: "₦12,200", status: "Paid" },
    { name: "Mama Favour", amount: "₦3,500", status: "Pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h2 className="font-bold text-lg mb-4">Your Recent Sales</h2>
      <div className="space-y-4">
        {sales.map((sale, i) => (
          <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-3">
            <div>
              <p className="font-bold">{sale.name}</p>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${sale.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {sale.status}
              </span>
            </div>
            <p className="font-black text-blue-900">{sale.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
