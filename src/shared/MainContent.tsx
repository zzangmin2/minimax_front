import { MENU_TITLES } from '@/shared/constants/MenuTitles';
import AICombination from '@/pages/AICombination';
import DrugUsableBubble from '@/pages/MarketAnalysis/components/DrugUsableBubble';

type MainContentProps = {
  activeMenu: number;
};

const MainContent = ({ activeMenu }: MainContentProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-6">
        <h1 className="text-title text-text-primary mr-3 ">{MENU_TITLES[activeMenu].name}</h1>
        <p className="text-subtitle text-text-inverseSecondary">{MENU_TITLES[activeMenu].eng}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-8 h-full flex-1">
        {activeMenu === 0 && <AICombination />}
        {activeMenu === 1 && <DrugUsableBubble />}
      </div>
    </div>
  );
};

export default MainContent;
