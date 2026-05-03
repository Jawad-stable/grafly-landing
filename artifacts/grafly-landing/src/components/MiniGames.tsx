import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

/* ── Color Match ─────────────────────────────────────────────── */
const SWATCHES = ["#00A4FA", "#E3ED43", "#FF7BD0", "#7B5CFF"];
const CORRECT_INDEX = 2;

function ColorMatch() {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold uppercase tracking-wider opacity-70">
        {t.games.colorMatch.instruction}
      </p>
      <div className="flex gap-2 flex-wrap">
        {SWATCHES.map((color, i) => (
          <button
            key={color}
            onClick={() => setSelected(i)}
            className="w-10 h-10 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform"
            style={{
              background: color,
              transform: selected === i ? "scale(1.15)" : "scale(1)",
              boxShadow: selected === i ? `0 0 0 3px white, 0 0 0 5px ${color}` : "none",
            }}
            aria-label={`Color option ${i + 1}`}
            aria-pressed={selected === i}
          />
        ))}
      </div>
      {selected !== null && (
        <p className="text-sm font-bold">
          {selected === CORRECT_INDEX ? "Correct!" : "Try again"}
        </p>
      )}
    </div>
  );
}

/* ── Contrast Tuner ──────────────────────────────────────────── */
function ContrastTuner() {
  const { t } = useLang();
  const [value, setValue] = useState(50);
  const textOpacity = 0.2 + (value / 100) * 0.8;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold transition-all" style={{ opacity: textOpacity }} aria-live="polite">
        The quick brown fox
      </p>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-white"
        aria-label={t.games.contrastTuner.instruction}
      />
      <p className="text-xs font-bold opacity-70">
        {t.games.contrastTuner.label} {value}%
      </p>
    </div>
  );
}

/* ── Palette Builder ─────────────────────────────────────────── */
const PALETTE_COLORS = ["#00A4FA", "#E3ED43", "#FF7BD0", "#7B5CFF", "#21263F", "#F5F6FA"];

function PaletteBuilder() {
  const { t } = useLang();
  const [wells, setWells] = useState([0, 2, 4]);

  const cycle = (i: number) =>
    setWells((prev) => {
      const next = [...prev];
      next[i] = (next[i] + 1) % PALETTE_COLORS.length;
      return next;
    });

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold uppercase tracking-wider opacity-70">
        {t.games.paletteBuilder.instruction}
      </p>
      <div className="flex gap-2">
        {wells.map((colorIdx, i) => (
          <button
            key={i}
            onClick={() => cycle(i)}
            className="w-12 h-12 rounded-2xl border-2 border-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-110"
            style={{ background: PALETTE_COLORS[colorIdx] }}
            aria-label={`Palette well ${i + 1}, click to change`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Drag Match ──────────────────────────────────────────────── */
function DragMatch() {
  const { t } = useLang();
  const terms = t.games.dragMatch.terms;
  const defs = t.games.dragMatch.defs;
  const [selected, setSelected] = useState<number | null>(null);
  const [matched, setMatched] = useState<Record<number, number>>({});

  const handleTermClick = (i: number) => setSelected(i);
  const handleDefClick = (defIdx: number) => {
    if (selected !== null && !(selected in matched)) {
      setMatched((prev) => ({ ...prev, [selected]: defIdx }));
      setSelected(null);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-bold uppercase tracking-wider opacity-70">
        {t.games.dragMatch.instruction}
      </p>
      <div className="flex gap-2">
        <div className="flex flex-col gap-1.5 flex-1">
          {terms.map((term, i) => {
            const isMatched = i in matched;
            return (
              <button
                key={term}
                onClick={() => handleTermClick(i)}
                disabled={isMatched}
                className="text-xs font-bold px-2 py-1.5 rounded-xl text-start transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{
                  background: isMatched
                    ? "rgba(100,200,100,0.3)"
                    : selected === i
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.15)",
                  border: selected === i ? "2px solid white" : "2px solid transparent",
                }}
                aria-pressed={selected === i}
              >
                {term}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          {defs.map((def, i) => {
            const isMatched = Object.values(matched).includes(i);
            return (
              <button
                key={def}
                onClick={() => handleDefClick(i)}
                disabled={isMatched || selected === null}
                className="text-xs px-2 py-1.5 rounded-xl text-start transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{
                  background: isMatched ? "rgba(100,200,100,0.3)" : "rgba(255,255,255,0.1)",
                  border: "2px solid transparent",
                }}
              >
                {def}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────── */
const GAME_CARDS = [
  {
    bg: "#FF7BD0",
    text: "#21263F",
    getTitle: (t: ReturnType<typeof useLang>["t"]) => t.games.colorMatch.title,
    getBody: (t: ReturnType<typeof useLang>["t"]) => t.games.colorMatch.body,
    Demo: ColorMatch,
  },
  {
    bg: "linear-gradient(160deg, #21263F 0%, #2D3354 100%)",
    text: "#F5F6FA",
    getTitle: (t: ReturnType<typeof useLang>["t"]) => t.games.contrastTuner.title,
    getBody: (t: ReturnType<typeof useLang>["t"]) => t.games.contrastTuner.body,
    Demo: ContrastTuner,
  },
  {
    bg: "#E3ED43",
    text: "#21263F",
    getTitle: (t: ReturnType<typeof useLang>["t"]) => t.games.paletteBuilder.title,
    getBody: (t: ReturnType<typeof useLang>["t"]) => t.games.paletteBuilder.body,
    Demo: PaletteBuilder,
  },
  {
    bg: "#00A4FA",
    text: "#21263F",
    getTitle: (t: ReturnType<typeof useLang>["t"]) => t.games.dragMatch.title,
    getBody: (t: ReturnType<typeof useLang>["t"]) => t.games.dragMatch.body,
    Demo: DragMatch,
  },
];

export default function MiniGames() {
  const { t } = useLang();

  return (
    <section aria-labelledby="games-heading" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7BD0] mb-3">— Play & learn —</span>
          <h2
            id="games-heading"
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            {t.games.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GAME_CARDS.map(({ bg, text, getTitle, getBody, Demo }, i) => (
            <motion.div
              key={i}
              className="bento-card p-6 flex flex-col gap-4 relative overflow-hidden"
              style={{ background: bg, color: text, minHeight: 280 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative z-10">
                <h3 className="font-display text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                  {getTitle(t)}
                </h3>
                <p className="text-sm" style={{ opacity: 0.78 }}>
                  {getBody(t)}
                </p>
              </div>
              <div className="mt-auto relative z-10">
                <Demo />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
