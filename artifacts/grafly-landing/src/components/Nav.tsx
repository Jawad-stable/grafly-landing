import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "features", "lessons", "faq", "download"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: t.nav.features, href: "#features", id: "features" },
    { label: t.nav.lessons, href: "#lessons", id: "lessons" },
    { label: t.nav.faq, href: "#faq", id: "faq" },
  ];

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "blur(0px)",
          background: scrolled
            ? "color-mix(in srgb, var(--color-background) 75%, transparent)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid color-mix(in srgb, var(--color-foreground) 8%, transparent)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(33,38,63,0.06)" : "none",
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18"
          style={{ height: scrolled ? 60 : 72 }}
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <a
            href="#hero"
            className="group flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A4FA] rounded-xl"
            aria-label="Grafly home"
          >
            <div className="relative">
              <ImageWithFallback
                src="/logo/icon_colored.png"
                alt=""
                className="w-9 h-9 rounded-xl object-contain transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
                fallbackBg="#00A4FA"
                fallbackTextColor="#21263F"
              />
              {/* sparkle dot */}
              <span
                className="absolute -top-0.5 -end-0.5 w-2 h-2 rounded-full"
                style={{ background: "#E3ED43", boxShadow: "0 0 0 2px var(--color-background)" }}
                aria-hidden="true"
              />
            </div>
            <ImageWithFallback
              src="/logo/wordmark_primary.png"
              alt="Grafly"
              className="h-6 w-auto object-contain hidden sm:block"
              fallbackBg="transparent"
              fallbackTextColor="#00A4FA"
              style={{ maxWidth: 100 }}
            />
            <span className="sm:hidden font-display text-xl text-[#00A4FA] tracking-tight">
              Grafly
            </span>
          </a>

          {/* ── Center pill of links (desktop) ── */}
          <ul
            className="hidden md:flex items-center gap-0.5 p-1 rounded-full"
            role="list"
            style={{
              background: "color-mix(in srgb, var(--color-foreground) 5%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-foreground) 6%, transparent)",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className="relative px-4 py-1.5 rounded-full text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA] inline-block"
                    style={{
                      color: isActive ? "#21263F" : "var(--color-foreground)",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "#00A4FA", zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Download CTA (desktop) */}
            <a
              href="#download"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold bg-[#21263F] text-white hover:bg-[#0078BB] hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA] shadow-sm"
            >
              <Download size={14} strokeWidth={2.5} aria-hidden="true" />
              {t.nav.download}
            </a>

            {/* Divider */}
            <span
              className="hidden md:inline-block w-px h-6 mx-1"
              style={{ background: "color-mix(in srgb, var(--color-foreground) 12%, transparent)" }}
              aria-hidden="true"
            />

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="relative px-3 py-1.5 rounded-full text-xs font-black tracking-wide hover:bg-[#00A4FA]/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
              style={{
                border: "1.5px solid #00A4FA",
                color: "#00A4FA",
              }}
              aria-label={`Switch to ${lang === "en" ? "Arabic" : "English"}`}
            >
              <span className="flex items-center gap-1">
                <span className={lang === "en" ? "opacity-100" : "opacity-30"}>EN</span>
                <span className="opacity-30">/</span>
                <span className={lang === "ar" ? "opacity-100" : "opacity-30"}>AR</span>
              </span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#00A4FA]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA] relative overflow-hidden"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {theme === "dark" ? (
                      <Sun size={18} strokeWidth={2.5} />
                    ) : (
                      <Moon size={18} strokeWidth={2.5} />
                    )}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#00A4FA]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-3 mt-1 rounded-3xl p-3 shadow-2xl border"
            style={{
              background: "var(--color-background)",
              borderColor: "color-mix(in srgb, var(--color-foreground) 10%, transparent)",
            }}
          >
            <ul className="flex flex-col gap-1" role="list">
              {[...navLinks, { label: t.nav.download, href: "#download", id: "download" }].map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
                      style={{
                        background: isActive ? "#00A4FA" : "transparent",
                        color: isActive ? "#21263F" : "var(--color-foreground)",
                      }}
                    >
                      {link.label}
                      <span
                        className="text-xs"
                        style={{ opacity: isActive ? 1 : 0.4 }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
