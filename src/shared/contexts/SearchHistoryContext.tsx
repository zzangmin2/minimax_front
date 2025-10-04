import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { MOCK_MOLECULE } from '@/shared/mocks/molecule.mock';
import { MOCK_SEARCH_HISTORY } from '@/shared/mocks/search.mock';

/* -------------------------------------------------------
 * 1. 타입 정의
 * -----------------------------------------------------*/

export interface SearchRecord {
  id: string;
  query: string;
  timestamp: Date;
  results?: { [key: string]: string };
}

/* -------------------------------------------------------
 * 2. Context Value 타입
 * -----------------------------------------------------*/

interface SearchHistoryContextType {
  searchHistory: SearchRecord[];
  activeRecord: SearchRecord | null;
  addSearchRecord: (query: string, results?: { [key: string]: string }) => void;
  removeSearchRecord: (id: string) => void;
  clearSearchHistory: () => void;
  setActiveRecord: (record: SearchRecord | null) => void;
}

/* -------------------------------------------------------
 * 3. Context 생성
 * -----------------------------------------------------*/

const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined);
export { SearchHistoryContext };

/* -------------------------------------------------------
 * 4. Provider 정의
 * -----------------------------------------------------*/

export const SearchHistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState<SearchRecord[]>(MOCK_SEARCH_HISTORY);
  const [activeRecord, setActiveRecord] = useState<SearchRecord | null>(null);

  // 검색 기록 추가
  const addSearchRecord = (query: string) => {
    const newRecord: SearchRecord = {
      id: Date.now().toString(),
      query,
      timestamp: new Date(),
      results: {
        Smiles: MOCK_MOLECULE.smiles,
        ID: MOCK_MOLECULE.id,
        Name: MOCK_MOLECULE.name,
        MaxPhase: MOCK_MOLECULE.maxPhase,
        MolecularFormula: MOCK_MOLECULE.molecularFormula,
        MolecularWeight: MOCK_MOLECULE.molecularWeight.toString(),
        MoleculeType: MOCK_MOLECULE.moleculeType,
      },
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
