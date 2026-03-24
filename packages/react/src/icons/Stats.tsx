import React from 'react';

export interface StatsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Stats = React.forwardRef<SVGSVGElement, StatsProps>(
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
      <rect x="3" y="14" width="5" height="10" rx="1"/>
<rect x="11" y="9" width="5" height="15" rx="1"/>
<rect x="19" y="4" width="5" height="20" rx="1"/>
<line x1="1" y1="24" x2="27" y2="24"/>
    </svg>
  )
);

Stats.displayName = 'Stats';
