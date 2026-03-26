import classNames from 'classnames/bind';
import classes from './product-filter-select.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => ({
  cnRoot: cn('root'),
  cnButton: cn('button'),
  cnDropdown: cn('dropdown'),
  cnOption: cn('option'),
});