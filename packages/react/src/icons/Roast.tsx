import React from 'react';

export interface RoastProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Roast = React.forwardRef<SVGSVGElement, RoastProps>(
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
      <path d="M14 24C14 24 7 19 8 13C9 9 11 8 11 5C13 7 12 10 14 11C14 8 16 6 17 4C18 7 16 10 18 13C19 17 17 22 14 24Z"/>
    </svg>
  )
);

Roast.displayName = 'Roast';
