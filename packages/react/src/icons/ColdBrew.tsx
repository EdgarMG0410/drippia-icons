import React from 'react';

export interface ColdBrewProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const ColdBrew = React.forwardRef<SVGSVGElement, ColdBrewProps>(
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
      <!-- mason jar body -->
  <rect x="7" y="6" width="10" height="15" rx="1"/>
  <!-- jar neck / shoulder -->
  <path d="M9 6V4h6v2"/>
  <!-- lid ring -->
  <rect x="8" y="3" width="8" height="2" rx="0.5"/>
  <!-- liquid fill line (cold brew level) -->
  <line x1="8" y1="14" x2="16" y2="14"/>
  <!-- ice crystal / snowflake -->
  <line x1="12" y1="17" x2="12" y2="21"/>
  <line x1="10" y1="18" x2="14" y2="20"/>
  <line x1="14" y1="18" x2="10" y2="20"/>
    </svg>
  )
);

ColdBrew.displayName = 'ColdBrew';
