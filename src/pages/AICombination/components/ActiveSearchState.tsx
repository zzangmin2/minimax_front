import React from 'react';
import SearchHistoryList from '@/pages/AICombination/components/SearchHistoryList';
import CandidateMoleculeResult from '@/pages/AICombination/components/CandidateMoleculeResult';

const ActiveSearchState = () => {
  return (
    <div className="h-full flex">
      <SearchHistoryList />
      <div className="flex-1">
        <CandidateMoleculeResult />
      </div>
    </div>
  );
};

export default ActiveSearchState;
