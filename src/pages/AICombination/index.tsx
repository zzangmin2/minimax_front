import React from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import EmptySearchState from '@/components/EmptySearchState';
import ActiveSearchState from '@/components/ActiveSearchState';
const AICombination = () => {
  const { searchHistory } = useSearchHistory();

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        {searchHistory.length === 0 ? <EmptySearchState /> : <ActiveSearchState />}
      </div>
    </div>
  );
};

export default AICombination;
