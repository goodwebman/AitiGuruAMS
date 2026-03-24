import { Toaster } from '@/shared/ui/toaster';
import { ReactQueryProvider } from './query-client/query-client-provider';
// import { ReduxProvider } from './redux/redux-provider';
import { RouterProvider } from './router/router-provider';
import { ThemeProvider } from './theme/theme-provider';

export const Providers = () => {
  return (
    // <ReduxProvider>
    <ReactQueryProvider>
      <ThemeProvider>
        <RouterProvider />
        <Toaster />
      </ThemeProvider>
    </ReactQueryProvider>
    // </ReduxProvider>
  );
};
