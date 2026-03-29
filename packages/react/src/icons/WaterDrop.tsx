import React from 'react';

export interface WaterDropProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const WaterDrop = React.forwardRef<SVGSVGElement, WaterDropProps>(
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
      <path d="M12 2L6 12a6 6 0 1 0 12 0L12 2z"/>
    </svg>
  )
);

WaterDrop.displayName = 'WaterDrop';
