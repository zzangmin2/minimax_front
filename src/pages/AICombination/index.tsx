import React from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import EmptySearchState from '@/pages/AICombination/components/EmptySearchState';
import ActiveSearchState from '@/pages/AICombination/components/ActiveSearchState';
import SearchHistoryList from '@/pages/AICombination/components/SearchHistoryList';

const AICombination = () => {
  const { searchHistory } = useSearchHistory();

  return (
    <div className="h-full flex">
      {/* 사이드바 - 검색 기록이 있을 때만 표시 */}
      {searchHistory.length > 0 && <SearchHistoryList />}

      {/* 메인 콘텐츠 영역 */}
      <div className={`flex-1 ${searchHistory.length > 0 ? 'ml-80' : ''}`}>
        {searchHistory.length === 0 ? <EmptySearchState /> : <ActiveSearchState />}
      </div>
    </div>
  );
};

export default AICombination;
