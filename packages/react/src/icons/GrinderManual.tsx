import React from 'react';

export interface GrinderManualProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const GrinderManual = React.forwardRef<SVGSVGElement, GrinderManualProps>(
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
      <!-- grinder body cylinder -->
  <rect x="8" y="9" width="8" height="12" rx="1"/>
  <!-- hopper top (trapezoid) -->
  <path d="M9 9l1-5h4l1 5"/>
  <!-- crank arm -->
  <line x1="12" y1="4" x2="16" y2="4"/>
  <!-- crank handle knob -->
  <circle cx="16" cy="4" r="1"/>
  <!-- grind adjustment ring -->
  <line x1="8" y1="13" x2="16" y2="13"/>
  <!-- bottom catch cup -->
  <rect x="9" y="21" width="6" height="2" rx="0.5"/>
    </svg>
  )
);

GrinderManual.displayName = 'GrinderManual';
