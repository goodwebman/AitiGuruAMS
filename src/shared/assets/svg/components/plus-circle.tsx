import type { FC, SVGProps } from 'react';
const SvgPlusCircle: FC<
  SVGProps<SVGSVGElement> & {
    color?: string,
  }
> = ({ color = 'var(--icon-secondary)', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 22 22" {...props}>
    <path
      fill="#fff"
      d="M11 2.063A8.938 8.938 0 1 0 19.938 11 8.947 8.947 0 0 0 11 2.063m0 16.5A7.562 7.562 0 1 1 18.563 11 7.57 7.57 0 0 1 11 18.563M15.125 11a.687.687 0 0 1-.687.688h-2.75v2.75a.687.687 0 1 1-1.376 0v-2.75h-2.75a.687.687 0 1 1 0-1.376h2.75v-2.75a.687.687 0 1 1 1.376 0v2.75h2.75a.687.687 0 0 1 .687.688"
    />
  </svg>
);
export default SvgPlusCircle;
