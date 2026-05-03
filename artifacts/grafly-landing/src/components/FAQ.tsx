import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";
import Squiggle, { SquigglePattern } from "./Squiggle";

export default function FAQ() {
  const { t } = useLang();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0078BB] mb-3">— Help —</span>
          <h2
            id="faq-heading"
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            {t.faq.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Mascot card */}
          <motion.div
            className="bento-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{ background: "#7B5CFF", color: "#FFFFFF", minHeight: 360 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SquigglePattern color="#FFFFFF" opacity={0.08} size={70} />
            <Squiggle
              color="#FFFFFF"
              opacity={0.22}
              variant="loop"
              width={260}
              height={90}
              className="absolute -top-2 left-0 right-0 mx-auto"
            />
            <div className="relative z-10" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))" }}>
              <ImageWithFallback
                src="/mascot/think.png"
                alt="Grafly mascot thinking"
                className="mascot-float object-contain"
                fallbackBg="rgba(255,255,255,0.15)"
                fallbackTextColor="#FFFFFF"
                style={{ width: 200, height: 220 }}
              />
            </div>
            <p className="font-display text-2xl mt-4 relative z-10" style={{ letterSpacing: "-0.02em" }}>
              Curious about something?
            </p>
            <p className="text-sm mt-2 opacity-80 relative z-10">
              We've got answers.
            </p>
          </motion.div>

          {/* Accordion card */}
          <motion.div
            className="bento-card p-8 md:p-10 md:col-span-2 relative overflow-hidden"
            style={{ background: "var(--color-card)" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <SquigglePattern color="#00A4FA" opacity={0.05} size={60} />
            <Accordion.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="relative z-10"
            >
              {t.faq.items.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b last:border-b-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="flex items-center justify-between w-full py-5 text-start font-bold text-lg gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA] rounded-md hover:text-[#0078BB] transition-colors"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {item.q}
                      <span
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
                        style={{
                          background: openItem === `item-${i}` ? "#21263F" : "#00A4FA",
                          transform: openItem === `item-${i}` ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        {openItem === `item-${i}` ? (
                          <Minus size={14} color="#FFFFFF" strokeWidth={3} aria-hidden="true" />
                        ) : (
                          <Plus size={14} color="#21263F" strokeWidth={3} aria-hidden="true" />
                        )}
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="pb-5 text-base leading-relaxed" style={{ opacity: 0.75 }}>
                      {item.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
