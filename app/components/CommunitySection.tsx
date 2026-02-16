import Image from "next/image";
import { PjStripe } from "./shared/PjStripe";

export function CommunitySection() {
  return (
    <section id="comunidad" className="bg-ink">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[500px] md:min-h-0 overflow-hidden">
          <Image
            src="/perfil-cover.jpg"
            alt="Comunidad de la Pastoral Juvenil"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid-small" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.08" />
              </pattern>
              <pattern id="grid-color" width="600" height="600" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                <line x1="0"   y1="0" x2="0"   y2="600" stroke="#3BA5DB" strokeWidth="1" opacity="0.25" />
                <line x1="120" y1="0" x2="120" y2="600" stroke="#E23D28" strokeWidth="1" opacity="0.25" />
                <line x1="240" y1="0" x2="240" y2="600" stroke="#1B3A5C" strokeWidth="1" opacity="0.25" />
                <line x1="360" y1="0" x2="360" y2="600" stroke="#F5C518" strokeWidth="1" opacity="0.25" />
                <line x1="480" y1="0" x2="480" y2="600" stroke="#A8C83A" strokeWidth="1" opacity="0.25" />
                <line x1="0" y1="0"   x2="600" y2="0"   stroke="#3BA5DB" strokeWidth="1" opacity="0.25" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="#E23D28" strokeWidth="1" opacity="0.25" />
                <line x1="0" y1="240" x2="600" y2="240" stroke="#1B3A5C" strokeWidth="1" opacity="0.25" />
                <line x1="0" y1="360" x2="600" y2="360" stroke="#F5C518" strokeWidth="1" opacity="0.25" />
                <line x1="0" y1="480" x2="600" y2="480" stroke="#A8C83A" strokeWidth="1" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-small)" />
            <rect width="100%" height="100%" fill="url(#grid-color)" />
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
