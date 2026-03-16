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
  ScatterChart,
  Scatter,
  ZAxis,
} from 'recharts';

type CustomerRow = {
  customer_name: string;
  product_id: 'gypsum_board' | 'ceramic_tile' | 'rebar' | 'brick' | 'cement';
  region_id: 'andijan' | 'samarkand' | 'navoi' | 'bukhara' | 'tashkent';
  purchase_quantity: number;
  purchase_value_UZS: number;
  purchase_frequency_per_year: number;
};

const customerData: CustomerRow[] = [
  { customer_name: 'Orient Construction Group', product_id: 'gypsum_board', region_id: 'andijan', purchase_quantity: 5890, purchase_value_UZS: 24327850, purchase_frequency_per_year: 8 },
  { customer_name: 'Strong Structure LLC', product_id: 'ceramic_tile', region_id: 'samarkand', purchase_quantity: 17350, purchase_value_UZS: 15586186, purchase_frequency_per_year: 11 },
  { customer_name: 'New Era Build', product_id: 'ceramic_tile', region_id: 'navoi', purchase_quantity: 16523, purchase_value_UZS: 11526850, purchase_frequency_per_year: 6 },
  { customer_name: 'Urban Pro Construction', product_id: 'rebar', region_id: 'navoi', purchase_quantity: 2933, purchase_value_UZS: 10180351, purchase_frequency_per_year: 5 },
  { customer_name: 'Tashkent строй Servis', product_id: 'gypsum_board', region_id: 'samarkand', purchase_quantity: 6896, purchase_value_UZS: 10695979, purchase_frequency_per_year: 9 },
  { customer_name: 'Premium строй Group', product_id: 'brick', region_id: 'bukhara', purchase_quantity: 19442, purchase_value_UZS: 14237723, purchase_frequency_per_year: 3 },
  { customer_name: 'Progress Engineering', product_id: 'gypsum_board', region_id: 'tashkent', purchase_quantity: 11894, purchase_value_UZS: 3428388, purchase_frequency_per_year: 3 },
  { customer_name: 'Orient Construction Group', product_id: 'ceramic_tile', region_id: 'tashkent', purchase_quantity: 15002, purchase_value_UZS: 24418129, purchase_frequency_per_year: 4 },
  { customer_name: 'Golden Brick Construction', product_id: 'gypsum_board', region_id: 'samarkand', purchase_quantity: 10733, purchase_value_UZS: 2465689, purchase_frequency_per_year: 5 },
  { customer_name: 'Samarkand Mega Build', product_id: 'gypsum_board', region_id: 'navoi', purchase_quantity: 16287, purchase_value_UZS: 13839420, purchase_frequency_per_year: 8 },
  { customer_name: 'Oltin Vodiy Construction', product_id: 'brick', region_id: 'tashkent', purchase_quantity: 2085, purchase_value_UZS: 24027075, purchase_frequency_per_year: 2 },
  { customer_name: 'Universal Build Trade', product_id: 'rebar', region_id: 'navoi', purchase_quantity: 8489, purchase_value_UZS: 1271836, purchase_frequency_per_year: 2 },
  { customer_name: 'Trust Build Solutions', product_id: 'gypsum_board', region_id: 'samarkand', purchase_quantity: 4797, purchase_value_UZS: 19048957, purchase_frequency_per_year: 4 },
  { customer_name: 'Turan Industrial Build', product_id: 'gypsum_board', region_id: 'tashkent', purchase_quantity: 9029, purchase_value_UZS: 3704238, purchase_frequency_per_year: 5 },
  { customer_name: 'New Era Build', product_id: 'rebar', region_id: 'tashkent', purchase_quantity: 6831, purchase_value_UZS: 16606139, purchase_frequency_per_year: 9 },
  { customer_name: 'Strong Structure LLC', product_id: 'ceramic_tile', region_id: 'tashkent', purchase_quantity: 16716, purchase_value_UZS: 11788678, purchase_frequency_per_year: 9 },
  { customer_name: 'New Era Build', product_id: 'cement', region_id: 'navoi', purchase_quantity: 3195, purchase_value_UZS: 24717335, purchase_frequency_per_year: 11 },
  { customer_name: 'Modern City Construction', product_id: 'cement', region_id: 'bukhara', purchase_quantity: 13166, purchase_value_UZS: 17029444, purchase_frequency_per_year: 10 },
  { customer_name: 'Orient Construction Group', product_id: 'rebar', region_id: 'tashkent', purchase_quantity: 19983, purchase_value_UZS: 17013446, purchase_frequency_per_year: 9 },
  { customer_name: 'Grand Structure Invest', product_id: 'gypsum_board', region_id: 'samarkand', purchase_quantity: 19988, purchase_value_UZS: 5545583, purchase_frequency_per_year: 7 },
  { customer_name: 'Siyob Engineering', product_id: 'ceramic_tile', region_id: 'bukhara', purchase_quantity: 19615, purchase_value_UZS: 21379495, purchase_frequency_per_year: 6 },
  { customer_name: 'Elite House Construction', product_id: 'brick', region_id: 'tashkent', purchase_quantity: 15448, purchase_value_UZS: 13722094, purchase_frequency_per_year: 3 },
  { customer_name: 'Tashkent строй Servis', product_id: 'ceramic_tile', region_id: 'samarkand', purchase_quantity: 1002, purchase_value_UZS: 23944510, purchase_frequency_per_year: 7 },
  { customer_name: 'Elite House Construction', product_id: 'cement', region_id: 'samarkand', purchase_quantity: 18368, purchase_value_UZS: 1769598, purchase_frequency_per_year: 7 },
  { customer_name: 'Premium строй Group', product_id: 'gypsum_board', region_id: 'andijan', purchase_quantity: 12883, purchase_value_UZS: 1874371, purchase_frequency_per_year: 5 },
  { customer_name: 'Siyob Engineering', product_id: 'ceramic_tile', region_id: 'bukhara', purchase_quantity: 1559, purchase_value_UZS: 23993420, purchase_frequency_per_year: 7 },
  { customer_name: 'Elite House Construction', product_id: 'brick', region_id: 'navoi', purchase_quantity: 11317, purchase_value_UZS: 15744108, purchase_frequency_per_year: 9 },
  { customer_name: 'Urban Pro Construction', product_id: 'gypsum_board', region_id: 'navoi', purchase_quantity: 14431, purchase_value_UZS: 11511699, purchase_frequency_per_year: 11 },
  { customer_name: 'Trust Build Solutions', product_id: 'gypsum_board', region_id: 'tashkent', purchase_quantity: 11994, purchase_value_UZS: 3484413, purchase_frequency_per_year: 1 },
  { customer_name: 'Tashkent строй Servis', product_id: 'cement', region_id: 'bukhara', purchase_quantity: 7276, purchase_value_UZS: 24685747, purchase_frequency_per_year: 9 },
  { customer_name: 'Navoi Industrial Construction', product_id: 'brick', region_id: 'tashkent', purchase_quantity: 4248, purchase_value_UZS: 22200096, purchase_frequency_per_year: 3 },
  { customer_name: 'Asia Modern Construction', product_id: 'gypsum_board', region_id: 'bukhara', purchase_quantity: 18379, purchase_value_UZS: 24187123, purchase_frequency_per_year: 1 },
  { customer_name: 'Universal Build Trade', product_id: 'cement', region_id: 'samarkand', purchase_quantity: 18175, purchase_value_UZS: 8654909, purchase_frequency_per_year: 7 },
  { customer_name: 'Samarkand Mega Build', product_id: 'brick', region_id: 'tashkent', purchase_quantity: 2136, purchase_value_UZS: 16421040, purchase_frequency_per_year: 8 },
  { customer_name: 'Premium строй Group', product_id: 'brick', region_id: 'tashkent', purchase_quantity: 5237, purchase_value_UZS: 21560091, purchase_frequency_per_year: 6 },
  { customer_name: 'Siyob Engineering', product_id: 'ceramic_tile', region_id: 'tashkent', purchase_quantity: 14449, purchase_value_UZS: 19338945, purchase_frequency_per_year: 5 },
  { customer_name: 'Progress Engineering', product_id: 'rebar', region_id: 'navoi', purchase_quantity: 702, purchase_value_UZS: 11595511, purchase_frequency_per_year: 11 },
  { customer_name: 'Premium строй Group', product_id: 'ceramic_tile', region_id: 'navoi', purchase_quantity: 8277, purchase_value_UZS: 4080389, purchase_frequency_per_year: 6 },
  { customer_name: 'Baraka строй Invest', product_id: 'cement', region_id: 'tashkent', purchase_quantity: 9839, purchase_value_UZS: 2659066, purchase_frequency_per_year: 6 },
  { customer_name: 'Smart House Development', product_id: 'ceramic_tile', region_id: 'bukhara', purchase_quantity: 17543, purchase_value_UZS: 7404003, purchase_frequency_per_year: 3 },
  { customer_name: 'Trust Build Solutions', product_id: 'brick', region_id: 'bukhara', purchase_quantity: 11911, purchase_value_UZS: 20532639, purchase_frequency_per_year: 7 },
  { customer_name: 'Atlas Development', product_id: 'cement', region_id: 'tashkent', purchase_quantity: 18843, purchase_value_UZS: 17848511, purchase_frequency_per_year: 7 },
  { customer_name: 'East Region Build', product_id: 'cement', region_id: 'bukhara', purchase_quantity: 8655, purchase_value_UZS: 4612600, purchase_frequency_per_year: 9 },
  { customer_name: 'East Region Build', product_id: 'rebar', region_id: 'bukhara', purchase_quantity: 17146, purchase_value_UZS: 17037627, purchase_frequency_per_year: 10 },
  { customer_name: 'Smart House Development', product_id: 'cement', region_id: 'navoi', purchase_quantity: 12335, purchase_value_UZS: 13956528, purchase_frequency_per_year: 2 },
  { customer_name: 'Tashkent строй Servis', product_id: 'gypsum_board', region_id: 'andijan', purchase_quantity: 19992, purchase_value_UZS: 2241082, purchase_frequency_per_year: 7 },
  { customer_name: 'Imkon Build Trade', product_id: 'cement', region_id: 'bukhara', purchase_quantity: 10374, purchase_value_UZS: 13503247, purchase_frequency_per_year: 3 },
  { customer_name: 'Atlas Development', product_id: 'cement', region_id: 'navoi', purchase_quantity: 13374, purchase_value_UZS: 24101383, purchase_frequency_per_year: 4 },
  { customer_name: 'Uz Capital Build', product_id: 'gypsum_board', region_id: 'bukhara', purchase_quantity: 3057, purchase_value_UZS: 12310552, purchase_frequency_per_year: 3 },
  { customer_name: 'Golden Brick Construction', product_id: 'ceramic_tile', region_id: 'samarkand', purchase_quantity: 14707, purchase_value_UZS: 3904941, purchase_frequency_per_year: 2 },
];

