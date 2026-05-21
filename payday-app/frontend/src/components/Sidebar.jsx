import { LayoutDashboard, Wallet, User, Settings, HelpCircle } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-6 flex flex-col h-screen">
      <h1 className="font-bold text-xl mb-10 text-slate-900">Mini Finance</h1>
      <nav className="flex flex-col gap-6 text-slate-600">
        <a href="#" className="flex items-center gap-3 font-bold text-red-500">
          <LayoutDashboard size={20} /> Overview
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-slate-900 transition-colors">
          <Wallet size={20} /> My Wallet
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-slate-900 transition-colors">
          <User size={20} /> Profile
        </a>
        <div className="mt-auto border-t pt-6">
          <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors">
            <Settings size={20} /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 text-slate-500 mt-4 hover:text-slate-900 transition-colors">
            <HelpCircle size={20} /> Help Center
          </a>
        </div>
      </nav>
    </aside>
  );
};
