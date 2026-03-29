import React from 'react';

export interface KettleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Kettle = React.forwardRef<SVGSVGElement, KettleProps>(
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
      <!-- kettle body -->
  <path d="M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5z"/>
  <!-- gooseneck spout: rises then curves down -->
  <path d="M5 12c-1.5 0-2.5-1-2.5-2.5S3.5 7 5 7h1"/>
  <path d="M3 9.5C3 7 4 5 6 4c1.5-1 3-1 3-1"/>
  <!-- lid -->
  <line x1="8" y1="6" x2="16" y2="6"/>
  <circle cx="12" cy="5" r="1"/>
  <!-- handle on right -->
  <path d="M19 11c1.5 0 2.5 1 2.5 2.5S20.5 16 19 16"/>
    </svg>
  )
);

Kettle.displayName = 'Kettle';
