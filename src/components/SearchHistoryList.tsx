import React from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';

const SearchHistoryList: React.FC = () => {
  const { searchHistory } = useSearchHistory();

  return (
    <div className="w-80 h-full bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-body16 text-text-secondary">25년 10월 3일</h2>
      </div>

      <div className="space-y-4 overflow-y-auto">
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
  );
};

export default SearchHistoryList;
