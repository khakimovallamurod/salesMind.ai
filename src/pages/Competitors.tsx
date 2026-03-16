import React from 'react';
import { motion } from 'motion/react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

type CompetitorRow = {
  competitor_name: string;
  product_id: 'gypsum_board' | 'brick' | 'ceramic_tile' | 'rebar' | 'cement';
  date: string;
  competitor_price_UZS: number;
  market_share_percent: number;
  competitor_sales_volume: number;
};

const competitorsData: CompetitorRow[] = [
  { competitor_name: 'Grand Ceramic Market', product_id: 'gypsum_board', date: '2021-09-01', competitor_price_UZS: 36118, market_share_percent: 9.13, competitor_sales_volume: 39194 },
  { competitor_name: 'Grand Ceramic Market', product_id: 'brick', date: '2024-05-01', competitor_price_UZS: 899, market_share_percent: 4.29, competitor_sales_volume: 43090 },
  { competitor_name: 'Samarkand Cement Co', product_id: 'ceramic_tile', date: '2021-12-01', competitor_price_UZS: 124925, market_share_percent: 5.4, competitor_sales_volume: 7311 },
  { competitor_name: 'Andijan Build Trade', product_id: 'gypsum_board', date: '2022-09-01', competitor_price_UZS: 34939, market_share_percent: 11.79, competitor_sales_volume: 73932 },
  { competitor_name: 'Strong Brick Factory', product_id: 'gypsum_board', date: '2024-01-01', competitor_price_UZS: 22666, market_share_percent: 11.79, competitor_sales_volume: 20431 },
  { competitor_name: 'Bukhara Steel', product_id: 'gypsum_board', date: '2023-08-01', competitor_price_UZS: 38118, market_share_percent: 17.73, competitor_sales_volume: 13394 },
  { competitor_name: 'Bukhara Steel', product_id: 'ceramic_tile', date: '2020-07-01', competitor_price_UZS: 147313, market_share_percent: 17.18, competitor_sales_volume: 75969 },
  { competitor_name: 'Strong Brick Factory', product_id: 'rebar', date: '2022-02-01', competitor_price_UZS: 9612, market_share_percent: 5.69, competitor_sales_volume: 25483 },
  { competitor_name: 'Grand Ceramic Market', product_id: 'gypsum_board', date: '2023-11-01', competitor_price_UZS: 22226, market_share_percent: 16.55, competitor_sales_volume: 69121 },
  { competitor_name: 'Samarkand Cement Co', product_id: 'gypsum_board', date: '2020-06-01', competitor_price_UZS: 24805, market_share_percent: 10.75, competitor_sales_volume: 42757 },
  { competitor_name: 'Samarkand Cement Co', product_id: 'ceramic_tile', date: '2022-02-01', competitor_price_UZS: 97065, market_share_percent: 16.32, competitor_sales_volume: 34606 },
  { competitor_name: 'Strong Brick Factory', product_id: 'gypsum_board', date: '2023-04-01', competitor_price_UZS: 38276, market_share_percent: 8.22, competitor_sales_volume: 76065 },
  { competitor_name: 'Grand Ceramic Market', product_id: 'ceramic_tile', date: '2022-02-01', competitor_price_UZS: 230171, market_share_percent: 10.68, competitor_sales_volume: 40044 },
  { competitor_name: 'TashBuild Group', product_id: 'ceramic_tile', date: '2022-01-01', competitor_price_UZS: 100774, market_share_percent: 8.77, competitor_sales_volume: 64592 },
  { competitor_name: 'Grand Ceramic Market', product_id: 'gypsum_board', date: '2021-12-01', competitor_price_UZS: 29422, market_share_percent: 15.05, competitor_sales_volume: 41504 },
  { competitor_name: 'Bukhara Steel', product_id: 'brick', date: '2022-09-01', competitor_price_UZS: 1178, market_share_percent: 3.18, competitor_sales_volume: 28854 },
  { competitor_name: 'Strong Brick Factory', product_id: 'rebar', date: '2022-04-01', competitor_price_UZS: 9182, market_share_percent: 15.6, competitor_sales_volume: 54256 },
  { competitor_name: 'Bukhara Steel', product_id: 'ceramic_tile', date: '2023-08-01', competitor_price_UZS: 70965, market_share_percent: 16.2, competitor_sales_volume: 72592 },
  { competitor_name: 'Andijan Build Trade', product_id: 'brick', date: '2023-11-01', competitor_price_UZS: 1261, market_share_percent: 15.58, competitor_sales_volume: 8910 },
  { competitor_name: 'Strong Brick Factory', product_id: 'brick', date: '2021-03-01', competitor_price_UZS: 814, market_share_percent: 3.77, competitor_sales_volume: 25419 },
  { competitor_name: 'Bukhara Steel', product_id: 'ceramic_tile', date: '2022-08-01', competitor_price_UZS: 182096, market_share_percent: 7.03, competitor_sales_volume: 20141 },
  { competitor_name: 'UzBuild Materials', product_id: 'ceramic_tile', date: '2023-03-01', competitor_price_UZS: 247116, market_share_percent: 10.64, competitor_sales_volume: 35827 },
  { competitor_name: 'UzBuild Materials', product_id: 'ceramic_tile', date: '2024-11-01', competitor_price_UZS: 153426, market_share_percent: 4.58, competitor_sales_volume: 45585 },
  { competitor_name: 'Strong Brick Factory', product_id: 'rebar', date: '2024-05-01', competitor_price_UZS: 9693, market_share_percent: 9.3, competitor_sales_volume: 71163 },
  { competitor_name: 'Asia Rebar Systems', product_id: 'gypsum_board', date: '2024-07-01', competitor_price_UZS: 29707, market_share_percent: 7.7, competitor_sales_volume: 25776 },
  { competitor_name: 'Strong Brick Factory', product_id: 'cement', date: '2022-03-01', competitor_price_UZS: 1345, market_share_percent: 2.01, competitor_sales_volume: 57016 },
  { competitor_name: 'UzBuild Materials', product_id: 'brick', date: '2020-06-01', competitor_price_UZS: 1255, market_share_percent: 10.55, competitor_sales_volume: 5748 },
  { competitor_name: 'Bukhara Steel', product_id: 'cement', date: '2023-06-01', competitor_price_UZS: 1071, market_share_percent: 5.91, competitor_sales_volume: 75530 },
  { competitor_name: 'Navoi Construction Supply', product_id: 'cement', date: '2024-01-01', competitor_price_UZS: 1217, market_share_percent: 17.55, competitor_sales_volume: 64003 },
  { competitor_name: 'UzBuild Materials', product_id: 'gypsum_board', date: '2020-02-01', competitor_price_UZS: 37938, market_share_percent: 6.81, competitor_sales_volume: 28736 },
  { competitor_name: 'Samarkand Cement Co', product_id: 'rebar', date: '2022-04-01', competitor_price_UZS: 8589, market_share_percent: 2.53, competitor_sales_volume: 40623 },
  { competitor_name: 'TashBuild Group', product_id: 'cement', date: '2021-07-01', competitor_price_UZS: 1025, market_share_percent: 4.32, competitor_sales_volume: 52859 },
  { competitor_name: 'Mega строй Invest', product_id: 'rebar', date: '2022-08-01', competitor_price_UZS: 9294, market_share_percent: 12.75, competitor_sales_volume: 14688 },
  { competitor_name: 'Navoi Construction Supply', product_id: 'ceramic_tile', date: '2022-10-01', competitor_price_UZS: 149045, market_share_percent: 10.57, competitor_sales_volume: 24671 },
  { competitor_name: 'Strong Brick Factory', product_id: 'cement', date: '2024-12-01', competitor_price_UZS: 1086, market_share_percent: 4.98, competitor_sales_volume: 17708 },
  { competitor_name: 'Navoi Construction Supply', product_id: 'brick', date: '2024-12-01', competitor_price_UZS: 1754, market_share_percent: 5.52, competitor_sales_volume: 36754 },
  { competitor_name: 'Navoi Construction Supply', product_id: 'brick', date: '2022-08-01', competitor_price_UZS: 1510, market_share_percent: 4.79, competitor_sales_volume: 73295 },
  { competitor_name: 'Grand Ceramic Market', product_id: 'rebar', date: '2020-01-01', competitor_price_UZS: 8802, market_share_percent: 7.46, competitor_sales_volume: 41384 },
  { competitor_name: 'UzBuild Materials', product_id: 'rebar', date: '2022-07-01', competitor_price_UZS: 10369, market_share_percent: 6.13, competitor_sales_volume: 48843 },
  { competitor_name: 'Strong Brick Factory', product_id: 'rebar', date: '2024-04-01', competitor_price_UZS: 7880, market_share_percent: 5.87, competitor_sales_volume: 22932 },
  { competitor_name: 'UzBuild Materials', product_id: 'ceramic_tile', date: '2020-09-01', competitor_price_UZS: 67400, market_share_percent: 7.59, competitor_sales_volume: 17151 },
  { competitor_name: 'Navoi Construction Supply', product_id: 'brick', date: '2021-12-01', competitor_price_UZS: 853, market_share_percent: 14.48, competitor_sales_volume: 14183 },
  { competitor_name: 'TashBuild Group', product_id: 'gypsum_board', date: '2020-08-01', competitor_price_UZS: 19539, market_share_percent: 16.38, competitor_sales_volume: 63267 },
  { competitor_name: 'Strong Brick Factory', product_id: 'brick', date: '2022-11-01', competitor_price_UZS: 952, market_share_percent: 2.08, competitor_sales_volume: 48975 },
  { competitor_name: 'Samarkand Cement Co', product_id: 'rebar', date: '2024-06-01', competitor_price_UZS: 10234, market_share_percent: 12.43, competitor_sales_volume: 40467 },
  { competitor_name: 'Andijan Build Trade', product_id: 'cement', date: '2023-12-01', competitor_price_UZS: 1303, market_share_percent: 7.86, competitor_sales_volume: 48214 },
  { competitor_name: 'TashBuild Group', product_id: 'brick', date: '2022-09-01', competitor_price_UZS: 1487, market_share_percent: 3.5, competitor_sales_volume: 42818 },
  { competitor_name: 'Bukhara Steel', product_id: 'ceramic_tile', date: '2024-06-01', competitor_price_UZS: 196967, market_share_percent: 12.1, competitor_sales_volume: 51377 },
  { competitor_name: 'TashBuild Group', product_id: 'ceramic_tile', date: '2022-04-01', competitor_price_UZS: 230862, market_share_percent: 9.88, competitor_sales_volume: 42764 },
  { competitor_name: 'Navoi Construction Supply', product_id: 'brick', date: '2022-11-01', competitor_price_UZS: 991, market_share_percent: 12.33, competitor_sales_volume: 75744 },
];

