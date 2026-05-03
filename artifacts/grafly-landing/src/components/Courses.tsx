import { motion } from "framer-motion";
import { Shapes, Palette, Type, LayoutGrid } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";

const COURSE_CONFIG = [
  { bg: "#00A4FA", text: "#21263F", icon: Shapes },
  { bg: "#7B5CFF", text: "#FFFFFF", icon: Palette, mascot: "/mascot/cool_purple.png" },
  { bg: "#FF7BD0", text: "#21263F", icon: Type },
  { bg: "#E3ED43", text: "#21263F", icon: LayoutGrid },
];

export default function Courses() {
  const { t } = useLang();

  return (
    <section aria-labelledby="courses-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7B5CFF] mb-3">— Curriculum —</span>
          <h2
            id="courses-heading"
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            {t.courses.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.courses.list.map((course, i) => {
            const { bg, text, icon: Icon, mascot } = COURSE_CONFIG[i];
            return (
              <motion.div
                key={course.name}
                className="bento-card p-7 flex flex-col gap-4 relative overflow-hidden"
                style={{ background: bg, color: text, minHeight: 220 }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Color Theory gets the cool_purple mascot */}
                {mascot && (
                  <div className="absolute -top-3 -right-3 opacity-90 z-10" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}>
                    <ImageWithFallback
                      src={mascot}
                      alt=""
                      className="mascot-float object-contain"
                      fallbackBg="transparent"
                      fallbackTextColor={text}
                      style={{ width: 70, height: 70 }}
                    />
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: `${text}1f` }}
                >
                  <Icon size={24} strokeWidth={2.2} color={text} aria-hidden="true" />
                </div>

                <div className="flex-1 relative z-10">
                  <h3
                    className="font-display text-2xl mb-1"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {course.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ opacity: 0.75 }}>
                    {course.lessons} · {course.level}
                  </p>
                </div>

                <a
                  href="#download"
                  className="self-start text-sm font-bold px-4 py-2 rounded-full relative z-10 hover:translate-x-1 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  style={{ background: `${text}1f`, color: text }}
                  aria-label={`Start ${course.name}`}
                >
                  {t.courses.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
