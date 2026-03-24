import React from 'react';

export interface SettingsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Settings = React.forwardRef<SVGSVGElement, SettingsProps>(
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
      <circle cx="14" cy="14" r="3"/>
<path d="M14 4v3M14 21v3M4 14h3M21 14h3M6.5 6.5l2 2M19.5 19.5l2 2M6.5 21.5l2-2M19.5 8.5l2-2"/>
    </svg>
  )
);

Settings.displayName = 'Settings';
