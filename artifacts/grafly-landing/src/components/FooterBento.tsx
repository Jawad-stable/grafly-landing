import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";
import Squiggle, { SquigglePattern } from "./Squiggle";

function StoreBadge({ label, icon }: { label: string; icon: "apple" | "google" }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 bg-white text-[#21263F] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#E3ED43] hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg"
      aria-label={label}
    >
      {icon === "apple" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.18 23.76c.28.15.59.2.91.14L14.84 12 3.18 .1C2.83.04 2.47.1 2.18.3L2.13.35 13.06 12 2.13 23.65l.05.06c.27.18.6.24.93.18l.07-.13M20.9 10.54l-2.83-1.6L15.2 12l2.87 2.87 2.84-1.6c.81-.46.81-1.68-.01-2.14M3.97 1.09L14.26 11.38 5.53.34 3.97 1.09M14.26 12.62L3.97 22.91l1.56.75L14.26 12.62z"/>
        </svg>
      )}
      {label}
    </a>
  );
}

export default function FooterBento() {
  const { t } = useLang();

  return (
    <footer id="download" aria-label="Footer and download" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main CTA card */}
          <div
            className="bento-card md:col-span-2 p-10 md:p-12 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #21263F 0%, #2D3354 100%)",
              color: "#F5F6FA",
              minHeight: 280,
            }}
          >
            <SquigglePattern color="#00A4FA" opacity={0.1} size={70} />
            <Squiggle
              color="#FF7BD0"
              opacity={0.25}
              variant="loop"
              width={320}
              height={110}
              className="absolute -top-2 left-0"
            />
            <Squiggle
              color="#E3ED43"
              opacity={0.2}
              variant="scribble"
              width={280}
              height={90}
              className="absolute -bottom-2 right-0"
            />

            <div className="relative z-10 flex-1">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#00A4FA] mb-3">
                — Get the app —
              </span>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                {t.footer.headline}
              </h2>
              <div className="flex flex-wrap gap-3">
                <StoreBadge label={t.footer.ctaAppStore} icon="apple" />
                <StoreBadge label={t.footer.ctaPlayStore} icon="google" />
              </div>
            </div>

            <div className="shrink-0 relative z-10" style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.3))" }}>
              <ImageWithFallback
                src="/mascot/celebrate.png"
                alt="Grafly mascot celebrating"
                className="mascot-float object-contain"
                fallbackBg="rgba(255,255,255,0.08)"
                fallbackTextColor="#F5F6FA"
                style={{ width: 170, height: 190 }}
              />
            </div>
          </div>

          {/* Social card */}
          <div
            className="bento-card p-8 flex flex-col justify-between relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #00A4FA 0%, #0090E0 100%)", color: "#21263F" }}
          >
            <SquigglePattern color="#21263F" opacity={0.08} size={50} />
            <Squiggle
              color="#21263F"
              opacity={0.15}
              variant="loop"
              width={200}
              height={70}
              className="absolute -bottom-2 -right-4"
            />

            {/* Cool yellow mascot */}
            <div className="absolute top-4 end-4 z-10 opacity-95" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}>
              <ImageWithFallback
                src="/mascot/cool_yellow.png"
                alt=""
                className="mascot-float object-contain"
                fallbackBg="transparent"
                fallbackTextColor="#21263F"
                style={{ width: 70, height: 70 }}
              />
            </div>

            <p className="font-display text-xl relative z-10 max-w-[60%]" style={{ letterSpacing: "-0.02em" }}>
              {t.footer.social}
            </p>
            <div className="flex items-center gap-3 mt-6 relative z-10">
              {[
                { Icon: Twitter, label: "Twitter / X" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-[#21263F] hover:text-white hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21263F]"
                  style={{ background: "rgba(33,38,63,0.15)" }}
                  aria-label={label}
                >
                  <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <p className="text-center text-sm" style={{ opacity: 0.6 }}>
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
