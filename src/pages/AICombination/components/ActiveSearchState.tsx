import React, { useState } from 'react';
import SearchHistoryList from '@/pages/AICombination/components/SearchHistoryList';
import CandidateMoleculeResult from '@/pages/AICombination/components/CandidateMoleculeResult';
import AiOptimizationLoading from '@/shared/ui/AiOptimizationLoading';

const ActiveSearchState = () => {
  // 추후 로딩 상태 핸들링 처리 해야함 .. .. .
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <AiOptimizationLoading />}
      <div className="h-full flex">
        <SearchHistoryList />
        <div className="flex-1">
          <CandidateMoleculeResult />
        </div>
      </div>
    </>
  );
};

export default ActiveSearchState;
