import React from 'react';

export interface PrensaFrancesaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const PrensaFrancesa = React.forwardRef<SVGSVGElement, PrensaFrancesaProps>(
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
      <!-- carafe body -->
  <rect x="7" y="5" width="10" height="15" rx="1"/>
  <!-- plunger rod -->
  <line x1="12" y1="5" x2="12" y2="2"/>
  <!-- plunger handle -->
  <line x1="9" y1="2" x2="15" y2="2"/>
  <!-- plunger screen / filter disc -->
  <line x1="8" y1="13" x2="16" y2="13"/>
  <!-- lid / top plate -->
  <rect x="7" y="4" width="10" height="2" rx="0.5"/>
  <!-- spout pour lip -->
  <path d="M17 8c1 0 2 0.5 2 1.5"/>
  <!-- handle -->
  <path d="M7 11c-1.5 0-2.5 1-2.5 2.5"/>
    </svg>
  )
);

PrensaFrancesa.displayName = 'PrensaFrancesa';
