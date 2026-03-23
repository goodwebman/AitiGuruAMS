import { HomePage } from '@/pages/home/home-page';
import { ROUTES } from '@/shared/config/routes/routes';
import type { RouteObject } from 'react-router-dom';

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
];
