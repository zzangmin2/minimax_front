// src/app/routes.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './layout';
import AICombination from '@/pages/AICombination';
import MarketAnalysis from '@/pages/MarketAnalysis';

export const ROUTES = [
  {
    path: '/ai',
    element: <AICombination />,
    handle: { name: '성분/물질 분석', eng: 'AI Combination' },
  },
  {
    path: '/market',
    element: <MarketAnalysis />,
    handle: { name: '시장 분석', eng: 'Market Analysis' },
  },
] as const;

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/ai" replace /> },
      ...ROUTES,
      { path: '*', element: <Navigate to="/ai" replace /> },
    ],
  },
]);
