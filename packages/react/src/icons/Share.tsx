import React from 'react';

export interface ShareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Share = React.forwardRef<SVGSVGElement, ShareProps>(
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
      <circle cx="14" cy="5" r="2.5"/>
<circle cx="5" cy="17" r="2.5"/>
<circle cx="23" cy="17" r="2.5"/>
<line x1="12" y1="7" x2="7" y2="15"/>
<line x1="16" y1="7" x2="21" y2="15"/>
<line x1="7.5" y1="17" x2="20.5" y2="17"/>
    </svg>
  )
);

Share.displayName = 'Share';
