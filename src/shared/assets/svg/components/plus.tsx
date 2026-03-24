import type { FC, SVGProps } from 'react';
const SvgPlus: FC<
  SVGProps<SVGSVGElement> & {
    color?: string,
  }
> = ({ color = 'var(--icon-secondary)', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 18 18" {...props}>
    <path
      fill={color}
      d="M8.938 0a8.938 8.938 0 1 0 8.937 8.938A8.947 8.947 0 0 0 8.938 0m0 16.5A7.562 7.562 0 1 1 16.5 8.938 7.57 7.57 0 0 1 8.938 16.5m4.124-7.562a.687.687 0 0 1-.687.687h-2.75v2.75a.687.687 0 0 1-1.375 0v-2.75H5.5a.687.687 0 0 1 0-1.375h2.75V5.5a.688.688 0 0 1 1.375 0v2.75h2.75a.687.687 0 0 1 .688.688"
    />
  </svg>
);
export default SvgPlus;
