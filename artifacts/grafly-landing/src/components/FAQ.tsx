import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/hooks/useLang";

export default function FAQ() {
  const { t } = useLang();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="faq-heading"
          className="font-display mb-10 text-center"
          style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.faq.sectionTitle}
        </motion.h2>

        <motion.div
          className="bento-card p-8 md:p-12"
          style={{ background: "var(--color-surface)" }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
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
                    className="flex items-center justify-between w-full py-5 text-start font-bold text-lg gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA] rounded-md"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {item.q}
                    <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#00A4FA" }}>
                      {openItem === `item-${i}` ? (
                        <Minus size={14} color="#21263F" strokeWidth={3} aria-hidden="true" />
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
    </section>
  );
}
