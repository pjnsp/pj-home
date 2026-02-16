import Image from "next/image";
import { PjStripe } from "./shared/PjStripe";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md">
      <PjStripe variant="full" />
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Pastoral Juvenil NSP"
            width={34}
            height={34}
            className="rounded-full"
          />
          <span className="font-display text-sm tracking-wider uppercase text-white">
            Pastoral Juvenil
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[12px] font-medium text-white/50 uppercase tracking-widest">
          <a href="#grupos" className="hover:text-white transition-colors">Grupos</a>
          <a href="#valores" className="hover:text-white transition-colors">Valores</a>
          <a href="#eventos" className="hover:text-white transition-colors">Eventos</a>
          <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
          <a href="#comunidad" className="hover:text-white transition-colors">Comunidad</a>
        </div>
        <a
          href="#contacto"
          className="hidden sm:inline-flex text-[12px] font-semibold uppercase tracking-widest border border-white/30 text-white px-4 py-1.5 hover:bg-white hover:text-ink transition-all"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
