import React from 'react';
import SearchHistoryList from '@/components/SearchHistoryList';
import MoleculeResult from '@/components/MoleculeResult';

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
