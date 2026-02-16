import type { Stat } from "@/config";
import { PjStripe } from "./shared/PjStripe";
import { ScrollCircle } from "./shared/ScrollCircle";

export function HeroSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-ink hero-texture min-h-screen flex items-center relative overflow-hidden">
      {/* Near-invisible cross backdrop — opacity kept intentionally very low */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.025]">
        <div className="w-px h-full bg-white absolute"></div>
        <div className="h-px w-full bg-white absolute" style={{ top: "38%" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="pj-stripe w-10">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.25em]">
              Parroquia Nuestra Señora de la Paz
            </p>
          </div>

          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase tracking-tight text-white mb-10">
            Pastoral<br />Juvenil
          </h1>

          <div className="max-w-xl mb-16">
            <p className="text-white/50 text-lg leading-relaxed">
              Somos la comunidad de jóvenes de Nuestra Señora de la Paz
              en Ciudad Juárez. Crecemos en fe, servimos con alegría
              y construimos comunidad a través del encuentro con Cristo.
            </p>
          </div>

          <div className="flex flex-wrap gap-16 mb-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl text-white">{stat.value}</p>
                <p className="text-white/25 text-[11px] uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#grupos"
              className="inline-flex items-center gap-3 border border-white/30 text-white text-[13px] font-semibold uppercase tracking-wider px-7 py-3.5 hover:bg-white hover:text-ink transition-all"
            >
              Conoce Nuestros Grupos
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-spinning brand circle — bottom right */}
      <div className="absolute -bottom-32 -right-24 z-0 opacity-60 md:-bottom-40 md:-right-20">
        <ScrollCircle size={480} thickness={3} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <PjStripe variant="full" />
      </div>
    </section>
  );
}
