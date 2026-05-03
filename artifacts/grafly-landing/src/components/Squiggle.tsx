interface SquiggleProps {
  color?: string;
  opacity?: number;
  className?: string;
  width?: number;
  height?: number;
  variant?: "wave" | "loop" | "scribble" | "spiral";
}

export default function Squiggle({
  color = "currentColor",
  opacity = 0.1,
  className = "",
  width = 320,
  height = 120,
  variant = "wave",
}: SquiggleProps) {
  const paths = {
    wave: (
      <>
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
      </>
    ),
    loop: (
      <>
        <path
          d="M20 60 Q 50 10, 80 60 T 140 60 Q 170 110, 200 60 T 260 60 Q 290 10, 310 60"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 90 Q 60 50, 100 80 T 180 70 Q 220 100, 260 80 T 310 90"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </>
    ),
    scribble: (
      <>
        <path
          d="M10 40 Q 30 70, 50 40 Q 70 10, 90 40 Q 110 70, 130 40 Q 150 10, 170 40 Q 190 70, 210 40 Q 230 10, 250 40 Q 270 70, 290 40 Q 310 10, 320 40"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 80 L 320 80"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
          fill="none"
          opacity="0.5"
        />
      </>
    ),
    spiral: (
      <>
        <path
          d="M160 60 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 m20 0 a10 10 0 1 1 20 0 a10 10 0 1 1 -20 0"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 30 Q 80 80, 130 50 M190 50 Q 240 80, 280 30"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </>
    ),
  };

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
      preserveAspectRatio="none"
    >
      {paths[variant]}
    </svg>
  );
}

/* ── Repeating background pattern ─────────────────────────── */
interface SquigglePatternProps {
  color?: string;
  opacity?: number;
  className?: string;
  size?: number;
}

export function SquigglePattern({
  color = "#21263F",
  opacity = 0.06,
  className = "",
  size = 80,
}: SquigglePatternProps) {
  const id = `squiggle-pattern-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <path
            d={`M0 ${size / 2} Q ${size / 4} ${size / 4}, ${size / 2} ${size / 2} T ${size} ${size / 2}`}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx={size / 4} cy={size / 4} r="1.5" fill={color} />
          <circle cx={(size * 3) / 4} cy={(size * 3) / 4} r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ── Decorative floating dot ──────────────────────────────── */
export function Dot({
  color = "#21263F",
  size = 8,
  className = "",
}: { color?: string; size?: number; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full ${className}`}
      style={{ background: color, width: size, height: size }}
      aria-hidden="true"
    />
  );
}
