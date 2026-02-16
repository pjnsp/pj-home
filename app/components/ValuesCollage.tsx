"use client";

import { useState, useCallback, useMemo, useSyncExternalStore } from "react";
import type { Value } from "@/config";

// ─── Tier config ─────────────────────────────────────────────────────
type Tier = Value["tier"];

const TIER_SIZE_RANGES: Record<Tier, { min: number; max: number }> = {
  1: { min: 3.5, max: 5.5 },
  2: { min: 2.2, max: 3.5 },
  3: { min: 1.5, max: 2.2 },
};

// ─── Layout types ────────────────────────────────────────────────────
interface LayoutItem {
  name: string;
  fontSize: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function generateLayout(values: Value[]): LayoutItem[] {
  const sorted = [
    ...shuffleArray(values.filter((v) => v.tier === 1)),
    ...shuffleArray(values.filter((v) => v.tier === 2)),
    ...shuffleArray(values.filter((v) => v.tier === 3)),
  ];

  return sorted.map((value) => {
    const { min, max } = TIER_SIZE_RANGES[value.tier];
    const fontSize = randomBetween(min, max);
    return { name: value.name, fontSize };
  });
}

// ─── Client detection ────────────────────────────────────────────────
const noopSubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsClient() {
  return useSyncExternalStore(
    noopSubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
}

// ─── Component ───────────────────────────────────────────────────────
export function ValuesCollage({ values }: { values: Value[] }) {
  const isClient = useIsClient();
  const layout = useMemo(
    () => (isClient ? generateLayout(values) : null),
    [isClient, values],
  );

  const defaultName = values[0]?.name ?? "";
  const [activeName, setActiveName] = useState(defaultName);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const displayedName = hoveredName ?? activeName;
  const displayedValue =
    values.find((v) => v.name === displayedName) ?? values[0];

  const handleWordClick = useCallback(
    (name: string) => {
      setActiveName((previous) =>
        previous === name ? defaultName : name,
      );
    },
    [defaultName],
  );

  const handleWordMouseEnter = useCallback((name: string) => {
    setHoveredName(name);
  }, []);

  const handleWordMouseLeave = useCallback(() => {
    setHoveredName(null);
  }, []);

  if (!layout) {
    return <div className="py-10" style={{ minHeight: 200 }} />;
  }

  return (
    <>
      {/* Word collage */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 md:gap-x-6 md:gap-y-2 py-5">
        {layout.map((item) => {
          const isHighlighted = item.name === displayedName;

          return (
            <span
              key={item.name}
              className="font-display uppercase tracking-[0.02em] cursor-pointer select-none leading-none whitespace-nowrap"
              style={{
                fontSize: `clamp(${item.fontSize * 0.5}rem, ${item.fontSize * 0.8}vw + 0.5rem, ${item.fontSize}rem)`,
                color: isHighlighted
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.12)",
                transform: isHighlighted ? "scale(1.03)" : "scale(1)",
                transition: "color 0.3s ease, transform 0.2s ease",
              }}
              onMouseEnter={() => handleWordMouseEnter(item.name)}
              onMouseLeave={handleWordMouseLeave}
              onClick={() => handleWordClick(item.name)}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      {/* Description panel */}
      <div className="border-t border-white/10 mt-10 pt-10 max-w-lg mx-auto text-center">
        <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-3">
          {displayedValue.name}
        </h3>
        <p className="text-white/40 text-sm md:text-base leading-relaxed">
          {displayedValue.description}
        </p>
        <div className="pj-stripe w-10 mx-auto mt-6">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
}
