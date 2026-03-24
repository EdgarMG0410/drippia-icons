import React from 'react';

export interface V60Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const V60 = React.forwardRef<SVGSVGElement, V60Props>(
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
      <path d="M5 6h18l-6 14H11Z"/>
<line x1="4" y1="6" x2="24" y2="6"/>
    </svg>
  )
);

V60.displayName = 'V60';
