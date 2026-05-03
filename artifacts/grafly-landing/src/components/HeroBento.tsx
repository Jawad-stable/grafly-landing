import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";
import PhoneMockup from "./PhoneMockup";
import Squiggle from "./Squiggle";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function StoreBadge({ label, icon }: { label: string; icon: "apple" | "google" }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 bg-[#21263F] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-[#0078BB] hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg"
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

export default function HeroBento() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 flex items-center relative overflow-hidden"
    >
      {/* Floating decorative blobs */}
      <div
        className="absolute top-32 -left-20 w-72 h-72 rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: "#FF7BD0" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full opacity-15 pointer-events-none blur-3xl"
        style={{ background: "#7B5CFF" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* ── Main hero card ── */}
          <motion.div
            variants={fadeUp}
            className="bento-card p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #00A4FA 0%, #0090E0 100%)",
              gridColumn: "1 / 3",
              gridRow: "1 / 3",
              minHeight: 460,
            }}
          >
            <Squiggle
              color="#21263F"
              opacity={0.1}
              variant="loop"
              width={380}
              height={130}
              className="absolute -top-2 -right-6"
            />

            <div className="relative z-10 max-w-[62%]">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-6 shadow-sm"
                style={{ background: "rgba(33,38,63,0.14)", color: "#21263F" }}
              >
                <Sparkles size={12} aria-hidden="true" />
                {t.hero.badge.replace("✨ ", "")}
              </span>
              <h1
                className="font-display text-[#21263F] mb-4 leading-[0.92]"
                style={{
                  fontSize: "clamp(36px, 5vw, 72px)",
                  letterSpacing: "-0.035em",
                  whiteSpace: "pre-line",
                }}
              >
                {t.hero.headline}
              </h1>
              <p className="text-[#21263F]/85 text-lg font-medium mb-8 max-w-sm">
                {t.hero.subhead}
              </p>
              <div className="flex flex-wrap gap-3">
                <StoreBadge label={t.hero.ctaAppStore} icon="apple" />
                <StoreBadge label={t.hero.ctaPlayStore} icon="google" />
              </div>
            </div>

            {/* Mascot — hero star element */}
            <div
              className="absolute -bottom-12 -end-12 z-20 pointer-events-none"
              style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.35))" }}
            >
              {/* Glow halo behind mascot */}
              <div
                className="absolute rounded-full blur-3xl opacity-70"
                style={{
                  background: "radial-gradient(circle, #E3ED43 0%, transparent 70%)",
                  width: 360,
                  height: 360,
                  top: 50,
                  left: 20,
                }}
                aria-hidden="true"
              />
              <ImageWithFallback
                src="/mascot/idle.png"
                alt="Grafly mascot"
                className="mascot-float object-contain relative"
                fallbackBg="transparent"
                fallbackTextColor="#21263F"
                style={{ width: 420, height: 460 }}
              />
            </div>
          </motion.div>

          {/* ── Phone mockup card ── */}
          <motion.div
            variants={fadeUp}
            className="bento-card flex items-center justify-center py-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #21263F 0%, #2D3354 100%)",
              gridColumn: "3 / 4",
              gridRow: "1 / 3",
            }}
          >
            <div className="relative z-10">
              <PhoneMockup
                screenshotSrc="/screenshots/home.png"
                screenshotAlt="Grafly home screen"
                tiltOnHover
              />
            </div>
          </motion.div>

          {/* ── Stats card ── */}
          <motion.div
            variants={fadeUp}
            className="bento-card p-6 flex flex-col justify-around relative overflow-hidden"
            style={{
              background: "#E3ED43",
              gridColumn: "4 / 5",
              gridRow: "1 / 2",
            }}
          >
            {/* Cool yellow mascot peeks corner */}
            <div className="absolute -top-2 -right-2 z-0 opacity-80">
              <ImageWithFallback
                src="/mascot/cool_yellow.png"
                alt=""
                className="object-contain"
                fallbackBg="transparent"
                fallbackTextColor="#21263F"
                style={{ width: 50, height: 50 }}
              />
            </div>
            <div className="relative z-10">
              {[
                { num: t.hero.stat1Number, label: t.hero.stat1Label },
                { num: t.hero.stat2Number, label: t.hero.stat2Label },
                { num: t.hero.stat3Number, label: t.hero.stat3Label },
              ].map(({ num, label }) => (
                <div key={label} className="text-center my-2">
                  <div
                    className="font-display text-[#21263F]"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {num}
                  </div>
                  <div className="text-[#21263F]/70 text-xs font-bold uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Badge card ── */}
          <motion.div
            variants={fadeUp}
            className="bento-card p-5 flex items-center justify-center relative overflow-hidden"
            style={{
              background: "#F5F6FA",
              gridColumn: "4 / 5",
              gridRow: "2 / 3",
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full text-center relative z-10 shadow-sm"
              style={{
                border: "2px solid #00A4FA",
                color: "#0078BB",
                background: "rgba(255,255,255,0.85)",
              }}
            >
              <Sparkles size={14} aria-hidden="true" />
              {t.hero.badge.replace("✨ ", "")}
            </span>
          </motion.div>
        </motion.div>

        <style>{`
          @media (max-width: 767px) {
            #hero .grid {
              grid-template-columns: 1fr !important;
              grid-template-rows: auto !important;
            }
            #hero .grid > * {
              grid-column: auto !important;
              grid-row: auto !important;
              min-height: unset !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
