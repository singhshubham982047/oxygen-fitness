import React from 'react';

interface OxygenLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'mark';
  color?: string;
  accentColor?: string;
}

export const OxygenLogo: React.FC<OxygenLogoProps> = ({
  className = 'h-9 w-auto',
  variant = 'full',
  color = '#FFFFFF',
  accentColor = '#A1A1AA' // Sophisticated metallic slate grey
}) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Oxygen Fitness Emblem"
      >
        {/* Athletic Octagon / Shield Ring */}
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="12"
          fill="#18181B"
          stroke="#3F3F46"
          strokeWidth="2"
        />
        {/* Core O ring */}
        <circle
          cx="22"
          cy="24"
          r="12"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Dynamic Fitness Bar */}
        <line
          x1="14"
          y1="24"
          x2="30"
          y2="24"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* O2 Subscript '2' */}
        <text
          x="33"
          y="34"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fontWeight="900"
          fill={accentColor}
        >
          2
        </text>
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 320 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Oxygen Fitness Logo"
      >
        {/* Emblem / Mark */}
        <g transform="translate(4, 8)">
          <rect
            x="0"
            y="0"
            width="48"
            height="48"
            rx="12"
            fill="#18181B"
            stroke="#3F3F46"
            strokeWidth="2"
          />
          <circle
            cx="22"
            cy="24"
            r="12"
            stroke={color}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="24"
            x2="30"
            y2="24"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text
            x="33"
            y="34"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12"
            fontWeight="900"
            fill={accentColor}
          >
            2
          </text>
        </g>

        {/* Wordmark: OXYGEN */}
        <text
          x="66"
          y="36"
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
          fontSize="28"
          fontWeight="900"
          letterSpacing="0.08em"
          fill={color}
        >
          OXYGEN
        </text>

        {/* Subtitle: FITNESS with pill container */}
        <g transform="translate(66, 42)">
          <rect
            x="0"
            y="0"
            width="82"
            height="14"
            rx="4"
            fill="#27272A"
          />
          <text
            x="41"
            y="10.5"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
            fontSize="8.5"
            fontWeight="800"
            letterSpacing="0.22em"
            fill={accentColor}
          >
            FITNESS
          </text>
        </g>
      </svg>
    </div>
  );
};
