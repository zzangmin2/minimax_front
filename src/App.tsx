import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

function App() {
  const [activeMenu, setActiveMenu] = useState('Market Analysis')

  return (
    <div className="w-full flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-6 overflow-auto">
        <MainContent activeMenu={activeMenu} />
      </main>
    </div>
  )
}

export default App
