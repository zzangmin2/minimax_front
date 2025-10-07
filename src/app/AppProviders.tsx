import React from 'react';
import type { ReactNode } from 'react';
import { SearchHistoryProvider } from '@/shared/contexts/SearchHistoryContext';
import { OptimizedProvider } from '@/shared/contexts/OptimizedContext';
import ReactQueryProvider from '@/app/ReactQueryProvider';
// 향후 추가될 Provider들
// import { AuthProvider } from '@/shared/contexts/AuthContext';
// import { ThemeProvider } from '@/shared/contexts/ThemeContext';
// import { UserPreferencesProvider } from '@/shared/contexts/UserPreferencesContext';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <SearchHistoryProvider>
        <OptimizedProvider>{children}</OptimizedProvider>
      </SearchHistoryProvider>
    </ReactQueryProvider>
  );
};

export default AppProviders;
