import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import PhoneMockup from "./PhoneMockup";

const CARD_CONFIG = [
  { bg: "#00A4FA", src: "/screenshots/home.png" },
  { bg: "#FF7BD0", src: "/screenshots/lesson.png" },
  { bg: "#E3ED43", src: "/screenshots/color-game.png" },
  { bg: "#21263F", src: "/screenshots/drag-drop.png" },
];

export default function AppGallery() {
  const { t } = useLang();

  return (
    <section id="lessons" aria-labelledby="gallery-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="gallery-heading"
          className="font-display mb-10 text-center"
          style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.gallery.sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CARD_CONFIG.map((card, i) => (
            <motion.div
              key={card.src}
              className="bento-card py-10 px-4 flex flex-col items-center gap-6"
              style={{ background: card.bg }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PhoneMockup
                screenshotSrc={card.src}
                screenshotAlt={t.gallery.labels[i]}
                tiltOnHover
              />
              <span
                className="text-sm font-bold px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: card.bg === "#21263F" ? "#F5F6FA" : "#21263F",
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
