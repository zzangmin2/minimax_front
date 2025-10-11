import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { MOCK_DISEASE_SCAFFOLD } from '@/shared/mocks/molecule.mock';

/* -------------------------------------------------------
 * 0. 로컬 스토리지 관련 상수 및 유틸리티
 * -----------------------------------------------------*/

const SEARCH_HISTORY_KEY = 'minimax_search_history';

// 로컬 스토리지에서 검색 기록 불러오기
const loadSearchHistoryFromStorage = (): SearchRecord[] => {
  try {
    const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // timestamp를 Date 객체로 복원
      return parsed.map((record: SearchRecord & { timestamp: string }) => ({
        ...record,
        timestamp: new Date(record.timestamp),
      }));
    }
  } catch (error) {
    console.error('로컬 스토리지에서 검색 기록을 불러오는 중 오류 발생:', error);
  }
  return [];
};

// 로컬 스토리지에 검색 기록 저장하기
const saveSearchHistoryToStorage = (history: SearchRecord[]) => {
  try {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('로컬 스토리지에 검색 기록을 저장하는 중 오류 발생:', error);
  }
};

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

  // 컴포넌트 마운트 시 로컬 스토리지에서 검색 기록 불러오기
  useEffect(() => {
    const storedHistory = loadSearchHistoryFromStorage();
    setSearchHistory(storedHistory);
  }, []);

  // 검색 기록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    if (searchHistory.length > 0) {
      saveSearchHistoryToStorage(searchHistory);
    }
  }, [searchHistory]);

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
            Smiles: MOCK_DISEASE_SCAFFOLD.disease_smiles,
            ID: MOCK_DISEASE_SCAFFOLD.disease_Chembl_ID,
            Name: MOCK_DISEASE_SCAFFOLD.disease_molecule_name,
            MolecularFormula: MOCK_DISEASE_SCAFFOLD.disease_formula,
            MoleculeType: MOCK_DISEASE_SCAFFOLD.disease_mol_type,
          },
        },
        {
          id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
          query,
          timestamp: new Date(),
          results: {
            Smiles: MOCK_DISEASE_SCAFFOLD.disease_smiles,
            ID: MOCK_DISEASE_SCAFFOLD.disease_Chembl_ID,
            Name: MOCK_DISEASE_SCAFFOLD.disease_molecule_name,
            MolecularFormula: MOCK_DISEASE_SCAFFOLD.disease_formula,
            MoleculeType: MOCK_DISEASE_SCAFFOLD.disease_mol_type,
          },
        },
        {
          id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
          query,
          timestamp: new Date(),
          results: {
            Smiles: MOCK_DISEASE_SCAFFOLD.disease_smiles,
            ID: MOCK_DISEASE_SCAFFOLD.disease_Chembl_ID,
            Name: MOCK_DISEASE_SCAFFOLD.disease_molecule_name,
            MolecularFormula: MOCK_DISEASE_SCAFFOLD.disease_formula,
            MoleculeType: MOCK_DISEASE_SCAFFOLD.disease_mol_type,
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
        Smiles: MOCK_DISEASE_SCAFFOLD.disease_smiles,
        ID: MOCK_DISEASE_SCAFFOLD.disease_Chembl_ID,
        Name: MOCK_DISEASE_SCAFFOLD.disease_molecule_name,
        MolecularFormula: MOCK_DISEASE_SCAFFOLD.disease_formula,
        MoleculeType: MOCK_DISEASE_SCAFFOLD.disease_mol_type,
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
    // 로컬 스토리지에서도 삭제
    try {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch (error) {
      console.error('로컬 스토리지에서 검색 기록을 삭제하는 중 오류 발생:', error);
    }
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
