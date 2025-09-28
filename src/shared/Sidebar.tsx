import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/app/routes';

// type SidebarProps = {
//   activeMenu: number;
//   setActiveMenu: (menu: number) => void;
// };

const Sidebar = () => {
  return (
    <div className="w-[16.875%] bg-slate-800 text-white flex flex-col px-4 py-3">
      <div className="mb-6">
        <p className="text-title">MINIMAX</p>
      </div>
      <p className="text-body16 text-line mb-5">menu</p>
      <nav className="space-y-2">
        {ROUTES.map(r => (
          <NavLink
            key={r.path}
            to={r.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md transition-colors ${
                isActive ? 'bg-primary text-text-inversePrimary' : 'hover:bg-slate-700'
              }`
            }
          >
            {r.handle.name === '성분/물질 분석' ? 'AI Combination' : r.handle.eng}
          </NavLink>
          // <button
          //   key={menu.eng}
          //   onClick={() => setActiveMenu(MENU_TITLES.indexOf(menu))}
          //   className={`w-full text-left px-4 py-3 rounded-md transition-color cursor-pointer ${
          //     activeMenu === MENU_TITLES.indexOf(menu)
          //       ? 'text-white bg-primary'
          //       : 'hover:text-gray-300'
          //   }`}
          // >
          //   <div>
          //     {/* <i className="fa-solid fa-star mr-3"></i> */}
          //     {menu.eng}
          //   </div>
          // </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
