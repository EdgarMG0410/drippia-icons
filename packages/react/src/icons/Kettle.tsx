import React from 'react';

export interface KettleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Kettle = React.forwardRef<SVGSVGElement, KettleProps>(
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
      <path d="M8 20h12a4 4 0 0 0 4-4v-2H8Z"/>
<path d="M8 14V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"/>
<path d="M6 14c-2-1-3-4-1-5"/>
    </svg>
  )
);

Kettle.displayName = 'Kettle';
