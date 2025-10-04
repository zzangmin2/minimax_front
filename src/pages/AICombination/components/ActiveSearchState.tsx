import React from 'react';
import SearchHistoryList from '@/pages/AICombination/components/SearchHistoryList';
import MoleculeResult from '@/pages/AICombination/components/MoleculeResult';

const ActiveSearchState = () => {
  return (
    <div className="h-full flex">
      <SearchHistoryList />
      <div className="flex-1">
        <MoleculeResult />
      </div>
    </div>
  );
};

export default ActiveSearchState;
