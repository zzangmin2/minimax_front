import React from 'react';
import type { ReactNode } from 'react';
import { SearchHistoryProvider } from '@/shared/contexts/SearchHistoryContext';
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
    </SearchHistoryProvider>
  );
};

export default AppProviders;
