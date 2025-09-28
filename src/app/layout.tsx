// src/app/layout.tsx
import { Outlet, useMatches } from 'react-router-dom';
import Sidebar from '@/shared/Sidebar';

function usePageMeta(): { name: string; eng: string } {
  const matches = useMatches();
  // 가장 안쪽 매치에서 handle 추출
  const last = matches[matches.length - 1];
  return (last?.handle as { name: string; eng: string } | undefined) ?? { name: '', eng: '' };
}

export default function Layout() {
  const { name, eng } = usePageMeta();

  return (
    <div className="w-full flex h-screen bg-gray-100">
      {/* <aside className="w-64 shrink-0"> */}
      <Sidebar />
      {/* </aside> */}

      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center mb-6">
          <h1 className="text-title text-text-primary mr-3">{name}</h1>
          <p className="text-subtitle text-text-inverseSecondary">{eng}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
