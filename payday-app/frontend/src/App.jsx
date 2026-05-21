import { useState } from 'react';
import BalanceCard from './components/BalanceCard';
import TransactionList from './components/TransactionList';
import HistoryChart from './components/HistoryChart';
import PayoutsComponent from './components/PayoutsComponent';

function App() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');

  const tabs = [
    { name: "Payouts", color: "bg-purple-500", desc: "View all transfers" },
    { name: "API Keys", color: "bg-orange-500", desc: "Manage integrations" },
    { name: "Support", color: "bg-emerald-500", desc: "Talk to us" },
    { name: "Insights", color: "bg-cyan-500", desc: "Sales trends" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center mb-10 bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100">
        <h1 
          className="text-3xl font-black tracking-tighter cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          onClick={() => setSelectedTab('Dashboard')}
        >
          Payday Boss
        </h1>
        <div className="flex gap-6 items-center">
          {['Dashboard', 'My Money', 'Settings'].map((item) => (
            <button 
              key={item} 
              onClick={() => setSelectedTab(item)} 
              className={`font-bold transition ${selectedTab === item ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              {item}
            </button>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            New Payment
          </button>
        </div>
      </nav>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-4"><BalanceCard /></div>
        
        {tabs.map((tab) => (
          <button 
            key={tab.name} 
            onClick={() => setSelectedTab(tab.name)} 
            className={`${tab.color} text-white p-6 rounded-3xl shadow-lg hover:scale-[1.02] transition active:scale-95 text-left border-4 ${selectedTab === tab.name ? 'border-blue-900' : 'border-transparent'}`}
          >
            <p className="font-bold text-lg">{tab.name}</p>
            <p className="text-white/80 text-sm">{tab.desc}</p>
          </button>
        ))}

        {selectedTab === 'Payouts' ? (
          <div className="lg:col-span-4">
            <PayoutsComponent />
          </div>
        ) : (
          <>
            <div className="lg:col-span-3"><HistoryChart /></div>
            <div className="lg:col-span-1"><TransactionList /></div>
          </>
        )}
      </div>
      
      <footer className="mt-12 text-center text-slate-400 text-sm">
        Payday Boss Fintech OS © 2026
      </footer>
    </main>
  );
}

export default App;
