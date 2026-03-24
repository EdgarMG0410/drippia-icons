import React from 'react';

export interface AiBrewProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const AiBrew = React.forwardRef<SVGSVGElement, AiBrewProps>(
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
      <path d="M14 3C19 9 21 13 21 17C21 21 18 25 14 25C10 25 7 21 7 17C7 13 9 9 14 3Z"/>
<path d="M11 17L12.5 14L14 17L15.5 14L17 17"/>
    </svg>
  )
);

AiBrew.displayName = 'AiBrew';
