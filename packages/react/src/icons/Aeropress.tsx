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
      viewBox="0 0 128 256"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <line x1="28" y1="40" x2="100" y2="40"/>
        <line x1="36" y1="100" x2="90" y2="100"/>
        <line x1="28" y1="200" x2="100" y2="200"/>
        <line x1="36" y1="100" x2="36" y2="200"/>
        <line x1="92" y1="100" x2="92" y2="200"/>
        <line x1="80" y1="40" x2="80" y2="100"/>
        <line x1="50" y1="40" x2="50" y2="100"/>
        <line x1="43" y1="207" x2="85" y2="207"/>
      </g>
    </svg>
  )
);

Aeropress.displayName = 'Aeropress';
