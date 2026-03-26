import { Icons } from '@/shared/assets/svg/components';
import { useState } from 'react';
import { getClasses } from './styles/get-classes';

type UseProductPaginationParams = {
  perPage?: number;
  totalItems?: number;
};

export const useProductPagination = ({
  perPage = 5,
  totalItems = 0,
}: UseProductPaginationParams) => {
  const [page, setPage] = useState(1);
  const { cnContainer, cnLeft, cnRight, cnButton, cnInfo, cnInfoValue } = getClasses();
  const skip = (page - 1) * perPage;
  const Pagination = ({
    totalItems: total = totalItems,
  }: {
    totalItems?: number;
  }) => {
    const totalCount = total ?? 0;
    const totalPages = Math.ceil(totalCount / perPage);

    if (totalPages <= 1) return null;

    const from = (page - 1) * perPage + 1;
    const to = Math.min(page * perPage, totalCount);

    const pages: number[] = [];
    const maxVisible = 5;

    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) pages.push(i);

    return (
      <div className={cnContainer}>
        <div className={cnLeft}>
          <span className={cnInfo}>
            Показано{' '}
            <span className={cnInfoValue}>
              {from}–{to}
            </span>{' '}
            из <span className={cnInfoValue}>{totalCount}</span>
          </span>
        </div>

        <div className={cnRight}>
          <button
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={cnButton({
              arrow: true,
              arrowActive: page !== 1,
              disabled: page === 1,
            })}
          >
            <Icons.LeftArrow width={15} height={15} />
          </button>

          {pages.map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cnButton({ active: p === page })}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className={cnButton({
              arrow: true,
              arrowActive: page !== totalPages,
              disabled: page === totalPages,
            })}
          >
            <Icons.RightArrow width={15} height={15} />
          </button>
        </div>
      </div>
    );
  };

  return { page, setPage, perPage, skip, Pagination };
};
