import React from 'react';
import type { ReactNode, ComponentType } from 'react';
import { SearchHistoryProvider } from '@/shared/contexts/SearchHistoryContext';

// Provider 타입 정의
type Provider = ComponentType<{ children: ReactNode }>;

// Provider들을 배열로 관리
const providers: Provider[] = [
  SearchHistoryProvider,
  // 향후 추가될 Provider들
  // AuthProvider,
  // ThemeProvider,
  // UserPreferencesProvider,
];

interface ProviderComposerProps {
  providers: Provider[];
  children: ReactNode;
}

// Provider들을 자동으로 중첩해주는 컴포넌트
const ProviderComposer: React.FC<ProviderComposerProps> = ({ providers, children }) => {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children as React.ReactElement
  );
};

interface AppProvidersAdvancedProps {
  children: ReactNode;
}

const AppProvidersAdvanced: React.FC<AppProvidersAdvancedProps> = ({ children }) => {
  return <ProviderComposer providers={providers}>{children}</ProviderComposer>;
};

export default AppProvidersAdvanced;