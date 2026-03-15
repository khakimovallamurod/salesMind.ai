import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function Reports() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Reports</h1>
        <p className="text-slate-500 font-medium mt-2">Generate and view AI-powered reports.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-12 border border-slate-200"
      >
        <div className="text-center space-y-4">
          <FileText className="w-16 h-16 mx-auto text-slate-300" />
          <p className="text-slate-500 text-lg">No reports yet</p>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            Create Report
          </button>
        </div>
      </motion.div>
    </div>
  );
}
