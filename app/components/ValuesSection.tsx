import type { Value } from "@/config";

export function ValuesSection({ values }: { values: Value[] }) {
  return (
    <section id="valores" className="bg-ink py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="dot-sky"></span>
            <span className="dot-red"></span>
            <span className="dot-gold"></span>
            <span className="dot-lime"></span>
            <span className="dot-navy"></span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-white leading-[0.9] mb-6">
            Lo Que<br />Nos Mueve
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
            Los pilares que guían todo lo que hacemos. Cada actividad,
            cada evento y cada encuentro está enraizado en estos principios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {values.map((value) => (
            <div key={value.name}>
              <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-3">
                {value.name}
              </h3>
              <p className="text-white/40 text-sm leading-[1.8]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
