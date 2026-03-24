import React from 'react';

export interface NotificationsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const Notifications = React.forwardRef<SVGSVGElement, NotificationsProps>(
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
      <path d="M14 3c0 0-2 1-2 4v4H8l-2 3h16l-2-3h-4V7c0-3-2-4-2-4Z"/>
<path d="M11 23q1 2 3 2t3-2"/>
    </svg>
  )
);

Notifications.displayName = 'Notifications';
