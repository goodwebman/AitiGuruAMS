import { useState } from 'react';
import { getClasses } from './styles/get-classes'


type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export const ProductImage = ({ src, alt = '', className }: Props) => {
  const { cnWrapper, cnPlaceholder, cnImage, cnLoaded } = getClasses({
    className,
  });

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const showPlaceholder = !loaded || error;

  return (
    <div className={cnWrapper}>
      {showPlaceholder && <div className={cnPlaceholder} />}

      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${cnImage} ${loaded ? cnLoaded : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};