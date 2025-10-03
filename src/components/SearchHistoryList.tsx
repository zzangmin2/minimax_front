import React from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';

const SearchHistoryList: React.FC = () => {
  const { searchHistory } = useSearchHistory();

  return (
    <div className="fixed top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white flex flex-col z-10">
      <div className="flex justify-between items-center p-6 pb-4 flex-shrink-0">
        <h2 className="text-body16 text-text-secondary">25년 10월 3일</h2>
      </div>

      {/* 리스트 - 내부 스크롤 영역 */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full space-y-4 overflow-y-auto overscroll-contain p-6 pt-4">
          {searchHistory.map(record => (
            <div
              key={record.id}
              className="border border-line rounded-lg p-4 hover:shadow-md transition"
            >
              <div className="w-full h-30 bg-gray-100 flex items-center justify-center rounded mb-2.5">
                <span className="text-xs text-gray-400">구조 이미지</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-body16 text-text-primary">{record.results!.Smiles}</h3>
              </div>
              <p className="text-body14 text-text-tertiary">
                {record.results!.ID} | {record.results!.Name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHistoryList;
