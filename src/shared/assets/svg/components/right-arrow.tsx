import type { FC, SVGProps } from 'react';
const SvgRightArrow: FC<
  SVGProps<SVGSVGElement> & {
    color?: string,
  }
> = ({ color = 'var(--icon-secondary)', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 8 14" {...props}>
    <path
      fill="#B2B3B9"
      d="m7.318 7.318-6.25 6.25a.625.625 0 1 1-.885-.885l5.809-5.808L.183 1.068a.625.625 0 1 1 .885-.885l6.25 6.25a.625.625 0 0 1 0 .885"
    />
  </svg>
);
export default SvgRightArrow;
