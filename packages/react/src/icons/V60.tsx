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
      <line x1="8" y1="16" x2="16" y2="16"/>
      <path d="M5 6h14l-6 10h-2L5 6z"/>
      <path d="M19 6c2 0 2.5 1 2.5 2s-1 2-4 2"/>
    </svg>
  )
);

V60.displayName = 'V60';
