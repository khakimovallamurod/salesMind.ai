import React from 'react';
import { motion } from 'motion/react';

type DemandRow = {
  product_id: string;
  region_id: string;
  date: string;
  price_UZS: number;
  competitor_price: number;
  construction_volume: number;
  marketing_spend_UZS: number;
  sales_quantity: number;
  sales_lag_1: number;
  sales_lag_3: number;
  next_month_sales: number;
};

const demandSample: DemandRow[] = [
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2023-11-01', price_UZS: 30575, competitor_price: 30561, construction_volume: 149165, marketing_spend_UZS: 5250167, sales_quantity: 500, sales_lag_1: 500, sales_lag_3: 500, next_month_sales: 500 },
  { product_id: 'rebar', region_id: 'tashkent', date: '2021-08-01', price_UZS: 9466, competitor_price: 9244, construction_volume: 162855, marketing_spend_UZS: 5087810, sales_quantity: 500, sales_lag_1: 519, sales_lag_3: 2046, next_month_sales: 500 },
  { product_id: 'ceramic_tile', region_id: 'tashkent', date: '2021-09-01', price_UZS: 68947, competitor_price: 68748, construction_volume: 98785, marketing_spend_UZS: 1906395, sales_quantity: 500, sales_lag_1: 500, sales_lag_3: 1864, next_month_sales: 1638 },
  { product_id: 'rebar', region_id: 'bukhara', date: '2022-11-01', price_UZS: 8577, competitor_price: 8693, construction_volume: 81910, marketing_spend_UZS: 5423408, sales_quantity: 1976, sales_lag_1: 2243, sales_lag_3: 1767, next_month_sales: 1529 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2024-03-01', price_UZS: 29735, competitor_price: 30337, construction_volume: 97893, marketing_spend_UZS: 1700033, sales_quantity: 500, sales_lag_1: 3174, sales_lag_3: 500, next_month_sales: 1796 },
  { product_id: 'gypsum_board', region_id: 'samarkand', date: '2021-04-01', price_UZS: 20644, competitor_price: 20827, construction_volume: 93469, marketing_spend_UZS: 3524055, sales_quantity: 500, sales_lag_1: 500, sales_lag_3: 1058, next_month_sales: 1911 },
  { product_id: 'gypsum_board', region_id: 'navoi', date: '2022-01-01', price_UZS: 31653, competitor_price: 32447, construction_volume: 136483, marketing_spend_UZS: 1908017, sales_quantity: 786, sales_lag_1: 500, sales_lag_3: 500, next_month_sales: 2156 },
  { product_id: 'brick', region_id: 'navoi', date: '2020-02-01', price_UZS: 1668, competitor_price: 1682, construction_volume: 183682, marketing_spend_UZS: 1601891, sales_quantity: 12687, sales_lag_1: 24483, sales_lag_3: 24483, next_month_sales: 8292 },
  { product_id: 'cement', region_id: 'navoi', date: '2023-11-01', price_UZS: 1128, competitor_price: 1138, construction_volume: 70581, marketing_spend_UZS: 2661793, sales_quantity: 1900, sales_lag_1: 2186, sales_lag_3: 1674, next_month_sales: 2323 },
  { product_id: 'rebar', region_id: 'andijan', date: '2023-03-01', price_UZS: 9993, competitor_price: 10254, construction_volume: 147661, marketing_spend_UZS: 5070211, sales_quantity: 500, sales_lag_1: 1065, sales_lag_3: 2079, next_month_sales: 1337 },
  { product_id: 'cement', region_id: 'tashkent', date: '2024-01-01', price_UZS: 1187, competitor_price: 1203, construction_volume: 171449, marketing_spend_UZS: 4123000, sales_quantity: 2510, sales_lag_1: 2461, sales_lag_3: 2218, next_month_sales: 2674 },
  { product_id: 'brick', region_id: 'samarkand', date: '2022-06-01', price_UZS: 1812, competitor_price: 1845, construction_volume: 154210, marketing_spend_UZS: 2311000, sales_quantity: 9642, sales_lag_1: 10015, sales_lag_3: 9367, next_month_sales: 9875 },
  { product_id: 'ceramic_tile', region_id: 'fergana', date: '2024-02-01', price_UZS: 70124, competitor_price: 69871, construction_volume: 86420, marketing_spend_UZS: 2215600, sales_quantity: 1732, sales_lag_1: 1660, sales_lag_3: 1815, next_month_sales: 1769 },
  { product_id: 'rebar', region_id: 'namangan', date: '2023-07-01', price_UZS: 9320, competitor_price: 9411, construction_volume: 139725, marketing_spend_UZS: 3989000, sales_quantity: 1420, sales_lag_1: 1354, sales_lag_3: 1298, next_month_sales: 1508 },
  { product_id: 'gypsum_board', region_id: 'bukhara', date: '2022-09-01', price_UZS: 28344, competitor_price: 28610, construction_volume: 115309, marketing_spend_UZS: 1766400, sales_quantity: 1211, sales_lag_1: 1103, sales_lag_3: 1194, next_month_sales: 1280 },
  { product_id: 'cement', region_id: 'andijan', date: '2021-12-01', price_UZS: 1025, competitor_price: 1044, construction_volume: 128944, marketing_spend_UZS: 2881500, sales_quantity: 2068, sales_lag_1: 1987, sales_lag_3: 1850, next_month_sales: 2142 },
  { product_id: 'brick', region_id: 'tashkent', date: '2023-04-01', price_UZS: 1975, competitor_price: 1992, construction_volume: 192370, marketing_spend_UZS: 3154200, sales_quantity: 14380, sales_lag_1: 13966, sales_lag_3: 13245, next_month_sales: 14622 },
  { product_id: 'ceramic_tile', region_id: 'samarkand', date: '2022-03-01', price_UZS: 66190, competitor_price: 65980, construction_volume: 91240, marketing_spend_UZS: 2147900, sales_quantity: 1580, sales_lag_1: 1624, sales_lag_3: 1492, next_month_sales: 1655 },
  { product_id: 'rebar', region_id: 'navoi', date: '2024-02-01', price_UZS: 9708, competitor_price: 9761, construction_volume: 146008, marketing_spend_UZS: 4365500, sales_quantity: 1874, sales_lag_1: 1803, sales_lag_3: 1731, next_month_sales: 1948 },
  { product_id: 'gypsum_board', region_id: 'tashkent', date: '2023-09-01', price_UZS: 31120, competitor_price: 30988, construction_volume: 125607, marketing_spend_UZS: 2988700, sales_quantity: 1564, sales_lag_1: 1501, sales_lag_3: 1435, next_month_sales: 1632 },
];

const evaluationMetrics = [
  { metric: 'RMSE', value: '0.1881', note: 'Qiymat past bo‘lsa, xatolik tarqalishi nazoratda bo‘ladi' },
  { metric: 'MAE', value: '0.1545', note: 'O‘rtacha mutlaq xatolik taxminan 0.15 birlik' },
  { metric: 'R2', value: '0.89', note: 'Model talabdagi o‘zgarishning 89% qismini tushuntiradi' },
];

const numberFormatter = new Intl.NumberFormat('en-US');

export function DemandForecast() {
  const [imageMissing, setImageMissing] = React.useState(false);

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Talab prognozi</h1>
        <p className="text-slate-500 font-medium mt-2">
          Keyingi oy mahsulot talabi prognozi: namunaviy ma’lumotlar, train natija rasmi va model baholash ko‘rsatkichlari.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="xl:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-lg font-bold text-slate-900">Train prediksiya natijasi</h2>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">Model: Logistic Regression</span>
          </div>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            {!imageMissing ? (
              <img
                src="/images/demand-train-prediction.png"
                alt="Train prediksiya natijasi"
                className="w-full h-[320px] object-contain rounded-lg bg-white"
                onError={() => setImageMissing(true)}
              />
            ) : (
              <div className="w-full h-[320px] rounded-lg bg-white border border-slate-200 grid place-items-center text-center px-6">
                <div>
                  <p className="text-slate-700 font-semibold">Prediction rasmi topilmadi</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Fayl nomi: <code>demand-train-prediction.png</code>
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4">Model baholash</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="pb-2 pr-2 font-semibold">Metrika</th>
                  <th className="pb-2 pr-2 font-semibold">Qiymat</th>
                  <th className="pb-2 font-semibold">Izoh</th>
                </tr>
              </thead>
              <tbody>
                {evaluationMetrics.map((row) => (
                  <tr key={row.metric} className="border-b border-slate-100 last:border-b-0 align-top">
                    <td className="py-3 pr-2 font-semibold text-slate-800">{row.metric}</td>
                    <td className="py-3 pr-2 text-slate-700">{row.value}</td>
                    <td className="py-3 text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4 gap-3">
          <h2 className="text-lg font-bold text-slate-900">Dataset namunasi (20 qator)</h2>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
            Featurelar + target: next_month_sales
          </span>
        </div>

        <div className="overflow-auto">
          <table className="min-w-[1220px] w-full text-sm">
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
                <th className="py-2 pr-4 font-semibold">sales_lag_1</th>
                <th className="py-2 pr-4 font-semibold">sales_lag_3</th>
                <th className="py-2 pr-4 font-semibold">next_month_sales</th>
              </tr>
            </thead>
            <tbody>
              {demandSample.map((row, idx) => (
                <tr key={`${row.product_id}-${row.region_id}-${row.date}-${idx}`} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-2 pr-4 text-slate-800 font-medium">{row.product_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.region_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.date}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.price_UZS)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.competitor_price)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.construction_volume)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.marketing_spend_UZS)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.sales_quantity)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.sales_lag_1)}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.sales_lag_3)}</td>
                  <td className="py-2 pr-4 text-indigo-700 font-semibold">{numberFormatter.format(row.next_month_sales)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
}
