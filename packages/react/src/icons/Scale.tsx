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
      <!-- scale platform -->
  <rect x="3" y="17" width="18" height="4" rx="1"/>
  <!-- weighing surface / tray -->
  <rect x="6" y="14" width="12" height="3" rx="0.5"/>
  <!-- display screen -->
  <rect x="8" y="8" width="8" height="5" rx="1"/>
  <!-- display digits suggestion -->
  <line x1="10" y1="11" x2="14" y2="11"/>
  <!-- sensor stem -->
  <line x1="12" y1="13" x2="12" y2="14"/>
  <!-- unit button -->
  <circle cx="17" cy="10" r="1"/>
    </svg>
  )
);

Scale.displayName = 'Scale';
