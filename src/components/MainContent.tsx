import AICombination from './AICombination';
import DrugUsableBubble from './DrugUsableBubble';

type MainContentProps = {
  activeMenu: string;
};

export function MainContent({ activeMenu }: MainContentProps) {
  const Title = [
    { name: '성분/물질 분석', eng: 'AI Combination' },
    { name: '시장 분석', eng: 'Market Analysis' },
    { name: '특허 관리', eng: 'AI Combination' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-6">
        <h1 className="text-title text-text-primary mr-3 ">성분 물질 분석</h1>
        <p className="text-subtitle text-text-inverseSecondary">AI Combination</p>
      </div>
      <div className="bg-white rounded-lg shadow p-8 h-full flex-1">
        {activeMenu === 'AI Combination' && <AICombination />}
        {activeMenu === 'Market Analysis' && <DrugUsableBubble />}
        {/* {activeMenu !== 'AI Combination' && (
          <section className="flex flex-col items-center">
            <div className="w-full max-w-xl">
              <div className="flex text-gray-500 text-center pt-20">
                <p>{activeMenu} 페이지 준비중…</p>
              </div>
            </div>
          </section>
        )} */}
      </div>
    </div>
  );
}
