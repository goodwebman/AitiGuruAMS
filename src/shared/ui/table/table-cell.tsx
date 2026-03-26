import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

type TableCellProps = {
  children: ReactNode;
  isHeader?: boolean;
  sortable?: boolean;
  sorted?: boolean;
  danger?: boolean;
  onClick?: () => void;
};

export const TableCell: FC<TableCellProps> = ({
  children,
  isHeader,
  sortable,
  sorted,
  danger,
  onClick,
}) => {
  const { cnCell } = getClasses({
    isHeader,
    sortable,
    sorted,
    danger,
  });

  if (isHeader) {
    return (
      <th className={cnCell} onClick={onClick} scope="col">
        {children}
      </th>
    );
  }

  return <td className={cnCell}>{children}</td>;
};
