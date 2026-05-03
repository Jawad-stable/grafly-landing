import type { CSSProperties } from "react";

type FadeDir = "tl" | "tr" | "bl" | "br" | "t" | "b" | "l" | "r";

const ANGLES: Record<FadeDir, number> = {
  tl: 135, tr: 225, bl: 45, br: 315,
  t: 180, b: 0, l: 90, r: 270,
};

interface PatternBgProps {
  /** Color of the squiggle lines */
  color?: string;
  /** Tile size, e.g. "320px" or "20%" */
  size?: string;
  /** Opacity of the brightest part of the gradient (the rest fades to 0) */
  maxOpacity?: number;
  /** Whether to blend seamlessly with the background (uses screen blend) */
  seamless?: boolean;
  /** Direction the pattern fades AWAY from (i.e. opaque side) */
  fadeFrom?: FadeDir;
  /** Optional rotation of the tile */
  rotate?: number;
  /** Optional offset of the pattern origin */
  offsetX?: string;
  offsetY?: string;
  /** Stop position where the gradient hits zero, default 70% */
  fadeStop?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Decorative squiggle background overlay. Recolors the pattern via CSS mask
 * and applies a linear-gradient mask on a wrapper for the fade effect.
 *
 * Usage: place inside a `position: relative` parent. Sits absolute, full-bleed.
 */
export default function PatternBg({
  color = "rgba(255,255,255,0.9)",
  size = "320px",
  maxOpacity = 0.3,
  fadeFrom = "tl",
  rotate = 0,
  offsetX = "0px",
  offsetY = "0px",
  fadeStop = "75%",
  seamless = true,
  className = "",
  style = {},
}: PatternBgProps) {
  const angle = ANGLES[fadeFrom];
  const gradientMask = `linear-gradient(${angle}deg, rgba(0,0,0,${maxOpacity}) 0%, rgba(0,0,0,0) ${fadeStop})`;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        WebkitMaskImage: gradientMask,
        maskImage: gradientMask,
        mixBlendMode: seamless ? "soft-light" : undefined,
        ...style,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          WebkitMaskImage: "url(/pattern/squiggle.png)",
          maskImage: "url(/pattern/squiggle.png)",
          WebkitMaskRepeat: "repeat",
          maskRepeat: "repeat",
          WebkitMaskSize: size,
          maskSize: size,
          WebkitMaskPosition: `${offsetX} ${offsetY}`,
          maskPosition: `${offsetX} ${offsetY}`,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
