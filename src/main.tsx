import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Dashboard } from './pages/Dashboard';
import { MarketAnalysis } from './pages/MarketAnalysis';
import { TrendAnalysis } from './pages/TrendAnalysis';
import { Competitors } from './pages/Competitors';
import { PriceAnalytics } from './pages/PriceAnalytics';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { DemandForecast } from './pages/DemandForecast';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/trend-analysis" element={<TrendAnalysis />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/price-analytics" element={<PriceAnalytics />} />
          <Route path="/demand-forecast" element={<DemandForecast />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
