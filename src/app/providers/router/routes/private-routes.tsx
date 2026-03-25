
import { ProductsPage } from '@/pages/products/products-page'
import { ROUTES } from '@/shared/config/routes/routes';
import type { RouteObject } from 'react-router-dom';

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.PRODUCTS,
    element: <ProductsPage />,
  },
];
