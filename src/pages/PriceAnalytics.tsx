import React from 'react';
import { motion } from 'motion/react';
import { PriceAnalysis } from '../components/dashboard/PriceAnalysis';

export function PriceAnalytics() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Price Analytics</h1>
        <p className="text-slate-500 font-medium mt-2">Monitor pricing strategies and performance.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <PriceAnalysis />
      </motion.div>
    </div>
  );
}
