import ImageWithFallback from "./ImageWithFallback";

interface PhoneMockupProps {
  screenshotSrc: string;
  screenshotAlt: string;
  className?: string;
  tiltOnHover?: boolean;
}

export default function PhoneMockup({
  screenshotSrc,
  screenshotAlt,
  className = "",
  tiltOnHover = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`phone-frame mx-auto ${className}`}
      style={{
        width: 180,
        height: 360,
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
      {/* notch */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 14,
          borderRadius: 100,
          background: "#000",
          zIndex: 2,
        }}
      />
      {/* screen */}
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
