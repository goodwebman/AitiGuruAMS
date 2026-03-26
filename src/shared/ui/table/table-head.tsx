import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

export const TableHead: FC<{ children: ReactNode }> = ({ children }) => {
  const { cnHead } = getClasses({});

  return <thead className={cnHead}>{children}</thead>;
};
