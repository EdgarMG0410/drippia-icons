import React from 'react';

export interface BloomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Bloom = React.forwardRef<SVGSVGElement, BloomProps>(
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
      <!-- center circle (bed of grounds) -->
  <circle cx="12" cy="14" r="3"/>
  <!-- bloom bubbles / CO2 rising -->
  <path d="M10 11c-1-2-1-4 0-5"/>
  <path d="M12 10c0-2 0-4 0-6"/>
  <path d="M14 11c1-2 1-4 0-5"/>
  <!-- water drops coming in from top -->
  <line x1="8" y1="2" x2="8" y2="5"/>
  <line x1="16" y1="2" x2="16" y2="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
    </svg>
  )
);

Bloom.displayName = 'Bloom';
