// src/app/layout.tsx
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import AppProviders from './AppProviders';

export default function Layout() {
  return (
    <AppProviders>
      <div className="w-full flex h-screen bg-gray-100 flex flex-col">
        <Header />

        <main className="flex-1 flex flex-col overflow-auto">
          <Outlet />
        </main>
      </div>
    </AppProviders>
  );
}
