import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";

function QuoteMark({ color }: { color: string }) {
  return (
    <svg
      width="72"
      height="56"
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.18 }}
    >
      <path
        d="M0 56V34.4C0 17.067 10.133 5.867 30.4 0L34.4 7.2C24.267 10.667 18.667 17.333 17.6 27.2H30.4V56H0ZM41.6 56V34.4C41.6 17.067 51.733 5.867 72 0L76 7.2C65.867 10.667 60.267 17.333 59.2 27.2H72V56H41.6Z"
        fill={color}
      />
    </svg>
  );
}

export default function Testimonial() {
  const { t } = useLang();

  return (
    <section aria-label="Testimonial" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bento-card p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
          style={{ background: "#BC4090", color: "#FFFFFF", minHeight: 260 }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative quote marks */}
          <div className="absolute top-8 start-8">
            <QuoteMark color="#FFFFFF" />
          </div>

          {/* Quote text */}
          <div className="flex-1 relative z-10 pt-4">
            <blockquote>
              <p
                className="font-display leading-tight mb-6"
                style={{
                  fontSize: "clamp(22px, 3vw, 40px)",
                  letterSpacing: "-0.02em",
                }}
              >
                "{t.testimonial.quote}"
              </p>
              <footer className="text-base font-bold opacity-80">
                {t.testimonial.attribution}
              </footer>
            </blockquote>
          </div>

          {/* Mascot */}
          <div className="shrink-0">
            <ImageWithFallback
              src="/mascot/celebrate.png"
              alt="Grafly mascot celebrating"
              className="mascot-float object-contain"
              fallbackBg="rgba(255,255,255,0.15)"
              fallbackTextColor="#FFFFFF"
              style={{ width: 160, height: 180 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
