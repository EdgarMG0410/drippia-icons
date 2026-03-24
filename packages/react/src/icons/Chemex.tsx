import React from 'react';

export interface ChemexProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Chemex = React.forwardRef<SVGSVGElement, ChemexProps>(
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
      <path d="M8 5h12l-3 9H11Z"/>
<path d="M11 14h6c0 0 4 5 4 9H7c0-4 4-9 4-9Z"/>
    </svg>
  )
);

Chemex.displayName = 'Chemex';
