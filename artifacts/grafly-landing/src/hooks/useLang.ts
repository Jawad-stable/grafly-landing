import { useState, useEffect, useCallback } from "react";
import en, { type Translations } from "@/i18n/en";
import ar from "@/i18n/ar";

type Lang = "en" | "ar";

const translations: Record<Lang, Translations> = { en, ar };

let globalLang: Lang = "en";
const listeners = new Set<() => void>();

function notifyAll() {
  listeners.forEach((fn) => fn());
}

export function useLang() {
  const [, forceRender] = useState(0);

  useEffect(() => {
    const cb = () => forceRender((n) => n + 1);
    listeners.add(cb);
    return () => { listeners.delete(cb); };
  }, []);

  const setLang = useCallback((lang: Lang) => {
    globalLang = lang;
    const html = document.documentElement;
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    html.setAttribute("lang", lang);
    try { localStorage.setItem("grafly-lang", lang); } catch {}
    notifyAll();
  }, []);

  return {
    lang: globalLang,
    setLang,
    t: translations[globalLang],
    isRTL: globalLang === "ar",
  };
}

// Initialise from localStorage
if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem("grafly-lang") as Lang | null;
    if (stored === "ar") {
      globalLang = "ar";
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    }
  } catch {}
}
