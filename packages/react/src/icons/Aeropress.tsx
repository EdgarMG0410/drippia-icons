import React from 'react';

export interface AeropressProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Aeropress = React.forwardRef<SVGSVGElement, AeropressProps>(
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
      <rect x="9" y="10" width="10" height="13" rx="2"/>
<rect x="11" y="5" width="6" height="6" rx="1"/>
<line x1="14" y1="3" x2="14" y2="5"/>
<rect x="8" y="23" width="12" height="3" rx="1.5"/>
    </svg>
  )
);

Aeropress.displayName = 'Aeropress';
