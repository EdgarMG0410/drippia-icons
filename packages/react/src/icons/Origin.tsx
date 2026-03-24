import React from 'react';

export interface OriginProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Origin = React.forwardRef<SVGSVGElement, OriginProps>(
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
      <path d="M14 3C18 3 22 7 22 12C22 18 14 25 14 25C14 25 6 18 6 12C6 7 10 3 14 3Z"/>
<circle cx="14" cy="12" r="3"/>
    </svg>
  )
);

Origin.displayName = 'Origin';
