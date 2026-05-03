import { motion } from "framer-motion";
import { Gamepad2, BookOpen, Coffee, Globe, TrendingUp } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const CARD_COLORS = [
  { bg: "#FF7BD0", text: "#21263F", icon: Gamepad2 },
  { bg: "#21263F", text: "#F5F6FA", icon: BookOpen },
  { bg: "#E3ED43", text: "#21263F", icon: Coffee },
  { bg: "#00A4FA", text: "#21263F", icon: Globe },
  { bg: "#F5F6FA", text: "#21263F", icon: TrendingUp, border: "2px solid #21263F" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: "easeOut" },
  }),
};

export default function WhyGrafly() {
  const { t } = useLang();

  return (
    <section id="features" aria-labelledby="why-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="why-heading"
          className="font-display mb-10 text-center"
          style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.why.sectionTitle}
        </motion.h2>

        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateAreas: `
              "a a b"
              "c d e"
            `,
          }}
        >
          {t.why.cards.map((card, i) => {
            const { bg, text, icon: Icon, border } = CARD_COLORS[i];
            const areas = ["a", "b", "c", "d", "e"];
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bento-card p-7 flex flex-col gap-4"
                style={{
                  background: bg,
                  color: text,
                  gridArea: areas[i],
                  border: border ?? "none",
                  minHeight: 180,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${text}18` }}
                >
                  <Icon size={28} strokeWidth={2} color={text} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2" style={{ letterSpacing: "-0.02em" }}>
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ opacity: 0.82 }}>
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 767px) {
            #features .grid {
              grid-template-columns: 1fr !important;
              grid-template-areas: none !important;
            }
            #features .grid > * {
              grid-area: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
