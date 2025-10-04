import { useContext } from 'react';
import { SearchHistoryContext } from '@/shared/contexts/SearchHistoryContext';

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext);
  if (context === undefined) {
    throw new Error('useSearchHistory must be used within a SearchHistoryProvider');
  }
  return context;
};
