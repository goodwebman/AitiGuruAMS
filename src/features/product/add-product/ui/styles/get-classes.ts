import classNames from 'classnames/bind';
import classes from './add-product-modal.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => ({
  cnRoot: cn('root'),
  cnActions: cn('actions'),
});