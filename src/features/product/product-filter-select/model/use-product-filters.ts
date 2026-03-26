import { useSearchParams } from 'react-router-dom';

export const useProductFilters = () => {
  const [params, setParams] = useSearchParams();

  const state = {
    q: params.get('q') ?? '',
    sortBy: params.get('sortBy') ?? '',
    order: (params.get('order') as 'asc' | 'desc') ?? 'asc',
  };

  const set = (next: Partial<typeof state>) => {
    Object.entries(next).forEach(([k, v]) => {
      params.set(k, String(v));
    });
    setParams(params);
  };

  const toggleSort = (field: string) => {
    if (state.sortBy !== field) {
      set({ sortBy: field, order: 'asc' });
    } else {
      set({ order: state.order === 'asc' ? 'desc' : 'asc' });
    }
  };
  const reset = () => {
  setParams({});
};
  

  return {
    ...state,
    set,
    toggleSort,
    reset
  };
};
