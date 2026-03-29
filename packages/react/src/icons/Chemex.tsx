import React from 'react';

export interface ChemexProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Chemex = React.forwardRef<SVGSVGElement, ChemexProps>(
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
      <!-- Chemex body: hourglass shape -->
  <path d="M7 2h10"/>
  <!-- top funnel -->
  <path d="M8 2l2 6h4l2-6"/>
  <!-- wooden collar / grip band -->
  <line x1="8" y1="10" x2="16" y2="10"/>
  <!-- bottom carafe narrows then widens -->
  <path d="M10 10l-3 9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l-3-9"/>
    </svg>
  )
);

Chemex.displayName = 'Chemex';
