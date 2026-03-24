import React from 'react';

export interface GrinderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Grinder = React.forwardRef<SVGSVGElement, GrinderProps>(
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
      <rect x="8" y="10" width="12" height="14" rx="2"/>
<path d="M10 10l2-6h4l2 6"/>
<circle cx="14" cy="17" r="3"/>
<line x1="12" y1="24" x2="16" y2="24"/>
    </svg>
  )
);

Grinder.displayName = 'Grinder';
