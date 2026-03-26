import classNames from 'classnames/bind';
import classes from './product-list-widget.module.scss';

const cn = classNames.bind(classes);

type Args = { className?: string };

export const getClasses = ({ className }: Args) => {
  return {
    cnRoot: cn('root', className),
    cnLoader: cn('loader'),

    cnTop: cn('top'),
    cnHeading: cn('heading'),
    cnTopSearch: cn('topSearch'),

    cnTableWrapper: cn('tableWrapper'),
    cnToolbar: cn('toolbar'),
    cnToolbarTitle: cn('toolbar--title'),
    cnActions: cn('actions'),

    cnPaginationWrapper: cn('paginationWrapper'),
  };
};