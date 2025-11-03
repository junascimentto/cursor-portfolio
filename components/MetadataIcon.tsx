interface MetadataIconProps {
  type: "location" | "experience" | "domains";
  className?: string;
}

export function MetadataIcon({ type, className = "" }: MetadataIconProps) {
  const baseClasses = "flex-shrink-0";
  const size = "w-[20px] h-[20px]";
  const strokeWidth = 1.5;
  const iconColor = "#262626"; // Monochromatic black

  const icons = {
    location: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={size}
      >
        <path
          d="M10 2C7.24 2 5 4.24 5 7C5 11 10 17 10 17C10 17 15 11 15 7C15 4.24 12.76 2 10 2Z"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="10"
          cy="7"
          r="2"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    experience: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={size}
      >
        <rect
          x="3"
          y="4"
          width="14"
          height="14"
          rx="1.5"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="3"
          y1="9"
          x2="17"
          y2="9"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="7"
          y1="2"
          x2="7"
          y2="5"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="13"
          y1="2"
          x2="13"
          y2="5"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    domains: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={size}
      >
        <path
          d="M3 6C3 4.34 4.34 3 6 3H14C15.66 3 17 4.34 17 6V14C17 15.66 15.66 17 14 17H6C4.34 17 3 15.66 3 14V6Z"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="3"
          y1="6"
          x2="17"
          y2="6"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="7"
          y1="3"
          x2="7"
          y2="6"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="13"
          y1="3"
          x2="13"
          y2="6"
          stroke={iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      {icons[type]}
    </div>
  );
}

