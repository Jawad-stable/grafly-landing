import ImageWithFallback from "./ImageWithFallback";

interface PhoneMockupProps {
  screenshotSrc: string;
  screenshotAlt: string;
  className?: string;
  tiltOnHover?: boolean;
  width?: number;
  height?: number;
}

export default function PhoneMockup({
  screenshotSrc,
  screenshotAlt,
  className = "",
  tiltOnHover = false,
  width = 180,
  height = 360,
}: PhoneMockupProps) {
  const notchW = Math.round(width * 0.34);
  const notchH = Math.max(10, Math.round(width * 0.078));
  return (
    <div
      className={`phone-frame mx-auto ${className}`}
      style={{
        width,
        height,
        transition: tiltOnHover ? "transform 300ms ease" : undefined,
      }}
      onMouseEnter={
        tiltOnHover
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "perspective(600px) rotateY(6deg) rotateX(-2deg) scale(1.03)";
            }
          : undefined
      }
      onMouseLeave={
        tiltOnHover
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "";
            }
          : undefined
      }
    >
      <div
        style={{
          position: "absolute",
          top: Math.round(width * 0.055),
          left: "50%",
          transform: "translateX(-50%)",
          width: notchW,
          height: notchH,
          borderRadius: 100,
          background: "#000",
          zIndex: 2,
        }}
      />
      <ImageWithFallback
        src={screenshotSrc}
        alt={screenshotAlt}
        className="w-full h-full object-cover"
        fallbackBg="#1e293b"
        fallbackTextColor="#94a3b8"
      />
    </div>
  );
}
