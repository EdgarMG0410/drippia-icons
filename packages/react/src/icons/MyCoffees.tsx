import React from 'react';

export interface MyCoffeesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const MyCoffees = React.forwardRef<SVGSVGElement, MyCoffeesProps>(
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
      <path d="M14 4C18 8 20 11 20 14C20 18 17 22 14 22C11 22 8 18 8 14C8 11 10 8 14 4Z"/>
<path d="M11 13Q14 11 17 13"/>
    </svg>
  )
);

MyCoffees.displayName = 'MyCoffees';
