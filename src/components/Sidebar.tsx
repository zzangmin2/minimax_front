type SidebarProps = {
  activeMenu: string
  setActiveMenu: (menu: string) => void
}

export function Sidebar({ activeMenu, setActiveMenu }: SidebarProps) {
  const menus = ['Main', 'AI Combination', 'Market Analysis', 'Trend']

  return (
    <div className="w-[16.875%] bg-slate-800 text-white flex flex-col px-4 py-3">
      <p className="text-title">MINIMAX</p>
      <nav className="space-y-2">
        {menus.map(menu => (
          <button
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              activeMenu === menu ? 'text-primary' : 'hover:text-gray-300'
            }`}
          >
            {menu}
          </button>
        ))}
      </nav>
    </div>
  )
}
