import React, { useState } from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addSearchRecord } = useSearchHistory();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // 실제로는 여기서 API 호출을 하고 결과를 받아올 것

      const mockResults = {
        Smiles: 'CC1=CC=CC=C1N',
        ID: 'CHEMBL1381',
        Name: 'O-TOLYLAMINE',
        MaxPhase: 'Preclinical',
        MolecularFormula: 'C7H9N',
        MolecularWeight: '107.16',
        MoleculeType: 'Small molecule',
      };

      addSearchRecord(searchQuery.trim(), mockResults);
      setSearchQuery('');
    }
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
          <i className="fas fa-search text-gray-400 text-xl hover:text-primary transition"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
