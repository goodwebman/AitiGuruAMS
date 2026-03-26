import { Icons } from '@/shared/assets/svg/components';
import { Buttons, InputDefault } from '@/shared/ui';
import { useState } from 'react';

import { useProductsQuery } from '@/entities/product';
import { AddProductModal } from '@/features/product/add-product/ui/add-product-modal';
import { useProductFilters } from '@/features/product/product-filter-select/model/use-product-filters';
import { ProductFilterSelect } from '@/features/product/product-filter-select/ui/product-filter-select/product-filtert-select';
import { useProductPagination } from '@/features/product/product-pagination';
import { ProductTable } from '@/features/product/product-table/ui/product-table/product-table';
import { useDebounce } from '@/shared/hooks/perfomance/use-debounce';
import { useSelection } from '@/shared/hooks/ui';
import { getClasses } from './styles/get-classes';

export const ProductListWidget = () => {
  const filters = useProductFilters();
  const [search, setSearch] = useState(filters.q);
  const debouncedSearch = useDebounce(search, 300);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const { skip, perPage, setPage, Pagination } = useProductPagination({
    perPage: 5,
  });

  const { data, isFetching, refetch } = useProductsQuery({
    ...filters,
    q: debouncedSearch,
    limit: perPage,
    skip,
  });

  const totalItems = data?.total ?? 0;
  const productIds = data?.products.map(p => p.id) ?? [];

  const { isSelected, toggle, toggleAll, allSelected } =
    useSelection(productIds);

  const {
    cnRoot,
    cnLoader,
    cnTop,
    cnHeading,
    cnTopSearch,
    cnToolbar,
    cnActions,
    cnTableWrapper,
    cnPaginationWrapper,
    cnToolbarTitle,
  } = getClasses({});

  return (
    <div className={cnRoot}>
      {isFetching && <div className={cnLoader} />}

      <div className={cnTop}>
        <h2 className={cnHeading}>Товары</h2>

        <InputDefault
          className={cnTopSearch}
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Поиск товаров..."
        />
      </div>

      <div className={cnTableWrapper}>
        <div className={cnToolbar}>
          <h1 className={cnToolbarTitle}>Все позиции</h1>
          <div className={cnActions}>
            <Buttons.IconButton
              onClick={() => refetch()}
              icon={<Icons.Refresh />}
            />

            <ProductFilterSelect
              sortBy={filters.sortBy as 'price' | 'rating' | ''}
              order={filters.order}
              onSortChange={field => {
                filters.toggleSort(field);
                setPage(1);
                refetch();
              }}
              onReset={() => {
                filters.reset();
              }}
            />

            <Buttons.DefaultButton
              leftIcon={<Icons.PlusCircle width={25} height={25} />}
              onClick={() => setIsAddOpen(true)}
            >
              Добавить
            </Buttons.DefaultButton>
          </div>
        </div>

        <ProductTable
          products={data?.products ?? []}
          isSelected={isSelected}
          toggle={toggle}
          toggleAll={toggleAll}
          allSelected={allSelected}
          sortBy={filters.sortBy}
          order={filters.order}
          onSort={field => {
            filters.toggleSort(field);
            setPage(1);
            refetch();
          }}
        />

        <div className={cnPaginationWrapper}>
          <Pagination totalItems={totalItems} />
        </div>
      </div>

      <AddProductModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </div>
  );
};
