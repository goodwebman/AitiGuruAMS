import type { FC, SVGProps } from 'react';
const SvgLogotype: FC<
  SVGProps<SVGSVGElement> & {
    color?: string,
  }
> = ({ color = 'var(--icon-secondary)', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 68 74" {...props}>
    <g filter="url(#filter0_dd_1046_53)">
      <rect width={52} height={52} x={8} y={2} fill="#fff" rx={26} />
      <rect width={52} height={52} x={8} y={2} fill="url(#paint0_linear_1046_53)" rx={26} />
      <rect width={51} height={51} x={8.5} y={2.5} stroke="url(#paint1_linear_1046_53)" rx={25.5} />
      <path
        fill="#000"
        d="M21.12 33.57c.305 0 .553-2.494.553-5.57s-.248-5.57-.553-5.57-.553 2.494-.553 5.57.248 5.57.553 5.57M22.59 34.188c.34 0 .616-2.77.616-6.188s-.276-6.188-.616-6.188-.616 2.77-.616 6.188.276 6.188.616 6.188M24.228 34.882c.375 0 .679-3.081.679-6.882s-.304-6.882-.679-6.882-.679 3.081-.679 6.882.304 6.882.679 6.882M26.041 35.643c.418 0 .756-3.422.756-7.643s-.338-7.643-.756-7.643-.756 3.422-.756 7.643.338 7.643.756 7.643M28.057 36.493c.464 0 .84-3.802.84-8.493 0-4.69-.376-8.493-.84-8.493s-.84 3.802-.84 8.493c0 4.69.376 8.493.84 8.493M30.304 37.438c.514 0 .931-4.225.931-9.438s-.417-9.438-.931-9.438-.931 4.225-.931 9.438.417 9.438.931 9.438M32.796 38.486c.572 0 1.036-4.695 1.036-10.486s-.464-10.486-1.036-10.486S31.76 22.21 31.76 28s.464 10.486 1.036 10.486M35.561 39.648c.638 0 1.155-5.215 1.155-11.648s-.517-11.648-1.155-11.648S34.406 21.567 34.406 28s.517 11.648 1.155 11.648M38.634 40.947c.708 0 1.281-5.797 1.281-12.947s-.573-12.947-1.281-12.947S37.353 20.849 37.353 28s.573 12.947 1.281 12.947M42.05 42.382c.785 0 1.421-6.439 1.421-14.382s-.636-14.382-1.421-14.382-1.421 6.44-1.421 14.382c0 7.943.636 14.382 1.421 14.382M45.844 43.98c.874 0 1.582-7.154 1.582-15.98s-.708-15.98-1.582-15.98-1.582 7.154-1.582 15.98c0 8.825.708 15.98 1.582 15.98"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1046_53"
        x1={34}
        x2={34}
        y1={54}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.5} stopColor="#232323" stopOpacity={0} />
        <stop offset={1} stopColor="#232323" stopOpacity={0.06} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1046_53"
        x1={34}
        x2={34}
        y1={2}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEDED" stopOpacity={0.7} />
        <stop offset={0.7} stopColor="#EDEDED" stopOpacity={0} />
      </linearGradient>
      <filter
        id="filter0_dd_1046_53"
        width={68}
        height={74}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={12} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1046_53" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect2_dropShadow_1046_53" />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="effect1_dropShadow_1046_53" result="effect2_dropShadow_1046_53" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_1046_53" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgLogotype;
