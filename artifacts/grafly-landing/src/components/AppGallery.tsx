import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import PhoneMockup from "./PhoneMockup";
import Squiggle from "./Squiggle";

const FEATURED = 1;

const GALLERY = [
  {
    src: "/screenshots/home.png",
    bg: "linear-gradient(140deg, #00A4FA 0%, #0078BB 100%)",
    chipBg: "rgba(255,255,255,0.18)",
    chipColor: "#FFFFFF",
    eyebrow: "#E3ED43",
    tilt: -3,
  },
  {
    src: "/screenshots/lesson.png",
    bg: "linear-gradient(140deg, #FF7BD0 0%, #BC4090 100%)",
    chipBg: "rgba(255,255,255,0.2)",
    chipColor: "#FFFFFF",
    eyebrow: "#E3ED43",
    tilt: 0,
  },
  {
    src: "/screenshots/color-game.png",
    bg: "linear-gradient(140deg, #E3ED43 0%, #BCC130 100%)",
    chipBg: "rgba(33,38,63,0.14)",
    chipColor: "#21263F",
    eyebrow: "#BC4090",
    tilt: 3,
  },
  {
    src: "/screenshots/drag-drop.png",
    bg: "linear-gradient(140deg, #21263F 0%, #2D3354 100%)",
    chipBg: "rgba(245,246,250,0.14)",
    chipColor: "#F5F6FA",
    eyebrow: "#00A4FA",
    tilt: -3,
  },
];

export default function AppGallery() {
  const { t } = useLang();
  const featured = GALLERY[FEATURED];

  return (
    <section id="lessons" aria-labelledby="gallery-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BC4090] mb-3">
            — Gallery —
          </span>
          <h2
            id="gallery-heading"
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            {t.gallery.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          {/* ── Featured large card (Lesson) ── */}
          <motion.div
            className="bento-card col-span-2 md:col-span-7 md:row-span-2 relative overflow-hidden flex items-end justify-center"
            style={{ background: featured.bg, minHeight: 560, padding: "32px 24px 0" }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Squiggle
              color="#FFFFFF"
              opacity={0.12}
              variant="loop"
              width={420}
              height={130}
              className="absolute -top-4 start-0"
            />

            {/* Eyebrow + label, top-start */}
            <div className="absolute top-7 start-7 z-10">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: featured.eyebrow }}
              >
                — Featured screen —
              </span>
              <h3
                className="font-display mt-2"
                style={{
                  fontSize: "clamp(32px, 3.4vw, 48px)",
                  color: featured.chipColor,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                {t.gallery.labels[FEATURED]}
              </h3>
            </div>

            {/* The phone — peeks from the bottom of the card */}
            <div
              style={{
                filter: "drop-shadow(0 0 60px rgba(255,255,255,0.55)) drop-shadow(0 30px 50px rgba(255,255,255,0.25))",
                transform: "perspective(900px) rotateY(-4deg) rotateX(3deg)",
                transformOrigin: "bottom center",
                marginBottom: -40,
              }}
            >
              <PhoneMockup
                screenshotSrc={featured.src}
                screenshotAlt={t.gallery.labels[FEATURED]}
                width={260}
                height={520}
              />
            </div>
          </motion.div>

          {/* ── 3 supporting cards ── */}
          {GALLERY.map((card, i) => {
            if (i === FEATURED) return null;
            return (
              <motion.div
                key={card.src}
                className="bento-card col-span-1 md:col-span-5 relative overflow-hidden flex items-center"
                style={{ background: card.bg, minHeight: 270, padding: "20px 24px" }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              >
                {/* Chip label */}
                <span
                  className="absolute top-5 start-5 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full z-10"
                  style={{
                    background: card.chipBg,
                    color: card.chipColor,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  {t.gallery.labels[i]}
                </span>

                {/* Phone, slightly tilted, end-aligned */}
                <div
                  className="ms-auto"
                  style={{
                    filter: "drop-shadow(0 0 40px rgba(255,255,255,0.5)) drop-shadow(0 18px 28px rgba(255,255,255,0.22))",
                    transform: `perspective(800px) rotateZ(${card.tilt}deg) rotateY(-4deg)`,
                  }}
                >
                  <PhoneMockup
                    screenshotSrc={card.src}
                    screenshotAlt={t.gallery.labels[i]}
                    width={150}
                    height={300}
                  />
                </div>

                {/* Decorative dot pattern in empty space */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-5 start-5 w-20 h-20 rounded-full opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${card.chipColor} 1.5px, transparent 2px) 0 0 / 12px 12px`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
