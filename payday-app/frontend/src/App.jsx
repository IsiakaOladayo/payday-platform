import { Sidebar } from './components/Sidebar'; 
import { BalanceCard } from './components/BalanceCard'; 

export default function App() {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar - Fixed Left */}
      <aside className="w-64 bg-white border-r p-6">
        <h1 className="font-bold text-xl mb-8">Payday Swift</h1>
        <nav className="flex flex-col gap-4 text-slate-600">
          <a href="#" className="font-bold text-red-500">Overview</a>
          <a href="#">My Wallet</a>
          <a href="#">Profile</a>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8">Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <BalanceCard />
          </div>
        </div>
      </main>
    </div>
  );
}
