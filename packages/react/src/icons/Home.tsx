import React from 'react';

export interface HomeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Home = React.forwardRef<SVGSVGElement, HomeProps>(
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
      <path d="M3 12L14 3L25 12V23A1 1 0 0 1 24 24H4A1 1 0 0 1 3 24Z"/>
<rect x="10" y="17" width="8" height="7" rx="1"/>
    </svg>
  )
);

Home.displayName = 'Home';
