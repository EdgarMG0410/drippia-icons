import React from 'react';

export interface ScaleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Scale = React.forwardRef<SVGSVGElement, ScaleProps>(
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
      <rect x="5" y="18" width="18" height="5" rx="2"/>
<rect x="9" y="8" width="10" height="10" rx="2"/>
<rect x="11" y="5" width="6" height="4" rx="1"/>
    </svg>
  )
);

Scale.displayName = 'Scale';
