import React from 'react';

export interface MokaPotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const MokaPot = React.forwardRef<SVGSVGElement, MokaPotProps>(
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
      <path d="M10 23h8l1-8H9Z"/>
<path d="M9 15h10l-2-6a2 2 0 0 0-6 0Z"/>
<path d="M12 9c0-2 4-2 4-4"/>
    </svg>
  )
);

MokaPot.displayName = 'MokaPot';
