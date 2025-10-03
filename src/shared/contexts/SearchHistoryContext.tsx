import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// 데이터 타입 정의
export interface SearchRecord {
  id: string;
  query: string;
  timestamp: Date;
  results?: { [key: string]: string };
}

// context 타입 정의
interface SearchHistoryContextType {
  searchHistory: SearchRecord[];
  activeRecord: SearchRecord | null;
  addSearchRecord: (query: string, results?: { [key: string]: string }) => void;
  removeSearchRecord: (id: string) => void;
  clearSearchHistory: () => void;
  setActiveRecord: (record: SearchRecord | null) => void;
}

// context 생성
const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined);

export { SearchHistoryContext };

// provider 컴포넌트
export const SearchHistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const mockResults = {
    Smiles: 'CC1=CC=CC=C1N',
    ID: 'CHEMBL1381',
    Name: 'O-TOLYLAMINE',
    MaxPhase: 'Preclinical',
    MolecularFormula: 'C7H9N',
    MolecularWeight: '107.16',
    MoleculeType: 'Small molecule',
  };

  const [searchHistory, setSearchHistory] = useState<SearchRecord[]>([
    {
      id: Math.random().toString(),
      query: 'Initial Search',
      timestamp: new Date(),
      results: mockResults,
    },
    {
      id: Math.random().toString(),
      query: 'Initial Search',
      timestamp: new Date(),
      results: mockResults,
    },
    {
      id: Math.random().toString(),
      query: 'Initial Search',
      timestamp: new Date(),
      results: mockResults,
    },
    {
      id: Math.random().toString(),
      query: 'Initial Search',
      timestamp: new Date(),
      results: mockResults,
    },
  ]);

  // 활성화된 아이템 상태 추가
  const [activeRecord, setActiveRecord] = useState<SearchRecord | null>(null);

  // 검색 기록 추가
  const addSearchRecord = (query: string) => {
    const mockResults = {
      Smiles: 'CC1=CC=CC=C1N',
      ID: 'CHEMBL1381',
      Name: 'O-TOLYLAMINE',
      MaxPhase: 'Preclinical',
      MolecularFormula: 'C7H9N',
      MolecularWeight: '107.16',
      MoleculeType: 'Small molecule',
    };

    const newRecord: SearchRecord = {
      id: Date.now().toString(),
      query,
      timestamp: new Date(),
      results: mockResults,
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
        activeRecord,
        addSearchRecord,
        removeSearchRecord,
        clearSearchHistory,
        setActiveRecord,
      }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
};
