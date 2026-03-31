import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';

interface NavbarProps {
  onLogout?: () => void;
}

export function Navbar({ onLogout }: NavbarProps) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search analytics, reports, or models..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>

        <button
          onClick={onLogout}
          className="p-2.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-slate-50 transition-colors">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Ozoda Yusufova</p>
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Startapp meneger</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            OY
          </div>
        </button>
      </div>
    </header>
  );
}
