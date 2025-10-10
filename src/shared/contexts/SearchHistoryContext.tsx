import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { MOCK_MOLECULE } from '@/shared/mocks/molecule.mock';

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
  const [searchHistory, setSearchHistory] = useState<SearchRecord[]>([]);
  const [activeRecord, setActiveRecord] = useState<SearchRecord | null>(null);

  // 검색 기록 추가
  const addSearchRecord = (query: string) => {
    console.log(query);

    // TODO:현재 목업 데이터 사용 영역임 로직 맞게 다시 수정되어야함
    // query에 $가 포함된 경우, 카테고리 검색으로 간주 (예: $HIV)
    const isCategorySearch = query.includes('$');

    let finalResults: { [key: string]: string } | { [key: string]: unknown };

    if (isCategorySearch) {
      // 카테고리 검색 결과는 카테고리명 : 스마일즈 리스트 형태로 setSearchHistory에 리스트 형태로 추가
      const categoryName = query.replace('$', '');

      // 기본 목업 데이터를 여러 개 생성
      const mockMoleculeList = [
        {
          id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
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
        },
        {
          id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
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
        },
        {
          id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
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
        },
      ];

      finalResults = {
        [categoryName]: mockMoleculeList,
      };
    } else {
      // 단순 문자열인 경우에는 스마일즈 검색으로 간주
      finalResults = {
        SearchType: 'molecule',
        Smiles: MOCK_MOLECULE.smiles,
        ID: MOCK_MOLECULE.id,
        Name: MOCK_MOLECULE.name,
        MaxPhase: MOCK_MOLECULE.maxPhase,
        MolecularFormula: MOCK_MOLECULE.molecularFormula,
        MolecularWeight: MOCK_MOLECULE.molecularWeight.toString(),
        MoleculeType: MOCK_MOLECULE.moleculeType,
      };
    }

    const newRecord: SearchRecord = {
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      query,
      timestamp: new Date(),
      results: finalResults as { [key: string]: string },
    };

    setSearchHistory(prev => [newRecord, ...prev]);
    console.log(searchHistory);
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
