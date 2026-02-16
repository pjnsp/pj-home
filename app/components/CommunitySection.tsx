import { PjStripe } from "./shared/PjStripe";

export function CommunitySection() {
  return (
    <section id="comunidad" className="bg-ink">
      <div className="grid md:grid-cols-2">
        <div className="photo-placeholder-dark flex items-center justify-center min-h-[500px] md:min-h-0 p-16">
          <svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[160px] opacity-50">
            <circle cx="80" cy="45" r="22" fill="none" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <line x1="80" y1="67" x2="80" y2="130" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <line x1="80" y1="90" x2="55" y2="110" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <line x1="80" y1="90" x2="105" y2="110" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <line x1="80" y1="130" x2="60" y2="170" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <line x1="80" y1="130" x2="100" y2="170" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <circle cx="40" cy="35" r="2" fill="#3BA5DB" opacity="0.6" />
            <circle cx="125" cy="50" r="2" fill="#E23D28" opacity="0.6" />
            <circle cx="35" cy="140" r="2" fill="#F5C518" opacity="0.6" />
            <circle cx="130" cy="130" r="2" fill="#A8C83A" opacity="0.6" />
            <circle cx="80" cy="190" r="2" fill="#1B3A5C" opacity="0.8" />
          </svg>
        </div>

        <div className="p-12 md:p-20 flex flex-col justify-center">
          <div className="w-10 mb-8">
            <PjStripe />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Nuestra gente</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white leading-[0.9] mb-8">
            Discípulo<br />Y Servidor
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md">
            Un servidor es ante todo discípulo de Cristo y servidor de su
            Iglesia, llamado a guiar, acompañar y dar testimonio con
            coherencia de vida.
          </p>

          <div className="space-y-6 mb-12">
            <div className="border-l border-white/10 pl-5">
              <p className="text-white font-semibold text-sm mb-1">Tiene hasta 23 años de edad</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Estudiante de prepa, universitario o joven profesional
                con permanencia hasta los 26 años.
              </p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="text-white font-semibold text-sm mb-1">Vive su fe con los sacramentos</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Ha recibido el Sacramento de la Confirmación y participa
                activamente de la Eucaristía y la vida de gracia.
              </p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="text-white font-semibold text-sm mb-1">Corazón dispuesto al servicio</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Busca dar testimonio con humildad, oración y caridad
                verdadera. No viene solo a recibir — quiere servir.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-[12px] font-semibold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-ink transition-all self-start"
          >
            Quiero Unirme
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
