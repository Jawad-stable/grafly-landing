import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLang } from "@/hooks/useLang";
import ImageWithFallback from "./ImageWithFallback";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.lessons, href: "#lessons" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.download, href: "#download" },
  ];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled
          ? "color-mix(in srgb, var(--color-surface) 85%, transparent)"
          : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(33,38,63,0.08)" : "none",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA] rounded-md">
          <ImageWithFallback
            src="/logo/icon_colored.png"
            alt="Grafly icon"
            className="w-8 h-8 rounded-xl object-contain"
            fallbackBg="#00A4FA"
            fallbackTextColor="#21263F"
          />
          <ImageWithFallback
            src="/logo/wordmark_primary.png"
            alt="Grafly"
            className="h-6 w-auto object-contain hidden sm:block"
            fallbackBg="transparent"
            fallbackTextColor="#00A4FA"
            style={{ maxWidth: 100 }}
          />
          <span className="sm:hidden font-display text-lg text-[#00A4FA]">Grafly</span>
        </a>

        {/* Center links — desktop */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-[#00A4FA]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[#00A4FA] text-[#00A4FA] hover:bg-[#00A4FA] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
            aria-label={`Switch to ${lang === "en" ? "Arabic" : "English"}`}
          >
            {t.nav.langToggle}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#00A4FA]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2.5} />
            ) : (
              <Moon size={18} strokeWidth={2.5} />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#00A4FA]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1" style={{ background: "var(--color-surface)" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-sm font-medium hover:bg-[#00A4FA]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A4FA]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
