type SidebarProps = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

export function Sidebar({ activeMenu, setActiveMenu }: SidebarProps) {
  const menus = ['AI Combination', 'Market Analysis', 'Trend'];

  return (
    <div className="w-[16.875%] bg-slate-800 text-white flex flex-col px-4 py-3">
      <div className="mb-6">
        <p className="text-title">MINIMAX</p>
      </div>
      <p className="text-body16 text-line mb-5">menu</p>
      <nav className="space-y-2">
        {menus.map(menu => (
          <button
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`w-full text-left px-4 py-3 rounded-md transition-color cursor-pointer ${
              activeMenu === menu ? 'text-white bg-primary' : 'hover:text-gray-300'
            }`}
          >
            <div>
              {/* <i className="fa-solid fa-star mr-3"></i> */}
              {menu}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}
