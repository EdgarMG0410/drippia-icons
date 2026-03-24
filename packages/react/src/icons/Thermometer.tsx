import React from 'react';

export interface ThermometerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Thermometer = React.forwardRef<SVGSVGElement, ThermometerProps>(
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
      <rect x="11" y="4" width="6" height="16" rx="3"/>
<circle cx="14" cy="22" r="4"/>
<line x1="17" y1="10" x2="20" y2="10"/>
<line x1="17" y1="14" x2="20" y2="14"/>
    </svg>
  )
);

Thermometer.displayName = 'Thermometer';
