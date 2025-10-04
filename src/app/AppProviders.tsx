import React from 'react';
import type { ReactNode } from 'react';
import { SearchHistoryProvider } from '@/shared/contexts/SearchHistoryContext';
import { OptimizedProvider } from '@/shared/contexts/OptimizedContext';
// 향후 추가될 Provider들
// import { AuthProvider } from '@/shared/contexts/AuthContext';
// import { ThemeProvider } from '@/shared/contexts/ThemeContext';
// import { UserPreferencesProvider } from '@/shared/contexts/UserPreferencesContext';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <SearchHistoryProvider>
      <OptimizedProvider>
        {/* 향후 Provider들을 여기에 중첩해서 추가 */}
        {/* 
      <AuthProvider>
        <ThemeProvider>
          <UserPreferencesProvider>
            {children}
          </UserPreferencesProvider>
        </ThemeProvider>
      </AuthProvider>
      */}
        {children}
      </OptimizedProvider>
    </SearchHistoryProvider>
  );
};

export default AppProviders;
