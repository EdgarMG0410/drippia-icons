import React from 'react';

export interface MyStockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const MyStock = React.forwardRef<SVGSVGElement, MyStockProps>(
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
      <path d="M8 10h12l-2 14H10Z"/>
<path d="M10 10c0-3 8-3 8 0"/>
<circle cx="14" cy="17" r="2"/>
    </svg>
  )
);

MyStock.displayName = 'MyStock';
