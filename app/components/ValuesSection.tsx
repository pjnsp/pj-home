import type { Value } from "@/config";
import { ValuesCollage } from "./ValuesCollage";

export function ValuesSection({ values }: { values: Value[] }) {
  return (
    <section id="valores" className="bg-ink py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="dot-sky" />
            <span className="dot-red" />
            <span className="dot-gold" />
            <span className="dot-lime" />
            <span className="dot-navy" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-white leading-[0.9] mb-5">
            Nuestros Valores
          </h2>
          <p className="text-white/30 text-sm max-w-md mx-auto leading-relaxed">
            Los principios que guían todo lo que hacemos. Explora cada uno.
          </p>
        </div>

        {/* Desktop hint */}
        <p className="text-center text-white/15 text-[11px] uppercase tracking-[0.2em] mb-10 hidden md:block">
          Pasa el cursor sobre cada valor para conocer más
        </p>
        {/* Mobile hint */}
        <p className="text-center text-white/15 text-[11px] uppercase tracking-[0.2em] mb-6 md:hidden">
          Toca un valor para conocer más
        </p>

        <ValuesCollage values={values} />
      </div>
    </section>
  );
}
