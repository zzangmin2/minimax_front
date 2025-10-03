import React from 'react';
import SearchBar from './SearchBar';

const EmptySearchState: React.FC = () => {
  const categories = [
    { name: '암 치료제', icon: 'fas fa-heartbeat' },
    { name: '항 바이러스제', icon: 'fas fa-shield-alt' },
    { name: '신경 질환', icon: 'fas fa-brain' },
    { name: '대사 질환', icon: 'fas fa-dna' },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center bg-white rounded-lg shadow p-8 space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-display text-primary">AI Combination</h2>
        <p className="text-body14 text-text-tertiary text-center">
          검색창에 성분이나 물질명을 입력하면, AI가 관련된 3가지 후보 물질을 찾아드립니다.
        </p>
      </div>

      <SearchBar />

      {/* 카테고리 카드 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div
            key={cat.name}
            className="flex flex-col items-center justify-center w-36 h-36 border-1 border-line rounded-xl bg-white hover:shadow-lg transition cursor-pointer"
          >
            <i className={`${cat.icon} text-2xl text-primary mb-4`}></i>
            <span className="text-body16 text-text-secondary">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptySearchState;
