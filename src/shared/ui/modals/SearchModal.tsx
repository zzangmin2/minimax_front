import React, { useEffect, useRef } from 'react';
import SearchBar from '@/shared/ui/SearchBar';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';

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
      </div>
    </div>
  );
};

export default SearchModal;
