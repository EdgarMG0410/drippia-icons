import React from 'react';

export interface RatioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Ratio = React.forwardRef<SVGSVGElement, RatioProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 20C8 20 4 17 4 13C4 10 6 8 8 8C10 8 12 10 12 13C12 17 8 20 8 20Z"/>
<path d="M20 22C20 22 14 18 14 13C14 9 17 6 20 6C23 6 26 9 26 13C26 18 20 22 20 22Z"/>
    </svg>
  )
);

Ratio.displayName = 'Ratio';
