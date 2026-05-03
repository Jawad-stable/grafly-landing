import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackBg?: string;
  fallbackTextColor?: string;
  style?: React.CSSProperties;
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackBg = "#e2e8f0",
  fallbackTextColor = "#64748b",
  style,
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);
  const assetName = src.split("/").pop() ?? src;

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center text-center p-2 text-xs font-medium ${className}`}
        style={{ background: fallbackBg, color: fallbackTextColor, ...style }}
        aria-label={alt}
        role="img"
      >
        {assetName}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
    />
  );
}
