import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// 데이터 타입 정의
export interface SearchRecord {
  id: string;
  query: string;
  timestamp: Date;
  results?: string[];
}

// context 타입 정의
interface SearchHistoryContextType {
  searchHistory: SearchRecord[];
  addSearchRecord: (query: string, results?: string[]) => void;
  removeSearchRecord: (id: string) => void;
  clearSearchHistory: () => void;
}

// context 생성
const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined);

export { SearchHistoryContext };

// provider 컴포넌트
export const SearchHistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState<SearchRecord[]>([]);

  // 검색 기록 추가
  const addSearchRecord = (query: string, results?: string[]) => {
    const newRecord: SearchRecord = {
      id: Date.now().toString(),
      query,
      timestamp: new Date(),
      results,
    };
    setSearchHistory(prev => [newRecord, ...prev]);
  };

  // 특정 기록 삭제
  const removeSearchRecord = (id: string) => {
    setSearchHistory(prev => prev.filter(record => record.id !== id));
  };

  // 전체 기록 삭제
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <SearchHistoryContext.Provider
      value={{
        searchHistory,
        addSearchRecord,
        removeSearchRecord,
        clearSearchHistory,
      }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
};
