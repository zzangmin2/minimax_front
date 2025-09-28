import { useState } from 'react';
import { Sidebar } from './shared/Sidebar';
import { MainContent } from './shared/MainContent';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="w-full flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-6">
        <MainContent activeMenu={activeMenu} />
      </main>
    </div>
  );
}

export default App;
