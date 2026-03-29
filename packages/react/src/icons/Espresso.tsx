import React from 'react';

export interface EspressoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Espresso = React.forwardRef<SVGSVGElement, EspressoProps>(
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
      <!-- machine body -->
  <rect x="3" y="5" width="18" height="13" rx="2"/>
  <!-- group head / portafilter mount -->
  <rect x="9" y="11" width="6" height="3" rx="1"/>
  <!-- portafilter spout -->
  <path d="M11 14v3"/>
  <path d="M13 14v3"/>
  <!-- pressure gauge circle -->
  <circle cx="6" cy="9" r="1.5"/>
  <!-- steam wand -->
  <path d="M18 10v-3a1 1 0 0 1 2 0v4"/>
  <!-- cup tray -->
  <line x1="3" y1="18" x2="21" y2="18"/>
  <!-- on button -->
  <circle cx="17" cy="9" r="1"/>
    </svg>
  )
);

Espresso.displayName = 'Espresso';
