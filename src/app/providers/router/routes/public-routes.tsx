import { AuthPage } from '@/pages/auth/auth-page'
import { ROUTES } from '@/shared/config/routes/routes';
import type { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    path: ROUTES.AUTH,
    element: <AuthPage />,
  },
];
