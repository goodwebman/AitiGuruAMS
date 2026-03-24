import { type FC } from 'react';
import {
  createBrowserRouter,
  RouterProvider as RouterProviderLib,
} from 'react-router-dom';

import { privateRoutes } from './routes/private-routes';
import { publicRoutes } from './routes/public-routes';

import { PrivateOutlet } from './routing/private-outlet';
import { PublicOutlet } from './routing/public-outlet';

export const router = createBrowserRouter([
  {
    
    element: <PrivateOutlet />,
    children: privateRoutes,
  },
  {
    element: <PublicOutlet />,
    children: publicRoutes,
  },
]);

export const RouterProvider: FC = () => <RouterProviderLib router={router} />;
