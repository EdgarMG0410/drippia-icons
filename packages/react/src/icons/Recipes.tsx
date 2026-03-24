import React from 'react';

export interface RecipesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Recipes = React.forwardRef<SVGSVGElement, RecipesProps>(
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
      <rect x="6" y="4" width="16" height="20" rx="2"/>
<line x1="10" y1="10" x2="18" y2="10"/>
<line x1="10" y1="14" x2="18" y2="14"/>
<line x1="10" y1="18" x2="14" y2="18"/>
    </svg>
  )
);

Recipes.displayName = 'Recipes';
