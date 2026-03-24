import React from 'react';

export interface TastingNotesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const TastingNotes = React.forwardRef<SVGSVGElement, TastingNotesProps>(
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
      <polygon points="14,4 17,11 24,11 18,16 21,23 14,18 7,23 10,16 4,11 11,11"/>
    </svg>
  )
);

TastingNotes.displayName = 'TastingNotes';
