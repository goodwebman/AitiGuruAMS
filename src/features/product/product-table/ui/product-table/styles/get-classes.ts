import classNames from 'classnames/bind';
import classes from './product-table.module.scss';

const cn = classNames.bind(classes);

type Args = { className?: string };

export const getClasses = ({ className }: Args) => {
  return {
    cnRoot: cn('root', className),
    cnTableWrapper: cn('tableWrapper'),

    cnHeaderCell: cn('headerCell'),

    cnRowContentWrapper: (selected?: boolean) =>
      cn('rowContentWrapper', { selected }),

    cnProduct: cn('product'),
    cnProductInfo: cn('productInfo'),
    cnTitle: cn('title'),
    cnCategory: cn('category'),
    cnVendor: cn('vendor'),
    cnArticle: cn('article'),

    cnRatingWrapper: cn('ratingWrapper'),
    cnRating: (mods?: Record<string, boolean>) => cn('rating', mods),
    cnRatingDefault: cn('raiting-default'),

    cnPrice: cn('price'),
    cnPriceMain: cn('priceMain'),
    cnPriceDecimals: cn('priceDecimals'),

    cnAscWrapper: cn('ascWrapper'),

    cnFakeActions: cn('fakeActions'),
    cnFakeButton: cn('fakeButton'),
  };
};