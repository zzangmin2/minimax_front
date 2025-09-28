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
      <Sidebar />

      <main className="flex-1 flex flex-col p-6 overflow-auto">
        <div className="flex items-center mb-6">
          <h1 className="text-headline text-text-secondary mr-3">{name}</h1>
          <p className="text-subtitle text-text-inverseSecondary">{eng}</p>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
