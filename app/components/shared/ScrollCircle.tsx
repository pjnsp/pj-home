"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const BRAND_COLORS = [
  "#E23D28", // pj-red
  "#A8C83A", // pj-lime
  "#1B3A5C", // pj-navy
  "#3BA5DB", // pj-sky
  "#F5C518", // pj-gold
];

function buildConicGradient(colors: string[]): string {
  const segmentAngle = 360 / colors.length;
  const stops = colors.map((color, index) => {
    const start = segmentAngle * index;
    const end = segmentAngle * (index + 1);
    return `${color} ${start}deg ${end}deg`;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

export function ScrollCircle({
  size = 480,
  thickness = 3,
}: {
  size?: number;
  thickness?: number;
}) {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!ringRef.current) return;
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.15;
        ringRef.current.style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const conicGradient = buildConicGradient(BRAND_COLORS);
  const innerSize = size - thickness * 2;
  const logoSize = Math.round(size * 0.95);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Spinning ring */}
      <div
        ref={ringRef}
        className="absolute inset-0 will-change-transform"
        style={{
          borderRadius: "50%",
          background: conicGradient,
        }}
      >
        <div
          className="absolute bg-ink"
          style={{
            width: innerSize,
            height: innerSize,
            borderRadius: "50%",
            top: thickness,
            left: thickness,
          }}
        />
      </div>

      {/* Static logo — does not spin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/nsp-logo-white.png"
          alt="Nuestra Señora de la Paz"
          width={logoSize}
          height={logoSize}
          className="opacity-[0.4] select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
