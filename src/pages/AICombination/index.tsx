import React from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import EmptySearchState from '@/components/EmptySearchState';
import SearchHistoryList from '@/components/SearchHistoryList';
const AICombination = () => {
  const { searchHistory } = useSearchHistory();

  return (
    <div className="h-full flex flex-col">
      {/* 검색 기록이 없으면 EmptySearchState, 있으면 SearchHistoryList */}
      <div className="flex-1">
        {searchHistory.length === 0 ? <EmptySearchState /> : <SearchHistoryList />}
      </div>
    </div>
  );
};

export default AICombination;
