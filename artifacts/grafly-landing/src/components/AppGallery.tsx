import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import PhoneMockup from "./PhoneMockup";

const CARD_CONFIG = [
  { bg: "#00A4FA", src: "/screenshots/home.png", labelColor: "#21263F" },
  { bg: "#FF7BD0", src: "/screenshots/lesson.png", labelColor: "#21263F" },
  { bg: "#E3ED43", src: "/screenshots/color-game.png", labelColor: "#21263F" },
  { bg: "#21263F", src: "/screenshots/drag-drop.png", labelColor: "#F5F6FA" },
];

export default function AppGallery() {
  const { t } = useLang();

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
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BC4090] mb-3">— Gallery —</span>
          <h2
            id="gallery-heading"
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            {t.gallery.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CARD_CONFIG.map((card, i) => (
            <motion.div
              key={card.src}
              className="bento-card py-10 px-4 flex flex-col items-center gap-6 relative overflow-hidden"
              style={{ background: card.bg }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative z-10" style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.25))" }}>
                <PhoneMockup
                  screenshotSrc={card.src}
                  screenshotAlt={t.gallery.labels[i]}
                  tiltOnHover
                />
              </div>
              <span
                className="text-sm font-bold px-4 py-1.5 rounded-full relative z-10"
                style={{
                  background: card.bg === "#21263F" ? "rgba(245,246,250,0.15)" : "rgba(33,38,63,0.12)",
                  color: card.labelColor,
                }}
              >
                {t.gallery.labels[i]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
