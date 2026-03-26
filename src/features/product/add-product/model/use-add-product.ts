import { productKeys } from '@/shared/api/query-keys';
import { useQueryClient } from '@tanstack/react-query';

export const useAddProduct = () => {
  const queryClient = useQueryClient();
// фейк добавление - типизация не нужна
  const addProduct = (product: any) => {
    queryClient.setQueriesData({ queryKey: productKeys.all }, (old: any) => {
      if (!old) return old;

      return {
        ...old,
        products: [product, ...old.products],
      };
    });
  };

  return { addProduct };
};
