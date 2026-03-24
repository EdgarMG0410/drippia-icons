import React from 'react';

export interface FavoriteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Favorite = React.forwardRef<SVGSVGElement, FavoriteProps>(
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
      <path d="M14 22C14 22 5 17 5 11C5 8 7 6 10 6C12 6 13 7 14 8C15 7 16 6 18 6C21 6 23 8 23 11C23 17 14 22 14 22Z"/>
    </svg>
  )
);

Favorite.displayName = 'Favorite';
