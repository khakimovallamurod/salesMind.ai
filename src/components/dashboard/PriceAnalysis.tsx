import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { priceTrends } from '@/data/mockData';

export function PriceAnalysis() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Price Analytics</h3>
          <p className="text-xs text-slate-500">Current vs Recommended pricing</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Margin</p>
          <p className="text-lg font-bold text-indigo-600">24.5%</p>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={priceTrends}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="week" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ 
                backgroundColor: '#fff', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }} 
            />
            <Bar dataKey="current" fill="#6366f1" radius={[4, 4, 0, 0]} name="Current" />
            <Bar dataKey="recommended" fill="#e2e8f0" radius={[4, 4, 0, 0]} name="Recommended" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
        <p className="text-xs font-bold text-indigo-600 mb-1 uppercase tracking-wider">AI Recommendation</p>
        <p className="text-sm text-indigo-900 leading-relaxed">
          Increase price by <span className="font-bold">3.2%</span> in Region A to optimize for current high demand signals.
        </p>
      </div>
    </div>
  );
}
