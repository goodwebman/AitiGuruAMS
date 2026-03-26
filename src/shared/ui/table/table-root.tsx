import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

type Props = {
  children: ReactNode;
  className?: string;
};

export const TableRoot: FC<Props> = ({ children, className }) => {
  const { cnTable } = getClasses({ className });

  return <table className={cnTable}>{children}</table>;
};
