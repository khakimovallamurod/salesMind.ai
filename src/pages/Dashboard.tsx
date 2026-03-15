import React from 'react';
import { KPICard } from '../components/dashboard/KPICard';
import { MarketOverview } from '../components/dashboard/MarketOverview';
import { CompetitorAnalysis } from '../components/dashboard/CompetitorAnalysis';
import { CustomerAnalytics } from '../components/dashboard/CustomerAnalytics';
import { PriceAnalysis } from '../components/dashboard/PriceAnalysis';
import { AIForecastPanel } from '../components/dashboard/AIForecastPanel';
import { kpiData } from '../data/mockData';
import { motion } from 'motion/react';

export function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Executive Dashboard</h1>
          <p className="text-slate-500 font-medium">Welcome back, Alex. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            Export Data
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            Generate Report
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, idx) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <KPICard {...kpi} />
          </motion.div>
        ))}
      </section>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <MarketOverview />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <PriceAnalysis />
        </motion.div>
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CompetitorAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <CustomerAnalytics />
        </motion.div>
      </div>

      {/* AI Forecast Section */}
      <motion.section 
        className="pt-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <AIForecastPanel />
      </motion.section>

      {/* Footer */}
      <footer className="pt-8 pb-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 font-medium">© 2026 SalesMind AI. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">Terms of Service</a>
          <a href="#" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">Help Center</a>
        </div>
      </footer>
    </div>
  );
}
