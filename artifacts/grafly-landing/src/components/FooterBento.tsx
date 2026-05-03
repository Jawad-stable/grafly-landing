import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";
import Squiggle from "./Squiggle";

function StoreBadge({ label, icon }: { label: string; icon: "apple" | "google" }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 bg-white text-[#21263F] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#E3ED43] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
        {/* Footer bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main CTA card */}
          <div
            className="bento-card md:col-span-2 p-10 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden"
            style={{ background: "#21263F", color: "#F5F6FA", minHeight: 240 }}
          >
            <Squiggle
              color="#00A4FA"
              opacity={0.08}
              className="absolute -bottom-4 -end-8"
              width={280}
              height={100}
            />

            <div className="relative z-10 flex-1">
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.03em" }}
              >
                {t.footer.headline}
              </h2>
              <div className="flex flex-wrap gap-3">
                <StoreBadge label={t.footer.ctaAppStore} icon="apple" />
                <StoreBadge label={t.footer.ctaPlayStore} icon="google" />
              </div>
            </div>

            <div className="shrink-0 relative z-10">
              <ImageWithFallback
                src="/mascot/celebrate.png"
                alt="Grafly mascot celebrating"
                className="mascot-float object-contain"
                fallbackBg="rgba(255,255,255,0.08)"
                fallbackTextColor="#F5F6FA"
                style={{ width: 140, height: 160 }}
              />
            </div>
          </div>

          {/* Social card */}
          <div
            className="bento-card p-8 flex flex-col justify-between"
            style={{ background: "#00A4FA", color: "#21263F" }}
          >
            <p className="font-bold text-lg">{t.footer.social}</p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: Twitter, label: "Twitter / X" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-[#21263F] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21263F]"
                  style={{ background: "rgba(33,38,63,0.12)" }}
                  aria-label={label}
                >
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <p
          className="text-center text-sm"
          style={{ opacity: 0.5 }}
        >
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
