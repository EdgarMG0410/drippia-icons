import React from 'react';

export interface AddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Add = React.forwardRef<SVGSVGElement, AddProps>(
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
<line x1="14" y1="9" x2="14" y2="19"/>
<line x1="9" y1="14" x2="19" y2="14"/>
    </svg>
  )
);

Add.displayName = 'Add';
