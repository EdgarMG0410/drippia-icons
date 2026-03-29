import React from 'react';

export interface KalitaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Kalita = React.forwardRef<SVGSVGElement, KalitaProps>(
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
      <!-- flat-bottom dripper sides -->
  <path d="M6 3h12l-2 11H8L6 3z"/>
  <!-- wave filter bottom (flat) -->
  <line x1="8" y1="14" x2="16" y2="14"/>
  <!-- three holes at bottom -->
  <circle cx="10" cy="14" r="0.5"/>
  <circle cx="12" cy="14" r="0.5"/>
  <circle cx="14" cy="14" r="0.5"/>
  <!-- drips -->
  <line x1="10" y1="14" x2="10" y2="17"/>
  <line x1="12" y1="14" x2="12" y2="17"/>
  <line x1="14" y1="14" x2="14" y2="17"/>
  <!-- server / cup below -->
  <path d="M7 17h10v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2z"/>
    </svg>
  )
);

Kalita.displayName = 'Kalita';
