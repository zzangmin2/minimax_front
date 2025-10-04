import { useContext } from 'react';
import { OptimizedContext } from '@/shared/contexts/OptimizedContext';

export const useOptimized = () => {
  const context = useContext(OptimizedContext);
  if (!context) {
    throw new Error('useOptimizedContext must be used within an OptimizedProvider');
  }
  return context;
};
