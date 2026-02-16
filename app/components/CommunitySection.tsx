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
            Joven, Inquieto,<br />Con Ganas De Más
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md">
            No importa quién seas o de dónde vengas. Si tienes entre 15 y
            30 años y quieres crecer en fe y en comunidad, hay un lugar
            para ti aquí.
          </p>

          <div className="space-y-6 mb-12">
            <div className="border-l border-white/10 pl-5">
              <p className="text-white font-semibold text-sm mb-1">Tiene entre 15 y 30 años</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Estudiante de prepa, universitario o joven profesional.
              </p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="text-white font-semibold text-sm mb-1">Busca algo más que rutina</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Quiere profundizar en la fe, cuestionar y encontrar respuestas.
              </p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="text-white font-semibold text-sm mb-1">Quiere pertenecer y servir</p>
              <p className="text-white/35 text-sm leading-relaxed">
                No viene solo a recibir — quiere aportar sus talentos.
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
