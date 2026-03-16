import React from 'react';
import { motion } from 'motion/react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from 'recharts';

type TrendRow = {
  product_id: 'gypsum_board' | 'rebar' | 'ceramic_tile' | 'brick' | 'cement';
  region_id: 'samarkand' | 'tashkent' | 'bukhara' | 'navoi' | 'andijan';
  date: string;
  sales_quantity: number;
  sales_growth_rate: number;
  trend_label: 0 | 1 | 2;
};

const trendDataset: TrendRow[] = [
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2023-11-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
  { product_id: 'rebar', region_id: 'tashkent', date: '2021-08-01', sales_quantity: 500, sales_growth_rate: -0.036608863198458574, trend_label: 1 },
  { product_id: 'ceramic_tile', region_id: 'tashkent', date: '2021-09-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
  { product_id: 'rebar', region_id: 'bukhara', date: '2022-11-01', sales_quantity: 1976, sales_growth_rate: -0.11903700401248328, trend_label: 0 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2024-03-01', sales_quantity: 500, sales_growth_rate: -0.8424700693131695, trend_label: 0 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2021-04-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
  { product_id: 'gypsum_board', region_id: 'navoi', date: '2022-01-01', sales_quantity: 786, sales_growth_rate: 0.572, trend_label: 2 },
  { product_id: 'brick', region_id: 'navoi', date: '2020-02-01', sales_quantity: 12687, sales_growth_rate: -0.4818037005268962, trend_label: 0 },
  { product_id: 'cement', region_id: 'navoi', date: '2023-11-01', sales_quantity: 1900, sales_growth_rate: -0.13083257090576395, trend_label: 0 },
  { product_id: 'rebar', region_id: 'andijan', date: '2023-03-01', sales_quantity: 500, sales_growth_rate: -0.5305164319248826, trend_label: 0 },
  { product_id: 'cement', region_id: 'andijan', date: '2022-07-01', sales_quantity: 1948, sales_growth_rate: 2.896, trend_label: 2 },
  { product_id: 'rebar', region_id: 'tashkent', date: '2023-07-01', sales_quantity: 670, sales_growth_rate: 0.34, trend_label: 2 },
  { product_id: 'brick', region_id: 'bukhara', date: '2022-04-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
  { product_id: 'rebar', region_id: 'samarkand', date: '2021-05-01', sales_quantity: 2517, sales_growth_rate: 0.6228239845261122, trend_label: 2 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2023-08-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
  { product_id: 'ceramic_tile', region_id: 'tashkent', date: '2022-08-01', sales_quantity: 2322, sales_growth_rate: 3.644, trend_label: 2 },
  { product_id: 'brick', region_id: 'navoi', date: '2020-11-01', sales_quantity: 1323, sales_growth_rate: 1.646, trend_label: 2 },
  { product_id: 'rebar', region_id: 'navoi', date: '2021-01-01', sales_quantity: 2584, sales_growth_rate: 0.3210633946830266, trend_label: 2 },
  { product_id: 'ceramic_tile', region_id: 'navoi', date: '2024-02-01', sales_quantity: 1253, sales_growth_rate: -0.38336614173228345, trend_label: 0 },
  { product_id: 'cement', region_id: 'andijan', date: '2023-08-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
  { product_id: 'rebar', region_id: 'samarkand', date: '2024-10-01', sales_quantity: 500, sales_growth_rate: -0.7146118721461188, trend_label: 0 },
  { product_id: 'ceramic_tile', region_id: 'samarkand', date: '2022-02-01', sales_quantity: 500, sales_growth_rate: 0.0, trend_label: 1 },
];

const classReportRows = [
  { label: '0', precision: 0.99, recall: 0.97, f1: 0.98, support: 402 },
  { label: '1', precision: 0.83, recall: 0.99, f1: 0.9, support: 241 },
  { label: '2', precision: 1.0, recall: 0.9, f1: 0.95, support: 357 },
];

const summaryRows = [
  { label: 'Accuracy', precision: 0.95, recall: 0.95, f1: 0.95, support: 1000 },
  { label: 'Macro avg', precision: 0.94, recall: 0.95, f1: 0.94, support: 1000 },
  { label: 'Weighted avg', precision: 0.96, recall: 0.95, f1: 0.95, support: 1000 },
];

const labelMap: Record<TrendRow['trend_label'], string> = {
  0: 'Pasayish',
  1: 'Barqaror',
  2: "O'sish",
};

const labelColors: Record<TrendRow['trend_label'], string> = {
  0: '#dc2626',
  1: '#64748b',
  2: '#16a34a',
};

const numberFormatter = new Intl.NumberFormat('en-US');
const percentFormatter = new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 });

function buildLabelDistribution(rows: TrendRow[]) {
  const grouped = rows.reduce<Record<number, number>>((acc, row) => {
    acc[row.trend_label] = (acc[row.trend_label] ?? 0) + 1;
    return acc;
  }, {});

  return [0, 1, 2].map((label) => ({
    label: labelMap[label as TrendRow['trend_label']],
    value: grouped[label] ?? 0,
    rawLabel: label as TrendRow['trend_label'],
  }));
}

function buildProductGrowth(rows: TrendRow[]) {
  const grouped = rows.reduce<Record<string, { sumGrowth: number; count: number }>>((acc, row) => {
    if (!acc[row.product_id]) {
      acc[row.product_id] = { sumGrowth: 0, count: 0 };
    }
    acc[row.product_id].sumGrowth += row.sales_growth_rate;
    acc[row.product_id].count += 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([product, stats]) => ({
    product,
    growthRate: stats.sumGrowth / stats.count,
  }));
}

function buildGrowthTimeline(rows: TrendRow[]) {
  return [...rows]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((row) => ({
      date: row.date.slice(0, 7),
      growthRate: row.sales_growth_rate,
      sales: row.sales_quantity,
    }));
}

export function TrendAnalysis() {
  const [confusionImageMissing, setConfusionImageMissing] = React.useState(false);
  const [predictionImageMissing, setPredictionImageMissing] = React.useState(false);

  const labelDistribution = React.useMemo(() => buildLabelDistribution(trendDataset), []);
  const productGrowth = React.useMemo(() => buildProductGrowth(trendDataset), []);
  const growthTimeline = React.useMemo(() => buildGrowthTimeline(trendDataset), []);

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Trend mahsulot tahlili</h1>
        <p className="text-slate-500 font-medium mt-2">
          Trend klassifikatsiya modeli natijalari: accuracy, classification report, confusion matrix va trend grafiklar.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Model</p>
          <p className="text-2xl font-black text-slate-900 mt-2">Trend Classifier</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Accuracy</p>
          <p className="text-3xl font-black text-emerald-700 mt-2">0.949</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Macro F1</p>
          <p className="text-3xl font-black text-slate-900 mt-2">0.94</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Weighted F1</p>
          <p className="text-3xl font-black text-slate-900 mt-2">0.95</p>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4">Confusion matrix</h2>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            {!confusionImageMissing ? (
              <img
                src="/images/trend-confusion-matrix.png"
                alt="Trend confusion matrix"
                className="w-full h-[300px] object-contain rounded-lg bg-white"
                onError={() => setConfusionImageMissing(true)}
              />
            ) : (
              <div className="w-full h-[300px] rounded-lg bg-white border border-slate-200 grid place-items-center text-center px-6">
                <div>
                  <p className="text-slate-700 font-semibold">Confusion matrix rasmi topilmadi</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Faylni <code>public/images/trend-confusion-matrix.png</code> nomida joylang.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4">Prediction natijasi</h2>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            {!predictionImageMissing ? (
              <img
                src="/images/trend-prediction.png"
                alt="Trend prediction plot"
                className="w-full h-[300px] object-contain rounded-lg bg-white"
                onError={() => setPredictionImageMissing(true)}
              />
            ) : (
              <div className="w-full h-[300px] rounded-lg bg-white border border-slate-200 grid place-items-center text-center px-6">
                <div>
                  <p className="text-slate-700 font-semibold">Prediction rasmi topilmadi</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Faylni <code>public/images/trend-prediction.png</code> nomida joylang.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Trend label taqsimoti</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={labelDistribution} dataKey="value" nameKey="label" outerRadius={110}>
                  {labelDistribution.map((entry) => (
                    <Cell key={entry.label} fill={labelColors[entry.rawLabel]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Mahsulot bo&apos;yicha o&apos;rtacha growth rate</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="product" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value: number) => percentFormatter.format(value)} />
                <Bar dataKey="growthRate" name="O'rtacha growth rate" radius={[6, 6, 0, 0]}>
                  {productGrowth.map((entry) => (
                    <Cell key={entry.product} fill={entry.growthRate >= 0 ? '#16a34a' : '#dc2626'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
          className="xl:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Vaqt bo&apos;yicha growth rate trendi</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthTimeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value: number, name) => (name === 'Growth rate' ? percentFormatter.format(value) : numberFormatter.format(value))} />
                <Line type="monotone" dataKey="growthRate" name="Growth rate" stroke="#2563eb" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sales" name="Sales quantity" stroke="#64748b" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
      >
        <h3 className="text-base font-bold text-slate-900 mb-4">Classification report</h3>
        <div className="overflow-auto">
          <table className="min-w-[760px] w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4 font-semibold">Class</th>
                <th className="py-2 pr-4 font-semibold">Precision</th>
                <th className="py-2 pr-4 font-semibold">Recall</th>
                <th className="py-2 pr-4 font-semibold">F1-score</th>
                <th className="py-2 pr-4 font-semibold">Support</th>
              </tr>
            </thead>
            <tbody>
              {classReportRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-2 pr-4 text-slate-800 font-semibold">{row.label}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.precision.toFixed(2)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.recall.toFixed(2)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.f1.toFixed(2)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.support)}</td>
                </tr>
              ))}
              {summaryRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 last:border-b-0 bg-slate-50">
                  <td className="py-2 pr-4 text-slate-800 font-semibold">{row.label}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.precision.toFixed(2)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.recall.toFixed(2)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.f1.toFixed(2)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.support)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56 }}
        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4 gap-3">
          <h3 className="text-base font-bold text-slate-900">Dataset (22 qator)</h3>
          <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-1 rounded-lg">Target: trend_label (0/1/2)</span>
        </div>
        <div className="overflow-auto">
          <table className="min-w-[980px] w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4 font-semibold">product_id</th>
                <th className="py-2 pr-4 font-semibold">region_id</th>
                <th className="py-2 pr-4 font-semibold">date</th>
                <th className="py-2 pr-4 font-semibold">sales_quantity</th>
                <th className="py-2 pr-4 font-semibold">sales_growth_rate</th>
                <th className="py-2 pr-4 font-semibold">trend_label</th>
              </tr>
            </thead>
            <tbody>
              {trendDataset.map((row, idx) => (
                <tr key={`${row.product_id}-${row.region_id}-${row.date}-${idx}`} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-2 pr-4 text-slate-800 font-medium">{row.product_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.region_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.date}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.sales_quantity)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.sales_growth_rate.toFixed(4)}</td>
                  <td className="py-2 pr-4">
                    <span
                      className="px-2 py-1 rounded-lg text-xs font-semibold"
                      style={{ color: labelColors[row.trend_label], backgroundColor: `${labelColors[row.trend_label]}1A` }}
                    >
                      {row.trend_label} - {labelMap[row.trend_label]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
}
