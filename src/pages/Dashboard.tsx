import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TrendingUp, DollarSign, LineChart, Users, ArrowRight } from 'lucide-react';

const cards = [
  { title: 'Trend modeli', value: '94.9%', note: 'Accuracy', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { title: 'Narx modeli', value: '0.971', note: 'R2 Score', color: 'text-blue-700', bg: 'bg-blue-50' },
  { title: 'Talab modeli', value: '0.89', note: 'R2 Score', color: 'text-indigo-700', bg: 'bg-indigo-50' },
  { title: 'Datasetlar', value: '50 / 50', note: 'Mijozlar / Raqobatchilar', color: 'text-orange-700', bg: 'bg-orange-50' },
];

const pageBlocks = [
  {
    title: 'Trend tahlili',
    path: '/trend-analysis',
    icon: TrendingUp,
    metric: 'Accuracy: 0.949',
    desc: 'Trend label, classification report, confusion matrix va growth grafiklar.',
  },
  {
    title: 'Narx tahlili',
    path: '/price-analytics',
    icon: DollarSign,
    metric: 'MAE: 0.01 | RMSE: 0.01 | R2: 0.971',
    desc: 'Narx dinamikasi, raqobatchi taqqoslash va mavsumiy ta’sir.',
  },
  {
    title: 'Talab prognozi',
    path: '/demand-forecast',
    icon: LineChart,
    metric: 'RMSE: 0.1881 | MAE: 0.1545 | R2: 0.89',
    desc: 'Keyingi oy talab prognozi va featurelar bo‘yicha vizual tahlil.',
  },
  {
    title: 'Mijozlar va Raqobatchilar',
    path: '/customers',
    icon: Users,
    metric: 'Dataset: 50 + 50 qator',
    desc: 'Mijoz segmentlari, xarid chastotasi, bozor ulushi va competitor narxlari.',
  },
];

const healthData = [
  { name: 'Trend', value: 94.9 },
  { name: 'Narx', value: 97.1 },
  { name: 'Talab', value: 89.0 },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8"
      >
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-sky-100 blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Boshqaruv paneli</h1>
          <p className="text-slate-600 mt-2 max-w-3xl">
            Barcha asosiy sahifalarning aniq natijalari shu yerda jamlangan. Har bir blokdan kerakli tahlil sahifasiga bir bosishda o‘tasiz.
          </p>
        </div>
      </motion.header>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{card.title}</p>
            <div className={`mt-3 inline-flex px-3 py-1 rounded-xl ${card.bg}`}>
              <p className={`text-3xl font-black ${card.color}`}>{card.value}</p>
            </div>
            <p className="text-sm text-slate-500 mt-3">{card.note}</p>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4">Model holati (foiz ko‘rinishida)</h2>
          <div className="h-[290px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={healthData}>
                <defs>
                  <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[80, 100]} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Area type="monotone" dataKey="value" stroke="#4f46e5" fill="url(#healthGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-3">Tez yo‘naltirish</h2>
          <p className="text-sm text-slate-500 mb-4">Eng ko‘p ishlatiladigan tahlil sahifalari:</p>
          <div className="space-y-2">
            {pageBlocks.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-semibold text-slate-700">{item.title}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pageBlocks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 + idx * 0.06 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 grid place-items-center">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-indigo-700 font-semibold mt-1">{item.metric}</p>
                  </div>
                </div>
                <Link
                  to={item.path}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
                >
                  Ochish
                </Link>
              </div>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
