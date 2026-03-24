import React from 'react';

export interface HistoryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const History = React.forwardRef<SVGSVGElement, HistoryProps>(
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
      <path d="M5 14A9 9 0 1 1 8 8"/>
<polyline points="5 4 5 9 10 9"/>
<line x1="14" y1="14" x2="14" y2="10"/>
<line x1="14" y1="14" x2="17" y2="16"/>
    </svg>
  )
);

History.displayName = 'History';
