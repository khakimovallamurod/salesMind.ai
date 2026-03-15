import React, { useState } from 'react';
import { Sparkles, Loader2, TrendingUp, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export function AIForecastPanel() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);
  const [formData, setFormData] = useState({
    product: 'SmartHome Hub Pro',
    region: 'North America',
    price: '299',
    competitorPrice: '275',
    constructionVolume: 'High',
    marketingSpend: '50000',
    lag1Sales: '1200',
    lag3Sales: '3500'
  });

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const model = "gemini-3-flash-preview";
      const prompt = `
        Act as a Sales Analytics AI. Based on the following data, predict next month's sales demand and provide a 4-month forecast.
        Product: ${formData.product}
        Region: ${formData.region}
        Price: $${formData.price}
        Competitor Price: $${formData.competitorPrice}
        Market Construction Volume: ${formData.constructionVolume}
        Marketing Spend: $${formData.marketingSpend}
        Previous Month Sales (Lag 1): ${formData.lag1Sales}
        3 Months Ago Sales (Lag 3): ${formData.lag3Sales}

        Return a JSON object with:
        - predictedDemand (number)
        - growthPercentage (string, e.g. "+12.5%")
        - confidenceScore (number, 0-100)
        - forecast (array of 4 objects with { month: string, value: number })
        - insights (string, brief summary)
      `;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const result = JSON.parse(response.text || '{}');
      setPrediction(result);
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <Sparkles className="text-white w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">AI Demand Forecast</h3>
          <p className="text-sm text-slate-500">Run advanced ML models for predictive insights</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <form onSubmit={handlePredict} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product</label>
              <input 
                type="text" 
                value={formData.product}
                onChange={(e) => setFormData({...formData, product: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Region</label>
              <select 
                value={formData.region}
                onChange={(e) => setFormData({...formData, region: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              >
                <option>North America</option>
                <option>Europe</option>
                <option>Asia Pacific</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Price ($)</label>
              <input 
                type="number" 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Comp. Price ($)</label>
              <input 
                type="number" 
                value={formData.competitorPrice}
                onChange={(e) => setFormData({...formData, competitorPrice: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Marketing ($)</label>
              <input 
                type="number" 
                value={formData.marketingSpend}
                onChange={(e) => setFormData({...formData, marketingSpend: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Construction Vol.</label>
              <select 
                value={formData.constructionVolume}
                onChange={(e) => setFormData({...formData, constructionVolume: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            {loading ? 'Analyzing Market Signals...' : 'Generate AI Prediction'}
          </button>
        </form>

        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 min-h-[400px] flex flex-col">
          {!prediction && !loading && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <BrainCircuit className="w-8 h-8 text-slate-300" />
              </div>
              <div>
                <p className="text-slate-800 font-bold">Ready for Analysis</p>
                <p className="text-sm text-slate-500 max-w-[240px] mx-auto">Fill in the parameters and click predict to see AI-driven demand forecasts.</p>
              </div>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <p className="text-slate-800 font-bold">Processing Market Data</p>
                <p className="text-sm text-slate-500">Our models are calculating seasonal trends and competitor impact...</p>
              </div>
            </div>
          )}

          {prediction && !loading && (
            <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Predicted Demand</p>
                  <div className="flex items-baseline gap-3">
                    <h4 className="text-4xl font-black text-slate-900">{prediction.predictedDemand}</h4>
                    <span className="text-emerald-600 font-bold text-sm flex items-center gap-0.5">
                      <TrendingUp className="w-4 h-4" />
                      {prediction.growthPercentage}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Confidence</p>
                  <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full" 
                      style={{ width: `${prediction.confidenceScore}%` }}
                    ></div>
                  </div>
                  <p className="text-xs font-bold text-indigo-600 mt-1">{prediction.confidenceScore}%</p>
                </div>
              </div>

              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={prediction.forecast}>
                    <XAxis dataKey="month" hide />
                    <YAxis hide domain={['dataMin - 100', 'dataMax + 100']} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#6366f1" 
                      strokeWidth={3} 
                      fill="#6366f1" 
                      fillOpacity={0.1} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-3">
                <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{prediction.insights}"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BrainCircuit(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 4 4 0 0 0 5.327 2.7l.68-.32" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.518" />
      <path d="M12 13h4" />
      <path d="M12 18h6" />
      <path d="M12 8h8" />
      <path d="M16 8V5a2 2 0 0 1 2-2" />
      <path d="M20 8v5a2 2 0 0 1-2 2" />
      <path d="M18 18v3" />
    </svg>
  );
}
