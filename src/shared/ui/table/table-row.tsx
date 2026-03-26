import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

export const TableRow: FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {
  const { cnRow } = getClasses({className});

  return <tr className={cnRow}>{children}</tr>;
};
