import React from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';

const SearchHistoryList: React.FC = () => {
  const { searchHistory, removeSearchRecord, clearSearchHistory } = useSearchHistory();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="h-full bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-title text-text-primary">검색 기록</h2>
        {searchHistory.length > 0 && (
          <button
            onClick={clearSearchHistory}
            className="text-body14 text-text-tertiary hover:text-text-secondary transition"
          >
            전체 삭제
          </button>
        )}
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {searchHistory.map(record => (
          <div
            key={record.id}
            className="border border-line rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-body16 text-text-primary font-medium">{record.query}</h3>
              <button
                onClick={() => removeSearchRecord(record.id)}
                className="text-text-tertiary hover:text-text-secondary"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p className="text-caption text-text-tertiary mb-2">{formatDate(record.timestamp)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistoryList;
