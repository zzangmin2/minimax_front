import React, { useEffect, useRef } from 'react';
import SearchBar from '@/shared/ui/SearchBar';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import { SEARCH_CATEGORIES } from '@/shared/constants/SearchCategories';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
  const { searchHistory } = useSearchHistory();
  const prevHistoryLength = useRef<number>(searchHistory.length);

  useEffect(() => {
    if (!open) return;
    const currentLength = searchHistory.length;
    if (currentLength > prevHistoryLength.current) {
      onClose();
    }

    prevHistoryLength.current = currentLength;
  }, [searchHistory.length, open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/50" onClick={onClose}>
      {/* 컨텐츠 박스 */}
      <div
        className="bg-white rounded-xl mt-10 p-8 w-[720px] h-[320px] max-w-[90%] shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <SearchBar />

        {/* 카테고리 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {SEARCH_CATEGORIES.map(cat => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-center w-36 h-36 border-1 border-line rounded-xl bg-white hover:shadow-lg transition cursor-pointer"
            >
              <i className={`${cat.icon} text-2xl text-primary mb-4`}></i>
              <span className="text-body16 text-text-secondary">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
