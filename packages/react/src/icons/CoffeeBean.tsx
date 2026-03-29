import React from 'react';

export interface CoffeeBeanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const CoffeeBean = React.forwardRef<SVGSVGElement, CoffeeBeanProps>(
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
      <!-- bean silhouette: rounded ellipse rotated -->
  <ellipse cx="12" cy="12" rx="5" ry="8" transform="rotate(-30 12 12)"/>
  <!-- center crease line -->
  <path d="M9.5 6.5c1 2 1 5 0 7" transform="rotate(-30 12 12)"/>
    </svg>
  )
);

CoffeeBean.displayName = 'CoffeeBean';
