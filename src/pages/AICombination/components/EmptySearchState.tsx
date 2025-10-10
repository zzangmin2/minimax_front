import React from 'react';
import SearchBar from '../../../shared/ui/SearchBar';

const EmptySearchState: React.FC = () => {
  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col items-center justify-center bg-white rounded-lg shadow p-8 m-6 space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-display text-primary">AI Combination</h2>
        <p className="text-body14 text-text-tertiary text-center">
          검색창에 성분이나 물질명을 입력하면, AI가 관련된 3가지 후보 물질을 찾아드립니다.
        </p>
      </div>

      <SearchBar />
    </div>
  );
};

export default EmptySearchState;
