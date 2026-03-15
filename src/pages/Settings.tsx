import React from 'react';
import { motion } from 'motion/react';
import { Settings as SettingsIcon, User, Bell, Shield } from 'lucide-react';

export function Settings() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Settings</h1>
        <p className="text-slate-500 font-medium mt-2">Manage your account and preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <User className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-bold text-slate-900">Profile</h3>
          <p className="text-sm text-slate-500 mt-2">Manage your account information</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <Bell className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-bold text-slate-900">Notifications</h3>
          <p className="text-sm text-slate-500 mt-2">Configure alert preferences</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <Shield className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-bold text-slate-900">Security</h3>
          <p className="text-sm text-slate-500 mt-2">Manage security and privacy</p>
        </motion.div>
      </div>
    </div>
  );
}
