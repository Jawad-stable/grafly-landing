import { motion } from "framer-motion";
import { Gamepad2, BookOpen, Coffee, Globe, TrendingUp } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";

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
    <section id="features" aria-labelledby="why-heading" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0078BB] mb-3">— Features —</span>
          <h2
            id="why-heading"
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            {t.why.sectionTitle}
          </h2>
        </motion.div>

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
                className="bento-card p-7 flex flex-col gap-4 relative overflow-hidden"
                style={{
                  background: bg,
                  color: text,
                  gridArea: areas[i],
                  border: border ?? "none",
                  minHeight: 200,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: `${text}1a` }}
                >
                  <Icon size={28} strokeWidth={2.2} color={text} aria-hidden="true" />
                </div>
                <div className="relative z-10">
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
