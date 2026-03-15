import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { customerSegments } from '@/data/mockData';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

export function CustomerAnalytics() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Customer Segmentation</h3>
      
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={customerSegments}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {customerSegments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }} 
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            <span className="text-sm font-bold text-slate-700">Top Customer</span>
          </div>
          <span className="text-sm font-medium text-slate-500">TechCorp Int.</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-sm font-bold text-slate-700">Retention Rate</span>
          </div>
          <span className="text-sm font-medium text-emerald-600 font-bold">94.2%</span>
        </div>
      </div>
    </div>
  );
}
