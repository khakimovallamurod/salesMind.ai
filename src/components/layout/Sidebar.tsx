import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  LineChart,
  FileText, 
  Settings,
  BrainCircuit
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Boshqaruv paneli', path: '/' },
  { icon: BarChart3, label: 'Bozor tahlili', path: '/market-analysis' },
  { icon: TrendingUp, label: 'Trend tahlili', path: '/trend-analysis' },
  { icon: Users, label: 'Raqobatchilar', path: '/competitors' },
  { icon: DollarSign, label: 'Narx tahlili', path: '/price-analytics' },
  { icon: LineChart, label: 'Talab prognozi', path: '/demand-forecast' },
  { icon: FileText, label: 'Hisobotlar', path: '/reports' },
  { icon: Settings, label: 'Sozlamalar', path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <BrainCircuit className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl text-slate-800 tracking-tight">SalesMind <span className="text-indigo-600">AI</span></span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-indigo-50 text-indigo-600 font-medium" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                )} />
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-900 rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Pro Plan</p>
            <p className="text-sm font-semibold mb-3">Unlock Advanced AI Insights</p>
            <button className="w-full bg-white text-slate-900 text-xs font-bold py-2 rounded-lg hover:bg-slate-100 transition-colors">
              Upgrade Now
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </aside>
  );
}
