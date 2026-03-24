import React from 'react';

export interface FrenchPressProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const FrenchPress = React.forwardRef<SVGSVGElement, FrenchPressProps>(
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
      <rect x="7" y="8" width="14" height="16" rx="2"/>
<line x1="7" y1="14" x2="21" y2="14"/>
<rect x="6" y="6" width="16" height="4" rx="1"/>
<line x1="14" y1="6" x2="14" y2="3"/>
    </svg>
  )
);

FrenchPress.displayName = 'FrenchPress';