const numberFormatter = new Intl.NumberFormat('en-US');
const priceFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

function buildCompetitorShare(rows: CompetitorRow[]) {
  const grouped = rows.reduce<Record<string, { share: number; count: number }>>((acc, row) => {
    if (!acc[row.competitor_name]) {
      acc[row.competitor_name] = { share: 0, count: 0 };
    }
    acc[row.competitor_name].share += row.market_share_percent;
    acc[row.competitor_name].count += 1;
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([name, stats]) => ({
      competitor: name,
      avgShare: Number((stats.share / stats.count).toFixed(2)),
    }))
    .sort((a, b) => b.avgShare - a.avgShare);
}

function buildProductPrice(rows: CompetitorRow[]) {
  const grouped = rows.reduce<Record<string, { sum: number; count: number }>>((acc, row) => {
    if (!acc[row.product_id]) {
      acc[row.product_id] = { sum: 0, count: 0 };
    }
    acc[row.product_id].sum += row.competitor_price_UZS;
    acc[row.product_id].count += 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([product, stats]) => ({
    product,
    avgPrice: Math.round(stats.sum / stats.count),
  }));
}

function buildSalesTimeline(rows: CompetitorRow[]) {
  return [...rows]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((row) => ({
      date: row.date.slice(0, 7),
      salesVolume: row.competitor_sales_volume,
      marketShare: row.market_share_percent,
    }));
}

const productColors = ['#0ea5e9', '#16a34a', '#f97316', '#6366f1', '#e11d48'];

export function Competitors() {
  const shareByCompetitor = React.useMemo(() => buildCompetitorShare(competitorsData), []);
  const priceByProduct = React.useMemo(() => buildProductPrice(competitorsData), []);
  const salesTimeline = React.useMemo(() => buildSalesTimeline(competitorsData), []);
  const sampleRows = React.useMemo(() => competitorsData.slice(0, 15), []);

  const uniqueCompetitors = React.useMemo(
    () => new Set(competitorsData.map((row) => row.competitor_name)).size,
    [],
  );
  const avgMarketShare = React.useMemo(
    () =>
      competitorsData.reduce((sum, row) => sum + row.market_share_percent, 0) /
      competitorsData.length,
    [],
  );
  const avgPrice = React.useMemo(
    () =>
      competitorsData.reduce((sum, row) => sum + row.competitor_price_UZS, 0) /
      competitorsData.length,
    [],
  );
  const totalSales = React.useMemo(
    () => competitorsData.reduce((sum, row) => sum + row.competitor_sales_volume, 0),
    [],
  );

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Raqobatchilar tahlili</h1>
        <p className="text-slate-500 font-medium mt-2">
          Raqobatchilar narxi, bozor ulushi va savdo hajmi bo&apos;yicha umumiy ko&apos;rinish.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Raqobatchilar soni</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{uniqueCompetitors}</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">O&apos;rtacha bozor ulushi</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{avgMarketShare.toFixed(2)}%</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">O&apos;rtacha narx</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{priceFormatter.format(avgPrice)} UZS</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Jami savdo hajmi</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{numberFormatter.format(totalSales)}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Raqobatchi bo&apos;yicha o&apos;rtacha market share</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={shareByCompetitor} layout="vertical" margin={{ left: 10, right: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="competitor" type="category" width={160} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Bar dataKey="avgShare" fill="#2563eb" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Mahsulot bo&apos;yicha o&apos;rtacha competitor narxi</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={priceByProduct} dataKey="avgPrice" nameKey="product" innerRadius={60} outerRadius={105}>
                  {priceByProduct.map((entry, idx) => (
                    <Cell key={entry.product} fill={productColors[idx % productColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${priceFormatter.format(value)} UZS`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="xl:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Vaqt bo&apos;yicha savdo hajmi va bozor ulushi</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesTimeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(value: number, name) =>
                    name === 'Market share (%)' ? `${value}%` : numberFormatter.format(value)
                  }
                />
                <Line yAxisId="left" type="monotone" dataKey="salesVolume" name="Sales volume" stroke="#0f766e" strokeWidth={2} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="marketShare" name="Market share (%)" stroke="#6366f1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900">Dataset namuna (15 qator)</h3>
          <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-1 rounded-lg">Jami yozuvlar: {competitorsData.length}</span>
        </div>
        <div className="overflow-auto">
          <table className="min-w-[1020px] w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4 font-semibold">competitor_name</th>
                <th className="py-2 pr-4 font-semibold">product_id</th>
                <th className="py-2 pr-4 font-semibold">date</th>
                <th className="py-2 pr-4 font-semibold">competitor_price_UZS</th>
                <th className="py-2 pr-4 font-semibold">market_share_percent</th>
                <th className="py-2 pr-4 font-semibold">competitor_sales_volume</th>
              </tr>
            </thead>
            <tbody>
              {sampleRows.map((row, idx) => (
                <tr key={`${row.competitor_name}-${row.product_id}-${row.date}-${idx}`} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-2 pr-4 text-slate-800 font-medium">{row.competitor_name}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.product_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.date}</td>
                  <td className="py-2 pr-4 text-slate-700">{priceFormatter.format(row.competitor_price_UZS)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.market_share_percent.toFixed(2)}%</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.competitor_sales_volume)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
}
