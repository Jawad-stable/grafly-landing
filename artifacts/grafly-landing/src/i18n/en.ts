const en = {
  nav: {
    features: "Features",
    lessons: "Lessons",
    faq: "FAQ",
    download: "Download",
    langToggle: "AR",
  },
  hero: {
    badge: "✨ New: Color Theory course",
    headline: "Design fundamentals,\none mini-game\nat a time.",
    subhead: "Stop watching tutorials. Start learning by playing.",
    ctaAppStore: "Download on App Store",
    ctaPlayStore: "Get it on Google Play",
    stat1Number: "5",
    stat1Label: "Mini-games",
    stat2Number: "6",
    stat2Label: "Modules",
    stat3Number: "+2",
    stat3Label: "Languages",
  },
  why: {
    sectionTitle: "Why Grafly?",
    cards: [
      {
        title: "Real mini-games, not flashcards",
        body: "Drag, match, tune — every concept becomes an interaction you can feel.",
      },
      {
        title: "Learn the why behind every rule",
        body: "Rules without reasons are just trivia. We explain the logic every time.",
      },
      {
        title: "Fits in a coffee break",
        body: "Five minutes a day is all it takes. No fluff, no filler.",
      },
      {
        title: "Bilingual EN + AR",
        body: "Full Arabic support with proper RTL layout. First-class, not an afterthought.",
      },
      {
        title: "Progress that sticks",
        body: "Spaced repetition baked in. You'll actually remember this stuff.",
      },
    ],
  },
  gallery: {
    sectionTitle: "Inside the app",
    labels: ["Home", "Lesson", "Color Game", "Drag & Drop"],
  },
  games: {
    sectionTitle: "Pick your game",
    colorMatch: {
      title: "Color Match",
      body: "Spot the exact hue. Train your eye.",
      instruction: "Tap the matching color",
    },
    contrastTuner: {
      title: "Contrast Tuner",
      body: "Feel the difference between AA and AAA.",
      instruction: "Drag to adjust contrast",
      label: "Contrast:",
    },
    paletteBuilder: {
      title: "Palette Builder",
      body: "Build harmonious palettes from scratch.",
      instruction: "Tap wells to cycle colors",
    },
    dragMatch: {
      title: "Drag Match",
      body: "Connect design terms to their definitions.",
      instruction: "Match each term",
      terms: ["Kerning", "Leading", "Tracking"],
      defs: ["Space between lines", "Space between letters", "Letter pair spacing"],
    },
  },
  courses: {
    sectionTitle: "Start learning",
    list: [
      { name: "Design Principles", lessons: "12 lessons", level: "Beginner" },
      { name: "Color Theory", lessons: "9 lessons", level: "Beginner" },
      { name: "Typography", lessons: "8 lessons", level: "Intermediate" },
      { name: "Layout", lessons: "10 lessons", level: "Intermediate" },
    ],
    cta: "Start →",
  },
  testimonial: {
    quote:
      "I finally understand why some designs just feel right. Grafly taught me that in a week.",
    attribution: "— Layla, UX Student",
  },
  faq: {
    sectionTitle: "Got questions?",
    items: [
      {
        q: "Is Grafly free?",
        a: "Grafly is free to download with a generous free tier. Pro unlocks all courses and games.",
      },
      {
        q: "Do I need design experience?",
        a: "None whatsoever. We start from zero and build up fast.",
      },
      {
        q: "Is it available in Arabic?",
        a: "Yes! Grafly is fully bilingual — switch languages anytime in the app or right here on this page.",
      },
      {
        q: "How long are the lessons?",
        a: "Most lessons fit in under 5 minutes. Perfect for a coffee break or a commute.",
      },
      {
        q: "What platforms?",
        a: "iOS and Android. Web version coming soon.",
      },
      {
        q: "Is RTL supported in the app?",
        a: "Absolutely. The whole UI flips for Arabic users.",
      },
    ],
  },
  footer: {
    headline: "Ready to design?",
    ctaAppStore: "Download on App Store",
    ctaPlayStore: "Get it on Google Play",
    social: "Follow us for design tips",
    copyright: "© 2025 Grafly. Made with love for designers everywhere.",
  },
} as const;

export type Translations = typeof en;
export default en;
