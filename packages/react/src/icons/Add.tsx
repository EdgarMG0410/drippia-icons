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
      <circle cx="12" cy="12" r="10"/>
<line x1="12" y1="8" x2="12" y2="16"/>
<line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
);

Add.displayName = 'Add';
