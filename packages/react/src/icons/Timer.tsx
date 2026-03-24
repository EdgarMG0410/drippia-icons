import React from 'react';

export interface TimerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Timer = React.forwardRef<SVGSVGElement, TimerProps>(
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
      <circle cx="14" cy="16" r="9"/>
<line x1="14" y1="16" x2="14" y2="10"/>
<line x1="14" y1="16" x2="18" y2="18"/>
<line x1="11" y1="5" x2="17" y2="5"/>
    </svg>
  )
);

Timer.displayName = 'Timer';
