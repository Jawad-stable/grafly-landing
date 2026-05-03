interface SquiggleProps {
  color?: string;
  opacity?: number;
  className?: string;
  width?: number;
  height?: number;
}

export default function Squiggle({
  color = "currentColor",
  opacity = 0.1,
  className = "",
  width = 320,
  height = 120,
}: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 320 120"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`squiggle-drift pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d="M10 60 C 40 20, 80 100, 120 60 S 200 20, 240 60 S 300 100, 320 60"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 80 C 50 40, 90 110, 140 70 S 210 30, 260 75 S 310 110, 320 80"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <circle cx="60" cy="55" r="5" fill={color} opacity="0.4" />
      <circle cx="180" cy="45" r="4" fill={color} opacity="0.3" />
      <circle cx="290" cy="65" r="6" fill={color} opacity="0.25" />
    </svg>
  );
}
