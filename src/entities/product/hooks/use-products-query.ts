import { getProducts } from '@/entities/product/api/products.api';
import { productKeys } from '@/shared/api/query-keys';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface UseProductsQueryParams {
  q?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  limit?: number;
  skip?: number;
}

export const useProductsQuery = (params: UseProductsQueryParams) => {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () =>
      getProducts({
        q: params.q ?? '',
        sortBy: params.sortBy,
        order: params.order,
        limit: params.limit,
        skip: params.skip,
      }),
    placeholderData: keepPreviousData,
  });
};
