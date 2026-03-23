import { Toaster } from '@/shared/ui/toaster';
import type { FC, PropsWithChildren } from 'react';
import { ReactQueryProvider } from './query-client/query-client-provider';
import { ReduxProvider } from './redux/redux-provider';
import { ThemeProvider } from './theme/theme-provider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};
