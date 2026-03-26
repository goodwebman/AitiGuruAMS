import classNames from 'classnames/bind';
import classes from './product-image.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnWrapper = cn('wrapper', className);
  const cnPlaceholder = cn('placeholder');
  const cnImage = cn('image');
  const cnLoaded = cn('loaded');

  return {
    cnWrapper,
    cnPlaceholder,
    cnImage,
    cnLoaded,
  };
};