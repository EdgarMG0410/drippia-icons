import React from 'react';

export interface ProfileProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Profile = React.forwardRef<SVGSVGElement, ProfileProps>(
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
      <circle cx="14" cy="10" r="5"/>
<path d="M5 23c0-5 4-8 9-8s9 3 9 8"/>
    </svg>
  )
);

Profile.displayName = 'Profile';
