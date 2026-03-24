import React from 'react';

export interface BeanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Bean = React.forwardRef<SVGSVGElement, BeanProps>(
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
      <ellipse cx="14" cy="14" rx="7" ry="10" transform="rotate(-20 14 14)"/>
<path d="M10 8Q14 14 18 20" transform="rotate(-20 14 14)"/>
    </svg>
  )
);

Bean.displayName = 'Bean';
