import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/app/routes';

const Header = () => {
  return (
    <div className="w-full h-16 bg-slate-800 text-white flex flex px-4 py-3 items-center">
      <p className="text-title">MINIMAX</p>
      <nav className="ml-8 flex space-x-2 items-center">
        {ROUTES.map(r => (
          <NavLink
            key={r.path}
            to={r.path}
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-primary' : 'text-white hover:text-text-tertiary'}`
            }
          >
            {r.handle.name === '성분/물질 분석' ? 'AI Combination' : r.handle.eng}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Header;
