import React from 'react';
import { competitorData } from '@/data/mockData';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CompetitorAnalysis() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Competitor Market Analysis</h3>
        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Rank</th>
              <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Company</th>
              <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Sales</th>
              <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Trend</th>
              <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {competitorData.map((comp) => (
              <tr key={comp.company} className="group hover:bg-slate-50/50 transition-colors">
                <td className="py-4 text-sm font-semibold text-slate-500">#{comp.rank}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-bold text-slate-600">
                      {comp.company.charAt(0)}
                    </div>
                    <span className="text-sm font-bold text-slate-800">{comp.company}</span>
                  </div>
                </td>
                <td className="py-4 text-sm font-medium text-slate-600">{comp.sales}</td>
                <td className="py-4">
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-bold",
                    comp.trend.startsWith('+') ? "text-emerald-600" : "text-rose-600"
                  )}>
                    {comp.trend.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {comp.trend}
                  </div>
                </td>
                <td className="py-4">
                  <span className={cn(
                    "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
                    comp.price === 'Premium' ? "bg-indigo-50 text-indigo-600" : 
                    comp.price === 'Mid-range' ? "bg-slate-100 text-slate-600" : "bg-orange-50 text-orange-600"
                  )}>
                    {comp.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