const numberFormatter = new Intl.NumberFormat('en-US');
const currencyFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

const productLabels: Record<CustomerRow['product_id'], string> = {
  gypsum_board: 'Gypsum board',
  ceramic_tile: 'Ceramic tile',
  rebar: 'Rebar',
  brick: 'Brick',
  cement: 'Cement',
};

function aggregateCustomerTotals(rows: CustomerRow[]) {
  const grouped = rows.reduce<Record<string, { value: number; quantity: number; freq: number; count: number }>>((acc, row) => {
    if (!acc[row.customer_name]) {
      acc[row.customer_name] = { value: 0, quantity: 0, freq: 0, count: 0 };
    }
    acc[row.customer_name].value += row.purchase_value_UZS;
    acc[row.customer_name].quantity += row.purchase_quantity;
    acc[row.customer_name].freq += row.purchase_frequency_per_year;
    acc[row.customer_name].count += 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([customer, stats]) => ({
    customer,
    totalValue: stats.value,
    totalQuantity: stats.quantity,
    avgFrequency: stats.freq / stats.count,
  }));
}

function aggregateByRegion(rows: CustomerRow[]) {
  const grouped = rows.reduce<Record<string, { value: number; quantity: number }>>((acc, row) => {
    if (!acc[row.region_id]) {
      acc[row.region_id] = { value: 0, quantity: 0 };
    }
    acc[row.region_id].value += row.purchase_value_UZS;
    acc[row.region_id].quantity += row.purchase_quantity;
    return acc;
  }, {});

  return Object.entries(grouped).map(([region, stats]) => ({
    region,
    valueMln: Number((stats.value / 1_000_000).toFixed(2)),
    quantity: stats.quantity,
  }));
}

function aggregateByProduct(rows: CustomerRow[]) {
  const grouped = rows.reduce<Record<string, number>>((acc, row) => {
    acc[row.product_id] = (acc[row.product_id] ?? 0) + row.purchase_value_UZS;
    return acc;
  }, {});

  return Object.entries(grouped).map(([product, value]) => ({
    product: productLabels[product as CustomerRow['product_id']],
    valueMln: Number((value / 1_000_000).toFixed(2)),
  }));
}

function buildFrequencyScatter(rows: CustomerRow[]) {
  return rows.map((row) => ({
    x: row.purchase_frequency_per_year,
    y: row.purchase_quantity,
    z: Number((row.purchase_value_UZS / 1_000_000).toFixed(2)),
    customer: row.customer_name,
  }));
}

const pieColors = ['#0ea5e9', '#16a34a', '#f97316', '#6366f1', '#e11d48'];

export function Customers() {
  const customerTotals = React.useMemo(() => aggregateCustomerTotals(customerData), []);
  const regionSummary = React.useMemo(() => aggregateByRegion(customerData), []);
  const productShare = React.useMemo(() => aggregateByProduct(customerData), []);
  const frequencyScatter = React.useMemo(() => buildFrequencyScatter(customerData), []);

  const totalValue = React.useMemo(
    () => customerData.reduce((sum, row) => sum + row.purchase_value_UZS, 0),
    [],
  );
  const totalQuantity = React.useMemo(
    () => customerData.reduce((sum, row) => sum + row.purchase_quantity, 0),
    [],
  );
  const uniqueCustomers = React.useMemo(
    () => new Set(customerData.map((row) => row.customer_name)).size,
    [],
  );
  const avgFrequency = React.useMemo(
    () => customerData.reduce((sum, row) => sum + row.purchase_frequency_per_year, 0) / customerData.length,
    [],
  );

  const topCustomer = React.useMemo(
    () =>
      [...customerTotals]
        .sort((a, b) => b.totalValue - a.totalValue)[0],
    [customerTotals],
  );

  const top10Customers = React.useMemo(
    () => [...customerTotals].sort((a, b) => b.totalValue - a.totalValue).slice(0, 10).map((item) => ({
      customer: item.customer,
      valueMln: Number((item.totalValue / 1_000_000).toFixed(2)),
    })),
    [customerTotals],
  );

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Mijozlar tahlili</h1>
        <p className="text-slate-500 font-medium mt-2">
          50 ta xarid yozuvi bo&apos;yicha mijoz segmenti, hududlar kesimi va xarid faolligi.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Unique mijozlar</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{uniqueCustomers}</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Jami purchase value</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{currencyFormatter.format(totalValue)} UZS</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Jami purchase qty</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{numberFormatter.format(totalQuantity)}</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">O&apos;rtacha chastota</p>
          <p className="text-3xl font-black text-slate-900 mt-2">{avgFrequency.toFixed(1)} / yil</p>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Hududlar bo&apos;yicha purchase value</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionSummary}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="region" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value: number, name) => (name === 'Value (mln UZS)' ? `${value} mln UZS` : numberFormatter.format(value))} />
                <Bar dataKey="valueMln" fill="#0f766e" name="Value (mln UZS)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Mahsulotlar bo&apos;yicha qiymat ulushi</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={productShare} dataKey="valueMln" nameKey="product" innerRadius={60} outerRadius={100}>
                  {productShare.map((entry, index) => (
                    <Cell key={entry.product} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value} mln UZS`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4">Chastota va xarid miqdori bog&apos;liqligi</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 20, left: 6, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" dataKey="x" name="Chastota" tick={{ fontSize: 11 }} />
                <YAxis type="number" dataKey="y" name="Miqdor" tick={{ fontSize: 11 }} />
                <ZAxis type="number" dataKey="z" name="Qiymat (mln UZS)" range={[70, 320]} />
                <Tooltip
                  formatter={(value: number, name) => {
                    if (name === 'Qiymat (mln UZS)') return `${value} mln UZS`;
                    return numberFormatter.format(value);
                  }}
                  labelFormatter={(_, payload) => payload?.[0]?.payload?.customer ?? ''}
                />
                <Scatter data={frequencyScatter} fill="#2563eb" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900">Top 10 mijozlar (purchase value)</h3>
          {topCustomer ? (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
              Top: {topCustomer.customer}
            </span>
          ) : null}
        </div>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={top10Customers} layout="vertical" margin={{ left: 12, right: 18 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="customer" type="category" width={190} tick={{ fontSize: 10 }} />
              <Tooltip formatter={(value: number) => `${value} mln UZS`} />
              <Bar dataKey="valueMln" fill="#0ea5e9" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34 }}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
      >
        <h3 className="text-base font-bold text-slate-900 mb-4">Mijozlar dataseti (50 qator)</h3>
        <div className="overflow-auto">
          <table className="min-w-[1100px] w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4 font-semibold">customer_name</th>
                <th className="py-2 pr-4 font-semibold">product_id</th>
                <th className="py-2 pr-4 font-semibold">region_id</th>
                <th className="py-2 pr-4 font-semibold">purchase_quantity</th>
                <th className="py-2 pr-4 font-semibold">purchase_value_UZS</th>
                <th className="py-2 pr-4 font-semibold">purchase_frequency_per_year</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((row, idx) => (
                <tr key={`${row.customer_name}-${row.product_id}-${row.region_id}-${idx}`} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-2 pr-4 text-slate-800 font-medium">{row.customer_name}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.product_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.region_id}</td>
                  <td className="py-2 pr-4 text-slate-700">{numberFormatter.format(row.purchase_quantity)}</td>
                  <td className="py-2 pr-4 text-slate-700">{currencyFormatter.format(row.purchase_value_UZS)}</td>
                  <td className="py-2 pr-4 text-slate-700">{row.purchase_frequency_per_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
}
