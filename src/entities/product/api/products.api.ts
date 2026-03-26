import { api } from '@/shared/api';
import type { GetProductsResponse } from '../model';

export const getProducts = (params: {
  q?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  limit?: number;
  skip?: number
}) => {
  return api.get<GetProductsResponse>('/products/search', {
    params,
  });
};
