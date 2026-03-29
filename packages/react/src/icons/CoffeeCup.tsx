import React from 'react';

export interface CoffeeCupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const CoffeeCup = React.forwardRef<SVGSVGElement, CoffeeCupProps>(
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
      <!-- mug body -->
  <path d="M6 7h12l-1.5 13H7.5L6 7z"/>
  <!-- handle -->
  <path d="M18 9h1a2 2 0 0 1 0 4h-1"/>
  <!-- saucer -->
  <line x1="4" y1="20" x2="20" y2="20"/>
  <!-- steam wisps -->
  <path d="M9 4c0-1 1-1 1-2"/>
  <path d="M12 4c0-1 1-1 1-2"/>
  <path d="M15 4c0-1 1-1 1-2"/>
    </svg>
  )
);

CoffeeCup.displayName = 'CoffeeCup';
