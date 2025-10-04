import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/app/routes';
import { useState } from 'react';
import SearchModal from '@/shared/ui/modals/SearchModal';

const Header = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <div className="w-full flex justify-between h-16 bg-slate-800 text-white px-4 py-3 items-center">
      <div className="flex items-center">
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

      <button
        className="w-64 flex items-center ml-4 px-4 py-2 rounded bg-slate-700 text-text-inverseSecondary cursor-pointer hover:bg-slate-600 transition"
        onClick={() => setOpenSearchModal(true)}
      >
        <i className="fas fa-search w-5" />
        <p className="text-body14 pl-2">최적화 원하는 물질 검색</p>
      </button>

      <SearchModal open={openSearchModal} onClose={() => setOpenSearchModal(false)} />
    </div>
  );
};

export default Header;
