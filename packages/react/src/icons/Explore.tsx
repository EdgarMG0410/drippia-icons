import React from 'react';

export interface ExploreProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Explore = React.forwardRef<SVGSVGElement, ExploreProps>(
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
      <circle cx="14" cy="14" r="10"/>
<path d="M17 8l-4 6-6 4 4-6 6-4Z"/>
    </svg>
  )
);

Explore.displayName = 'Explore';
