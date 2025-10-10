import React, { useState } from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import { SEARCH_CATEGORIES } from '@/shared/constants/SearchCategories';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addSearchRecord } = useSearchHistory();

  const performSearch = async (query: string) => {
    try {
      addSearchRecord(query);
    } catch (error) {
      console.error('Search failed:', error);
      throw error;
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      await performSearch(searchQuery.trim());
      setSearchQuery('');
    }
  };

  const handleCategorySearch = async (categoryName: string) => {
    await performSearch(`$${categoryName}`); //TODO: 데이터 연결 시 수정 필요
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl mb-8">
      <div className="flex items-center bg-white border-1 border-line rounded-full shadow px-6 py-4">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="최적화를 원하는 물질을 입력해주세요"
          className="flex-1 outline-none text-gray-700 placeholder:text-gray-400"
        />
        <button onClick={handleSearch} className="ml-3">
          <i className="fas fa-search text-gray-400 text-xl hover:text-primary transition cursor-pointer"></i>
        </button>
      </div>
      {/* 카테고리 카드 */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {SEARCH_CATEGORIES.map(cat => (
          <button
            key={cat.name}
            className="flex flex-col items-center justify-center w-36 h-36 border-1 border-line rounded-xl bg-white hover:shadow-lg transition cursor-pointer"
            onClick={() => handleCategorySearch(cat.name)}
          >
            <i className={`${cat.icon} text-2xl text-primary mb-4`}></i>
            <span className="text-body16 text-text-secondary">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
