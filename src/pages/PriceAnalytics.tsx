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
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from 'recharts';

type PriceRow = {
  product_id: 'gypsum_board' | 'rebar' | 'ceramic_tile' | 'brick' | 'cement';
  region_id: 'samarkand' | 'tashkent' | 'bukhara' | 'navoi' | 'andijan';
  date: string;
  price_UZS: number;
  competitor_price: number;
  construction_volume: number;
  marketing_spend_UZS: number;
  sales_quantity: number;
  season_flag: 0 | 1;
};

const priceDataset: PriceRow[] = [
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2023-11-01', price_UZS: 30575, competitor_price: 30561, construction_volume: 149165, marketing_spend_UZS: 5250167, sales_quantity: 500, season_flag: 0 },
  { product_id: 'rebar', region_id: 'tashkent', date: '2021-08-01', price_UZS: 9466, competitor_price: 9244, construction_volume: 162855, marketing_spend_UZS: 5087810, sales_quantity: 500, season_flag: 1 },
  { product_id: 'ceramic_tile', region_id: 'tashkent', date: '2021-09-01', price_UZS: 68947, competitor_price: 68748, construction_volume: 98785, marketing_spend_UZS: 1906395, sales_quantity: 500, season_flag: 0 },
  { product_id: 'rebar', region_id: 'bukhara', date: '2022-11-01', price_UZS: 8577, competitor_price: 8693, construction_volume: 81910, marketing_spend_UZS: 5423408, sales_quantity: 1976, season_flag: 0 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2024-03-01', price_UZS: 29735, competitor_price: 30337, construction_volume: 97893, marketing_spend_UZS: 1700033, sales_quantity: 500, season_flag: 1 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2021-04-01', price_UZS: 20644, competitor_price: 20827, construction_volume: 93469, marketing_spend_UZS: 3524055, sales_quantity: 500, season_flag: 1 },
  { product_id: 'gypsum_board', region_id: 'navoi', date: '2022-01-01', price_UZS: 31653, competitor_price: 32447, construction_volume: 136483, marketing_spend_UZS: 1908017, sales_quantity: 786, season_flag: 0 },
  { product_id: 'brick', region_id: 'navoi', date: '2020-02-01', price_UZS: 1668, competitor_price: 1682, construction_volume: 183682, marketing_spend_UZS: 1601891, sales_quantity: 12687, season_flag: 0 },
  { product_id: 'cement', region_id: 'navoi', date: '2023-11-01', price_UZS: 1128, competitor_price: 1138, construction_volume: 70581, marketing_spend_UZS: 2661793, sales_quantity: 1900, season_flag: 0 },
  { product_id: 'rebar', region_id: 'andijan', date: '2023-03-01', price_UZS: 9993, competitor_price: 10254, construction_volume: 147661, marketing_spend_UZS: 5070211, sales_quantity: 500, season_flag: 1 },
  { product_id: 'cement', region_id: 'andijan', date: '2022-07-01', price_UZS: 1333, competitor_price: 1371, construction_volume: 117444, marketing_spend_UZS: 2712503, sales_quantity: 1948, season_flag: 1 },
  { product_id: 'rebar', region_id: 'tashkent', date: '2023-07-01', price_UZS: 9752, competitor_price: 9481, construction_volume: 70953, marketing_spend_UZS: 3042999, sales_quantity: 670, season_flag: 1 },
  { product_id: 'brick', region_id: 'bukhara', date: '2022-04-01', price_UZS: 1411, competitor_price: 1450, construction_volume: 163550, marketing_spend_UZS: 1960652, sales_quantity: 500, season_flag: 1 },
  { product_id: 'rebar', region_id: 'samarkand', date: '2021-05-01', price_UZS: 9054, competitor_price: 9241, construction_volume: 148511, marketing_spend_UZS: 4081091, sales_quantity: 2517, season_flag: 1 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2023-08-01', price_UZS: 39338, competitor_price: 40481, construction_volume: 82101, marketing_spend_UZS: 5197079, sales_quantity: 500, season_flag: 1 },
  { product_id: 'ceramic_tile', region_id: 'tashkent', date: '2022-08-01', price_UZS: 225565, competitor_price: 230179, construction_volume: 161361, marketing_spend_UZS: 3889190, sales_quantity: 2322, season_flag: 1 },
  { product_id: 'brick', region_id: 'navoi', date: '2020-11-01', price_UZS: 842, competitor_price: 851, construction_volume: 68919, marketing_spend_UZS: 3887757, sales_quantity: 1323, season_flag: 0 },
  { product_id: 'rebar', region_id: 'navoi', date: '2021-01-01', price_UZS: 9206, competitor_price: 9117, construction_volume: 159458, marketing_spend_UZS: 1896816, sales_quantity: 2584, season_flag: 0 },
  { product_id: 'ceramic_tile', region_id: 'navoi', date: '2024-02-01', price_UZS: 240388, competitor_price: 240237, construction_volume: 65504, marketing_spend_UZS: 3821105, sales_quantity: 1253, season_flag: 0 },
  { product_id: 'cement', region_id: 'andijan', date: '2023-08-01', price_UZS: 1399, competitor_price: 1384, construction_volume: 148723, marketing_spend_UZS: 2932728, sales_quantity: 500, season_flag: 1 },
];

const metricCards = [
  {
    title: 'MAE',
    value: '0.01',
    explanation: "Modelning o'rtacha absolyut xatoligi juda past.",
  },
  {
    title: 'RMSE',
    value: '0.01',
    explanation: "Katta xatolar ham minimal darajada ushlangan.",
  },
  {
    title: 'R2 Score',
    value: '0.971',
    explanation: "Narx o'zgarishining 97.1% qismini model tushuntirib bera olgan.",
  },
];

const productLabel: Record<PriceRow['product_id'], string> = {
  gypsum_board: 'Gypsum board',
  rebar: 'Rebar',
  ceramic_tile: 'Ceramic tile',
  brick: 'Brick',
  cement: 'Cement',
};

const regionLabel: Record<PriceRow['region_id'], string> = {
  samarkand: 'Samarkand',
  tashkent: 'Tashkent',
  bukhara: 'Bukhara',
  navoi: 'Navoi',
  andijan: 'Andijan',
};

const numberFormatter = new Intl.NumberFormat('en-US');

function buildProductAverages(rows: PriceRow[]) {
  const grouped = rows.reduce<Record<string, { sumPrice: number; sumCompetitor: number; count: number }>>((acc, row) => {
    const key = row.product_id;
    if (!acc[key]) {
      acc[key] = { sumPrice: 0, sumCompetitor: 0, count: 0 };
    }
    acc[key].sumPrice += row.price_UZS;
    acc[key].sumCompetitor += row.competitor_price;
    acc[key].count += 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([product, stats]) => ({
    product: productLabel[product as PriceRow['product_id']],
    avgPrice: Math.round(stats.sumPrice / stats.count),
    avgCompetitor: Math.round(stats.sumCompetitor / stats.count),
  }));
}

function buildRegionGap(rows: PriceRow[]) {
  const grouped = rows.reduce<Record<string, { sumGap: number; count: number }>>((acc, row) => {
    const key = row.region_id;
    if (!acc[key]) {
      acc[key] = { sumGap: 0, count: 0 };
    }
    acc[key].sumGap += row.price_UZS - row.competitor_price;
    acc[key].count += 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([region, stats]) => ({
    region: regionLabel[region as PriceRow['region_id']],
    gap: Math.round(stats.sumGap / stats.count),
  }));
}

function buildSeasonShare(rows: PriceRow[]) {
  const seasonRows = rows.filter((row) => row.season_flag === 1).length;
  const offSeasonRows = rows.length - seasonRows;
  return [
    { name: 'Mavsum', value: seasonRows },
    { name: 'Mavsumdan tashqari', value: offSeasonRows },
  ];
}

function buildTimeSeries(rows: PriceRow[]) {
  return [...rows]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((row) => ({
      date: row.date.slice(0, 7),
      price: row.price_UZS,
      competitor: row.competitor_price,
    }));
}

function buildMarketingSalesScatter(rows: PriceRow[]) {
  return rows.map((row) => ({
    x: Math.round(row.marketing_spend_UZS / 1_000_000),
    y: row.sales_quantity,
    z: Math.round(row.construction_volume / 1_000),
    product: productLabel[row.product_id],
  }));
}

const seasonColors = ['#0ea5e9', '#cbd5e1'];

export function PriceAnalytics() {
  const [imageMissing, setImageMissing] = React.useState(false);

  const productAverages = React.useMemo(() => buildProductAverages(priceDataset), []);
  const regionGap = React.useMemo(() => buildRegionGap(priceDataset), []);
  const seasonShare = React.useMemo(() => buildSeasonShare(priceDataset), []);
  const timeSeries = React.useMemo(() => buildTimeSeries(priceDataset), []);
  const scatterData = React.useMemo(() => buildMarketingSalesScatter(priceDataset), []);

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Narx tahlili</h1>
        <p className="text-slate-500 font-medium mt-2">
          LogisticRegression modeli bo&apos;yicha narx dinamikasi, raqobatchi taqqoslash va savdoga ta&apos;sir omillari.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx }}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{card.title}</p>
            <p className="text-3xl font-black text-slate-900 mt-2">{card.value}</p>
            <p className="text-sm text-slate-500 mt-3">{card.explanation}</p>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Prediksiya rasmi</h2>
              <p className="text-sm text-slate-500">Siz joylaydigan model natija rasmi shu blokda ko&apos;rinadi.</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-lg bg-slate-100 text-slate-600 font-semibold">/public/images/price-prediction.png</span>
          </div>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            {!imageMissing ? (
              <img
                src="/images/price-prediction.png"
                alt="Price prediction chart"
                className="w-full h-[320px] object-contain rounded-lg bg-white"
                onError={() => setImageMissing(true)}
              />
            ) : (
              <div className="w-full h-[320px] rounded-lg bg-white border border-slate-200 grid place-items-center text-center px-6">
                <div>
                  <p className="text-slate-700 font-semibold">Prediction rasmi topilmadi</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Faylni <code>public/images/price-prediction.png</code> nomida joylang.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-4">Qisqa xulosa</h3>
          <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <li>Narxlar ko&apos;p holatda raqobatchi narxiga juda yaqin shakllangan.</li>
            <li>Keramik plitka segmentida narx dispersiyasi yuqori va premium segment ustun.</li>
            <li>Marketing xarajati oshgan nuqtalarda savdo hajmi ham ko&apos;tarilishi kuzatiladi.</li>
            <li>Mavsumli qatorlar ulushi yuqori bo&apos;lgani uchun kampaniya vaqtini sezon bilan bog&apos;lash foydali.</li>
          </ul>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Mahsulotlar bo&apos;yicha o&apos;rtacha narxlar</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productAverages}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="product" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value: number) => `${numberFormatter.format(value)} UZS`} />
                <Bar dataKey="avgPrice" name="Bizning narx" fill="#0f766e" radius={[6, 6, 0, 0]} />
                <Bar dataKey="avgCompetitor" name="Raqobatchi narxi" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Vaqt bo&apos;yicha narx trendi</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value: number) => `${numberFormatter.format(value)} UZS`} />
                <Line dataKey="price" name="Bizning narx" stroke="#1d4ed8" strokeWidth={2} dot={false} />
                <Line dataKey="competitor" name="Raqobatchi narxi" stroke="#94a3b8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Hududlar bo&apos;yicha o&apos;rtacha narx farqi</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionGap} layout="vertical" margin={{ left: 16, right: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} width={90} />
                <Tooltip formatter={(value: number) => `${numberFormatter.format(value)} UZS`} />
                <Bar dataKey="gap" name="Biz - Raqobatchi" radius={[0, 6, 6, 0]}>
                  {regionGap.map((entry) => (
                    <Cell key={entry.region} fill={entry.gap >= 0 ? '#2563eb' : '#dc2626'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Marketing va savdo bog&apos;liqligi</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 8, right: 20, left: 4, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" dataKey="x" name="Marketing" tick={{ fontSize: 11 }} unit=" mln" />
                <YAxis type="number" dataKey="y" name="Savdo" tick={{ fontSize: 11 }} />
                <ZAxis type="number" dataKey="z" range={[60, 300]} name="Qurilish hajmi (ming)" />
                <Tooltip
                  cursor={{ strokeDasharray: '4 4' }}
                  formatter={(value: number, name) => (name === 'Marketing' ? `${value} mln` : value)}
                  labelFormatter={(_, payload) => payload?.[0]?.payload?.product ?? ''}
                />
                <Scatter data={scatterData} fill="#0ea5e9" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Mavsum ulushi</h3>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={seasonShare} dataKey="value" nameKey="name" innerRadius={56} outerRadius={92} paddingAngle={2}>
                  {seasonShare.map((entry, idx) => (
                    <Cell key={entry.name} fill={seasonColors[idx % seasonColors.length]} />
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
          transition={{ delay: 0.62 }}
          className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900">Dataset (20 qator)</h3>
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">sales_quantity target tahlili</span>
          </div>
          <div className="overflow-auto">
            <table className="min-w-[1100px] w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="py-2 pr-4 font-semibold">product_id</th>
                  <th className="py-2 pr-4 font-semibold">region_id</th>
                  <th className="py-2 pr-4 font-semibold">date</th>
                  <th className="py-2 pr-4 font-semibold">price_UZS</th>
                  <th className="py-2 pr-4 font-semibold">competitor_price</th>
                  <th className="py-2 pr-4 font-semibold">construction_volume</th>
                  <th className="py-2 pr-4 font-semibold">marketing_spend_UZS</th>
                  <th className="py-2 pr-4 font-semibold">sales_quantity</th>
                  <th className="py-2 pr-4 font-semibold">season_flag</th>
                </tr>
              </thead>
              <tbody>
                {priceDataset.map((row, idx) => (
                  <tr key={`${row.product_id}-${row.region_id}-${row.date}-${idx}`} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-2 pr-4 text-slate-800 font-medium">{row.product_id}</td>
                    <td className="py-2 pr-4 text-slate-700">{row.region_id}</td>
                    <td className="py-2 pr-4 text-slate-700">{row.date}</td>
                    <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.price_UZS)}</td>
                    <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.competitor_price)}</td>
                    <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.construction_volume)}</td>
                    <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.marketing_spend_UZS)}</td>
                    <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.sales_quantity)}</td>
                    <td className="py-2 pr-4 text-slate-700">{row.season_flag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
