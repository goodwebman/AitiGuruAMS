import classNames from 'classnames/bind';
import classes from './product-pagination.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args = {}) => {
  return {
    cnContainer: cn('root', className),
    cnLeft: cn('left'),
    cnRight: cn('right'),
    cnInfo: cn('info'),
    cnInfoValue: cn('infoValue'),
    cnButton: (mods?: Record<string, boolean>) => cn('button', mods),
    cnDots: cn('dots'),
  };
};
