import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";
import Squiggle, { SquigglePattern } from "./Squiggle";

function QuoteMark({ color }: { color: string }) {
  return (
    <svg
      width="100"
      height="76"
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.22 }}
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
          className="bento-card p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #BC4090 0%, #FF7BD0 100%)",
            color: "#FFFFFF",
            minHeight: 320,
          }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SquigglePattern color="#FFFFFF" opacity={0.07} size={80} />
          <Squiggle
            color="#FFFFFF"
            opacity={0.18}
            variant="loop"
            width={400}
            height={130}
            className="absolute top-0 left-0 right-0 -translate-y-4"
          />
          <Squiggle
            color="#E3ED43"
            opacity={0.3}
            variant="scribble"
            width={250}
            height={80}
            className="absolute bottom-0 left-12"
          />

          {/* Decorative quote marks */}
          <div className="absolute top-10 start-10 z-0">
            <QuoteMark color="#FFFFFF" />
          </div>

          {/* Quote text */}
          <div className="flex-1 relative z-10 pt-6">
            <blockquote>
              <p
                className="font-display leading-tight mb-6"
                style={{
                  fontSize: "clamp(24px, 3.2vw, 44px)",
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;{t.testimonial.quote}&rdquo;
              </p>
              <footer className="text-base font-bold opacity-90 flex items-center gap-3">
                <span className="inline-block w-8 h-0.5 bg-white/60 rounded-full" aria-hidden="true" />
                {t.testimonial.attribution}
              </footer>
            </blockquote>
          </div>

          {/* Mascot */}
          <div className="shrink-0 relative z-10" style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.25))" }}>
            <ImageWithFallback
              src="/mascot/celebrate.png"
              alt="Grafly mascot celebrating"
              className="mascot-float object-contain"
              fallbackBg="rgba(255,255,255,0.15)"
              fallbackTextColor="#FFFFFF"
              style={{ width: 200, height: 220 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
