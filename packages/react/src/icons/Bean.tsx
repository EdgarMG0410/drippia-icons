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
      <ellipse cx="12" cy="12" rx="6" ry="8.5" transform="rotate(-20 12 12)"/>
<path d="M8.5 7Q12 12 15.5 17" transform="rotate(-20 12 12)"/>
    </svg>
  )
);

Bean.displayName = 'Bean';
