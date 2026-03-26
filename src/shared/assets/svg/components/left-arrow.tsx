import type { FC, SVGProps } from 'react';
const SvgLeftArrow: FC<
  SVGProps<SVGSVGElement> & {
    color?: string,
  }
> = ({ color = 'var(--icon-secondary)', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 8 14" {...props}>
    <path
      fill="#B2B3B9"
      d="M7.318 12.683a.625.625 0 1 1-.885.885l-6.25-6.25a.625.625 0 0 1 0-.885l6.25-6.25a.625.625 0 0 1 .885.885L1.509 6.875z"
    />
  </svg>
);
export default SvgLeftArrow;
